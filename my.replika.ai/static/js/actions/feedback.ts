import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  WsEventNames
} from '../types/enums';
import { sendMessage } from '../utils/websocket';
import { DA } from '../types/redux';
import { FeedbackType } from '../types/models';
import { FeedbackAction as A } from '../types/actions';
import { wsAction } from '../utils/asyncAction';

type FeedbackPayload = {
  session_id: string;
  feedback: FeedbackType;
  feedback_text?: string;
  feedback_view: 'Popup' | 'Fullscreen';
};

export const sendFeedback = (
  sessionId: string,
  feedback: FeedbackType,
  feedbackView: 'Popup' | 'Fullscreen',
  feedbackText?: string
): DA<{}> => async (dispatch, getState) => {
  const state = getState();
  const { chatId } = state.ws.persist;

  if (!chatId) {
    console.error('no chat id');
    throw Error('no chat id');
  }

  const params = { chatId, sessionId, feedback, feedbackText, feedbackView };
  let feedbackObj: FeedbackPayload = {
    feedback,
    session_id: sessionId,
    feedback_view: feedbackView
  };

  if (feedbackText) {
    feedbackObj = {
      ...feedbackObj,
      feedback_text: feedbackText
    };
  }

  return wsAction(AAT.WsSendFeedback, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.ConversationFeedback,
          payload: feedbackObj
        },
        state
      )
  });
};

export const closeFeedbackPopup = (): A => ({
  type: AT.CloseFeedbackPopup
});

export const dismissFeedback = (
  sessionId: string,
  feedbackView: 'Popup' | 'Fullscreen'
): DA<{}> => async (dispatch, getState) => {
  const state = getState();
  const { chatId } = state.ws.persist;

  if (!chatId) {
    throw Error('no chat id');
  }

  const params = { chatId, sessionId, feedbackView };

  return wsAction(AAT.WsDismissFeedback, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.ConversationFeedback,
          payload: {
            session_id: sessionId,
            close_action: 'Close',
            feedback_view: feedbackView
          }
        },
        state
      )
  });
};
