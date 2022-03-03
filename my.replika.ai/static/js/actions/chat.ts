import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  WsEventNames,
  MetricsEvents,
} from '../types/enums';
import { sendMessage } from '../utils/websocket';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import {
  HistoryIncomingPayload,
  MessageIncomingPayload,
} from '../types/websocket';
import {
  Chat,
  MediaPreviewMap,
  MessageActionType,
  OutcomingMessageOptions,
  MessageOutcomingPayload,
} from '../types/models';
import { API_BASE_URL } from '../utils/constants';
import guid from 'simple-guid';
import * as A from '../types/actions';
import { logEvent } from '../utils/metrics';
import {
  requestAction,
  successAction,
  errorAction,
  apiAction,
  wsAction,
} from '../utils/asyncAction';
import { setHintStatus, setNewThought } from './ui';
import { uploadImage } from './image';

const IMAGE_SIZE_LIMIT = 1200000;

export const getHistory = (
  lastMessageId: string | undefined,
  limit: number,
  invalidate: boolean
): DA<HistoryIncomingPayload> => async (dispatch, getState) => {
  const state = getState();
  const { chatId } = state.ws.persist;

  if (!chatId) {
    throw Error('no chat id');
  }

  const params = { chatId, lastMessageId, limit, invalidate };

  return wsAction<A.GetHistory>(AAT.WsHistory, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.History,
          payload: {
            chat_id: chatId,
            limit,
            last_message_id: lastMessageId,
          },
        },
        state
      ),
  });
};

export const setMessageReaction = (
  messageId: string,
  reaction: MessageActionType | undefined
): DA<{}> => async (dispatch, getState) => {
  const state = getState();
  const { chatId } = state.ws.persist;
  const { hints } = state.ui.persist;

  if (!chatId) {
    throw Error('no chat id');
  }

  const params = { messageId, reaction, chatId };

  return wsAction<A.SetMessageReaction>(
    AAT.WsSetMessageReaction,
    dispatch,
    params,
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.MessageReaction,
            payload: reaction
              ? {
                  addReaction: {
                    message_id: messageId,
                    chat_id: chatId,
                    reaction,
                  },
                }
              : {
                  removeReaction: messageId,
                },
          },
          state
        ),
      onSuccess: () => {
        if (reaction) {
          showAndHideMessageActions(dispatch, getState, messageId);
        }

        if (reaction === 'Upvote') {
          logEvent(MetricsEvents.Upvote, {
            mode: 'text',
          });
        } else if (reaction === 'Downvote') {
          logEvent(MetricsEvents.Downvote, {
            mode: 'text',
          });
        }

        if (hints.messageReaction === 'needed' && reaction) {
          dispatch(setHintMessageReaction(messageId, reaction));
          dispatch(setHintStatus('messageReaction', 'shown'));
        }
      },
    }
  );
};

export const setHintMessageReaction = (
  messageId: string,
  reaction: MessageActionType
): A.ChatAction => ({
  type: AT.SetHintMessageReaction,
  messageId,
  reaction,
});

export const getPersonalBotChat = (): DA<Chat> => async (
  dispatch,
  getState
) => {
  const endpoint = `${API_BASE_URL}/personal_bot_chat`;
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetPersonalBotChat>(
    AAT.GetPersonalBotChat,
    dispatch,
    {},
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: (chat) => {
        const state = getState();
        if (chat.replika_thought?.text !== state.chat.thought?.text) {
          dispatch(setNewThought(true));
        }
      },
    }
  );
};

export const createChat = (): DA<Chat> => async (dispatch, getState) => {
  const state = getState();
  const { userId } = state.auth.persist;

  const endpoint = `${API_BASE_URL}/chats`;
  const fetchOpts = fetchOptions(state, 'POST', { user_ids: [userId] });
  const params = { userId };

  return apiAction<A.CreateChat>(AAT.CreateChat, dispatch, params, {
    onRequest: () => fetch(endpoint, fetchOpts),
  });
};

export const sendChatMessage = (
  message: OutcomingMessageOptions,
  clientToken?: string
): DA<MessageIncomingPayload> => async (dispatch, getState) => {
  const state = getState();
  const { chatId } = state.ws.persist;
  const { bot } = state.profile.persist;
  const { skippedWidgetId } = state.chat;

  if (!bot) {
    throw Error('no bot');
  }
  if (!chatId) {
    throw Error('no chat id');
  }
  const meta = {
    bot_id: bot.id,
    client_token: clientToken || guid(),
    chat_id: chatId,
    timestamp: new Date().toISOString(),
  };

  const widget = skippedWidgetId
    ? { ...message.widget, widget_id: skippedWidgetId, skipped: true }
    : message.widget;

  const payload: MessageOutcomingPayload =
    message.type === 'text'
      ? {
          content: {
            type: 'text',
            text: message.text,
          },
          meta,
          widget_response: widget,
          robot_command: message.startScenarioId
            ? {
                type: 'start_scenario',
                scenario_id: message.startScenarioId,
                source: 'replika_thought',
              }
            : undefined,
        }
      : {
          content: {
            type: 'images',
            text: message.text,
            images: message.images,
          },
          meta,
          widget_response: message.widget,
        };

  const params = { chatId, message: payload };
  return wsAction<A.SendMessage>(AAT.WsSendMessage, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.Message,
          payload,
        },
        state
      ),
  });
};

export const uploadChatImage = (file: File): DA<{}> => async (
  dispatch,
  getState
) => {
  try {
    const { deviceId } = getState().auth.persist;
    const clientToken = guid();

    if (!deviceId) {
      return Promise.reject(new Error('No device id'));
    }

    dispatch(requestAction(AAT.UploadChatImage, {}));

    const { image_url: imageUrl } = await uploadImage(
      file,
      IMAGE_SIZE_LIMIT,
      (image, orientation) => {
        dispatch({
          type: AT.UploadChatImagePreview,
          src: image.src,
          width: image.width,
          height: image.height,
          orientation,
          clientToken,
        });
      }
    )(dispatch, getState);

    dispatch(successAction(AAT.UploadChatImage, { imageUrl }, {}));

    return sendChatMessage(
      {
        type: 'images',
        text: '',
        images: [imageUrl],
      },
      clientToken
    )(dispatch, getState);
  } catch (err) {
    dispatch(errorAction(AAT.UploadChatImage, err, {}));
    throw err;
  }
};

export const getMediaPreviewRequest = (
  urls: string[]
): DA<MediaPreviewMap> => async (dispatch, getState) => {
  const params = { urls };

  try {
    dispatch<A.ChatAction>(requestAction(AAT.GetMediaPreview, params));

    const urlPreviewPairs = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(
          `${API_BASE_URL}/media_preview/?url=${encodeURIComponent(url)}`,
          fetchOptions(getState(), 'GET')
        );
        if (res.status !== 200) {
          return [url, null];
        }
        const mediaPreview = await res.json();

        if (
          !mediaPreview.hasOwnProperty('type') &&
          mediaPreview.hasOwnProperty('message')
        ) {
          // current API returns error with code 200 instead of 404 if preview is not found
          // if there's 'message' field in response we assume it's an error
          return [url, null];
        }

        return [url, mediaPreview];
      })
    );

    const mediaPreviews = urlPreviewPairs.reduce(
      (acc: MediaPreviewMap, [url, m]) => {
        if (url) {
          acc[url] = m;
        }
        return acc;
      },
      {}
    );

    dispatch<A.ChatAction>(
      successAction(AAT.GetMediaPreview, mediaPreviews, params)
    );

    return mediaPreviews;
  } catch (err) {
    dispatch<A.ChatAction>(errorAction(AAT.GetMediaPreview, err, params));
    throw err;
  }
};

export const textInputDetected = (): DA<{}> => async (dispatch, getState) => {
  const state = getState();
  const {
    ws: {
      persist: { chatId },
    },
  } = state;

  if (!chatId) {
    throw Error('no chat id');
  }

  const params = { chatId };

  return wsAction(AAT.WsTextInputDetected, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.TextInputDetected,
          payload: {
            chat_id: chatId,
          },
        },
        state
      ),
  });
};

export const updateChatMessageText = (messageText: string): A.ChatAction => {
  return {
    type: AT.UpdateChatMessageText,
    messageText,
  };
};

export const skipWidget = (id: string): A.SkipWidget => {
  return {
    type: AT.SkipWidget,
    id,
  };
};

export const skipExperiment = (result: {}): A.ExperimentEnded => {
  return {
    type: AT.ExperimentEnded,
    result,
  };
};

export const setShowMessageActions = (
  showMessageActions: string | undefined
): A.SetShowMessageActions => {
  return {
    type: AT.SetShowMessageActions,
    showMessageActions,
  };
};

export const showAndHideMessageActions = (
  dispatch: any,
  getState: any,
  messageId: string,
  timeout = 3000
) => {
  dispatch(setShowMessageActions(messageId));

  setTimeout(() => {
    if (getState().chat.showMessageActions === messageId) {
      dispatch(setShowMessageActions(undefined));
    }
  }, timeout);
};

export const replikaThoughtViewed = (): DA<{}> => async (
  dispatch,
  getState
) => {
  return wsAction(
    AAT.WsReplikaThoughtViewed,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.ReplikaThoughtViewed,
            payload: {},
          },
          getState()
        ),
    }
  );
};

export const clearChatMessageAlert = (
  alertType: 'score' | 'memory',
  messageId: string
): A.ClearChatMessageAlert => {
  return {
    type: AT.ClearChatMessageAlert,
    messageId,
    alertType,
  };
};
