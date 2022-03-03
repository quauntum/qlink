import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import styledOmitProps from '../utils/styledOmitProps';
import { ReactComponent as AvatarPlaceholderIcon } from '../icons/AvatarPlaceholder.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  src?: string | undefined;
  fadeOutBottom?: boolean;
};

const AvatarPlaceholder = ({
  className,
  style,
  src,
  fadeOutBottom = false
}: Props) => {
  return src ? (
    <AvatarPlaceholderRoot style={style} className={className} src={src} />
  ) : (
    <IconWrapper fadeOutBottom={fadeOutBottom}>
      <StyledFullHeightIcon style={style} className={className} />
    </IconWrapper>
  );
};

export default AvatarPlaceholder;

export const fadeOutCss = css`
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0)
  );

  /* MS Edge does not support masking; */
  @supports (-ms-ime-align: auto) {
    &:before {
      position: absolute;
      content: '';
      display: block;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 15%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }
  }
`;

const AvatarPlaceholderRoot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconWrapper = styledOmitProps<{ fadeOutBottom: boolean }>('div', [
  'fadeOutBottom'
])`
  overflow: hidden;
  height: 100%;
  ${p => (p.fadeOutBottom ? fadeOutCss : '')}
`;

const StyledFullHeightIcon = styled(AvatarPlaceholderIcon)`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.fgColor};
  opacity: 0.15;
`;
