import { ApiError } from './apiError';
import { logoutOnAuthError } from '../actions/auth';
import { TDA } from '../types/redux';

export default async function tryAuthRequest<T>(
  request: () => Promise<T>,
  dispatch: TDA
) {
  try {
    await request();
  } catch (err) {
    if (err instanceof ApiError && err.statusCode === 401) {
      dispatch(logoutOnAuthError());
    } else {
      throw err;
    }
  }
}
