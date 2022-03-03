import * as React from 'react';
import styled from 'styled-components/macro';
import mobileMedia from '../../utils/mobileMedia';
import styledOmitProps from '../../utils/styledOmitProps';
import SolidButton from '../SolidButton';
import Footer from './Footer';
import LinkButton from '../LinkButton';
import StepDots from './StepDots';
import AriaStatusText from '../AriaStatusText';
import AriaReadable from '../AriaReadable';
import IconButton from '../IconButton';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import { ReactComponent as BackIcon } from '../../icons/ArrowBack.svg';

type Props = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode | undefined;
  children?: React.ReactNode;
  onLogout?: () => void;
  onClose?: () => void;
  step?: number;
  maxStep?: number;
  'data-testid'?: string;
  beforeContent?: React.ReactNode;
  backTo?: string;
  backLabel?: string;
};

const SubmitErrorRoot = styledOmitProps<
  { hasError?: boolean },
  typeof AriaStatusText
>(AriaStatusText, ['hasError'])`
  margin-top: ${p => (p.hasError ? '20px' : 0)};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: left;
  color: ${p => p.theme.errorFgColor};
  font-size: 12px;
  max-height: ${p => (p.hasError ? '100px' : '0px')};
  transition: max-height 0.2s ease-out, margin-top 0.2s ease-out;
`;

export const SubmitError = ({
  children,
  ...rest
}: React.ComponentProps<typeof SubmitErrorRoot>) => {
  return (
    <SubmitErrorRoot as="div" {...rest}>
      <span>{children && <AriaReadable>Error occured:</AriaReadable>}</span>
      <span>{children}</span>
    </SubmitErrorRoot>
  );
};

const FullscreenPageRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  background-color: ${p => p.theme.loginBgColor};

  ${mobileMedia`
    /* force to prevent viewport-units-buggyfill override */
    &&& {
      height: auto;
    }
  `};
`;

export const FullscreenForm = styled.form`
  margin-top: 10px;
  width: 355px;
  overflow-y: auto;
  padding: 5px;

  ${mobileMedia`
    width: 100%;
    padding: 0;
    overflow-y: initial;
  `};
`;

export const SubmitButton = styled(SolidButton)`
  margin: 30px auto 0;
  width: auto;
  display: block;

  ${mobileMedia`
    width: 100%;
  `};
`;

export const FullscreenHeader = styled.header`
  color: ${p => p.theme.fgColor};
  margin: 0 auto;
  width: 100%;
  padding: 23px 32px 0;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  // fixes overflow issue on android
  @media (max-height: 400px) {
    display: none;
  }

  color: ${p => p.theme.fgColor};

  ${mobileMedia`
    padding: 23px 15px 0;
  `};
`;

export const FullscreenFooter = styled(Footer)`
  // fixes overflow issue on android
  min-width: 320px;
  width: 100%;
  height: 40px;
  flex: 0 0 auto;
  padding: 0 32px;

  ${mobileMedia`
    height: auto;
    margin: 50px 0 20px;
    padding: 0;
  `};

  @media (max-height: 400px) {
    display: none;
  }
`;

const FullscreenTitles = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FullscreenTitle = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 900;
  margin: 0;
  text-align: center;
  color: ${p => p.theme.fgColor};
  white-space: pre-wrap;

  ${mobileMedia`
    font-size: 24px;
    line-height: 32px;
  `};
`;

export const FullscreenSubtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.56;
  letter-spacing: -0.2px;
  color: #000000;
  text-align: center;
  color: ${p => p.theme.fgColor};
  max-width: 456px;
  margin: 20px 0 0;
  white-space: pre-wrap;

  @media (max-width: 450px) {
    padding: 0 10px;
    width: 100%;
  }

  @media (max-width: 320px) {
    padding: 0 10px;
    width: 300px;
  }

  ${mobileMedia`
    color: ${p => p.theme.lightFgColor};
    font-weight: normal;
  `};
`;

const FormContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;

  ${mobileMedia`
    padding: 0 15px;
    width: 100%;
    max-width: 340px;
    max-height: 999vh;
  `};
`;

const HeaderBlockLeft = styledOmitProps<{ hideMobile: boolean }>('div', [
  'hideMobile'
])`
  flex: 1 0 20%;
  ${mobileMedia`
    display: ${p => (p.hideMobile ? 'none' : 'block')};
  `}
`;

const HeaderBlockRight = styled(HeaderBlockLeft)`
  text-align: right;
`;

const StyledStepDots = styled(StepDots)`
  margin: 20px auto 20px;
`;

const FullscreenBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// this is a mess, I'm sorry :(
export const FullscreenPage = ({
  className,
  title,
  subtitle,
  children,
  onLogout,
  step,
  maxStep,
  'data-testid': dataTestId,
  beforeContent,
  onClose,
  backTo,
  backLabel
}: Props) => (
  <FullscreenPageRoot data-testid={dataTestId} className={className}>
    <FullscreenHeader>
      {backTo && (
        <BackButton label={backLabel} to={backTo}>
          <BackIcon />
        </BackButton>
      )}
      <HeaderBlockLeft hideMobile={!!step}>
        <div />
      </HeaderBlockLeft>
      {step && maxStep && (
        <StyledStepDots
          step={step}
          maxStep={maxStep}
          data-testid={dataTestId && `${dataTestId}-steps`}
        />
      )}
      <HeaderBlockRight hideMobile={!!step}>
        {onLogout && (
          <LinkButton
            onClick={onLogout}
            data-testid={dataTestId && `${dataTestId}-logout-button`}
          >
            Log out
          </LinkButton>
        )}
        {onClose && (
          <CloseButton
            onClick={onClose}
            data-testid={dataTestId && `${dataTestId}-close-button`}
          >
            <CloseIcon />
          </CloseButton>
        )}
      </HeaderBlockRight>
    </FullscreenHeader>
    <FullscreenBody>
      {beforeContent}
      <FormContent>
        {title && (
          <FullscreenTitles>
            {title && (
              <FullscreenTitle
                data-testid={dataTestId && `${dataTestId}-title`}
              >
                {title}
              </FullscreenTitle>
            )}
            {subtitle && (
              <FullscreenSubtitle
                data-testid={dataTestId && `${dataTestId}-subtitle`}
              >
                {subtitle}
              </FullscreenSubtitle>
            )}
          </FullscreenTitles>
        )}
        {children}
      </FormContent>
    </FullscreenBody>
    <div />
  </FullscreenPageRoot>
);

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${p => p.theme.fgColor};

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const BackButton = styled(IconButton)`
  position: absolute;
  z-index: 1;
  left: 24px;
  top: 36px;
  color: ${p => p.theme.fgColor};
`;
