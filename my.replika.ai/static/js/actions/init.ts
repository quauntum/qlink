import shajs from 'sha.js';
import ls from 'local-storage';
import { sendMessage } from '../utils/websocket';
import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  WsEventNames,
} from '../types/enums';
import { InitIncomingPayload } from '../types/websocket';
import { Bot } from '../types/models';
import { DA, TDA } from '../types/redux';
import { RootState } from '../types/states';
import { getPersonalBotChat, getHistory } from './chat';
import * as A from '../types/actions';
import moment from 'moment';
import { getPersonalBot, getUserProfile } from './profile';
import { sendLogOutRequest } from './auth';
import { captureError, setUser } from '../utils/initSentry';
import pkg from '../../package.json';
import { wsAction } from '../utils/asyncAction';
import { CAPABILITIES } from '../utils/constants';
import { connectWebsocket } from './websocket';

export const initPersist = () => (
  dispatch: TDA<A.InitAction>,
  getState: () => RootState
) => {
  const state = getState();
  const persistKeys = Object.keys(state).filter((reducerName) =>
    state[reducerName].hasOwnProperty('persist')
  );

  dispatch({
    type: AT.InitPersist,
  });

  persistKeys.forEach((reducerName) => {
    ls.on(reducerName, (persist) => {
      dispatch(updatePersist(reducerName, persist));
    });
  });
};

const updatePersist = (reducerName: string, persist: object): A.InitAction => ({
  type: AT.UpdatePersist,
  reducerName,
  persist,
});

export const checkDeviceId = (): A.InitAction => ({
  type: AT.CheckDeviceId,
});

const DEFAULT_INIT_PAYLOAD = {
  device: 'web',
  platform: 'web',
  platform_version: window.navigator.userAgent,
  app_version: pkg.version,

  capabilities: CAPABILITIES,
};

let firstInit = true;

export const initChatWithHistory = (): DA => async (dispatch, getState) => {
  try {
    // ORDER MATTERS.
    await initChat()(dispatch, getState);

    if (firstInit) {
      await applicationStarted()(dispatch, getState);
      await appForeground()(dispatch, getState);
      firstInit = false;
    }

    // invalidate cached history in case we had some push messages "squashed"
    // (or just some previous messages deleted in general)
    await getHistory(undefined, 30, true)(dispatch, getState);
  } catch (ex) {
    const e: Error = ex;
    console.error(e);

    captureError(e);

    if (
      /(Device .* not found for user|Can't find user|Invalid auth token)/.test(
        e.toString()
      )
    ) {
      sendLogOutRequest()(dispatch, getState);
    } else if (e.toString().indexOf('Trial period expired') !== -1) {
      dispatch<A.InitAction>({
        type: AT.TrialPeriodExpired,
      });
    }
  }
};

export const appForeground = (): DA<{}> => async (dispatch, getState) => {
  const state = getState();

  return wsAction(
    AAT.WsAppForeground,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.AppForeground,
            payload: {},
          },
          state
        ),
    }
  );
};

export const mainScreen = (): DA<{}> => async (dispatch, getState) => {
  const state = getState();

  return wsAction(
    AAT.WsMainScreen,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.MainScreen,
            payload: {},
          },
          state
        ),
    }
  );
};

export const chatScreen = (): DA<{}> => async (dispatch, getState) => {
  const state = getState();

  return wsAction(
    AAT.WsChatScreen,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.ChatScreen,
            payload: {},
          },
          state
        ),
    }
  );
};

export const initChat = (): DA<{ bot: Bot }> => async (dispatch, getState) => {
  const state = getState();
  const {
    ws: {
      persist: { chatId: persistedChatId },
    },
    auth: {
      persist: { userId, deviceId },
    },
  } = state;

  if (userId) {
    setUser({ id: userId, deviceId });
  }

  await connectWebsocket()(dispatch, getState);
  await init()(dispatch, getState);

  // let chatId = persistedChatId;
  // if (!chatId) {
  const chat = await getPersonalBotChat()(dispatch, getState);

  // chatId = chat.id;

  if (persistedChatId !== chat.id) {
    dispatch<A.InitAction>({ type: AT.SetDefaultChat, chatId: chat.id });
  }
  // }

  if (userId) {
    getUserProfile()(dispatch, getState);
  }

  const bot = await getPersonalBot()(dispatch, getState);

  return { bot };
};

export const init = (): DA<InitIncomingPayload> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { deviceId, authToken, userId } = state.auth.persist;

  const secToken = btoa(
    shajs('sha512')
      .update(
        'db97531fdb97531eca86420eca86420db97531fdb97531eca86420eca86420db' +
          deviceId
      )
      .digest('hex')
  );

  return wsAction<A.Init>(
    AAT.WsInit,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.Init,
            payload: {
              device_id: deviceId,
              user_id: userId,
              auth_token: authToken,
              security_token: secToken,
              time_zone: moment().format('YYYY-MM-DDTHH:mm:ss.SZ'),
              ...DEFAULT_INIT_PAYLOAD,
            },
          },
          state
        ),
    }
  );
};

export const applicationStarted = (): DA<{}> => async (dispatch, getState) => {
  const state = getState();

  return wsAction(
    AAT.WsApplicationStarted,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.ApplicationStarted,
            payload: {},
          },
          state
        ),
    }
  );
};
