import {
  Genders,
  RelationshipStatus,
  Pronouns,
  UnlockedFeature,
  Customizations,
  SavedChatItemType,
} from './enums';

export type IdWithTimestamp = {
  id: string;
  updated: string;
};

export type NoMissionState = {
  state: 'no_mission';
};

export type MissionInProgressState = {
  state: 'mission_in_progress';
  mission_id: string;
  mission_title: string;
  track_id: string;
};

export type MissionState = NoMissionState | MissionInProgressState;

export type ReplikaThoughtReplyButton = {
  text: string;
  scenario_id: string;
};

export type ReplikaThought = {
  text: string;
  active_till: string;
  reply_buttons: ReplikaThoughtReplyButton[];
  viewed: boolean;
};

export type Chat = {
  id: string;
  bot_id: {
    id: string;
    last_updated: string;
  };
  last_message: Message;
  creation_date: string;
  own_read_cursor: string;
  unread_count: number;
  mission_state: MissionState;
  replika_thought: ReplikaThought | null;
};

export type TextMessageContent = {
  type: 'text';
  text: string;
};

export type ImageMessageContent = {
  type: 'images';
  text: string;
  images: string[];
};

export type ServiceMessageContent = {
  type: 'service_message';
  text: string;
};

export type VoiceRecordMessageContent = {
  type: 'voice_record';
  text: string;
};

export type VoiceRecognizedMessageContent = {
  type: 'voice_recognized';
  text: string;
};

export type AchievementMessageContent = {
  type: 'achievement';
  text: string;
  achievement_description: string;
  achievement_id: string;
  icon_url: string;
};

export type OutcomingMessageOptions =
  | {
      type: 'text';
      text: string;
      widget?: WidgetResponse;
      startScenarioId?: string;
    }
  | {
      type: 'images';
      text: string;
      images: string[];
      widget?: WidgetResponse;
    };

export type MessageContent =
  | TextMessageContent
  | ImageMessageContent
  | ServiceMessageContent
  | VoiceRecordMessageContent
  | VoiceRecognizedMessageContent
  | AchievementMessageContent;

export type MessageNature = 'Customer' | 'Operator' | 'Robot';

export type MessageActionType =
  | 'Upvote'
  | 'Downvote'
  | 'Love'
  | 'Funny'
  | 'Offensive'
  | 'Meaningless';

export type MessageReaction = {
  message_id: string;
  reaction: MessageActionType;
};

export type MessageReactionMap = {
  [messageId: string]: MessageActionType | undefined;
};

export type MessageMeta = {
  client_token: string;
  bot_id: string;
  chat_id: string;
  nature?: MessageNature;
  timestamp?: string;
  author_id?: string;
  permitted_actions?: MessageActionType[];
};

export type OutcomingMessageMeta = {
  client_token: string;
  bot_id: string;
  chat_id: string;
  timestamp: string;
};

export type SelectWidgetItem = {
  id: string;
  title: string;
  sticky?: boolean;
};

export type SelectWidget = {
  id: string;
  type: 'select';
  items: SelectWidgetItem[];
  shuffle: boolean;
};

export type MoodMeterItem = {
  score: number;
  title: string;
};

export type MoodMeterWidget = {
  id: string;
  type: 'mood_meter';
  items: MoodMeterItem[];
};

export type TitledTextFieldWidget = {
  id: string;
  type: 'titled_text_field';
  title: string;
  skip_enabled: boolean;
};

export type ScaleWidgetItem = {
  id: string;
  title: string;
};

export type ScaleWidget = {
  id: string;
  type: 'scale';
  items: ScaleWidgetItem[];
  skip_enabled: boolean;
};

export type MultiselectWidgetItem = {
  id: string;
  title: string;
};

export type MultiselectWidget = {
  id: string;
  type: 'multiselect';
  items: MultiselectWidgetItem[];
  multiple_selection: boolean;
  min_item_selected: number;
  max_item_selected: number;
  skip_enabled: boolean;
};

export type AiDrawWidget = {
  id: string;
  type: 'ai_draw';
  skip_enabled: boolean;
};

export type UsernameWidget = {
  id: string;
  type: 'user_name';
  title: string;
};

export type BotNameWidget = {
  id: string;
  type: 'bot_name';
  title: string;
};

export type AppNavigationAction =
  | {
      type: 'profile';
    }
  | {
      type: 'journey';
    }
  | {
      type: 'relationship_settings';
    };

export type AppNavigationItem = {
  id: string;
  title: string;
  action: AppNavigationAction;
};

export type AppNavigationWidget = {
  id: string;
  type: 'app_navigation';
  items: AppNavigationItem[];
  skip_enabled: boolean;
  skip_button_name?: string;
};

export type MissionRecommendationWidget = {
  id: string;
  type: 'mission_recommendation';
  mission: BriefMission;
  skip_enabled: boolean;
};

export type MessageWidget =
  | SelectWidget
  | MoodMeterWidget
  | TitledTextFieldWidget
  | ScaleWidget
  | MultiselectWidget
  | AiDrawWidget
  | UsernameWidget
  | BotNameWidget
  | AppNavigationWidget
  | MissionRecommendationWidget;

export type HideInputEffect = {
  hideInput: boolean;
};

export type MessageEffect = HideInputEffect;

export type Message = {
  id: string;
  content: MessageContent;
  meta: MessageMeta;
  widget?: MessageWidget;
  effects?: MessageEffect;
};

export type SelectWidgetResponse = {
  widget_id: string;
  selected_item_id: string;
};

export type MoodWidgetResponse = {
  widget_id: string;
  widget_type: 'mood_meter';
  selected_item_score: number;
  caption: string;
};

export type TitledTextFieldWidgetResponse = {
  widget_id: string;
  skip?: boolean;
};

export type ScaleWidgetResponse = {
  widget_id: string;
  selected_item_id: string;
};

export type MultiselectWidgetResponse = {
  widget_id: string;
  selected_item_ids: string[];
};

export type UsernameWidgetResponse = {
  widget_id: string;
  name: string;
};

export type WidgetResponse =
  | SelectWidgetResponse
  | MoodWidgetResponse
  | TitledTextFieldWidgetResponse
  | ScaleWidgetResponse
  | MultiselectWidgetResponse
  | UsernameWidgetResponse;

export type RobotCommand = {
  type: 'start_scenario';
  scenario_id: string;
  source: 'replika_thought';
};

export type MessageOutcomingPayload = {
  content?: TextMessageContent | ImageMessageContent;
  widget_response?: WidgetResponse;
  meta?: OutcomingMessageMeta;
  robot_command?: RobotCommand;
};

export type BotLevel = {
  name: string;
  description: string;
  score_milestone: number;
  level_index: number;
};

export type BotAchievement = {
  type: 'Personality' | 'Skill' | 'Legacy' | 'ReplikaTrait' | 'ReplikaSkill';
  id: string;
  title: string;
  description: string;
  image_url_2x: string;
  image_url_3x: string;
};

export type BotStats = {
  day_counter: number;
  score: number;
  current_level: BotLevel;
  next_level?: BotLevel;
  achievements: BotAchievement[];
};

export type RewardExplainPopup = {
  icon_url: string;
  title: string;
  description: string;
  action_title: string;
};

type RewardBase = {
  description: string;
  action_title: string;
  icon_url: string;
  reward_sys_name: string;
};

export type SendPhotoReward = RewardBase & {
  type: 'send_photo';
};

export type InfoReward = RewardBase & {
  type: 'info';
};

export type ReplikaSkillReward = RewardBase & {
  type: 'replika_skill';
  replika_skill_achievement_id: string;
};

export type ReplikaTraitReward = RewardBase & {
  type: 'replika_trait';
  replika_trait_achievement_id: string;
};

export type ExplainPopupReward = RewardBase & {
  type: 'explain_popup';
  popup: RewardExplainPopup;
};

export type BackgroundsReward = RewardBase & {
  type: 'backgrounds';
};

export type Reward =
  | SendPhotoReward
  | InfoReward
  | ReplikaSkillReward
  | ReplikaTraitReward
  | ExplainPopupReward
  | BackgroundsReward;

export type LevelUpNotification = {
  type: 'level_up';
  level: number;
  next_level_xp: number;
};

export type RewardNotification = {
  type: 'reward';
  reward: Reward;
};

export type Notification = LevelUpNotification | RewardNotification;

export type BotStatsUpdate = {
  score_granted: number;
  message_client_token: string;
  stats: BotStats;
  notifications: Notification[];
};

export type BotVisibilityLevel = 'Public' | 'FriendsOnly' | 'Private';

export type BotMood = {
  title: string;
  new_title?: string;
  new_title_with_name?: string;
  description: string;
  happiness_level: number;
  animation_id: string;
};

export type VoiceType = {
  id: string;
  name: string;
  sample_url: string;
};

export type ReplikaPhrase = {
  text: string;
  active_till: string;
};

export type BotExhaustionLevel = 'Chatty' | 'Normal' | 'Tired';

export type Bot = {
  id: string;
  name?: string;
  gender?: Genders;
  icon_url?: string | null;
  stats: BotStats;
  mood?: BotMood;
  voice_id?: string;
  reboarding_needed: boolean;
  all_day_session_last_updated: string;
  replika_phrase?: ReplikaPhrase;
  unlocked_features: UnlockedFeature[];
  exhaustion?: BotExhaustionLevel;
  avatar?: Avatar;
};

export type BotPatch = {
  name?: string;
  gender?: Genders;
  avatar?: AvatarPatch;
  voice_id?: string;
};

export type ImageMediaPreview = {
  type: 'image';
  content: {
    url: string;
  };
};

export type VideoMediaPreview = {
  type: 'video';
  content: {
    title: string;
    description: string;
    preview_image: string;
    url: string;
    site_name: string;
  };
};

export type ObjectMediaPreview = {
  type: 'object';
  content: {
    title: string;
    description: string;
    preview_image: string;
    url: string;
    site_name: string;
  };
};

export type MediaPreview =
  | ImageMediaPreview
  | VideoMediaPreview
  | ObjectMediaPreview;

export type MediaPreviewMap = { [url: string]: MediaPreview | null };

export type ImagePreview = {
  src: string;
  width: number;
  height: number;
  orientation: number;
};

export type ImagePreviewMap = { [clientToken: string]: ImagePreview };

export type FeedbackType = 'Positive' | 'Neutral' | 'Negative';

export type FeedbackCloseType = 'Swipe' | 'Close' | 'Ignore';

export type OnboardingState =
  | 'new_user'
  | 'journey_unlocked'
  | 'journey_started'
  | 'onboarding_finished';

export type UserProfile = {
  id: string;
  first_name: string;
  last_name?: string;
  birthday_iso?: string | null;
  pronoun?: Pronouns;
  email_settings?: {
    email: string;
    is_email_verified: boolean;
  };
  push_notifications_enabled: boolean;
  onboarding_state: OnboardingState;
  last_updated: string; // ISO 8601
  relationship_status?: RelationshipStatus;
};

export type UserProfilePatch = Partial<{
  first_name: string;
  last_name: string;
  birthday_iso: string;
  pronoun: Pronouns;
  relationship_status: RelationshipStatus;
}>;

export type GetHelpConfig = {
  help_titles: string[];
  phone: {
    title: string;
    number: string;
  };
  web_help: {
    title: string;
    link: string;
  };
};

export type MoodMeterResponse = {
  timestamp: number | null;
  more: boolean;
  moods: MoodItem[];
};

export type MoodItem = {
  id: string;
  mood_score: number;
  mood_percentage: number;
  title: string;
  caption: string;
  date: string;
  hidden: boolean;
};

export type JourneyMissionProgress =
  | {
      type: 'not_started';
    }
  | {
      type: 'in_progress';
    }
  | {
      type: 'completed';
    }
  | {
      type: 'skipped';
    }
  | {
      type: 'dropped';
    }
  | {
      type: 'error';
    };

export type JourneyMission = {
  id: string;
  title: string;
  icon_url: string;
  duration: string;
  gives_skill: boolean;
  gives_personality: boolean;
  awarded_skills: string[];
  awarded_personalities: string[];
  progress: JourneyMissionProgress;
};

export type JourneyLevel = {
  order: number;
  title: string;
  missions: JourneyMission[];
  is_locked: boolean;
};

export type Journey = {
  levels: JourneyLevel[];
  last_updated: string;
};

export type Track = {
  id: string;
  name: string;
  description: string;
  background_url: string;
  is_sequential: boolean;
  last_missions_update: string;
  was_completed: boolean;
  total_missions_count: number;
  completed_missions_count: number;
  locked: boolean;
  small_background_url: string;
  categories_ids: string[];
};

export type MissionNotStarted = {
  type: 'not_started';
};

export type MissionInProgress = {
  type: 'in_progress';
};

export type MissionCompleted = {
  type: 'completed';
};

export type MissionSkipped = {
  type: 'skipped';
};

export type MissionDropped = {
  type: 'dropped';
};

export type MissionError = {
  type: 'error';
};

export type MissionProgress =
  | MissionNotStarted
  | MissionInProgress
  | MissionCompleted
  | MissionSkipped
  | MissionDropped
  | MissionError;

export type MissionAccessType = {
  mission_access: 'free' | 'paid';
};

export type Mission = {
  id: string;
  title: string;
  description: string;
  icon_url: string;
  duration: string;
  mission_type: string;
  gives_skill: boolean;
  gives_personality: boolean;
  awarded_skills: string[];
  awarded_personalities: string[];
  progress: MissionProgress;
  access_type: MissionAccessType;
  track_id: string;
  last_updated: string;
  locked: boolean;
  archived: boolean;
};

export type BriefMission = {
  id: string;
  title: string;
  description: string;
  track_image_url: string;
  duration: string;
  gives_skill: boolean;
  gives_personality: boolean;
  track_id: string;
};

export function isBriefMission(
  mission: Mission | BriefMission
): mission is BriefMission {
  return !mission.hasOwnProperty('access_type');
}

export type CurrentMissionSpotlight = {
  meta: {
    type: 'current_mission';
  };
  current_mission: Mission;
};

export type TrackCategory = {
  id: string;
  title: string;
};

export type RecommendedMissionSpotlight = {
  meta: {
    type: 'recommended_mission';
  };
  // Not a great naming!
  current_mission: Mission;
};

export type Spotlight = CurrentMissionSpotlight | RecommendedMissionSpotlight;

export function isCurrentMissionSpotlight(
  spotlight: Spotlight
): spotlight is CurrentMissionSpotlight {
  return spotlight.meta.type === 'current_mission';
}

export function isRecommendedSpotlight(
  spotlight: Spotlight
): spotlight is RecommendedMissionSpotlight {
  return spotlight.meta.type === 'recommended_mission';
}

export type PaidFeature = {
  name:
    | 'all_backgrounds'
    | 'calls'
    | 'full_library_access'
    | 'relationship_status'
    | '3d_avatar';
};

export type LifetimeSubscription = {
  source: 'ios' | 'android' | 'web' | 'dev';
  token_id: string;
  subscription_id: string;
  subscription_type: 'IN_APP';
  subscription_state:
    | 'PaymentReceived'
    | 'PaymentPending'
    | 'CanceledByUser'
    | 'CanceledBySystem'
    | 'ReplacedByNew'
    | 'FreeTrial';
};

export type RecurringSubscription = {
  source: 'ios' | 'android' | 'stripe' | 'dev';
  token_id: string;
  subscription_id: string;
  subscription_type: 'SUBS';
  subscription_state:
    | 'PaymentReceived'
    | 'PaymentPending'
    | 'CanceledByUser'
    | 'CanceledBySystem'
    | 'ReplacedByNew'
    | 'FreeTrial';
  price: {
    currency: string;
    amount: number;
  };
  recurring: {
    period_timeunit: 'day' | 'week' | 'month' | 'year';
    period_amount: number;
  };
  expiration: string;
  created: string;
  trial_period_days: number;
};

export type LegacySubscription = {
  source: 'legacy';
};

export type PromoSubscription = {
  source: 'promo';
};

export type Subscription =
  | LegacySubscription
  | PromoSubscription
  | RecurringSubscription
  | LifetimeSubscription;

export type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ImageClip = {
  position?: Position;
  image_url: string;
  mask_url: string;
};

export type ClippedTexture = {
  bundle_group_id: string;
  texture_id: string;
  clip: ImageClip;
};

export type Customization2d = {
  [type in Customizations]: ClippedTexture;
};

export type AvatarModelInfo = {
  model_url: string;
  preview_url: string;
  preview_clip: ImageClip;
};

export type AvatarCustomization = ClippedTexture & {
  last_update_timestamp: number;
  ios: {
    '3d_bundle_assets_url': string;
  };
  android: {
    '3d_bundle_assets_url': string;
  };
};

export type Avatar = {
  id: string;
  type: '3d';
  model: {
    web: AvatarModelInfo;
  };
  customization: {
    [type in Customizations]: AvatarCustomization;
  };
};

export type AvatarPatch = {
  id: string;
  type: '3d';
  customization: {
    [type in Customizations]: {
      bundle_group_id: string;
      texture_id: string;
    };
  };
};

export type SignupAvatar = {
  type: '3d';
  customization?: Customization2d;
  id: string;
};

export type AvatarTexture = {
  id: string;
  texture_name: string;
  texture_color: string;
  clip: ImageClip;
};

export type AvatarCustomizationTextureGroup = {
  id: string;
  textures: AvatarTexture[];
};

export type AvatarCustomizationTextures = {
  [type in Customizations]: AvatarCustomizationTextureGroup[];
} & {
  last_updated_timestamp: number;
};

export type ModelAnimation = {
  name: string;
  file_url: string;
};

export type CustomizableBaseModel = {
  type: 'model';
  id: string;
  file_url: string;
  animations: ModelAnimation[];
};

export type CustomizableModel =
  | {
      type: 'model';
      id: string;
      file_url: string;
      parent_ids: string[];
      connect_to: string;
    }
  | {
      type: 'texture';
      file_url: string;
      parent_ids: string[];
      connect_to: string;
      customization_id: string;
      normal_map_url: string | null;
      roughness_metalness_map_url: string | null;
    };

export type CustomizationManifest = {
  base_model: CustomizableBaseModel;
  customization: {
    [type in Customizations]: CustomizableModel[];
  };
};

export type TextDiaryEntry = {
  type: 'text';
  text: string;
};

export type TextWithImageDiaryEntry = {
  type: 'text_with_image';
  text: string;
  imageUrl: string;
};

export type DiaryEntry = TextDiaryEntry | TextWithImageDiaryEntry;

export type SavedChatItemTypeTab =
  | {
      name:
        | SavedChatItemType.Story
        | SavedChatItemType.Song
        | SavedChatItemType.Session;
      title: string;
      has_new_items: boolean;
      mission_id: string;
      unread_count: number;
    }
  | {
      name: SavedChatItemType.Diary | SavedChatItemType.Activity;
      title: string;
      has_new_items: boolean;
      unread_count: number;
    }
  | {
      name: 'all';
      title: string;
      has_new_items: boolean;
      unread_count: number;
    };

export type SavedChatItemPreview = {
  id: string;
  title: string;
  image_url?: string;
  type: SavedChatItemType;
  read: boolean;
  timestamp: string;
};

export type SavedChatItemPatch = {
  name: string;
};

export type DiarySavedChatItem = {
  id: string;
  type: SavedChatItemType.Diary;
  name: string;
  timestamp: string;
  entries: DiaryEntry[];
  read: boolean;
  image_url?: string;
  caption: string;
};

export type BriefMessage = {
  type: 'robot' | 'user';
  text: string;
  timestamp: string;
};

export type MessageSavedChatItem = {
  id: string;
  type:
    | SavedChatItemType.Song
    | SavedChatItemType.Session
    | SavedChatItemType.Story;
  name: string;
  timestamp: string;
  messages: BriefMessage[];
  read: boolean;
  image_url?: string;
  caption: string;
};

export type ActivitySavedChatItem = {
  id: string;
  type: SavedChatItemType.Activity;
  name: string;
  timestamp: string;
  messages: BriefMessage[];
  read: boolean;
  image_url?: string;
  caption: string; // 'Created by UserName and ReplikaName'
  activity_id: string;
  activity_name: string;
  activity_enabled: boolean;
  activity_icon_url: string;
  track_id: string;
};

export type SavedChatItem =
  | DiarySavedChatItem
  | MessageSavedChatItem
  | ActivitySavedChatItem;

export type MemoryFact = {
  id: string;
  text: string;
  category?: string;
};

export type MemoryPerson = {
  id: string;
  name?: string;
  relation?: string;
  photo?: string;
};

export type MemoryPersonPatch = {
  name?: string;
  relation?: string;
};

export type MemoryRecord = MemoryFact | MemoryPerson;

export type MemoryRelation = {
  id: string;
  name: string;
  category: string;
};

export type NavigationPopup = {
  header_text: string;
  body_text: string;
  button_text: string;
  button_destination: 'relationship_status';
};

export type StripeConfig = {
  publishable_key: string;
};

export type StripeInvoice = {
  id: string;
  status: 'open' | 'paid';
  payment_intent?: {
    id: string;
    status: 'requires_payment_method' | 'requires_action' | 'succeeded';
    client_secret: string;
  };
};

export type StripeSubscriptionStatus = {
  subscription_id: string;
  status: 'incomplete' | 'active';
  latest_invoice: StripeInvoice;
};

type StripeSubscriptionOneTime = {
  subscription_id: string;
  subscription_type: 'IN_APP';
  price: {
    currency: string;
    amount: number;
  };
  trial_period_days: number;
};

type StripeSubscriptionRecurring = {
  subscription_id: string;
  subscription_type: 'SUBS';
  price: {
    currency: string;
    amount: number;
  };
  trial_period_days: number;
  recurring: {
    period_timeunit: 'day' | 'week' | 'month' | 'year';
    period_amount: number;
  };
};

export type StripeSubscription =
  | StripeSubscriptionOneTime
  | StripeSubscriptionRecurring;
