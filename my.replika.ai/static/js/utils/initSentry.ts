import * as Sentry from '@sentry/browser';
import pkg from '../../package.json';
import { ApiError } from './apiError';
import { getEnvironment } from './environment';

const SENTRY_DSN = 'https://d2482f4f79d54638bcc7beb8c5bc5534@sentry.io/1228111';

export default () => {
  if (getEnvironment() === 'localhost') {
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    release: `${pkg.name}@${pkg.version}`,
    environment: getEnvironment()
  });

  Sentry.configureScope(scope => {
    scope.addEventProcessor(async (event, hint) => {
      // Don't report about API errors
      if (hint && hint.originalException instanceof ApiError) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('captured ApiError', hint.originalException);
        }
        return null;
      }

      return event;
    });
  });
};

export const setUser = (userData: {
  id: string;
  [key: string]: string | undefined;
}) => {
  if (getEnvironment() === 'localhost') {
    return;
  }

  Sentry.configureScope(scope => {
    scope.setUser(userData);
  });
};

export const captureError = (err: Error | string, errorInfo?: object) => {
  if (getEnvironment() === 'localhost') {
    return;
  }

  Sentry.withScope(scope => {
    if (errorInfo) {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    }

    if (err instanceof Error) {
      Sentry.captureException(err);
    } else if (typeof err === 'string') {
      Sentry.captureMessage(err);
    }
  });
};
