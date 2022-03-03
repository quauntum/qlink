import * as React from 'react';
import styled from 'styled-components/macro';
import styledOmitProps from '../utils/styledOmitProps';
import {
  Mission,
  BriefMission,
  PaidFeature,
  isBriefMission
} from '../types/models';
import SolidButton from './SolidButton';
import { ReactComponent as LockIcon } from '../icons/SolidLock.svg';
import hasFeature from '../utils/hasFeature';

type Props = {
  className?: string;
  'data-testid'?: string;
  expandable?: boolean;
  backgroundUrl?: string | null;
  mission: Mission | BriefMission;
  features: PaidFeature[];
  actionButtonLabel: string;
  actionButtonText: React.ReactNode;
  onActionButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  statusText?: string;
};

const CURRENT_MISSION_STATUS_TEXT = {
  in_progress: 'In progress'
};

const RECOMMENDED_MISSION_STATUS_TEXT = 'Activity of the day';

const MissionCard = (props: Props) => {
  const {
    className,
    backgroundUrl,
    mission,
    features,
    'data-testid': dataTestId,
    expandable,
    actionButtonLabel,
    actionButtonText,
    onActionButtonClick,
    statusText
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  const isLocked =
    !isBriefMission(mission) &&
    mission.access_type.mission_access === 'paid' &&
    !hasFeature('full_library_access', features);
  const duration = mission.duration;

  if (!expandable) {
    const status =
      statusText ||
      (!isBriefMission(mission)
        ? CURRENT_MISSION_STATUS_TEXT[mission.progress.type]
        : null);

    return (
      <MissionCardRoot
        className={className}
        data-testid={dataTestId}
        backgroundUrl={backgroundUrl}
      >
        {status && <Status>{status}</Status>}
        {duration && <Duration>{duration}</Duration>}
        <Title data-testid={dataTestId && `${dataTestId}-title`}>
          {isLocked ? <TitleLock /> : null}
          {mission.title}
        </Title>
        <Description data-testid={dataTestId && `${dataTestId}-description`}>
          {mission.description}
        </Description>
        <StyledSolidButton
          data-testid={dataTestId && `${dataTestId}-stop-button`}
          label={actionButtonLabel}
          onClick={e => {
            e.preventDefault();
            onActionButtonClick(e);
          }}
        >
          {actionButtonText}
        </StyledSolidButton>
      </MissionCardRoot>
    );
  } else {
    return (
      <MissionCardRoot
        className={className}
        data-testid={dataTestId}
        backgroundUrl={backgroundUrl}
        tabIndex={0}
        expandable
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            setExpanded(!expanded);
          }
        }}
        aria-expanded={expanded}
      >
        <Status>{statusText || RECOMMENDED_MISSION_STATUS_TEXT}</Status>
        {duration && <Duration>{duration}</Duration>}
        <Title data-testid={dataTestId && `${dataTestId}-title`}>
          {isLocked ? <TitleLock /> : null}
          {mission.title}
        </Title>
        <Extra expanded={expanded}>
          <Description data-testid={dataTestId && `${dataTestId}-description`}>
            {mission.description}
          </Description>
          <StyledSolidButton
            data-testid={dataTestId && `${dataTestId}-button`}
            label={actionButtonLabel}
            disabled={!expanded}
            tabIndex={expanded ? 0 : -1}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              onActionButtonClick(e);
            }}
          >
            {actionButtonText}
          </StyledSolidButton>
        </Extra>
      </MissionCardRoot>
    );
  }
};

export default MissionCard;

const ANIMATION_TIMEOUT = 250;

const MissionCardRoot = styledOmitProps<{
  backgroundUrl?: string | null;
  expandable?: boolean;
  expanded?: boolean;
}>('div', ['backgroundUrl', 'expandable', 'expanded'])`
  padding: ${p =>
    !p.expandable ? '25px 10px' : p.expanded ? '50px 10px 15px' : '45px 10px'};
  position: relative;
  height: ${p => (!p.expandable ? '300px' : '260px')};
  max-height: ${p =>
    p.expandable ? (!p.expanded ? '140px' : '260px') : 'auto'};
  transition: max-height ${ANIMATION_TIMEOUT}ms ease-out, padding ${ANIMATION_TIMEOUT}ms ease-out;

  background-size: cover;
  background-position: center;
  ${p =>
    p.backgroundUrl ? 'background-image: url(' + p.backgroundUrl + ')' : ''};
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: ${p => (!p.expandable ? 'flex-end' : 'center')};
  align-items: center;
  border-radius: 8px;

  &[tabindex="0"] {
    cursor: pointer;
  }

  & > * {
    z-index: 1;
  }

  &:before {
    z-index: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const Extra = styledOmitProps<{
  expanded?: boolean;
}>('div', ['expanded'])`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  max-height: ${p => (p.expanded ? '150px' : '0')};
  transition: max-height ${ANIMATION_TIMEOUT}ms ease-out, opacity ${ANIMATION_TIMEOUT}ms ease-out;
  opacity: ${p => (p.expanded ? 1 : 0)};
`;

const Status = styled.div`
  position: absolute;
  left: 8px;
  top: 10px;
  font-size: 12px;
  line-height: 18px;
  height: 24px;
  padding: 2px 6px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.5);
`;

const Duration = styled.div`
  position: absolute;
  right: 16px;
  top: 10px;
  font-size: 14px;
  line-height: 20px;
  opacity: 0.7;
`;

const Title = styled.h4`
  font-size: 20px;
  line-height: 25px;
  margin: 0;
  width: 250px;
`;

const TitleLock = styled(LockIcon)`
  vertical-align: -2px;
  margin-right: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin: 10px 0 0;
  width: 270px;
  min-height: 40px;
  max-height: 60px;
  overflow-y: hidden;
`;

const StyledSolidButton = styled(SolidButton)`
  margin: 25px 0 5px;
  color: ${p => p.theme.spotlightButtonFgColor};
  background-color: ${p => p.theme.spotlightButtonBgColor};
`;
