import { parse } from 'query-string';
import guid from 'simple-guid';
import * as A from '../types/actions';
import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  Dialogs,
} from '../types/enums';
import { UiState } from '../types/states';
import { Reducer } from '../types/redux';
import applyReducer from '../utils/applyReducer';
import { GDPR_VERSION } from '../utils/constants';
import { ToRequest, ToError } from '../types/asyncActions';

const urlQueryParams = parse(window.location.search) as any;

const DEFAULT_STATE: UiState = {
  urlQueryParams,
  connectedToInternet: true, // user managed to get main.js, so we assume he/she's online
  isActiveWindow: true,
  imageUpload: {
    inProgress: false,
    src: null,
    width: 0,
    height: 0,
    uploadError: undefined,
    orientation: -1,
  },
  mobileProfileOpened: false,
  activeDialog: null,
  introStep: null,
  isTrialPopupActive: false,
  persist: {
    themeNames: {},
    gdprVersion: undefined,
    hints: {
      messageReaction: undefined,
      replikaDay: undefined,
      replikaMood: undefined,
    },
    completedMissionDialogShown: false,
    showRelationshipStatusButton: false,
    disabled3d: false,
  },
  notifications: [],
  isNewThought: false,
};

type R<X extends A.UiAction | A.ChatAction | A.IncomingWsAction> = Reducer<
  UiState,
  X
>;
type RRequest<X> = Reducer<UiState, ToRequest<X>>;
type RError<X> = Reducer<UiState, ToError<X>>;

const goneOffline: R<A.GoneOffline> = (state) => ({
  ...state,
  connectedToInternet: false,
  imageUpload: {
    ...state.imageUpload,
    uploadError: undefined,
  },
});

const goneOnline: R<A.GoneOnline> = (state) => ({
  ...state,
  connectedToInternet: true,
});

const showUploadProgress: RRequest<A.UploadChatImage> = (state) => ({
  ...state,
  imageUpload: {
    ...state.imageUpload,
    inProgress: true,
    uploadError: undefined,
  },
});

const showUploadProgressPreview: R<A.UploadChatImagePreview> = (
  state,
  { width, height, src, orientation }
) => ({
  ...state,
  imageUpload: {
    ...state.imageUpload,
    inProgress: true,
    width,
    height,
    src,
    uploadError: undefined,
    orientation,
  },
});

const hideUploadProgress: R<A.ChatMessageReceived> = (state) => ({
  ...state,
  imageUpload: {
    ...state.imageUpload,
    inProgress: false,
    width: 0,
    height: 0,
    src: null,
    percent: 0,
    orientation: -1,
  },
});

const uploadError: RError<A.UploadChatImage> = (state, { error }) => ({
  ...state,
  imageUpload: {
    ...state.imageUpload,
    inProgress: false,
    width: 0,
    height: 0,
    percent: 0,
    uploadError: error.message,
    orientation: -1,
  },
});

const clearUploadError: RRequest<A.TextInputDetected> = (state) => ({
  ...state,
  imageUpload: {
    ...state.imageUpload,
    uploadError: undefined,
  },
});

const setActiveWindow: R<A.SetActiveWindow> = (state, { isActiveWindow }) => ({
  ...state,
  isActiveWindow,
});

const toggleMobileProfile: R<A.ToggleMobileProfile> = (state) => ({
  ...state,
  mobileProfileOpened: !state.mobileProfileOpened,
});

const setTheme: R<A.SetTheme> = (state, { userId, themeName }) => ({
  ...state,
  persist: {
    ...state.persist,
    themeNames: {
      ...state.persist.themeNames,
      [userId]: themeName,
    },
  },
});

const setActiveDialog: R<A.SetActiveDialog> = (state, { options }) => ({
  ...state,
  activeDialog: options,
});

const acceptGdpr: R<A.AcceptGdpr> = (state) => ({
  ...state,
  persist: {
    ...state.persist,
    gdprVersion: GDPR_VERSION,
  },
});

const setHintStatus: R<A.SetHintStatus> = (state, { hint, status }) => ({
  ...state,
  persist: {
    ...state.persist,
    hints: {
      ...state.persist.hints,
      [hint]: status,
    },
  },
});

const openFeedbackPopup: R<A.FeedbackRequestReceived> = (
  state,
  { feedbackView }
) => ({
  ...state,
  activeDialog:
    feedbackView === 'Fullscreen'
      ? { type: Dialogs.Feedback }
      : state.activeDialog,
});

const closeFeedbackPopup = (state) =>
  state.activeDialog === Dialogs.Feedback
    ? {
        ...state,
        activeDialog: null,
      }
    : state;

const setCompletedMissionDialogShown = (state) => ({
  ...state,
  persist: {
    ...state.persist,
    completedMissionDialogShown: true,
  },
});

const setIntroStep = (state, { introStep }) => ({
  ...state,
  introStep,
});

const resetUi = (state) => ({
  ...DEFAULT_STATE,
  persist: state.persist,
});

const setTrialPopupActive: R<A.SetTrialPopupActive> = (
  state,
  { isTrialPopupActive }
) => ({
  ...state,
  isTrialPopupActive,
});

const setShowRelationshipStatusButton: R<A.SetShowRelationshipStatusButton> = (
  state,
  { showRelationshipStatusButton }
) => ({
  ...state,
  persist: {
    ...state.persist,
    showRelationshipStatusButton,
  },
});

const queueNotifications: R<A.BotStatsReceived> = (
  state,
  { notifications }
) => ({
  ...state,
  notifications: [
    ...state.notifications,
    ...notifications.map((n) => ({
      id: guid(),
      notification: n,
    })),
  ],
});

const dismissNotification: R<A.DismissNotification> = (state, { id }) => ({
  ...state,
  notifications: state.notifications.filter((n) => n.id !== id),
});

const setDisabled3d: R<A.SetDisabled3d> = (state, { disabled }) => ({
  ...state,
  persist: {
    ...state.persist,
    disabled3d: disabled,
  },
});

const setNewThought: R<A.SetNewThought> = (state, { isNewThought }) => ({
  ...state,
  isNewThought,
});

export default function ui(
  state: UiState = DEFAULT_STATE,
  action: A.AnyAction
): UiState {
  return applyReducer(
    'ui',
    {
      [AT.GoneOffline]: goneOffline,
      [AT.GoneOnline]: goneOnline,
      [AAT.UploadChatImage]: {
        request: showUploadProgress,
        error: uploadError,
      },
      [AT.UploadChatImagePreview]: showUploadProgressPreview,
      [AT.WsChatMessageReceived]: hideUploadProgress,
      [AT.SetActiveWindow]: setActiveWindow,
      [AT.SetActiveWindow]: setActiveWindow,
      [AT.SetTheme]: setTheme,
      [AT.ToggleMobileProfile]: toggleMobileProfile,
      [AAT.WsTextInputDetected]: {
        request: clearUploadError,
      },
      [AT.WsVoiceModeReceived]: clearUploadError,
      [AT.SetActiveDialog]: setActiveDialog,
      [AT.AcceptGdpr]: acceptGdpr,
      [AT.SetHintStatus]: setHintStatus,
      [AT.WsFeedbackRequestReceived]: openFeedbackPopup,
      [AAT.WsDismissFeedback]: {
        success: closeFeedbackPopup,
        error: closeFeedbackPopup,
      },
      [AT.CloseFeedbackPopup]: closeFeedbackPopup,
      [AT.SetCompletedMissionDialogShown]: setCompletedMissionDialogShown,
      [AT.SetIntroStep]: setIntroStep,
      [AAT.Logout]: {
        success: resetUi,
        error: resetUi,
      },
      [AAT.DeleteAccount]: {
        success: resetUi,
      },
      [AT.SetTrialPopupActive]: setTrialPopupActive,
      [AT.SetShowRelationshipStatusButton]: setShowRelationshipStatusButton,
      [AT.BotStatsReceived]: queueNotifications,
      [AT.DismissNotification]: dismissNotification,
      [AT.SetDisabled3d]: setDisabled3d,
      [AT.SetNewThought]: setNewThought,
    },
    state,
    action
  );
}
