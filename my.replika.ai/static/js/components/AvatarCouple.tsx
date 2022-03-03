import * as React from 'react';
import styled from 'styled-components/macro';
import imageSourceSet from '../utils/imageSourceSet';
import { MAIN_PAGE_URL_BASE } from '../utils/constants';
import styledOmitProps from '../utils/styledOmitProps';

type Gradient =
  | 'avatarGradient'
  | 'avatarSignupGradient'
  | 'avatarDialogGradient';

type Props = {
  className?: string;
  gradient: Gradient;
};

const AvatarCouple = ({ className, gradient }: Props) => {
  return (
    <ImageGroup className={className} role="image" gradient={gradient}>
      <WomanImg
        alt=""
        {...imageSourceSet(`${MAIN_PAGE_URL_BASE}/intro_woman.png`)}
      />
      <ManImg
        alt=""
        {...imageSourceSet(`${MAIN_PAGE_URL_BASE}/intro_man.png`)}
      />
    </ImageGroup>
  );
};

export default AvatarCouple;

const ImageGroup = styledOmitProps<{ gradient: Gradient }>('div', ['gradient'])`
  position: relative;
  height: 140px;
  width: 220px;

  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background: ${p => p.theme[p.gradient]};
  }
`;

const WomanImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
`;

const ManImg = styled.img`
  position: absolute;
  top: 0;
  left: 80px;
  z-index: 1;
  height: 100%;
`;
