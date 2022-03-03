import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { WsState } from '../types/states';
import * as A from '../types/actions';
import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';

const DEFAULT_STATE: WsState = {
  status: 'disconnected',
  wsReady: false,
  persist: {
    chatId: undefined
  }
};

type R<X extends A.InitAction> = Reducer<WsState, X>;

const setStatusConnected: R<A.WebsocketOpen> = state => ({
  ...state,
  status: 'connected'
});

const setStatusConnecting: R<A.WebsocketStart> = state => ({
  ...state,
  status: 'connecting'
});

const setStatusDisconnected: R<A.WebsocketDisconnect> = state => ({
  ...state,
  status: 'disconnected'
});

const closeWsConnection: R<A.WebsocketClose> = (state, { needReconnect }) => ({
  ...state,
  status: needReconnect ? 'needReconnect' : 'disconnected'
});

const setDefaultChat: R<A.SetDefaultChat> = (state, { chatId }) => ({
  ...state,
  persist: {
    chatId
  }
});

const resetWs = () => ({ ...DEFAULT_STATE });

const setWsReady = state => ({
  ...state,
  wsReady: true
});

export default function ws(
  state: WsState = DEFAULT_STATE,
  action: A.InitAction | A.Logout | A.DeleteAccount
): WsState {
  return applyReducer(
    'ws',
    {
      [AT.WsStart]: setStatusConnecting,
      [AT.WsOpen]: setStatusConnected,
      [AT.WsClose]: closeWsConnection,
      [AT.WsDisconnect]: setStatusDisconnected,
      [AT.SetDefaultChat]: setDefaultChat,
      [AAT.WsInit]: {
        success: setWsReady
      },
      [AAT.Logout]: {
        success: resetWs,
        error: resetWs
      },
      [AAT.DeleteAccount]: {
        success: resetWs
      }
    },
    state,
    action
  );
}
