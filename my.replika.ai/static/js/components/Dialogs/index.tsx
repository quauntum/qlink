import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { connect } from 'react-redux';
import { RootState, DialogOptions } from '../../types/states';
import { Dialogs } from '../../types/enums';
import styledOmitProps from '../../utils/styledOmitProps';
import { setActiveDialog } from '../../actions/ui';
import { ReactDispatch as RD } from '../../types/redux';
import { APPEAR_TIMEOUT } from '../DialogLayout';
import DialogContext from '../DialogLayout/DialogContext';

import FeedbackDialog from './FeedbackDialog';
import EditProfileDialog from './EditProfileDialog';
import EditReplikaDialog from './EditReplikaDialog';
import DropMissionDialog from './DropMissionDialog';
import EditAccountDialog from './EditAccountDialog';
import EditRelationshipStatusDialog from './EditRelationshipStatusDialog';
import BadgeDialog from './BadgeDialog';
import RewardPopupDialog from './RewardPopupDialog';
import EditMoodDialog from './EditMoodDialog';
import IntroMeetReplikaDialog from './IntroMeetReplikaDialog';
import SubscriptionDialog from './SubscriptionDialog';
import GetHelpDialog from './GetHelpDialog';
import ReboardingAddPronounDialog from './ReboardingAddPronounDialog';
import CustomizeAvatarDialog from './CustomizeAvatarDialog';
import ReactionDialog from './ReactionDialog';
import EditSavedChatItemDialog from './EditSavedChatItemDialog';
import NavigationPopupDialog from './NavigationPopupDialog';
import CancelSubscriptionDialog from './CancelSubscriptionDialog';

type Props = {
  className?: string;
  activeDialog: DialogOptions | null;
  setActiveDialog: RD<typeof setActiveDialog>;
};

type Visibility = 'hidden' | 'visible' | 'hiding';

const DIALOGS: [Dialogs, React.ComponentType<any>][] = [
  [Dialogs.Subscription, SubscriptionDialog],
  [Dialogs.SubscriptionReboarding, SubscriptionDialog],
  [Dialogs.EditRelationshipStatus, EditRelationshipStatusDialog],
  [Dialogs.Feedback, FeedbackDialog],
  [Dialogs.EditProfile, EditProfileDialog],
  [Dialogs.EditReplika, EditReplikaDialog],
  [Dialogs.DropMission, DropMissionDialog],
  [Dialogs.AccountSettings, EditAccountDialog],
  [Dialogs.Badge, BadgeDialog],
  [Dialogs.EditMood, EditMoodDialog],
  [Dialogs.IntroMeetReplika, IntroMeetReplikaDialog],
  [Dialogs.GetHelp, GetHelpDialog],
  [Dialogs.ReboardingAddPronoun, ReboardingAddPronounDialog],
  [Dialogs.RewardPopup, RewardPopupDialog],
  [Dialogs.CustomizeAvatar, CustomizeAvatarDialog],
  [Dialogs.Reaction, ReactionDialog],
  [Dialogs.EditSavedChatItem, EditSavedChatItemDialog],
  [Dialogs.NavigationPopup, NavigationPopupDialog],
  [Dialogs.CancelSubscription, CancelSubscriptionDialog],
];

const APPEARING_ANIMATION = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

const HIDING_ANIMATION = keyframes`
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
`;

const DialogHost = React.memo((props: Props) => {
  const { className, activeDialog } = props;

  const [visibility, setVisibility] = React.useState<Visibility>('hidden');
  // store currently appearing/visible dialog and hiding dialog to make sure it's visible during animations
  const [visibleDialog, setVisibleDialog] = React.useState<Dialogs | null>(
    null
  );
  const [hidingDialog, setHidingDialog] = React.useState<Dialogs | null>(null);

  React.useEffect(() => {
    if (activeDialog && visibleDialog !== activeDialog.type) {
      if (visibleDialog) {
        setHidingDialog(visibleDialog);
      }
      setVisibleDialog(activeDialog.type);
    }

    if (!activeDialog && visibility === 'hidden' && visibleDialog !== null) {
      setHidingDialog(null);
      setVisibleDialog(null);
    }
  }, [activeDialog, visibleDialog, visibility]);

  React.useEffect(() => {
    if (hidingDialog) {
      const hideTimeout = setTimeout(
        () => setHidingDialog(null),
        APPEAR_TIMEOUT
      );

      return () => clearTimeout(hideTimeout);
    }

    return undefined;
  }, [hidingDialog, setHidingDialog]);

  React.useEffect(() => {
    let visibleTimeout;
    switch (visibility) {
      case 'hidden':
        // if there is a dialog to show, go to visible state
        if (activeDialog) {
          setVisibility('visible');
        }
        break;
      case 'visible':
        // when there's no active dialog, go to hiding state
        if (!activeDialog) {
          setVisibility('hiding');
        }
        break;
      case 'hiding':
        if (!activeDialog) {
          // wait for APPEAR_TIMEOUT ms before hiding root for real, so there's a time for hiding transition
          visibleTimeout = setTimeout(() => {
            if (visibility === 'hiding') {
              setVisibility('hidden');
            }
          }, APPEAR_TIMEOUT);
        } else {
          setVisibility('visible');
        }
        break;
    }

    return () => {
      clearTimeout(visibleTimeout);
    };
  }, [activeDialog, visibility]);

  const onClose = () => props.setActiveDialog(null);

  const getDialogParams = <T extends Dialogs>(dialogType: T) => {
    const params = {
      onClose,
      ...activeDialog,
    };

    switch (dialogType) {
      case Dialogs.SubscriptionReboarding:
        return { ...params, reboarding: true };
      default:
        return params;
    }
  };

  const isRendered = (type: Dialogs) =>
    visibleDialog === type || hidingDialog === type;

  const isDialogClosable =
    activeDialog &&
    activeDialog.type !== Dialogs.ReboardingAddPronoun &&
    activeDialog.type !== Dialogs.SubscriptionReboarding;

  const handleScrollClick = (e) => {
    // we can't use ref here since focus-trap-react ovverrides it,
    // so we just check div id
    const target = e.target as HTMLDivElement;
    if (target.id === 'dialog-scroll' && isDialogClosable) {
      props.setActiveDialog(null);
    }
  };

  return visibility === 'hidden' ? null : ( // unmount all dialogs in hidden state
    <DialogHostRoot
      data-remainpopup
      className={className}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isDialogClosable) {
          props.setActiveDialog(null);
        }
      }}
    >
      <DialogBack
        id="dialog-back"
        isActive={visibility !== 'hiding'}
        onClick={(e) => {
          if (isDialogClosable) {
            props.setActiveDialog(null);
          }
        }}
      />
      {DIALOGS.map(([dialogType, Dialog]) => {
        return isRendered(dialogType) ? (
          <DialogContext.Provider
            key={dialogType}
            value={{
              isActive: dialogType === activeDialog?.type,
              onScrollClick: handleScrollClick,
            }}
          >
            <Dialog {...getDialogParams(dialogType)} />
          </DialogContext.Provider>
        ) : null;
      })}
    </DialogHostRoot>
  );
});

export default connect(
  (state: RootState) => ({
    activeDialog: state.ui.activeDialog,
  }),
  { setActiveDialog }
)(DialogHost);

/*

   +----------------------------------------------------+
   |                                                    |
   |   DialogHostRoot - centers content vertically      |
   |                                                    |
   +----------------------------------------------------+
   ||                                                 |-|
   ||                                                 |-|
   ||  DialogScroll - max height is screen height,    |-|
   ||  content has overflow scrolling;                |-|
   ||  centers content horizontally                   |-|
   ||                                                 |-|
   ||  (it should be full-width, so that if           |-|
   ||  the content is overflowing, we could scroll it |-|
   ||  from any point)                                |-|
   ||                                                 |-|
   ||  (MOVED TO DialogLayout)                        |-|
   ||                                                 |-|
   ||                                                 |-|
   +----------------------------------------------------+
   |                                                    |
   |                                                    |
   |                                                    |
   +----------------------------------------------------+

*/

const DialogHostRoot = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const DialogBack = styledOmitProps<{ isActive: boolean }>('div', ['isActive'])`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.bgColor};
    animation: ${(p) =>
      p.isActive
        ? APPEARING_ANIMATION
        : HIDING_ANIMATION} ${APPEAR_TIMEOUT}ms ease-out both;
`;
