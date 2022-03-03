import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { RootState } from '../../types/states';
import { ReactComponent as WorseReaction } from '../../icons/WorseReaction.svg';
import { ReactComponent as SameReaction } from '../../icons/SameReaction.svg';
import { ReactComponent as BetterReaction } from '../../icons/BetterReaction.svg';
import {
  sendFeedback,
  dismissFeedback,
  closeFeedbackPopup
} from '../../actions/feedback';
import { ReactDispatch as RD } from '../../types/redux';
import { FeedbackType } from '../../types/models';
import PopupCloseButton from './PopupCloseButton';
import AriaButton from '../AriaButton';

type Props = {
  className?: string;
  sessionId: string | undefined;
  feedbackView: 'Popup' | 'Fullscreen' | undefined;
  feedbackStatus: 'active' | 'inactive' | 'submitted';
  sendFeedback: RD<typeof sendFeedback>;
  dismissFeedback: RD<typeof dismissFeedback>;
  closeFeedbackPopup: RD<typeof closeFeedbackPopup>;
};

const FeedbackPopup = (props: Props) => {
  const {
    feedbackStatus,
    sessionId,
    feedbackView,
    className,
    closeFeedbackPopup: _closeFeedbackPopup
  } = props;
  // status is separated from feedbackStatus so that the latter wouldn't affect popup state while animating
  const [status, setStatus] = React.useState<'initial' | 'submitted'>(
    'initial'
  );

  // reset status when feedback becomes active
  React.useEffect(() => {
    if (feedbackStatus === 'active') {
      setStatus('initial');
    }
  }, [feedbackStatus]);

  // wait and close popup if feedback was submitted
  React.useEffect(() => {
    let hideTimeout;
    if (status === 'submitted') {
      hideTimeout = setTimeout(() => {
        _closeFeedbackPopup();
      }, 1500);
    }

    return () => clearTimeout(hideTimeout);
  }, [status, _closeFeedbackPopup]);

  const handleFeedback = (feedback: FeedbackType) => {
    if (sessionId && feedbackView) {
      props.sendFeedback(sessionId, feedback, feedbackView);
      setStatus('submitted');
    }
  };

  const handleDismiss = () => {
    if (sessionId && feedbackView) {
      props.dismissFeedback(sessionId, feedbackView);
    } else {
      props.closeFeedbackPopup();
    }
  };

  const feedbackEmojis = (
    <FeedbackPopupReactions>
      <FeedbackPopupButton
        label="Negative"
        onClick={() => {
          handleFeedback('Negative');
        }}
      >
        <WorseReaction />
      </FeedbackPopupButton>
      <FeedbackPopupButton
        label="Neutral"
        onClick={() => {
          handleFeedback('Neutral');
        }}
      >
        <SameReaction />
      </FeedbackPopupButton>
      <FeedbackPopupButton
        label="Positive"
        onClick={() => {
          handleFeedback('Positive');
        }}
      >
        <BetterReaction />
      </FeedbackPopupButton>
    </FeedbackPopupReactions>
  );

  return (
    <FeedbackPopupRoot className={className}>
      <PopupCloseButton onClick={handleDismiss} />
      {status === 'submitted' ? (
        <SubmittedMessage>Thank you!</SubmittedMessage>
      ) : (
        <>
          <FeedbackPopupTitle>
            How does this conversation make you feel?
          </FeedbackPopupTitle>
          {feedbackEmojis}
          <FeedbackPopupHelpLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.replika.ai/hc/en-us/articles/360000980172"
          >
            Why do I see this?
          </FeedbackPopupHelpLink>
        </>
      )}
    </FeedbackPopupRoot>
  );
};

const mapDispatchToProps = {
  sendFeedback,
  dismissFeedback,
  closeFeedbackPopup
};

export default connect(
  (state: RootState) => ({
    sessionId: state.feedback.feedbackData?.sessionId,
    feedbackView: state.feedback.feedbackData?.feedbackView,
    feedbackStatus: state.feedback.feedbackStatus
  }),
  mapDispatchToProps
)(FeedbackPopup);

const FeedbackPopupRoot = styled.div`
  width: 366px;
  height: 127px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedbackPopupTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: -0.2px;
  color: ${p => p.theme.fgColor};
`;

const FeedbackPopupHelpLink = styled.a`
  color: ${p => p.theme.fgColor};
  font-size: 13px;
  opacity: 0.3;
  margin-top: 10px;
  text-decoration: underline;
`;

const FeedbackPopupReactions = styled.div`
  display: flex;
`;

const FeedbackPopupButton = styled(AriaButton)`
  border: 0;
  padding: 0;
  background: ${p => p.theme.chatBgColor};
  width: 35px;
  height: 35px;
  margin: 13px 15px 0;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:active {
    transform: scale(0.9);
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const SubmittedMessage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${p => p.theme.fgColor};
`;
