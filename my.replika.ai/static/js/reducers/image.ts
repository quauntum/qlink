import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ToSuccess } from '../types/asyncActions';
import { ImageState, SignedUrlCache } from '../types/states';
import * as A from '../types/actions';
import { AsyncActionTypes as AAT } from '../types/enums';

const DEFAULT_STATE: ImageState = {
  persist: {
    version: 1,
    signedUrlCache: []
  }
};

const URL_CACHE_LIMIT = 1000;

function addToCache(cache: SignedUrlCache[], url: string, signedUrl: string) {
  const record = cache.find(c => c.url === url);
  if (record) {
    return cache.map(c => (c.url === url ? { url, signedUrl } : c));
  } else {
    const newCache = [...cache, { url, signedUrl }];
    if (newCache.length > URL_CACHE_LIMIT) {
      newCache.shift();
    }
    return newCache;
  }
}

type RSuccess<X> = Reducer<ImageState, ToSuccess<X>>;

const setImageUrl: RSuccess<A.GetImageSignedUrl> = (
  state,
  { params, result }
) => ({
  ...state,
  persist: {
    ...state.persist,
    signedUrlCache: addToCache(
      state.persist.signedUrlCache,
      params.url,
      result.image_url
    )
  }
});

export default function image(
  state: ImageState = DEFAULT_STATE,
  action: A.AnyAction
): ImageState {
  return applyReducer(
    'image',
    {
      [AAT.GetImageSignedUrl]: {
        success: setImageUrl
      }
    },
    state,
    action
  );
}
