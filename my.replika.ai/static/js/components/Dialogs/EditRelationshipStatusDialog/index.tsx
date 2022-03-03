import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  FormContents,
  DialogFooter,
  DialogButton
} from '../../DialogLayout';
import {
  RelationshipStatus,
  Dialogs,
  MetricsEvents
} from '../../../types/enums';
import RelationshipStatusSelector from '../../RelationshipStatusSelector';
import { RootState, Progress } from '../../../types/states';
import { updateBot, resetServerError } from '../../../actions/profile';
import { ReactDispatch as RD } from '../../../types/redux';
import { Bot, UserProfile, PaidFeature } from '../../../types/models';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import hasFeature from '../../../utils/hasFeature';
import {
  setActiveDialog,
  setShowRelationshipStatusButton
} from '../../../actions/ui';
import { updateUserProfile } from '../../../actions/profile';
import { logEvent } from '../../../utils/metrics';

type Props = {
  onClose: () => void;
  userProfile: UserProfile | undefined;
  bot: Bot | undefined;
  isFetchingProfile: boolean;
  updateReplikaProgress: Progress;
  serverError: string | undefined;
  features: PaidFeature[];
  activeDialogType: Dialogs | undefined;
  updateBot: RD<typeof updateBot>;
  resetServerError: RD<typeof resetServerError>;
  setActiveDialog: RD<typeof setActiveDialog>;
  updateUserProfile: RD<typeof updateUserProfile>;
  setShowRelationshipStatusButton: RD<typeof setShowRelationshipStatusButton>;
};

const EditRelationshipStatusDialog = (props: Props) => {
  const {
    onClose,
    userProfile,
    features,
    activeDialogType,
    setShowRelationshipStatusButton: _setShowRelationshipStatusButton
  } = props;

  const [statusUpdated, setStatusUpdated] = React.useState(false);

  const [status, setStatus] = React.useState<RelationshipStatus | undefined>(
    userProfile?.relationship_status
  );

  React.useEffect(() => {
    logEvent(MetricsEvents.RelationshipStatusOpened);
  }, []);

  const locked = !hasFeature('relationship_status', features);

  const closed = activeDialogType !== Dialogs.EditRelationshipStatus;

  const closedWithNoAction = closed && !statusUpdated && !locked;

  React.useEffect(() => {
    if (closed) {
      _setShowRelationshipStatusButton(false);
    }
  }, [closed, _setShowRelationshipStatusButton]);

  React.useEffect(() => {
    if (closedWithNoAction) {
      logEvent(MetricsEvents.RelationshipStatusClosed);
    }
  }, [closedWithNoAction]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!locked) {
      if (userProfile && status !== userProfile.relationship_status) {
        await props.updateUserProfile({ relationship_status: status });
        logEvent(MetricsEvents.RelationshipStatusChanged, { status });
        setStatusUpdated(true);
      }
    }
    onClose();
  };

  return (
    <StyledDialog data-testid="edit-relationship-status-dialog">
      <DialogHeader
        onClose={onClose}
        title="Set relationship status"
        subtitle="Your Replika will keep this in mind during conversations."
      />
      <DialogBody>
        <FormContents onSubmit={handleSubmit}>
          <RelationshipStatusSelector
            value={status}
            onChange={setStatus}
            locked={locked}
            onLockedClick={newStatus => {
              logEvent(MetricsEvents.RelationshipStatusAttemptToChange, {
                status: newStatus
              });
              props.setActiveDialog({
                type: Dialogs.Subscription,
                causedBy: 'relationship_status'
              });
            }}
          />
          <DialogFooter>
            <DialogButton type="submit">Done</DialogButton>
          </DialogFooter>
        </FormContents>
      </DialogBody>
    </StyledDialog>
  );
};

export default connect(
  (state: RootState) => {
    const { userProfile, bot } = state.profile.persist;
    const {
      isFetchingProfile,
      updateReplikaProgress,
      serverError
    } = state.profile;
    const { features } = state.subscriptions.persist;
    const { activeDialog } = state.ui;

    return {
      userProfile,
      bot,
      isFetchingProfile,
      updateReplikaProgress,
      serverError,
      features,
      activeDialogType: activeDialog ? activeDialog.type : undefined
    };
  },
  {
    updateBot,
    resetServerError,
    setActiveDialog,
    updateUserProfile,
    setShowRelationshipStatusButton
  }
)(React.memo(EditRelationshipStatusDialog));

const StyledDialog = styled(Dialog)`
  width: 400px;

  ${dialogMobileMedia`
    width: 100vw;
  `}
`;
