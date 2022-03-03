import * as React from 'react';
import styled from 'styled-components/macro';
import MessageHover from './MessageHover';
import ApiImageLoader from '../ApiImageLoader';
import ImagePlaceholder from '../ImagePlaceholder';
import { MessageActionType, ImagePreview } from '../../types/models';

type Align = 'left' | 'right';
type Props = {
  messageId: string;
  className?: string;
  imageUrl: string;
  align: Align;
  timestamp: string;
  actions: MessageActionType[] | undefined;
  isLastMessage: boolean;
  botName: string | undefined;
  imagePreview?: ImagePreview | undefined;
  onClick: (url: string) => void;
};

const BubbleImageRoot = styled(MessageHover)`
  position: relative;
  z-index: 1;
  max-width: 100%;
  cursor: pointer;

  &:focus {
    border-radius: 17px;
    background-color: ${p => p.theme.bubbleImageSelectedBgColor};
  }

  &:focus img {
    box-shadow: 0 0 0 2px ${p => p.theme.bubbleImageSelectedBgColor};
  }
`;

const StyledImage = styled.img`
  display: block;
  border: none;
  max-width: 100%;
  max-height: 25vh;
  border-radius: 17px;
  overflow: hidden;
  height: ${(p: { isEmpty: boolean }) => (p.isEmpty ? '25vh' : 'auto')};
`;

const StyledImagePlaceholder = styled(ImagePlaceholder)`
  width: 300px;
`;

class BubbleImage extends React.PureComponent<Props> {
  render() {
    const {
      className,
      imageUrl,
      align,
      timestamp,
      actions,
      messageId,
      isLastMessage,
      botName,
      imagePreview,
      onClick
    } = this.props;

    const isRobotMessage = align === 'left';
    const altText = isRobotMessage
      ? botName
        ? `${botName} sent you an image`
        : 'Replika sent you an image'
      : 'you sent an image';

    const previewRatio = imagePreview
      ? imagePreview.orientation > 4 && imagePreview.orientation < 9
        ? imagePreview.height / imagePreview.width
        : imagePreview.width / imagePreview.height
      : 0;

    return (
      <BubbleImageRoot
        messageId={messageId}
        className={className}
        align={align}
        timestamp={timestamp}
        actions={actions}
        isLastMessage={isLastMessage}
        label={altText}
      >
        <ApiImageLoader src={imageUrl}>
          {(objectUrl, isImageLoaded) =>
            isImageLoaded && objectUrl ? (
              <StyledImage
                alt={altText}
                data-testid="chat-message-image"
                data-author={align === 'left' ? 'replika' : 'user'}
                src={objectUrl}
                isEmpty={!isImageLoaded}
                onClick={() => onClick(objectUrl)}
              />
            ) : imagePreview ? (
              <StyledImagePlaceholder
                previewUrl={imagePreview.src}
                previewRatio={previewRatio}
                orientation={imagePreview.orientation}
              />
            ) : (
              <StyledImagePlaceholder />
            )
          }
        </ApiImageLoader>
      </BubbleImageRoot>
    );
  }
}

export default BubbleImage as React.ComponentClass<Props>;
