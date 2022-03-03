import * as React from 'react';
import styled from 'styled-components/macro';
import { PopoverButton, PopoverCancelButton } from '../../Popover';
import { MoodItem } from '../../../types/models';

type Props = {
  mood: MoodItem;
  onClose: () => void;
  onDelete: (id: string) => void;
  'data-testid': string;
  className?: string;
};

const DeleteMoodPopover = ({
  mood,
  onClose,
  onDelete,
  'data-testid': dataTestId,
  className
}: Props) => {
  return (
    <DeleteMoodPopoverRoot className={className} data-testid={dataTestId}>
      <DeleteMoodPopoverTitle>Delete this mood record?</DeleteMoodPopoverTitle>
      <DeleteMoodPopoverText>
        This action cannot be undone.
      </DeleteMoodPopoverText>
      <DeleteMoodPopoverButtons>
        <PopoverCancelButton
          data-indialog={true}
          onClick={onClose}
          data-testid={`${dataTestId}-cancel-button`}
        >
          Cancel
        </PopoverCancelButton>
        <DeleteButton
          data-indialog={true}
          onClick={() => onDelete(mood.id)}
          data-testid={`${dataTestId}-delete-button`}
        >
          Delete
        </DeleteButton>
      </DeleteMoodPopoverButtons>
    </DeleteMoodPopoverRoot>
  );
};

const DeleteMoodPopoverRoot = styled.div`
  color: ${p => p.theme.fgColor};
  text-align: center;
  line-height: 24px;
  font-size: 16px;
`;

const DeleteMoodPopoverTitle = styled.h3`
  margin: 0;
  line-height: 23px;
  font-size: 16px;
`;

const DeleteMoodPopoverText = styled.p`
  color: ${p => p.theme.dimmedFgColor};
`;

const DeleteMoodPopoverButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled(PopoverButton)`
  background-color: ${p => p.theme.errorBgColor};
`;

export default DeleteMoodPopover;
