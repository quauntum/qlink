import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../types/states';
import {
  sendFeedback,
  dismissFeedback,
  closeFeedbackPopup
} from '../../../actions/feedback';
import { ReactDispatch as RD } from '../../../types/redux';
import { FeedbackType } from '../../../types/models';
import PopupContent from './PopupContent';
import { Dialog } from '../../DialogLayout';

type Props = {
  onClose: () => void;
  sessionId: string | undefined;
  feedbackStatus: 'active' | 'inactive' | 'submitted';
  feedbackView: 'Popup' | 'Fullscreen' | undefined;
  sendFeedback: RD<typeof sendFeedback>;
  dismissFeedback: RD<typeof dismissFeedback>;
  closeFeedbackPopup: RD<typeof closeFeedbackPopup>;
};

const FeedbackDialog = React.memo((props: Props) => {
  const {
    feedbackStatus,
    sessionId,
    feedbackView,
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
      }, 5000);
    }

    return () => clearTimeout(hideTimeout);
  }, [status, _closeFeedbackPopup]);

  const handleSendFeedback = (
    feedback: FeedbackType,
    feedbackText: string | undefined
  ) => {
    if (sessionId && feedbackView) {
      props.sendFeedback(sessionId, feedback, feedbackView, feedbackText);
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

  return (
    <Dialog data-testid="feedback-dialog">
      <PopupContent
        status={status}
        feedbackStatus={feedbackStatus}
        closeFeedbackPopup={props.closeFeedbackPopup}
        onSendFeedback={handleSendFeedback}
        onDismiss={handleDismiss}
      />
    </Dialog>
  );
});

const mapDispatchToProps = {
  sendFeedback,
  dismissFeedback,
  closeFeedbackPopup
};

export default connect(
  (state: RootState) => ({
    sessionId: state.feedback.feedbackData?.sessionId,
    feedbackStatus: state.feedback.feedbackStatus,
    feedbackView: state.feedback.feedbackData?.feedbackView
  }),
  mapDispatchToProps
)(FeedbackDialog);
