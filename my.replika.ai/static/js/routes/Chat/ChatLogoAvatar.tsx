import * as React from 'react';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component';
import styled from 'styled-components/macro';
import EggImage from '../../components/EggImage';

const Avatar2D = loadable(() =>
  import(/* webpackChunkName: "Avatar2D" */ '../../components/Avatar2D')
);

function ChatLogoAvatar({ className }: { className?: string }) {
  const bot = useSelector((state) => state.profile.persist.bot);

  if (!bot) {
    return <FallbackImage />;
  }

  return bot.avatar ? (
    <StyledAvatar
      className={className}
      noFadeOut
      noPreview
      textures={bot.avatar.customization}
      width={40}
      height={40}
      fallback={<FallbackImage className={className} />}
      avatarFallback={<FallbackImage className={className} />}
    />
  ) : (
    <EggImage imageUrl={bot.icon_url ?? undefined} />
  );
}

export default ChatLogoAvatar;

// webkit-mask-image is used to fix overflow in chrome (bug in canvas rendering)
// https://stackoverflow.com/questions/15007903/html5-canvas-with-rounded-corner/15090794
const StyledAvatar = styled(Avatar2D)`
  border-radius: 20px;
  overflow: hidden;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  background: ${(p) => p.theme.chatBgColor};
`;

const FallbackImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  background: ${(p) => p.theme.chatBgColor};
`;
