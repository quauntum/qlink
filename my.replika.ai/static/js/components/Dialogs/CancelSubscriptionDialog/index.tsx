import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogBodyForm,
  DialogHeader,
  DialogFooter,
  DialogButton,
} from '../../DialogLayout';
import {
  deleteSubscription,
  getSubscriptions,
} from '../../../actions/subscriptions';
import ErrorSuccessMessage from '../../ErrorSuccessMessage';
import PasswordInput from '../../PasswordInput';
import { dialogMobileMedia } from '../../../utils/mobileMedia';

type Props = {
  onClose: () => void;
};

const description =
  'Are you sure you want to cancel your Replika Pro subscription? You will lose access to 150+ activities, voice calls, role play and more';
const passwordLabel = 'Please enter your password to confirm';

const CancelSubscriptionDialog = (props: Props) => {
  const { onClose } = props;
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [status, setStatus] = React.useState<
    'idle' | 'cancelling' | 'cancelled'
  >('idle');
  const [password, setPassword] = React.useState('');

  const handleCancelSubscription = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage('');
      setStatus('cancelling');
      await dispatch(deleteSubscription(password));
      await dispatch(getSubscriptions());
      setStatus('cancelled');
    } catch (e) {
      setErrorMessage(e.message);
      setStatus('idle');
    }
  };

  const title = 'Cancel subscription';

  return (
    <Dialog data-testid="cancel-subscription-dialog">
      <DialogHeader title={title} />
      {status !== 'cancelled' ? (
        <StyledDialogBodyForm onSubmit={handleCancelSubscription}>
          <Description>{description}</Description>
          <Description>{passwordLabel}</Description>
          <StyledPasswordInput
            id="cancel-subscription-dialog-password"
            placeholder="Password"
            value={password}
            labeled
            onChange={(e) => setPassword(e.target.value)}
          />
          <Error hasError={!!errorMessage}>{errorMessage}</Error>
          <StyledDialogFooter>
            <DialogButton type="button" onClick={onClose}>
              I changed my mind
            </DialogButton>
            <DialogButton
              type="submit"
              disabled={status === 'cancelling' || !password}
            >
              Cancel subscription
            </DialogButton>
          </StyledDialogFooter>
        </StyledDialogBodyForm>
      ) : (
        <StyledDialogBodyForm style={{ maxWidth: 400 }}>
          <Description style={{ maxWidth: 280 }}>
            Your subscription is cancelled.
            <br />
            <br />
            Thanks for giving it a try! <br />
            You can access Pro features until the end of your billing cycle.
          </Description>
          <StyledDialogFooterCentered>
            <DialogButton type="button" onClick={onClose}>
              Close
            </DialogButton>
          </StyledDialogFooterCentered>
        </StyledDialogBodyForm>
      )}
    </Dialog>
  );
};

export default CancelSubscriptionDialog;

const StyledDialogBodyForm = styled(DialogBodyForm)`
  padding: 20px 30px;
  max-width: initial;
  width: 520px;
`;

const Error = styled(ErrorSuccessMessage)`
  font-size: 12px;
`;

const Description = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  line-height: 21px;
  max-width: 400px;
`;

const StyledDialogFooter = styled(DialogFooter)`
  width: 100%;
  padding: 30px 0 20px;
  justify-content: space-between;
  & > button ~ button {
    margin-left: 16px;
  }

  ${dialogMobileMedia`
    flex-direction: column-reverse;
    justify-content: flex-start;

    & > button {
      margin-top: 16px;
    }

    & > button ~ button {
      margin-left: 0;
    }
  `}
`;

const StyledDialogFooterCentered = styled(DialogFooter)`
  width: 100%;
  padding: 20px 0 20px;
`;

const StyledPasswordInput = styled(PasswordInput)`
  width: 100%;
  margin-top: 10px;
`;
