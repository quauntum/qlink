import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import {
  Routes,
  SavedChatItemType,
  Dialogs,
  MetricsEvents,
} from '../../../types/enums';
import { setActiveDialog } from '../../../actions/ui';
import {
  TextWithImageDiaryEntry,
  SavedChatItem,
  BriefMessage,
} from '../../../types/models';
import ApiImageLoader from '../../../components/ApiImageLoader';
import AriaButton from '../../../components/AriaButton';
import LinkButton from '../../../components/LinkButton';
import { logEvent } from '../../../utils/metrics';

type Props = {
  className?: string;
  savedItem: SavedChatItem | null;
};

const TextEntry = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;

  & + & {
    margin-top: 40px;
  }
`;

const StoryTextEntry = styled(TextEntry)`
  & + & {
    margin-top: 12px;
  }
`;

function ImageEntry({ entry }: { entry: TextWithImageDiaryEntry }) {
  return (
    <ImageEntryRoot>
      {entry.text}
      <ApiImageLoader src={entry.imageUrl}>
        {(url) => <img src={url} alt="" />}
      </ApiImageLoader>
    </ImageEntryRoot>
  );
}

const ImageEntryRoot = styled.div`
  margin: 0;
  font-size: 18px;
  line-height: 21px;

  & + & {
    margin-top: 40px;
  }

  & > img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    margin: 16px auto;
  }
`;

function MessageEntry({ message }: { message: BriefMessage }) {
  return message.type === 'user' ? (
    <UserMessage>{message.text}</UserMessage>
  ) : (
    <RobotMessage>{message.text}</RobotMessage>
  );
}

const UserMessage = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
`;

const RobotMessage = styled.h4`
  margin: 30px 0 0;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.dimmedFgColor};
`;

function ActivityCard(props: {
  className?: string;
  trackId: string;
  name: string;
  iconUrl: string;
  enabled: boolean;
}) {
  const { trackId, name, iconUrl, className } = props;

  return (
    <ActivityCardRoot
      className={className}
      to={Routes.Conversation.replace(':trackId', trackId).replace(
        ':category',
        'Popular'
      )}
    >
      <ActivityCardIcon src={iconUrl} alt={name} />
      <ActivityCardText>
        <ActivityCardFrom>From activity</ActivityCardFrom>
        <ActivityCardTitle>{name}</ActivityCardTitle>
      </ActivityCardText>
    </ActivityCardRoot>
  );
}

const ActivityCardRoot = styled(AriaButton)`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.bgColor};
  border-radius: 8px;
  padding: 4px;

  &:hover {
    text-decoration: none;
  }
`;

const ActivityCardText = styled.div`
  margin-left: 16px;
`;

const ActivityCardIcon = styled.img`
  width: 54px;
  height: 64px;
  border-radius: 4px;
`;

const ActivityCardFrom = styled.div`
  color: ${(p) => p.theme.dimmedFgColor};
  font-size: 15px;
  line-height: 20px;
`;

const ActivityCardTitle = styled.div`
  margin: 2px 0;
  color: ${(p) => p.theme.fgColor};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

function SavedChatItemBody({ className, savedItem }: Props) {
  const dispatch = useDispatch();

  if (!savedItem) {
    return <EmptyBody className={className} />;
  }

  const isEditableName = savedItem.type !== SavedChatItemType.Activity;

  const title = (
    <SavedChatItemBodyHeader data-testid="saved-chat-item-body-header">
      <SavedChatItemBodyTitle data-testid="saved-chat-item-body-title">
        {savedItem.name}
      </SavedChatItemBodyTitle>
      {isEditableName && (
        <EditNameButton
          data-testid="saved-chat-item-body-edit-button"
          onClick={() => {
            logEvent(MetricsEvents.SavedChatItemsLibraryEditNamePressed);
            dispatch(
              setActiveDialog({
                type: Dialogs.EditSavedChatItem,
                source: 'saved_chat_item',
                itemId: savedItem.id,
                itemType: savedItem.type,
                name: savedItem.name,
              })
            );
          }}
        >
          Edit
        </EditNameButton>
      )}
    </SavedChatItemBodyHeader>
  );

  switch (savedItem.type) {
    case SavedChatItemType.Diary:
      return (
        <Entries className={className} data-testid="saved-chat-item-body">
          {title}
          {savedItem.entries.map((entry, idx) => {
            switch (entry.type) {
              case 'text':
                return <TextEntry key={idx}>{entry.text}</TextEntry>;
              case 'text_with_image':
                return <ImageEntry entry={entry} key={idx} />;
            }

            return null;
          })}
        </Entries>
      );

    case SavedChatItemType.Song:
      return (
        <Entries className={className} data-testid="saved-chat-item-body">
          {title}
          {savedItem.messages.map((message, idx) => {
            const lines = message.text.split('\n');

            return (
              <React.Fragment key={idx}>
                {lines.map((line, lineIdx) => (
                  <StoryTextEntry key={lineIdx}>{line}</StoryTextEntry>
                ))}
              </React.Fragment>
            );
          })}
        </Entries>
      );
    case SavedChatItemType.Story:
      return (
        <Entries className={className} data-testid="saved-chat-item-body">
          {title}
          {savedItem.messages.map((message, idx) => {
            return <StoryTextEntry key={idx}>{message.text}</StoryTextEntry>;
          })}
        </Entries>
      );

    case SavedChatItemType.Session:
      return (
        <Entries className={className} data-testid="saved-chat-item-body">
          {title}
          {savedItem.messages.map((message, idx) => {
            return <MessageEntry message={message} key={idx} />;
          })}
        </Entries>
      );

    case SavedChatItemType.Activity:
      return (
        <Entries className={className} data-testid="saved-chat-item-body">
          {savedItem.image_url && (
            <ApiImageLoader src={savedItem.image_url}>
              {(url) => <ActivityImage src={url} alt="" />}
            </ApiImageLoader>
          )}
          {title}
          {savedItem.messages.map((message, idx) => {
            return <ActivityMessage key={idx}>{message.text}</ActivityMessage>;
          })}
          <StyledActivityCard
            iconUrl={savedItem.activity_icon_url}
            name={savedItem.activity_name}
            trackId={savedItem.track_id}
            enabled={savedItem.activity_enabled}
          />
        </Entries>
      );
  }

  return (
    <EmptyBody className={className} data-testid="saved-chat-item-body-empty" />
  );
}

export default SavedChatItemBody;

const SavedChatItemBodyHeader = styled.div`
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
`;

const EditNameButton = styled(LinkButton)`
  margin-top: 8px;
  margin-left: 20px;
  color: ${(p) => p.theme.dimmedFgColor};
  text-decoration: none;
`;

const StyledActivityCard = styled(ActivityCard)`
  margin-top: 30px;
`;

const ActivityMessage = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;

  & + & {
    margin-top: 40px;
  }
`;

const SavedChatItemBodyTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 30px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ActivityImage = styled.img`
  display: block;
  width: 132px;
  height: 132px;
  margin: 0 auto 30px;
`;

const EmptyBody = styled.div`
  flex: 1 0 auto;
  border-radius: 4px;
`;

const Entries = styled.div`
  padding: 24px;
  flex: 1 0 auto;
  border-radius: 4px;
  overflow: hidden;
`;
