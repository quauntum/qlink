import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { push } from 'connected-react-router';
import {
  Bot,
  BotPatch,
  UserProfile,
  UserProfilePatch,
  VoiceType,
  GetHelpConfig,
  MoodMeterResponse,
  MoodItem
} from '../types/models';
import { Routes } from '../types/enums';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction } from '../utils/asyncAction';
import { ReboardingState } from '../types/states';
import { setAllHints } from './ui';
import toQueryString from '../utils/toQueryString';
import { getCustomizationManifest } from './avatars';

export const getPersonalBot = (): DA<Bot> => async (dispatch, getState) => {
  const endpoint = `${API_BASE_URL}/personal_bot`;
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetPersonalBot>(
    AAT.GetPersonalBot,
    dispatch,
    {},
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: bot => {
        const state = getState();
        if (!bot.avatar && !state.avatars.persist.chooseAvatarScreenShown) {
          dispatch(push(Routes.ChooseAvatar));
        }
      }
    }
  );
};

export const updateBot = (botPatch: BotPatch): DA<Bot> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { bot } = state.profile.persist;

  if (!bot) {
    throw new Error('no bot');
  }

  const params = { botPatch, botId: bot.id };

  return apiAction<A.UpdateBot>(AAT.UpdateBot, dispatch, params, {
    onRequest: async () => {
      return fetch(
        `${API_BASE_URL}/personal_bot`,
        fetchOptions(state, 'PATCH', botPatch)
      );
    },
    onSuccess: () => {
      if (botPatch.avatar) {
        getCustomizationManifest()(dispatch, getState);
      }
    }
  });
};

export const getUserProfile = (): DA<UserProfile> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { userId } = state.auth.persist;

  const endpoint = `${API_BASE_URL}/profile`;
  const fetchOpts = fetchOptions(state, 'GET');
  const params = { userId };

  return apiAction<A.GetUserProfile>(AAT.GetUserProfile, dispatch, params, {
    onRequest: () => fetch(endpoint, fetchOpts)
  });
};

export const updateUserProfile = (
  userProfilePatch: UserProfilePatch
): DA<UserProfile> => async (dispatch, getState) => {
  const state = getState();
  const { userId } = state.auth.persist;

  if (!userId) {
    throw new Error('no userid');
  }

  const params = { userProfilePatch, userId };

  return apiAction<A.UpdateUserProfile>(
    AAT.UpdateUserProfile,
    dispatch,
    params,
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/profile`,
          fetchOptions(state, 'PATCH', userProfilePatch)
        )
    }
  );
};

export const resetServerError = () => ({
  type: AT.ResetServerError
});

export const updatePassword = (
  oldPassword: string,
  newPassword: string
): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'POST', {
    old_password: oldPassword,
    new_password: newPassword
  });

  return apiAction<A.UpdateUserPassword>(
    AAT.UpdateUserPassword,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/profile/actions/update_password`, fetchOpts)
    }
  );
};

export const updateEmail = (
  password: string,
  email: string
): DA<UserProfile> => async (dispatch, getState) => {
  return apiAction<A.UpdateUserEmail>(
    AAT.UpdateUserEmail,
    dispatch,
    { email },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/profile/actions/update_email`,
          fetchOptions(getState(), 'POST', { email, password })
        )
    }
  );
};

export const getVoices = (): DA<VoiceType[]> => async (dispatch, getState) => {
  return apiAction<A.GetVoices>(
    AAT.GetVoices,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/voices`, fetchOptions(getState(), 'GET'))
    }
  );
};

export const setReboarding = (
  reboarding: ReboardingState
): DA<ReboardingState> => async (dispatch, getState) => {
  return apiAction<A.SubmitReboarding>(
    AAT.SubmitReboarding,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/reboarding`,
          fetchOptions(getState(), 'POST', reboarding)
        ),
      onSuccess: async () => {
        setAllHints('needed')(dispatch);
        await getPersonalBot()(dispatch, getState);
        dispatch(push('/'));
      }
    }
  );
};

export const fetchGetHelpConfig = (): DA<GetHelpConfig> => async (
  dispatch,
  getState
) => {
  return apiAction<A.FetchGetHelpConfig>(
    AAT.FetchGetHelpConfig,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/get_help`, fetchOptions(getState(), 'GET'))
    }
  );
};

export const getMoodMeter = (
  startId: string | undefined = undefined,
  limit: number = 10
): DA<MoodMeterResponse> => async (dispatch, getState) => {
  return apiAction<A.GetMoodMeter>(
    AAT.GetMoodMeter,
    dispatch,
    { startId, limit },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/mood_meter?${toQueryString({
            start_id: startId,
            limit
          })}`,
          fetchOptions(getState(), 'GET')
        )
    }
  );
};

export const updateMoodMeter = (
  from: number,
  limit: number = 10
): DA<MoodMeterResponse> => async (dispatch, getState) => {
  return apiAction<A.UpdateMoodMeter>(
    AAT.UpdateMoodMeter,
    dispatch,
    { from, limit },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/mood_meter/updates?${toQueryString({
            from,
            limit
          })}`,
          fetchOptions(getState(), 'GET')
        )
    }
  );
};

export const createNewMood = (): DA<{}> => async (dispatch, getState) => {
  return apiAction<A.CreateNewMood>(
    AAT.CreateNewMood,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/mood_meter`, fetchOptions(getState(), 'POST'))
    }
  );
};

export const updateMood = (mood: MoodItem): DA<{}> => async (
  dispatch,
  getState
) => {
  return apiAction<A.UpdateMood>(
    AAT.UpdateMood,
    dispatch,
    { mood },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/mood_meter/${mood.id}`,
          fetchOptions(getState(), 'PATCH', {
            caption: mood.caption
          })
        )
    }
  );
};

export const getMood = (moodId: string): DA<MoodItem> => async (
  dispatch,
  getState
) => {
  return apiAction<A.GetMood>(
    AAT.GetMood,
    dispatch,
    { moodId },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/mood_meter/${moodId}`,
          fetchOptions(getState(), 'GET')
        )
    }
  );
};

export const deleteMood = (moodId: string): DA<{}> => async (
  dispatch,
  getState
) => {
  return apiAction<A.DeleteMood>(
    AAT.DeleteMood,
    dispatch,
    { moodId },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/mood_meter/${moodId}`,
          fetchOptions(getState(), 'DELETE')
        )
    }
  );
};
