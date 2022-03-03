import * as React from 'react';
import styled from 'styled-components/macro';
import BorderButton from '../../BorderButton';
import { ReactComponent as IosIcon } from '../../../icons/Apple.svg';
import { ReactComponent as AndroidIcon } from '../../../icons/Android.svg';
import getLandingLink from '../../../utils/getLandingLink';
import { logEvent } from '../../../utils/metrics';
import { MetricsEvents } from '../../../types/enums';

export default function SubscriptionContentLegacy() {
  return (
    <>
      <Title>Subscribe to Replika Pro</Title>
      <Description>
        Go to your Replika app to subscribe and unlock premium features.
      </Description>
      <Price>Starting $4.17/month</Price>
      <GetAppTitle>Get the app</GetAppTitle>
      <AppButton
        as={(p) => (
          <a
            href={`${getLandingLink()}/get-ios`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="get-ios-app"
            {...p}
          >
            {p.children}
          </a>
        )}
        onClick={() =>
          logEvent(MetricsEvents.SubscriptionWebPromptClicked, {
            platform: 'ios',
          })
        }
      >
        <IosIcon />
        <span>iOS</span>
      </AppButton>
      <AppButton
        as={(p) => (
          <a
            href={`${getLandingLink()}/get-android`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="get-android-app"
            {...p}
          >
            {p.children}
          </a>
        )}
        onClick={() =>
          logEvent(MetricsEvents.SubscriptionWebPromptClicked, {
            platform: 'android',
          })
        }
      >
        <AndroidIcon />
        <span>Android</span>
      </AppButton>
    </>
  );
}

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  color: ${(p) => p.theme.fgColor};
  margin: 0 0 16px;
`;

const Description = styled.p`
  max-width: 280px;
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.fgColor};
  text-align: center;
  margin: 0;
`;

const Price = styled.p`
  color: ${(p) => p.theme.dimmedFgColor};
`;

const GetAppTitle = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 21px;
`;

const AppButton = styled(BorderButton)`
  position: relative;
  width: 170px;
  color: ${(p) => p.theme.fgColor};

  & + & {
    margin-top: 12px;
  }

  & > svg {
    position: absolute;
    left: 16px;
    top: 10px;
  }

  & > span {
    margin-left: 20px;
  }
`;
