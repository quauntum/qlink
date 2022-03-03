import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { RootState } from '../../types/states';
import { UserProfile } from '../../types/models';
import { resendConfirmationEmail } from '../../actions/auth';
import { setTrialPopupActive } from '../../actions/ui';
import { ReactDispatch as RD } from '../../types/redux';
import LinkButton from '../../components/LinkButton';
import PopupCloseButton from './PopupCloseButton';

type Props = {
  className?: string;
  userProfile: undefined | UserProfile;
  sendConfirmationError: string | undefined;
  sendConfirmationStatus: 'initial' | 'sending' | 'sent';
  resendConfirmationEmail: RD<typeof resendConfirmationEmail>;
  setTrialPopupActive: RD<typeof setTrialPopupActive>;
};

const TrialPopupRoot = styled.div`
  width: 650px;
  text-align: center;
  padding: 20px;
`;

const Success = styled.div`
  color: ${p => p.theme.dimmedFgColor};
  margin-top: 15px;
  font-size: 0.8em;
`;

const Error = styled.div`
  color: ${p => p.theme.errorFgColor};
  margin-top: 15px;
  font-size: 0.8em;
`;

const TrialPopup = ({
  className,
  userProfile,
  sendConfirmationError,
  sendConfirmationStatus,
  resendConfirmationEmail: resend,
  setTrialPopupActive: setActive
}: Props) => {
  const emailSettings = userProfile?.email_settings;

  if (!emailSettings || emailSettings.is_email_verified) {
    return null;
  }

  return (
    <TrialPopupRoot className={className}>
      <PopupCloseButton onClick={() => setActive(false)} />
      Your email <b>{emailSettings.email}</b> hasn’t been verified. <br />
      Check you inbox for a confirmation email or{' '}
      <LinkButton onClick={resend}>request a new verification link</LinkButton>.
      {sendConfirmationStatus === 'sent' && (
        <Success aria-live="assertive">
          Confirmation email was sent to {emailSettings.email}
        </Success>
      )}
      {sendConfirmationError && (
        <Error aria-live="assertive">{sendConfirmationError}</Error>
      )}
    </TrialPopupRoot>
  );
};

export default connect(
  (state: RootState) => ({
    userProfile: state.profile.persist.userProfile,
    sendConfirmationStatus: state.auth.sendConfirmationStatus,
    sendConfirmationError: state.auth.sendConfirmationError
  }),
  {
    resendConfirmationEmail,
    setTrialPopupActive
  }
)(TrialPopup);
