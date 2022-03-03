import guid from 'simple-guid';
import { LocationChangeAction } from 'connected-react-router';
import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { AuthState } from '../types/states';
import {
  ActionTypes as AT,
  AsyncActionTypes as AAT,
  LoginFormStates as LFS,
  AuthTypes,
  Pronouns,
  Genders
} from '../types/enums';
import * as A from '../types/actions';
import { ToRequest, ToError, ToSuccess } from '../types/asyncActions';
import { ApiError } from '../utils/apiError';

const DEFAULT_STATE: AuthState = {
  trialPeriodExpired: false,
  sendConfirmationStatus: 'initial',
  sendConfirmationError: undefined,
  deleteAccountStatus: 'initial',
  deleteAccountError: undefined,
  persist: {
    authToken: undefined,
    userId: undefined,
    deviceId: undefined
  },
  loginState: {
    isSending: false,
    formState: LFS.Initial,
    emailOrPhone: '',
    passwordField: '',
    codeField: '',
    serverError: undefined,
    accessForbidden: false,
    inputError: undefined,
    confirmationCode: '',
    authType: AuthTypes.Unknown,
    idType: undefined,
    codeRetryTimeout: 0,
    codeExpiration: undefined,
    codeLength: undefined,
    recoveryText: ''
  },
  signupState: {
    signupStatus: 'initial',
    emailCheckStatus: 'initial',
    emailCheckError: null,
    name: '',
    email: '',
    password: '',
    replikaName: null,
    signupError: undefined,
    inputError: undefined,
    invalidEmailCounter: 0,
    uploadedUserpicUrl: undefined,
    gender: Genders.Female,
    pronoun: Pronouns.She,
    birthday: undefined,
    signupInProgress: false,
    avatar: undefined,
    customization: {}
  },
  avatarCustomizationTextures: {}
};

type R<X extends A.AuthAction | A.InitAction> = Reducer<AuthState, X>;
type RRequest<X> = Reducer<AuthState, ToRequest<X>>;
type RError<X> = Reducer<AuthState, ToError<X>>;
type RSuccess<X> = Reducer<AuthState, ToSuccess<X>>;

const emailCheckRequest: RRequest<A.CheckAccountInfo> = state => {
  return {
    ...state,
    signupState: {
      ...state.signupState,
      emailCheckStatus: 'submitting',
      emailCheckError: null
    }
  };
};

const emailCheckError: RError<A.CheckAccountInfo> = (state, action) => ({
  ...state,
  signupState: {
    ...state.signupState,
    emailCheckStatus: 'error',
    emailCheckError: action.error
  }
});

const emailCheckSuccess: RSuccess<A.CheckAccountInfo> = (state): AuthState => ({
  ...state,
  signupState: {
    ...state.signupState,
    emailCheckStatus: 'success'
  }
});

const signupRequest: RRequest<A.Signup> = (state): AuthState => ({
  ...state,
  signupState: {
    ...state.signupState,
    signupStatus: 'submitting'
  }
});

const signupError: RError<A.Signup> = (state, action): AuthState => ({
  ...state,
  signupState: {
    ...state.signupState,
    signupStatus: 'error',
    signupError: action.error.message
  }
});

const checkDeviceId: R<A.CheckDeviceId> = state => ({
  ...state,
  persist: {
    ...state.persist,
    deviceId: state.persist.deviceId || guid()
  }
});

// TODO move to local state
const loginFieldChange: R<A.LoginFieldChange> = (state, action): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    [action.field]: action.value,
    serverError: undefined,
    inputError: undefined
  }
});

const checkAccountRequest: RRequest<A.AccountExists> = (state): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: true
  }
});

const checkAccountSuccess: RSuccess<A.AccountExists> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: action.result.auth_type === 'phone', // another request when phone
    formState:
      action.result.auth_type === 'password'
        ? LFS.InputPassword
        : LFS.InputCode,
    idType: action.result.id_type,
    authType:
      action.result.auth_type === 'password'
        ? AuthTypes.AuthByPassword
        : AuthTypes.SendSmsCode
  }
});

const phoneCodeRequestError: RError<A.AccountExists> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.toString()
  }
});

const checkAccountError: RError<A.AccountExists> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.message
  }
});

const phoneCodeRequestSuccess: RSuccess<A.SendSmsCode> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    formState: LFS.InputCode,
    codeExpiration: action.result.expiration,
    codeRetryTimeout: action.result.retry_timeout,
    codeLength: action.result.code_length
  }
});

const loginRequest: RRequest<A.PasswordLogin> = (state): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: true
  }
});

const passwordLoginSuccess: RSuccess<A.PasswordLogin> = (
  state,
  action
): AuthState => ({
  ...state,
  persist: {
    ...state.persist,
    authToken: action.result.auth_token,
    userId: action.result.user_id
  },
  loginState: {
    ...state.loginState,
    isSending: false,
    formState: LFS.Initial,
    passwordField: ''
  }
});

const passwordLoginError: RError<A.PasswordLogin> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.message,
    accessForbidden:
      action.error instanceof ApiError &&
      action.error.statusCode === 403 &&
      !(action.error.message === 'Invalid password')
  }
});

const phoneLoginSuccess: RSuccess<A.PhoneLogin> = (
  state,
  action
): AuthState => ({
  ...state,
  persist: {
    ...state.persist,
    authToken: action.result.auth_token,
    userId: action.result.user_id
  },
  loginState: {
    ...state.loginState,
    isSending: false,
    formState: LFS.Initial
  }
});

const phoneLoginError: RError<A.PhoneLogin> = (state, action): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.message
  }
});

const authBySmsCodeSuccess: RSuccess<A.AuthBySmsCode> = (
  state,
  action
): AuthState => ({
  ...state,
  persist: {
    ...state.persist,
    authToken: action.result.auth_token,
    userId: action.result.user_id
  },
  loginState: {
    ...state.loginState,
    isSending: false,
    formState: LFS.Initial
  }
});

const authBySmsCodeError: RError<A.AuthBySmsCode> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.message
  }
});

const passwordRecoverRequest: RRequest<A.RecoverPassword> = (
  state
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: true
  }
});

const passwordRecoverRequestSuccess: RSuccess<A.RecoverPassword> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    formState: LFS.RecoverPasswordRequestSent,
    recoveryText: action.result.recovery_text
  }
});

const passwordRecoverRequestError: RError<A.RecoverPassword> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    isSending: false,
    serverError: action.error.message
  }
});

const setCodeResendTimeout: R<A.SetCodeResendTimeout> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    codeRetryTimeout: action.seconds
  }
});

const resendSMSRequestSuccess: RSuccess<A.ResendSmsCode> = (
  state,
  action
): AuthState => ({
  ...state,
  loginState: {
    ...state.loginState,
    formState: LFS.CodeResent,
    codeRetryTimeout: action.result.retry_timeout,
    codeLength: action.result.code_length
  }
});

const resendSMSRequestError: RError<A.ResendSmsCode> = (state, action) => ({
  ...state,
  loginState: {
    ...state.loginState,
    serverError: action.error.message
  }
});

const resendConfirmationEmail: RRequest<A.ResendConfirmationEmail> = (
  state
): AuthState => ({
  ...state,
  sendConfirmationStatus: 'sending',
  sendConfirmationError: undefined
});

const resendConfirmationEmailSuccess: RSuccess<A.ResendConfirmationEmail> = (
  state
): AuthState => ({
  ...state,
  sendConfirmationStatus: 'sent'
});

const resendConfirmationEmailError: RError<A.ResendConfirmationEmail> = (
  state,
  action
): AuthState => ({
  ...state,
  sendConfirmationStatus: 'initial',
  sendConfirmationError: action.error.message
});

const logoutSuccess: RSuccess<A.Logout> = state => ({
  ...DEFAULT_STATE,
  persist: {
    ...DEFAULT_STATE.persist,
    deviceId: state.persist.deviceId
  }
});

const logoutError: RError<A.Logout> = state => ({
  ...DEFAULT_STATE,
  persist: {
    ...DEFAULT_STATE.persist,
    deviceId: state.persist.deviceId
  }
});

const deleteAccountRequest: RRequest<A.DeleteAccount> = state => ({
  ...state,
  deleteAccountStatus: 'sending',
  deleteAccountError: undefined
});

const deleteAccountError: RError<A.DeleteAccount> = (state, action) => ({
  ...state,
  deleteAccountStatus: 'initial',
  deleteAccountError: action.error.message
});

const deleteAccountSuccess: RSuccess<A.DeleteAccount> = state => ({
  ...DEFAULT_STATE,
  persist: {
    ...DEFAULT_STATE.persist,
    deviceId: state.persist.deviceId
  }
});

const signupSuccess: RSuccess<A.Signup> = (state, action) => ({
  ...state,
  persist: {
    ...state.persist,
    authToken: action.result.auth_token,
    userId: action.result.user_id
  },
  signupState: {
    ...state.signupState,
    signupStatus: 'success'
  }
});

const updateLocation: Reducer<AuthState, LocationChangeAction> = (
  state,
  { payload: { location } }
) =>
  location.pathname === '/login' && state.loginState.formState !== LFS.Initial
    ? {
        ...state,
        loginState: {
          ...state.loginState,
          formState: LFS.Initial,
          codeField: ''
        }
      }
    : state;

const goToSignupStep: R<A.GoToSignupStep> = (state, action) => {
  return {
    ...state,
    signupState: {
      ...state.signupState,
      formState: action.signupStep
    }
  };
};

const updateSignupState: R<A.UpdateSignupState> = (state, action) => {
  return {
    ...state,
    signupState: {
      ...state.signupState,
      ...(action.signupInput || {})
    }
  };
};

const initNewUserSuccess: RSuccess<A.InitNewUser> = (state, action) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      authToken: action.result.auth_token,
      userId: action.result.user_id
    }
  };
};

const setTrialPeriodExpired: R<A.TrialPeriodExpired> = state => ({
  ...state,
  trialPeriodExpired: true
});

const setAvatarCustomizations: RSuccess<A.GetAvatarCustomizations> = (
  state,
  action
) => ({
  ...state,
  avatarCustomizationTextures: {
    ...state.avatarCustomizationTextures,
    [action.params.avatarId]: action.result
  }
});

export default function auth(
  state: AuthState = DEFAULT_STATE,
  action: A.AnyAction
): AuthState {
  return applyReducer(
    'auth',
    {
      [AT.GoToSignupStep]: goToSignupStep,
      [AT.UpdateSignupState]: updateSignupState,
      [AT.LoginFieldChange]: loginFieldChange,
      [AAT.AccountExists]: {
        request: checkAccountRequest,
        success: checkAccountSuccess,
        error: checkAccountError
      },
      [AAT.SendSmsCode]: {
        success: phoneCodeRequestSuccess,
        error: phoneCodeRequestError
      },
      [AAT.PasswordLogin]: {
        request: loginRequest,
        success: passwordLoginSuccess,
        error: passwordLoginError
      },
      [AAT.PhoneLogin]: {
        success: phoneLoginSuccess,
        error: phoneLoginError
      },
      [AAT.AuthBySmsCode]: {
        success: authBySmsCodeSuccess,
        error: authBySmsCodeError
      },
      [AAT.RecoverPassword]: {
        request: passwordRecoverRequest,
        success: passwordRecoverRequestSuccess,
        error: passwordRecoverRequestError
      },
      [AT.SetCodeResendTimeout]: setCodeResendTimeout,
      [AAT.ResendSmsCode]: {
        success: resendSMSRequestSuccess,
        error: resendSMSRequestError
      },
      [AAT.SendVoiceCode]: {
        success: resendSMSRequestSuccess,
        error: resendSMSRequestError
      },
      [AAT.Logout]: {
        success: logoutSuccess,
        error: logoutError
      },
      [AT.CheckDeviceId]: checkDeviceId,
      [AAT.ResendConfirmationEmail]: {
        request: resendConfirmationEmail,
        success: resendConfirmationEmailSuccess,
        error: resendConfirmationEmailError
      },
      [AAT.DeleteAccount]: {
        request: deleteAccountRequest,
        error: deleteAccountError,
        success: deleteAccountSuccess
      },
      [AAT.CheckAccountInfo]: {
        request: emailCheckRequest,
        error: emailCheckError,
        success: emailCheckSuccess
      },

      // [AT.UserpicUploadLocallySuccess]: uploadUserpicLocally,

      [AAT.Signup]: {
        request: signupRequest,
        error: signupError,
        success: signupSuccess
      },

      [AAT.InitNewUser]: {
        success: initNewUserSuccess
      },

      [AT.TrialPeriodExpired]: setTrialPeriodExpired,
      [AAT.GetAvatarCustomizations]: {
        success: setAvatarCustomizations
      },

      '@@router/LOCATION_CHANGE': updateLocation
    },
    state,
    action
  );
}
