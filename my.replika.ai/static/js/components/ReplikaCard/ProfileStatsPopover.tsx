import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { Bot, UserProfile, BotAchievement } from '../../types/models';
import SolidButton from '../../components/SolidButton';
import useFocusGroup from '../../utils/useFocusGroup';
import IconButton from '../../components/IconButton';
import { setActiveDialog } from '../../actions/ui';
import { Dialogs } from '../../types/enums';
import getBadgesDivisibleByN from '../../components/Badges/getBadgesDivisibleByN';
import styledOmitProps from '../../utils/styledOmitProps';

type Props = {
  className?: string;
  bot: Bot | undefined;
  userProfile: UserProfile | undefined;
  showStatusButton: boolean;
  status: string;
  onClose: () => void;
  onSelectStatusClick: () => void;
};

function BadgeList({
  badges,
  emptyText,
  emptyDescription
}: {
  badges: BotAchievement[];
  emptyText: string;
  emptyDescription: string;
}) {
  const listRef = React.useRef<HTMLUListElement>(null);

  const dispatch = useDispatch();

  useFocusGroup(
    {
      getGroupElements: () => {
        return listRef.current
          ? listRef.current.querySelectorAll('button')
          : [];
      },
      options: {
        wrap: true,
        keybindings: {
          next: { key: 'ArrowRight' },
          prev: { key: 'ArrowLeft' }
        }
      }
    },
    [listRef, badges.length]
  );

  if (badges.length === 0) {
    return <BadgeListEmpty>{emptyText}</BadgeListEmpty>;
  }

  const badgesWithPlaceholders = getBadgesDivisibleByN(3, badges);

  return (
    <BadgeListRoot ref={listRef}>
      {badgesWithPlaceholders.map((a, i) => {
        return a === '?' ? (
          <BadgeItem key={i} aria-hidden="true">
            <BadgeSlot
              tabIndex={-1}
              onClick={() => {
                dispatch(
                  setActiveDialog({ type: Dialogs.Badge, emptyDescription })
                );
              }}
            />
          </BadgeItem>
        ) : (
          <BadgeItem key={i}>
            <Badge
              tabIndex={i === 0 ? 0 : -1}
              onClick={() => {
                dispatch(setActiveDialog({ type: Dialogs.Badge, badge: a }));
              }}
            >
              <img src={a.image_url_2x} alt={a.title} />
              <div>{a.title}</div>
            </Badge>
          </BadgeItem>
        );
      })}
    </BadgeListRoot>
  );
}

const BadgeListRoot = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`;

const BadgeListEmpty = styled.div`
  color: ${p => p.theme.dimmedFgColor};
  padding: 0px 16px 32px;
`;

const BadgeItem = styled.li`
  flex: 0 0 90px;
  display: block;
  margin-bottom: 25px;
`;

const Badge = styled(IconButton)`
  width: 100%;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  cursor: pointer;

  & > img {
    width: 50px;
  }

  & > div {
    margin: 15px 0 0;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
  }
`;

const BadgeSlot = styled(Badge)`
  &:before {
    content: '?';
    color: ${p => p.theme.dimmedFgColor};
    border: 1px solid ${p => p.theme.borderColor};
    width: 40px;
    height: 40px;
    margin: 4px 0;
    border-radius: 100%;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-size: 18px;
  }
  cursor: pointer;
`;

function ProfileStatsPopover({
  className,
  bot,
  userProfile,
  showStatusButton,
  status,
  onClose,
  onSelectStatusClick
}: Props) {
  const xp = bot?.stats.score ?? 0;
  const lvl = bot?.stats.current_level.level_index;
  const current = bot?.stats?.current_level?.score_milestone ?? 0;
  const next = bot?.stats?.next_level?.score_milestone ?? 0;
  const exaustion = bot?.exhaustion;
  const botName = bot?.name ?? 'Replika';

  const achievements = bot?.stats?.achievements ?? [];

  const traits = achievements.filter(a => a.type === 'ReplikaTrait');
  const skills = achievements.filter(a => a.type === 'ReplikaSkill');

  return (
    <ProfileStatsPopoverRoot>
      <div style={{ display: 'flex' }}>
        <BigLevelImage
          src={`/api/mobile/1.3/leveling/levels/${lvl}/icon_url`}
        />{' '}
        <div style={{ textAlign: 'left', marginBottom: 24 }}>
          <StatsTitle>
            LVL {lvl} <Dot /> {xp.toLocaleString()} XP
            {exaustion && (
              <>
                {' '}
                <Dot /> {exaustion}
              </>
            )}
          </StatsTitle>
          <ProgressBar
            progress={next ? (xp - current) / (next - current) : 0}
          />
          <NextLvl>Next level {next.toLocaleString()} XP</NextLvl>
        </div>
      </div>
      {userProfile && !showStatusButton ? (
        <div style={{ lineHeight: '30px' }}>
          {status}
          <ChangeStatusButton
            data-testid="replika-relationship-status"
            onClick={onSelectStatusClick}
          >
            Change
          </ChangeStatusButton>
        </div>
      ) : (
        <EmptyStatusButton
          data-testid="replika-set-relationship-status-button"
          onClick={onSelectStatusClick}
        >
          Set relationship status
        </EmptyStatusButton>
      )}
      <Section>
        <h3>Traits</h3>
        <BadgeList
          badges={traits}
          emptyText={`${botName}’s personality traits will appear here as they develop.`}
          emptyDescription={`${botName}’s personality traits will appear here as they develop.`}
        />
      </Section>
      <Section>
        <h3>Skills</h3>
        <BadgeList
          badges={skills}
          emptyText={`${botName}’s acquired skills will appear here.`}
          emptyDescription={`${botName}’s acquired skills will appear here.`}
        />
      </Section>
    </ProfileStatsPopoverRoot>
  );
}

export default ProfileStatsPopover;

const ProfileStatsPopoverRoot = styled.div`
  color: ${p => p.theme.fgColor};
  border-radius: 8px;
  text-align: center;
  padding: 10px 0;
  max-height: 80vh;
`;

const ProgressBar = styledOmitProps<{ progress: number }>('div', ['progress'])`
  height: 4px;
  width: 210px;
  margin-top: 8px;
  border-radius: 2px;
  overflow: hidden;
  background-color: ${p => p.theme.progressBgColor};

  &:before {
    display: block;
    content: "";
    width: ${p => p.progress * 100}%;
    height: 100%;
    background-color: ${p => p.theme.progressFgColor};
    transition: width 0.5s ease-out;
  }
`;

const StatsTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

const NextLvl = styled.div`
  color: ${p => p.theme.dimmedFgColor};
  font-size: 13px;
  margin-top: 12px;
`;

const BigLevelImage = styled.img`
  margin-right: 16px;
  width: 56px;
  height: 56px;
`;

const ChangeStatusButton = styled(SolidButton)`
  display: inline;
  margin-left: 16px;
  padding 6px 10px;
  height: auto;
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
`;

const EmptyStatusButton = styled(SolidButton)`
  display: block;
  margin: 0 auto;
  padding 6px 10px;
  height: auto;
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  font-size: 20px;
  margin: 0 2px 3px;
  opacity: 0.5;
  background-color: ${p => p.theme.dimmedFgColor};
`;

const Section = styled.div`
  position: relative;
  margin-top: 32px;
  padding: 16px 0 0;
  text-align: center;

  &:before {
    position: absolute;
    top: 0;
    left: -14px;
    right: -14px;
    content: '';
    display: block;
    height: 1px;
    border-top: 1px solid ${p => p.theme.borderColor};
  }

  & h3 {
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 8px 0 20px;
  }
`;
