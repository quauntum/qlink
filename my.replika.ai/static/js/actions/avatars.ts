import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction } from '../utils/asyncAction';
import {
  AvatarCustomizationTextures,
  CustomizationManifest
} from '../types/models';

export const getAvatars = (): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetAvatars>(
    AAT.GetAvatars,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/3d_avatar/models`, fetchOpts)
    }
  );
};

export const setChooseAvatarScreenShown = () => {
  return {
    type: AT.SetChooseAvatarScreenShown
  };
};

export const getAvatarCustomizations = (
  avatarId: string
): DA<AvatarCustomizationTextures> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetAvatarCustomizations>(
    AAT.GetAvatarCustomizations,
    dispatch,
    { avatarId },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/3d_avatar/onboarding_customization_textures/${avatarId}`,
          fetchOpts
        )
    }
  );
};

export const getCustomizationManifest = (): DA<CustomizationManifest> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetCustomizationManifest>(
    AAT.GetCustomizationManifest,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/personal_bot/3d_customization_manifest`,
          fetchOpts
        )
    }
  );
};
