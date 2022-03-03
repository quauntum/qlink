import { sortedUniqBy, sortBy, takeRight, pick } from 'lodash';
import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ChatState } from '../types/states';
import { Message } from '../types/models';
import * as A from '../types/actions';
import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';
import { ToSuccess } from '../types/asyncActions';

const messageSorter = (m: Message) => m.meta.timestamp;
const uniqMessage = (m: Message) => m.id;

const sortMessages = (messages) =>
  sortedUniqBy(sortBy(messages, messageSorter), uniqMessage);

const DEFAULT_STATE: ChatState = {
  messages: undefined,
  mediaPreviews: {},
  messageReactions: {},
  isRobotTyping: false,
  hasMoreMessages: true,
  messageTokenIdMap: {},
  messageAlerts: [],
  persist: {
    lastMessages: undefined,
    lastMessageReactions: {},
    messageText: '',
  },
  voiceModeEnabled: false,
  hintMessageReaction: undefined,
  skippedWidgetId: undefined,
  experimentInProgress: false,
  imagePreviews: {},
  showMessageActions: undefined,
  thought: null,
};

type R<X extends A.ChatAction | A.InitAction | A.IncomingWsAction> = Reducer<
  ChatState,
  X
>;
// type RRequest<X> = Reducer<ToRequest<X>, ChatState>;
// type RError<X> = Reducer<ToError<X>, ChatState>;
type RSuccess<X> = Reducer<ChatState, ToSuccess<X>>;

const initMessages: R<A.InitPersist> = (state) => ({
  ...state,
  messages: state.persist.lastMessages,
  messageReactions: state.persist.lastMessageReactions,
});

const updateLastMessages = (state: ChatState) => {
  const lastMessages = takeRight(state.messages);
  const lastMessageIds = lastMessages.map((m) => m.id);

  return {
    ...state,
    persist: {
      ...state.persist,
      lastMessages: takeRight(state.messages, 30),
      lastMessageReactions: pick(state.messageReactions, lastMessageIds),
    },
  };
};

const getHistorySuccess: RSuccess<A.GetHistory> = (
  state,
  { result: h, params: { invalidate } }
) =>
  updateLastMessages({
    ...state,
    messages: sortMessages(
      invalidate ? h.messages : [...(state.messages || []), ...h.messages]
    ),
    messageReactions: h.message_reactions.reduce((acc, r) => {
      acc[r.message_id] = r.reaction;
      return acc;
    }, state.messageReactions),
    hasMoreMessages: h.more,
  });

const chatMessageReceived: R<A.ChatMessageReceived> = (state, { message }) =>
  updateLastMessages({
    ...state,
    messages: sortMessages([...(state.messages || []), message]),
    isRobotTyping: false,
  });

const messageReactionReceived: R<A.MessageReactionReceived> = (
  state,
  { messageId, reaction }
) =>
  updateLastMessages({
    ...state,
    messageReactions: {
      ...state.messageReactions,
      [messageId]: reaction,
    },
  });

const setMessageReactionSuccess: RSuccess<A.SetMessageReaction> = (
  state,
  { params: { messageId, reaction } }
) =>
  updateLastMessages({
    ...state,
    messageReactions: {
      ...state.messageReactions,
      [messageId]: reaction,
    },
  });

const setHintMessageReaction: R<A.SetHintMessageReaction> = (
  state,
  { messageId, reaction }
) => ({
  ...state,
  hintMessageReaction: { message_id: messageId, reaction },
});

const getMediaPreviewSuccess: RSuccess<A.GetMediaPreview> = (
  state,
  { result: mediaPreviews }
) => ({
  ...state,
  mediaPreviews: { ...state.mediaPreviews, ...mediaPreviews },
});

const startTyping: R<A.StartTypingReceived> = (state) => ({
  ...state,
  isRobotTyping: true,
});

const stopTyping: R<A.StopTypingReceived> = (state) => ({
  ...state,
  isRobotTyping: false,
});

const sendMessageSuccess: RSuccess<A.SendMessage> = (
  state,
  { result: message }
) => ({
  ...state,
  messageTokenIdMap: {
    ...state.messageTokenIdMap,
    [message.meta.client_token]: message.id,
  },
  skippedWidgetId: undefined,
});

const setMessageScoreAlert: R<A.BotStatsReceived> = (
  state,
  { messageId, scoreGranted }
) => ({
  ...state,
  messageAlerts: [
    ...state.messageAlerts,
    {
      type: 'score',
      messageId,
      score: scoreGranted,
    },
  ],
});

const setMessageMemoryAlert: R<A.StatementRemembered> = (
  state,
  { messageId }
) => {
  return {
    ...state,
    messageAlerts: [
      ...state.messageAlerts,
      {
        type: 'memory',
        messageId,
      },
    ],
  };
};

const clearChatMessageAlert: R<A.ClearChatMessageAlert> = (state, params) => {
  return {
    ...state,
    messageAlerts: state.messageAlerts.filter(
      (a) => a.type !== params.alertType || a.messageId !== params.messageId
    ),
  };
};

const resetChat = () => ({ ...DEFAULT_STATE });

const voiceModeChanged: R<A.VoiceModeReceived> = (
  state,
  { voiceModeState }
) => ({
  ...state,
  voiceModeEnabled: voiceModeState === 'enabled',
});

const updateChatMessageText: R<A.UpdateChatMessageText> = (
  state,
  { messageText }
) => ({
  ...state,
  persist: {
    ...state.persist,
    messageText,
  },
});

const handleSkipWidget: R<A.SkipWidget> = (state, { id }) => ({
  ...state,
  skippedWidgetId: id,
});

const handleExperimentStart: R<A.ExperimentStarted> = (state) => ({
  ...state,
  experimentInProgress: true,
});

const handleExperimentEnd: R<A.ExperimentEnded> = (state) => ({
  ...state,
  experimentInProgress: false,
});

const setShowMessageActions: R<A.SetShowMessageActions> = (
  state,
  { showMessageActions }
) => ({
  ...state,
  showMessageActions,
});

const setImagePreview: R<A.UploadChatImagePreview> = (
  state,
  { width, height, src, orientation, clientToken }
) => ({
  ...state,
  imagePreviews: {
    ...state.imagePreviews,
    [clientToken]: {
      width,
      height,
      src,
      orientation,
    },
  },
});

const setReplikaThought: RSuccess<A.GetPersonalBotChat> = (
  state,
  { result }
) => ({
  ...state,
  thought: result.replika_thought,
});

const updateWsReplikaThought: R<A.BotChatReceived> = (state, { chat }) => ({
  ...state,
  thought: chat.replika_thought,
});

export default function history(
  state: ChatState = DEFAULT_STATE,
  action: A.AnyAction
): ChatState {
  return applyReducer(
    'chat',
    {
      [AAT.WsHistory]: {
        success: getHistorySuccess,
      },
      [AT.WsChatMessageReceived]: chatMessageReceived,
      [AT.WsMessageReactionReceived]: messageReactionReceived,
      [AAT.GetMediaPreview]: {
        success: getMediaPreviewSuccess,
      },
      [AAT.WsSetMessageReaction]: {
        success: setMessageReactionSuccess,
      },
      [AT.WsStartTypingReceived]: startTyping,
      [AT.WsStopTypingReceived]: stopTyping,
      [AAT.WsSendMessage]: {
        success: sendMessageSuccess,
      },
      [AT.BotStatsReceived]: setMessageScoreAlert,
      [AAT.Logout]: {
        success: resetChat,
        error: resetChat,
      },
      [AAT.DeleteAccount]: {
        success: resetChat,
      },
      [AT.InitPersist]: initMessages,
      [AT.WsVoiceModeReceived]: voiceModeChanged,
      [AT.SetHintMessageReaction]: setHintMessageReaction,
      [AT.UpdateChatMessageText]: updateChatMessageText,
      [AT.SkipWidget]: handleSkipWidget,
      [AT.ExperimentStarted]: handleExperimentStart,
      [AT.ExperimentEnded]: handleExperimentEnd,
      [AT.UploadChatImagePreview]: setImagePreview,
      [AT.SetShowMessageActions]: setShowMessageActions,
      [AAT.GetPersonalBotChat]: {
        success: setReplikaThought,
      },
      [AT.BotChatReceived]: updateWsReplikaThought,
      [AT.ClearChatMessageAlert]: clearChatMessageAlert,
      [AT.WsStatementRemembered]: setMessageMemoryAlert,
    },
    state,
    action
  );
}
