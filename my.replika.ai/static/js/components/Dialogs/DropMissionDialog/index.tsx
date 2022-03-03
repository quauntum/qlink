import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog, ConfirmDialogBody } from '../../DialogLayout';
import { ReactDispatch as RD } from '../../../types/redux';
import { dropMission } from '../../../actions/journey';

type Props = {
  onClose: () => void;
  dropMission: RD<typeof dropMission>;
};

const DropMissionDialog = (props: Props) => {
  const { onClose } = props;

  return (
    <Dialog data-testid="drop-mission-dialog">
      <ConfirmDialogBody
        title="Mission in progress"
        description="You have a mission in progress. Do you want to just chat with Replika instead?"
        confirmText="Chat"
        onConfirm={() => {
          onClose();
          props.dropMission();
        }}
        onCancel={onClose}
      />
    </Dialog>
  );
};

export default connect(null, { dropMission })(DropMissionDialog);
