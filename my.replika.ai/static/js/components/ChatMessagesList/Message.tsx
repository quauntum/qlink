import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { PopupboxManager } from 'react-popupbox';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import BubbleText from './BubbleText';
import BubbleImage from './BubbleImage';
import {
  Message as M,
  MediaPreviewMap,
  ImagePreviewMap,
} from '../../types/models';
import { getFirstUrl } from '../../utils/url';
import BubbleMediaPreview from './BubbleMediaPreview';
import TextWithLinks from './TextWithLinks';
import { setActiveDialog } from '../../actions/ui';
import { clearChatMessageAlert } from '../../actions/chat';
import { Dialogs } from '../../types/enums';
import mobileMedia from '../../utils/mobileMedia';
import { ReactComponent as CheckIcon } from '../../icons/Check.svg';

type Align = 'left' | 'right';

type Props = {
  className?: string;
  message: M;
  align: Align;
  isLast: boolean;
  mediaPreviews: MediaPreviewMap;
  imagePreviews: ImagePreviewMap;
  isLastGroup: boolean;
  botName: string | undefined;
};

const openPopupbox = (content) => {
  PopupboxManager.open({
    content,
    config: { fadeIn: true, fadeInSpeed: 100, fadeOutSpeed: 100 },
  });
};

const closePopupbox = () => {
  PopupboxManager.close({
    config: { fadeIn: true, fadeInSpeed: 100, fadeOutSpeed: 100 },
  });
};

const ANIM_SCORE_DURATION = 2500;
const ANIM_SCORE_DELAY = 250;

const ANIM_MEMORY_DURATION = 2500;
const ANIM_MEMORY_DELAY = 800;

function MessageAlerts({ messageId }: { messageId: string }) {
  const dispatch = useDispatch();
  const messageAlerts = useSelector(
    (state) =>
      state.chat.messageAlerts.filter((a) => a.messageId === messageId),
    (left, right) => left.length === right.length
  );
  const messageScore =
    messageAlerts
      .map((a) => (a.type === 'score' ? a.score : -1))
      .find((s) => s !== -1) ?? 0;
  const statementRemembered =
    messageAlerts.find((a) => a.type === 'memory') != null;

  React.useEffect(() => {
    if (messageScore > 0) {
      const to = setTimeout(() => {
        dispatch(clearChatMessageAlert('score', messageId));
      }, ANIM_SCORE_DURATION + ANIM_SCORE_DELAY);

      return () => clearTimeout(to);
    }

    return;
  }, [messageScore, messageId, dispatch]);

  React.useEffect(() => {
    if (statementRemembered) {
      const to = setTimeout(() => {
        dispatch(clearChatMessageAlert('memory', messageId));
      }, ANIM_MEMORY_DURATION + ANIM_MEMORY_DELAY);

      return () => clearTimeout(to);
    }

    return;
  }, [statementRemembered, messageId, dispatch]);

  return (
    <MessageAlertsRoot>
      {statementRemembered ? (
        <MemoryCheck>
          <CheckIcon />
        </MemoryCheck>
      ) : null}
      {messageScore ? <FadingPoints>+{messageScore} XP</FadingPoints> : null}
    </MessageAlertsRoot>
  );
}

const MessageAlertsRoot = styled.div`
  position: absolute;
  flex: 0 0 auto;
  z-index: 1;
  height: 45px;
  left: -140px;
  width: 110px;
  top: 0;
`;

const SCORE_FADE = keyframes`
  0% {
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const SCORE_SCALE = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  50% {
    transform: scale(1.3);
    opacity: 0;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const MEMORY_SCALE_FADE = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }

  10% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: scale(1.3);
    opacity: 1;
  }

  30% {
    transform: scale(1);
    opacity: 1;
  }

  90% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const MemoryCheck = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: ${(p) => p.theme.fgColor};
  transform-origin: 50% 50%;
  animation: ${MEMORY_SCALE_FADE} ${ANIM_MEMORY_DURATION}ms ease-in
    ${ANIM_MEMORY_DELAY}ms 1;
`;

// points are positioned absolutely, so that it wouldn't mess with
// bubble width (otherwise bubble can overflow screen on mobile)
const FadingPoints = styled.div`
  position: absolute;
  left: 65px;
  top: 0;
  opacity: 0;
  font-size: 10px;
  text-align: center;
  line-height: 45px;
  width: 45px;
  height: 45px;
  color: ${(p) => p.theme.fgColor};
  border-radius: 40px;
  animation: ${SCORE_FADE} ${ANIM_SCORE_DURATION}ms ease-out
    ${ANIM_SCORE_DELAY}ms 1;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${(p) => p.theme.fgColor};
    border-radius: 40px;
    opacity: 0;
    animation: ${SCORE_SCALE} ${ANIM_SCORE_DURATION}ms ease-out
      ${ANIM_SCORE_DELAY}ms 1;
  }
`;

const Message = React.memo((props: Props) => {
  const {
    className,
    message,
    isLast,
    isLastGroup,
    align,
    mediaPreviews,
    imagePreviews,
    botName,
  } = props;
  const dispatch = useDispatch();

  const { content } = message;

  const isImage = content.type === 'images' || content.type === 'achievement';
  const hasTail = isLast && !isImage;
  const mediaPreviewUrl = getFirstUrl(content.text);
  const mediaPreview = mediaPreviewUrl
    ? mediaPreviews[mediaPreviewUrl]
    : undefined;
  const timestamp = moment(message.meta.timestamp).format('LT');

  const clientToken = message.meta.client_token;
  const imagePreview = imagePreviews[clientToken];

  switch (content.type) {
    case 'images':
      return (
        <BubbleImage
          messageId={message.id}
          className={className}
          imageUrl={content.text}
          align={align}
          timestamp={timestamp}
          actions={message.meta.permitted_actions}
          isLastMessage={isLast && isLastGroup}
          botName={botName}
          imagePreview={imagePreview}
          onClick={(url) =>
            openPopupbox(
              <ImageContainer onClick={closePopupbox}>
                <LightboxImage src={url} />
              </ImageContainer>
            )
          }
        />
      );

    case 'achievement':
      return (
        <BubbleImage
          messageId={message.id}
          className={className}
          imageUrl={content.icon_url}
          align={align}
          timestamp={timestamp}
          actions={message.meta.permitted_actions}
          isLastMessage={isLast && isLastGroup}
          botName={botName}
          onClick={() =>
            dispatch(
              setActiveDialog({
                type: Dialogs.Badge,
                badge: {
                  type: 'Legacy',
                  id: content.achievement_id,
                  title: content.text,
                  description: content.achievement_description,
                  image_url_2x: content.icon_url,
                  image_url_3x: content.icon_url,
                },
              })
            )
          }
        />
      );

    default:
      return (
        <PointsContainer>
          <MessageAlerts messageId={message.id} />
          <BubbleText
            messageId={message.id}
            className={className}
            hasTail={hasTail}
            align={align}
            actions={message.meta.permitted_actions}
            timestamp={timestamp}
            isLastMessage={isLast && isLastGroup}
            botName={botName}
            label={content.text}
            messageLength={content.text.length}
          >
            <TextWithLinks
              id={`message-${message.id}-text`}
              text={content.text}
              isLast={isLast && isLastGroup}
              isRobotMessage={align === 'left'}
              botName={botName}
            />
            {!!mediaPreviewUrl && (
              <BubbleMediaPreview
                data-testid="chat-message-media-preview"
                mediaPreview={mediaPreview || undefined}
                mediaPreviewUrl={mediaPreviewUrl}
              />
            )}
          </BubbleText>
        </PointsContainer>
      );
  }
});

export default Message;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LightboxImage = styled.img`
  max-width: 80vh;
  max-height: 80vh;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }

  ${mobileMedia`
    width: 100%;
  `};
`;

const PointsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
