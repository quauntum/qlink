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
  memoryType: 'persons' | 'facts';
};

const DeleteMemoryPopover = ({
  onClose,
  onDelete,
  'data-testid': dataTestId,
  className,
  memoryType,
}: Props) => {
  let title;
  let text;

  switch (memoryType) {
    case 'persons':
      title = 'Delete person';
      text = 'This person will be erased from Replika’s memory';
      break;
    case 'facts':
      title = 'Delete fact';
      text = 'This fact will be erased from Replika’s memory';
      break;
  }

  return (
    <DeleteMemoryPopoverRoot className={className} data-testid={dataTestId}>
      <DeleteMemoryPopoverTitle>{title}</DeleteMemoryPopoverTitle>
      <DeleteMemoryPopoverText>{text}</DeleteMemoryPopoverText>
      <DeleteMemoryPopoverButtons>
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
      </DeleteMemoryPopoverButtons>
    </DeleteMemoryPopoverRoot>
  );
};

const DeleteMemoryPopoverRoot = styled.div`
  color: ${(p) => p.theme.fgColor};
  text-align: center;
  line-height: 24px;
  font-size: 16px;
`;

const DeleteMemoryPopoverTitle = styled.h3`
  margin: 0;
  line-height: 23px;
  font-size: 16px;
`;

const DeleteMemoryPopoverText = styled.p`
  color: ${(p) => p.theme.dimmedFgColor};
`;

const DeleteMemoryPopoverButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled(PopoverButton)`
  background-color: ${(p) => p.theme.errorBgColor};
`;

export default DeleteMemoryPopover;
