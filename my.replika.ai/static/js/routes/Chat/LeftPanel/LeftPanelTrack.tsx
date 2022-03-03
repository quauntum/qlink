import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../../types/states';
import { Routes, Dialogs } from '../../../types/enums';
import { Track, Mission } from '../../../types/models';
import MissionList from '../../../components/MissionList';
import { getMissions, getTrack, startMission } from '../../../actions/journey';
import { ReactDispatch as RD } from '../../../types/redux';
import CircleSpinner from '../../../components/CircleSpinner';
import { setActiveDialog } from '../../../actions/ui';

type Props = {
  trackId: string;
  track: Track | undefined;
  getMissions: RD<typeof getMissions>;
  getTrack: RD<typeof getTrack>;
  startMission: RD<typeof startMission>;
  push: RD<typeof push>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const fetchMissions = async (
  trackId: string,
  _getMissions: RD<typeof getMissions>,
  setMissions: React.Dispatch<React.SetStateAction<Mission[]>>
) => {
  try {
    const { missions } = await _getMissions(trackId);
    setMissions(missions);
  } catch (e) {
    console.error(e);
  }
};

const LeftPanelTrack = (props: Props) => {
  const {
    trackId,
    track,
    getTrack: _getTrack,
    getMissions: _getMissions
  } = props;
  const [missions, setMissions] = React.useState<Mission[]>([]);

  const hasMissions = missions.length > 0;

  React.useEffect(() => {
    if (!track) {
      _getTrack(trackId);
    }

    if (!hasMissions) {
      fetchMissions(trackId, _getMissions, setMissions);
    }
  }, [trackId, track, hasMissions, _getMissions, _getTrack]);

  return (
    <>
      <TrackCard
        style={
          track ? { backgroundImage: 'url(' + track.background_url + ')' } : {}
        }
      >
        <TrackTitle data-testid="left-panel-track-title">
          {track?.name}
        </TrackTitle>
        <TrackDescription data-testid="left-panel-track-description">
          {track?.description}
        </TrackDescription>
      </TrackCard>
      {missions.length === 0 && <StyledCircleSpinner />}
      <StyledMissionList
        data-testid="left-panel-mission-list"
        missions={missions}
        onSelect={mission => {
          props.push(Routes.Main);
          props.startMission(mission.id);
        }}
        onShowSubscriptionDialog={() =>
          props.setActiveDialog({
            type: Dialogs.Subscription,
            causedBy: 'mission'
          })
        }
      />
    </>
  );
};

export default connect(
  (state: RootState, props: { trackId: string }) => ({
    track: state.journey.persist.tracks[props.trackId]
  }),
  { getMissions, startMission, push, getTrack, setActiveDialog }
)(LeftPanelTrack);

const StyledCircleSpinner = styled(CircleSpinner)`
  flex: 0 0 auto;
  margin: 150px auto 0;
  width: 50px;
  color: ${p => p.theme.fgColor};
`;

const TrackCard = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 360px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
    background: linear-gradient(360deg, #10142f 0%, rgba(0, 0, 0, 0) 100%);
  }

  & > * {
    z-index: 1;
  }
`;

const TrackTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: ${p => p.theme.trackFgColor};
  margin: 0 20px;
`;

const TrackDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${p => p.theme.trackFgColor};
  margin: 10px 20px 20px;
`;

const StyledMissionList = styled(MissionList)`
  flex: 1 1 auto;
  height: 100%;
`;
