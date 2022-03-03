import { Dispatch } from 'redux';
import {
  AsyncActionStatus,
  ARequest,
  ASuccess,
  AError,
  AsyncRequest,
  ToSuccess
} from '../types/asyncActions';
import { AsyncActionTypes as AT } from '../types/enums';
import { ServerError } from '../types/http';
import { IncomingWebsocketMessage } from '../types/websocket';
import { WsAction, ApiAction } from '../types/actions';
import { ApiError } from './apiError';
import { baseFetchOptions } from './fetchOptions';

type WsRequestOptions<R extends IncomingWebsocketMessage['payload']> = {
  onRequest: () => Promise<IncomingWebsocketMessage>;
  onSuccess?: (result: R) => void;
  onError?: (error: Error) => void;
};

export const requestAction = <T extends AT, P extends object>(
  type: T,
  params: P
): ARequest<T, P> => ({
  type,
  status: AsyncActionStatus.request,
  params
});

export const successAction = <T extends AT, R extends object, P extends object>(
  type: T,
  result: R,
  params: P
): ASuccess<T, R, P> => ({
  type,
  status: AsyncActionStatus.success,
  result,
  params
});

export const errorAction = <T extends AT, P extends object>(
  type: T,
  error: Error,
  params: P
): AError<T, P> => ({
  type,
  status: AsyncActionStatus.error,
  error,
  params
});

type ApiRequestOptions<R extends object> = {
  onRequest: AsyncRequest<R>;
  onSuccess?: (result: R) => void;
  onError?: (error: Error) => void;
};

export type ApiResult<A extends ApiAction> = ToSuccess<A>['result'];

const getApiResult = async <R>(response: Response): Promise<R> => {
  if (response.status > 200) {
    const serverError: ServerError = await response.json();
    const error = new ApiError(
      'error_message' in serverError
        ? serverError.error_message
        : 'message' in serverError
        ? serverError.message
        : serverError.code,
      response.status
    );
    throw error;
  }

  return response.json();
};

export const apiFetch = async <R = {}>(
  url: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  body?: FormData | Blob | object
) => {
  try {
    const options = baseFetchOptions(method, body);
    const response = await fetch(url, options);

    return await getApiResult<R>(response);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const apiAction = async <A extends ApiAction>(
  type: A['type'],
  dispatch: Dispatch<A>,
  params: A['params'],
  options: ApiRequestOptions<ApiResult<A>>
): Promise<ApiResult<A>> => {
  type R = ApiResult<A>;

  dispatch<A>(requestAction(type, params) as A);

  try {
    const response = await options.onRequest();

    const result = await getApiResult<R>(response);

    dispatch(successAction(type, result, params) as A);

    if (options.onSuccess) {
      options.onSuccess(result);
    }

    return result;
  } catch (e) {
    console.error(e);
    dispatch(errorAction(type, e, params) as A);
    if (options.onError) {
      options.onError(e);
    }
    throw e;
  }
};

export type WsResult<A extends WsAction> = ToSuccess<A>['result'];

export const wsAction = async <A extends WsAction>(
  type: A['type'],
  dispatch: Dispatch<A>,
  params: A['params'],
  options: WsRequestOptions<WsResult<A>>
): Promise<WsResult<A>> => {
  type R = WsResult<A>;

  dispatch(requestAction(type, params) as A);

  try {
    const result = await options.onRequest();
    const payload = result.payload as R;

    dispatch(successAction(type, payload, params) as A);

    if (options.onSuccess) {
      options.onSuccess(payload);
    }

    return payload;
  } catch (e) {
    console.error(e);
    dispatch(errorAction(type, e, params) as A);
    if (options.onError) {
      options.onError(e);
    }
    throw e;
  }
};
