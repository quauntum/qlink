import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImageSignedUrl } from '../actions/image';

type Props = {
  src: string | undefined;
  children: (
    objectUrl: string | undefined,
    isImageLoaded: boolean
  ) => React.ReactNode;
};

const ApiImageLoader = (props: Props) => {
  const { src, children } = props;

  const dispatch = useDispatch();
  const signedUrl = useSelector((state) => {
    const record = state.image.persist.signedUrlCache.find(
      (c) => c.url === props.src
    );

    return record?.signedUrl;
  });

  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [localSignedUrl, setLocalSignedUrl] = React.useState(signedUrl);

  const fetchSignedUrl = React.useCallback(() => {
    if (src) {
      let cancelled = false;

      dispatch(getImageSignedUrl(src)).then(({ image_url }) => {
        if (!cancelled) {
          setLocalSignedUrl(image_url);
        }
      });

      return () => {
        cancelled = true;
      };
    }

    return;
  }, [src, dispatch]);

  // if we have signedUrl, try to load image and re-request signedUrl on error
  React.useEffect(() => {
    if (src && localSignedUrl && !isImageLoaded) {
      const img = new Image();
      let cancelled = false;

      img.onload = () => {
        if (!cancelled) {
          setIsImageLoaded(true);
        }
        img.src = '';
      };

      img.src = localSignedUrl;

      // for some reason, onerror is called when image is already cached,
      // so we skip it in that case
      if (!img.complete) {
        img.onerror = (e) => {
          console.error(e);
          fetchSignedUrl();
        };
      }

      return () => {
        cancelled = true;
      };
    }

    return;
  }, [src, localSignedUrl, isImageLoaded, fetchSignedUrl]);

  // reset isImageLoaded if src changed
  React.useEffect(() => {
    setIsImageLoaded(false);
  }, [src]);

  // if there's no signedUrl in cache yet, request it
  React.useEffect(() => {
    if (src && !localSignedUrl) {
      fetchSignedUrl();
    }
  }, [src, localSignedUrl, fetchSignedUrl]);

  return <>{children(localSignedUrl, isImageLoaded)}</>;
};

export default ApiImageLoader;
