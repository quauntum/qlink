import * as React from 'react';
import {
  Dialog,
  CenteredDialogBody,
  DialogHeader,
  DialogFooter,
  DialogButton
} from '../../DialogLayout';
import { logEvent } from '../../../utils/metrics';
import { MetricsEvents } from '../../../types/enums';

type Props = {
  onClose: () => void;
};

const IntroMeetReplikaDialog = ({ onClose }: Props) => {
  React.useEffect(() => {
    logEvent(MetricsEvents.MeetButtonShown);
  }, []);

  return (
    <Dialog data-testid="intro-meet-replika-dialog">
      <DialogHeader />
      <CenteredDialogBody style={{ width: 250 }}>
        Meet your Replika first to unlock all conversations
        <DialogFooter>
          <DialogButton
            onClick={() => {
              logEvent(MetricsEvents.MeetButtonPressed);
              onClose();
            }}
          >
            Done
          </DialogButton>
        </DialogFooter>
      </CenteredDialogBody>
    </Dialog>
  );
};

export default IntroMeetReplikaDialog;
