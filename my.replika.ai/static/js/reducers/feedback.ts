import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { FeedbackState } from '../types/states';
import * as A from '../types/actions';
import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';
import { ToError, ToSuccess } from '../types/asyncActions';

const DEFAULT_STATE: FeedbackState = {
  feedbackStatus: 'inactive',
  feedbackData: undefined
};

type R<X extends A.FeedbackAction | A.IncomingWsAction> = Reducer<
  FeedbackState,
  X
>;
type RError<X> = Reducer<FeedbackState, ToError<X>>;
type RSuccess<X> = Reducer<FeedbackState, ToSuccess<X>>;

const openFeedbackPopup: R<A.FeedbackRequestReceived> = (
  state,
  { sessionId, feedbackView }
) => ({
  ...state,
  feedbackStatus: 'active',
  feedbackData: {
    sessionId,
    feedbackView
  }
});

const setSubmittedStatusSuccess: RSuccess<A.SendFeedback> = state => ({
  ...state,
  feedbackStatus: 'submitted'
});

const setSubmittedStatusError: RError<A.SendFeedback> = state => ({
  ...state,
  feedbackStatus: 'submitted'
});

const closeFeedbackPopup: R<A.CloseFeedbackPopup> = state => ({
  ...state,
  feedbackData: undefined,
  feedbackStatus: 'inactive'
});

const dismissFeedbackSuccess: RSuccess<A.DismissFeedback> = state => ({
  ...state,
  feedbackData: undefined,
  feedbackStatus: 'inactive'
});

const dismissFeedbackError: RError<A.DismissFeedback> = state => ({
  ...state,
  feedbackData: undefined,
  feedbackStatus: 'inactive'
});

export default function feedback(
  state: FeedbackState = DEFAULT_STATE,
  action: A.AnyAction
): FeedbackState {
  return applyReducer(
    'feedback',
    {
      [AT.WsFeedbackRequestReceived]: openFeedbackPopup,
      [AAT.WsSendFeedback]: {
        success: setSubmittedStatusSuccess,
        error: setSubmittedStatusError
      },
      [AAT.WsDismissFeedback]: {
        success: dismissFeedbackSuccess,
        error: dismissFeedbackError
      },
      [AT.CloseFeedbackPopup]: closeFeedbackPopup
    },
    state,
    action
  );
}
