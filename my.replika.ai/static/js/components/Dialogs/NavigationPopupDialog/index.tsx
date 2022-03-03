import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogButton,
  DialogFooter,
} from '../../DialogLayout';
import { NavigationPopup } from '../../../types/models';
import { Dialogs } from '../../../types/enums';
import useNonemptyValue from '../../../utils/useNonemptyValue';
import { setActiveDialog } from '../../../actions/ui';

type Props = {
  onClose: () => void;
  navigationPopup: NavigationPopup;
};

const NavigationPopupDialog = ({ onClose, navigationPopup }: Props) => {
  const memoizedNavPopup = useNonemptyValue(navigationPopup);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    switch (memoizedNavPopup?.button_destination) {
      case 'relationship_status':
        dispatch(setActiveDialog({ type: Dialogs.EditRelationshipStatus }));
        break;
    }
  };

  const knownDestination = memoizedNavPopup
    ? ['relationship_status'].indexOf(memoizedNavPopup.button_destination) !==
      -1
    : false;

  return (
    <StyledDialog data-testid="navigation-dialog" mobileLayout="action-sheet">
      <DialogHeader onClose={onClose} title={memoizedNavPopup?.header_text} />
      <DialogBody>
        <Description>{memoizedNavPopup?.body_text}</Description>
        <DialogFooter>
          {knownDestination && (
            <DialogButton onClick={handleButtonClick}>
              {memoizedNavPopup?.button_text}
            </DialogButton>
          )}
        </DialogFooter>
      </DialogBody>
    </StyledDialog>
  );
};

export default NavigationPopupDialog;

const StyledDialog = styled(Dialog)`
  width: 400px;
`;

const Description = styled.p`
  text-align: center;
  margin: 20px 0 0;
  font-size: 16px;
  line-height: 21px;
`;
