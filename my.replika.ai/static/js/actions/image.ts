import { AsyncActionTypes as AAT } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import {
  requestAction,
  successAction,
  errorAction,
  apiAction
} from '../utils/asyncAction';
import createResizedImageBlobFromFile from '../utils/createResizedImageBlobFromFile';

export const getImage = (url: string): DA<Blob> => async (
  dispatch,
  getState
) => {
  const params = { url };

  try {
    dispatch<A.GetImage>(requestAction(AAT.GetImage, params));

    const res = await fetch(
      `${API_BASE_URL}/images?image_url=${encodeURIComponent(url)}`,
      fetchOptions(getState(), 'GET')
    );
    if (res.status !== 200) {
      throw await res.text();
    }
    const result = await res.blob();

    dispatch<A.GetImage>(successAction(AAT.GetImage, {}, params));

    return result;
  } catch (error) {
    dispatch<A.GetImage>(errorAction(AAT.GetImage, error, params));
    throw error;
  }
};

export const getImageSignedUrl = (
  url: string
): DA<{ image_url: string; url_type: 'external' | 'signed' }> => async (
  dispatch,
  getState
) => {
  return apiAction<A.GetImageSignedUrl>(
    AAT.GetImageSignedUrl,
    dispatch,
    { url },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/images/signed/actions/get_url`,
          fetchOptions(getState(), 'POST', { image_url: url })
        )
    }
  );
};

export const uploadImage = (
  image: Blob,
  sizeLimit: number | null,
  onImageCreated?: (image: HTMLImageElement, orientation: number) => void
): DA<{ image_url: string }> => async (dispatch, getState) => {
  let blob: Blob = image;
  let width = 0;
  let height = 0;

  if (sizeLimit) {
    const res = await createResizedImageBlobFromFile(
      image,
      sizeLimit,
      false,
      onImageCreated
    );
    blob = res.blob;
    width = res.width;
    height = res.height;
  }

  const fetchOpts = fetchOptions(getState(), 'POST', blob);

  return apiAction<A.UploadImage>(
    AAT.UploadImage,
    dispatch,
    { width, height },
    {
      onRequest: () => fetch(`${API_BASE_URL}/images`, fetchOpts)
    }
  );
};
