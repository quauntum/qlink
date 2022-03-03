import { WsEventNames as WEN, SavedChatItemType } from './enums';
import {
  IdWithTimestamp,
  Message,
  MessageReaction,
  MessageActionType,
  BotStatsUpdate,
  Chat,
  FeedbackType,
  FeedbackCloseType,
  MoodItem,
  BotMood,
  MessageOutcomingPayload,
  Bot,
  NavigationPopup,
} from './models';

export type ErrorIncomingPayload = {
  error_message: string;
};

export type InitIncomingPayload = {
  personal_bot_id: IdWithTimestamp;
};

export type HistoryIncomingPayload = {
  messages: Message[];
  message_reactions: MessageReaction[];
  more: boolean;
};

export type MessageIncomingPayload = Message;

export type AddMessageReactionPayload = {
  addReaction: {
    message_id: string;
    chat_id: string;
    reaction: MessageActionType;
  };
};

export function isAddReaction(val: object): val is AddMessageReactionPayload {
  return val.hasOwnProperty('addReaction');
}

export type RemoveMessageReactionPayload = {
  removeReaction: string;
};

export function isRemoveReaction(
  val: object
): val is RemoveMessageReactionPayload {
  return val.hasOwnProperty('removeReaction');
}

export type MessageReactionIncomingPayload =
  | AddMessageReactionPayload
  | RemoveMessageReactionPayload;

export type FeedbackIncomingPayload = {
  session_id: string;
  feedback_view: 'Popup' | 'Fullscreen';
};

export type BotPayload = Bot;

export type BotStatsPayload = BotStatsUpdate;

export type BotChatPayload = Chat;

export type TypingPayload = {};

export type VoiceModePayload = {
  state: 'enabled' | 'disabled';
};

export type UserMoodPayload = MoodItem;

export type BotMoodPayload = {
  mood: BotMood;
};

export type ExperimentStartedPayload = {
  experiment_type: string;
  content: object;
};

export type ExperimentEndedPayload = {
  experiment_type: string;
  result: object;
};

export type JourneyChangedPayload = {
  affected_track_ids: string[];
};

export type SaveChatItemIncomingPayload = {
  type: SavedChatItemType;
  id: string;
  name: string;
  chat_id: string;
  timestamp: string;
  image_url?: string;
};

export type StatementRememberedPayload = {
  message_id: string;
};

export type NavigationPopupPayload = {
  navigation_popup: NavigationPopup;
};

interface IncomingWebsocketMessageBase<E extends WEN, P> {
  token?: string;
  event_name: E;
  payload: P;
}

type I<E extends WEN, P> = IncomingWebsocketMessageBase<E, P>;

export type IncomingWebsocketMessage =
  | I<WEN.Error, ErrorIncomingPayload>
  | I<WEN.Init, InitIncomingPayload>
  | I<WEN.Message, MessageIncomingPayload>
  | I<WEN.History, HistoryIncomingPayload>
  | I<WEN.Bot, BotPayload>
  | I<WEN.PersonalBotStats, BotStatsPayload>
  | I<WEN.PersonalBotChat, BotChatPayload>
  | I<WEN.MessageReaction, MessageReactionIncomingPayload>
  | I<WEN.ConversationFeedback, FeedbackIncomingPayload>
  | I<WEN.StartTyping, TypingPayload>
  | I<WEN.StopTyping, TypingPayload>
  | I<WEN.VoiceMode, VoiceModePayload>
  | I<WEN.UserMood, UserMoodPayload>
  | I<WEN.BotMood, BotMoodPayload>
  | I<WEN.ExperimentStarted, ExperimentStartedPayload>
  | I<WEN.ExperimentEnded, ExperimentEndedPayload>
  | I<WEN.JourneyChanged, JourneyChangedPayload>
  | I<WEN.SaveChatItemRequest, SaveChatItemIncomingPayload>
  | I<WEN.StatementRemembered, StatementRememberedPayload>
  | I<WEN.NavigationPopup, NavigationPopupPayload>;

export type HistoryOutcomingPayload = {
  chat_id: string;
  last_message_id?: string;
  limit: number;
};

interface OutcomingWebsocketMessageBase<E extends WEN, P> {
  token?: string;
  event_name: E;
  payload: P;
  auth?: {
    device_id: string;
    user_id: string | undefined;
    auth_token: string | undefined;
  };
}

export type MessageReactionOutcomingPayload =
  | AddMessageReactionPayload
  | RemoveMessageReactionPayload;

export type FeedbackReactionOutcomingPayload = {
  session_id: string;
  feedback: FeedbackType;
  feedback_text?: string | undefined;
  feedback_view: 'Popup' | 'Fullscreen';
};

export type FeedbackCloseOutcomingPayload = {
  session_id: string;
  close_action: FeedbackCloseType;
  feedback_view: 'Popup' | 'Fullscreen';
};

export type FeedbackOutcomingPayload =
  | FeedbackReactionOutcomingPayload
  | FeedbackCloseOutcomingPayload;

export type TextInputPayload = {
  chat_id: string;
};

export type EmptyPayload = {};

export type StartMissionPayload = {
  mission_id: string;
  current_mission_action?: 'skip' | 'drop';
};

export type SaveChatItemOutcomingPayload = {
  chat_id: string;
  id: string;
  name: string;
};

type O<E extends WEN, P> = OutcomingWebsocketMessageBase<E, P>;

export type OutcomingWebsocketMessage =
  | O<WEN.Init, EmptyPayload>
  | O<WEN.History, HistoryOutcomingPayload>
  | O<WEN.Message, MessageOutcomingPayload>
  | O<WEN.MessageReaction, MessageReactionOutcomingPayload>
  | O<WEN.ConversationFeedback, FeedbackOutcomingPayload>
  | O<WEN.TextInputDetected, TextInputPayload>
  | O<WEN.AppForeground, EmptyPayload>
  | O<WEN.StartMission, StartMissionPayload>
  | O<WEN.SkipMission, EmptyPayload>
  | O<WEN.DropMission, EmptyPayload>
  | O<WEN.MainScreen, EmptyPayload>
  | O<WEN.ApplicationStarted, EmptyPayload>
  | O<WEN.ChatScreen, EmptyPayload>
  | O<WEN.ReplikaThoughtViewed, EmptyPayload>
  | O<WEN.SaveChatItem, SaveChatItemOutcomingPayload>;
