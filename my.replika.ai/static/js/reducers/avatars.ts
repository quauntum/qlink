import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ToSuccess } from '../types/asyncActions';
import { AvatarState } from '../types/states';
import * as A from '../types/actions';
import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';

const DEFAULT_STATE: AvatarState = {
  persist: {
    models: [],
    lastUpdated: null,
    chooseAvatarScreenShown: false,
    customizationManifest: null
  }
};

type R<X extends A.AvatarAction> = Reducer<AvatarState, X>;
type RSuccess<X> = Reducer<AvatarState, ToSuccess<X>>;

const setAvatars: RSuccess<A.GetAvatars> = (state, { result }) => ({
  ...state,
  persist: {
    ...state.persist,
    models: result.avatars,
    lastUpdated: result.last_updated_timestamp
  }
});

const resetState: R<any> = state => ({
  ...DEFAULT_STATE
});

const setChooseAvatarScreenShown: R<A.SetChooseAvatarScreenShown> = state => ({
  ...state,
  persist: {
    ...state.persist,
    chooseAvatarScreenShown: true
  }
});

const getCustomizationManifestSuccess: RSuccess<A.GetCustomizationManifest> = (
  state,
  { result }
) => ({
  ...state,
  persist: {
    ...state.persist,
    customizationManifest: result
  }
});

export default function avatars(
  state: AvatarState = DEFAULT_STATE,
  action: A.AnyAction
): AvatarState {
  return applyReducer(
    'avatars',
    {
      [AAT.GetAvatars]: {
        success: setAvatars
      },
      [AAT.Logout]: {
        success: resetState,
        error: resetState
      },
      [AAT.DeleteAccount]: {
        success: resetState
      },
      [AT.SetChooseAvatarScreenShown]: setChooseAvatarScreenShown,
      [AAT.GetCustomizationManifest]: {
        success: getCustomizationManifestSuccess
      }
    },
    state,
    action
  );
}
