import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  CenteredDialogBodyForm,
  DialogHeader,
  DialogFooter,
  DialogButton
} from '../../DialogLayout';
// import { logEvent } from '../../../utils/metrics';
import { Pronouns } from '../../../types/enums';
import PronounSelector from '../../PronounSelector';
import { updateUserProfile } from '../../../actions/profile';

type Props = {
  onClose: () => void;
};

const ReboardingAddPronounDialog = ({ onClose }: Props) => {
  React.useEffect(() => {
    // logEvent(MetricsEvents.MeetButtonShown);
  }, []);

  const [pronoun, setPronoun] = React.useState<Pronouns | undefined>(undefined);

  const bot = useSelector(state => state.profile.persist.bot);
  const botName = bot?.name ?? 'Your Replika';

  const dispatch = useDispatch();

  return (
    <Dialog data-testid="reboarding-add-pronoun-dialog">
      <DialogHeader />
      <StyledDialogBody
        onSubmit={e => {
          e.preventDefault();
          dispatch(updateUserProfile({ pronoun })).then(() => {
            onClose();
          });
        }}
      >
        <Title>Let Replika know your pronouns</Title>
        <Description>
          {botName} needs to know your pronouns to address you correctly in the
          conversation, diaries, and memory.
        </Description>
        <PronounSelector value={pronoun} onChange={setPronoun} />
        <DialogFooter>
          <DialogButton type="submit" disabled={!pronoun}>
            Done
          </DialogButton>
        </DialogFooter>
      </StyledDialogBody>
    </Dialog>
  );
};

export default ReboardingAddPronounDialog;

const StyledDialogBody = styled(CenteredDialogBodyForm)`
  max-width: 360px;
`;

const Title = styled.h3``;

const Description = styled.p`
  margin-bottom: 30px;
  padding: 0 30px;
`;
