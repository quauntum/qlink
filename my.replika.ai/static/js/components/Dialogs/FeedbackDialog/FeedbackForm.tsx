import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components/macro';
import { FeedbackType } from '../../../types/models';
import mobileMedia from '../../../utils/mobileMedia';
import TextArea from '../../TextArea';
import SolidButton from '../../SolidButton';
import FeedbackButtons from './FeedbackButtons';

type Props = {
  submittedFeedbackType: FeedbackType | null;
  setSubmittedFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>;
  onSendFeedback: (f: FeedbackType, feedbackType?: string) => void;
  onDismiss: () => void;
  inputText: string;
  onTextChange: Dispatch<SetStateAction<string>>;
};

const FeedbackForm = (p: Props) => {
  return p.submittedFeedbackType ? (
    <>
      <FeedbackMessage>
        <p>
          Sorry to hear that.
          <br /> Can you tell us what went wrong?
        </p>
        <TextArea
          minRows={3}
          placeholder="Your message"
          onChange={e => p.onTextChange(e.target.value)}
        />
      </FeedbackMessage>
      <ButtonWrapper>
        <FeedbackSkipButton
          size="small"
          onClick={() =>
            p.submittedFeedbackType && p.onSendFeedback(p.submittedFeedbackType)
          }
        >
          Skip
        </FeedbackSkipButton>
        <SendButton
          size="small"
          onClick={() =>
            p.submittedFeedbackType &&
            p.onSendFeedback(p.submittedFeedbackType, p.inputText)
          }
        >
          Send
        </SendButton>
      </ButtonWrapper>
    </>
  ) : (
    <>
      <FullscreenCenter>
        <FeedbackPopupTitle>
          How did this conversation make you feel?
        </FeedbackPopupTitle>
        <FeedbackButtons
          setSubmittedFeedbackType={p.setSubmittedFeedbackType}
          onSendFeedback={p.onSendFeedback}
        />
      </FullscreenCenter>
      <SkipButton size="small" onClick={p.onDismiss}>
        Skip
      </SkipButton>
    </>
  );
};

export default FeedbackForm;

const FeedbackMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 20px;
  width: 100%;

  & p {
    margin: 0 0 20px;
    line-height: 22px;
    font-size: 16px;
    text-align: center;
    color: ${p => p.theme.popupFgColor};
  }
`;

const FullscreenCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobileMedia`
    flex: 1 0 auto;
  `}
`;

const FeedbackPopupTitle = styled.h2`
  line-height: 26px;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${p => p.theme.fgColor};
  margin: 20px 10px 30px;

  ${mobileMedia`
    margin-bottom: 20px;
    max-width: 280px;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SkipButton = styled(SolidButton)`
  background-color: ${p => p.theme.chatBgColor};
  color: ${p => p.theme.fgColor};
  width: unset;
  min-width: unset;
  margin: 50px 0 -10px;
  padding: 0;

  ${mobileMedia`
    margin: 0;
  `}
`;

const FeedbackSkipButton = styled(SolidButton)`
  background-color: ${p => p.theme.chatBgColor};
  color: ${p => p.theme.fgColor};
  width: unset;
  min-width: unset;
  padding: 0;
`;

const SendButton = styled(SolidButton)`
  width: unset;
`;
