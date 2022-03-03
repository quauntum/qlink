import * as React from 'react';
import styled from 'styled-components/macro';
import { DEFAULT_EGG_IMAGE } from '../utils/constants';
import getImageUrlForPixelRatio from '../utils/getImageUrlForPixelRatio';

const StyledSvg = styled.svg`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-align: center;
`;

const getClipId = () =>
  `Clip_${parseInt((Math.random() * 10000).toString(), 10)}`;

type Props = {
  className?: string;
  imageUrl?: string | undefined;
  showPlaceholder?: boolean;
};

const EggImage = React.memo(
  ({
    imageUrl = getImageUrlForPixelRatio(DEFAULT_EGG_IMAGE),
    className
  }: Props) => {
    const clipId = getClipId();
    const pathId = `${clipId}-path`;

    return (
      <StyledSvg viewBox="0 0 209 247" className={className}>
        <defs>
          <path
            id={pathId}
            d={`M205 138.04C205 75.12 154.85 5 105 5 55.25 5 5 75.19 5 138.04 5 191.23 49.2 235 105 235s100-43.77 100-96.96z`}
          />
          <clipPath id={clipId}>
            <use xlinkHref={`#${pathId}`} />
          </clipPath>
        </defs>
        <g>
          <use
            className="egg-image-background"
            xlinkHref={`#${pathId}`}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="2"
          />
          <image
            className="egg-image"
            style={{
              clipPath: `url(#${clipId})`
            }}
            width="100%"
            height="100%"
            xlinkHref={imageUrl}
            preserveAspectRatio="xMidYMid slice"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
      </StyledSvg>
    );
  }
);

export default EggImage;
