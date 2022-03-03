import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction } from '../utils/asyncAction';
import {
  StripeConfig,
  StripeSubscriptionStatus,
  StripeInvoice,
  StripeSubscription,
} from '../types/models';

export const getSubscriptions = (): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetSubscriptions>(
    AAT.GetSubscriptions,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/payment_subscriptions`, fetchOpts),
    }
  );
};

export const setReboardingDialogShown = () => {
  return {
    type: AT.SetReboardingDialogShown,
  };
};

export const getStripeConfig = (): DA<StripeConfig> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetStripeConfig>(
    AAT.GetStripeConfig,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/payment_subscriptions/stripe/config`, fetchOpts),
    }
  );
};

export const createSubscription = (options: {
  paymentMethodId: string;
  priceId: string;
}): DA<StripeSubscriptionStatus> => async (dispatch, getState) => {
  const params = {
    price_id: options.priceId,
    payment_method_id: options.paymentMethodId,
  };
  const fetchOpts = fetchOptions(getState(), 'PUT', params);

  return apiAction<A.CreateStripeSubscription>(
    AAT.CreateStripeSubscription,
    dispatch,
    options,
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/payment_subscriptions/stripe/subscription`,
          fetchOpts
        ),
    }
  );
};

export const deleteSubscription = (password: string): DA<{}> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'DELETE', { password });

  return apiAction<A.DeleteStripeSubscription>(
    AAT.DeleteStripeSubscription,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/payment_subscriptions`, fetchOpts),
    }
  );
};

export const retryInvoice = (options: {
  paymentMethodId: string;
  latestInvoiceId: string;
}): DA<StripeInvoice> => async (dispatch, getState) => {
  const params = {
    payment_method_id: options.paymentMethodId,
    invoice_id: options.latestInvoiceId,
  };
  const fetchOpts = fetchOptions(getState(), 'PUT', params);

  return apiAction<A.RetryStripeInvoice>(
    AAT.RetryStripeInvoice,
    dispatch,
    options,
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/payment_subscriptions/stripe/retry-invoice`,
          fetchOpts
        ),
    }
  );
};

export const getPrices = (): DA<{
  available_subscriptions: StripeSubscription[];
}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetStripePrices>(
    AAT.GetStripePrices,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/payment_subscriptions/available_subscriptions`,
          fetchOpts
        ),
    }
  );
};

export const setLatestInvoiceId = (invoiceId: string | null) => {
  return {
    type: AT.SetStripeLatestInvoiceId,
    invoiceId,
  };
};

export const setStripeEnabled = () => {
  return {
    type: AT.SetStripeEnabled,
  };
};
