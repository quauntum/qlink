import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import PasswordInput from '../../PasswordInput';
import LabeledTextInput from '../../LabeledTextInput';
import { RootState, Progress } from '../../../types/states';
import {
  updateEmail,
  updatePassword,
  resetServerError,
} from '../../../actions/profile';
import { ReactDispatch as RD } from '../../../types/redux';
import { UiAction } from '../../../types/actions';
import ErrorSuccessMessage from '../../ErrorSuccessMessage';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  FormContents,
  DialogButton,
} from '../../DialogLayout';
import { UserProfile } from '../../../types/models';
import { Link } from 'react-router-dom';
import { dialogMobileMedia } from '../../../utils/mobileMedia';

type Props = {
  serverError: string | undefined;
  updatePasswordProgress: Progress;
  updatePassword: RD<typeof updatePassword>;
  resetServerError: RD<typeof resetServerError>;
  updateEmailProgress: Progress;
  userProfile: UserProfile | undefined;
  updateEmail: RD<typeof updateEmail>;
  onClose: () => UiAction;
};

type State = {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
  newEmail: string;
  password: string;
  buttonText: string;
  lastSubmittedForm: 'password' | 'email' | null;
};

const getEmailButtonText = (updateEmailProgress: Progress): string => {
  switch (updateEmailProgress) {
    case Progress.sending:
      return 'Sending...';

    default:
      return 'Save changes';
  }
};

const getEmailStatusText = (updatePasswordProgress: Progress): string => {
  switch (updatePasswordProgress) {
    case Progress.success:
      return 'Updated successfully';

    default:
      return '';
  }
};

const getPasswordButtonText = (updatePasswordProgress: Progress): string => {
  switch (updatePasswordProgress) {
    default:
      return 'Change';

    case Progress.sending:
      return 'Sending...';
  }
};

const getPasswordStatusText = (updateEmailProgress: Progress): string => {
  switch (updateEmailProgress) {
    case Progress.success:
      return 'Updated successfully';

    default:
      return '';
  }
};

const getInputPlacehodler = (label: string) => {
  switch (label) {
    case 'oldPassword':
      return 'Current password';
    case 'newPassword':
      return 'New password';
    case 'newPassword2':
      return 'Repeat new password';
    default:
      return 'Password';
  }
};

const getInputError = (state: State) => {
  const { newPassword, newPassword2 } = state;
  let inputError: string | null = null;

  if (
    newPassword.length > 0 &&
    newPassword2.length > 0 &&
    newPassword !== newPassword2
  ) {
    inputError = 'New passwords do not match';
  }
  return inputError;
};

const isPasswordButtonDisabled = (state: State) => {
  const { newPassword, newPassword2, oldPassword } = state;

  if (
    newPassword.length === 0 ||
    newPassword2.length === 0 ||
    oldPassword.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};

const isEmailButtonDisabled = (state) => {
  const { password, newEmail } = state;

  if (password.length > 0 && newEmail.length > 0) {
    return false;
  } else {
    return true;
  }
};

const nonEmpty = (arr: string[]) => arr.every((item) => item.length > 0);

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  state: State,
  props: Props,
  handleChange: React.Dispatch<React.SetStateAction<State>>
): void => {
  e.preventDefault();

  const { oldPassword, newPassword, newPassword2, password, newEmail } = state;

  const changePasswordField = [oldPassword, newPassword, newPassword2];
  const changeEmailFields = [password, newEmail];

  if (
    nonEmpty(changePasswordField) &&
    e.currentTarget.name === 'change-password'
  ) {
    props.updatePassword(oldPassword, newPassword);
    handleChange({
      ...state,
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      lastSubmittedForm: 'password',
    });
  }

  if (nonEmpty(changeEmailFields) && e.currentTarget.name === 'change-email') {
    props.updateEmail(password, newEmail);
    handleChange({
      ...state,
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      buttonText: '',
      lastSubmittedForm: 'email',
    });
  }
};

const EditAccountDialog = React.memo((props: Props) => {
  const [state, handleChange] = React.useState<State>({
    oldPassword: '',
    newPassword: '',
    newPassword2: '',
    password: '',
    newEmail: '',
    buttonText: '',
    lastSubmittedForm: null,
  });
  const { newPassword, newPassword2, password, newEmail } = state;

  const {
    serverError,
    updatePasswordProgress,
    updateEmailProgress,
    onClose,
  } = props;

  const inputError = getInputError(state);
  const passwordButtonText = getPasswordButtonText(updatePasswordProgress);
  const passwordStatusText = getPasswordStatusText(updatePasswordProgress);

  const emailButtonText = getEmailButtonText(updateEmailProgress);
  const emailStatusText = getEmailStatusText(updateEmailProgress);

  const handleFieldChange = (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const target = e.target as HTMLInputElement;
    const newState = {
      ...state,
      [target.name]: target.value,
    };

    handleChange(newState);

    props.resetServerError();
  };

  return (
    <Dialog data-testid="edit-account-dialog">
      <DialogHeader onClose={onClose} title="Account settings" />
      <StyledDialogBody>
        <FormContents
          name="change-password"
          onSubmit={(e) => handleSubmit(e, state, props, handleChange)}
        >
          <Label>Change password</Label>
          {['oldPassword', 'newPassword', 'newPassword2'].map((label) => (
            <Row key={label}>
              <PasswordInput
                labeled
                autoComplete="new-password"
                data-testid={`change-password-${label}-input`}
                name={label}
                id={label}
                placeholder={getInputPlacehodler(label)}
                value={state[label]}
                onChange={(e) => handleFieldChange(e)}
              />
            </Row>
          ))}

          {state.lastSubmittedForm === 'password' && (
            <ErrorSuccessMessage
              hasError={!!(serverError || inputError)}
              data-testid="change-password-status-message"
            >
              {serverError || inputError || passwordStatusText}
            </ErrorSuccessMessage>
          )}

          <SubmitButton
            type="submit"
            disabled={
              isPasswordButtonDisabled(state) ||
              newPassword.length === 0 ||
              newPassword !== newPassword2 ||
              updatePasswordProgress === Progress.sending
            }
            data-testid="change-password-submit-button"
          >
            {passwordButtonText}
          </SubmitButton>
        </FormContents>

        {/** CHANGE EMAIL GOES BELOW */}

        <FormContents
          name="change-email"
          onSubmit={(e) => handleSubmit(e, state, props, handleChange)}
        >
          <Label>Change email</Label>
          <Row key="change-email">
            <LabeledTextInput
              autoComplete="new-password"
              data-testid="change-email-newEmail-input"
              type="text"
              name="newEmail"
              id="newEmail"
              placeholder="New email"
              value={newEmail}
              onChange={(e) => handleFieldChange(e)}
            />
          </Row>
          <Row key="change-mail-password">
            <PasswordInput
              labeled
              autoComplete="new-password"
              data-testid="change-email-password-input"
              name="password"
              id="password"
              placeholder="Current password"
              value={password}
              onChange={(e) => handleFieldChange(e)}
            />
          </Row>

          {state.lastSubmittedForm === 'email' && (
            <ErrorSuccessMessage
              hasError={!!serverError}
              data-testid="change-email-status-message"
            >
              {serverError || emailStatusText}
            </ErrorSuccessMessage>
          )}

          <SubmitButton
            type="submit"
            data-testid="change-email-submit-button"
            disabled={isEmailButtonDisabled(state)}
          >
            {emailButtonText}
          </SubmitButton>
        </FormContents>
        <FormContents>
          <DeleteAccountLink to="/delete-account" onClick={onClose}>
            Delete account
          </DeleteAccountLink>
        </FormContents>
      </StyledDialogBody>
    </Dialog>
  );
});

const StyledDialogBody = styled(DialogBody)`
  width: 400px;
`;

const SubmitButton = styled(DialogButton)`
  display: block;
  margin: 30px auto 0;
`;

const Row = styled.div`
  margin: 15px 0;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

const DeleteAccountLink = styled(Link)`
  color: ${(p) => p.theme.errorLightFgColor};
  align-self: flex-start;
  padding: 20px 0 40px;
  display: block;
  width: 280px;
  ${dialogMobileMedia`
    font-size: 15px;
  `};
`;

export default connect(
  (state: RootState) => ({
    serverError: state.profile.serverError,
    updatePasswordProgress: state.profile.updatePasswordProgress,
    updateEmailProgress: state.profile.updateEmailProgress,
    userProfile: state.profile.persist.userProfile,
  }),
  {
    updatePassword,
    updateEmail,
    resetServerError,
  }
)(EditAccountDialog);
