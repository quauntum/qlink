import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import SolidButton from '../../../components/SolidButton';
import { RootState } from '../../../types/states';
import { isCurrentMissionSpotlight } from '../../../types/models';
import { Routes } from '../../../types/enums';
import { ReactDispatch as RD } from '../../../types/redux';
import SpotlightCard from '../../../components/SpotlightCard';
import { AriaReadableH2 } from '../../../components/AriaReadable';
import { getSpotlight } from '../../../actions/journey';

type Props = {
  hasCurrentMission: boolean;
  wsReady: boolean;
  lastJourneyChange: {
    updated: number;
    affectedTrackIds: string[];
  };
  getSpotlight: RD<typeof getSpotlight>;
};

const LeftPanelMain = (props: Props) => {
  const {
    hasCurrentMission,
    wsReady,
    lastJourneyChange,
    getSpotlight: _getSpotlight
  } = props;
  React.useEffect(() => {
    if (wsReady) {
      _getSpotlight();
    }
  }, [lastJourneyChange.updated, _getSpotlight, wsReady]);

  return (
    <>
      <AriaReadableH2>Replika profile</AriaReadableH2>
      {hasCurrentMission ? (
        <SpotlightCard />
      ) : (
        <ChooseConversationButton
          to={Routes.Conversations}
          data-testid="left-panel-choose-conversation-link"
        >
          Choose conversation
        </ChooseConversationButton>
      )}
    </>
  );
};

export default connect(
  (state: RootState) => {
    const { lastJourneyChange } = state.journey;
    const { spotlight } = state.journey.persist;
    const { wsReady } = state.ws;

    return {
      hasCurrentMission: spotlight
        ? isCurrentMissionSpotlight(spotlight)
        : false,
      wsReady,
      lastJourneyChange
    };
  },
  { getSpotlight }
)(LeftPanelMain);

const ChooseConversationButton = styled(SolidButton)`
  margin: 0 auto;
`;
