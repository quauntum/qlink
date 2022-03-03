import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import Layout from './Layout';
import ReboardingContent from './ReboardingContent';
import SubscriptionContent from './SubscriptionContent';
import { setReboardingDialogShown } from '../../../actions/subscriptions';
import { logEvent } from '../../../utils/metrics';
import { MetricsEvents } from '../../../types/enums';
import CircleSpinner from '../../../components/CircleSpinner';
import { getPrices } from '../../../actions/subscriptions';
import useApi from '../../../utils/useApi';

type Props = {
  reboarding?: boolean;
  onClose: () => void;
  causedBy: boolean;
};

const SubscriptionDialog = (props: Props) => {
  const { onClose, reboarding } = props;

  const dispatch = useDispatch();

  const subscription = useSelector(
    (state) => state.subscriptions.persist.subscription
  );

  const stripeSubscriptions = useApi(
    (state) => state.subscriptions.persist.stripeSubscriptions,
    getPrices,
    { memoDeepEqual: true }
  );

  const pricesEmpty = stripeSubscriptions?.length === 0;

  React.useEffect(() => {
    logEvent(
      reboarding
        ? MetricsEvents.SubscriptionExtendedTrialShown
        : MetricsEvents.SubscriptionWebPromptShown
    );
  }, [reboarding]);

  const stripeEnabled = useSelector(
    (state) => state.subscriptions.stripeEnabled
  );

  const title = reboarding
    ? 'Welcome to Replika Pro'
    : 'Unlock 150+ activities, voice calls, role play and more';

  const handleClose = () => {
    onClose();
    dispatch(setReboardingDialogShown());
  };

  return (
    <Layout
      onClose={handleClose}
      title={subscription ? '' : title}
      data-testid={
        reboarding ? 'subscription-reboarding-dialog' : 'subscription-dialog'
      }
    >
      {reboarding ? (
        <ReboardingContent onClose={handleClose} />
      ) : stripeEnabled || pricesEmpty ? (
        <SubscriptionContent stripeSubscriptions={stripeSubscriptions} />
      ) : (
        <SpinnerContainer>
          <StyledCircleSpinner />
        </SpinnerContainer>
      )}
    </Layout>
  );
};

export default SubscriptionDialog;

const StyledCircleSpinner = styled(CircleSpinner)`
  width: 100px;
  height: 100px;
`;

const SpinnerContainer = styled.div`
  width: 565px;
  height: 600px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
