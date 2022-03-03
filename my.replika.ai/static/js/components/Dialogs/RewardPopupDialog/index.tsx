import * as React from 'react';
import styled from 'styled-components/macro';
import {
  Dialog,
  CenteredDialogBody,
  DialogHeader,
  DialogButton
} from '../../DialogLayout';
import { RewardExplainPopup } from '../../../types/models';
import useNonemptyValue from '../../../utils/useNonemptyValue';

type Props = {
  onClose: () => void;
  popup?: RewardExplainPopup;
};

const RewardPopupDialog = ({ popup, onClose }: Props) => {
  const memoizedPopup = useNonemptyValue(popup);

  if (!memoizedPopup) {
    return null;
  }

  return (
    <StyledDialog data-testid="reward-popup-dialog" mobileLayout="dialog">
      <DialogHeader onClose={onClose} />
      <CenteredDialogBody>
        <BadgeImage src={memoizedPopup.icon_url} alt={memoizedPopup.title} />
        <Title data-testid="reward-popup-title">{memoizedPopup.title}</Title>
        <Description data-testid="reward-popup-description">
          {memoizedPopup.description}
        </Description>
        <StyledDialogButton onClick={onClose}>
          {memoizedPopup.action_title}
        </StyledDialogButton>
      </CenteredDialogBody>
    </StyledDialog>
  );
};

export default RewardPopupDialog;

const Description = styled.p`
  margin: 16px auto 0;
  max-width: 320px;
  color: ${p => p.theme.dimmedFgColor};
  font-size: 16px;
  line-height: 21px;
`;

const BadgeImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 56px;
  height: 56px;
`;

const Title = styled.h2`
  margin: 16px 0 0;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
`;

const StyledDialog = styled(Dialog)`
  width: 300px;
`;

const StyledDialogButton = styled(DialogButton)`
  margin: 24px auto 40px;
`;
