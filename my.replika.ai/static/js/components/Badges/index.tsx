import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { take } from 'lodash';
import { BotAchievement } from '../../types/models';
import mobileMedia from '../../utils/mobileMedia';
import getBadgesDivisibleByN from './getBadgesDivisibleByN';
import { setActiveDialog } from '../../actions/ui';
import { ReactDispatch as RD } from '../../types/redux';
import { Dialogs } from '../../types/enums';
import SolidButton from '../../components/SolidButton';
import IconButton from '../../components/IconButton';
import useFocusGroup from '../../utils/useFocusGroup';

type Props = {
  className?: string;
  badges: BotAchievement[] | undefined;
  emptyDescription: string;
  emptyText: string;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const BADGE_MIN_WIDTH = 90;

const Badges = (props: Props) => {
  const { badges = [], className, emptyText, emptyDescription } = props;
  const [listExpanded, setListExpanded] = React.useState(false);
  const [badgePerRow, setBadgePerRow] = React.useState(3);
  const listRef = React.useRef<HTMLUListElement>(null);

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

  React.useEffect(() => {
    const updateBadgePerRow = () => {
      const perRow = !listRef.current
        ? 3
        : Math.floor((listRef.current.clientWidth - 30 * 2) / BADGE_MIN_WIDTH);

      if (perRow !== badgePerRow) {
        setBadgePerRow(perRow);
      }
    };

    window.addEventListener('resize', updateBadgePerRow);

    return () => {
      window.removeEventListener('resize', updateBadgePerRow);
    };
  }, [badgePerRow, listRef]);

  if (badges.length === 0) {
    return <EmptyBadges className={className}>{emptyText}</EmptyBadges>;
  }

  const showExpandButton = !listExpanded && badges.length > badgePerRow * 3;
  const iterator = getBadgesDivisibleByN(
    badgePerRow,
    !showExpandButton ? badges : take(badges, badgePerRow * 2)
  );

  return (
    <BadgesRoot
      ref={listRef}
      className={className}
      aria-label="Your Badges"
      data-testid="badges"
    >
      {iterator.map((a, idx) => {
        if (a === '?') {
          return (
            <BadgeItem key={idx} aria-hidden="true">
              <BadgeSlot
                tabIndex={-1}
                onClick={() => {
                  props.setActiveDialog({
                    type: Dialogs.Badge,
                    emptyDescription
                  });
                }}
              />
            </BadgeItem>
          );
        } else {
          return (
            <BadgeItem key={idx}>
              <Badge
                tabIndex={idx === 0 ? 0 : -1}
                data-testid={`badge-${idx}`}
                onClick={() => {
                  props.setActiveDialog({ type: Dialogs.Badge, badge: a });
                }}
              >
                <BadgeImage src={a.image_url_2x} alt={a.title} />
                <BadgeTitle aria-hidden="true">{a.title}</BadgeTitle>
              </Badge>
            </BadgeItem>
          );
        }
      })}
      {showExpandButton && (
        <ExpandButton onClick={() => setListExpanded(true)}>{`Show all ${
          badges.length
        } ${badges.length > 1 ? 'badges' : 'badge'}`}</ExpandButton>
      )}
    </BadgesRoot>
  );
};

export default connect(null, { setActiveDialog })(Badges);

const BadgesRoot = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px 30px 20px;
  margin: 0;
  color: ${p => p.theme.lightFgColor};
  ${mobileMedia`
    padding: 15px;
  `};
`;

const BadgeItem = styled.li`
  flex: 1 0 ${BADGE_MIN_WIDTH}px;
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

const BadgeImage = styled.img`
  width: 50px;
`;

const BadgeTitle = styled.h4`
  font-weight: normal;
  color: ${p => p.theme.fgColor};
  margin: 15px 0 0;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`;

const EmptyBadges = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.dimmedFgColor};
  padding: 0 16px 30px;
`;

const ExpandButton = styled(SolidButton)`
  margin: 0 auto;

  color: ${p => p.theme.fgColor};
  background-color: ${p => p.theme.chatBgColor};
  box-shadow: 0px 1px 2px ${p => p.theme.lightButtonShadowColor};
`;
