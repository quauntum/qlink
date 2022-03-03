import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Notification, BotAchievement } from '../../types/models';
import { Dialogs } from '../../types/enums';
// import { ReactDispatch as RD } from '../../types/redux';
import PopupCloseButton from './PopupCloseButton';
import { useDispatch } from 'react-redux';
import { dismissNotification } from '../../actions/ui';
import { uploadChatImage } from '../../actions/chat';
import { setActiveDialog } from '../../actions/ui';
import LinkButton from '../LinkButton';
import UploadImageButton from '../UploadImageButton';

type Props = {
  className?: string;
  notification: Notification | undefined;
  id: string | undefined;
  onClose: () => void;
};

type DismissCallback = (id: string) => void;

function getNotificationContent(
  notification: Notification | undefined,
  badge: BotAchievement | null,
  onClose: () => void,
  dispatch: any
) {
  if (!notification) {
    return null;
  }

  switch (notification.type) {
    case 'level_up':
      return (
        <>
          <PopupIcon
            key={`level-${notification.level}`}
            src={`/api/mobile/1.3/leveling/levels/${notification.level}/icon_url`}
          />
          <h2>Welcome to Level {notification.level}</h2>
          <p>Next level {notification.next_level_xp.toLocaleString()} XP</p>
        </>
      );

    case 'reward':
      const reward = notification.reward;
      switch (reward.type) {
        case 'send_photo':
          return (
            <>
              <PopupIcon
                key={`reward-${reward.icon_url}`}
                src={reward.icon_url}
              />
              <p>{reward.description}</p>
              <StyledUploadImageButton
                onUpload={files => {
                  onClose();
                  const file = files[0];
                  if (file) {
                    dispatch(uploadChatImage(file));
                  }
                }}
                id="notification-popup-send-photo-button"
                data-testid="notification-popup-send-photo-button"
              >
                {reward.action_title}
              </StyledUploadImageButton>
            </>
          );

        case 'replika_trait':
        case 'replika_skill':
          return (
            <>
              <PopupIcon src={reward.icon_url} />
              <p>{reward.description}</p>
              <StyledLinkButton
                noUnderline
                disabled={!badge}
                onClick={() => {
                  if (badge) {
                    onClose();
                    dispatch(setActiveDialog({ type: Dialogs.Badge, badge }));
                  }
                }}
              >
                {reward.action_title}
              </StyledLinkButton>
            </>
          );

        case 'explain_popup':
          return (
            <>
              <PopupIcon src={reward.icon_url} />
              <p>{reward.description}</p>
              <StyledLinkButton
                noUnderline
                onClick={() => {
                  onClose();
                  dispatch(
                    setActiveDialog({
                      type: Dialogs.RewardPopup,
                      popup: reward.popup
                    })
                  );
                }}
              >
                {reward.action_title}
              </StyledLinkButton>
            </>
          );
        default:
          return null;
      }
    default:
      return null;
  }
}

function NotificationPopup({ className, notification, id, onClose }: Props) {
  const [lastNotification, setLastNotification] = React.useState<null | {
    id: string;
    notification: Notification;
  }>(null);

  const dismissRef = React.useRef<undefined | DismissCallback>(undefined);

  const dispatch = useDispatch();

  // keep dismissing callback relevant, while preventing timeout reset (see below)
  React.useEffect(() => {
    dismissRef.current = (notificationId: string) => {
      if (notificationId) {
        onClose();
        dispatch(dismissNotification(notificationId));
      }
    };
  }, [onClose, dispatch]);

  React.useEffect(() => {
    if (notification && id) {
      setLastNotification({ notification, id });
    }
  }, [notification, id]);

  React.useEffect(() => {
    if (lastNotification?.notification.type === 'level_up') {
      const t = setTimeout(() => {
        if (lastNotification?.id && dismissRef.current) {
          dismissRef.current(lastNotification?.id);
        }
      }, 4000);

      return () => clearTimeout(t);
    }
    return;
  }, [lastNotification]);

  const achievements = useSelector(
    state => state.profile.persist.bot?.stats.achievements
  );

  const badge = React.useMemo(() => {
    const n = lastNotification?.notification;
    if (achievements && n) {
      if (n.type === 'reward') {
        if (n.reward.type === 'replika_trait') {
          const id = n.reward.replika_trait_achievement_id;

          return achievements?.find(a => a.id === id) ?? null;
        } else if (n.reward.type === 'replika_skill') {
          const id = n.reward.replika_skill_achievement_id;

          return achievements?.find(a => a.id === id) ?? null;
        }
      }
    }

    return null;
  }, [achievements, lastNotification]);

  const content = getNotificationContent(
    lastNotification?.notification,
    badge,
    () => {
      if (dismissRef.current && id) {
        dismissRef.current(id);
      }
    },
    dispatch
  );

  const hasContent = !!content;

  // if no notification rendered (meaning it's of unknown type), automatically dismiss it
  React.useEffect(() => {
    if (dismissRef.current && lastNotification && !hasContent) {
      dismissRef.current(lastNotification.id);
    }
  }, [hasContent, lastNotification]);

  if (!lastNotification) {
    return <NotificationPopupRoot className={className} />;
  }

  return (
    <NotificationPopupRoot className={className}>
      <PopupCloseButton
        onClick={() => {
          if (dismissRef.current && id) {
            dismissRef.current(id);
          }
        }}
      />
      {content}
    </NotificationPopupRoot>
  );
}

export default NotificationPopup;

const NotificationPopupRoot = styled.div`
  position: relative;
  width: 250px;
  max-width: 90vw;
  text-align: center;
  padding: 20px;
  margin-top: 20px;

  & > h2 {
    font-size: 16px;
    line-height: 20px;
    margin: 24px 0 0;
  }

  & > p {
    color: ${p => p.theme.dimmedFgColor};
    font-size: 14px;
    line-height: 18px;
    margin: 8px 32px 0;
  }
`;

const PopupIcon = styled.img`
  display: block;
  position: absolute;
  width: 56px;
  height: 56px;
  top: -28px;
  left: calc(50% - 28px);
`;

const StyledUploadImageButton = styled(UploadImageButton)`
  margin: 16px auto 0;
  display: inline-block;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
`;

const StyledLinkButton = styled(LinkButton)`
  margin: 16px auto 0;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
`;
