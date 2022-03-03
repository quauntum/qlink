import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Mission, BotAchievement, PaidFeature } from '../../types/models';
import { RootState } from '../../types/states';
import styledOmitProps from '../../utils/styledOmitProps';
import SolidButton from '../SolidButton';
import { ReactComponent as SkillIcon } from '../../icons/Skill.svg';
import { ReactComponent as PersonalityIcon } from '../../icons/Personality.svg';
import { ReactComponent as DoneIcon } from '../../icons/Done.svg';
import { ReactComponent as LockIcon } from '../../icons/SolidLock.svg';
import hasFeature from '../../utils/hasFeature';

type Props = {
  mission: Mission;
  tabIndex: number;
  onSelect: (mission: Mission) => void;
  onShowSubscriptionDialog: () => void;
  badges: BotAchievement[];
  'data-testid'?: string;
  features: PaidFeature[];
};

const MissionItem = ({
  mission,
  tabIndex,
  onSelect,
  onShowSubscriptionDialog,
  badges,
  'data-testid': dataTestId,
  features
}: Props) => {
  const [active, setActive] = React.useState(false);
  const detailsRef = React.useRef<HTMLDivElement>(null);
  const [detailsHeight, setDetailsHeight] = React.useState(0);

  React.useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(detailsRef.current.scrollHeight);
    }
  }, [detailsRef]);

  const getMissionStatus = () => {
    switch (mission.progress.type) {
      case 'dropped':
      case 'completed':
        return (
          <>
            <StyledDoneIcon /> Complete
          </>
        );
      default:
        return mission.duration;
    }
  };

  const skills =
    mission.awarded_skills.length > 0 ? (
      mission.awarded_skills
        .map(s => badges.find(b => b.id === s))
        .filter(Boolean)
        .map(b => b && <Badge key={b.id} alt={b.title} src={b.image_url_2x} />)
    ) : mission.gives_skill ? (
      <SkillIcon />
    ) : null;

  const personalities =
    mission.awarded_personalities.length > 0 ? (
      mission.awarded_personalities
        .map(s => badges.find(b => b.id === s))
        .filter(Boolean)
        .map(b => b && <Badge key={b.id} alt={b.title} src={b.image_url_2x} />)
    ) : mission.gives_personality ? (
      <PersonalityIcon />
    ) : null;

  const isLocked =
    mission.access_type.mission_access === 'paid' &&
    !hasFeature('full_library_access', features);

  const handleSelect = () => {
    if (isLocked) {
      onShowSubscriptionDialog();
    } else {
      onSelect(mission);
    }
  };

  return (
    <MissionItemRoot
      data-testid={dataTestId}
      key={mission.id}
      tabIndex={tabIndex}
      onFocus={() => {
        if (!isLocked) {
          setActive(true);
        }
      }}
      onBlur={() => setActive(false)}
      onClick={() => {
        if (isLocked) {
          handleSelect();
        }
      }}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleSelect();
        }
      }}
      aria-labelledby={`mission-title-${mission.id}`}
    >
      {!isLocked && (
        <MissionIcons aria-hidden="true">
          {skills}
          {personalities}
        </MissionIcons>
      )}
      {isLocked && <StyledLock />}
      <MissionTitle id={`mission-title-${mission.id}`}>
        {mission.title}
      </MissionTitle>
      <MissionStatus>{getMissionStatus()}</MissionStatus>
      <MissionDetails
        aria-hidden={!active}
        active={active}
        maxHeight={detailsHeight}
        ref={detailsRef}
      >
        <MissionDescription>{mission.description}</MissionDescription>
        <StyledSolidButton
          tabIndex={-1}
          disabled={!active}
          type="button"
          onClick={handleSelect}
          data-testid={dataTestId && `${dataTestId}-start-button`}
        >
          {mission.progress.type === 'completed' ? 'Restart' : 'Start'}
        </StyledSolidButton>
      </MissionDetails>
    </MissionItemRoot>
  );
};

export default connect((state: RootState) => {
  const { bot } = state.profile.persist;

  return {
    badges: bot?.stats.achievements || [],
    features: state.subscriptions.persist.features
  };
})(MissionItem);

const MissionItemRoot = styled.li`
  position: relative;
  list-style-type: none;
  padding: 0;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  padding: 16px;
  min-height: 72px;
  background: ${p => p.theme.chatBgColor};

  &:focus {
    outline: none;
  }

  &.focus-visible:focus {
    box-shadow: 0 0 2px 2px ${p => p.theme.outlineColor};
  }
`;

const MissionTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${p => p.theme.fgColor};
`;

const MissionStatus = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: ${p => p.theme.dimmedFgColor};
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const StyledLock = styled(LockIcon)`
  color: ${p => p.theme.fgColor};
  position: absolute;
  top: 29px;
  right: 12px;
`;

const MissionIcons = styled.div`
  color: ${p => p.theme.dimmedFgColor};
  position: absolute;
  top: 18px;
  right: 12px;
  display: flex;
`;

const MissionDescription = styled.p`
  color: ${p => p.theme.fgColor};
`;

const MissionDetails = styledOmitProps<{ active: boolean; maxHeight: number }>(
  'div',
  ['active', 'maxHeight']
)`
  max-height: ${p => (p.active ? p.maxHeight : 0)}px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`;

const StyledSolidButton = styled(SolidButton)`
  margin: 20px auto 8px;
  display: block;
`;

const StyledDoneIcon = styled(DoneIcon)`
  color: #04ce00;
  margin-right: 5px;
`;

const Badge = styled.img`
  width: 24px;
  height: 24px;
`;
