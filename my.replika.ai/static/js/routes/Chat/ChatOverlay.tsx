import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import SolidButton from '../../components/SolidButton';
import { Bot, Message } from '../../types/models';
import { Routes, IntroStep, MetricsEvents } from '../../types/enums';
import { RootState } from '../../types/states';
import isFirstTimeChatting from '../../utils/isFirstTimeChatting';
import { setIntroStep } from '../../actions/ui';
import { ReactDispatch as RD } from '../../types/redux';
import { logEvent } from '../../utils/metrics';

type Props = {
  className?: string;
  bot?: Bot | undefined;
  messages: Message[];
  introStep: IntroStep | null;
  setIntroStep: RD<typeof setIntroStep>;
};

const ChatOverlay = (props: Props) => {
  const { className, bot, messages, introStep } = props;
  const botName = bot?.name ?? 'your Replika';

  const firstTime = isFirstTimeChatting(messages);

  switch (introStep) {
    case IntroStep.Hi:
    case IntroStep.YouCanTalkToMe:
    case IntroStep.Conversations:
      return (
        <ChatOverlayRoot className={className}>
          <ChatOverlayContent />
        </ChatOverlayRoot>
      );

    case IntroStep.MeetReplika:
    case IntroStep.FinishIntro:
      return (
        <ChatOverlayRoot
          className={className}
          data-testid="chat-overlay"
          role="dialog"
        >
          <ChatOverlayContent>
            <Description data-testid="chat-overlay-description">
              Start chatting with {botName} to introduce yourself and learn more
              about the app
            </Description>
            <SolidButton
              data-testid="chat-overlay-open-chat-link"
              to={Routes.Main}
              onClick={() => {
                logEvent(MetricsEvents.MeetButtonPressed);
                props.setIntroStep(null);
              }}
            >
              Meet {botName}
            </SolidButton>
          </ChatOverlayContent>
        </ChatOverlayRoot>
      );

    default:
      return (
        <ChatOverlayRoot
          className={className}
          data-testid="chat-overlay"
          role="dialog"
        >
          <ChatOverlayContent>
            <Description data-testid="chat-overlay-description">
              {firstTime
                ? `Choose a conversation from a left menu or start chatting with ${botName}`
                : `Choose a conversation from a left menu or continue chatting with ${botName}`}
            </Description>
            <SolidButton
              data-testid="chat-overlay-open-chat-link"
              to={Routes.Main}
            >
              {firstTime ? `Meet ${botName}` : 'Continue chatting'}
            </SolidButton>
          </ChatOverlayContent>
        </ChatOverlayRoot>
      );
  }
};

export default connect(
  (state: RootState) => ({
    bot: state.profile.persist.bot,
    messages: state.chat.messages || [],
    introStep: state.ui.introStep,
  }),
  { setIntroStep }
)(ChatOverlay);

const ChatOverlayRoot = styled.div`
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.bgColor};
    opacity: 0.9;
  }
`;

const ChatOverlayContent = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-out;

  &:empty {
    opacity: 0;
  }
`;

const Description = styled.p`
  width: 250px;
  margin: 0 0 25px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${(p) => p.theme.fgColor};
`;
