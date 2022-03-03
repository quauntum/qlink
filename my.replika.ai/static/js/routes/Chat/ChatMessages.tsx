import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  Message,
  Bot,
  MediaPreviewMap,
  ImagePreviewMap,
  OutcomingMessageOptions,
  Spotlight,
} from '../../types/models';
import {
  sendChatMessage,
  getHistory,
  skipWidget,
  skipExperiment,
} from '../../actions/chat';
import { ReactDispatch as RD } from '../../types/redux';
import { RootState, UploadState, WsStatus } from '../../types/states';
import CircleSpinner from '../../components/CircleSpinner';
import ChatNotification from './ChatNotification';
import ChatWidgets from '../../components/ChatWidgets';
import ChatInlineWidgets from '../../components/ChatInlineWidgets';
import { AriaReadableH1 } from '../../components/AriaReadable';
import ChatMessagesList from '../../components/ChatMessagesList';
import { Mobile } from '../../components/responsive';
import { getSpotlight, startMission } from '../../actions/journey';
import MissionBadge from '../../components/MissionBadge';
import { setActiveDialog } from '../../actions/ui';
import { chatScreen } from '../../actions/init';
import ThoughtsLayer from './ThoughtsLayer';
import ThoughtContext from '../../utils/ThoughtContext';

type Props = {
  className?: string;
  messages: Message[] | undefined;
  bot: Bot | undefined;
  mediaPreviews: MediaPreviewMap;
  imagePreviews: ImagePreviewMap;
  chatId: string | undefined;
  isRobotTyping: boolean;
  hasMoreMessages: boolean;
  voiceModeEnabled: boolean;
  wsStatus: WsStatus;
  wsReady: boolean;
  sendChatMessage: RD<typeof sendChatMessage>;
  getHistory: RD<typeof getHistory>;
  imageUpload: UploadState;
  skipWidget: RD<typeof skipWidget>;
  skippedWidgetId: string | undefined;
  skipExperiment: RD<typeof skipExperiment>;
  push: RD<typeof push>;
  spotlight: Spotlight | null;
  lastJourneyChange: {
    updated: number;
    affectedTrackIds: string[];
  };
  getSpotlight: RD<typeof getSpotlight>;
  setActiveDialog: RD<typeof setActiveDialog>;
  startMission: RD<typeof startMission>;
  chatScreen: RD<typeof chatScreen>;
};

const getLastMessage = (messages: Message[]) => {
  return messages.length > 0 ? messages[messages.length - 1] : null;
};

const nonVoiceMessages = (m: Message) =>
  m.content.type !== 'voice_record' && m.content.type !== 'voice_recognized';

function ChatMessages(props: Props) {
  const [isRequestingHistory, setIsRequestingHistory] = React.useState(false);
  const {
    messages,
    className,
    voiceModeEnabled,
    wsStatus,
    isRobotTyping,
    mediaPreviews,
    imagePreviews,
    bot,
    imageUpload,
    spotlight,
    lastJourneyChange,
    hasMoreMessages,
    skippedWidgetId,
    chatId,
    wsReady,
    sendChatMessage: _sendChatMessage,
    chatScreen: _chatScreen,
  } = props;

  const messagesFetched = !!messages;
  const filteredMessages = (messages || []).filter(nonVoiceMessages);
  const lastMessage = getLastMessage(filteredMessages);

  React.useEffect(() => {
    if (wsReady) {
      _chatScreen();
    }
  }, [_chatScreen, wsReady]);

  const handleLoadMore = () => {
    // autoload history if user scrolled to the top
    if (
      messages &&
      wsStatus === 'connected' &&
      hasMoreMessages &&
      !isRequestingHistory
    ) {
      setIsRequestingHistory(true);
      const firstMessage = messages[0];
      const messageId = firstMessage?.id || undefined;
      props
        .getHistory(messageId, 100, false)
        .then(() => setIsRequestingHistory(false));
    }
  };

  const handleSendMessage = React.useCallback(
    (messageOptions: OutcomingMessageOptions) => {
      if (voiceModeEnabled) {
        return;
      }

      const trimmed = messageOptions.text.trim();

      if (messageOptions.type === 'text' && trimmed === '') {
        return;
      }

      if (bot && chatId) {
        _sendChatMessage(messageOptions);
      }
    },
    [_sendChatMessage, voiceModeEnabled, bot, chatId]
  );

  const [thoughtsShown, setThoughtsShown] = React.useState(false);

  return (
    <ThoughtContext.Provider value={{ thoughtsShown, setThoughtsShown }}>
      <ChatMessagesRoot className={className}>
        <AriaReadableH1>Chat with Replika</AriaReadableH1>
        <ThoughtsLayer />
        <Mobile>
          <MissionBadge
            spotlight={spotlight}
            lastUpdated={lastJourneyChange.updated}
            getSpotlight={props.getSpotlight}
          />
        </Mobile>
        <ChatNotification />
        {!messagesFetched && (
          <ChatMessagesEmpty>
            <StyledCircleSpinner />
          </ChatMessagesEmpty>
        )}
        {/* this shouldn't actually happen in production - there's always an initial message from robot at least */}
        {messages && messages.length === 0 && (
          <ChatMessagesEmpty>No messages yet</ChatMessagesEmpty>
        )}
        {messagesFetched && (
          <ChatMessagesList
            messages={filteredMessages}
            isRobotTyping={isRobotTyping}
            mediaPreviews={mediaPreviews}
            imagePreviews={imagePreviews}
            bot={bot}
            imageUpload={imageUpload}
            onLoadMore={handleLoadMore}
            onEggClick={() => {
              props.push('/journey');
            }}
          >
            <ChatInlineWidgets
              lastMessage={lastMessage}
              voiceModeEnabled={voiceModeEnabled}
              onSendMessage={handleSendMessage}
              skippedWidgetId={skippedWidgetId}
              push={props.push}
              setActiveDialog={props.setActiveDialog}
              skipWidget={props.skipWidget}
              startMission={props.startMission}
            />
          </ChatMessagesList>
        )}
        <ChatWidgets
          wsStatus={wsStatus}
          lastMessage={lastMessage}
          voiceModeEnabled={voiceModeEnabled}
          onSendMessage={handleSendMessage}
          skippedWidgetId={skippedWidgetId}
          skipExperiment={props.skipExperiment}
          skipWidget={props.skipWidget}
        />
      </ChatMessagesRoot>
    </ThoughtContext.Provider>
  );
}

const mapDispatchToProps = {
  sendChatMessage,
  getHistory,
  skipWidget,
  skipExperiment,
  push,
  getSpotlight,
  setActiveDialog,
  startMission,
  chatScreen,
};

const ChatMessagesConnected = connect(
  (state: RootState) => ({
    wsStatus: state.ws.status,
    chatId: state.ws.persist.chatId,
    messages: state.chat.messages,
    bot: state.profile.persist.bot,
    mediaPreviews: state.chat.mediaPreviews,
    imagePreviews: state.chat.imagePreviews,
    isRobotTyping: state.chat.isRobotTyping,
    hasMoreMessages: state.chat.hasMoreMessages,
    imageUpload: state.ui.imageUpload,
    voiceModeEnabled: state.chat.voiceModeEnabled,
    skippedWidgetId: state.chat.skippedWidgetId,
    spotlight: state.journey.persist.spotlight,
    lastJourneyChange: state.journey.lastJourneyChange,
    wsReady: state.ws.wsReady,
  }),
  mapDispatchToProps
)(React.memo(ChatMessages));

export default ChatMessagesConnected;

const ChatMessagesRoot = styled.main`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: ${(p) => p.theme.chatGradientBgColor};
`;

const ChatMessagesEmpty = styled.div`
  width: 100%;
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.dimmedFgColor};
`;

const StyledCircleSpinner = styled(CircleSpinner)`
  width: 100px;
  height: 100px;
  color: ${(p) => p.theme.dimmedFgColor};
`;
