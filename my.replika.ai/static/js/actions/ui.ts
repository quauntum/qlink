import { ActionTypes as AT, Themes, IntroStep } from '../types/enums';
import { UiAction as A, InitAction } from '../types/actions';
import { Dispatch } from 'redux';
import { RootState, UiHints, HintStatus, DialogOptions } from '../types/states';
import { initChatWithHistory } from './init';
import { disconnectWebsocket } from './websocket';
import { getUserProfile } from './profile';
import { connectThemeName } from '../utils/withThemeName';

export const setActiveWindow = (isActiveWindow: boolean) => (
  dispatch: Dispatch<A | InitAction>,
  getState: () => RootState
) => {
  const state = getState();

  if (isActiveWindow !== state.ui.isActiveWindow) {
    dispatch<A>({
      type: AT.SetActiveWindow,
      isActiveWindow,
    });

    if (!isActiveWindow) {
      disconnectWebsocket()(dispatch);
    } else {
      initChatWithHistory()(dispatch, getState);
    }
  }
};

export const goneOnline = (): A => ({
  type: AT.GoneOnline,
});

export const goneOffline = (): A => ({
  type: AT.GoneOffline,
});

export const setTheme = (themeName: Themes) => (
  dispatch: Dispatch<A | InitAction>,
  getState: () => RootState
) => {
  const { userId } = getState().auth.persist;

  if (!userId) {
    return;
  }

  dispatch({
    type: AT.SetTheme,
    themeName,
    userId,
  });
};

export const toggleTheme = () => (
  dispatch: Dispatch<A | InitAction>,
  getState: () => RootState
) => {
  const state = getState();
  const { themeName } = connectThemeName(state);

  return setTheme(themeName !== Themes.Dark ? Themes.Dark : Themes.Light)(
    dispatch,
    getState
  );
};

export const toggleMobileProfile = (): A => ({
  type: AT.ToggleMobileProfile,
});

export const setTrialPopupActive = (isTrialPopupActive: boolean) => async (
  dispatch: Dispatch<A | InitAction>,
  getState: () => RootState
) => {
  if (isTrialPopupActive) {
    const userProfile = await getUserProfile()(dispatch, getState);

    if (
      !userProfile ||
      !userProfile.email_settings ||
      userProfile.email_settings.is_email_verified
    ) {
      return;
    }
  }

  dispatch<A>({
    type: AT.SetTrialPopupActive,
    isTrialPopupActive,
  });
};

export const acceptGdpr = (): A => ({
  type: AT.AcceptGdpr,
});

export const setHintStatus = (hint: keyof UiHints, status: HintStatus): A => ({
  type: AT.SetHintStatus,
  hint,
  status,
});

export const setActiveDialog = (options: DialogOptions | null): A => {
  return {
    type: AT.SetActiveDialog,
    options,
  };
};

export const setAllHints = (status: HintStatus) => (
  dispatch: Dispatch<any>
) => {
  dispatch(setHintStatus('messageReaction', status));
  dispatch(setHintStatus('replikaDay', status));
  dispatch(setHintStatus('replikaMood', status));
};

export const setCompletedMissionDialogShown = (): A => {
  return {
    type: AT.SetCompletedMissionDialogShown,
  };
};

export const setIntroStep = (introStep: IntroStep | null): A => ({
  type: AT.SetIntroStep,
  introStep,
});

export const setShowRelationshipStatusButton = (
  showRelationshipStatusButton: boolean
): A => ({
  type: AT.SetShowRelationshipStatusButton,
  showRelationshipStatusButton,
});

export const dismissNotification = (id: string): A => ({
  type: AT.DismissNotification,
  id,
});

export const setDisabled3d = (disabled: boolean): A => {
  return {
    type: AT.SetDisabled3d,
    disabled,
  };
};

export const setNewThought = (isNewThought: boolean): A => {
  return {
    type: AT.SetNewThought,
    isNewThought,
  };
};
