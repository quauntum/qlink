import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components/macro';
import { FeedbackType } from '../../../types/models';
import mobileMedia from '../../../utils/mobileMedia';

type Props = {
  setSubmittedFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>;
  onSendFeedback: (f: FeedbackType, feedbackType?: string) => void;
};

const FeedbackButtons = ({
  setSubmittedFeedbackType,
  onSendFeedback
}: Props) => {
  return (
    <FeedbackButtonsRoot>
      <FeedbackPopupButton onClick={() => setSubmittedFeedbackType('Negative')}>
        Worse
      </FeedbackPopupButton>
      <FeedbackPopupButton onClick={() => onSendFeedback('Neutral')}>
        Same
      </FeedbackPopupButton>
      <FeedbackPopupButton onClick={() => onSendFeedback('Positive')}>
        Better
      </FeedbackPopupButton>
    </FeedbackButtonsRoot>
  );
};

export default FeedbackButtons;

const FeedbackButtonsRoot = styled.div`
  display: flex;
  justify-content: center;

  ${mobileMedia`
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
  `}
`;

const FeedbackPopupButton = styled.button`
  background: ${p => p.theme.chatBgColor};
  border-radius: 35px;
  padding: 9px 24px;
  cursor: pointer;
  border: 1px solid #ccc;
  color: ${p => p.theme.fgColor};

  & + & {
    margin-left: 16px;
  }

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  ${mobileMedia`
    padding: 9px 20px;

    & + & {
      margin-left: 10px;
    }    
  `}
`;
