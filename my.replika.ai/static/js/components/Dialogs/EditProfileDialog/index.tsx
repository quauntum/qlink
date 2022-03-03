import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { connect } from 'react-redux';
import { RootState, Progress } from '../../../types/states';
import { UserProfile } from '../../../types/models';
import { ReactDispatch as RD } from '../../../types/redux';
import { Pronouns } from '../../../types/enums';
import { updateUserProfile, resetServerError } from '../../../actions/profile';
import LabeledTextInput from '../../LabeledTextInput';
import DayPicker from '../../DayPicker';
import { SidebarSection, SidebarSpinner } from '../../SidebarLayout';
import ErrorSuccessMessage from '../../ErrorSuccessMessage';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  FormContents,
  DialogButton,
} from '../../DialogLayout';
import PronounSelector from '../../PronounSelector';

type Props = {
  onClose: () => void;
  isFetchingProfile: boolean;
  userProfile: UserProfile | undefined;
  updateProfileProgress: Progress;
  serverError: string | undefined;
  updateUserProfile: RD<typeof updateUserProfile>;
  resetServerError: RD<typeof resetServerError>;
};

type State = {
  userProfile: UserProfile | undefined;
  firstName: string;
  lastName: string | undefined;
  pronoun: Pronouns | undefined;
  birthday: string | undefined;
};

const reducer = (state: State, action: Partial<State>) => {
  return { ...state, ...action };
};

const getStateFromUserProfile = (userProfile: UserProfile | undefined) => {
  return userProfile
    ? {
        userProfile,
        firstName: userProfile.first_name,
        lastName: userProfile.last_name,
        pronoun: userProfile.pronoun,
        birthday: userProfile.birthday_iso || undefined,
      }
    : {
        userProfile: undefined,
        firstName: '',
        lastName: '',
        pronoun: undefined,
        birthday: undefined,
      };
};

const EditProfileDialog = (props: Props) => {
  const {
    updateProfileProgress,
    serverError,
    userProfile,
    onClose,
    isFetchingProfile,
    resetServerError: _resetServerError,
  } = props;
  const [state, dispatch] = React.useReducer(
    reducer,
    getStateFromUserProfile(userProfile)
  );

  React.useEffect(() => {
    _resetServerError();
  }, [_resetServerError]);

  React.useEffect(() => {
    dispatch(getStateFromUserProfile(userProfile));
  }, [userProfile]);

  const { firstName, lastName, birthday, pronoun } = state;

  if (!userProfile) {
    return <SidebarSpinner />;
  }

  const buttonText =
    updateProfileProgress === Progress.sending ? 'Saving...' : 'Save';

  const statusText =
    updateProfileProgress === Progress.success ? 'Updated successfully' : '';

  const buttonDisabled =
    isFetchingProfile || updateProfileProgress === Progress.sending;

  const resetError = () => {
    if (updateProfileProgress !== Progress.initial) {
      props.resetServerError();
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.updateUserProfile({
      first_name: firstName,
      last_name: lastName,
      birthday_iso: birthday,
      pronoun,
    });

    resetError();
  };

  return (
    <Dialog data-testid="edit-profile-dialog">
      <DialogHeader onClose={onClose} title="My Profile" />
      <DialogBody>
        <FormContents onSubmit={handleSubmit}>
          <StyledLabeledTextInput
            autoComplete="off"
            data-testid="edit-profile-firstName-input"
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => {
              dispatch({ firstName: e.target.value });
              resetError();
            }}
          />

          <StyledLabeledTextInput
            autoComplete="off"
            data-testid="edit-profile-lastName-input"
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => {
              dispatch({ lastName: e.target.value });
              resetError();
            }}
          />

          <StyledDayPicker
            id="edit-profile-birthday-input"
            data-testid="edit-profile-birthday-input"
            name="birthday"
            placeholder="Birthday"
            onChange={(value) => {
              dispatch({ birthday: moment(value).format('YYYY-MM-DD') });
              resetError();
            }}
            value={
              typeof birthday !== 'undefined' ? new Date(birthday) : birthday
            }
          />

          <StyledSidebarSection>
            Let Replika know your pronouns
          </StyledSidebarSection>
          <Subtitle />

          <PronounSelector
            value={pronoun}
            onChange={(value) => dispatch({ pronoun: value as Pronouns })}
          />

          <ErrorSuccessMessage
            scrollIntoView
            hasError={!!serverError}
            data-testid="edit-profile-status-message"
          >
            {serverError || statusText}
          </ErrorSuccessMessage>
          <DialogFooter>
            <DialogButton
              type="submit"
              disabled={buttonDisabled}
              data-testid="edit-profile-submit-button"
            >
              {buttonText}
            </DialogButton>
          </DialogFooter>
        </FormContents>
      </DialogBody>
    </Dialog>
  );
};

const ConnectedEditProfileDialog = connect(
  (state: RootState) => ({
    userProfile: state.profile.persist.userProfile,
    isFetchingProfile: state.profile.isFetchingProfile,
    updateProfileProgress: state.profile.updateProfileProgress,
    serverError: state.profile.serverError,
  }),
  {
    updateUserProfile,
    resetServerError,
  }
)(EditProfileDialog);

export default ConnectedEditProfileDialog;

const StyledLabeledTextInput = styled(LabeledTextInput)`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledDayPicker = styled(DayPicker)`
  width: 100%;
`;

const StyledSidebarSection = styled(SidebarSection)`
  text-align: center;
  font-weight: bold;
  color: ${(p) => p.theme.fgColor};
  border-top: 0;
  margin-top: 40px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  opacity: 0.4;
  margin: 16px 12px;
`;
