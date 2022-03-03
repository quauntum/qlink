import * as React from 'react';
import styled from 'styled-components/macro';
import CircleSpinner from '../components/CircleSpinner';
import styledOmitProps from '../utils/styledOmitProps';
import getOrientationTransform from '../utils/getOrientationTransform';

type Props = {
  previewUrl?: string | null;
  previewRatio?: number;
  orientation?: number;
};

const Placeholder = styledOmitProps<Props>('div', [
  'previewUrl',
  'previewRatio',
  'orientation'
])`
  width: ${p => (p.previewRatio ? `calc(25vh * ${p.previewRatio})` : '300px')};
  height: 25vh;
  border: 1px solid ${p => p.theme.borderColor};
  color: ${p => p.theme.dimmedFgColor};
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    z-index: 0;
    position: absolute;
    content: "";
    background-image: url(${p => p.previewUrl || ''});
    background-size: cover;
    background-position: center;
    ${p => getOrientationTransform(p.orientation, p.previewRatio)}
  }

  &:after {
    z-index: 1;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    opacity: ${p => (p.previewUrl ? 0.5 : 0.1)};
  }

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const StyledCircleSpinner = styled(CircleSpinner)`
  z-index: 2;
  width: 70px;
  height: 70px;
`;

const ImagePlaceholder = ({ previewUrl, previewRatio, orientation }: Props) => {
  return (
    <Placeholder
      previewUrl={previewUrl}
      previewRatio={previewRatio}
      orientation={orientation}
    >
      <StyledCircleSpinner />
    </Placeholder>
  );
};

export default ImagePlaceholder;
