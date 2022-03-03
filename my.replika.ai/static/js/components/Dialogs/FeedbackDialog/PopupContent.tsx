import React from 'react';
import styled from 'styled-components/macro';
import { FeedbackType } from '../../../types/models';
import mobileMedia from '../../../utils/mobileMedia';
import { closeFeedbackPopup } from '../../../actions/feedback';
import { ReactDispatch as RD } from '../../../types/redux';
import SubmittedMessage from './SubmittedMessage';
import FeedbackForm from './FeedbackForm';

type Props = {
  onSendFeedback: (f: FeedbackType, feedbackType?: string) => void;
  onDismiss: () => void;
  status: 'initial' | 'submitted';
  feedbackStatus: 'active' | 'inactive' | 'submitted';
  closeFeedbackPopup: RD<typeof closeFeedbackPopup>;
};

const PopupContent = (p: Props) => {
  const [
    submittedFeedbackType,
    setSubmittedFeedbackType
  ] = React.useState<FeedbackType | null>(null);
  const [inputText, setInputText] = React.useState('');

  // reset when feedback becomes active
  React.useEffect(() => {
    if (p.feedbackStatus === 'active') {
      setSubmittedFeedbackType(null);
      setInputText('');
    }
  }, [p.feedbackStatus]);

  return (
    <PopupContentRoot>
      {p.status === 'submitted' ? (
        <SubmittedMessage
          closeFeedbackPopup={p.closeFeedbackPopup}
          submittedFeedbackType={submittedFeedbackType}
        />
      ) : (
        <FeedbackForm
          onSendFeedback={p.onSendFeedback}
          onDismiss={p.onDismiss}
          submittedFeedbackType={submittedFeedbackType}
          setSubmittedFeedbackType={setSubmittedFeedbackType}
          inputText={inputText}
          onTextChange={setInputText}
        />
      )}
    </PopupContentRoot>
  );
};

export default PopupContent;

const PopupContentRoot = styled.div`
  width: 386px;
  min-height: 230px;
  padding: 35px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;

  ${mobileMedia`
    width: 100vw;
    margin: 0 auto;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
  `};
`;
