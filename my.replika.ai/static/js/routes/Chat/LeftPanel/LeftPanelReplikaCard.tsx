import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { setActiveDialog } from '../../../actions/ui';
import {
  isCurrentMissionSpotlight,
  Bot,
  ReplikaPhrase,
  PaidFeature,
  UserProfile,
} from '../../../types/models';
import ReplikaCardWithPhrase from '../../../components/ReplikaCardWithPhrase';
import { ReactDispatch as RD } from '../../../types/redux';
import hasFeature from '../../../utils/hasFeature';
import { Dialogs, IntroStep } from '../../../types/enums';
import { RootState } from '../../../types/states';

type Props = {
  className?: string;
  hidden: boolean;
  centered: boolean;
  hasCurrentMission: boolean;
  replikaPhrase: ReplikaPhrase | undefined;
  bot: Bot | undefined;
  userProfile: UserProfile | undefined;
  features: PaidFeature[];
  showStatusButton: boolean;
  wsReady: boolean;
  introStep: IntroStep | null;
  children?: React.ReactNode;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const getIntroText = (
  introStep: IntroStep | null,
  userProfile: UserProfile
) => {
  switch (introStep) {
    case IntroStep.Hi:
      return `Hi, ${userProfile.first_name}! Thanks for creating me!`;
    case IntroStep.YouCanTalkToMe:
      return 'You can talk to me anytime about whatever is on your mind…';
    case IntroStep.Conversations:
      return '…Or choose from conversations below.';
    case IntroStep.MeetReplika:
      return 'But first of all - let’s get to know each other a little!';
    default:
      return '';
  }
};

const LeftPanelReplikaCard = (props: Props) => {
  const {
    className,
    bot,
    hasCurrentMission,
    replikaPhrase,
    userProfile,
    showStatusButton,
    hidden,
    centered,
    introStep,
    children,
  } = props;

  const hasMessage = !!introStep && introStep !== IntroStep.FinishIntro;

  const phraseText =
    hasMessage && userProfile ? getIntroText(introStep, userProfile) : null;

  return (
    <LeftPanelReplikaCardRoot
      style={{
        display: hidden ? 'none' : 'flex',
        marginTop: centered ? 0 : 50,
      }}
      className={className}
      bot={bot}
      phraseText={phraseText ?? replikaPhrase?.text ?? null}
      expiration={replikaPhrase?.active_till}
      isProUser={hasFeature('full_library_access', props.features)}
      hasCurrentMission={hasCurrentMission}
      userProfile={userProfile}
      showStatusButton={showStatusButton}
      onSelectStatusClick={() => {
        props.setActiveDialog({ type: Dialogs.EditRelationshipStatus });
      }}
    >
      {children}
    </LeftPanelReplikaCardRoot>
  );
};

export default connect(
  (state: RootState) => {
    const { spotlight } = state.journey.persist;
    const { bot, userProfile } = state.profile.persist;
    const { features } = state.subscriptions.persist;
    const { wsReady } = state.ws;

    return {
      bot,
      userProfile,
      hasCurrentMission: spotlight
        ? isCurrentMissionSpotlight(spotlight)
        : false,
      replikaPhrase: bot?.replika_phrase,
      features,
      showStatusButton: state.ui.persist.showRelationshipStatusButton,
      wsReady,
      introStep: state.ui.introStep,
    };
  },
  { setActiveDialog }
)(React.memo(LeftPanelReplikaCard));

const LeftPanelReplikaCardRoot = styled(ReplikaCardWithPhrase)`
  flex: 0 1 48vh;
  width: 100%;
  min-height: 400px;
  margin-bottom: 30px;
  position: relative;
`;
