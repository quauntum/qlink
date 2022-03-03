import * as React from 'react';
import styled from 'styled-components/macro';
import { ZIndices } from '../types/enums';
import { Spotlight, isCurrentMissionSpotlight } from '../types/models';

type Props = {
  spotlight: Spotlight | null;
  getSpotlight: () => void;
  lastUpdated: number;
};

const MissionBadge = (props: Props) => {
  const { spotlight, lastUpdated, getSpotlight: _getSpotlight } = props;
  const currentMission =
    spotlight && isCurrentMissionSpotlight(spotlight)
      ? spotlight.current_mission
      : null;
  const title = currentMission?.title;
  const [cachedTitle, setCachedTitle] = React.useState(title);

  React.useEffect(() => {
    if (title) {
      setCachedTitle(title);
    }
  }, [title]);

  React.useEffect(() => {
    _getSpotlight();
  }, [lastUpdated, _getSpotlight]);

  return (
    <MissionBadgeRoot aria-hidden={!currentMission}>
      {cachedTitle}
    </MissionBadgeRoot>
  );
};

export default React.memo(MissionBadge);

const MissionBadgeRoot = styled.div`
  position: absolute;
  align-self: center;
  transition: top 0.3s ease-out;
  top: ${p => (!p['aria-hidden'] ? 20 : -50)}px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  z-index: ${ZIndices.Popup};
  padding: 6px 12px 7px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  max-width: calc(100vw - 130px);
`;
