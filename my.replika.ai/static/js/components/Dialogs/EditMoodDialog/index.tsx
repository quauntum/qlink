import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogButton
} from '../../DialogLayout';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/Delete.svg';
import { ReactDispatch as RD } from '../../../types/redux';
import { MoodItem } from '../../../types/models';
import { updateMood, deleteMood } from '../../../actions/profile';
import Popover from '../../Popover';
import DeleteMoodPopover from './DeleteMoodPopover';
import EditMoodDialogContent from './EditMoodDialogContent';
import { ApiError } from '../../../utils/apiError';
import { Progress } from '../../../types/states';
import { ZIndices, MetricsEvents } from '../../../types/enums';
import mobileMedia from '../../../utils/mobileMedia';
import { logEvent } from '../../../utils/metrics';

type Props = {
  onClose: () => void;
  mood?: MoodItem;
  updateMood: RD<typeof updateMood>;
  deleteMood: RD<typeof deleteMood>;
};

const EditMoodDialog = (props: Props) => {
  const { mood } = props;
  const { onClose } = props;
  const [deleteMoodOpen, setDeleteMoodOpen] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined
  );
  const [progress, setProgress] = React.useState<Progress>(Progress.initial);

  const [editMood, setEditMood] = React.useState(props.mood);

  React.useEffect(() => {
    if (mood) {
      setEditMood(mood);
    }
  }, [mood]);

  const handleSubmit = async () => {
    if (!editMood) {
      return;
    }

    try {
      setProgress(Progress.sending);
      await props.updateMood(editMood);
      setServerError('Updated successfully');
      logEvent(MetricsEvents.MoodEdited);
      setProgress(Progress.success);
      onClose();
    } catch (e) {
      if (e instanceof ApiError) {
        setServerError(e.message);
        setProgress(Progress.error);
      }
    }
  };

  return (
    <StyledDialog data-testid="edit-mood-dialog">
      <DialogHeader onClose={onClose} title="Your mood" />
      {editMood && (
        <EditMoodDialogContent
          mood={editMood}
          onChange={setEditMood}
          onSubmit={handleSubmit}
          progress={progress}
          serverError={serverError}
        />
      )}
      <StyledDialogFooter>
        {editMood && (
          <StyledPopover
            preferPlace="below"
            isOpen={deleteMoodOpen}
            onClose={() => setDeleteMoodOpen(false)}
            onRenderContent={p => (
              <DeleteMoodPopover
                data-testid="edit-mood-delete-popover"
                mood={editMood}
                onDelete={async id => {
                  setDeleteMoodOpen(false);
                  logEvent(MetricsEvents.MoodDeleted);
                  await props.deleteMood(id);
                  onClose();
                }}
                {...p}
              />
            )}
            closeOnOuterAction
            size="small"
          >
            <DeleteButton
              label="delete mood"
              type="button"
              data-testid="edit-mood-delete-button"
              onClick={() => setDeleteMoodOpen(!deleteMoodOpen)}
            >
              <DeleteIcon aria-hidden="true" />
            </DeleteButton>
          </StyledPopover>
        )}
        <DialogButton
          type="submit"
          data-testid="edit-mood-submit-button"
          disabled={progress === Progress.sending}
          onClick={handleSubmit}
        >
          {progress === Progress.sending ? 'Saving...' : 'Save changes'}
        </DialogButton>
      </StyledDialogFooter>
    </StyledDialog>
  );
};

export default connect(null, { updateMood, deleteMood })(EditMoodDialog);

const StyledDialog = styled(Dialog)`
  width: 400px;
`;

const DeleteButton = styled(IconButton)`
  margin-right: 15px;
`;

const StyledDialogFooter = styled(DialogFooter)`
  justify-content: space-between;
  padding: 40px;

  ${mobileMedia`
    padding: 40px 20px;
  `}
`;

const StyledPopover = styled(Popover)`
  z-index: ${ZIndices.Dialog + 1};
`;
