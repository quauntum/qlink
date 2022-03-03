import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useApi from '../utils/useApi';
import { getStripeConfig, setStripeEnabled } from '../actions/subscriptions';

type Props = {
  children: React.ReactNode;
};

const StripeProvider = ({ children }: Props) => {
  const dispatch = useDispatch();

  const stripeConfig = useApi(
    (state) => state.subscriptions.stripeConfig,
    getStripeConfig,
    { memoDeepEqual: true }
  );
  const key = stripeConfig?.publishable_key;

  const stripeEnabled = useSelector(
    (state) => state.subscriptions.stripeEnabled
  );

  const stripePromise = React.useMemo(() => {
    return key ? loadStripe(key) : null;
  }, [key]);

  React.useEffect(() => {
    if (!stripeEnabled && stripePromise) {
      dispatch(setStripeEnabled());
    }
  }, [stripeEnabled, stripePromise, dispatch]);

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
