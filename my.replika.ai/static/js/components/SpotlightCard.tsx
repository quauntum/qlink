import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { ReactDispatch as RD } from '../types/redux';
import { dropMission, getTrack, startMission } from '../actions/journey';
import {
  Spotlight,
  Track,
  isCurrentMissionSpotlight,
  isRecommendedSpotlight,
  Mission,
  PaidFeature
} from '../types/models';
import mobileMedia from '../utils/mobileMedia';
import { RootState } from '../types/states';
import { MetricsEvents, Dialogs } from '../types/enums';
import { logEvent } from '../utils/metrics';
import { setActiveDialog } from '../actions/ui';
import hasFeature from '../utils/hasFeature';
import MissionCard from './MissionCard';

type Props = {
  className?: string;
  onDropMission?: () => void;
  onStartMission?: () => void;
  spotlight: Spotlight | null;
  mission: Mission | null;
  currentTrack: Track | null;
  features: PaidFeature[];
  dropMission: RD<typeof dropMission>;
  getTrack: RD<typeof getTrack>;
  startMission: RD<typeof startMission>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const SpotlightCard = (props: Props) => {
  const {
    className,
    spotlight,
    currentTrack,
    mission,
    features,
    getTrack: _getTrack
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  const spotlightType = spotlight?.meta.type;

  React.useEffect(() => {
    setExpanded(false);
  }, [spotlightType]);

  React.useEffect(() => {
    if (mission && !currentTrack) {
      _getTrack(mission.track_id);
    }
  }, [mission, currentTrack, _getTrack]);

  React.useEffect(() => {
    if (expanded && mission) {
      logEvent(MetricsEvents.SpotlightOpened, {
        'mission id': mission.id,
        'mission name': mission.title
      });
    }
  }, [expanded, mission]);

  if (!spotlight || !mission) {
    return null;
  }

  const isLocked =
    mission.access_type.mission_access === 'paid' &&
    !hasFeature('full_library_access', features);

  if (isCurrentMissionSpotlight(spotlight)) {
    return (
      <StyledMissionCard
        className={className}
        data-testid="spotlight-current-mission"
        backgroundUrl={currentTrack?.background_url}
        mission={mission}
        features={features}
        actionButtonLabel={`stop '${mission.title}' conversation`}
        actionButtonText="Stop"
        onActionButtonClick={() => {
          props.dropMission();
          if (props.onDropMission) {
            props.onDropMission();
          }
        }}
      />
    );
  } else if (isRecommendedSpotlight(spotlight)) {
    return (
      <StyledMissionCard
        className={className}
        data-testid="spotlight-recommended-mission"
        backgroundUrl={currentTrack?.background_url}
        mission={mission}
        features={features}
        expandable
        actionButtonLabel={`start '${mission.title}' conversation`}
        actionButtonText="Start"
        onActionButtonClick={() => {
          if (isLocked) {
            props.setActiveDialog({
              type: Dialogs.Subscription,
              causedBy: 'activity'
            });
          } else {
            logEvent(MetricsEvents.SpotlightOpened, {
              'mission id': mission.id,
              'mission name': mission.title
            });
            props.startMission(mission.id);
            if (props.onStartMission) {
              props.onStartMission();
            }
          }
        }}
      />
    );
  }

  return null;
};

export default connect(
  (state: RootState) => {
    const { spotlight, tracks } = state.journey.persist;
    const { features } = state.subscriptions.persist;

    const mission =
      spotlight &&
      (isCurrentMissionSpotlight(spotlight)
        ? spotlight.current_mission
        : isRecommendedSpotlight(spotlight)
        ? spotlight.current_mission
        : null);
    const currentTrack = (mission && tracks[mission.track_id]) || null;

    return {
      mission,
      spotlight,
      currentTrack,
      features
    };
  },
  { dropMission, getTrack, startMission, setActiveDialog }
)(SpotlightCard);

const StyledMissionCard = styled(MissionCard)`
  flex: 0 0 auto;
  width: 320px;
  flex: 0 0 auto;
  margin-bottom: 20px;

  ${mobileMedia`
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  `}
`;
