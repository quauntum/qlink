import * as React from 'react';
import { Stage, Layer, Rect, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import styledOmitProps from '../../utils/styledOmitProps';
import { Customizations } from '../../types/enums';
import { fadeOutCss } from '../AvatarPlaceholder';
import Avatar2DPlaceholder from './Avatar2DPlaceholder';
import ClipImage, { Avatar2DTexture, Clip, useTexture } from '../ClipImage';
import eggUrl from '../../icons/Egg.svg';
import avatarSizes from './avatarSizes';

type Props = {
  className?: string;
  height: number;
  width: number;
  textures: {
    hair: Avatar2DTexture;
    eye: Avatar2DTexture;
    skin: Avatar2DTexture;
  };
  style?: React.CSSProperties;
  onLoad?: (dataUrl: string) => void;
  noFadeOut?: boolean;
  noPreview?: boolean;
  egged?: boolean;
  scale?: number;
  'data-testid'?: string;
  avatarFallback?: any;
};

const Avatar2D = ({
  className,
  style,
  textures,
  height,
  width,
  onLoad,
  noFadeOut,
  egged,
  noPreview,
  scale = 1,
  'data-testid': dataTestid,
  avatarFallback,
}: Props) => {
  const stageRef = React.useRef<Stage>(null);
  const [lastImages, setLastImages] = React.useState<
    | {
        [T in Customizations]: Clip;
      }
    | null
  >(null);

  const skinClip = useTexture(textures.skin);
  const eyeClip = useTexture(textures.eye);
  const hairClip = useTexture(textures.hair);

  React.useEffect(() => {
    if (skinClip && eyeClip && hairClip) {
      setLastImages({
        skin: skinClip,
        eye: eyeClip,
        hair: hairClip,
      });
    }
  }, [skinClip, eyeClip, hairClip]);

  const [eggImage] = useImage(eggUrl);

  const isReady = skinClip && eyeClip && hairClip && eggImage;

  React.useEffect(() => {
    if (onLoad && stageRef.current && isReady) {
      const dataUrl = stageRef.current.getStage().toDataURL();

      onLoad(dataUrl);
    }
  }, [onLoad, isReady]);

  const { imageScale, offset, baseScale } = avatarSizes(width, height, scale);

  if (!isReady && noPreview) {
    return avatarFallback ?? null;
  }

  return lastImages ? (
    <Avatar2DRoot
      data-testid={dataTestid}
      noFadeOut={noFadeOut}
      className={className}
      width={width / baseScale.x}
      height={height / baseScale.y}
      style={{
        width,
        height,
        opacity: isReady ? 1 : 0.5,
        filter: isReady ? 'none' : 'blur(2px)',
      }}
      listening={false}
      ref={stageRef}
    >
      {egged && (
        <Layer>
          <Rect
            fill="rgba(255,255,255,0.5)"
            width={width / baseScale.x}
            height={height / baseScale.y}
          />
          <Image
            image={eggImage}
            scale={imageScale}
            offset={offset}
            globalCompositeOperation="destination-in"
          />
        </Layer>
      )}
      <Layer filters={[Konva.Filters.Blur]} imageSmoothingEnabled>
        <ClipImage
          clip={lastImages.skin}
          offset={offset}
          scale={imageScale}
          eggImage={egged ? eggImage : undefined}
        />
      </Layer>
      <Layer filters={[Konva.Filters.Blur]} imageSmoothingEnabled>
        <ClipImage
          clip={lastImages.eye}
          offset={offset}
          scale={imageScale}
          eggImage={egged ? eggImage : undefined}
        />
      </Layer>
      <Layer filters={[Konva.Filters.Blur]} imageSmoothingEnabled>
        <ClipImage
          clip={lastImages.hair}
          offset={offset}
          scale={imageScale}
          eggImage={egged ? eggImage : undefined}
        />
      </Layer>
    </Avatar2DRoot>
  ) : noPreview ? (
    avatarFallback ?? null
  ) : (
    <Avatar2DPlaceholder
      data-testid={dataTestid && `${dataTestid} ${dataTestid}-placeholder`}
      noFadeOut={noFadeOut}
      className={className}
      style={style}
      width={width}
      height={height}
      scale={scale}
    />
  );
};

export default Avatar2D;

const Avatar2DRoot = styledOmitProps<{ noFadeOut?: boolean }, typeof Stage>(
  Stage,
  ['noFadeOut']
)`
  position: relative;
  overflow: hidden;
  transition: opacity 0.15s ease-out;

  ${(p) => (p.noFadeOut ? '' : fadeOutCss)};

  & div[role='presentation'] {
    transform-origin: 0% 0%;
    transform: scale(0.5);
  }
`;
