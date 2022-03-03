import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import mobileMedia from '../../utils/mobileMedia';
import TrialPopup from './TrialPopup';
import FeedbackPopup from './FeedbackPopup';
import NotificationPopup from './NotificationPopup';
import styledOmitProps from '../../utils/styledOmitProps';
import { useMobileQuery } from '../../components/responsive';
import { Routes } from '../../types/enums';

type Props = {
  className?: string;
};

function ChatPopups(props: Props) {
  const { className } = props;
  const {
    feedbackStatus,
    feedbackView,
    messages,
    isTrialPopupActive,
    notifications
  } = useSelector(state => ({
    isTrialPopupActive: state.ui.isTrialPopupActive,
    feedbackStatus: state.feedback.feedbackStatus,
    feedbackView:
      state.feedback.feedbackData && state.feedback.feedbackData.feedbackView,
    messages: state.chat.messages || [],
    notifications: state.ui.notifications
  }));

  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1000);

      return () => clearTimeout(t);
    }

    return;
  }, [paused]);

  // just making sure we are not showing feedback too early
  const userMessageCount = messages.filter(m => m.meta.nature === 'Customer')
    .length;

  let activePopup: null | 'feedback' | 'trial' | 'notification' = null;

  if (!paused) {
    if (notifications.length > 0) {
      activePopup = 'notification';
    } else if (
      feedbackStatus !== 'inactive' &&
      feedbackView === 'Popup' &&
      userMessageCount > 3
    ) {
      activePopup = 'feedback';
    } else if (isTrialPopupActive) {
      activePopup = 'trial';
    }
  }

  const isMobile = useMobileQuery();

  const match = useRouteMatch(Routes.Main);

  const isNotificationActive =
    activePopup === 'notification' && (!isMobile || !!match?.isExact);

  return (
    <ChatPopupsRoot className={className}>
      <StyledTrialPopup isActive={activePopup === 'trial'} />
      <StyledFeedbackPopup isActive={activePopup === 'feedback'} />
      <StyledNotificationPopup
        isActive={isNotificationActive}
        notification={paused ? undefined : notifications[0]?.notification}
        id={notifications[0]?.id}
        onClose={() => setPaused(true)}
      />
    </ChatPopupsRoot>
  );
}

export default ChatPopups;

const ChatPopupsRoot = styled.div``;

const StyledTrialPopup = styledOmitProps<
  { isActive: boolean },
  typeof TrialPopup
>(TrialPopup, ['isActive'])`
  transform: translate(-50%, ${p => (p.isActive ? '20px' : '-200px')});
  max-width: 100vw;
  position: absolute;
  top: 0;
  transition: transform 0.5s ease-in-out;
  background-color: ${p => p.theme.chatBgColor};
  box-shadow: 0 5px 20px 0 ${p => p.theme.shadowColor};
  color: ${p => p.theme.fgColor};
  backdrop-filter: blur(10px);
  border-radius: 3px;
  ${mobileMedia`
    font-size: 0.8em;
    line-height: 1.5em;
  `};
`;

const StyledFeedbackPopup = StyledTrialPopup.withComponent(FeedbackPopup);

const StyledNotificationPopup = StyledTrialPopup.withComponent(
  NotificationPopup
);
