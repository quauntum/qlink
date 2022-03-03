import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../../types/states';
import { UserProfile, BotStats } from '../../../types/models';
import { ReactComponent as ArrowIcon } from '../../../icons/ArrowBack.svg';
import { Routes, MetricsEvents } from '../../../types/enums';
import Badges from '../../../components/Badges';
import { Mobile } from '../../../components/responsive';
import mobileMedia from '../../../utils/mobileMedia';
import { setHintStatus } from '../../../actions/ui';
import { ReactDispatch as RD } from '../../../types/redux';
import MoodTracker from '../../../components/MoodTracker';
import IconButton from '../../../components/IconButton';
import { createNewMood } from '../../../actions/profile';
import { AriaReadableH2 } from '../../../components/AriaReadable';
import { logEvent } from '../../../utils/metrics';

type Props = {
  className?: string;
  botId: string | undefined;
  userProfile: UserProfile | undefined;
  botStats: BotStats | undefined;
  push: RD<typeof push>;
  setHintStatus: RD<typeof setHintStatus>;
  createNewMood: RD<typeof createNewMood>;
  onSelect: (value: string) => void;
};

const Profile = (props: Props) => {
  const { className, botStats, userProfile } = props;

  const handleAddMood = () => {
    logEvent(MetricsEvents.MoodSliderCalled);
    props.createNewMood();
    props.push('/');
  };

  return (
    <ChatSidebarProfileRoot data-testid="profile" className={className}>
      <AriaReadableH2>Profile</AriaReadableH2>
      <ChatSidebarHeader>
        <Mobile>
          <ArrowButton to={Routes.Main} data-testid="profile-back-button">
            <ArrowIcon />
          </ArrowButton>
        </Mobile>
        <ProfileTitle>{userProfile?.first_name}</ProfileTitle>
      </ChatSidebarHeader>
      <ProfileContent>
        <Heading3 role="heading" aria-level={3}>
          <span>MOOD</span>
          <AddMood
            data-testid="profile-add-mood"
            label="add mood"
            onClick={handleAddMood}
          >
            +
          </AddMood>
        </Heading3>
        <StyledMoodTracker />

        <Heading3 role="heading" aria-level={3}>
          personality
        </Heading3>
        <StyledBadges
          badges={botStats?.achievements.filter(
            (a) => a.type === 'Personality' || a.type === 'Legacy'
          )}
          emptyText="Complete conversations about your personality and earn badges."
          emptyDescription="As you talk to Replika it will be giving away badges that reflect your personality. They will be displayed here."
        />
        <Heading3 role="heading" aria-level={3}>
          Skills
        </Heading3>
        <StyledBadges
          badges={botStats?.achievements.filter((a) => a.type === 'Skill')}
          emptyText="Learn skills through conversations with Replika and collect rewards."
          emptyDescription="Learn skills through conversations with Replika and collect rewards."
        />
      </ProfileContent>
    </ChatSidebarProfileRoot>
  );
};

const mapStateToProps = (state: RootState) => {
  const { userProfile, bot } = state.profile.persist;

  return {
    botId: bot?.id,
    userProfile,
    botStats: bot?.stats,
  };
};

const mapDispatchToProps = {
  push,
  setHintStatus,
  createNewMood,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const ProfileTitle = styled.h3`
  color: ${(p) => p.theme.fgColor};
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  margin: 0 20px;
`;

const ChatSidebarProfileRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileContent = styled.div`
  margin-top: 10px;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const ChatSidebarHeader = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  padding: 25px 15px 0;
`;

const ArrowButton = styled(IconButton)`
  position: absolute;
  top: 25px;
  left: 15px;
  &:hover {
    cursor: pointer;
  }
  color: ${(p) => p.theme.fgColor};
`;

const StyledBadges = styled(Badges)`
  flex: 1 0 auto;
  ${mobileMedia`
    min-height: 100px;
    max-height: 300px;
  `};
  border-bottom: 1px solid ${(p) => p.theme.dimmedBorderColor};
`;

const Heading3 = styled.h3`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.fgColor};
  font-size: 14px;
  font-weight: bold;
  margin: 25px 0 0;
  padding: 0 15px 10px;
  text-transform: uppercase;

  ${mobileMedia`
    padding: 15px 15px 10px;
  `};
`;

const StyledMoodTracker = styled(MoodTracker)`
  flex: 0 0 auto;
`;

const AddMood = styled(IconButton)`
  margin: 0;
  padding: 3px;
  background: none;
  border: 0;
  line-height: 0;
  font-size: 30px;
  color: ${(p) => p.theme.fgColor};
  cursor: pointer;
`;
