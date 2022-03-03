import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Subscription,
  RecurringSubscription,
  StripeSubscription,
} from '../../../types/models';
import { getPrices } from '../../../actions/subscriptions';
import LinkButton from '../../../components/LinkButton';
import getLandingLink from '../../../utils/getLandingLink';
import { isEnvironment } from '../../../utils/environment';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import useBotName from '../../../utils/useBotName';
import useApi from '../../../utils/useApi';
import { setActiveDialog } from '../../../actions/ui';
import { Dialogs } from '../../../types/enums';

type Props = {
  className?: string;
  subscription: Subscription;
};

function getTexts(subscription: Subscription, botName: string) {
  switch (subscription.source) {
    case 'ios':
      return {
        title: 'You are paying through Apple App Store',
        description:
          'To change what you pay update your subscription settings of your App Store account.',
      };

    case 'android':
      return {
        title: 'You are paying through Google Play',
        description:
          'To change what you pay update your subscription settings of your Google Play account.',
      };

    case 'legacy':
    case 'stripe':
    case 'promo':
      return {
        title: 'Welcome to Replika Pro',
        description: `You now have access to all features and conversations in the app. Enjoy spending time with ${botName}!`,
      };

    default:
      return { title: '', description: '' };
  }
}

function SubscriptionCard({ subscription }: { subscription: Subscription }) {
  let period: string | undefined;
  let stripeSubscription: StripeSubscription | undefined;
  let description: React.ReactNode | undefined;

  const subscriptions = useApi(
    (state) => state.subscriptions.persist.stripeSubscriptions ?? [],
    getPrices,
    { memoDeepEqual: true }
  );

  if (isRecurringSubscription(subscription)) {
    const {
      period_amount: amount,
      period_timeunit: timeunit,
    } = subscription.recurring;
    if (amount > 1) {
      period = `${amount}-${timeunit}`;
    } else {
      period = timeunit === 'day' ? 'daily' : `${timeunit}ly`;
    }
    stripeSubscription = subscriptions.find(
      (p) => p.subscription_id === subscription.subscription_id
    );
    description = (
      <>
        <Desc>Created {moment.utc(subscription.created).format('ll')}</Desc>
        <Desc>
          Next payment {moment.utc(subscription.expiration).format('ll')}
        </Desc>
      </>
    );
  } else if (isLifetimeSubscription(subscription)) {
    period = 'lifetime';
    description = (
      <LifetimeDesc>
        You have an unlimited subscription, no further payments required.
      </LifetimeDesc>
    );
  }

  const isTrial =
    isRecurringSubscription(subscription) &&
    subscription.subscription_state === 'FreeTrial';

  return (
    <SubscriptionCardRoot>
      {isTrial && stripeSubscription && (
        <SubscriptionTrialBadge>
          {stripeSubscription.trial_period_days === 1
            ? `${stripeSubscription.trial_period_days}-day trial`
            : `${stripeSubscription.trial_period_days}-days trial`}
        </SubscriptionTrialBadge>
      )}
      <Period>{period}</Period>
      {stripeSubscription ? (
        <Price>
          {stripeSubscription.price.amount.toFixed(2)}{' '}
          <Currency>{stripeSubscription.price.currency}</Currency>
        </Price>
      ) : (
        <Price />
      )}
      {description}
    </SubscriptionCardRoot>
  );
}

const SubscriptionCardRoot = styled.div`
  position: relative;
  margin: 40px 0 0;
  width: 280px;
  border: 2px solid ${(p) => p.theme.borderButtonSelectedBorderColor};
  border-radius: 8px;
  padding: 14px 16px;
`;

const SubscriptionTrialBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(p) => p.theme.subscriptionBadgeFgColor};
  background-color: ${(p) => p.theme.subscriptionBadgeBgColor};
  padding: 4px 8px;
  border-radius: 2px;
`;

const Period = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  color: ${(p) => p.theme.fgColor};
`;

const Desc = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.dimmedFgColor};

  & + & {
    margin-top: 4px;
  }
`;

const LifetimeDesc = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.dimmedFgColor};
  max-width: 200px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  height: 30px;
  color: ${(p) => p.theme.fgColor};
`;

const Currency = styled.span`
  text-transform: uppercase;
  vertical-align: top;
  color: ${(p) => p.theme.dimmedFgColor};
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
`;

function isRecurringSubscription(
  subscription: Subscription
): subscription is RecurringSubscription {
  return (
    subscription.source !== 'legacy' &&
    subscription.source !== 'promo' &&
    subscription.subscription_type === 'SUBS'
  );
}

function isLifetimeSubscription(
  subscription: Subscription
): subscription is RecurringSubscription {
  return (
    subscription.source !== 'legacy' &&
    subscription.source !== 'promo' &&
    subscription.subscription_type === 'IN_APP'
  );
}

function ActiveSubscription({ className, subscription }: Props) {
  const dispatch = useDispatch();

  const botName = useBotName();

  const { title, description } = getTexts(subscription, botName);

  const cancellable = isRecurringSubscription(subscription);
  const cancellableOnDev = !cancellable && !isEnvironment('production');

  const showSubscriptionCard =
    (isRecurringSubscription(subscription) &&
      subscription.recurring.period_amount > 0) ||
    isLifetimeSubscription(subscription);

  return (
    <ActiveSubscriptionRoot className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {showSubscriptionCard ? (
        <SubscriptionCard subscription={subscription} />
      ) : (
        <SubscriptionCardPlaceholder />
      )}
      <Actions>
        {cancellable && (
          <StyledLinkButton
            onClick={() => {
              dispatch(setActiveDialog({ type: Dialogs.CancelSubscription }));
            }}
          >
            Cancel subscription
          </StyledLinkButton>
        )}
        {cancellableOnDev && (
          <StyledLinkButton
            onClick={() => {
              dispatch(setActiveDialog({ type: Dialogs.CancelSubscription }));
            }}
          >
            Cancel subscription [DEV]
          </StyledLinkButton>
        )}
        <StyledLink
          href={`${getLandingLink()}/legal/terms#2.4.-subscriptions`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View subscription terms
        </StyledLink>
      </Actions>
    </ActiveSubscriptionRoot>
  );
}

export default ActiveSubscription;

const ActiveSubscriptionRoot = styled.div`
  flex: 0 0 auto;
  position: relative;
  height: 444px;
  width: 400px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.fgColor};
  padding: 0 20px;

  ${dialogMobileMedia`
    flex: 1 0 auto;
    height: auto;
  `}
`;

const SubscriptionCardPlaceholder = styled.div`
  height: 50px;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 16px;
  width: 280px;
  text-align: center;

  ${dialogMobileMedia`
    margin-top: 50px;
  `}
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 21px;
  width: 280px;
  text-align: center;
  margin: 0;
`;

const StyledLinkButton = styled(LinkButton)`
  color: ${(p) => p.theme.dimmedFgColor};
  text-decoration: none;
`;

const StyledLink = styled.a`
  color: ${(p) => p.theme.dimmedFgColor};
`;

const Actions = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * ~ * {
    margin-top: 16px;
  }

  ${dialogMobileMedia`
    position: initial;
    height: auto;
    flex: 1 0 auto;
  `}
`;
