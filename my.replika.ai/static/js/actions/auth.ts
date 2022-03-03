import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import * as A from '../types/actions';
import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  MetricsEvents,
} from '../types/enums';
import fetchOptions from '../utils/fetchOptions';
import { DA } from '../types/redux';
import { RootState } from '../types/states';
import { API_BASE_URL } from '../utils/constants';
import { closeConnection } from '../utils/websocket';
import { logEvent } from '../utils/metrics';
import { apiAction, ApiResult } from '../utils/asyncAction';
import { getPersonalBot } from './profile';
import { CAPABILITIES } from '../utils/constants';
import { AsyncActionStatus } from '../types/asyncActions';

export const handleLoginFieldsChange: (
  field: string,
  value: string
) => A.LoginFieldChange = (field, value) => ({
  type: AT.LoginFieldChange,
  field,
  value,
});

export function setResendTimeout(seconds: number): A.SetCodeResendTimeout {
  return {
    type: AT.SetCodeResendTimeout,
    seconds,
  };
}

function startCountdown(s: number) {
  return (dispatch: Dispatch<A.AuthAction>) => {
    const cb = () => {
      dispatch<A.AuthAction>(setResendTimeout(s--));

      if (s >= 0) {
        setTimeout(cb, 1000);
      }
    };

    cb();
  };
}

export const checkAccountExistance = (): DA<
  ApiResult<A.AccountExists>
> => async (dispatch, getState) => {
  const { emailOrPhone } = getState().auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/get_auth_type`;

  const fetchOpts = fetchOptions(getState(), 'POST', {
    id_string: emailOrPhone,
  });

  return apiAction<A.AccountExists>(
    AAT.AccountExists,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: (result: {
        auth_type: 'phone_obscured' | 'phone' | 'password';
      }) => {
        if (result.auth_type === 'phone') {
          sendSmsCode(dispatch, getState);
        }
        dispatch(push('/login/enter-password'));
      },
    }
  );
};

const sendSmsCode: DA<ApiResult<A.SendSmsCode>> = async (
  dispatch,
  getState
) => {
  const { emailOrPhone } = getState().auth.loginState;

  const fetchOpts = fetchOptions(getState(), 'POST', {
    id_type: 'phone',
    id_string: emailOrPhone,
  });

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/send_sms_code`;

  return apiAction<A.SendSmsCode>(
    AAT.SendSmsCode,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: (result) => {
        startCountdown(result.retry_timeout)(dispatch);
      },
    }
  );
};

const handleLoginSuccess = (dispatch, getState: () => RootState) => {
  getPersonalBot()(dispatch, getState);
};

export const sendPasswordLogin = (): DA<ApiResult<A.PasswordLogin>> => async (
  dispatch,
  getState
) => {
  const state = getState();

  const { emailOrPhone, passwordField, idType } = state.auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/auth_by_password`;
  const fetchOpts = fetchOptions(state, 'POST', {
    id_type: idType,
    id_string: emailOrPhone,
    password: passwordField,
    capabilities: CAPABILITIES,
  });

  return apiAction<A.PasswordLogin>(
    AAT.PasswordLogin,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: () => handleLoginSuccess(dispatch, getState),
    }
  );
};

export const authBySmsCode = (): DA<ApiResult<A.AuthBySmsCode>> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { emailOrPhone, codeField } = state.auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/auth_by_sms_code`;
  const fetchOpts = fetchOptions(state, 'POST', {
    id_type: 'phone',
    id_string: emailOrPhone,
    sms_code: codeField,
    capabilities: CAPABILITIES,
  });

  return apiAction<A.AuthBySmsCode>(
    AAT.AuthBySmsCode,
    dispatch,
    { emailOrPhone, smsCode: codeField },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: () => handleLoginSuccess(dispatch, getState),
    }
  );
};

export const recoverPassword = (): DA<ApiResult<A.RecoverPassword>> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { emailOrPhone, idType } = state.auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/recover_password`;
  const fetchOpts = fetchOptions(state, 'POST', {
    id_type: idType,
    id_string: emailOrPhone,
  });

  return apiAction<A.RecoverPassword>(
    AAT.RecoverPassword,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
    }
  );
};

export const resendSMSCode = (): DA<ApiResult<A.ResendSmsCode>> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { emailOrPhone } = state.auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/send_sms_code`;
  const fetchOpts = fetchOptions(state, 'POST', {
    id_type: 'phone',
    id_string: emailOrPhone,
  });

  return apiAction<A.ResendSmsCode>(
    AAT.ResendSmsCode,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: (result) => {
        startCountdown(result.retry_timeout)(dispatch);
      },
    }
  );
};

export const sendVoiceCode = (): DA<ApiResult<A.SendVoiceCode>> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { emailOrPhone } = state.auth.loginState;

  const endpoint = `${API_BASE_URL}/auth/sign_in/actions/send_voice_code`;
  const fetchOpts = fetchOptions(state, 'POST', {
    id_type: 'phone',
    id_string: emailOrPhone,
  });

  return apiAction<A.SendVoiceCode>(
    AAT.SendVoiceCode,
    dispatch,
    { emailOrPhone },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: (result) => {
        startCountdown(result.retry_timeout)(dispatch);
      },
    }
  );
};

export const sendLogOutRequest = (): DA<ApiResult<A.Logout>> => async (
  dispatch,
  getState
) => {
  const endpoint = `${API_BASE_URL}/logout`;
  const fetchOpts = fetchOptions(getState(), 'POST');

  return apiAction<A.Logout>(
    AAT.Logout,
    dispatch,
    {},
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: () => {
        closeConnection();

        dispatch(push('/'));
      },
      onError: () => {
        closeConnection();

        dispatch(push('/'));
      },
    }
  );
};

export const logoutOnAuthError = (): DA<ApiResult<A.Logout>> => async (
  dispatch,
  getState
) => {
  closeConnection();

  dispatch(push('/'));

  return dispatch({
    type: AAT.Logout,
    status: AsyncActionStatus.success,
    result: {},
    params: {},
  });
};

export const resendConfirmationEmail = (): DA<
  ApiResult<A.ResendConfirmationEmail>
> => async (dispatch, getState) => {
  const endpoint = `${API_BASE_URL}/profile/actions/verify_email`;
  const fetchOpts = fetchOptions(getState(), 'POST');

  return apiAction<A.ResendConfirmationEmail>(
    AAT.ResendConfirmationEmail,
    dispatch,
    {},
    {
      onRequest: () => fetch(endpoint, fetchOpts),
    }
  );
};

export const deleteAccount = (
  password: string,
  reason: string
): DA<ApiResult<A.DeleteAccount>> => async (dispatch, getState) => {
  const state = getState();
  const { userId } = state.auth.persist;

  if (!userId) {
    throw new Error('No user id');
  }

  const endpoint = `${API_BASE_URL}/profile`;
  const fetchOpts = fetchOptions(state, 'DELETE', { password });

  return apiAction<A.DeleteAccount>(
    AAT.DeleteAccount,
    dispatch,
    { userId, reason },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
      onSuccess: () => {
        logEvent(MetricsEvents.AccountDeleted, { reason });

        closeConnection();

        dispatch(push('/'));
      },
    }
  );
};

export const setNewPassword = (
  password: string,
  token: string
): DA<ApiResult<A.SetNewPassword>> => async (dispatch, getState) => {
  const endpoint = '/api/recovery_and_verification/actions/recover_password';
  const fetchOpts = fetchOptions(getState(), 'POST', {
    verification_token: token,
    new_password: password,
  });

  return apiAction<A.SetNewPassword>(
    AAT.SetNewPassword,
    dispatch,
    {
      token,
      password,
    },
    {
      onRequest: () => fetch(endpoint, fetchOpts),
    }
  );
};
