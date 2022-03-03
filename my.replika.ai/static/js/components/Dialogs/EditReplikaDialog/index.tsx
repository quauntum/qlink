import * as React from 'react';
import styled from 'styled-components/macro';
import { connect, useSelector, useDispatch } from 'react-redux';
import loadable from '@loadable/component';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogButton,
  FormContents
} from '../../DialogLayout';
import { Genders, Routes, Dialogs } from '../../../types/enums';
import LabeledTextInput from '../../LabeledTextInput';
import GenderSelector from '../../GenderSelector';
import { RootState, Progress } from '../../../types/states';
import { updateBot, resetServerError } from '../../../actions/profile';
import { ReactDispatch as RD } from '../../../types/redux';
import { Bot, Avatar } from '../../../types/models';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import { ReactComponent as HeartIcon } from '../../../icons/Heart.svg';
import Switch from '../../Switch';
import { setDisabled3d, setActiveDialog } from '../../../actions/ui';
import ApiImageLoader from '../../ApiImageLoader';
import EggImage from '../../EggImage';
import SolidButton from '../../SolidButton';
import AvatarCouple from '../../AvatarCouple';

const AvatarCarousel = loadable(() =>
  import(/* webpackChunkName: "AvatarCarousel" */ '../../AvatarCarousel')
);

type Props = {
  onClose: () => void;

  bot: Bot | undefined;
  isFetchingProfile: boolean;
  updateReplikaProgress: Progress;
  serverError: string | undefined;
  updateBot: RD<typeof updateBot>;
  resetServerError: RD<typeof resetServerError>;
};

type State = {
  replikaName: string | undefined;
  replikaGender: Genders | undefined;
  avatar: Avatar | undefined;
};

const reducer = (state: State, action: Partial<State>) => {
  return { ...state, ...action };
};

const EditReplikaDialog = React.memo((props: Props) => {
  const { onClose, bot } = props;
  const [state, dispatchState] = React.useReducer(reducer, {
    replikaName: props.bot?.name,
    replikaGender: props.bot?.gender,
    avatar: props.bot?.avatar
  });
  const avatarId = bot?.avatar?.id;
  const customizations = avatarId
    ? {
        [avatarId]: bot?.avatar?.customization
      }
    : {};

  const disabled3d = useSelector(state => state.ui.persist.disabled3d);
  const iconUrl =
    useSelector(state => state.profile.persist.bot?.icon_url) ?? undefined;

  const showAvatar = !!bot?.avatar;

  const dispatch = useDispatch();

  // const isCustomizedAvatar = bot?.avatar?.id === state.avatar?.id;

  const handleSubmit = async e => {
    e.preventDefault();

    // logEvent(MetricsEvents.ReplikaImageSet, {
    //   image: state.iconIndex === 0 ? 'custom' : state.iconIndex
    // });

    const customization = state.avatar?.id
      ? customizations[state.avatar.id]
      : undefined;

    const avatar =
      customization && state.avatar
        ? { ...state.avatar, customization }
        : state.avatar;

    await props.updateBot({
      name: state.replikaName,
      gender: state.replikaGender,
      avatar
    });

    onClose();
  };

  return (
    <Dialog data-testid="edit-replika-dialog">
      <DialogHeader onClose={onClose} title="Replika profile" />
      <StyledDialogBody>
        {showAvatar ? (
          <>
            <StyledAvatarCarousel
              avatar={state.avatar}
              onSelectAvatar={avatar => dispatchState({ avatar })}
              bgColor="dialogBgColor"
              customizations={customizations}
            />
            <SolidButton
              type="button"
              onClick={() => {
                if (state.avatar) {
                  const avatarId = state.avatar.id;
                  dispatch(
                    setActiveDialog({
                      type: Dialogs.CustomizeAvatar,
                      avatarId,
                      customization2d: customizations[avatarId] ?? null
                    })
                  );
                }
              }}
            >
              Customize
            </SolidButton>
          </>
        ) : (
          <>
            <StyledAvatarCouple gradient="avatarDialogGradient" />
            <AvatarDescription>
              Switch to live avatars and enjoy emotional conversations.
            </AvatarDescription>
            <SwitchAvatarButton to={Routes.ChooseAvatar} onClick={onClose}>
              Switch to live avatars
            </SwitchAvatarButton>
            <ApiImageLoader src={iconUrl}>
              {signedUrl => <StyledEggImage imageUrl={signedUrl} />}
            </ApiImageLoader>
          </>
        )}
        <StyledFormContents onSubmit={handleSubmit}>
          {showAvatar && (
            <LiveEmotions>
              <StyledHeartIcon />
              <div>
                <LiveEmotionsHeader>
                  <LiveEmotionsTitle>Live emotions</LiveEmotionsTitle>
                  <Switch
                    checked={!disabled3d}
                    onChange={() => {
                      dispatch(setDisabled3d(!disabled3d));
                    }}
                  />
                </LiveEmotionsHeader>
                <LiveEmotionsDescription>
                  Enable live emotions to bring your Repika to life and enjoy
                  emotional conversation.
                </LiveEmotionsDescription>
              </div>
            </LiveEmotions>
          )}
          <ReplikaNameInput
            autoComplete="off"
            data-testid="edit-replika-replikaName-input"
            name="replikaName"
            id="replika-name"
            placeholder="Replika’s name"
            value={state.replikaName}
            onChange={e => dispatchState({ replikaName: e.target.value })}
          />
          <SelectGenderTitle id="edit-replika-gender-title">
            {state.replikaName || 'Replika'}’s gender
          </SelectGenderTitle>
          <StyledGenderSelector
            aria-labelledby="edit-replika-gender-title"
            value={state.replikaGender}
            onChange={replikaGender => dispatchState({ replikaGender })}
          />
          <DialogFooter>
            <DialogButton type="submit">Save</DialogButton>
          </DialogFooter>
        </StyledFormContents>
      </StyledDialogBody>
    </Dialog>
  );
});

export default connect(
  (state: RootState) => ({
    bot: state.profile.persist.bot,
    isFetchingProfile: state.profile.isFetchingProfile,
    updateReplikaProgress: state.profile.updateReplikaProgress,
    serverError: state.profile.serverError
  }),
  {
    updateBot,
    resetServerError
  }
)(EditReplikaDialog);

const StyledAvatarCarousel = styled(AvatarCarousel)`
  width: 100%;
  min-height: 250px;
  margin: 0 auto;
  flex: 0 0 auto;
  background-color: ${p => p.theme.dialogBgColor};
`;

const StyledEggImage = styled(EggImage)`
  margin: 0 auto;
  width: 100px;
`;

const StyledDialogBody = styled(DialogBody)`
  padding: 40px 0 0;
  ${dialogMobileMedia`
    &&& {
      padding: 40px 0 50px;
    }
  `}
`;

const StyledFormContents = styled(FormContents)`
  min-width: 400px;
  ${dialogMobileMedia`
    min-width: initial;
    padding: 0 20px 20px;
  `}
`;

const ReplikaNameInput = styled(LabeledTextInput)`
  margin: 20px auto 0;
  width: 100%;
  max-width: 320px;
`;

const StyledGenderSelector = styled(GenderSelector)`
  margin: 0 auto 20px;
  width: 175px;
`;

const SelectGenderTitle = styled.h3`
  margin-top: 40px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
`;

const LiveEmotions = styled.div`
  margin: 30px auto 0;
  max-width: 320px;
  display: flex;
`;

const StyledHeartIcon = styled(HeartIcon)`
  flex: 0 0 auto;
  margin-right: 36px;
`;

const LiveEmotionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LiveEmotionsTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 21px;
  font-weight: normal;
`;

const LiveEmotionsDescription = styled.p`
  color: ${p => p.theme.dimmedFgColor};
`;

const StyledAvatarCouple = styled(AvatarCouple)`
  width: 180px;
  height: 100px;
  flex: 0 0 auto;
`;

const AvatarDescription = styled.p`
  width: 280px;
  font-size: 15px;
  line-height: 20px;
  margin: 20px auto;
  text-align: center;
`;

const SwitchAvatarButton = styled(SolidButton)`
  margin-bottom: 80px;
`;
