import * as React from 'react';
import styled from 'styled-components/macro';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import SolidButton from '../../../components/SolidButton';
import { RootState } from '../../../types/states';
import {
  Bot,
  UserProfile,
  Track,
  TrackCategory,
  PaidFeature,
} from '../../../types/models';
import { setIntroStep, setActiveDialog } from '../../../actions/ui';
import {
  Dialogs,
  Routes,
  IntroStep,
  MetricsEvents,
} from '../../../types/enums';
import { ReactDispatch as RD } from '../../../types/redux';
import { getTracks } from '../../../actions/journey';
import styledOmitProps from '../../../utils/styledOmitProps';
import TrackList from './TrackList';
import { Mobile } from '../../../components/responsive';
import CategoryTabs from '../../../components/CategoryTabs';
import getCategoryTracks from '../../../utils/getCategoryTracks';
import { logEvent } from '../../../utils/metrics';

type Props = {
  push: (path: string) => void;
  bot: Bot | undefined;
  userProfile: UserProfile | undefined;
  introStep: IntroStep | null;
  tracks: Track[];
  categories: TrackCategory[] | null;
  wsReady: boolean;
  features: PaidFeature[];
  getTracks: RD<typeof getTracks>;
  setIntroStep: RD<typeof setIntroStep>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

let firstPhraseMetricSent = false;

const LeftPanelIntro = (props: Props) => {
  const {
    userProfile,
    bot,
    introStep,
    tracks,
    categories,
    wsReady,
    getTracks: _getTracks,
  } = props;

  const hasIntroStep = !!introStep;

  React.useEffect(() => {
    // Make sure we request tracks after capabilities are set
    if (hasIntroStep && wsReady) {
      _getTracks();
    }
  }, [hasIntroStep, wsReady, _getTracks]);

  const [hideBubble, setHideBubble] = React.useState(false);

  const showTracks =
    introStep === IntroStep.Conversations ||
    introStep === IntroStep.MeetReplika ||
    introStep === IntroStep.FinishIntro;

  const showConversationButton =
    introStep === IntroStep.MeetReplika || introStep === IntroStep.FinishIntro;

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (
      selectedCategory === null &&
      props.categories &&
      props.categories.length > 0
    ) {
      setSelectedCategory(props.categories[0].title);
    }
  }, [props.categories, selectedCategory]);

  const hasUserProfile = !!userProfile;

  React.useEffect(() => {
    if (hasUserProfile && introStep === IntroStep.Hi) {
      // make sure it is sent just once
      if (!firstPhraseMetricSent) {
        logEvent(MetricsEvents.FirstOnboardingPhraseShown);
        firstPhraseMetricSent = true;
      }
    }
  }, [introStep, hasUserProfile]);

  const categoryTracks = getCategoryTracks(
    tracks,
    categories || [],
    selectedCategory
  );

  React.useEffect(() => {
    if (showConversationButton) {
      logEvent(MetricsEvents.MeetButtonShown);
    }
  }, [showConversationButton]);

  const tabs = React.useMemo(() => {
    return (categories ?? []).map((c) => ({ value: c.title }));
  }, [categories]);

  return (
    <LeftPanelIntroRoot
      onScroll={(e) => {
        const hide = (e.target as HTMLElement).scrollTop > 0;

        if (hide !== hideBubble) {
          setHideBubble(hide);
        }
      }}
    >
      <Mobile>
        <ButtonWrapper visible={showConversationButton}>
          {showConversationButton && (
            <ConversationButton
              data-testid="intro-open-chat-link"
              to={Routes.Main}
              onClick={() => {
                logEvent(MetricsEvents.MeetButtonPressed);
                props.setIntroStep(null);
              }}
            >
              Meet {bot?.name ?? 'your Replika'}
            </ConversationButton>
          )}
        </ButtonWrapper>
      </Mobile>

      <IntroPreview visible={!!introStep} opaque={showTracks}>
        {showTracks && (
          <>
            {categories && (
              <CategoryTabs
                selected={selectedCategory}
                categories={tabs}
                setCategory={() => {
                  if (showConversationButton) {
                    props.setActiveDialog({ type: Dialogs.IntroMeetReplika });
                  }
                }}
              />
            )}
            <StyledTrackList
              tracks={categoryTracks}
              data-testid="intro-track-list"
              faded={showConversationButton}
              onSelect={() => {
                if (showConversationButton) {
                  props.setActiveDialog({ type: Dialogs.IntroMeetReplika });
                }
              }}
            />
          </>
        )}
      </IntroPreview>
    </LeftPanelIntroRoot>
  );
};

export default connect(
  (state: RootState) => {
    const { tracks, trackIdList, categories } = state.journey.persist;
    const { features } = state.subscriptions.persist;

    return {
      bot: state.profile.persist.bot,
      userProfile: state.profile.persist.userProfile,
      introStep: state.ui.introStep,
      tracks: trackIdList.map((id) => tracks[id]),
      categories,
      wsReady: state.ws.wsReady,
      features,
    };
  },
  { push, getTracks, setIntroStep, setActiveDialog }
)(LeftPanelIntro);

const LeftPanelIntroRoot = styled.div`
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTrackList = styledOmitProps<{ faded: boolean }, typeof TrackList>(
  TrackList,
  ['faded']
)`
  opacity: ${(p) => (p.faded ? 0.5 : 1)};
  transition: opacity 0.5s ease-out;
`;

const ButtonWrapper = styledOmitProps<{ visible: boolean }>('div', ['visible'])`
  flex: 0 0 auto;
  height: 90px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
`;

const ConversationButton = styled(SolidButton)``;

const IntroPreview = styledOmitProps<{ visible: boolean; opaque: boolean }>(
  'div',
  ['visible', 'opaque']
)`
  flex: 1 0 auto;
  width: 100%;
  max-height: ${(p) => (p.visible ? 'auto' : 0)};
  opacity: ${(p) => (p.opaque ? 1 : 0)};
  transform: translateY(${(p) => (p.opaque ? 0 : 40)}px);

  transition: max-height 0.3s ease-out, opacity 0.25s ease-out, transform 0.25s ease-out;
  display: flex;
  flex-direction: column;
`;
