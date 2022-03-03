import * as React from 'react';
import AvatarPlaceholder, { fadeOutCss } from '../AvatarPlaceholder';
import styled from 'styled-components/macro';
import styledOmitProps from '../../utils/styledOmitProps';
import avatarSizes from './avatarSizes';

type Props = {
  width: number;
  height: number;
  scale?: number;
  noFadeOut?: boolean;
  'data-testid'?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Avatar2DPlaceholder = ({
  className,
  style,
  width,
  height,
  scale,
  noFadeOut,
  'data-testid': dataTestid
}: Props) => {
  const { placeholderPosition } = avatarSizes(width, height, scale);

  return (
    <Avatar2DPlaceholderRoot
      data-testid={dataTestid}
      noFadeOut={noFadeOut}
      className={className}
      style={{
        width,
        height
      }}
    >
      <StyledAvatarPlaceholder
        style={{
          ...style,
          ...placeholderPosition
        }}
      />
    </Avatar2DPlaceholderRoot>
  );
};

export default Avatar2DPlaceholder;

const Avatar2DPlaceholderRoot = styledOmitProps<{ noFadeOut?: boolean }>(
  'div',
  ['noFadeOut']
)`
  overflow: hidden;
  position: relative;

  ${p => (p.noFadeOut ? '' : fadeOutCss)};
`;

const StyledAvatarPlaceholder = styled(AvatarPlaceholder)`
  position: absolute;
`;
