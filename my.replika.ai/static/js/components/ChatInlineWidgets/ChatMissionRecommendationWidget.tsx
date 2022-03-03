import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import {
  Message,
  MissionRecommendationWidget,
  PaidFeature,
  Mission
} from '../../types/models';
import SolidButton from '../SolidButton';
import MissionCard from '../MissionCard';
import { RootState } from '../../types/states';
import hasFeature from '../../utils/hasFeature';
import { ReactDispatch as RD } from '../../types/redux';
import { Dialogs } from '../../types/enums';
import { getMissions } from '../../actions/journey';
import { setActiveDialog } from '../../actions/ui';

type Props = {
  message: Message | null;
  widget: MissionRecommendationWidget;
  disabled: boolean;
  onStartMission: () => void;
  onSkip: () => void;
  features: PaidFeature[];
  getMissions: RD<typeof getMissions>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const fetchMission = async (
  missionId: string,
  trackId: string,
  _getMissions: RD<typeof getMissions>,
  setMission: React.Dispatch<React.SetStateAction<Mission | null>>
) => {
  try {
    const { missions } = await _getMissions(trackId);
    const mission = missions.find(m => m.id === missionId);

    if (mission) {
      setMission(mission);
    }
  } catch (e) {
    console.error(e);
  }
};

function ChatMissionRecommendationWidget(props: Props) {
  const { widget, onSkip, features, getMissions: _getMissions } = props;
  const [mission, setMission] = React.useState<Mission | null>(null);

  const isLocked = mission
    ? mission.access_type.mission_access === 'paid' &&
      !hasFeature('full_library_access', features)
    : false;

  React.useEffect(() => {
    if (!mission) {
      fetchMission(
        widget.mission.id,
        widget.mission.track_id,
        _getMissions,
        setMission
      );
    }
  }, [widget.mission.id, widget.mission.track_id, mission, _getMissions]);

  return (
    <MissionRecommendationRoot>
      <StyledMissionCard
        mission={mission || widget.mission}
        backgroundUrl={widget.mission.track_image_url}
        actionButtonLabel={`start '${widget.mission.title}' mission`}
        actionButtonText="Start conversation"
        features={features}
        onActionButtonClick={() => {
          if (isLocked) {
            props.setActiveDialog({
              type: Dialogs.Subscription,
              causedBy: 'mission_from_chat'
            });
          } else {
            props.onSkip();
            props.onStartMission();
          }
        }}
        statusText="Recommended"
      />
      <SkipButton onClick={onSkip}>Let’s just talk</SkipButton>
    </MissionRecommendationRoot>
  );
}

export default connect(
  (state: RootState) => {
    const { features } = state.subscriptions.persist;

    return {
      features
    };
  },
  { getMissions, setActiveDialog }
)(React.memo(ChatMissionRecommendationWidget));

const MissionRecommendationRoot = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

const SkipButton = styled(SolidButton)`
  margin: 16px 0 0;
  color: ${p => p.theme.vkButtonFgColor};
  background-color: ${p => p.theme.vkButtonBgColor};
`;

const StyledMissionCard = styled(MissionCard)``;
