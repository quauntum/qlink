import { Stripe } from '@stripe/stripe-js';
import { StripeSubscriptionStatus, StripeInvoice } from '../types/models';

export async function retryIncompleteSubscription(
  paymentMethodId: string,
  stripe: Stripe,
  invoice: StripeInvoice
) {
  const intent = invoice.payment_intent;

  if (!intent) {
    return null;
  }

  if (
    intent.status === 'requires_action' ||
    intent.status === 'requires_payment_method'
  ) {
    const result = await stripe.confirmCardPayment(intent.client_secret, {
      payment_method: paymentMethodId,
    });
    if (result.error) {
      throw result.error;
    } else if (result.paymentIntent?.status === 'succeeded') {
      return null;
    }

    return invoice.id;
  }

  return null;
}

export async function processIncompleteSubscription(
  paymentMethodId: string,
  stripe: Stripe,
  subscriptionStatus: StripeSubscriptionStatus
) {
  if (subscriptionStatus.status === 'active') {
    return null;
  }

  const intent = subscriptionStatus.latest_invoice.payment_intent;

  if (!intent) {
    if (subscriptionStatus.latest_invoice.status === 'open') {
      throw new Error('Something went wrong');
    }
    return null;
  }

  if (intent.status === 'requires_action') {
    const result = await stripe.confirmCardPayment(intent.client_secret);
    if (result.error) {
      throw result.error;
    } else if (result.paymentIntent?.status === 'succeeded') {
      return null;
    }

    return subscriptionStatus.latest_invoice.id;
  } else if (intent.status === 'requires_payment_method') {
    return subscriptionStatus.latest_invoice.id;
  }

  return null;
}
