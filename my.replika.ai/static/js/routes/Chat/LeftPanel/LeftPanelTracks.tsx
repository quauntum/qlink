import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import TrackList from './TrackList';
import { getTracks, getSpotlight } from '../../../actions/journey';
import { ReactDispatch as RD } from '../../../types/redux';
import { RootState } from '../../../types/states';
import {
  Track,
  Bot,
  Message,
  TrackCategory,
  isCurrentMissionSpotlight,
} from '../../../types/models';
import isFirstTimeChatting from '../../../utils/isFirstTimeChatting';
import { Mobile, Desktop } from '../../../components/responsive';
import SolidButton from '../../../components/SolidButton';
import { Routes, MetricsEvents } from '../../../types/enums';
import mobileMedia from '../../../utils/mobileMedia';
import SpotlightCard from '../../../components/SpotlightCard';
import { ReactComponent as ArrowIcon } from '../../../icons/ArrowBack.svg';
import IconButton from '../../../components/IconButton';
import CategoryTabs from '../../../components/CategoryTabs';
import getCategoryTracks from '../../../utils/getCategoryTracks';
import { logEvent } from '../../../utils/metrics';
import { setActiveDialog } from '../../../actions/ui';

type Props = {
  category?: string;
  tracks: Track[];
  categories: TrackCategory[] | null;
  bot: Bot | undefined;
  messages: Message[];
  hasCurrentMission: boolean;
  wsReady: boolean;
  scrolled: boolean;
  lastJourneyChange: {
    updated: number;
    affectedTrackIds: string[];
  };
  getTracks: RD<typeof getTracks>;
  getSpotlight: RD<typeof getSpotlight>;
  push: RD<typeof push>;
  replace: RD<typeof replace>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const LeftPanelTracks = (props: Props) => {
  const {
    tracks,
    wsReady,
    categories,
    lastJourneyChange,
    getTracks: _getTracks,
    getSpotlight: _getSpotlight,
    replace: _replace,
  } = props;

  React.useEffect(() => {
    // Make sure we request tracks after capabilities are set
    if (wsReady) {
      _getTracks();
    }
  }, [wsReady, _getTracks]);

  React.useEffect(() => {
    if (wsReady) {
      _getSpotlight();
    }
  }, [lastJourneyChange.updated, _getSpotlight, wsReady]);

  const firstTime = isFirstTimeChatting(props.messages);
  const botName = props.bot?.name ?? 'your Replika';

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    props.category || null
  );

  const categoryTracks = React.useMemo(
    () => getCategoryTracks(tracks, categories || [], selectedCategory),
    [tracks, categories, selectedCategory]
  );

  const hasTracks = tracks.length > 0;
  const hasCategoryTracks = categoryTracks.length > 0;
  const firstCategory = categories?.[0];

  React.useEffect(() => {
    if (!firstCategory) {
      return;
    }

    if (selectedCategory === null) {
      // set default category if there's no category in route
      setSelectedCategory(firstCategory.title);
    } else if (!hasCategoryTracks && hasTracks) {
      // fallback to default category if selected category doesn't exist (or has no tracks in it)
      _replace(Routes.Conversations);
      setSelectedCategory(firstCategory.title);
    }
  }, [firstCategory, selectedCategory, hasCategoryTracks, hasTracks, _replace]);

  const tabs = React.useMemo(() => {
    return (categories ?? []).map((c) => ({ value: c.title }));
  }, [categories]);

  const tracksList = (
    <>
      {props.categories && (
        <CategoryTabs
          selected={selectedCategory}
          categories={tabs}
          setCategory={(category) => {
            setSelectedCategory(category);
            logEvent(MetricsEvents.CategoryOpened, {
              'category name': category,
            });
            props.replace(
              Routes.ConversationCategory.replace(':category', category)
            );
          }}
        />
      )}
      <TrackList
        tracks={categoryTracks}
        data-testid="left-panel-track-list"
        onSelect={(track) => {
          const category =
            selectedCategory ||
            ((props.categories && props.categories.length > 0
              ? props.categories[0]
              : // fallback route for unknown category
                '_') as string);
          props.push(
            Routes.Conversation.replace(':trackId', track.id).replace(
              ':category',
              category
            )
          );
        }}
      />
    </>
  );

  return (
    <>
      <Mobile>
        <ArrowForwardButton
          to={Routes.Main}
          data-testid="left-panel-open-chat-link"
        >
          <ArrowIcon />
        </ArrowForwardButton>
        {!props.hasCurrentMission && (
          <GoToChatButton to={Routes.Main}>
            {firstTime ? `Meet ${botName}` : 'Chat'}
          </GoToChatButton>
        )}
        <SpotlightWrapper>
          <SpotlightCard
            onStartMission={() => props.push(Routes.Main)}
            onDropMission={() => props.push(Routes.Main)}
          />
        </SpotlightWrapper>
        {!props.hasCurrentMission && tracksList}
      </Mobile>
      <Desktop>
        <SpotlightWrapper>
          <SpotlightCard onStartMission={() => props.push(Routes.Main)} />
        </SpotlightWrapper>
        {!props.hasCurrentMission && tracksList}
      </Desktop>
    </>
  );
};

export default connect(
  (state: RootState) => {
    const { lastJourneyChange } = state.journey;
    const { bot } = state.profile.persist;

    const {
      tracks,
      trackIdList,
      spotlight,
      categories,
    } = state.journey.persist;

    return {
      categories,
      hasCurrentMission: spotlight
        ? isCurrentMissionSpotlight(spotlight)
        : false,
      tracks: trackIdList.map((id) => tracks[id]),
      bot,
      messages: state.chat.messages || [],
      wsReady: state.ws.wsReady,
      replikaPhrase: bot?.replika_phrase,
      showStatusButton: state.ui.persist.showRelationshipStatusButton,
      lastJourneyChange,
    };
  },
  { getTracks, push, getSpotlight, replace, setActiveDialog }
)(LeftPanelTracks);

const ArrowForwardButton = styled(IconButton)`
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 20px;
  color: ${(p) => p.theme.fgColor};

  & > svg {
    transform: scaleX(-1);
  }
`;

const SpotlightWrapper = styled.div`
  width: 100%;
  padding: 0 20px 20px;
`;

const GoToChatButton = styled(SolidButton)`
  margin: 0 auto;

  ${mobileMedia`
    margin-bottom: 50px;
  `}
`;
