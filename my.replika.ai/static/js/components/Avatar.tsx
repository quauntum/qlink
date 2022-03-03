import * as React from 'react';
import styled from 'styled-components/macro';
import loadable from '@loadable/component';
import { useSelector } from 'react-redux';
import { getCustomizationManifest } from '../actions/avatars';
import useApi from '../utils/useApi';
import useCachedObject from '../utils/useCachedObject';
import Avatar2DPlaceholder from './Avatar2D/Avatar2DPlaceholder';

const Avatar2D = loadable(() =>
  import(/* webpackChunkName: "Avatar2D" */ './Avatar2D')
);
const Avatar3D = loadable(() =>
  import(/* webpackChunkName: "Avatar3D" */ './Avatar3D')
);

type Props = {
  className?: string;
  progressPosition?: 'left' | 'right';
  height: number;
  width: number;
};

const Avatar = ({ className, progressPosition, height, width }: Props) => {
  const manifest = useApi(
    state => state.avatars.persist.customizationManifest,
    getCustomizationManifest,
    { memoDeepEqual: true }
  );

  const disabled3d = useSelector(state => state.ui.persist.disabled3d);

  const bot = useSelector(state => state.profile.persist.bot);

  const customization = useCachedObject(bot?.avatar?.customization);

  const avatarLocked = disabled3d || window.location.search === '?no3d';
  const dataTestid = avatarLocked ? 'avatar-2d' : 'avatar-3d';

  const avatar2d = React.useMemo(() => {
    return customization ? (
      <Avatar2D
        fallback={<Avatar2DPlaceholder width={width} height={height} />}
        data-testid="avatar-placeholder"
        textures={customization}
        height={height}
        width={width}
      />
    ) : null;
  }, [customization, height, width]);

  return (
    <AvatarRoot data-testid={dataTestid} className={className}>
      {avatarLocked ? (
        avatar2d
      ) : (
        <StyledAvatar3D
          fallback={<Avatar2DPlaceholder width={width} height={height} />}
          manifest={manifest}
          botMood={bot?.mood}
          progressPosition={progressPosition}
        >
          {avatar2d}
        </StyledAvatar3D>
      )}
    </AvatarRoot>
  );
};

export default Avatar;

const StyledAvatar3D = styled(Avatar3D)`
  width: 100%;
  height: 100%;
`;

const AvatarRoot = styled.div`
  position: relative;
`;
