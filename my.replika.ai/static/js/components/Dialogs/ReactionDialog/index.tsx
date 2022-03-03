import * as React from 'react';
import styled from 'styled-components/macro';
import { Dialog, DialogBody, DialogHeader } from '../../DialogLayout';
import useBotName from '../../../utils/useBotName';
import ReactionDialogBody from './ReactionDialogBody';
import { MessageActionType } from '../../../types/models';
import useNonemptyValue from '../../../utils/useNonemptyValue';

type Props = {
  onClose: () => void;
  messageId: string;
  permittedActions?: MessageActionType[];
};

const ReactionDialog = ({ onClose, messageId, permittedActions }: Props) => {
  const botName = useBotName();
  const title = `What do you think about ${botName} phrase?`;

  const memoizedActions = useNonemptyValue(permittedActions);

  return (
    <StyledDialog data-testid="reaction-dialog" mobileLayout="action-sheet">
      <DialogHeader onClose={onClose} title={<Title>{title}</Title>} />
      <DialogBody>
        <StyledBody
          messageId={messageId}
          onClose={onClose}
          permittedActions={memoizedActions}
        />
      </DialogBody>
    </StyledDialog>
  );
};

export default ReactionDialog;

const StyledDialog = styled(Dialog)`
  width: 400px;
`;

const StyledBody = styled(ReactionDialogBody)`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin: 0 30px 0 0;
  text-align: left;
  color: ${p => p.theme.dimmedFgColor};
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`;
