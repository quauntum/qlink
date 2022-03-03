import * as React from 'react';
import { Image, Group } from 'react-konva';
import { ImageClip } from '../types/models';

export type Avatar2DTexture = {
  clip: ImageClip;
};

type XY = { x: number; y: number };

export type Clip = {
  image: HTMLImageElement;
  mask: HTMLImageElement;
  offset: { x: number; y: number };
};

export const useTexture = (texture: Avatar2DTexture | undefined) => {
  const [clip, setClip] = React.useState<Clip | null>(null);
  React.useEffect(() => {
    if (texture?.clip) {
      let cancellationToken = {
        cancelled: false
      };
      const offset = texture.clip.position || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      const image = new window.Image();
      image.crossOrigin = 'anonymous';
      image.setAttribute('crossorigin', 'anonymous');
      image.src = texture.clip.image_url;
      let imageLoaded = false;
      image.onload = () => {
        imageLoaded = true;
        if (imageLoaded && maskLoaded && !cancellationToken.cancelled) {
          setClip({ image, mask, offset });
        }
      };

      const mask = new window.Image();
      mask.src = texture.clip.mask_url;
      let maskLoaded = false;
      mask.onload = () => {
        maskLoaded = true;
        if (imageLoaded && maskLoaded && !cancellationToken.cancelled) {
          setClip({ image, mask, offset });
        }
      };

      return () => {
        cancellationToken.cancelled = true;
        setClip(null);
      };
    }

    return;
  }, [texture]);

  return clip;
};

type Props = {
  clip: Clip;
  offset: XY;
  scale: XY;
  opacity?: number;
  eggImage?: HTMLImageElement;
};

const ClipImage = ({ clip, offset, scale, opacity, eggImage }: Props) => {
  const clipOffset = {
    x: offset.x - clip.offset.x,
    y: offset.y - clip.offset.y
  };

  return (
    <Group opacity={opacity}>
      <Image image={clip.image} offset={clipOffset} scale={scale} />
      <Image
        image={clip.mask}
        offset={clipOffset}
        scale={scale}
        globalCompositeOperation="destination-in"
      />
      {eggImage && (
        <Image
          image={eggImage}
          scale={scale}
          offset={offset}
          globalCompositeOperation="destination-in"
        />
      )}
    </Group>
  );
};

export default ClipImage;
