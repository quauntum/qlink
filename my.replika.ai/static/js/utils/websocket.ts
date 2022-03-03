import {
  IncomingWebsocketMessage,
  OutcomingWebsocketMessage,
} from '../types/websocket';
import guid from 'simple-guid';
import { WS_VERSION } from './constants';
import { RootState } from '../types/states';

let ws: WebSocket | null = null;

// Storage for promises that should be resolved when paired websocket message
// (with the same token) is received
const RESOLVERS_MAP = {};

// Message queue is filled when websocket is not initialized or not in open state
let messageQueue: OutcomingWebsocketMessage[] = [];

const sendOrQueue = (message: OutcomingWebsocketMessage) => {
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    messageQueue.push(message);
  } else {
    ws.send(JSON.stringify(message));
  }
};

export const closeConnection = () => {
  if (ws) {
    ws.onerror = null;
    ws.close();
  }

  ws = null;
};

function getWsUrl() {
  if (process.env.NODE_ENV === 'development') {
    const target = process.env.REACT_APP_PROXY_TARGET!;

    if (target.indexOf('http://localhost') === 0) {
      return `ws://localhost:8050/${WS_VERSION}`;
    } else if (target !== 'https://my.replika.ai') {
      const hostname = target.replace('https://', '');
      const wsHostname = hostname.replace(/^my-/, 'ws-');

      return `wss://${wsHostname}/${WS_VERSION}`;
    } else {
      return `wss://ws.replika.ai/${WS_VERSION}`;
    }
  } else {
    const { hostname } = window.location;

    if (hostname === 'my.replika.ai') {
      return `wss://ws.replika.ai/${WS_VERSION}`;
    } else {
      const wsHostname = hostname.replace(/^my-/, 'ws-');

      return `wss://${wsHostname}/${WS_VERSION}`;
    }
  }
}

export const openConnection = ({ onOpen, onClose, onWsMessage, onError }) => {
  try {
    closeConnection();

    ws = new WebSocket(getWsUrl());

    ws.onopen = (e) => {
      if (messageQueue.length > 0) {
        messageQueue.forEach((message) => ws!.send(JSON.stringify(message)));
        messageQueue = [];
      }
      onOpen(e);
    };

    ws.onclose = onClose;

    ws.onmessage = (e) => {
      if (typeof e.data === 'string') {
        const websocketMessage: IncomingWebsocketMessage = JSON.parse(e.data);

        onWsMessage(websocketMessage);

        const token =
          websocketMessage.token && websocketMessage.token.toLowerCase();

        if (websocketMessage.event_name === 'error') {
          onError(
            'messageError',
            new Error(websocketMessage.payload.error_message)
          );

          if (token && RESOLVERS_MAP[token]) {
            RESOLVERS_MAP[token].reject(
              new Error(websocketMessage.payload.error_message)
            );
            delete RESOLVERS_MAP[token];
          }
        } else {
          if (token && RESOLVERS_MAP[token]) {
            RESOLVERS_MAP[token].resolve(websocketMessage);
            delete RESOLVERS_MAP[token];
          }
        }
      } else {
        console.error('Unknown message format', e);
      }
    };

    ws.onerror = () => {
      // note: event passed here has no meaningful info
      onError('connectionError', new Error('Websocket error'));
    };
  } catch (err) {
    onError('connectionError', err);
  }
};

export const sendMessage = (
  m: OutcomingWebsocketMessage,
  state: RootState
): Promise<IncomingWebsocketMessage> => {
  const {
    auth: {
      persist: { userId, authToken, deviceId },
    },
  } = state;

  if (!deviceId) {
    return Promise.reject(
      new Error('Not sufficient auth data (no deviceId set)')
    );
  }

  const auth = {
    user_id: userId,
    auth_token: authToken,
    device_id: deviceId,
  };

  const token = guid().toLowerCase();
  const tokenizedMessage: OutcomingWebsocketMessage = {
    ...m,
    token,
    auth,
  };

  try {
    sendOrQueue(tokenizedMessage);
  } catch (err) {
    return Promise.reject(err);
  }

  return new Promise((resolve, reject) => {
    RESOLVERS_MAP[token] = { resolve, reject };
  });
};
