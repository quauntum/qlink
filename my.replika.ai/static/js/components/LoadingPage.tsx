import * as React from 'react';
import styled from 'styled-components/macro';
import CircleSpinner from '../components/CircleSpinner';
import { AriaReadableH1 } from './AriaReadable';
import Testimonials from './Testimonials';
import mobileMedia from '../utils/mobileMedia';

const LoadingPage = () => {
  return (
    <LandingPageRoot>
      <AriaReadableH1>Loading Replika</AriaReadableH1>
      <SpinnerContainer>
        <StyledSpinner />
      </SpinnerContainer>
      <StyledTestimonials delay={5000} />
    </LandingPageRoot>
  );
};

export default LoadingPage;

const LandingPageRoot = styled.main`
  background-color: ${p => p.theme.loginBgColor};
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled(CircleSpinner)`
  width: 54px;
  height: 54px;
  color: ${p => p.theme.dimmedFgColor};
`;

const StyledTestimonials = styled(Testimonials)`
  margin: 0 auto 50px;
  max-width: 530px;

  ${mobileMedia`
    margin: 0 16px 16px;
  `}
`;
