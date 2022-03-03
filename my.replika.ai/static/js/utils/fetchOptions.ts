// import guid from 'simple-guid';
import md5 from 'md5';
import { RootState } from '../types/states';

type Options = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  credentials: 'include';
  headers: { [key: string]: string } | Headers;
  body?: string | FormData | Blob;
};

const wrapHeaders = (headersMap: { [key: string]: string }) =>
  'Headers' in window ? new Headers(headersMap) : headersMap;

/**
 * returns fetch options for basic api request with json response
 */
export const baseFetchOptions = (
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  body?: FormData | Blob | object,
  customHeaders?: { [key: string]: string }
): Options => {
  let headersMap: { [key: string]: string } = {
    ...(customHeaders || {}),
    Accept: 'application/json',
  };

  if (method === 'GET') {
    return {
      method,
      credentials: 'include',
      headers: wrapHeaders(headersMap),
    };
  } else if (body instanceof FormData || body instanceof Blob) {
    return {
      method,
      credentials: 'include',
      headers: wrapHeaders(headersMap),
      body,
    };
  } else {
    headersMap = {
      ...headersMap,
      'Content-Type': 'application/json',
    };

    return {
      method,
      credentials: 'include',
      headers: wrapHeaders(headersMap),
      body: JSON.stringify(body || {}),
    };
  }
};

/**
 * returns fetch options with authentification headers
 */
const fetchOptions = (
  state: RootState,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  body?: FormData | Blob | object
): Options => {
  const { deviceId, authToken, userId } = state.auth.persist;

  if (!deviceId) {
    throw new Error('No device id');
  }

  let headersMap: { [key: string]: string } = {
    'X-Device-Id': deviceId,
    'X-Device-Type': 'web',
    // TODO: only required for auth methods
    'X-Timestamp-Hash': md5('time_covfefe_prefix=2020_' + deviceId),
  };

  if (authToken) {
    headersMap = {
      ...headersMap,
      'X-Auth-Token': authToken,
    };
  }

  if (userId) {
    headersMap = {
      ...headersMap,
      'X-User-Id': userId,
    };
  }

  return baseFetchOptions(method, body, headersMap);
};

export default fetchOptions;
