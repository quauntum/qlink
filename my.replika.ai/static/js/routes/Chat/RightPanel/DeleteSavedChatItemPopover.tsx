import * as React from 'react';
import styled from 'styled-components/macro';
import {
  PopoverButton,
  PopoverCancelButton,
} from '../../../components/Popover';

type Props = {
  onClose: () => void;
  onDelete: () => void;
  'data-testid': string;
  className?: string;
};

const DeleteSavedChatItemPopover = ({
  onClose,
  onDelete,
  'data-testid': dataTestId,
  className,
}: Props) => {
  return (
    <DeleteSavedChatItemPopoverRoot
      className={className}
      data-testid={dataTestId}
    >
      <DeleteSavedChatItemPopoverTitle>
        Delete entry
      </DeleteSavedChatItemPopoverTitle>
      <DeleteSavedChatItemPopoverText>
        Are you sure you want to delete this entry from the diary?
      </DeleteSavedChatItemPopoverText>
      <DeleteSavedChatItemPopoverButtons>
        <PopoverCancelButton
          data-indialog={true}
          onClick={onClose}
          data-testid={`${dataTestId}-cancel-button`}
        >
          Cancel
        </PopoverCancelButton>
        <DeleteButton
          data-indialog={true}
          onClick={() => onDelete()}
          data-testid={`${dataTestId}-delete-button`}
        >
          Delete
        </DeleteButton>
      </DeleteSavedChatItemPopoverButtons>
    </DeleteSavedChatItemPopoverRoot>
  );
};

const DeleteSavedChatItemPopoverRoot = styled.div`
  color: ${(p) => p.theme.fgColor};
  text-align: center;
  line-height: 24px;
  font-size: 16px;
`;

const DeleteSavedChatItemPopoverTitle = styled.h3`
  margin: 0;
  line-height: 23px;
  font-size: 16px;
`;

const DeleteSavedChatItemPopoverText = styled.p`
  color: ${(p) => p.theme.dimmedFgColor};
`;

const DeleteSavedChatItemPopoverButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled(PopoverButton)`
  background-color: ${(p) => p.theme.errorBgColor};
`;

export default DeleteSavedChatItemPopover;
