import { sortedUniqBy, sortBy } from 'lodash';
import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ProfileState, Progress } from '../types/states';
import { MoodItem } from '../types/models';
import * as A from '../types/actions';
import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';
import { ToRequest, ToError, ToSuccess } from '../types/asyncActions';

const DEFAULT_STATE: ProfileState = {
  getPersonalBotProgress: Progress.initial,
  isFetchingProfile: false,
  serverError: undefined,
  updateEmailProgress: Progress.initial,
  updatePasswordProgress: Progress.initial,
  updateProfileProgress: Progress.initial,
  updateReplikaProgress: Progress.initial,
  updateMoodProgress: Progress.initial,
  voices: [],
  persist: {
    bot: undefined,
    userProfile: undefined,
    moods: undefined,
    lastMoodTimestamp: null,
    hasMoreMoods: false,
  },
  getHelpConfig: undefined,
  isFetchingGetHelpConfig: false,
  isFetchingMoodMeter: false,
};

type R<X extends A.ProfileAction | A.IncomingWsAction> = Reducer<
  ProfileState,
  X
>;
type RRequest<X> = Reducer<ProfileState, ToRequest<X>>;
type RError<X> = Reducer<ProfileState, ToError<X>>;
type RSuccess<X> = Reducer<ProfileState, ToSuccess<X>>;

const getBotRequest: RRequest<A.GetPersonalBot> = (state) => ({
  ...state,
  getPersonalBotProgress: Progress.sending,
});

const getBotError: RError<A.GetPersonalBot> = (state) => ({
  ...state,
  getPersonalBotProgress: Progress.error,
});

const getBotSuccess: RSuccess<A.GetPersonalBot> = (state, { result: bot }) => ({
  ...state,
  getPersonalBotProgress: Progress.success,
  persist: {
    ...state.persist,
    bot,
  },
});

const getUserProfileRequest: RRequest<A.GetUserProfile> = (state) => ({
  ...state,
  isFetchingProfile: true,
});

const getUserProfileError: RError<A.GetUserProfile> = (state) => ({
  ...state,
  isFetchingProfile: false,
});

const getUserProfileSuccess: RSuccess<A.GetUserProfile> = (
  state,
  { result: userProfile }
) => ({
  ...state,
  isFetchingProfile: false,
  persist: {
    ...state.persist,
    userProfile,
  },
});

const updateBotStats: R<A.BotStatsReceived> = (state, payload) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      bot: state.persist.bot && {
        ...state.persist.bot,
        stats: payload.stats,
      },
    },
  };
};

const updateBot: R<A.BotReceived> = (state, { bot }) => ({
  ...state,
  persist: {
    ...state.persist,
    bot,
  },
});

const updatePasswordRequest: RRequest<A.UpdateUserPassword> = (state) => {
  return {
    ...state,
    updatePasswordProgress: Progress.sending,
    serverError: undefined,
  };
};

const updatePasswordSuccess: RSuccess<A.UpdateUserPassword> = (state) => {
  return {
    ...state,
    updatePasswordProgress: Progress.success,
  };
};

const updatePasswordError: RError<A.UpdateUserPassword> = (
  state,
  { error }
) => {
  return {
    ...state,
    serverError: error.message,
    updatePasswordProgress: Progress.error,
  };
};

const updateReplikaRequest: RRequest<A.UpdateBot> = (state) => {
  return {
    ...state,
    updateReplikaProgress: Progress.sending,
    serverError: undefined,
  };
};

const updateReplikaSuccess: RSuccess<A.UpdateBot> = (
  state,
  { result: bot }
) => {
  return {
    ...state,
    updateReplikaProgress: Progress.success,
    persist: {
      ...state.persist,
      bot,
    },
  };
};

const updateReplikaError: RError<A.UpdateBot> = (state, { error }) => {
  return {
    ...state,
    serverError: error.message,
    updateReplikaProgress: Progress.error,
  };
};

const updateEmailRequest: RRequest<A.UpdateUserEmail> = (state) => {
  return {
    ...state,
    updateEmailProgress: Progress.sending,
    serverError: undefined,
  };
};

const updateEmailSuccess: RSuccess<A.UpdateUserEmail> = (state, { result }) => {
  return {
    ...state,
    updateEmailProgress: Progress.success,
    serverError: undefined,
    persist: {
      ...state.persist,
      userProfile: state.persist.userProfile && {
        ...state.persist.userProfile,
        email_settings: result.email_settings,
      },
    },
  };
};

const updateEmailError: RError<A.UpdateUserEmail> = (state, { error }) => {
  return {
    ...state,
    updateEmailProgress: error ? Progress.error : Progress.success,
    serverError: error.message,
  };
};

const updateProfileRequest: RRequest<A.UpdateUserProfile> = (state) => {
  return {
    ...state,
    updateProfileProgress: Progress.sending,
    serverError: undefined,
  };
};

const updateProfileSuccess: RSuccess<A.UpdateUserProfile> = (
  state,
  { result: userProfile }
) => {
  return {
    ...state,
    updateProfileProgress: Progress.success,
    persist: {
      ...state.persist,
      userProfile,
    },
  };
};

const updateProfileError: RError<A.UpdateUserProfile> = (state, { error }) => {
  return {
    ...state,
    updateProfileProgress: Progress.error,
    serverError: error.message,
  };
};

const resetProfile = () => ({ ...DEFAULT_STATE });

// TODO: separate method for each page
const resetServerError: R<A.ResetServerError> = (state) => ({
  ...state,
  serverError: undefined,
  updateEmailProgress: Progress.initial,
  updatePasswordProgress: Progress.initial,
  updateProfileProgress: Progress.initial,
  updateReplikaProgress: Progress.initial,
});

const getVoicesSuccess: RSuccess<A.GetVoices> = (state, { result: voices }) => {
  return {
    ...state,
    voices,
  };
};

const fetchGetHelpConfigRequest: RRequest<A.FetchGetHelpConfig> = (state) => ({
  ...state,
  isFetchingGetHelpConfig: true,
});

const fetchGetHelpConfigError: RError<A.FetchGetHelpConfig> = (state) => ({
  ...state,
  isFetchingGetHelpConfig: false,
});

const fetchGetHelpConfigSuccess: RSuccess<A.FetchGetHelpConfig> = (
  state,
  { result: getHelpConfig }
) => ({
  ...state,
  isFetchingGetHelpConfig: false,
  getHelpConfig,
});

const getMoodMeterRequest: RRequest<A.GetMoodMeter> = (state) => ({
  ...state,
  isFetchingMoodMeter: true,
});

const getMoodMeterError: RError<A.GetMoodMeter> = (state) => ({
  ...state,
  isFetchingMoodMeter: false,
});

const sortMoods = (moods: MoodItem[]) =>
  sortedUniqBy<MoodItem>(
    sortBy<MoodItem>(moods, (m) => m.date),
    (m) => m.id
  ).filter((m) => !m.hidden);

const mostRecentTimestamp = (state: ProfileState, timestamp: number | null) => {
  const currentTimestamp = state.persist.lastMoodTimestamp;

  if (!currentTimestamp) {
    return timestamp;
  }

  return timestamp && timestamp > currentTimestamp
    ? timestamp
    : currentTimestamp;
};

const getMoodMeterSuccess: RSuccess<A.GetMoodMeter> = (state, { result }) => ({
  ...state,
  isFetchingMoodMeter: false,
  persist: {
    ...state.persist,
    moods: sortMoods([...result.moods, ...(state.persist.moods || [])]),
    lastMoodTimestamp: mostRecentTimestamp(state, result.timestamp),
    hasMoreMoods: result.more,
  },
});

const updateMoodMeterRequest: RRequest<A.UpdateMoodMeter> = (state) => ({
  ...state,
  isFetchingMoodMeter: true,
});

const updateMoodMeterError: RError<A.UpdateMoodMeter> = (state) => ({
  ...state,
  isFetchingMoodMeter: false,
});

const updateMoodMeterSuccess: RSuccess<A.UpdateMoodMeter> = (
  state,
  { result }
) => ({
  ...state,
  isFetchingMoodMeter: false,
  persist: {
    ...state.persist,
    moods: sortMoods([...result.moods, ...(state.persist.moods || [])]),
    lastMoodTimestamp: mostRecentTimestamp(state, result.timestamp),
    hasMoreMoods: result.more,
  },
});

const addMood: R<A.UserMoodReceived> = (state, { mood }) => ({
  ...state,
  persist: {
    ...state.persist,
    moods: sortMoods([mood, ...(state.persist.moods || [])]),
  },
});

const updateBotMood: R<A.BotMoodReceived> = (state, { mood }) => ({
  ...state,
  persist: {
    ...state.persist,
    bot: state.persist.bot && {
      ...state.persist.bot,
      mood,
    },
  },
});

const deleteMoodSuccess: RSuccess<A.DeleteMood> = (
  state,
  { params: { moodId } }
) => ({
  ...state,
  persist: {
    ...state.persist,
    moods: (state.persist.moods || []).filter((m) => m.id !== moodId),
  },
});

const updateMoodSuccess: RSuccess<A.UpdateMood> = (
  state,
  { result: mood }
) => ({
  ...state,
  persist: {
    ...state.persist,
    moods: (state.persist.moods || []).map((m) =>
      m.id === mood.id ? mood : m
    ),
  },
});

export default function profile(
  state: ProfileState = DEFAULT_STATE,
  action: A.AnyAction
): ProfileState {
  return applyReducer(
    'profile',
    {
      [AAT.GetPersonalBot]: {
        request: getBotRequest,
        success: getBotSuccess,
        error: getBotError,
      },
      [AAT.UpdateBot]: {
        request: updateReplikaRequest,
        success: updateReplikaSuccess,
        error: updateReplikaError,
      },
      [AT.BotStatsReceived]: updateBotStats,
      [AT.BotReceived]: updateBot,
      [AAT.Logout]: {
        success: resetProfile,
        error: resetProfile,
      },
      [AAT.DeleteAccount]: {
        success: resetProfile,
      },
      [AAT.GetUserProfile]: {
        request: getUserProfileRequest,
        success: getUserProfileSuccess,
        error: getUserProfileError,
      },
      [AAT.UpdateUserPassword]: {
        request: updatePasswordRequest,
        success: updatePasswordSuccess,
        error: updatePasswordError,
      },
      [AAT.UpdateUserEmail]: {
        request: updateEmailRequest,
        success: updateEmailSuccess,
        error: updateEmailError,
      },
      [AAT.UpdateUserProfile]: {
        request: updateProfileRequest,
        success: updateProfileSuccess,
        error: updateProfileError,
      },
      [AAT.GetVoices]: {
        success: getVoicesSuccess,
      },
      [AT.ResetServerError]: resetServerError,
      [AAT.FetchGetHelpConfig]: {
        request: fetchGetHelpConfigRequest,
        success: fetchGetHelpConfigSuccess,
        error: fetchGetHelpConfigError,
      },
      [AAT.GetMoodMeter]: {
        request: getMoodMeterRequest,
        success: getMoodMeterSuccess,
        error: getMoodMeterError,
      },
      [AAT.UpdateMoodMeter]: {
        request: updateMoodMeterRequest,
        success: updateMoodMeterSuccess,
        error: updateMoodMeterError,
      },
      [AT.WsUserMoodReceived]: addMood,
      [AT.WsBotMoodReceived]: updateBotMood,
      [AAT.DeleteMood]: {
        success: deleteMoodSuccess,
      },
      [AAT.UpdateMood]: {
        success: updateMoodSuccess,
      },
    },
    state,
    action
  );
}
