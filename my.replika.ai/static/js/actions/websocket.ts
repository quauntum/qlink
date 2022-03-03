import { Dispatch, Action } from 'redux';
import { openConnection, closeConnection } from '../utils/websocket';
import {
  ActionTypes as AT,
  WsEventNames,
  MetricsEvents,
  Dialogs,
} from '../types/enums';
import {
  IncomingWebsocketMessage,
  isAddReaction,
  isRemoveReaction,
} from '../types/websocket';
import { DA } from '../types/redux';
import { RootState } from '../types/states';
import { showAndHideMessageActions } from './chat';
import * as A from '../types/actions';
import { logEvent } from '../utils/metrics';
import { setActiveDialog } from './ui';

const handleMessage = (
  dispatch: Dispatch<Action>,
  getState: () => RootState,
  message: IncomingWebsocketMessage
) => {
  dispatch<A.IncomingWsAction>({ type: AT.WsMessageReceived, message });
  const state = getState();
  const payload = message.payload;

  switch (message.event_name) {
    case WsEventNames.Message:
      dispatch<A.IncomingWsAction>({
        type: AT.WsChatMessageReceived,
        message: message.payload,
      });

      showAndHideMessageActions(dispatch, getState, message.payload.id, 10000);
      break;

    case WsEventNames.PersonalBotStats:
      const knownNotifications = message.payload.notifications.filter((n) => {
        return (
          n.type === 'level_up' ||
          (n.type === 'reward' &&
            [
              'send_photo',
              'replika_skill',
              'replika_trait',
              'explain_popup',
            ].indexOf(n.reward.type) !== -1)
        );
      });

      dispatch<A.IncomingWsAction>({
        type: AT.BotStatsReceived,
        stats: message.payload.stats,
        scoreGranted: message.payload.score_granted,
        notifications: knownNotifications,
        messageId:
          state.chat.messageTokenIdMap[message.payload.message_client_token],
      });
      break;

    case WsEventNames.PersonalBotChat:
      dispatch<A.IncomingWsAction>({
        type: AT.BotChatReceived,
        chat: message.payload,
      });
      break;

    case WsEventNames.Bot:
      dispatch<A.IncomingWsAction>({
        type: AT.BotReceived,
        bot: message.payload,
      });
      break;

    case WsEventNames.MessageReaction:
      if (isAddReaction(payload)) {
        dispatch<A.IncomingWsAction>({
          type: AT.WsMessageReactionReceived,
          reaction: payload.addReaction.reaction,
          messageId: payload.addReaction.message_id,
        });
      } else if (isRemoveReaction(payload)) {
        dispatch<A.IncomingWsAction>({
          type: AT.WsMessageReactionReceived,
          reaction: undefined,
          messageId: payload.removeReaction,
        });
      }
      break;

    case WsEventNames.ConversationFeedback:
      if (!message.payload.session_id) {
        // This is an empty answer to the feedback we sent; we should ignore it
        return;
      }
      dispatch<A.IncomingWsAction>({
        type: AT.WsFeedbackRequestReceived,
        sessionId: message.payload.session_id,
        feedbackView: message.payload.feedback_view,
      });
      break;

    case WsEventNames.StartTyping:
      dispatch<A.IncomingWsAction>({
        type: AT.WsStartTypingReceived,
      });
      break;

    case WsEventNames.StopTyping:
      dispatch<A.IncomingWsAction>({
        type: AT.WsStopTypingReceived,
      });
      break;

    case WsEventNames.VoiceMode:
      dispatch<A.IncomingWsAction>({
        type: AT.WsVoiceModeReceived,
        voiceModeState: message.payload.state,
      });
      break;

    case WsEventNames.UserMood:
      dispatch<A.IncomingWsAction>({
        type: AT.WsUserMoodReceived,
        mood: message.payload,
      });
      break;

    case WsEventNames.BotMood:
      dispatch<A.IncomingWsAction>({
        type: AT.WsBotMoodReceived,
        mood: message.payload.mood,
      });
      break;

    case WsEventNames.ExperimentStarted:
      logEvent(MetricsEvents.ExperimentStarted);

      dispatch<A.IncomingWsAction>({
        type: AT.ExperimentStarted,
        content: message.payload.content,
      });
      break;

    case WsEventNames.JourneyChanged:
      dispatch<A.IncomingWsAction>({
        type: AT.WsJourneyChanged,
        affectedTrackIds: message.payload.affected_track_ids,
      });
      break;

    case WsEventNames.SaveChatItemRequest:
      dispatch<A.IncomingWsAction>({
        type: AT.WsSaveChatItemReceived,
        item: message.payload,
      });
      break;

    case WsEventNames.StatementRemembered:
      dispatch<A.IncomingWsAction>({
        type: AT.WsStatementRemembered,
        messageId: message.payload.message_id,
      });
      break;

    case WsEventNames.NavigationPopup:
      const navigationPopup = message.payload.navigation_popup;

      dispatch<A.IncomingWsAction>({
        type: AT.WsNavigationPopup,
        navigationPopup,
      });

      dispatch(
        setActiveDialog({ type: Dialogs.NavigationPopup, navigationPopup })
      );
      break;
  }
};

export const connectWebsocket = (): DA => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch<A.InitAction>({ type: AT.WsStart });

    openConnection({
      onOpen: () => {
        dispatch<A.InitAction>({ type: AT.WsOpen });
        resolve();
      },
      onClose: (e) => {
        const state = getState();
        const needReconnect =
          state.ws.status === 'connected' && !!state.auth.persist.userId;

        dispatch<A.InitAction>({
          type: AT.WsClose,
          code: e.code,
          reason: e.reason,
          needReconnect,
        });
      },
      onWsMessage: handleMessage.bind(null, dispatch, getState),
      onError: (errorType, error) => {
        console.error(error);
        dispatch<A.InitAction>({ type: AT.WsError, error });
        reject(error);
      },
    });
  });

export const disconnectWebsocket = () => (dispatch: Dispatch<A.InitAction>) => {
  closeConnection();

  dispatch<A.InitAction>({
    type: AT.WsDisconnect,
  });
};
