import * as React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import SolidButton from '../../SolidButton';
import { Theme } from '../../../types/theme';
import { StripeSubscription } from '../../../types/models';
import Spinner from '../../InlineSpinner';
import {
  createSubscription,
  retryInvoice,
  setLatestInvoiceId,
  getSubscriptions,
} from '../../../actions/subscriptions';
import {
  retryIncompleteSubscription,
  processIncompleteSubscription,
} from '../../../utils/stripe';
import ActiveSubscription from './ActiveSubscription';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import SubscriptionContentLegacy from './SubscriptionContentLegacy';

type Props = {
  theme: Theme;
  stripeSubscriptions: StripeSubscription[] | null;
};

function getStyleOptions(theme: Theme): StripeCardElementOptions {
  return {
    style: {
      base: {
        color: theme.fgColor,
        backgroundColor: 'transparent',
        fontFamily:
          'Muli, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: theme.placeholderColor,
        },
      },
      invalid: {
        color: theme.errorFgColor,
        iconColor: theme.errorFgColor,
      },
    },
  };
}

function StripePriceCard(props: {
  subscription: StripeSubscription;
  selected: boolean;
  onClick: () => void;
}) {
  const { subscription, selected, onClick } = props;

  let periodTitle;
  let altPrice;

  const priceAmount = subscription.price.amount;

  switch (subscription.subscription_type) {
    case 'IN_APP':
      periodTitle = 'lifetime';
      break;

    case 'SUBS':
      const recurring = subscription.recurring;
      if (recurring.period_amount > 1) {
        periodTitle = `${recurring.period_amount}-${recurring.period_timeunit}`;
      } else {
        periodTitle =
          recurring.period_timeunit === 'day'
            ? 'daily'
            : `${recurring.period_timeunit}ly`;
      }

      if (recurring.period_timeunit === 'year') {
        altPrice = (
          <span>
            {(priceAmount / 12).toFixed(2)}{' '}
            <Currency>{subscription.price.currency}</Currency> / month
          </span>
        );
      }
      break;
  }

  return (
    <StripePriceCardRoot role="presentation">
      <StripePriceCardButton
        role="radio"
        tabIndex={selected ? 0 : -1}
        aria-checked={selected}
        onClick={onClick}
      >
        {subscription.trial_period_days > 0 && (
          <SubscriptionTrialBadge>
            {subscription.trial_period_days === 1
              ? `${subscription.trial_period_days}-day trial`
              : `${subscription.trial_period_days}-days trial`}
          </SubscriptionTrialBadge>
        )}
        <SubscriptionPeriod>{periodTitle}</SubscriptionPeriod>
        <SubscriptionPrice>
          {priceAmount.toFixed(2)}
          <SubscriptionCurrency>
            {subscription.price.currency}
          </SubscriptionCurrency>
        </SubscriptionPrice>
        {altPrice && <SubscriptionAltPrice>{altPrice}</SubscriptionAltPrice>}
      </StripePriceCardButton>
    </StripePriceCardRoot>
  );
}

const StripePriceCardRoot = styled.li`
  padding: 0;
`;

const StripePriceCardButton = styled.button`
  position: relative;
  border: 2px solid
    ${(p) =>
      p['aria-checked']
        ? p.theme.borderButtonSelectedBorderColor
        : p.theme.borderButtonBorderColor};
  background: ${(p) => p.theme.borderButtonBgColor};
  color: ${(p) => p.theme.fgColor};
  font-size: 24px;
  width: 140px;
  height: 134px;
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  cursor: pointer;
`;

const Currency = styled.span`
  text-transform: uppercase;
`;

const SubscriptionTrialBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(p) => p.theme.subscriptionBadgeFgColor};
  background-color: ${(p) => p.theme.subscriptionBadgeBgColor};
  padding: 4px 8px;
  border-radius: 2px;
`;

const SubscriptionPeriod = styled.div`
  margin-top: 44px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.fgColor};
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const SubscriptionPrice = styled.div`
  color: ${(p) => p.theme.fgColor};
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

const SubscriptionCurrency = styled.span`
  color: ${(p) => p.theme.dimmedFgColor};
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  vertical-align: top;
  margin-left: 6px;
`;

const SubscriptionAltPrice = styled.div`
  color: ${(p) => p.theme.dimmedFgColor};
  font-size: 12px;
  line-height: 15px;
  margin-top: 4px;
`;

function StripePriceList(props: {
  priceId: string | null;
  subscriptions: StripeSubscription[];
  onChange: (id: string) => void;
}) {
  const { priceId, subscriptions, onChange } = props;

  return (
    <StripePriceListRoot role="radiogroup">
      {subscriptions.map((subscription) => (
        <StripePriceCard
          selected={subscription.subscription_id === priceId}
          key={subscription.subscription_id}
          subscription={subscription}
          onClick={() => onChange(subscription.subscription_id)}
        />
      ))}
      {subscriptions.length === 0 ? (
        <>
          <EmptyStripeCard />
          <EmptyStripeCard />
          <EmptyStripeCard />
        </>
      ) : null}
    </StripePriceListRoot>
  );
}

const EmptyStripeCard = styled.li`
  flex: 0 0 auto;
  border: 2px solid ${(p) => p.theme.borderButtonBorderColor};
  width: 140px;
  height: 134px;
  border-radius: 8px;
`;

function ButtonWithSpinner({ inProgress, children }) {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {children}
      {inProgress && <StyledSpinner />}
    </div>
  );
}

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 8px;
  right: -40px;
`;

function SubscriptionContent({ theme, stripeSubscriptions }: Props) {
  const [priceId, setPriceId] = React.useState<null | string>(null);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [cardComplete, setCardComplete] = React.useState(false);
  const dispatch = useDispatch();

  const [status, setStatus] = React.useState<
    'init' | 'idle' | 'subscribing' | 'cancelling'
  >('init');

  const styleOptions = React.useMemo(() => getStyleOptions(theme), [theme]);

  const stripe = useStripe();
  const elements = useElements();

  const latestInvoiceId = useSelector(
    (state) => state.subscriptions.persist.stripeLatestInvoiceId
  );
  // const customerId = useSelector(
  //   (state) => state.subscriptions.persist.stripeCustomerId
  // );

  React.useEffect(() => {
    async function fetchData() {
      await dispatch(getSubscriptions());
      setStatus('idle');
    }

    fetchData();
  }, [dispatch]);

  const subscription = useSelector(
    (state) => state.subscriptions.persist.subscription
  );

  if (stripeSubscriptions?.length === 0) {
    return (
      <SubscribeToReplika style={{ width: 400, height: 400 }}>
        <SubscriptionContentLegacy />
      </SubscribeToReplika>
    );
  }

  const handleSubmit = async () => {
    if (!priceId) return;

    try {
      if (!stripe || !elements) return;
      setErrorMessage('');

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) return;

      setStatus('subscribing');

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        if (error.message) {
          setErrorMessage(error.message);
        }
        console.error(error);
        setStatus('idle');
      } else if (paymentMethod) {
        const paymentMethodId = paymentMethod.id;

        let invoiceId;

        if (latestInvoiceId) {
          const invoice = await dispatch(
            retryInvoice({ paymentMethodId, latestInvoiceId })
          );

          invoiceId = await retryIncompleteSubscription(
            paymentMethodId,
            stripe,
            invoice
          );
        } else if (priceId) {
          const subscription = await dispatch(
            createSubscription({ paymentMethodId, priceId })
          );

          invoiceId = await processIncompleteSubscription(
            paymentMethodId,
            stripe,
            subscription
          );
        }

        if (invoiceId) {
          setErrorMessage('Your card was declined.');
        } else {
          dispatch(getSubscriptions());
        }

        dispatch(setLatestInvoiceId(invoiceId));

        setStatus('idle');
      }
    } catch (e) {
      setErrorMessage(e.message);
      dispatch(setLatestInvoiceId(null));
      setStatus('idle');
    }
  };

  const subscribeInProgress = status === 'subscribing';
  const subscribeDisabled =
    !priceId || status === 'init' || status === 'subscribing' || !cardComplete;

  return subscription ? (
    <ActiveSubscription subscription={subscription} />
  ) : (
    <SubscribeToReplika>
      <Title>Subscribe to Replika Pro</Title>
      <Description>
        Pick a subscription plan to support the project and get full access to
        the app. Cancel anytime.
      </Description>
      <StripePriceList
        priceId={priceId}
        subscriptions={stripeSubscriptions ?? []}
        onChange={setPriceId}
      />
      <StripeContainer>
        <CardElement
          options={styleOptions}
          onChange={({ complete }) => setCardComplete(complete)}
        />
      </StripeContainer>
      {errorMessage && <Error>{errorMessage}</Error>}
      <ButtonWithSpinner inProgress={subscribeInProgress}>
        <SolidButton disabled={subscribeDisabled} onClick={handleSubmit}>
          Subscribe
        </SolidButton>
      </ButtonWithSpinner>
    </SubscribeToReplika>
  );
}

export default withTheme(SubscriptionContent);

const SubscribeToReplika = styled.div`
  flex: 0 0 auto;
  height: 600px;
  width: 565px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${dialogMobileMedia`
    height: auto;
  `}
`;

const Error = styled.div`
  color: ${(p) => p.theme.errorFgColor};
  margin: 0 20px 20px;
  font-size: 16px;
  line-height: 21px;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  color: ${(p) => p.theme.fgColor};
  margin: 0 0 16px;
  text-align: center;

  ${dialogMobileMedia`
    margin-top: 50px;
  `}
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  max-width: 300px;
  margin: 0 0 35px;
`;

const StripeContainer = styled.div`
  width: calc(100% - 40px);
  margin: 20px 0;
  padding: 14px 17px 16px;
  border-radius: 4px;

  border: 1px solid ${(p) => p.theme.borderColor};
  background-color: ${(p) => p.theme.inputBgColor};
`;

const StripePriceListRoot = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  display: flex;
  overflow-y: scroll;
  max-width: 100%;

  /* right padding fix */
  &::after {
    content: '';
    padding-right: 20px;
  }

  & > li + li {
    margin-left: 10px;
  }
`;
