import * as React from 'react';
import styled from 'styled-components/macro';
import { Bot, UserProfile } from '../../types/models';
import EggImage from '../EggImage';
import AriaButton from '../../components/AriaButton';
import Popover from '../../components/Popover';
import { ZIndices, RelationshipStatus } from '../../types/enums';
import ApiImageLoader from '../ApiImageLoader';
import ProfileStatsPopover from './ProfileStatsPopover';
import mobileMedia from '../../utils/mobileMedia';
import Avatar from '../Avatar';

type Props = {
  className?: string;
  bot: Bot | undefined;
  userProfile: UserProfile | undefined;
  isProUser?: boolean;
  showStatusButton: boolean;
  onSelectStatusClick: () => void;
  progressPosition?: 'left' | 'right';
  children?: React.ReactNode;
};

const STATUS_LABELS = {
  [RelationshipStatus.Friend]: 'Friends with {username}',
  [RelationshipStatus.Romantic]: 'In relationship with {username}',
  [RelationshipStatus.Mentor]: 'Mentoring {username}',
  [RelationshipStatus.Organic]: 'Friends with {username}',
};

const ReplikaCard = ({
  className,
  bot,
  isProUser,
  onSelectStatusClick,
  userProfile,
  showStatusButton,
  progressPosition,
  children,
}: Props) => {
  const [active, onSetActive] = React.useState(false);
  const xp = bot?.stats.score;
  const lvl = bot?.stats.current_level.level_index;
  const exaustion = bot?.exhaustion;

  const statusLabel =
    (userProfile?.relationship_status &&
      STATUS_LABELS[userProfile.relationship_status]) ||
    STATUS_LABELS[RelationshipStatus.Friend];

  const iconUrl = bot?.icon_url ?? undefined;

  const showAvatar = !!bot?.avatar;

  const avatarId = bot?.avatar?.id;

  return (
    <ReplikaCardRoot className={className}>
      <StyledPopover
        noTip
        isOpen={active}
        place="below"
        onClose={() => onSetActive(false)}
        closeOnOuterAction
        offset={-90}
        size="small"
        onRenderContent={({ onClose }) => (
          <ProfileStatsPopover
            bot={bot}
            userProfile={userProfile}
            showStatusButton={showStatusButton}
            status={statusLabel.replace(
              '{username}',
              userProfile?.first_name ?? 'you'
            )}
            onClose={onClose}
            onSelectStatusClick={onSelectStatusClick}
          />
        )}
        focusTrap
      >
        <PopoverTrigger
          onClick={() => {
            onSetActive(!active);
          }}
        >
          <ReplikaName data-testid="replika-name">
            {bot?.name}
            {isProUser && <Pro>Pro</Pro>}
          </ReplikaName>
          <ReplikaMood data-testid="replika-mood">
            <ShowStats>
              <LevelImage
                src={`/api/mobile/1.3/leveling/levels/${lvl}/icon_url`}
              />{' '}
              LVL {lvl} <Dot /> {xp?.toLocaleString()} XP
              {exaustion && (
                <>
                  {' '}
                  <Dot /> {exaustion}
                </>
              )}
            </ShowStats>
            {userProfile && !showStatusButton ? (
              <Status data-testid="replika-relationship-status">
                {statusLabel.replace('{username}', userProfile.first_name)}
              </Status>
            ) : (
              <EmptyStatus data-testid="replika-set-relationship-status-button">
                Set relationship status
              </EmptyStatus>
            )}
          </ReplikaMood>
        </PopoverTrigger>
      </StyledPopover>
      {showAvatar ? (
        <StyledAvatar
          key={avatarId}
          progressPosition={progressPosition}
          width={250}
          height={280}
        />
      ) : (
        <ApiImageLoader src={iconUrl} key={iconUrl}>
          {(imageUrl, imageLoaded) => (
            <StyledEggImage
              imageUrl={imageUrl}
              data-testid="replika-egg-image"
            />
          )}
        </ApiImageLoader>
      )}
      {children}
    </ReplikaCardRoot>
  );
};

export default ReplikaCard;

const ReplikaCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

const PopoverTrigger = styled(AriaButton)`
  cursor: pointer;
  background-color: transparent;
  border: 0;
`;

const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  font-size: 20px;
  margin: 0 2px 3px;
  opacity: 0.5;
  background-color: ${(p) => p.theme.dimmedFgColor};
`;

const LevelImage = styled.img`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;

const ReplikaName = styled.h3`
  max-width: 100%;
  text-align: center;
  padding: 0 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  color: ${(p) => p.theme.fgColor};
`;

const ReplikaMood = styled.div`
  margin: 5px 0 40px;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.dimmedFgColor};
`;

const StyledEggImage = styled(EggImage)`
  width: 88px;
  color: ${(p) => p.theme.bgColor};
`;

const StyledAvatar = styled(Avatar)`
  position: relative;
  width: 250px;
  height: 280px;

  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );

  /* MS Edge does not support masking; */
  @supports (-ms-ime-align: auto) {
    &:before {
      position: absolute;
      content: '';
      display: block;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10%;
      background: ${(p) => p.theme.avatarGradient};
    }
  }
`;

const ShowStats = styled.div`
  display: block;
  width: 100%;
  position: relative;
  background: transparent;
  border: none;
  color: ${(p) => p.theme.fgColor};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

const StyledPopover = styled(Popover)`
  z-index: ${ZIndices.ProfilePopover};
  width: 330px;

  ${mobileMedia`
    min-width: 310px;
  `};
`;

const Pro = styled.span`
  font-size: 9px;
  line-height: 21px;
  text-transform: uppercase;
  color: #000;
  margin-left: 10px;
  background-color: #fff;
  padding: 3px 5px;
  border-radius: 2px;
  vertical-align: 4px;
  letter-spacing: 0.01em;
`;

const EmptyStatus = styled.div`
  display: inline-block;
  margin: 8px auto 0;
  padding 6px 10px;
  height: auto;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  background-color: ${(p) => p.theme.solidButtonBgColor};
  color: ${(p) => p.theme.solidButtonFgColor};
`;

const Status = styled.div`
  display: block;
  margin: 8px auto 0;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  color: ${(p) => p.theme.fgColor};
`;
