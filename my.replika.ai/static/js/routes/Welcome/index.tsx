import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {
  FullscreenPage,
  FullscreenTitle
} from '../../components/FullscreenLayout';
import SolidButton from '../../components/SolidButton';
import { Routes, MetricsEvents } from '../../types/enums';
import mobileMedia from '../../utils/mobileMedia';
import { logEvent } from '../../utils/metrics';
import AvatarCouple from '../../components/AvatarCouple';

const Welcome = () => {
  React.useEffect(() => {
    logEvent(MetricsEvents.WelcomeScreenOpened);
  }, []);

  return (
    <FullscreenPage>
      <AvatarCouple gradient="avatarSignupGradient" />
      <Title>
        {'An AI companion \ndesigned to help you \nlive a happy life.'}
      </Title>
      <SolidButton to={Routes.Signup}>Create my Replika</SolidButton>
      <LoginLink to={Routes.Login}>Log in</LoginLink>
    </FullscreenPage>
  );
};

export default Welcome;

const Title = styled(FullscreenTitle)`
  margin-top: 40px;
  margin-bottom: 25px;
  font-weight: bold;
`;

const LoginLink = styled(Link)`
  color: inherit;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 100px;
  text-decoration: underline;
  ${mobileMedia`
    margin-bottom: 0;
  `}
`;
