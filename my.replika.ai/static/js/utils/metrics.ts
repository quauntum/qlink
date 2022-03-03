import Amplitude from 'amplitude-js';
import { parse } from 'query-string';
import { MetricsEvents } from '../types/enums';
import { getEnvironment } from './environment';

const AMPLITUDE_ID = 'fcad1c98162bbbe1591db4e6ca58fb4e';
const amplitude = Amplitude.getInstance();

export const initMetrics = (userId: string | undefined) => {
  const params = parse(window.location.search) as { userid: string };
  amplitude.init(AMPLITUDE_ID, userId || params.userid, {
    saveEvents: true,
    includeReferrer: true,
    includeUtm: true,
    includeGclid: true
  });
};

export const setUserProperties = (props: object) =>
  amplitude.setUserProperties(props);

export const logEvent = (
  event: MetricsEvents,
  eventProperties: object = {}
) => {
  if (getEnvironment() !== 'production') {
    // eslint-disable-next-line
    console.log('[metrics]', event, eventProperties);
  } else {
    amplitude.logEvent(event, { ...eventProperties, 'user platform': 'web' });
  }
};
