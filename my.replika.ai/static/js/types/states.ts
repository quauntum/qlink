import { ParsedQuery } from 'query-string';
import {
  LoginFormStates,
  AuthTypes,
  Themes,
  Genders,
  Dialogs,
  IntroStep,
  Pronouns,
  SavedChatItemType,
} from './enums';
import {
  Message,
  MessageReaction,
  MessageReactionMap,
  Bot,
  UserProfile,
  VoiceType,
  MediaPreviewMap,
  GetHelpConfig,
  MoodItem,
  JourneyLevel,
  ImagePreviewMap,
  Track,
  Spotlight,
  BotAchievement,
  TrackCategory,
  Subscription,
  PaidFeature,
  Notification,
  RewardExplainPopup,
  Avatar,
  AvatarCustomizationTextures,
  CustomizationManifest,
  Customization2d,
  MessageActionType,
  ReplikaThought,
  SavedChatItemTypeTab,
  SavedChatItemPreview,
  SavedChatItem,
  MemoryFact,
  MemoryPerson,
  MemoryRelation,
  NavigationPopup,
  StripeConfig,
  StripeSubscription,
} from './models';
import { SaveChatItemIncomingPayload } from './websocket';

export type SignupState = {
  signupStatus: 'initial' | 'submitting' | 'error' | 'success';
  emailCheckStatus: 'initial' | 'submitting' | 'error' | 'success';
  emailCheckError: Error | null;
  name: string;
  email: string;
  password: string;
  signupError: string | undefined;
  inputError: string | undefined;
  invalidEmailCounter: number;
  uploadedUserpicUrl: string | undefined;
  replikaName: string | null;
  gender: Genders | undefined;
  pronoun: Pronouns | undefined;
  birthday: string | undefined;
  signupInProgress: boolean;
  avatar: Avatar | undefined;
  customization: {
    [avatarId: string]: Customization2d | undefined;
  };
};

export type SignupInput = Partial<SignupState> | null;

export type LoginState = {
  isSending: boolean;
  emailOrPhone: string;
  passwordField: string;
  codeField: string;
  serverError: string | undefined;
  inputError: string | undefined;
  confirmationCode: string;
  formState: LoginFormStates;
  authType: AuthTypes;
  idType: 'email' | 'phone' | 'replika_name' | undefined;
  codeExpiration: string | undefined;
  codeRetryTimeout: number;
  codeLength: number | undefined;
  recoveryText: string;
  accessForbidden: boolean;
};

export type ReboardingReminder = {
  id: string;
  start_time: string; // hh:mm
  end_time: string; // hh:mm
  type: 'text' | 'voice';
};

export type ReboardingState = {
  birthday: string | undefined;
  reminder: ReboardingReminder | undefined;
  bot_gender: Genders | undefined;
};

export type OnboardingInput = null | { bot_gender: Genders };

export type AuthState = {
  trialPeriodExpired: boolean;
  sendConfirmationStatus: 'initial' | 'sending' | 'sent';
  sendConfirmationError: string | undefined;
  deleteAccountStatus: 'initial' | 'sending';
  deleteAccountError: string | undefined;
  loginState: LoginState;
  signupState: SignupState;
  persist: {
    authToken: string | undefined;
    userId: string | undefined;
    deviceId: string | undefined;
  };
  avatarCustomizationTextures: {
    [avatarId: string]: AvatarCustomizationTextures | null;
  };
};

export type FeedbackState = {
  feedbackStatus: 'inactive' | 'active' | 'submitted';
  feedbackData:
    | undefined
    | {
        sessionId: string;
        feedbackView: 'Popup' | 'Fullscreen';
      };
};

type MessageAlert =
  | {
      type: 'score';
      messageId: string;
      score: number;
    }
  | {
      type: 'memory';
      messageId: string;
    };

export type ChatState = {
  messages: Message[] | undefined;
  mediaPreviews: MediaPreviewMap;
  messageReactions: MessageReactionMap;
  isRobotTyping: boolean;
  hasMoreMessages: boolean;
  messageTokenIdMap: { [token: string]: string };
  messageAlerts: MessageAlert[];
  persist: {
    lastMessages: Message[] | undefined;
    lastMessageReactions: MessageReactionMap;
    messageText: string;
  };
  voiceModeEnabled: boolean;
  hintMessageReaction: MessageReaction | undefined;
  skippedWidgetId: undefined | string;
  experimentInProgress: boolean;
  imagePreviews: ImagePreviewMap;
  showMessageActions: string | undefined;
  thought: ReplikaThought | null;
};

export enum Progress {
  initial = 'INITIAL',
  sending = 'SENDING',
  success = 'SUCCESS',
  error = 'ERROR',
}

export type ProfileState = {
  getPersonalBotProgress: Progress;
  isFetchingProfile: boolean;
  serverError: string | undefined;
  updateEmailProgress: Progress;
  updatePasswordProgress: Progress;
  updateProfileProgress: Progress;
  updateReplikaProgress: Progress;
  updateMoodProgress: Progress;
  voices: VoiceType[];
  persist: {
    bot: Bot | undefined;
    userProfile: UserProfile | undefined;
    moods: MoodItem[] | undefined;
    lastMoodTimestamp: number | null;
    hasMoreMoods: boolean;
  };
  isFetchingGetHelpConfig: boolean;
  isFetchingMoodMeter: boolean;
  getHelpConfig: GetHelpConfig | undefined;
};

export type WsStatus =
  | 'disconnected'
  | 'connected'
  | 'connecting'
  | 'needReconnect';

export type WsState = {
  status: WsStatus;
  wsReady: boolean;
  persist: {
    chatId: string | undefined;
  };
};

type RouterState = {
  location: string;
};

export type UploadState = {
  inProgress: boolean;
  src: string | null;
  width: number;
  height: number;
  uploadError: string | undefined;
  orientation: number;
};

export type HintStatus = undefined | 'needed' | 'shown';

export type UiHints = {
  messageReaction: HintStatus;
  replikaDay: HintStatus;
  replikaMood: HintStatus;
};

export type DialogOptions =
  | {
      type:
        | Dialogs.AccountSettings
        | Dialogs.DropMission
        | Dialogs.EditProfile
        | Dialogs.EditReplika
        | Dialogs.Feedback
        | Dialogs.IntroMeetReplika
        | Dialogs.GetHelp
        | Dialogs.SubscriptionReboarding
        | Dialogs.EditRelationshipStatus
        | Dialogs.ReboardingAddPronoun
        | Dialogs.CancelSubscription;
    }
  | {
      type: Dialogs.Subscription;
      causedBy:
        | 'relationship_status'
        | 'mission'
        | 'mission_from_chat'
        | 'settings'
        | 'activity';
    }
  | {
      type: Dialogs.Badge;
      badge: BotAchievement;
    }
  | {
      type: Dialogs.Badge;
      emptyDescription: string;
    }
  | {
      type: Dialogs.EditMood;
      mood: MoodItem;
    }
  | {
      type: Dialogs.RewardPopup;
      popup: RewardExplainPopup;
    }
  | {
      type: Dialogs.CustomizeAvatar;
      avatarId: string;
      customization2d: Customization2d | null;
    }
  | {
      type: Dialogs.Reaction;
      messageId: string;
      permittedActions: MessageActionType[];
    }
  | {
      type: Dialogs.EditSavedChatItem;
      source: 'saved_chat_item' | 'widget';
      itemId: string;
      itemType: SavedChatItemType;
      name: string;
    }
  | {
      type: Dialogs.NavigationPopup;
      navigationPopup: NavigationPopup;
    };

export type UiState = {
  urlQueryParams: ParsedQuery<string>;
  connectedToInternet: boolean;
  imageUpload: UploadState;
  isActiveWindow: boolean;
  mobileProfileOpened: boolean;
  activeDialog: DialogOptions | null;
  introStep: IntroStep | null;
  isTrialPopupActive: boolean;
  persist: {
    themeNames: {
      [userId: string]: Themes;
    };
    gdprVersion: number | undefined;
    hints: UiHints;
    completedMissionDialogShown: boolean;
    showRelationshipStatusButton: boolean;
    disabled3d: boolean;
  };
  notifications: Array<{ id: string; notification: Notification }>;
  isNewThought: boolean;
};

export type JourneyState = {
  persist: {
    tracks: { [id: string]: Track };
    trackIdList: string[];
    levels: JourneyLevel[];
    lastUpdated: string | null;
    spotlight: Spotlight | null;
    categories: TrackCategory[] | null;
  };
  lastJourneyChange: {
    updated: number;
    affectedTrackIds: string[];
  };
};

export type SignedUrlCache = {
  url: string;
  signedUrl: string;
};

export type ImageState = {
  persist: {
    version: number;
    signedUrlCache: SignedUrlCache[];
  };
};

export type SubscriptionState = {
  persist: {
    subscription: Subscription | null;
    features: PaidFeature[];
    reboardingDialogShown: boolean;
    stripeLatestInvoiceId: string | null;
    stripeCustomerId: string | null;
    stripeSubscriptions: StripeSubscription[] | null;
  };
  stripeConfig: StripeConfig | null;
  stripeEnabled: boolean;
};

export type AvatarState = {
  persist: {
    models: Avatar[];
    lastUpdated: string | null;
    chooseAvatarScreenShown: boolean;
    customizationManifest: CustomizationManifest | null;
  };
};

export type SavedChatItemState = {
  saveChatItemPreviews: {
    [key in SavedChatItemType]?: SavedChatItemPreview[];
  } & {
    all?: SavedChatItemPreview[];
  };
  invalidatedPreviews: Array<SavedChatItemType | 'all'>;
  savedChatItems: {
    [id: string]: SavedChatItem;
  };
  persist: {
    latestSavedChatItemPreviews: {
      [key in SavedChatItemType]?: SavedChatItemPreview[];
    } & {
      all?: SavedChatItemPreview[];
    };
    savedItemTypeTabs: SavedChatItemTypeTab[];
    chatItemsToSave: SaveChatItemIncomingPayload[];
  };
};

export type MemoryState = {
  persist: {
    facts: MemoryFact[];
    persons: MemoryPerson[];
    relations: MemoryRelation[];
    unreadCount: number;
  };
};

export type State = {
  auth: AuthState;
  chat: ChatState;
  ws: WsState;
  profile: ProfileState;
  feedback: FeedbackState;
  ui: UiState;
  signup: SignupState;
  reboarding: ReboardingState;
  journey: JourneyState;
  image: ImageState;
  subscriptions: SubscriptionState;
  avatars: AvatarState;
  savedChatItems: SavedChatItemState;
  memory: MemoryState;
  // rest of reducers go here
};

export type RootState = State & {
  router: RouterState; // added at runtime
};
