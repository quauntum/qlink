import * as React from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import {
  Message,
  MediaPreviewMap,
  ImagePreviewMap,
  Bot,
} from '../../types/models';
import MessageComponent from './Message';
import Typing from '../../components/Typing';
import BubbleText from './BubbleText';
import mobileMedia from '../../utils/mobileMedia';

type Align = 'left' | 'right';

type Props = {
  className?: string;
  timestamp: string | undefined;
  align: Align;
  messages: Message[];
  isTyping: boolean;
  mediaPreviews: MediaPreviewMap;
  imagePreviews: ImagePreviewMap;
  isLast: boolean;
  bot: Bot | undefined;
};

const moveUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const MessageGroupRoot = styled.div`
  flex: 1 0 auto;
  padding: 0 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 2px;
  justify-content: ${(p: { align: Align }) =>
    p.align === 'right' ? 'flex-end' : 'flex-start'};

  ${mobileMedia`
    padding: 0 16px;
  `};
`;

const MessageGroupInner = styled.div`
  max-width: 60%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${(p: { align: Align }) =>
    p.align === 'right' ? 'flex-end' : 'flex-start'};
`;

const StyledMessage = styled(MessageComponent)`
  flex: 1 0 auto;
  margin-top: 2px;
  animation: ${(p: { moveUp: boolean; isLast: boolean; align: Align }) =>
    p.moveUp
      ? css`
          ${moveUp} 0.2s ease-out;
        `
      : 'none'};

  &:focus {
    outline: none;
  }
`;

const Timestamp = styled.h3`
  margin: 0;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  align-self: stretch;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  color: ${(p) => p.theme.fgColor};
`;

const TypingBubble = styled(BubbleText)`
  animation: ${moveUp} 0.2s ease-out;
  margin-top: 2px;
  flex: 1 0 auto;
`;

const StyledTyping = styled(Typing)`
  width: 30px;
  height: 10px;
  color: ${(p) => p.theme.fgColor};
`;

const getMessagesHash = (messages: Message[]) =>
  messages.map((m) => m.id).join(',');

export default class MessageGroup extends React.Component<Props> {
  shouldComponentUpdate(prevProps: Props) {
    // TODO: better performance for mediaPreviews updates
    return (
      !![
        'timestamp',
        'isTyping',
        'className',
        'bot',
        'align',
        'isLast',
        'mediaPreviews',
        'messageReactions',
      ].find((k) => this.props[k] !== prevProps[k]) ||
      getMessagesHash(this.props.messages) !==
        getMessagesHash(prevProps.messages)
    );
  }

  render() {
    const {
      timestamp,
      messages,
      isTyping,
      className,
      bot,
      align,
      mediaPreviews,
      imagePreviews,
      isLast,
    } = this.props;

    return (
      <MessageGroupRoot className={className} align={align}>
        {!!timestamp && (
          <Timestamp role="heading" aria-level={3} tabIndex={-1}>
            {timestamp}
          </Timestamp>
        )}
        <MessageGroupInner align={align}>
          {messages.map((m, idx) => (
            <StyledMessage
              key={m.id}
              message={m}
              align={align}
              isLast={!isTyping && idx === messages.length - 1}
              moveUp={
                isLast &&
                align === 'right' &&
                m.content.type === 'text' &&
                idx === messages.length - 1
              }
              mediaPreviews={mediaPreviews}
              imagePreviews={imagePreviews}
              isLastGroup={isLast}
              botName={bot?.name}
            />
          ))}
          {isTyping && (
            <TypingBubble align={align} hasTail messageLength={0}>
              <StyledTyping />
            </TypingBubble>
          )}
        </MessageGroupInner>
      </MessageGroupRoot>
    );
  }
}
