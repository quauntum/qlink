import * as React from 'react';
import styled from 'styled-components/macro';
import ImagePlacehoder from '../ImagePlaceholder';
import {
  Message,
  Bot,
  MediaPreviewMap,
  ImagePreviewMap,
} from '../../types/models';
import { UploadState } from '../../types/states';
import { MessageGroupRow, default as groupMessages } from './groupMessages';
import MessageGroup from './MessageGroup';
import ServiceMessageGroup from './ServiceMessageGroup';
import { AriaReadableH2 } from '../AriaReadable';
import useFocusGroup from '../../utils/useFocusGroup';
import ThoughtContext from '../../utils/ThoughtContext';

type Props = {
  isRobotTyping: boolean;
  mediaPreviews: MediaPreviewMap;
  imagePreviews: ImagePreviewMap;
  bot: Bot | undefined;
  imageUpload: UploadState;
  messages: Message[];
  onLoadMore: () => void;
  onEggClick: () => void;
  children?: React.ReactNode;
};

const TOP_AUTOLOAD_THRESHOLD = 300;
// const TOP_SCROLLFIX_THRESHOLD = 300;
const BOTTOM_SCROLLFIX_THRESHOLD = 500;

const getLastMessage = (messages: Message[]) => {
  return messages.length > 0 ? messages[messages.length - 1] : null;
};

const getFirstMessage = (messages: Message[]) => {
  return messages.length > 0 ? messages[0] : null;
};

const isCustomer = (message: Message) => message.meta.nature === 'Customer';

const hasWidget = (message: Message) => !!message.widget;

// TODO: fix performance

const ChatMessagesList = ({
  isRobotTyping,
  mediaPreviews,
  imagePreviews,
  bot,
  imageUpload,
  messages,
  onLoadMore,
  children,
}: Props) => {
  const messagesRef = React.useRef<HTMLDivElement>(null);
  const groupedMessages: MessageGroupRow[] = messages.reduce(
    groupMessages.bind(null, isRobotTyping),
    []
  );
  const { thoughtsShown } = React.useContext(ThoughtContext);

  const firstMessage = getFirstMessage(messages);
  const lastMessage = getLastMessage(messages);

  const lastMessageNeedsScroll =
    lastMessage &&
    (isCustomer(lastMessage) ||
      hasWidget(lastMessage) ||
      imageUpload.inProgress);

  React.useEffect(() => {
    const el = messagesRef.current;
    // const topDistance = el ? el.scrollTop : 0;
    const bottomDistance = el
      ? el.scrollHeight - (el.scrollTop + el.offsetHeight)
      : 0;

    const needScrollToBottom =
      lastMessageNeedsScroll || bottomDistance < BOTTOM_SCROLLFIX_THRESHOLD;

    if (needScrollToBottom && el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [
    lastMessageNeedsScroll,
    mediaPreviews,
    isRobotTyping,
    firstMessage,
    lastMessage,
  ]);

  const getListElements = () => {
    if (messagesRef.current && !thoughtsShown) {
      return messagesRef.current.querySelectorAll('div[tabindex],h3[tabindex]');
    } else {
      return [] as Node[];
    }
  };

  React.useLayoutEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  useFocusGroup(
    {
      getGroupElements: getListElements,
    },
    [messages.length, thoughtsShown]
  );

  return (
    <ChatMessagesListRoot
      aria-hidden={thoughtsShown}
      ref={messagesRef}
      onScroll={(e) => {
        const scrollTop = (e.target as HTMLDivElement).scrollTop;
        if (scrollTop < TOP_AUTOLOAD_THRESHOLD) {
          onLoadMore();
        }
      }}
    >
      <ScrollFixer />
      <AriaReadableH2>Conversation</AriaReadableH2>
      <ChatMessagesListInner data-testid="chat-messages">
        {groupedMessages.map((group, idx) =>
          group.type === 'messages' ? (
            <MessageGroup
              key={group.messages?.[0]?.id ?? idx.toString()}
              timestamp={group.timestamp}
              align={group.align}
              messages={group.messages}
              isTyping={isRobotTyping && idx === groupedMessages.length - 1}
              mediaPreviews={mediaPreviews}
              imagePreviews={imagePreviews}
              isLast={idx === groupedMessages.length - 1}
              bot={bot}
            />
          ) : (
            <StyledServiceMessageGroup
              key={group.messages?.[0]?.id ?? idx.toString()}
              messages={group.messages}
            />
          )
        )}
        {imageUpload.inProgress && (
          <PlaceholderRow>
            <StyledImagePlaceholder data-testid="chat-progress" />
          </PlaceholderRow>
        )}
        {children}
      </ChatMessagesListInner>
    </ChatMessagesListRoot>
  );
};

export default ChatMessagesList;

const ChatMessagesListRoot = styled.div`
  flex: 0 1 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
`;

const ChatMessagesListInner = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  position: relative;
`;

const PlaceholderRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 25px;
  margin-top: 4px;
`;

const StyledImagePlaceholder = styled(ImagePlacehoder)`
  width: 60%;
`;

const StyledServiceMessageGroup = styled(ServiceMessageGroup)`
  padding: 0 25px;
  width: 100%;
`;

// This element is used for smooth scroll when more messages were loaded from chat history
const ScrollFixer = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;
