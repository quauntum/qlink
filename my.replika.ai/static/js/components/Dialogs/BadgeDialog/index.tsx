import * as React from 'react';
import styled from 'styled-components/macro';
import { Dialog, CenteredDialogBody, DialogHeader } from '../../DialogLayout';
import { BotAchievement } from '../../../types/models';
import useNonemptyValue from '../../../utils/useNonemptyValue';

type Props = {
  onClose: () => void;
  badge?: BotAchievement;
  emptyDescription?: string;
};

const BadgeDialog = ({ badge, emptyDescription, onClose }: Props) => {
  // a bit dirty trick to prevent 'losing' badge on dialog closing
  const memoizedBadge = useNonemptyValue(badge);
  const memoizedEmptyDescription = useNonemptyValue(emptyDescription);

  if (!memoizedBadge) {
    return (
      <Dialog data-testid="badge-dialog" mobileLayout="dialog">
        <DialogHeader onClose={onClose} />
        <CenteredDialogBody>
          <BadgeSlot />
          <SlotDescription data-testid="badge-description-slot">
            {memoizedEmptyDescription}
          </SlotDescription>
        </CenteredDialogBody>
      </Dialog>
    );
  }

  return (
    <Dialog data-testid="badge-dialog" mobileLayout="dialog">
      <DialogHeader onClose={onClose} />
      <CenteredDialogBody>
        <BadgeImage
          src={memoizedBadge.image_url_2x}
          alt={memoizedBadge.title}
        />
        <Title>{memoizedBadge.title}</Title>
        <Description data-testid={`badge-description-${memoizedBadge.id}`}>
          {memoizedBadge.description}
        </Description>
      </CenteredDialogBody>
    </Dialog>
  );
};

export default BadgeDialog;

const BadgeSlot = styled.div`
  margin-top: 20px;
  &:before {
    display: block;
    content: '?';
    color: ${p => p.theme.dimmedFgColor};
    border: 1px solid ${p => p.theme.borderColor};
    width: 100px;
    height: 100px;
    border-radius: 100%;
    line-height: 100px;
    font-size: 50px;
    text-align: center;
    vertical-align: middle;
  }
`;

const Description = styled.p`
  margin: 30px auto 40px;
  max-width: 320px;
  color: ${p => p.theme.dimmedFgColor};
  line-height: 24px;
  font-size: 16px;
`;

const SlotDescription = styled(Description)`
  margin: 40px auto 40px;
  color: ${p => p.theme.fgColor};
`;

const BadgeImage = styled.img`
  display: block;
  margin: 20px auto 0;
  width: 140px;
`;

const Title = styled.h2`
  margin: 30px 0 0;
  text-align: center;
`;
