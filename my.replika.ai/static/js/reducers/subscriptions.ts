import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ToSuccess } from '../types/asyncActions';
import { SubscriptionState } from '../types/states';
import * as A from '../types/actions';
import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';

const DEFAULT_STATE: SubscriptionState = {
  persist: {
    subscription: null,
    features: [],
    reboardingDialogShown: false,
    stripeLatestInvoiceId: null,
    stripeCustomerId: null,
    stripeSubscriptions: null,
  },
  stripeConfig: null,
  stripeEnabled: false,
};

type R<X extends A.SubscriptionAction> = Reducer<SubscriptionState, X>;
type RSuccess<X> = Reducer<SubscriptionState, ToSuccess<X>>;

const setSubscription: RSuccess<A.GetSubscriptions> = (state, { result }) => ({
  ...state,
  persist: {
    ...state.persist,
    subscription: result.subscription || null,
    features: result.features || [],
  },
});

const setReboardingDialogShown: R<A.SetReboardingDialogShown> = (state) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      reboardingDialogShown: true,
    },
  };
};

const resetState = (state) => ({
  ...DEFAULT_STATE,
  persist: {
    ...DEFAULT_STATE.persist,
    reboardingDialogShown: state.reboardingDialogShown,
  },
});

const setStripeConfig: RSuccess<A.GetStripeConfig> = (state, { result }) => ({
  ...state,
  stripeConfig: result,
});

const setCustomerId: RSuccess<A.CreateStripeCustomer> = (
  state,
  { result }
) => ({
  ...state,
  persist: {
    ...state.persist,
    stripeCustomerId: result.customer_id,
  },
});

const setStripePrices: RSuccess<A.GetStripePrices> = (state, { result }) => ({
  ...state,
  persist: {
    ...state.persist,
    stripeSubscriptions: result.available_subscriptions,
  },
});

const setLatestInvoiceId: R<A.SetStripeLatestInvoiceId> = (
  state,
  { invoiceId }
) => ({
  ...state,
  persist: {
    ...state.persist,
    stripeLatestInvoiceId: invoiceId,
  },
});

const setStripeEnabled: R<A.SetStripeEnabled> = (state) => ({
  ...state,
  stripeEnabled: true,
});

export default function subscriptions(
  state: SubscriptionState = DEFAULT_STATE,
  action: A.AnyAction
): SubscriptionState {
  return applyReducer(
    'subscriptions',
    {
      [AAT.GetSubscriptions]: {
        success: setSubscription,
      },
      [AT.SetReboardingDialogShown]: setReboardingDialogShown,
      [AAT.Logout]: {
        success: resetState,
        error: resetState,
      },
      [AAT.DeleteAccount]: {
        success: resetState,
      },
      [AAT.GetStripeConfig]: {
        success: setStripeConfig,
      },
      [AAT.CreateStripeCustomer]: {
        success: setCustomerId,
      },
      [AAT.GetStripePrices]: {
        success: setStripePrices,
      },
      [AT.SetStripeLatestInvoiceId]: setLatestInvoiceId,
      [AT.SetStripeEnabled]: setStripeEnabled,
    },
    state,
    action
  );
}
