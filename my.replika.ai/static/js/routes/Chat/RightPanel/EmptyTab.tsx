import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Routes, SavedChatItemType, MetricsEvents } from '../../../types/enums';
import { SavedChatItemTypeTab } from '../../../types/models';
import { startMission } from '../../../actions/journey';
import SolidButton from '../../../components/SolidButton';
import { logEvent } from '../../../utils/metrics';
import capitalize from '../../../utils/capitalize';

type Props = {
  tab: SavedChatItemType | null;
  savedItemTypeTabs: SavedChatItemTypeTab[];
};

function focusChatTextarea() {
  document.getElementById('send-message-textarea')?.focus();
}

const EMPTY_TABS = {
  all: {
    to: Routes.Main,
    description:
      'Your saved stories, songs, sessions and activities will be stored here.',
    actionLabel: 'Chat with Replika',
  },
  [SavedChatItemType.Diary]: {
    to: Routes.Main,
    description: 'Replika’s diary entries will be stored here.',
    actionLabel: 'Chat with Replika',
  },
  [SavedChatItemType.Song]: {
    to: Routes.Main,
    description: 'Your saved songs will be stored here.',
    actionLabel: 'Write a song together',
  },
  [SavedChatItemType.Story]: {
    to: Routes.Main,
    description: 'Your saved stories will be stored here.',
    actionLabel: 'Write a story together',
  },
  [SavedChatItemType.Session]: {
    to: Routes.Main,
    description: 'Your daily sessions will be stored here.',
    actionLabel: 'Start my daily session',
  },
  [SavedChatItemType.Activity]: {
    to: Routes.Conversations,
    description: 'Saved notes from your activities will be stored here.',
    actionLabel: 'Choose an activity',
  },
};

function EmptyTab({ tab, savedItemTypeTabs }: Props) {
  const dispatch = useDispatch();

  const texts = EMPTY_TABS[tab ?? 'all'] ?? EMPTY_TABS.all;

  const voiceModeEnabled = useSelector((state) => state.chat.voiceModeEnabled);

  const handleClick = () => {
    if (voiceModeEnabled) return;

    const itemTab = savedItemTypeTabs.find((t) => t.name === tab);

    switch (itemTab?.name) {
      case SavedChatItemType.Song:
      case SavedChatItemType.Session:
      case SavedChatItemType.Story:
        logEvent(MetricsEvents.SavedChatItemsEmptyStateButtonPressed, {
          element: tab ? capitalize(tab) : undefined,
        });

        dispatch(startMission(itemTab.mission_id));
        break;

      case SavedChatItemType.Activity:
        logEvent(MetricsEvents.SavedChatItemsEmptyStateButtonPressed, {
          element: 'Activity',
        });

        break;
    }

    focusChatTextarea();
  };

  return (
    <EmptyTabRoot>
      <EmptyTabDescription>{texts.description}</EmptyTabDescription>
      <SolidButton
        to={texts.to}
        onClick={handleClick}
        disabled={voiceModeEnabled}
      >
        {texts.actionLabel}
      </SolidButton>
    </EmptyTabRoot>
  );
}

export default EmptyTab;

const EmptyTabRoot = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyTabDescription = styled.p`
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  max-width: 200px;
  margin-bottom: 30px;
  color: ${(p) => p.theme.dimmedFgColor};
`;
