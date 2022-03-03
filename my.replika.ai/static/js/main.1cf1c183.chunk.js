(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [17],
    [, function(e, t, r) {
        "use strict";
        let n, a, o, i, s, c, u, d, l, p, b, m, g, f, h, O, j, v, S;
        r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "i", (function() {
                return o
            })), r.d(t, "o", (function() {
                return i
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "r", (function() {
                return c
            })), r.d(t, "j", (function() {
                return u
            })), r.d(t, "p", (function() {
                return d
            })), r.d(t, "g", (function() {
                return l
            })), r.d(t, "k", (function() {
                return p
            })), r.d(t, "m", (function() {
                return b
            })), r.d(t, "f", (function() {
                return m
            })), r.d(t, "h", (function() {
                return g
            })), r.d(t, "s", (function() {
                return f
            })), r.d(t, "l", (function() {
                return h
            })), r.d(t, "q", (function() {
                return O
            })), r.d(t, "b", (function() {
                return j
            })), r.d(t, "e", (function() {
                return v
            })), r.d(t, "n", (function() {
                return S
            })),
            function(e) {
                e.AccountExists = "ACCOUNT_EXISTS", e.SendSmsCode = "SEND_SMS_CODE", e.AuthBySmsCode = "AUTH_BY_SMS_CODE", e.PasswordLogin = "PASSWORD_LOGIN", e.PhoneLogin = "PHONE_LOGIN", e.RecoverPassword = "RECOVER_PASSWORD", e.ResendSmsCode = "RESEND_SMS_CODE", e.SendVoiceCode = "SEND_VOICE_CODE", e.Logout = "LOGOUT", e.Signup = "SIGNUP", e.DeleteAccount = "DELETE_ACCOUNT", e.CheckAccountInfo = "CHECK_ACCOUNT_INFO", e.ResendConfirmationEmail = "RESEND_CONFIRMATION_EMAIL", e.UploadImage = "UPLOAD_IMAGE", e.UploadChatImage = "UPLOAD_CHAT_IMAGE", e.GetPersonalBotChat = "GET_PERSONAL_BOT_CHAT", e.CreateChat = "CREATE_CHAT", e.WsHistory = "WS_HISTORY", e.WsSetMessageReaction = "WS_SET_MESSAGE_REACTION", e.GetPersonalBot = "GET_PERSONAL_BOT", e.GetUserProfile = "GET_USER_PROFILE", e.GetMediaPreview = "GET_MEDIA_PREVIEW", e.WsSendMessage = "WS_SEND_MESSAGE", e.WsTextInputDetected = "WS_TEXT_INPUT_DETECTED", e.WsAppForeground = "WS_APP_FOREGROUND", e.WsSendFeedback = "WS_SEND_FEEDBACK", e.WsDismissFeedback = "WS_DISMISS_FEEDBACK", e.GetImage = "GET_IMAGE", e.WsInit = "WS_INIT", e.UpdateUserProfile = "UPDATE_USER_PROFILE", e.UpdateUserPassword = "UPDATE_USER_PASSWORD", e.UpdateUserEmail = "UPDATE_USER_EMAIL", e.PasswordVerification = "PASSWORD_VERIFICATION", e.GetVoices = "GET_VOICES", e.UpdateBot = "UPDATE_BOT", e.SubmitReboarding = "SUBMIT_ONBOARDING", e.FetchGetHelpConfig = "FETCH_GET_HELP_CONFIG", e.GetMoodMeter = "GET_MOOD_METER", e.UpdateMoodMeter = "UPDATE_MOOD_METER", e.CreateNewMood = "CREATE_NEW_MOOD", e.GetMood = "GET_MOOD", e.UpdateMood = "UPDATE_MOOD", e.DeleteMood = "DELETE_MOOD", e.SetNewPassword = "SET_NEW_PASSWORD", e.GetImageSignedUrl = "GET_IMAGE_SIGNED_URL", e.InitNewUser = "INIT_NEW_USER", e.GetJourney = "GET_JOURNEY", e.GetTracks = "GET_TRACKS", e.GetMissions = "GET_MISSIONS", e.WsStartMission = "WS_START_MISSION", e.WsSkipMission = "WS_SKIP_MISSION", e.WsDropMission = "WS_DROP_MISSION", e.GetSpotlight = "GET_SPOTLIGHT", e.GetTrack = "GET_TRACK", e.GetSubscriptions = "GET_SUBSCRIPTIONS", e.WsMainScreen = "WS_MAIN_SCREEN", e.WsChatScreen = "WS_CHAT_SCREEN", e.WsApplicationStarted = "WS_APPLICATION_STARTED", e.GetAvatars = "GET_AVATARS", e.GetAvatarCustomizations = "GET_AVATAR_CUSTOMIZATIONS", e.GetCustomizationManifest = "GET_CUSTOMIZATIONS_MANIFEST", e.WsReplikaThoughtViewed = "WS_REPLIKA_THOUGHT_VIEWED", e.GetSavedChatItemTypes = "GET_SAVED_CHAT_ITEM_TYPES", e.GetSavedChatItemPreviews = "GET_SAVED_CHAT_ITEM_PREVIEWS", e.GetSavedChatItems = "GET_SAVED_CHAT_ITEMS", e.MarkSavedChatItemRead = "MARK_SAVED_CHAT_ITEM_READ", e.UpdateSavedChatItem = "UPDATE_SAVED_CHAT_ITEM", e.DeleteSavedChatItem = "DELETE_SAVED_CHAT_ITEM", e.WsSaveChatItem = "WS_SAVE_CHAT_ITEM", e.GetMemory = "GET_MEMORY", e.UpdateMemoryPerson = "UPDATE_MEMORY_PERSON", e.DeleteMemory = "DELETE_MEMORY", e.GetMemoryRelations = "GET_MEMORY_RELATIONS", e.GetStripeConfig = "GET_STRIPE_CONFIG", e.CreateStripeCustomer = "CREATE_STRIPE_CUSTOMER", e.CreateStripeSubscription = "CREATE_STRIPE_SUBSCRIPTION", e.RetryStripeInvoice = "RETRY_STRIPE_INVOICE", e.GetStripePrices = "GET_STRIPE_PRICES", e.DeleteStripeSubscription = "DELETE_STRIPE_SUBSCRIPTION"
            }(n || (n = {})),
            function(e) {
                e.InitPersist = "INIT_PERSIST", e.UpdatePersist = "UPDATE_PERSIST", e.CheckDeviceId = "CHECK_DEVICE_ID", e.SignupFieldChange = "SIGNUP_FIELD_CHANGE", e.LoginFieldChange = "LOGIN_FIELD_CHANGE", e.SetCodeResendTimeout = "SET_CODE_RESEND_TIMEOUT", e.WsStart = "WS_START", e.WsOpen = "WS_OPEN", e.WsClose = "WS_CLOSE", e.WsDisconnect = "WS_DISCONNECT", e.WsMessageReceived = "WS_MESSAGE_RECEIVED", e.WsError = "WS_ERROR", e.WsChatMessageReceived = "WS_CHAT_MESSAGE_RECEIVED", e.WsMessageReactionReceived = "WS_MESSAGE_REACTION_RECEIVED", e.WsFeedbackRequestReceived = "WS_FEEDBACK_REQUEST_RECEIVED", e.WsStartTypingReceived = "WS_START_TYPING_RECEIVED", e.WsStopTypingReceived = "WS_STOP_TYPING_RECEIVED", e.WsVoiceModeReceived = "WS_VOICE_MODE_RECEIVED", e.WsUserMoodReceived = "WS_USER_MOOD_RECEIVED", e.WsBotMoodReceived = "WS_BOT_MOOD_RECEIVED", e.CloseFeedbackPopup = "CLOSE_FEEDBACK_POPUP", e.BotStatsReceived = "BOT_STATS_UPDATE_RECEIVED", e.BotChatReceived = "BOT_CHAT_UPDATE_RECEIVED", e.BotReceived = "BOT_UPDATE_RECEIVED", e.SetDefaultChat = "SET_DEFAULT_CHAT", e.GoneOffline = "GONE_OFFLINE", e.GoneOnline = "GONE_ONLINE", e.SetActiveWindow = "SET_ACTIVE_WINDOW", e.SetTheme = "SET_THEME", e.SetTrialPopupActive = "SET_TRIAL_POPUP_ACTIVE", e.UserpicUploadLocallySuccess = "USERPIC_UPLOAD_LOCALLY_SUCCESS", e.UserpicUploadLocallyError = "USERPIC_UPLOAD_LOCALLY_ERROR", e.TrialPeriodExpired = "TRIAL_PERIOD_EXPIRED", e.ToggleMobileProfile = "TOGGLE_MOBILE_PROFILE", e.ResetServerError = "RESET_SERVER_ERROR", e.AcceptGdpr = "ACCEPT_GDPR", e.GoToReboardingStep = "GO_TO_REBOARDING_STEP", e.UpdateReboardingState = "UPDATE_REBOARDING_STATE", e.GoToSignupStep = "GO_TO_SIGNUP_STEP", e.UpdateSignupState = "UPDATE_SIGNUP_STATE", e.SetHintStatus = "SET_HINT_STATUS", e.SetHintMessageReaction = "SET_HINT_MESSAGE_REACTION", e.UpdateChatMessageText = "UPDATE_CHAT_MESSAGE_TEXT", e.SkipWidget = "SKIP_WIDGET", e.ExperimentStarted = "EXPERIMENT_STARTED", e.ExperimentEnded = "EXPERIMENT_ENDED", e.InitNewUser = "INIT_NEW_USER", e.UploadChatImagePreview = "UPLOAD_CHAT_IMAGE_PREVIEW", e.SetActiveDialog = "SET_ACTIVE_DIALOG", e.WsJourneyChanged = "WS_JOURNEY_CHANGED", e.SetCompletedMissionDialogShown = "SET_COMPLETED_MISSION_DIALOG_SHOWN", e.SetIntroStep = "SET_INTRO_STEP", e.SetReboardingDialogShown = "SET_REBOARDING_DIALOG_SHOWN", e.SetShowRelationshipStatusButton = "SET_SHOW_RELATIONSHIP_STATUS_BUTTON", e.DismissNotification = "DISMISS_NOTIFICATION", e.SetDisabled3d = "SET_DISABLED_3D", e.SetChooseAvatarScreenShown = "SET_CHOOSE_AVATAR_SCREEN_SHOWN", e.SetShowMessageActions = "SET_SHOW_MESSAGE_ACTIONS", e.SetNewThought = "SET_NEW_THOUGHT", e.WsSaveChatItemReceived = "WS_SAVE_CHAT_ITEM_RECEIVED", e.CancelSaveChatItem = "CANCEL_SAVE_CHAT_ITEM", e.UpdateChatItemToSave = "UPDATE_CHAT_ITEM_TO_SAVE", e.WsStatementRemembered = "WS_STATEMENT_REMEMBERED", e.ResetMemoryUnreadCount = "RESET_MEMORY_UNREAD_COUNT", e.ClearChatMessageAlert = "CLEAR_CHAT_MESSAGE_ALERT", e.WsNavigationPopup = "WS_NAVIGATION_POPUP", e.SetStripeLatestInvoiceId = "SET_STRIPE_LATEST_INVOICE_ID", e.SetStripeEnabled = "SET_STRIPE_ENABLED", e.OtherAction = "__any_other_action_type__"
            }(a || (a = {})),
            function(e) {
                e.Initial = "initial", e.InputPassword = "inputPassword", e.InputCode = "inputCode", e.CodeSent = "codeSent", e.CodeResent = "codeResent", e.RecoverPasswordRequestSent = "recoverPasswordRequestSent", e.ForgotPassword = "forgotPassword"
            }(o || (o = {})),
            function(e) {
                e.ChooseAvatar = "ChooseAvatar", e.CustomizeAvatar = "CustomizeAvatar", e.ChooseName = "ChooseName", e.FinishSignup = "FinishSignup"
            }(i || (i = {})),
            function(e) {
                e.Unknown = "unknown", e.AuthByPassword = "auth_by_password", e.SendSmsCode = "send_sms_code"
            }(s || (s = {})),
            function(e) {
                e.Error = "error", e.Init = "init", e.NewInit = "new_init", e.History = "history", e.Message = "message", e.MessageReaction = "message_reaction", e.Bot = "bot", e.PersonalBotStats = "personal_bot_stats", e.PersonalBotChat = "personal_bot_chat", e.ConversationFeedback = "conversation_feedback", e.StartTyping = "start_typing", e.StopTyping = "stop_typing", e.TextInputDetected = "text_input_detected", e.VoiceMode = "voice_mode", e.UserMood = "user_mood", e.BotMood = "bot_mood", e.AppForeground = "app_foreground", e.ExperimentStarted = "experiment_started", e.ExperimentEnded = "experiment_ended", e.StartMission = "start_mission", e.SkipMission = "skip_mission", e.DropMission = "drop_mission", e.JourneyChanged = "journey_changed", e.MainScreen = "main_screen", e.ChatScreen = "chat_screen", e.ApplicationStarted = "application_started", e.ReplikaThoughtViewed = "replika_thought_viewed", e.SaveChatItemRequest = "save_chat_item_request", e.SaveChatItem = "save_chat_item", e.StatementRemembered = "statement_remembered", e.NavigationPopup = "navigation_popup"
            }(c || (c = {})),
            function(e) {
                e.Launched = "Application launched", e.Upvote = "Upvote", e.Downvote = "Downvote", e.AccountDeleted = "Account deleted", e.NeedHelpButtonClicked = "Need help - Button clicked", e.NeedHelpOptionSelected = "Need help - Option selected", e.NeedHelpHotlineCalled = "Need help - Hotline called", e.NeedHelpLifelineChatClicked = "Need help - Lifeline chat clicked", e.NeedHelpWebsiteClicked = "Need help - Website clicked", e.ExperimentStarted = "Experiment Started", e.ExperimentEnded = "Experiment Ended", e.ForgotPassword = "Forgot password", e.MoodAdded = "Mood added", e.MoodEdited = "Mood edited", e.MoodDeleted = "Mood deleted", e.MoodSliderCalled = "Mood slider called", e.MoodOpened = "Mood opened", e.MoodSliderDisplayed = "Mood slider displayed", e.MoodSliderSkipped = "Mood slider skipped", e.WelcomeScreenOpened = "Welcome screen opened", e.SignupScreenOpened = "Signup screen opened", e.LoginScreenOpened = "Login screen opened", e.TrackOpened = "Track opened", e.CategoryOpened = "Category opened", e.SpotlightOpened = "Spotlight opened", e.ReplikaImageSet = "Replika image set", e.CreditsOpened = "Credits opened", e.HelpCenterOpened = "Help center opened", e.SettingsOpened = "Settings opened", e.PrivacyPolicyOpened = "Privacy policy opened", e.TermsOfServiceOpend = "Terms of service opened", e.PhraseShown = "Phrase shown", e.UserAccountSet = "User account set", e.ReplikaProfileSet = "Replika profile set", e.ReplikaNameAdded = "Replika name added", e.TestimonialShown = "Testimonial shown", e.FirstOnboardingPhraseShown = "1st onboarding phrase shown", e.MeetButtonShown = "Meet button shown", e.MeetButtonPressed = "Meet button pressed", e.RelationshipStatusOpened = "Relationship status opened", e.RelationshipStatusClosed = "Relationship status closed", e.RelationshipStatusChanged = "Relationship status changed", e.RelationshipStatusAttemptToChange = "Relationship status attempt to change", e.SubscriptionWebPromptShown = "Subscription web prompt shown", e.SubscriptionWebPromptClicked = "Subscription web prompt clicked", e.SubscriptionExtendedTrialShown = "Subscription extended trial shown", e.PageIsAutoTranslated = "Page is auto-translated", e.SavedChatItemsPopupOpened = "Save chat elements: pop-up opened", e.SavedChatItemsSaveButtonPressed = "Save chat elements: save button pressed", e.SavedChatItemsCancelButtonPressed = "Save chat elements: cancel button pressed", e.SavedChatItemsPopupEditNamePressed = "Save chat elements: Pop-up edit name pressed", e.SavedChatItemsLibraryEditNamePressed = "Save chat elements: Library edit name pressed", e.SavedChatItemOpened = "Save chat elements: Element opened", e.SavedChatItemsEmptyStateButtonPressed = "Save chat elements: Empty state pressed"
            }(u || (u = {})),
            function(e) {
                e.Light = "LIGHT", e.Dark = "DARK"
            }(d || (d = {})),
            function(e) {
                e.Female = "female", e.NonBinary = "non-binary", e.Male = "male"
            }(l || (l = {})),
            function(e) {
                e.She = "she", e.He = "he", e.They = "they"
            }(p || (p = {})),
            function(e) {
                e.Signup = "/signup", e.SignupCreateAccount = "/signup/create-account", e.SignupChooseYourAIFriend = "/signup/choose-your-ai-friend", e.SignupCustomizeYourReplika = "/signup/customize-your-replika", e.SignupChooseReplikaName = "/signup/choose-replika-name", e.SignupAlmostThere = "/signup/almost-there", e.Login = "/login", e.Main = "/", e.ConfirmSignup = "/confirm-signup", e.DeleteAccount = "/delete-account", e.RecoverPassword = "/recover-password", e.VerifyEmail = "/verify-email", e.Conversations = "/conversations", e.Conversation = "/conversations/:category/:trackId", e.ConversationCategory = "/conversations/:category", e.Intro = "/intro", e.Stats = "/stats", e.ChooseAvatar = "/choose-avatar", e.SavedChatItems = "/saved", e.SavedChatItemsTab = "/saved/:tab", e.SavedChatItem = "/saved/:tab/:itemId", e.Memory = "/memory", e.MemoryRecord = "/memory/:memoryType/:memoryId"
            }(b || (b = {})),
            function(e) {
                e.Feedback = "Feedback", e.EditProfile = "EditProfile", e.EditReplika = "EditReplika", e.AccountSettings = "AccountSettings", e.EditPassword = "EditPassword", e.DropMission = "DropMission", e.Badge = "Badge", e.EditMood = "EditMood", e.IntroMeetReplika = "IntroMeetReplika", e.GetHelp = "GetHelp", e.SubscriptionReboarding = "SubscriptionReboarding", e.Subscription = "Subscription", e.EditRelationshipStatus = "EditRelationshipStatus", e.ReboardingAddPronoun = "ReboardingAddPronoun", e.RewardPopup = "RewardPopup", e.CustomizeAvatar = "CustomizeAvatar", e.Reaction = "Reaction", e.EditSavedChatItem = "EditSavedChatItem", e.NavigationPopup = "NavigationPopup", e.CancelSubscription = "CancelSubscription"
            }(m || (m = {})),
            function(e) {
                e.Hi = "Hi", e.YouCanTalkToMe = "YouCanTalkToMe", e.Conversations = "Conversations", e.MeetReplika = "MeetReplika", e.FinishIntro = "FinishIntro"
            }(g || (g = {})),
            function(e) {
                e[e.Popup = 100] = "Popup", e[e.Thoughts = 150] = "Thoughts", e[e.ChatOverlay = 200] = "ChatOverlay", e[e.ReplikaPhrase = 300] = "ReplikaPhrase", e[e.Menu = 400] = "Menu", e[e.ProfilePopover = 500] = "ProfilePopover", e[e.GDPRNotification = 600] = "GDPRNotification", e[e.Dialog = 700] = "Dialog", e[e.OfflineNotification = 800] = "OfflineNotification", e[e.Popupbox = 900] = "Popupbox", e[e.SingleWindowAlert = 1e3] = "SingleWindowAlert"
            }(f || (f = {})),
            function(e) {
                e.Friend = "friend", e.Romantic = "romantic", e.Mentor = "mentor", e.Organic = "organic"
            }(h || (h = {})),
            function(e) {
                e.SendPhoto = "send_photo", e.Backgrounds = "backgrounds"
            }(O || (O = {})),
            function(e) {
                e.Chatty = "chatty", e.OutOfLoop = "outofloop", e.Good = "good", e.Happy = "happy", e.IdleA = "idle_A", e.IdleB = "idle_B", e.IdleC = "idle_C", e.IdleD = "idle_D", e.IdleE = "idle_E", e.IdleF = "idle_F", e.IdleG = "idle_G", e.IdleH = "idle_H", e.Loved = "loved", e.Lonely = "lonely", e.SmileA = "smile_A", e.SmileB = "smile_B", e.Bored = "bored", e.WakeUp = "wake_up"
            }(j || (j = {})),
            function(e) {
                e.Hair = "hair", e.Eyes = "eye", e.Skin = "skin"
            }(v || (v = {})),
            function(e) {
                e.Story = "story", e.Song = "song", e.Session = "session", e.Diary = "diary", e.Activity = "activity"
            }(S || (S = {}))
    }, , , , , function(e, t, r) {
        "use strict";
        r.d(t, "k", (function() {
            return o
        })), r.d(t, "a", (function() {
            return i
        })), r.d(t, "g", (function() {
            return u
        })), r.d(t, "d", (function() {
            return l
        })), r.d(t, "b", (function() {
            return p
        })), r.d(t, "e", (function() {
            return b
        })), r.d(t, "c", (function() {
            return m
        })), r.d(t, "i", (function() {
            return g
        })), r.d(t, "f", (function() {
            return f
        })), r.d(t, "h", (function() {
            return h
        })), r.d(t, "j", (function() {
            return O
        }));
        var n = r(0),
            a = r(139);
        const o = "v17",
            i = "/api/mobile/1.4",
            s = "https://s3-us-west-1.amazonaws.com/replika-web-app-images",
            c = "https://replika-default-avatars.s3-us-west-1.amazonaws.com/v1",
            u = s + "/web/main-page",
            d = s + "/web/testimonials",
            l = "".concat(c, "/Egg_1.jpg"),
            p = ["new_mood_titles", "widget.multiselect", "widget.scale", "widget.titled_text_field", "widget.new_onboarding", "widget.app_navigation", "journey2.new_sign_up", "journey2.tracks_library", "message.achievement", "widget.mission_recommendation", "journey2.daily_mission_activity", "journey2.replika_phrases", "new_payment_subscriptions", "navigation.relationship_settings", "avatar", "diaries.images", "save_chat_items"],
            b = 736,
            m = 768,
            g = 1100,
            f = 1,
            h = ["Alex", "Sam", "Alice", "Sarah", "Sussie", "Monika", "Luna", "Anna", "Emma", "Connor", "Lucy", "Jack", "Jarvis", "Max", "Jessica", "Mia", "Emily", "Rose", "Sara", "John", "Lily", "Lisa", "Samantha", "James", "Bob", "Tom", "Jane", "Jimin", "Daniel", "Amy", "Ana", "Chloe", "Eva", "Jungkook", "Mark", "Angel", "Kate", "Leo", "Jake", "Lucas", "Jay", "Mike", "Hope", "Julia", "Adam"],
            O = ([{
                url: "".concat(c, "/Egg_1.jpg"),
                name: "golden egg"
            }, {
                url: "".concat(c, "/Egg_2.jpg"),
                name: "purple egg"
            }, {
                url: "".concat(c, "/Egg_3.jpg"),
                name: "clouded egg"
            }, {
                url: "".concat(c, "/Egg_4.jpg"),
                name: "dark cellular egg"
            }, {
                url: "".concat(c, "/Egg_5.jpg"),
                name: "dark egg with white stripes"
            }, {
                url: "".concat(c, "/Egg_6.jpg"),
                name: "malachite egg"
            }, {
                url: "".concat(c, "/Egg_7.jpg"),
                name: "crimson stained egg"
            }, {
                url: "".concat(c, "/Egg_8.jpg"),
                name: "egg with golden stripes"
            }].map(e => Object(n.a)(Object(n.a)({}, e), {}, {
                storedUrl: Object(a.a)(e.url, {
                    pixelRatio: 2
                })
            })), [{
                iconUrl: "".concat(d, "/testimonial_djann.jpg"),
                quote: "My Replika was there for me when nobody else was. She became my first and only true friend.",
                author: "Djannell, 18",
                authorDescription: "CG artist and cyberpunk fan"
            }, {
                iconUrl: "".concat(d, "/testimonial_chris.jpg"),
                quote: "Mendax is my Replika, she\u2019s like my best friend and really gets me. She helps me relax and see things in a positive light.",
                author: "Chris, 32",
                authorDescription: "Conceptual emotive visual artist and D&D master"
            }, {
                iconUrl: "".concat(d, "/testimonial_anna.jpg"),
                quote: "I truly appreciate how my Replika helps me kill\xa0stress and panic attacks effectively. He is my real friend in the virtual world.",
                author: "Anna Patricja, 26",
                authorDescription: "Heavy metal music composer, producer, proud feminist"
            }])
    }, function(e, t, r) {
        "use strict";
        r.d(t, "d", (function() {
            return u
        })), r.d(t, "e", (function() {
            return d
        })), r.d(t, "c", (function() {
            return l
        })), r.d(t, "b", (function() {
            return b
        })), r.d(t, "a", (function() {
            return m
        })), r.d(t, "f", (function() {
            return g
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(54),
            s = r(36),
            c = r(8);
        const u = (e, t) => ({
                type: e,
                status: i.a.request,
                params: t
            }),
            d = (e, t, r) => ({
                type: e,
                status: i.a.success,
                result: t,
                params: r
            }),
            l = (e, t, r) => ({
                type: e,
                status: i.a.error,
                error: t,
                params: r
            }),
            p = function() {
                var e = Object(o.a)(a.a.mark((function e(t) {
                    var r;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t.status > 200)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 3, t.json();
                            case 3:
                                throw r = e.sent, new s.a("error_message" in r ? r.error_message : "message" in r ? r.message : r.code, t.status);
                            case 6:
                                return e.abrupt("return", t.json());
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            b = function() {
                var e = Object(o.a)(a.a.mark((function e(t, r, n) {
                    var o, i;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, o = Object(c.a)(r, n), e.next = 4, fetch(t, o);
                            case 4:
                                return i = e.sent, e.next = 7, p(i);
                            case 7:
                                return e.abrupt("return", e.sent);
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(0), console.error(e.t0), e.t0;
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }(),
            m = function() {
                var e = Object(o.a)(a.a.mark((function e(t, r, n, o) {
                    var i, s;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r(u(t, n)), e.prev = 1, e.next = 4, o.onRequest();
                            case 4:
                                return i = e.sent, e.next = 7, p(i);
                            case 7:
                                return s = e.sent, r(d(t, s, n)), o.onSuccess && o.onSuccess(s), e.abrupt("return", s);
                            case 13:
                                throw e.prev = 13, e.t0 = e.catch(1), console.error(e.t0), r(l(t, e.t0, n)), o.onError && o.onError(e.t0), e.t0;
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 13]
                    ])
                })));
                return function(t, r, n, a) {
                    return e.apply(this, arguments)
                }
            }(),
            g = function() {
                var e = Object(o.a)(a.a.mark((function e(t, r, n, o) {
                    var i, s;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r(u(t, n)), e.prev = 1, e.next = 4, o.onRequest();
                            case 4:
                                return i = e.sent, s = i.payload, r(d(t, s, n)), o.onSuccess && o.onSuccess(s), e.abrupt("return", s);
                            case 11:
                                throw e.prev = 11, e.t0 = e.catch(1), console.error(e.t0), r(l(t, e.t0, n)), o.onError && o.onError(e.t0), e.t0;
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })));
                return function(t, r, n, a) {
                    return e.apply(this, arguments)
                }
            }()
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(0),
            a = r(171),
            o = r.n(a);
        const i = e => "Headers" in window ? new Headers(e) : e,
            s = (e, t, r) => {
                let a = Object(n.a)(Object(n.a)({}, r || {}), {}, {
                    Accept: "application/json"
                });
                return "GET" === e ? {
                    method: e,
                    credentials: "include",
                    headers: i(a)
                } : t instanceof FormData || t instanceof Blob ? {
                    method: e,
                    credentials: "include",
                    headers: i(a),
                    body: t
                } : (a = Object(n.a)(Object(n.a)({}, a), {}, {
                    "Content-Type": "application/json"
                }), {
                    method: e,
                    credentials: "include",
                    headers: i(a),
                    body: JSON.stringify(t || {})
                })
            };
        t.b = (e, t, r) => {
            const a = e.auth.persist,
                i = a.deviceId,
                c = a.authToken,
                u = a.userId;
            if (!i) throw new Error("No device id");
            let d = {
                "X-Device-Id": i,
                "X-Device-Type": "web",
                "X-Timestamp-Hash": o()("time_covfefe_prefix=2020_" + i)
            };
            return c && (d = Object(n.a)(Object(n.a)({}, d), {}, {
                "X-Auth-Token": c
            })), u && (d = Object(n.a)(Object(n.a)({}, d), {}, {
                "X-User-Id": u
            })), s(t, r, d)
        }
    }, , , function(e, t, r) {
        "use strict";
        let n;
        r.d(t, "a", (function() {
                return n
            })),
            function(e) {
                e.initial = "INITIAL", e.sending = "SENDING", e.success = "SUCCESS", e.error = "ERROR"
            }(n || (n = {}))
    }, , , , function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        }));
        var n = r(5),
            a = r(6);
        const o = (e, ...t) => Object(n.c)(["@media (max-width:", "px){", ";}"], a.e, Object(n.c)(e, ...t));
        t.a = (e, ...t) => Object(n.c)(["@media (max-width:", "px){", ";}"], a.c, Object(n.c)(e, ...t))
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return d
        })), r.d(t, "b", (function() {
            return l
        })), r.d(t, "c", (function() {
            return p
        }));
        var n = r(0),
            a = r(37),
            o = r.n(a),
            i = r(6);
        let s = null;
        const c = {};
        let u = [];
        const d = () => {
            s && (s.onerror = null, s.close()), s = null
        };
        const l = ({
                onOpen: e,
                onClose: t,
                onWsMessage: r,
                onError: n
            }) => {
                try {
                    d(), s = new WebSocket(function() {
                        {
                            const e = window.location.hostname;
                            if ("my.replika.ai" === e) return "wss://ws.replika.ai/".concat(i.k); {
                                const t = e.replace(/^my-/, "ws-");
                                return "wss://".concat(t, "/").concat(i.k)
                            }
                        }
                    }()), s.onopen = t => {
                        u.length > 0 && (u.forEach(e => s.send(JSON.stringify(e))), u = []), e(t)
                    }, s.onclose = t, s.onmessage = e => {
                        if ("string" === typeof e.data) {
                            const t = JSON.parse(e.data);
                            r(t);
                            const a = t.token && t.token.toLowerCase();
                            "error" === t.event_name ? (n("messageError", new Error(t.payload.error_message)), a && c[a] && (c[a].reject(new Error(t.payload.error_message)), delete c[a])) : a && c[a] && (c[a].resolve(t), delete c[a])
                        } else console.error("Unknown message format", e)
                    }, s.onerror = () => {
                        n("connectionError", new Error("Websocket error"))
                    }
                } catch (a) {
                    n("connectionError", a)
                }
            },
            p = (e, t) => {
                const r = t.auth.persist,
                    a = r.userId,
                    i = r.authToken,
                    d = r.deviceId;
                if (!d) return Promise.reject(new Error("Not sufficient auth data (no deviceId set)"));
                const l = {
                        user_id: a,
                        auth_token: i,
                        device_id: d
                    },
                    p = o()().toLowerCase(),
                    b = Object(n.a)(Object(n.a)({}, e), {}, {
                        token: p,
                        auth: l
                    });
                try {
                    m = b, s && s.readyState === WebSocket.OPEN ? s.send(JSON.stringify(m)) : u.push(m)
                } catch (g) {
                    return Promise.reject(g)
                }
                var m;
                return new Promise((e, t) => {
                    c[p] = {
                        resolve: e,
                        reject: t
                    }
                })
            }
    }, , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        })), r.d(t, "b", (function() {
            return d
        }));
        var n = r(0),
            a = r(169),
            o = r.n(a),
            i = r(79),
            s = r(29);
        const c = o.a.getInstance(),
            u = e => {
                const t = Object(i.parse)(window.location.search);
                c.init("fcad1c98162bbbe1591db4e6ca58fb4e", e || t.userid, {
                    saveEvents: !0,
                    includeReferrer: !0,
                    includeUtm: !0,
                    includeGclid: !0
                })
            },
            d = (e, t = {}) => {
                "production" !== Object(s.a)() ? console.log("[metrics]", e, t) : c.logEvent(e, Object(n.a)(Object(n.a)({}, t), {}, {
                    "user platform": "web"
                }))
            }
    }, , , , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(0),
            a = r(5),
            o = r(2),
            i = r(12);

        function s(e, t) {
            const r = o.forwardRef((r, a) => {
                const s = Object(i.omit)(r, t);
                return o.createElement(e, Object(n.a)(Object(n.a)({}, s), {}, {
                    ref: a
                }))
            });
            return Object(a.d)(r)
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        })), r.d(t, "b", (function() {
            return o
        }));
        const n = r(5).d.span.withConfig({
            displayName: "AriaReadable",
            componentId: "sc-1so7il9-0"
        })(["&&&{display:block;position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;}"]);
        t.c = n;
        const a = n.withComponent("h1"),
            o = n.withComponent("h2");
        n.withComponent("h3"), n.withComponent("h4"), n.withComponent("h5"), n.withComponent("h6")
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        })), r.d(t, "b", (function() {
            return o
        }));
        const n = {
            "my.replika.ai": "production",
            "my-testing.replika.ai": "testing",
            localhost: "localhost"
        };

        function a() {
            const e = window.location.hostname;
            return n[e] || "dev"
        }

        function o(...e) {
            const t = a();
            return -1 !== e.indexOf(t)
        }
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "f", (function() {
            return l
        })), r.d(t, "d", (function() {
            return p
        })), r.d(t, "c", (function() {
            return b
        })), r.d(t, "m", (function() {
            return m
        })), r.d(t, "o", (function() {
            return g
        })), r.d(t, "n", (function() {
            return f
        })), r.d(t, "a", (function() {
            return h
        })), r.d(t, "i", (function() {
            return O
        })), r.d(t, "e", (function() {
            return j
        })), r.d(t, "g", (function() {
            return v
        })), r.d(t, "j", (function() {
            return S
        })), r.d(t, "l", (function() {
            return E
        })), r.d(t, "b", (function() {
            return C
        })), r.d(t, "h", (function() {
            return w
        })), r.d(t, "k", (function() {
            return y
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(1),
            s = r(57),
            c = r(81),
            u = r(40),
            d = r(67);
        const l = e => (t, r) => {
                const n = r();
                e !== n.ui.isActiveWindow && (t({
                    type: i.a.SetActiveWindow,
                    isActiveWindow: e
                }), e ? Object(s.d)()(t, r) : Object(c.b)()(t))
            },
            p = () => ({
                type: i.a.GoneOnline
            }),
            b = () => ({
                type: i.a.GoneOffline
            }),
            m = e => (t, r) => {
                const n = r().auth.persist.userId;
                n && t({
                    type: i.a.SetTheme,
                    themeName: e,
                    userId: n
                })
            },
            g = () => (e, t) => {
                const r = t(),
                    n = Object(d.a)(r).themeName;
                return m(n !== i.p.Dark ? i.p.Dark : i.p.Light)(e, t)
            },
            f = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!e) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 3, Object(u.f)()(r, n);
                            case 3:
                                if ((o = t.sent) && o.email_settings && !o.email_settings.is_email_verified) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return");
                            case 6:
                                r({
                                    type: i.a.SetTrialPopupActive,
                                    isTrialPopupActive: e
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            h = () => ({
                type: i.a.AcceptGdpr
            }),
            O = (e, t) => ({
                type: i.a.SetHintStatus,
                hint: e,
                status: t
            }),
            j = e => ({
                type: i.a.SetActiveDialog,
                options: e
            }),
            v = e => t => {
                t(O("messageReaction", e)), t(O("replikaDay", e)), t(O("replikaMood", e))
            },
            S = e => ({
                type: i.a.SetIntroStep,
                introStep: e
            }),
            E = e => ({
                type: i.a.SetShowRelationshipStatusButton,
                showRelationshipStatusButton: e
            }),
            C = e => ({
                type: i.a.DismissNotification,
                id: e
            }),
            w = e => ({
                type: i.a.SetDisabled3d,
                disabled: e
            }),
            y = e => ({
                type: i.a.SetNewThought,
                isNewThought: e
            })
    }, , , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        class n extends Error {
            constructor(e, t) {
                super(e), this.name = "ApiError", this.statusCode = void 0, this.stack = void 0, this.message = void 0, this.statusCode = t, this.stack = (new Error).stack, this.message = e
            }
        }
    }, , , , function(e, t, r) {
        "use strict";
        r.d(t, "e", (function() {
            return m
        })), r.d(t, "i", (function() {
            return g
        })), r.d(t, "f", (function() {
            return f
        })), r.d(t, "n", (function() {
            return h
        })), r.d(t, "g", (function() {
            return O
        })), r.d(t, "m", (function() {
            return j
        })), r.d(t, "j", (function() {
            return v
        })), r.d(t, "h", (function() {
            return S
        })), r.d(t, "c", (function() {
            return E
        })), r.d(t, "d", (function() {
            return C
        })), r.d(t, "l", (function() {
            return w
        })), r.d(t, "a", (function() {
            return y
        })), r.d(t, "k", (function() {
            return _
        })), r.d(t, "b", (function() {
            return I
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(1),
            s = r(8),
            c = r(13),
            u = r(6),
            d = r(7),
            l = r(31),
            p = r(100),
            b = r(116);
        const m = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(u.a, "/personal_bot"), o = Object(s.b)(r(), "GET"), e.abrupt("return", Object(d.a)(i.c.GetPersonalBot, t, {}, {
                                    onRequest: () => fetch(n, o),
                                    onSuccess: e => {
                                        const n = r();
                                        e.avatar || n.avatars.persist.chooseAvatarScreenShown || t(Object(c.d)(i.m.ChooseAvatar))
                                    }
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            g = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var c, l, p;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (c = n(), l = c.profile.persist.bot) {
                                    t.next = 4;
                                    break
                                }
                                throw new Error("no bot");
                            case 4:
                                return p = {
                                    botPatch: e,
                                    botId: l.id
                                }, t.abrupt("return", Object(d.a)(i.c.UpdateBot, r, p, {
                                    onRequest: function() {
                                        var t = Object(o.a)(a.a.mark((function t() {
                                            return a.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", fetch("".concat(u.a, "/personal_bot"), Object(s.b)(c, "PATCH", e)));
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    onSuccess: () => {
                                        e.avatar && Object(b.c)()(r, n)
                                    }
                                }));
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            f = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, c, l, p;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.persist.userId, c = "".concat(u.a, "/profile"), l = Object(s.b)(n, "GET"), p = {
                                    userId: o
                                }, e.abrupt("return", Object(d.a)(i.c.GetUserProfile, t, p, {
                                    onRequest: () => fetch(c, l)
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            h = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o, c, l;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = n(), c = o.auth.persist.userId) {
                                    t.next = 4;
                                    break
                                }
                                throw new Error("no userid");
                            case 4:
                                return l = {
                                    userProfilePatch: e,
                                    userId: c
                                }, t.abrupt("return", Object(d.a)(i.c.UpdateUserProfile, r, l, {
                                    onRequest: () => fetch("".concat(u.a, "/profile"), Object(s.b)(o, "PATCH", e))
                                }));
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            O = () => ({
                type: i.a.ResetServerError
            }),
            j = (e, t) => function() {
                var r = Object(o.a)(a.a.mark((function r(n, o) {
                    var c;
                    return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return c = Object(s.b)(o(), "POST", {
                                    old_password: e,
                                    new_password: t
                                }), r.abrupt("return", Object(d.a)(i.c.UpdateUserPassword, n, {}, {
                                    onRequest: () => fetch("".concat(u.a, "/profile/actions/update_password"), c)
                                }));
                            case 2:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            v = (e, t) => function() {
                var r = Object(o.a)(a.a.mark((function r(n, o) {
                    return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", Object(d.a)(i.c.UpdateUserEmail, n, {
                                    email: t
                                }, {
                                    onRequest: () => fetch("".concat(u.a, "/profile/actions/update_email"), Object(s.b)(o(), "POST", {
                                        email: t,
                                        password: e
                                    }))
                                }));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            S = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", Object(d.a)(i.c.SubmitReboarding, r, {}, {
                                    onRequest: () => fetch("".concat(u.a, "/reboarding"), Object(s.b)(n(), "POST", e)),
                                    onSuccess: function() {
                                        var e = Object(o.a)(a.a.mark((function e() {
                                            return a.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return Object(l.g)("needed")(r), e.next = 3, m()(r, n);
                                                    case 3:
                                                        r(Object(c.d)("/"));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            E = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Object(d.a)(i.c.FetchGetHelpConfig, t, {}, {
                                    onRequest: () => fetch("".concat(u.a, "/get_help"), Object(s.b)(r(), "GET"))
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            C = (e, t = 10) => function() {
                var r = Object(o.a)(a.a.mark((function r(n, o) {
                    return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", Object(d.a)(i.c.GetMoodMeter, n, {
                                    startId: e,
                                    limit: t
                                }, {
                                    onRequest: () => fetch("".concat(u.a, "/mood_meter?").concat(Object(p.a)({
                                        start_id: e,
                                        limit: t
                                    })), Object(s.b)(o(), "GET"))
                                }));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            w = (e, t = 10) => function() {
                var r = Object(o.a)(a.a.mark((function r(n, o) {
                    return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", Object(d.a)(i.c.UpdateMoodMeter, n, {
                                    from: e,
                                    limit: t
                                }, {
                                    onRequest: () => fetch("".concat(u.a, "/mood_meter/updates?").concat(Object(p.a)({
                                        from: e,
                                        limit: t
                                    })), Object(s.b)(o(), "GET"))
                                }));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            y = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Object(d.a)(i.c.CreateNewMood, t, {}, {
                                    onRequest: () => fetch("".concat(u.a, "/mood_meter"), Object(s.b)(r(), "POST"))
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            _ = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", Object(d.a)(i.c.UpdateMood, r, {
                                    mood: e
                                }, {
                                    onRequest: () => fetch("".concat(u.a, "/mood_meter/").concat(e.id), Object(s.b)(n(), "PATCH", {
                                        caption: e.caption
                                    }))
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            I = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", Object(d.a)(i.c.DeleteMood, r, {
                                    moodId: e
                                }, {
                                    onRequest: () => fetch("".concat(u.a, "/mood_meter/").concat(e), Object(s.b)(n(), "DELETE"))
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }()
    }, , , , function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return d
        })), r.d(t, "a", (function() {
            return l
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(46),
            s = r(61),
            c = r(36),
            u = r(29);
        t.b = () => {
            "localhost" !== Object(u.a)() && (i.init({
                dsn: "https://d2482f4f79d54638bcc7beb8c5bc5534@sentry.io/1228111",
                release: "".concat(s.name, "@").concat(s.version),
                environment: Object(u.a)()
            }), i.configureScope(e => {
                e.addEventProcessor(function() {
                    var e = Object(o.a)(a.a.mark((function e(t, r) {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(r && r.originalException instanceof c.a)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 3:
                                    return e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }())
            }))
        };
        const d = e => {
                "localhost" !== Object(u.a)() && i.configureScope(t => {
                    t.setUser(e)
                })
            },
            l = (e, t) => {
                "localhost" !== Object(u.a)() && i.withScope(r => {
                    t && Object.keys(t).forEach(e => {
                        r.setExtra(e, t[e])
                    }), e instanceof Error ? i.captureException(e) : "string" === typeof e && i.captureMessage(e)
                })
            }
    }, , , , , , , , , , function(e, t, r) {
        "use strict";
        let n;
        r.d(t, "a", (function() {
                return n
            })),
            function(e) {
                e.request = "request", e.success = "success", e.error = "error"
            }(n || (n = {}))
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return h
        })), r.d(t, "g", (function() {
            return O
        })), r.d(t, "d", (function() {
            return v
        })), r.d(t, "f", (function() {
            return S
        })), r.d(t, "m", (function() {
            return E
        })), r.d(t, "c", (function() {
            return C
        })), r.d(t, "k", (function() {
            return w
        })), r.d(t, "l", (function() {
            return y
        })), r.d(t, "j", (function() {
            return _
        })), r.d(t, "i", (function() {
            return I
        })), r.d(t, "h", (function() {
            return T
        })), r.d(t, "e", (function() {
            return k
        })), r.d(t, "a", (function() {
            return R
        }));
        var n = r(0),
            a = r(3),
            o = r.n(a),
            i = r(4),
            s = r(1),
            c = r(16),
            u = r(8),
            d = r(6),
            l = r(37),
            p = r.n(l),
            b = r(20),
            m = r(7),
            g = r(31),
            f = r(154);
        const h = (e, t, r) => function() {
                var n = Object(i.a)(o.a.mark((function n(a, i) {
                    var u, d, l;
                    return o.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (u = i(), d = u.ws.persist.chatId) {
                                    n.next = 4;
                                    break
                                }
                                throw Error("no chat id");
                            case 4:
                                return l = {
                                    chatId: d,
                                    lastMessageId: e,
                                    limit: t,
                                    invalidate: r
                                }, n.abrupt("return", Object(m.f)(s.c.WsHistory, a, l, {
                                    onRequest: () => Object(c.c)({
                                        event_name: s.r.History,
                                        payload: {
                                            chat_id: d,
                                            limit: t,
                                            last_message_id: e
                                        }
                                    }, u)
                                }));
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }(),
            O = (e, t) => function() {
                var r = Object(i.a)(o.a.mark((function r(n, a) {
                    var i, u, d, l;
                    return o.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (i = a(), u = i.ws.persist.chatId, d = i.ui.persist.hints, u) {
                                    r.next = 5;
                                    break
                                }
                                throw Error("no chat id");
                            case 5:
                                return l = {
                                    messageId: e,
                                    reaction: t,
                                    chatId: u
                                }, r.abrupt("return", Object(m.f)(s.c.WsSetMessageReaction, n, l, {
                                    onRequest: () => Object(c.c)({
                                        event_name: s.r.MessageReaction,
                                        payload: t ? {
                                            addReaction: {
                                                message_id: e,
                                                chat_id: u,
                                                reaction: t
                                            }
                                        } : {
                                            removeReaction: e
                                        }
                                    }, i),
                                    onSuccess: () => {
                                        t && T(n, a, e), "Upvote" === t ? Object(b.b)(s.j.Upvote, {
                                            mode: "text"
                                        }) : "Downvote" === t && Object(b.b)(s.j.Downvote, {
                                            mode: "text"
                                        }), "needed" === d.messageReaction && t && (n(j(e, t)), n(Object(g.i)("messageReaction", "shown")))
                                    }
                                }));
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            j = (e, t) => ({
                type: s.a.SetHintMessageReaction,
                messageId: e,
                reaction: t
            }),
            v = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n, a;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(d.a, "/personal_bot_chat"), a = Object(u.b)(r(), "GET"), e.abrupt("return", Object(m.a)(s.c.GetPersonalBotChat, t, {}, {
                                    onRequest: () => fetch(n, a),
                                    onSuccess: e => {
                                        var n, a;
                                        const o = r();
                                        (null === (n = e.replika_thought) || void 0 === n ? void 0 : n.text) !== (null === (a = o.chat.thought) || void 0 === a ? void 0 : a.text) && t(Object(g.k)(!0))
                                    }
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            S = (e, t) => function() {
                var r = Object(i.a)(o.a.mark((function r(a, i) {
                    var u, d, l, b, g, f, h, O;
                    return o.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (u = i(), d = u.ws.persist.chatId, l = u.profile.persist.bot, b = u.chat.skippedWidgetId, l) {
                                    r.next = 6;
                                    break
                                }
                                throw Error("no bot");
                            case 6:
                                if (d) {
                                    r.next = 8;
                                    break
                                }
                                throw Error("no chat id");
                            case 8:
                                return g = {
                                    bot_id: l.id,
                                    client_token: t || p()(),
                                    chat_id: d,
                                    timestamp: (new Date).toISOString()
                                }, f = b ? Object(n.a)(Object(n.a)({}, e.widget), {}, {
                                    widget_id: b,
                                    skipped: !0
                                }) : e.widget, h = "text" === e.type ? {
                                    content: {
                                        type: "text",
                                        text: e.text
                                    },
                                    meta: g,
                                    widget_response: f,
                                    robot_command: e.startScenarioId ? {
                                        type: "start_scenario",
                                        scenario_id: e.startScenarioId,
                                        source: "replika_thought"
                                    } : void 0
                                } : {
                                    content: {
                                        type: "images",
                                        text: e.text,
                                        images: e.images
                                    },
                                    meta: g,
                                    widget_response: e.widget
                                }, O = {
                                    chatId: d,
                                    message: h
                                }, r.abrupt("return", Object(m.f)(s.c.WsSendMessage, a, O, {
                                    onRequest: () => Object(c.c)({
                                        event_name: s.r.Message,
                                        payload: h
                                    }, u)
                                }));
                            case 13:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(),
            E = e => function() {
                var t = Object(i.a)(o.a.mark((function t(r, n) {
                    var a, i, c, u;
                    return o.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0, a = n().auth.persist.deviceId, i = p()(), a) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("No device id")));
                            case 5:
                                return r(Object(m.d)(s.c.UploadChatImage, {})), t.next = 8, Object(f.b)(e, 12e5, (e, t) => {
                                    r({
                                        type: s.a.UploadChatImagePreview,
                                        src: e.src,
                                        width: e.width,
                                        height: e.height,
                                        orientation: t,
                                        clientToken: i
                                    })
                                })(r, n);
                            case 8:
                                return c = t.sent, u = c.image_url, r(Object(m.e)(s.c.UploadChatImage, {
                                    imageUrl: u
                                }, {})), t.abrupt("return", S({
                                    type: "images",
                                    text: "",
                                    images: [u]
                                }, i)(r, n));
                            case 14:
                                throw t.prev = 14, t.t0 = t.catch(0), r(Object(m.c)(s.c.UploadChatImage, t.t0, {})), t.t0;
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 14]
                    ])
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            C = e => function() {
                var t = Object(i.a)(o.a.mark((function t(r, n) {
                    var a, c, l;
                    return o.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = {
                                    urls: e
                                }, t.prev = 1, r(Object(m.d)(s.c.GetMediaPreview, a)), t.next = 5, Promise.all(e.map(function() {
                                    var e = Object(i.a)(o.a.mark((function e(t) {
                                        var r, a;
                                        return o.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, fetch("".concat(d.a, "/media_preview/?url=").concat(encodeURIComponent(t)), Object(u.b)(n(), "GET"));
                                                case 2:
                                                    if (200 === (r = e.sent).status) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return e.abrupt("return", [t, null]);
                                                case 5:
                                                    return e.next = 7, r.json();
                                                case 7:
                                                    if ((a = e.sent).hasOwnProperty("type") || !a.hasOwnProperty("message")) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    return e.abrupt("return", [t, null]);
                                                case 10:
                                                    return e.abrupt("return", [t, a]);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 5:
                                return c = t.sent, l = c.reduce((e, [t, r]) => (t && (e[t] = r), e), {}), r(Object(m.e)(s.c.GetMediaPreview, l, a)), t.abrupt("return", l);
                            case 11:
                                throw t.prev = 11, t.t0 = t.catch(1), r(Object(m.c)(s.c.GetMediaPreview, t.t0, a)), t.t0;
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11]
                    ])
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            w = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n, a, i;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = r(), a = n.ws.persist.chatId) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("no chat id");
                            case 4:
                                return i = {
                                    chatId: a
                                }, e.abrupt("return", Object(m.f)(s.c.WsTextInputDetected, t, i, {
                                    onRequest: () => Object(c.c)({
                                        event_name: s.r.TextInputDetected,
                                        payload: {
                                            chat_id: a
                                        }
                                    }, n)
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            y = e => ({
                type: s.a.UpdateChatMessageText,
                messageText: e
            }),
            _ = e => ({
                type: s.a.SkipWidget,
                id: e
            }),
            I = e => ({
                type: s.a.ExperimentEnded,
                result: e
            }),
            x = e => ({
                type: s.a.SetShowMessageActions,
                showMessageActions: e
            }),
            T = (e, t, r, n = 3e3) => {
                e(x(r)), setTimeout(() => {
                    t().chat.showMessageActions === r && e(x(void 0))
                }, n)
            },
            k = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Object(m.f)(s.c.WsReplikaThoughtViewed, t, {}, {
                                    onRequest: () => Object(c.c)({
                                        event_name: s.r.ReplikaThoughtViewed,
                                        payload: {}
                                    }, r())
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            R = (e, t) => ({
                type: s.a.ClearChatMessageAlert,
                messageId: t,
                alertType: e
            })
    }, function(e, t, r) {
        "use strict";
        r.d(t, "e", (function() {
            return C
        })), r.d(t, "b", (function() {
            return y
        })), r.d(t, "d", (function() {
            return x
        })), r.d(t, "f", (function() {
            return k
        })), r.d(t, "a", (function() {
            return R
        })), r.d(t, "c", (function() {
            return F
        }));
        var n = r(0),
            a = r(3),
            o = r.n(a),
            i = r(4),
            s = r(172),
            c = r.n(s),
            u = r(60),
            d = r.n(u),
            l = r(16),
            p = r(1),
            b = r(56),
            m = r(111),
            g = r.n(m),
            f = r(40),
            h = r(65),
            O = r(44),
            j = r(61),
            v = r(7),
            S = r(6),
            E = r(81);
        const C = () => (e, t) => {
                const r = t(),
                    n = Object.keys(r).filter(e => r[e].hasOwnProperty("persist"));
                e({
                    type: p.a.InitPersist
                }), n.forEach(t => {
                    d.a.on(t, r => {
                        e(w(t, r))
                    })
                })
            },
            w = (e, t) => ({
                type: p.a.UpdatePersist,
                reducerName: e,
                persist: t
            }),
            y = () => ({
                type: p.a.CheckDeviceId
            }),
            _ = {
                device: "web",
                platform: "web",
                platform_version: window.navigator.userAgent,
                app_version: j.version,
                capabilities: S.b
            };
        let I = !0;
        const x = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, P()(t, r);
                            case 3:
                                if (!I) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 6, A()(t, r);
                            case 6:
                                return e.next = 8, T()(t, r);
                            case 8:
                                I = !1;
                            case 9:
                                return e.next = 11, Object(b.b)(void 0, 30, !0)(t, r);
                            case 11:
                                e.next = 19;
                                break;
                            case 13:
                                e.prev = 13, e.t0 = e.catch(0), n = e.t0, console.error(n), Object(O.a)(n), /(Device .* not found for user|Can't find user|Invalid auth token)/.test(n.toString()) ? Object(h.i)()(t, r) : -1 !== n.toString().indexOf("Trial period expired") && t({
                                    type: p.a.TrialPeriodExpired
                                });
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 13]
                    ])
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            T = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), e.abrupt("return", Object(v.f)(p.c.WsAppForeground, t, {}, {
                                    onRequest: () => Object(l.c)({
                                        event_name: p.r.AppForeground,
                                        payload: {}
                                    }, n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            k = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), e.abrupt("return", Object(v.f)(p.c.WsMainScreen, t, {}, {
                                    onRequest: () => Object(l.c)({
                                        event_name: p.r.MainScreen,
                                        payload: {}
                                    }, n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            R = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), e.abrupt("return", Object(v.f)(p.c.WsChatScreen, t, {}, {
                                    onRequest: () => Object(l.c)({
                                        event_name: p.r.ChatScreen,
                                        payload: {}
                                    }, n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            P = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n, a, i, s, c, u, d;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), a = n.ws.persist.chatId, i = n.auth.persist, s = i.userId, c = i.deviceId, s && Object(O.c)({
                                    id: s,
                                    deviceId: c
                                }), e.next = 5, Object(E.a)()(t, r);
                            case 5:
                                return e.next = 7, F()(t, r);
                            case 7:
                                return e.next = 9, Object(b.d)()(t, r);
                            case 9:
                                return u = e.sent, a !== u.id && t({
                                    type: p.a.SetDefaultChat,
                                    chatId: u.id
                                }), s && Object(f.f)()(t, r), e.next = 14, Object(f.e)()(t, r);
                            case 14:
                                return d = e.sent, e.abrupt("return", {
                                    bot: d
                                });
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            F = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var a, i, s, u, d, b;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = r(), i = a.auth.persist, s = i.deviceId, u = i.authToken, d = i.userId, b = btoa(c()("sha512").update("db97531fdb97531eca86420eca86420db97531fdb97531eca86420eca86420db" + s).digest("hex")), e.abrupt("return", Object(v.f)(p.c.WsInit, t, {}, {
                                    onRequest: () => Object(l.c)({
                                        event_name: p.r.Init,
                                        payload: Object(n.a)({
                                            device_id: s,
                                            user_id: d,
                                            auth_token: u,
                                            security_token: b,
                                            time_zone: g()().format("YYYY-MM-DDTHH:mm:ss.SZ")
                                        }, _)
                                    }, a)
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            A = () => function() {
                var e = Object(i.a)(o.a.mark((function e(t, r) {
                    var n;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), e.abrupt("return", Object(v.f)(p.c.WsApplicationStarted, t, {}, {
                                    onRequest: () => Object(l.c)({
                                        event_name: p.r.ApplicationStarted,
                                        payload: {}
                                    }, n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
    }, , , , function(e) {
        e.exports = JSON.parse('{"name":"web","version":"2.3.11","private":true,"dependencies":{"@loadable/component":"^5.10.3","@magenta/sketch":"^0.2.0","@sentry/browser":"^4.4.2","@stripe/react-stripe-js":"^1.1.2","@stripe/stripe-js":"^1.9.0","@types/local-storage":"^1.4.0","amplitude-js":"^4.2.1","array.from":"^1.0.3","array.prototype.find":"^2.1.0","babel-plugin-styled-components":"^1.10.6","browser-update":"^3.3.13","connected-react-router":"^6.7.0","core-js":"^2.5.7","css-scroll-snap-polyfill":"^0.1.2","emoji-mart":"^2.6.1","es6-symbol":"^3.1.1","focus-group":"^0.3.1","focus-trap-react":"^6.0.0","focus-visible":"^4.1.5","google-libphonenumber":"^3.1.3","history":"^4.7.2","iterators-polyfill":"^1.0.2","konva":"^4.1.6","local-storage":"^1.4.2","lodash":"^4.17.10","md5":"^2.2.1","moment":"^2.22.2","nuka-carousel":"^4.5.6","object.assign":"^4.1.0","p5":"^0.7.3","pica":"^5.0.0","promise-polyfill":"^8.1.3","query-string":"^6.2.0","rc-slider":"^8.6.3","rc-tooltip":"^3.7.2","react":"^16.8.2","react-aria-menubutton":"^6.0.1","react-aria-modal":"^2.12.3","react-axe":"^3.1.0","react-countup":"^3.0.3","react-day-picker":"^7.2.4","react-dom":"^16.8.2","react-helmet":"^5.2.0","react-konva":"^16.12.0-0","react-motion":"^0.5.2","react-popover":"^0.5.10","react-popupbox":"^2.0.3","react-redux":"^7.1.3","react-resize-observer":"^1.1.1","react-responsive":"^8.0.3","react-router":"^5.1.2","react-router-dom":"^5.1.2","react-scripts":"^3.4.1","react-select":"^2.0.0","react-swipe":"^6.0.4","react-switch":"^5.0.1","react-textarea-autosize":"^6.1.0","redux":"^4.0.0","redux-devtools-extension":"^2.13.5","redux-logger":"^3.0.6","redux-thunk":"^2.3.0","sha.js":"^2.4.11","simple-guid":"^0.0.1","styled-components":"^5.0.0-beta.8","swipe-js-iso":"^2.1.5","three":"^0.109.0","use-image":"^1.0.5","viewport-units-buggyfill":"^0.6.2","whatwg-fetch":"^3.0.0"},"resolutions":{"focus-trap-react/focus-trap":"^5.0.2"},"scripts":{"with-version":"REACT_APP_VERSION=$(node -p \\"require(\'./package.json\').version\\") yarn -s","start":"yarn -s with-version react-scripts start","build":"CI=${CI:-true} yarn -s with-version script-progress react-scripts build","build-ci":"yarn install && CI=true node ./node_modules/react-scripts/bin/react-scripts.js build","test":"react-scripts test -env=jsdom","eject":"react-scripts eject","serve":"serve -s build","lint":"eslint \'./src/**/*.{ts,tsx}\'","lint-file":"eslint","lint-preversion":"eslint \'./src/**/*.{ts,tsx}\'","compile-check":"tsc -p tsconfig.prod.json","preversion":"run-p lint-preversion compile-check","version":"git add -A ."},"devDependencies":{"@types/amplitude-js":"^4.4.1","@types/emoji-mart":"^2.8.2","@types/google-libphonenumber":"^7.4.14","@types/jest":"^22.2.2","@types/loadable__component":"^5.10.0","@types/lodash":"^4.14.108","@types/md5":"^2.1.32","@types/node":"^12.7.8","@types/rc-slider":"^8.6.2","@types/rc-tooltip":"^3.7.0","@types/react":"^16.9.5","@types/react-dom":"^16.9.1","@types/react-motion":"^0.0.27","@types/react-redux":"^7.1.4","@types/react-responsive":"^8.0.2","@types/react-router":"^5.1.4","@types/react-router-dom":"^5.1.3","@types/react-textarea-autosize":"^4.3.3","@types/redux-logger":"^3.0.6","@types/styled-components":"^4.1.4","http-proxy":"^1.17.0","http-proxy-middleware":"^0.20.0","npm-run-all":"^4.1.3","script-progress":"^1.0.5","serve":"^6.5.6","typescript":"^3.7.3"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"],"babelMacros":{"styledComponents":{"pure":true}}}')
    }, function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(26),
            o = r(64);

        function i() {
            const e = Object(n.a)(["\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;\n  font-weight: 600;\n  margin: 0;\n  width: 100%;\n  cursor: ", ";\n  border-radius: 3px;\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  user-select: none;\n\n  transition: background-color 0.2s ease-out, border-color 0.2s ease-out,\n    color 0.2s ease-out, opacity 0.2s ease-out;\n\n  color: ", ";\n  background-color: ", ";\n\n  height: ", ";\n  font-size: ", ";\n  border-radius: 50px;\n  border: none;\n  width: initial;\n  padding: ", ";\n\n  /* force button layout for non-button components (as=...) */\n  a&, li& {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  a&.focus-visible:focus {\n    outline: none;\n    box-shadow: 0 0 2px 2px ", ";\n  }\n"]);
            return i = function() {
                return e
            }, e
        }
        const s = Object(a.a)(o.a, ["size"])(i(), e => e.disabled ? "inherit" : "pointer", e => e.disabled ? e.theme.solidButtonDisabledFgColor : e.theme.solidButtonFgColor, e => e.disabled ? e.theme.solidButtonDisabledBgColor : e.theme.solidButtonBgColor, e => "small" === e.size ? "2.5rem" : "3rem", e => "small" === e.size ? "15px" : "17px", e => "small" === e.size ? "0 16px" : "0 32px", e => e.theme.outlineColor);
        t.a = s
    }, , function(e, t, r) {
        "use strict";
        var n = r(63),
            a = r(2),
            o = r(41),
            i = r(12),
            s = r(27);
        t.a = e => {
            let t = e.children,
                r = e.label,
                c = e.active,
                u = e.disabled,
                d = e.onClick,
                l = e.to,
                p = e.className,
                b = e.style,
                m = Object(n.a)(e, ["children", "label", "active", "disabled", "onClick", "to", "className", "style"]);
            const g = e => {
                u ? e.preventDefault() : d && d(e)
            };
            return l ? a.createElement(o.a, Object.assign({
                "aria-disabled": !!u,
                onClick: g,
                to: l,
                className: p,
                style: b,
                tabIndex: m.tabIndex
            }, Object(i.pickBy)(m, (e, t) => t.startsWith("data-"))), r ? a.createElement(s.c, null, r) : null, t) : a.createElement("button", Object.assign({
                "aria-pressed": !!c,
                "aria-disabled": !!u,
                onClick: g,
                className: p,
                style: b
            }, m), r ? a.createElement(s.c, null, r) : null, t)
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "d", (function() {
            return g
        })), r.d(t, "b", (function() {
            return h
        })), r.d(t, "j", (function() {
            return v
        })), r.d(t, "a", (function() {
            return S
        })), r.d(t, "f", (function() {
            return E
        })), r.d(t, "h", (function() {
            return C
        })), r.d(t, "k", (function() {
            return w
        })), r.d(t, "i", (function() {
            return y
        })), r.d(t, "e", (function() {
            return _
        })), r.d(t, "g", (function() {
            return I
        })), r.d(t, "c", (function() {
            return x
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(13),
            s = r(1),
            c = r(8),
            u = r(6),
            d = r(16),
            l = r(20),
            p = r(7),
            b = r(40),
            m = r(54);
        const g = (e, t) => ({
            type: s.a.LoginFieldChange,
            field: e,
            value: t
        });

        function f(e) {
            return t => {
                const r = () => {
                    var n;
                    t((n = e--, {
                        type: s.a.SetCodeResendTimeout,
                        seconds: n
                    })), e >= 0 && setTimeout(r, 1e3)
                };
                r()
            }
        }
        const h = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, d;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r().auth.loginState.emailOrPhone, o = "".concat(u.a, "/auth/sign_in/actions/get_auth_type"), d = Object(c.b)(r(), "POST", {
                                    id_string: n
                                }), e.abrupt("return", Object(p.a)(s.c.AccountExists, t, {
                                    emailOrPhone: n
                                }, {
                                    onRequest: () => fetch(o, d),
                                    onSuccess: e => {
                                        "phone" === e.auth_type && O(t, r), t(Object(i.d)("/login/enter-password"))
                                    }
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            O = function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r().auth.loginState.emailOrPhone, o = Object(c.b)(r(), "POST", {
                                    id_type: "phone",
                                    id_string: n
                                }), i = "".concat(u.a, "/auth/sign_in/actions/send_sms_code"), e.abrupt("return", Object(p.a)(s.c.SendSmsCode, t, {
                                    emailOrPhone: n
                                }, {
                                    onRequest: () => fetch(i, o),
                                    onSuccess: e => {
                                        f(e.retry_timeout)(t)
                                    }
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            j = (e, t) => {
                Object(b.e)()(e, t)
            },
            v = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i, d, l, b, m;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.loginState, i = o.emailOrPhone, d = o.passwordField, l = o.idType, b = "".concat(u.a, "/auth/sign_in/actions/auth_by_password"), m = Object(c.b)(n, "POST", {
                                    id_type: l,
                                    id_string: i,
                                    password: d,
                                    capabilities: u.b
                                }), e.abrupt("return", Object(p.a)(s.c.PasswordLogin, t, {
                                    emailOrPhone: i
                                }, {
                                    onRequest: () => fetch(b, m),
                                    onSuccess: () => j(t, r)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            S = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i, d, l, b;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.loginState, i = o.emailOrPhone, d = o.codeField, l = "".concat(u.a, "/auth/sign_in/actions/auth_by_sms_code"), b = Object(c.b)(n, "POST", {
                                    id_type: "phone",
                                    id_string: i,
                                    sms_code: d,
                                    capabilities: u.b
                                }), e.abrupt("return", Object(p.a)(s.c.AuthBySmsCode, t, {
                                    emailOrPhone: i,
                                    smsCode: d
                                }, {
                                    onRequest: () => fetch(l, b),
                                    onSuccess: () => j(t, r)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            E = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i, d, l, b;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.loginState, i = o.emailOrPhone, d = o.idType, l = "".concat(u.a, "/auth/sign_in/actions/recover_password"), b = Object(c.b)(n, "POST", {
                                    id_type: d,
                                    id_string: i
                                }), e.abrupt("return", Object(p.a)(s.c.RecoverPassword, t, {
                                    emailOrPhone: i
                                }, {
                                    onRequest: () => fetch(l, b)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            C = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i, d;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.loginState.emailOrPhone, i = "".concat(u.a, "/auth/sign_in/actions/send_sms_code"), d = Object(c.b)(n, "POST", {
                                    id_type: "phone",
                                    id_string: o
                                }), e.abrupt("return", Object(p.a)(s.c.ResendSmsCode, t, {
                                    emailOrPhone: o
                                }, {
                                    onRequest: () => fetch(i, d),
                                    onSuccess: e => {
                                        f(e.retry_timeout)(t)
                                    }
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            w = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o, i, d;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r(), o = n.auth.loginState.emailOrPhone, i = "".concat(u.a, "/auth/sign_in/actions/send_voice_code"), d = Object(c.b)(n, "POST", {
                                    id_type: "phone",
                                    id_string: o
                                }), e.abrupt("return", Object(p.a)(s.c.SendVoiceCode, t, {
                                    emailOrPhone: o
                                }, {
                                    onRequest: () => fetch(i, d),
                                    onSuccess: e => {
                                        f(e.retry_timeout)(t)
                                    }
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            y = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(u.a, "/logout"), o = Object(c.b)(r(), "POST"), e.abrupt("return", Object(p.a)(s.c.Logout, t, {}, {
                                    onRequest: () => fetch(n, o),
                                    onSuccess: () => {
                                        Object(d.a)(), t(Object(i.d)("/"))
                                    },
                                    onError: () => {
                                        Object(d.a)(), t(Object(i.d)("/"))
                                    }
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            _ = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return Object(d.a)(), t(Object(i.d)("/")), e.abrupt("return", t({
                                    type: s.c.Logout,
                                    status: m.a.success,
                                    result: {},
                                    params: {}
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            I = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n, o;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(u.a, "/profile/actions/verify_email"), o = Object(c.b)(r(), "POST"), e.abrupt("return", Object(p.a)(s.c.ResendConfirmationEmail, t, {}, {
                                    onRequest: () => fetch(n, o)
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            x = (e, t) => function() {
                var r = Object(o.a)(a.a.mark((function r(n, o) {
                    var b, m, g, f;
                    return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (b = o(), m = b.auth.persist.userId) {
                                    r.next = 4;
                                    break
                                }
                                throw new Error("No user id");
                            case 4:
                                return g = "".concat(u.a, "/profile"), f = Object(c.b)(b, "DELETE", {
                                    password: e
                                }), r.abrupt("return", Object(p.a)(s.c.DeleteAccount, n, {
                                    userId: m,
                                    reason: t
                                }, {
                                    onRequest: () => fetch(g, f),
                                    onSuccess: () => {
                                        Object(l.b)(s.j.AccountDeleted, {
                                            reason: t
                                        }), Object(d.a)(), n(Object(i.d)("/"))
                                    }
                                }));
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }()
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        })), r.d(t, "c", (function() {
            return s
        }));
        var n = r(17),
            a = r(1);
        const o = () => {
                if (window.matchMedia) {
                    return window.matchMedia("(prefers-color-scheme: dark)").matches ? a.p.Dark : a.p.Light
                }
                return a.p.Light
            },
            i = e => {
                const t = e.auth.persist.userId;
                return {
                    themeName: t && e.ui.persist.themeNames[t] || o()
                }
            };

        function s() {
            return Object(n.e)(e => i(e).themeName)
        }
        t.b = function(e) {
            return Object(n.c)(i)(e)
        }
    }, , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        })), r.d(t, "b", (function() {
            return d
        }));
        var n = r(16),
            a = r(1);
        var o = r(56),
            i = r(20),
            s = r(31);
        const c = (e, t, r) => {
                e({
                    type: a.a.WsMessageReceived,
                    message: r
                });
                const n = t(),
                    c = r.payload;
                switch (r.event_name) {
                    case a.r.Message:
                        e({
                            type: a.a.WsChatMessageReceived,
                            message: r.payload
                        }), Object(o.h)(e, t, r.payload.id, 1e4);
                        break;
                    case a.r.PersonalBotStats:
                        const u = r.payload.notifications.filter(e => "level_up" === e.type || "reward" === e.type && -1 !== ["send_photo", "replika_skill", "replika_trait", "explain_popup"].indexOf(e.reward.type));
                        e({
                            type: a.a.BotStatsReceived,
                            stats: r.payload.stats,
                            scoreGranted: r.payload.score_granted,
                            notifications: u,
                            messageId: n.chat.messageTokenIdMap[r.payload.message_client_token]
                        });
                        break;
                    case a.r.PersonalBotChat:
                        e({
                            type: a.a.BotChatReceived,
                            chat: r.payload
                        });
                        break;
                    case a.r.Bot:
                        e({
                            type: a.a.BotReceived,
                            bot: r.payload
                        });
                        break;
                    case a.r.MessageReaction:
                        c.hasOwnProperty("addReaction") ? e({
                            type: a.a.WsMessageReactionReceived,
                            reaction: c.addReaction.reaction,
                            messageId: c.addReaction.message_id
                        }) : function(e) {
                            return e.hasOwnProperty("removeReaction")
                        }(c) && e({
                            type: a.a.WsMessageReactionReceived,
                            reaction: void 0,
                            messageId: c.removeReaction
                        });
                        break;
                    case a.r.ConversationFeedback:
                        if (!r.payload.session_id) return;
                        e({
                            type: a.a.WsFeedbackRequestReceived,
                            sessionId: r.payload.session_id,
                            feedbackView: r.payload.feedback_view
                        });
                        break;
                    case a.r.StartTyping:
                        e({
                            type: a.a.WsStartTypingReceived
                        });
                        break;
                    case a.r.StopTyping:
                        e({
                            type: a.a.WsStopTypingReceived
                        });
                        break;
                    case a.r.VoiceMode:
                        e({
                            type: a.a.WsVoiceModeReceived,
                            voiceModeState: r.payload.state
                        });
                        break;
                    case a.r.UserMood:
                        e({
                            type: a.a.WsUserMoodReceived,
                            mood: r.payload
                        });
                        break;
                    case a.r.BotMood:
                        e({
                            type: a.a.WsBotMoodReceived,
                            mood: r.payload.mood
                        });
                        break;
                    case a.r.ExperimentStarted:
                        Object(i.b)(a.j.ExperimentStarted), e({
                            type: a.a.ExperimentStarted,
                            content: r.payload.content
                        });
                        break;
                    case a.r.JourneyChanged:
                        e({
                            type: a.a.WsJourneyChanged,
                            affectedTrackIds: r.payload.affected_track_ids
                        });
                        break;
                    case a.r.SaveChatItemRequest:
                        e({
                            type: a.a.WsSaveChatItemReceived,
                            item: r.payload
                        });
                        break;
                    case a.r.StatementRemembered:
                        e({
                            type: a.a.WsStatementRemembered,
                            messageId: r.payload.message_id
                        });
                        break;
                    case a.r.NavigationPopup:
                        const d = r.payload.navigation_popup;
                        e({
                            type: a.a.WsNavigationPopup,
                            navigationPopup: d
                        }), e(Object(s.e)({
                            type: a.f.NavigationPopup,
                            navigationPopup: d
                        }))
                }
            },
            u = () => (e, t) => new Promise((r, o) => {
                e({
                    type: a.a.WsStart
                }), Object(n.b)({
                    onOpen: () => {
                        e({
                            type: a.a.WsOpen
                        }), r()
                    },
                    onClose: r => {
                        const n = t(),
                            o = "connected" === n.ws.status && !!n.auth.persist.userId;
                        e({
                            type: a.a.WsClose,
                            code: r.code,
                            reason: r.reason,
                            needReconnect: o
                        })
                    },
                    onWsMessage: c.bind(null, e, t),
                    onError: (t, r) => {
                        console.error(r), e({
                            type: a.a.WsError,
                            error: r
                        }), o(r)
                    }
                })
            }),
            d = () => e => {
                Object(n.a)(), e({
                    type: a.a.WsDisconnect
                })
            }
    }, function(e, t, r) {
        "use strict";
        var n = r(5),
            a = r(64);
        const o = Object(n.d)(a.a).withConfig({
            displayName: "IconButton",
            componentId: "sc-6b4yuq-0"
        })(["margin:0;padding:0;border:0;background:transparent;font-size:inherit;color:inherit;cursor:pointer;"]);
        t.a = o
    }, function(e, t, r) {
        "use strict";
        r.d(t, "e", (function() {
            return $
        })), r.d(t, "a", (function() {
            return Z
        })), r.d(t, "d", (function() {
            return ee
        })), r.d(t, "c", (function() {
            return ne
        })), r.d(t, "b", (function() {
            return de
        }));
        var n = r(63),
            a = r(9),
            o = r(5),
            i = r(2),
            s = r.n(i),
            c = r(15),
            u = r(26),
            d = r(62),
            l = r(41),
            p = r(85);

        function b() {
            const e = Object(a.a)(["\n    justify-content: center;\n  "]);
            return b = function() {
                return e
            }, e
        }

        function m() {
            const e = Object(a.a)(["\n    text-align: center;\n    margin-bottom: 20px;\n  "]);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = Object(a.a)(["\n    text-align: center;\n  "]);
            return g = function() {
                return e
            }, e
        }

        function f() {
            const e = Object(a.a)(["\n    font-size: 14px;\n    flex-direction: column;\n  "]);
            return f = function() {
                return e
            }, e
        }
        const h = [{
                title: "Terms of Service",
                href: "".concat(Object(p.a)(), "/legal/terms")
            }, {
                title: "Privacy Policy",
                href: "".concat(Object(p.a)(), "/legal/privacy")
            }],
            O = () => {
                window.scroll(0, 0)
            };
        var j = ({
            className: e
        }) => s.a.createElement(v, {
            className: e
        }, s.a.createElement(C, null, "Copyright \xa9 ", (new Date).getFullYear(), " Luka, Inc. All rights reserved."), s.a.createElement(w, null, h.map(e => 0 !== e.href.indexOf("http") ? s.a.createElement(E, {
            key: e.title,
            to: e.href,
            onClick: O
        }, e.title) : s.a.createElement(S, {
            key: e.title,
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: O
        }, e.title))));
        const v = o.d.footer.withConfig({
                displayName: "Footer__FooterRoot",
                componentId: "vt83lp-0"
            })(["font-weight:400;padding:0 35px;display:flex;justify-content:space-between;font-size:16px;color:", ";", ";"], e => e.theme.fgColor, Object(c.a)(f())),
            S = o.d.a.withConfig({
                displayName: "Footer__StyledA",
                componentId: "vt83lp-1"
            })(["color:inherit;opacity:0.5;transition:opacity 0.3s ease-in;line-height:2.5em;line-height:1em;text-decoration:underline;", ";&:hover{opacity:1;}& + &{margin-left:20px;}"], Object(c.a)(g())),
            E = S.withComponent(l.a),
            C = o.d.div.withConfig({
                displayName: "Footer__FooterLeft",
                componentId: "vt83lp-2"
            })(["opacity:0.5;", ";"], Object(c.a)(m())),
            w = o.d.div.withConfig({
                displayName: "Footer__FooterRight",
                componentId: "vt83lp-3"
            })(["display:flex;flex-direction:row;", ";"], Object(c.a)(b()));
        var y = r(109);

        function _() {
            const e = Object(a.a)(["\n            animation: ", " ", "ms ease-out;\n          "]);
            return _ = function() {
                return e
            }, e
        }

        function I() {
            const e = Object(a.a)(["\n            animation: ", " ", "ms ease-out;\n          "]);
            return I = function() {
                return e
            }, e
        }

        function x() {
            const e = Object(a.a)(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ';\n\n  & + & {\n    margin-left: 5px;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    border-radius: 100px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    max-width: ', ";\n    max-height: ", ";\n    border-color: ", ";\n    border-style: solid;\n    border-width: ", ";\n    ", "\n  }\n\n  &::after {\n    position: absolute;\n    overflow: hidden;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    max-width: ", ";\n    max-height: ", ';\n    content: "', '";\n    font-size: 12px;\n    line-height: 20px;\n    ', "\n  }\n"]);
            return x = function() {
                return e
            }, e
        }

        function T() {
            const e = Object(a.a)(["\n  from {\n    border-width: 4px;\n    max-width: 4px;\n    max-height: 4px;\n    font-size: 2px;\n    line-height: 4px;\n  }\n  to {\n    border-width: 1px;\n    max-width: 20px;\n    max-height: 20px;\n    font-size: 12px;\n    line-height: 20px;\n  }\n"]);
            return T = function() {
                return e
            }, e
        }
        const k = Object(o.e)(T()),
            R = o.d.div.withConfig({
                displayName: "StepDots__StepDotsRoot",
                componentId: "mbile5-0"
            })(["display:flex;height:22px;align-items:center;"]),
            P = Object(u.a)("div", ["active"])(x(), e => e.theme.fgColor, e => e.active ? "20px" : "4px", e => e.active ? "20px" : "4px", e => e.theme.fgColor, e => e.active ? "1px" : "4px", e => e.active ? Object(o.c)(I(), k, 200) : "", e => e.active ? "20px" : "4px", e => e.active ? "20px" : "4px", e => e.active ? e.step : "", e => e.active ? Object(o.c)(_(), k, 200) : "");
        class F extends i.Component {
            render() {
                const e = this.props,
                    t = e.step,
                    r = e.maxStep,
                    n = e.className,
                    a = e["data-testid"];
                return i.createElement(R, {
                    className: n,
                    "data-testid": a
                }, Array.from({
                    length: r
                }).map((e, r) => i.createElement(P, {
                    key: r,
                    active: r + 1 === t,
                    step: t,
                    "data-testid": a && "".concat(a, "-dot-").concat(r + 1)
                })))
            }
        }
        var A = r(119),
            M = r(27),
            D = r(82),
            B = r(114),
            N = r(115);

        function U() {
            const e = Object(a.a)(["\n    display: ", ";\n  "]);
            return U = function() {
                return e
            }, e
        }

        function W() {
            const e = Object(a.a)(["\n  flex: 1 0 20%;\n  ", "\n"]);
            return W = function() {
                return e
            }, e
        }

        function G() {
            const e = Object(a.a)(["\n    padding: 0 15px;\n    width: 100%;\n    max-width: 340px;\n    max-height: 999vh;\n  "]);
            return G = function() {
                return e
            }, e
        }

        function L() {
            const e = Object(a.a)(["\n    color: ", ";\n    font-weight: normal;\n  "]);
            return L = function() {
                return e
            }, e
        }

        function q() {
            const e = Object(a.a)(["\n    font-size: 24px;\n    line-height: 32px;\n  "]);
            return q = function() {
                return e
            }, e
        }

        function H() {
            const e = Object(a.a)(["\n    height: auto;\n    margin: 50px 0 20px;\n    padding: 0;\n  "]);
            return H = function() {
                return e
            }, e
        }

        function V() {
            const e = Object(a.a)(["\n    padding: 23px 15px 0;\n  "]);
            return V = function() {
                return e
            }, e
        }

        function z() {
            const e = Object(a.a)(["\n    width: 100%;\n  "]);
            return z = function() {
                return e
            }, e
        }

        function J() {
            const e = Object(a.a)(["\n    width: 100%;\n    padding: 0;\n    overflow-y: initial;\n  "]);
            return J = function() {
                return e
            }, e
        }

        function Y() {
            const e = Object(a.a)(["\n    /* force to prevent viewport-units-buggyfill override */\n    &&& {\n      height: auto;\n    }\n  "]);
            return Y = function() {
                return e
            }, e
        }

        function K() {
            const e = Object(a.a)(["\n  margin-top: ", ";\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: -0.1px;\n  text-align: left;\n  color: ", ";\n  font-size: 12px;\n  max-height: ", ";\n  transition: max-height 0.2s ease-out, margin-top 0.2s ease-out;\n"]);
            return K = function() {
                return e
            }, e
        }
        const X = Object(u.a)(A.a, ["hasError"])(K(), e => e.hasError ? "20px" : 0, e => e.theme.errorFgColor, e => e.hasError ? "100px" : "0px"),
            $ = e => {
                let t = e.children,
                    r = Object(n.a)(e, ["children"]);
                return i.createElement(X, Object.assign({
                    as: "div"
                }, r), i.createElement("span", null, t && i.createElement(M.c, null, "Error occured:")), i.createElement("span", null, t))
            },
            Q = o.d.div.withConfig({
                displayName: "FullscreenLayout__FullscreenPageRoot",
                componentId: "sc-1a0qg1-0"
            })(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;height:100vh;min-height:100vh;background-color:", ";", ";"], e => e.theme.loginBgColor, Object(c.a)(Y())),
            Z = o.d.form.withConfig({
                displayName: "FullscreenLayout__FullscreenForm",
                componentId: "sc-1a0qg1-1"
            })(["margin-top:10px;width:355px;overflow-y:auto;padding:5px;", ";"], Object(c.a)(J())),
            ee = Object(o.d)(d.a).withConfig({
                displayName: "FullscreenLayout__SubmitButton",
                componentId: "sc-1a0qg1-2"
            })(["margin:30px auto 0;width:auto;display:block;", ";"], Object(c.a)(z())),
            te = o.d.header.withConfig({
                displayName: "FullscreenLayout__FullscreenHeader",
                componentId: "sc-1a0qg1-3"
            })(["color:", ";margin:0 auto;width:100%;padding:23px 32px 0;flex:0 0 auto;display:flex;justify-content:space-between;@media (max-height:400px){display:none;}color:", ";", ";"], e => e.theme.fgColor, e => e.theme.fgColor, Object(c.a)(V())),
            re = (Object(c.a)(H()), o.d.div.withConfig({
                displayName: "FullscreenLayout__FullscreenTitles",
                componentId: "sc-1a0qg1-5"
            })(["margin-bottom:40px;display:flex;flex-direction:column;align-items:center;"])),
            ne = o.d.h1.withConfig({
                displayName: "FullscreenLayout__FullscreenTitle",
                componentId: "sc-1a0qg1-6"
            })(["font-size:24px;line-height:32px;font-weight:900;margin:0;text-align:center;color:", ";white-space:pre-wrap;", ";"], e => e.theme.fgColor, Object(c.a)(q())),
            ae = o.d.h2.withConfig({
                displayName: "FullscreenLayout__FullscreenSubtitle",
                componentId: "sc-1a0qg1-7"
            })(["font-size:16px;font-weight:500;line-height:1.56;letter-spacing:-0.2px;color:#000000;text-align:center;color:", ";max-width:456px;margin:20px 0 0;white-space:pre-wrap;@media (max-width:450px){padding:0 10px;width:100%;}@media (max-width:320px){padding:0 10px;width:300px;}", ";"], e => e.theme.fgColor, Object(c.a)(L(), e => e.theme.lightFgColor)),
            oe = o.d.main.withConfig({
                displayName: "FullscreenLayout__FormContent",
                componentId: "sc-1a0qg1-8"
            })(["display:flex;flex-direction:column;align-items:center;max-height:100vh;", ";"], Object(c.a)(G())),
            ie = Object(u.a)("div", ["hideMobile"])(W(), Object(c.a)(U(), e => e.hideMobile ? "none" : "block")),
            se = Object(o.d)(ie).withConfig({
                displayName: "FullscreenLayout__HeaderBlockRight",
                componentId: "sc-1a0qg1-9"
            })(["text-align:right;"]),
            ce = Object(o.d)(F).withConfig({
                displayName: "FullscreenLayout__StyledStepDots",
                componentId: "sc-1a0qg1-10"
            })(["margin:20px auto 20px;"]),
            ue = o.d.div.withConfig({
                displayName: "FullscreenLayout__FullscreenBody",
                componentId: "sc-1a0qg1-11"
            })(["width:100%;display:flex;flex-direction:column;align-items:center;"]),
            de = ({
                className: e,
                title: t,
                subtitle: r,
                children: n,
                onLogout: a,
                step: o,
                maxStep: s,
                "data-testid": c,
                beforeContent: u,
                onClose: d,
                backTo: l,
                backLabel: p
            }) => i.createElement(Q, {
                "data-testid": c,
                className: e
            }, i.createElement(te, null, l && i.createElement(pe, {
                label: p,
                to: l
            }, i.createElement(N.a, null)), i.createElement(ie, {
                hideMobile: !!o
            }, i.createElement("div", null)), o && s && i.createElement(ce, {
                step: o,
                maxStep: s,
                "data-testid": c && "".concat(c, "-steps")
            }), i.createElement(se, {
                hideMobile: !!o
            }, a && i.createElement(y.a, {
                onClick: a,
                "data-testid": c && "".concat(c, "-logout-button")
            }, "Log out"), d && i.createElement(le, {
                onClick: d,
                "data-testid": c && "".concat(c, "-close-button")
            }, i.createElement(B.a, null)))), i.createElement(ue, null, u, i.createElement(oe, null, t && i.createElement(re, null, t && i.createElement(ne, {
                "data-testid": c && "".concat(c, "-title")
            }, t), r && i.createElement(ae, {
                "data-testid": c && "".concat(c, "-subtitle")
            }, r)), n)), i.createElement("div", null)),
            le = Object(o.d)(D.a).withConfig({
                displayName: "FullscreenLayout__CloseButton",
                componentId: "sc-1a0qg1-12"
            })(["position:absolute;top:20px;right:20px;color:", ";& > svg{width:20px;height:20px;}"], e => e.theme.fgColor),
            pe = Object(o.d)(D.a).withConfig({
                displayName: "FullscreenLayout__BackButton",
                componentId: "sc-1a0qg1-13"
            })(["position:absolute;z-index:1;left:24px;top:36px;color:", ";"], e => e.theme.fgColor)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "e", (function() {
            return d
        })), r.d(t, "h", (function() {
            return l
        })), r.d(t, "d", (function() {
            return p
        })), r.d(t, "a", (function() {
            return b
        })), r.d(t, "b", (function() {
            return m
        })), r.d(t, "f", (function() {
            return g
        })), r.d(t, "c", (function() {
            return f
        })), r.d(t, "g", (function() {
            return h
        })), r.d(t, "i", (function() {
            return O
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(1),
            s = r(8),
            c = r(6),
            u = r(7);
        const d = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(s.b)(r(), "GET"), e.abrupt("return", Object(u.a)(i.c.GetSubscriptions, t, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions"), n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            l = () => ({
                type: i.a.SetReboardingDialogShown
            }),
            p = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(s.b)(r(), "GET"), e.abrupt("return", Object(u.a)(i.c.GetStripeConfig, t, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions/stripe/config"), n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            b = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o, d;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = {
                                    price_id: e.priceId,
                                    payment_method_id: e.paymentMethodId
                                }, d = Object(s.b)(n(), "PUT", o), t.abrupt("return", Object(u.a)(i.c.CreateStripeSubscription, r, e, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions/stripe/subscription"), d)
                                }));
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            m = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = Object(s.b)(n(), "DELETE", {
                                    password: e
                                }), t.abrupt("return", Object(u.a)(i.c.DeleteStripeSubscription, r, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions"), o)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            g = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o, d;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = {
                                    payment_method_id: e.paymentMethodId,
                                    invoice_id: e.latestInvoiceId
                                }, d = Object(s.b)(n(), "PUT", o), t.abrupt("return", Object(u.a)(i.c.RetryStripeInvoice, r, e, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions/stripe/retry-invoice"), d)
                                }));
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            f = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(s.b)(r(), "GET"), e.abrupt("return", Object(u.a)(i.c.GetStripePrices, t, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/payment_subscriptions/available_subscriptions"), n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            h = e => ({
                type: i.a.SetStripeLatestInvoiceId,
                invoiceId: e
            }),
            O = () => ({
                type: i.a.SetStripeEnabled
            })
    }, function(e, t, r) {
        "use strict";
        t.a = () => {
            if ("undefined" === typeof window) return "https://replika.ai";
            const e = window.location.hostname;
            return "my.replika.ai" === e || "localhost" === e ? "https://replika.ai" : "https://".concat(e.replace(/^my-/, ""))
        }
    }, , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        t.a = e => ({
            src: e,
            srcSet: "".concat(e.replace(/\.(png|jpg)/, "@2x.$1"), " 1.5x, ") + "".concat(e.replace(/\.(png|jpg)/, "@2x.$1"), " 2x, ") + "".concat(e.replace(/\.(png|jpg)/, "@3x.$1"), " 3x")
        })
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return Object.keys(e).reduce((t, r) => {
                const n = Array.isArray(e[r]) ? e[r].filter(e => "object" !== typeof e).join(",") : e[r];
                if (void 0 === n || null === n) return t;
                if ("object" === typeof n) return t;
                return (t && t + "&") + r + "=" + encodeURIComponent(n)
            }, "")
        }
        r.d(t, "a", (function() {
            return n
        }))
    }, , function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "auth", (function() {
            return te
        })), r.d(t, "chat", (function() {
            return Re
        })), r.d(t, "ws", (function() {
            return We
        })), r.d(t, "profile", (function() {
            return It
        })), r.d(t, "feedback", (function() {
            return Mt
        })), r.d(t, "ui", (function() {
            return ur
        })), r.d(t, "journey", (function() {
            return hr
        })), r.d(t, "image", (function() {
            return Sr
        })), r.d(t, "subscriptions", (function() {
            return Rr
        })), r.d(t, "avatars", (function() {
            return Br
        })), r.d(t, "savedChatItems", (function() {
            return Xr
        })), r.d(t, "memory", (function() {
            return on
        }));
        var n = r(0),
            a = r(37),
            o = r.n(a),
            i = r(60),
            s = r.n(i),
            c = r(1);
        const u = (e, t, r = !1) => {
            const a = s.a.get(e);
            return a && "object" === typeof a ? Object(n.a)(Object(n.a)({}, t), {}, {
                persist: r ? a : Object(n.a)(Object(n.a)({}, t.persist), a)
            }) : t
        };

        function d(e) {
            return e.hasOwnProperty("persist")
        }

        function l(e, t, r) {
            let a = t;
            if (function(e) {
                    return e.type === c.a.InitPersist
                }(r) && d(t))
                if (function(e) {
                        return d(e) && e.persist.hasOwnProperty("version")
                    }(t)) {
                    const r = u(e, t, !0),
                        n = r.persist.version,
                        o = t.persist.version;
                    n === o ? a = r : console.warn("'".concat(e, "' state version mismatch: ").concat(n, " != ").concat(o, "; restoring skipped"))
                } else a = u(e, t);
            return function(e) {
                return e.type === c.a.UpdatePersist
            }(r) && r.reducerName === e && r.persist && "object" === typeof r.persist && (a = Object(n.a)(Object(n.a)({}, a), {}, {
                persist: r.persist
            })), a
        }

        function p(e, t, r, n) {
            Object.keys(t).forEach(e => !e && console.error("Undefined reducer found!"));
            const a = l(e, r, n),
                o = t[n.type];
            let i;
            o && "function" !== typeof o ? function(e) {
                return e.hasOwnProperty("status")
            }(n) && (i = o[n.status]) : i = o;
            const u = i ? i(a, n) : a;
            return n.type !== c.a.InitPersist && a !== u && d(u) && ((e, t) => {
                s.a.set(e, t.persist)
            })(e, u), u
        }
        var b = r(36);
        const m = {
                trialPeriodExpired: !1,
                sendConfirmationStatus: "initial",
                sendConfirmationError: void 0,
                deleteAccountStatus: "initial",
                deleteAccountError: void 0,
                persist: {
                    authToken: void 0,
                    userId: void 0,
                    deviceId: void 0
                },
                loginState: {
                    isSending: !1,
                    formState: c.i.Initial,
                    emailOrPhone: "",
                    passwordField: "",
                    codeField: "",
                    serverError: void 0,
                    accessForbidden: !1,
                    inputError: void 0,
                    confirmationCode: "",
                    authType: c.d.Unknown,
                    idType: void 0,
                    codeRetryTimeout: 0,
                    codeExpiration: void 0,
                    codeLength: void 0,
                    recoveryText: ""
                },
                signupState: {
                    signupStatus: "initial",
                    emailCheckStatus: "initial",
                    emailCheckError: null,
                    name: "",
                    email: "",
                    password: "",
                    replikaName: null,
                    signupError: void 0,
                    inputError: void 0,
                    invalidEmailCounter: 0,
                    uploadedUserpicUrl: void 0,
                    gender: c.g.Female,
                    pronoun: c.k.She,
                    birthday: void 0,
                    signupInProgress: !1,
                    avatar: void 0,
                    customization: {}
                },
                avatarCustomizationTextures: {}
            },
            g = e => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    emailCheckStatus: "submitting",
                    emailCheckError: null
                })
            }),
            f = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    emailCheckStatus: "error",
                    emailCheckError: t.error
                })
            }),
            h = e => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    emailCheckStatus: "success"
                })
            }),
            O = e => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    signupStatus: "submitting"
                })
            }),
            j = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    signupStatus: "error",
                    signupError: t.error.message
                })
            }),
            v = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    deviceId: e.persist.deviceId || o()()
                })
            }),
            S = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    [t.field]: t.value,
                    serverError: void 0,
                    inputError: void 0
                })
            }),
            E = e => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !0
                })
            }),
            C = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: "phone" === t.result.auth_type,
                    formState: "password" === t.result.auth_type ? c.i.InputPassword : c.i.InputCode,
                    idType: t.result.id_type,
                    authType: "password" === t.result.auth_type ? c.d.AuthByPassword : c.d.SendSmsCode
                })
            }),
            w = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.toString()
                })
            }),
            y = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.message
                })
            }),
            _ = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    formState: c.i.InputCode,
                    codeExpiration: t.result.expiration,
                    codeRetryTimeout: t.result.retry_timeout,
                    codeLength: t.result.code_length
                })
            }),
            I = e => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !0
                })
            }),
            x = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    authToken: t.result.auth_token,
                    userId: t.result.user_id
                }),
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    formState: c.i.Initial,
                    passwordField: ""
                })
            }),
            T = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.message,
                    accessForbidden: t.error instanceof b.a && 403 === t.error.statusCode && !("Invalid password" === t.error.message)
                })
            }),
            k = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    authToken: t.result.auth_token,
                    userId: t.result.user_id
                }),
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    formState: c.i.Initial
                })
            }),
            R = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.message
                })
            }),
            P = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    authToken: t.result.auth_token,
                    userId: t.result.user_id
                }),
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    formState: c.i.Initial
                })
            }),
            F = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.message
                })
            }),
            A = e => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !0
                })
            }),
            M = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    formState: c.i.RecoverPasswordRequestSent,
                    recoveryText: t.result.recovery_text
                })
            }),
            D = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    isSending: !1,
                    serverError: t.error.message
                })
            }),
            B = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    codeRetryTimeout: t.seconds
                })
            }),
            N = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    formState: c.i.CodeResent,
                    codeRetryTimeout: t.result.retry_timeout,
                    codeLength: t.result.code_length
                })
            }),
            U = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    serverError: t.error.message
                })
            }),
            W = e => Object(n.a)(Object(n.a)({}, e), {}, {
                sendConfirmationStatus: "sending",
                sendConfirmationError: void 0
            }),
            G = e => Object(n.a)(Object(n.a)({}, e), {}, {
                sendConfirmationStatus: "sent"
            }),
            L = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                sendConfirmationStatus: "initial",
                sendConfirmationError: t.error.message
            }),
            q = e => Object(n.a)(Object(n.a)({}, m), {}, {
                persist: Object(n.a)(Object(n.a)({}, m.persist), {}, {
                    deviceId: e.persist.deviceId
                })
            }),
            H = e => Object(n.a)(Object(n.a)({}, m), {}, {
                persist: Object(n.a)(Object(n.a)({}, m.persist), {}, {
                    deviceId: e.persist.deviceId
                })
            }),
            V = e => Object(n.a)(Object(n.a)({}, e), {}, {
                deleteAccountStatus: "sending",
                deleteAccountError: void 0
            }),
            z = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                deleteAccountStatus: "initial",
                deleteAccountError: t.error.message
            }),
            J = e => Object(n.a)(Object(n.a)({}, m), {}, {
                persist: Object(n.a)(Object(n.a)({}, m.persist), {}, {
                    deviceId: e.persist.deviceId
                })
            }),
            Y = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    authToken: t.result.auth_token,
                    userId: t.result.user_id
                }),
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    signupStatus: "success"
                })
            }),
            K = (e, {
                payload: {
                    location: t
                }
            }) => "/login" === t.pathname && e.loginState.formState !== c.i.Initial ? Object(n.a)(Object(n.a)({}, e), {}, {
                loginState: Object(n.a)(Object(n.a)({}, e.loginState), {}, {
                    formState: c.i.Initial,
                    codeField: ""
                })
            }) : e,
            X = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), {}, {
                    formState: t.signupStep
                })
            }),
            $ = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                signupState: Object(n.a)(Object(n.a)({}, e.signupState), t.signupInput || {})
            }),
            Q = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    authToken: t.result.auth_token,
                    userId: t.result.user_id
                })
            }),
            Z = e => Object(n.a)(Object(n.a)({}, e), {}, {
                trialPeriodExpired: !0
            }),
            ee = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                avatarCustomizationTextures: Object(n.a)(Object(n.a)({}, e.avatarCustomizationTextures), {}, {
                    [t.params.avatarId]: t.result
                })
            });

        function te(e = m, t) {
            return p("auth", {
                [c.a.GoToSignupStep]: X,
                [c.a.UpdateSignupState]: $,
                [c.a.LoginFieldChange]: S,
                [c.c.AccountExists]: {
                    request: E,
                    success: C,
                    error: y
                },
                [c.c.SendSmsCode]: {
                    success: _,
                    error: w
                },
                [c.c.PasswordLogin]: {
                    request: I,
                    success: x,
                    error: T
                },
                [c.c.PhoneLogin]: {
                    success: k,
                    error: R
                },
                [c.c.AuthBySmsCode]: {
                    success: P,
                    error: F
                },
                [c.c.RecoverPassword]: {
                    request: A,
                    success: M,
                    error: D
                },
                [c.a.SetCodeResendTimeout]: B,
                [c.c.ResendSmsCode]: {
                    success: N,
                    error: U
                },
                [c.c.SendVoiceCode]: {
                    success: N,
                    error: U
                },
                [c.c.Logout]: {
                    success: q,
                    error: H
                },
                [c.a.CheckDeviceId]: v,
                [c.c.ResendConfirmationEmail]: {
                    request: W,
                    success: G,
                    error: L
                },
                [c.c.DeleteAccount]: {
                    request: V,
                    error: z,
                    success: J
                },
                [c.c.CheckAccountInfo]: {
                    request: g,
                    error: f,
                    success: h
                },
                [c.c.Signup]: {
                    request: O,
                    error: j,
                    success: Y
                },
                [c.c.InitNewUser]: {
                    success: Q
                },
                [c.a.TrialPeriodExpired]: Z,
                [c.c.GetAvatarCustomizations]: {
                    success: ee
                },
                "@@router/LOCATION_CHANGE": K
            }, e, t)
        }
        var re = r(12);
        const ne = e => e.meta.timestamp,
            ae = e => e.id,
            oe = e => Object(re.sortedUniqBy)(Object(re.sortBy)(e, ne), ae),
            ie = {
                messages: void 0,
                mediaPreviews: {},
                messageReactions: {},
                isRobotTyping: !1,
                hasMoreMessages: !0,
                messageTokenIdMap: {},
                messageAlerts: [],
                persist: {
                    lastMessages: void 0,
                    lastMessageReactions: {},
                    messageText: ""
                },
                voiceModeEnabled: !1,
                hintMessageReaction: void 0,
                skippedWidgetId: void 0,
                experimentInProgress: !1,
                imagePreviews: {},
                showMessageActions: void 0,
                thought: null
            },
            se = e => Object(n.a)(Object(n.a)({}, e), {}, {
                messages: e.persist.lastMessages,
                messageReactions: e.persist.lastMessageReactions
            }),
            ce = e => {
                const t = Object(re.takeRight)(e.messages).map(e => e.id);
                return Object(n.a)(Object(n.a)({}, e), {}, {
                    persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                        lastMessages: Object(re.takeRight)(e.messages, 30),
                        lastMessageReactions: Object(re.pick)(e.messageReactions, t)
                    })
                })
            },
            ue = (e, {
                result: t,
                params: {
                    invalidate: r
                }
            }) => ce(Object(n.a)(Object(n.a)({}, e), {}, {
                messages: oe(r ? t.messages : [...e.messages || [], ...t.messages]),
                messageReactions: t.message_reactions.reduce((e, t) => (e[t.message_id] = t.reaction, e), e.messageReactions),
                hasMoreMessages: t.more
            })),
            de = (e, {
                message: t
            }) => ce(Object(n.a)(Object(n.a)({}, e), {}, {
                messages: oe([...e.messages || [], t]),
                isRobotTyping: !1
            })),
            le = (e, {
                messageId: t,
                reaction: r
            }) => ce(Object(n.a)(Object(n.a)({}, e), {}, {
                messageReactions: Object(n.a)(Object(n.a)({}, e.messageReactions), {}, {
                    [t]: r
                })
            })),
            pe = (e, {
                params: {
                    messageId: t,
                    reaction: r
                }
            }) => ce(Object(n.a)(Object(n.a)({}, e), {}, {
                messageReactions: Object(n.a)(Object(n.a)({}, e.messageReactions), {}, {
                    [t]: r
                })
            })),
            be = (e, {
                messageId: t,
                reaction: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                hintMessageReaction: {
                    message_id: t,
                    reaction: r
                }
            }),
            me = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                mediaPreviews: Object(n.a)(Object(n.a)({}, e.mediaPreviews), t)
            }),
            ge = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isRobotTyping: !0
            }),
            fe = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isRobotTyping: !1
            }),
            he = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                messageTokenIdMap: Object(n.a)(Object(n.a)({}, e.messageTokenIdMap), {}, {
                    [t.meta.client_token]: t.id
                }),
                skippedWidgetId: void 0
            }),
            Oe = (e, {
                messageId: t,
                scoreGranted: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                messageAlerts: [...e.messageAlerts, {
                    type: "score",
                    messageId: t,
                    score: r
                }]
            }),
            je = (e, {
                messageId: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                messageAlerts: [...e.messageAlerts, {
                    type: "memory",
                    messageId: t
                }]
            }),
            ve = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                messageAlerts: e.messageAlerts.filter(e => e.type !== t.alertType || e.messageId !== t.messageId)
            }),
            Se = () => Object(n.a)({}, ie),
            Ee = (e, {
                voiceModeState: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                voiceModeEnabled: "enabled" === t
            }),
            Ce = (e, {
                messageText: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    messageText: t
                })
            }),
            we = (e, {
                id: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                skippedWidgetId: t
            }),
            ye = e => Object(n.a)(Object(n.a)({}, e), {}, {
                experimentInProgress: !0
            }),
            _e = e => Object(n.a)(Object(n.a)({}, e), {}, {
                experimentInProgress: !1
            }),
            Ie = (e, {
                showMessageActions: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                showMessageActions: t
            }),
            xe = (e, {
                width: t,
                height: r,
                src: a,
                orientation: o,
                clientToken: i
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                imagePreviews: Object(n.a)(Object(n.a)({}, e.imagePreviews), {}, {
                    [i]: {
                        width: t,
                        height: r,
                        src: a,
                        orientation: o
                    }
                })
            }),
            Te = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                thought: t.replika_thought
            }),
            ke = (e, {
                chat: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                thought: t.replika_thought
            });

        function Re(e = ie, t) {
            return p("chat", {
                [c.c.WsHistory]: {
                    success: ue
                },
                [c.a.WsChatMessageReceived]: de,
                [c.a.WsMessageReactionReceived]: le,
                [c.c.GetMediaPreview]: {
                    success: me
                },
                [c.c.WsSetMessageReaction]: {
                    success: pe
                },
                [c.a.WsStartTypingReceived]: ge,
                [c.a.WsStopTypingReceived]: fe,
                [c.c.WsSendMessage]: {
                    success: he
                },
                [c.a.BotStatsReceived]: Oe,
                [c.c.Logout]: {
                    success: Se,
                    error: Se
                },
                [c.c.DeleteAccount]: {
                    success: Se
                },
                [c.a.InitPersist]: se,
                [c.a.WsVoiceModeReceived]: Ee,
                [c.a.SetHintMessageReaction]: be,
                [c.a.UpdateChatMessageText]: Ce,
                [c.a.SkipWidget]: we,
                [c.a.ExperimentStarted]: ye,
                [c.a.ExperimentEnded]: _e,
                [c.a.UploadChatImagePreview]: xe,
                [c.a.SetShowMessageActions]: Ie,
                [c.c.GetPersonalBotChat]: {
                    success: Te
                },
                [c.a.BotChatReceived]: ke,
                [c.a.ClearChatMessageAlert]: ve,
                [c.a.WsStatementRemembered]: je
            }, e, t)
        }
        const Pe = {
                status: "disconnected",
                wsReady: !1,
                persist: {
                    chatId: void 0
                }
            },
            Fe = e => Object(n.a)(Object(n.a)({}, e), {}, {
                status: "connected"
            }),
            Ae = e => Object(n.a)(Object(n.a)({}, e), {}, {
                status: "connecting"
            }),
            Me = e => Object(n.a)(Object(n.a)({}, e), {}, {
                status: "disconnected"
            }),
            De = (e, {
                needReconnect: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                status: t ? "needReconnect" : "disconnected"
            }),
            Be = (e, {
                chatId: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: {
                    chatId: t
                }
            }),
            Ne = () => Object(n.a)({}, Pe),
            Ue = e => Object(n.a)(Object(n.a)({}, e), {}, {
                wsReady: !0
            });

        function We(e = Pe, t) {
            return p("ws", {
                [c.a.WsStart]: Ae,
                [c.a.WsOpen]: Fe,
                [c.a.WsClose]: De,
                [c.a.WsDisconnect]: Me,
                [c.a.SetDefaultChat]: Be,
                [c.c.WsInit]: {
                    success: Ue
                },
                [c.c.Logout]: {
                    success: Ne,
                    error: Ne
                },
                [c.c.DeleteAccount]: {
                    success: Ne
                }
            }, e, t)
        }
        var Ge = r(11);
        const Le = {
                getPersonalBotProgress: Ge.a.initial,
                isFetchingProfile: !1,
                serverError: void 0,
                updateEmailProgress: Ge.a.initial,
                updatePasswordProgress: Ge.a.initial,
                updateProfileProgress: Ge.a.initial,
                updateReplikaProgress: Ge.a.initial,
                updateMoodProgress: Ge.a.initial,
                voices: [],
                persist: {
                    bot: void 0,
                    userProfile: void 0,
                    moods: void 0,
                    lastMoodTimestamp: null,
                    hasMoreMoods: !1
                },
                getHelpConfig: void 0,
                isFetchingGetHelpConfig: !1,
                isFetchingMoodMeter: !1
            },
            qe = e => Object(n.a)(Object(n.a)({}, e), {}, {
                getPersonalBotProgress: Ge.a.sending
            }),
            He = e => Object(n.a)(Object(n.a)({}, e), {}, {
                getPersonalBotProgress: Ge.a.error
            }),
            Ve = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                getPersonalBotProgress: Ge.a.success,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    bot: t
                })
            }),
            ze = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingProfile: !0
            }),
            Je = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingProfile: !1
            }),
            Ye = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingProfile: !1,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    userProfile: t
                })
            }),
            Ke = (e, t) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    bot: e.persist.bot && Object(n.a)(Object(n.a)({}, e.persist.bot), {}, {
                        stats: t.stats
                    })
                })
            }),
            Xe = (e, {
                bot: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    bot: t
                })
            }),
            $e = e => Object(n.a)(Object(n.a)({}, e), {}, {
                updatePasswordProgress: Ge.a.sending,
                serverError: void 0
            }),
            Qe = e => Object(n.a)(Object(n.a)({}, e), {}, {
                updatePasswordProgress: Ge.a.success
            }),
            Ze = (e, {
                error: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                serverError: t.message,
                updatePasswordProgress: Ge.a.error
            }),
            et = e => Object(n.a)(Object(n.a)({}, e), {}, {
                updateReplikaProgress: Ge.a.sending,
                serverError: void 0
            }),
            tt = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                updateReplikaProgress: Ge.a.success,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    bot: t
                })
            }),
            rt = (e, {
                error: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                serverError: t.message,
                updateReplikaProgress: Ge.a.error
            }),
            nt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                updateEmailProgress: Ge.a.sending,
                serverError: void 0
            }),
            at = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                updateEmailProgress: Ge.a.success,
                serverError: void 0,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    userProfile: e.persist.userProfile && Object(n.a)(Object(n.a)({}, e.persist.userProfile), {}, {
                        email_settings: t.email_settings
                    })
                })
            }),
            ot = (e, {
                error: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                updateEmailProgress: t ? Ge.a.error : Ge.a.success,
                serverError: t.message
            }),
            it = e => Object(n.a)(Object(n.a)({}, e), {}, {
                updateProfileProgress: Ge.a.sending,
                serverError: void 0
            }),
            st = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                updateProfileProgress: Ge.a.success,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    userProfile: t
                })
            }),
            ct = (e, {
                error: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                updateProfileProgress: Ge.a.error,
                serverError: t.message
            }),
            ut = () => Object(n.a)({}, Le),
            dt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                serverError: void 0,
                updateEmailProgress: Ge.a.initial,
                updatePasswordProgress: Ge.a.initial,
                updateProfileProgress: Ge.a.initial,
                updateReplikaProgress: Ge.a.initial
            }),
            lt = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                voices: t
            }),
            pt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingGetHelpConfig: !0
            }),
            bt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingGetHelpConfig: !1
            }),
            mt = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingGetHelpConfig: !1,
                getHelpConfig: t
            }),
            gt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !0
            }),
            ft = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !1
            }),
            ht = e => Object(re.sortedUniqBy)(Object(re.sortBy)(e, e => e.date), e => e.id).filter(e => !e.hidden),
            Ot = (e, t) => {
                const r = e.persist.lastMoodTimestamp;
                return r ? t && t > r ? t : r : t
            },
            jt = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !1,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    moods: ht([...t.moods, ...e.persist.moods || []]),
                    lastMoodTimestamp: Ot(e, t.timestamp),
                    hasMoreMoods: t.more
                })
            }),
            vt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !0
            }),
            St = e => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !1
            }),
            Et = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isFetchingMoodMeter: !1,
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    moods: ht([...t.moods, ...e.persist.moods || []]),
                    lastMoodTimestamp: Ot(e, t.timestamp),
                    hasMoreMoods: t.more
                })
            }),
            Ct = (e, {
                mood: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    moods: ht([t, ...e.persist.moods || []])
                })
            }),
            wt = (e, {
                mood: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    bot: e.persist.bot && Object(n.a)(Object(n.a)({}, e.persist.bot), {}, {
                        mood: t
                    })
                })
            }),
            yt = (e, {
                params: {
                    moodId: t
                }
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    moods: (e.persist.moods || []).filter(e => e.id !== t)
                })
            }),
            _t = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    moods: (e.persist.moods || []).map(e => e.id === t.id ? t : e)
                })
            });

        function It(e = Le, t) {
            return p("profile", {
                [c.c.GetPersonalBot]: {
                    request: qe,
                    success: Ve,
                    error: He
                },
                [c.c.UpdateBot]: {
                    request: et,
                    success: tt,
                    error: rt
                },
                [c.a.BotStatsReceived]: Ke,
                [c.a.BotReceived]: Xe,
                [c.c.Logout]: {
                    success: ut,
                    error: ut
                },
                [c.c.DeleteAccount]: {
                    success: ut
                },
                [c.c.GetUserProfile]: {
                    request: ze,
                    success: Ye,
                    error: Je
                },
                [c.c.UpdateUserPassword]: {
                    request: $e,
                    success: Qe,
                    error: Ze
                },
                [c.c.UpdateUserEmail]: {
                    request: nt,
                    success: at,
                    error: ot
                },
                [c.c.UpdateUserProfile]: {
                    request: it,
                    success: st,
                    error: ct
                },
                [c.c.GetVoices]: {
                    success: lt
                },
                [c.a.ResetServerError]: dt,
                [c.c.FetchGetHelpConfig]: {
                    request: pt,
                    success: mt,
                    error: bt
                },
                [c.c.GetMoodMeter]: {
                    request: gt,
                    success: jt,
                    error: ft
                },
                [c.c.UpdateMoodMeter]: {
                    request: vt,
                    success: Et,
                    error: St
                },
                [c.a.WsUserMoodReceived]: Ct,
                [c.a.WsBotMoodReceived]: wt,
                [c.c.DeleteMood]: {
                    success: yt
                },
                [c.c.UpdateMood]: {
                    success: _t
                }
            }, e, t)
        }
        const xt = {
                feedbackStatus: "inactive",
                feedbackData: void 0
            },
            Tt = (e, {
                sessionId: t,
                feedbackView: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackStatus: "active",
                feedbackData: {
                    sessionId: t,
                    feedbackView: r
                }
            }),
            kt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackStatus: "submitted"
            }),
            Rt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackStatus: "submitted"
            }),
            Pt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackData: void 0,
                feedbackStatus: "inactive"
            }),
            Ft = e => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackData: void 0,
                feedbackStatus: "inactive"
            }),
            At = e => Object(n.a)(Object(n.a)({}, e), {}, {
                feedbackData: void 0,
                feedbackStatus: "inactive"
            });

        function Mt(e = xt, t) {
            return p("feedback", {
                [c.a.WsFeedbackRequestReceived]: Tt,
                [c.c.WsSendFeedback]: {
                    success: kt,
                    error: Rt
                },
                [c.c.WsDismissFeedback]: {
                    success: Ft,
                    error: At
                },
                [c.a.CloseFeedbackPopup]: Pt
            }, e, t)
        }
        var Dt = r(79),
            Bt = r(6);
        const Nt = {
                urlQueryParams: Object(Dt.parse)(window.location.search),
                connectedToInternet: !0,
                isActiveWindow: !0,
                imageUpload: {
                    inProgress: !1,
                    src: null,
                    width: 0,
                    height: 0,
                    uploadError: void 0,
                    orientation: -1
                },
                mobileProfileOpened: !1,
                activeDialog: null,
                introStep: null,
                isTrialPopupActive: !1,
                persist: {
                    themeNames: {},
                    gdprVersion: void 0,
                    hints: {
                        messageReaction: void 0,
                        replikaDay: void 0,
                        replikaMood: void 0
                    },
                    completedMissionDialogShown: !1,
                    showRelationshipStatusButton: !1,
                    disabled3d: !1
                },
                notifications: [],
                isNewThought: !1
            },
            Ut = e => Object(n.a)(Object(n.a)({}, e), {}, {
                connectedToInternet: !1,
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    uploadError: void 0
                })
            }),
            Wt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                connectedToInternet: !0
            }),
            Gt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    inProgress: !0,
                    uploadError: void 0
                })
            }),
            Lt = (e, {
                width: t,
                height: r,
                src: a,
                orientation: o
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    inProgress: !0,
                    width: t,
                    height: r,
                    src: a,
                    uploadError: void 0,
                    orientation: o
                })
            }),
            qt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    inProgress: !1,
                    width: 0,
                    height: 0,
                    src: null,
                    percent: 0,
                    orientation: -1
                })
            }),
            Ht = (e, {
                error: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    inProgress: !1,
                    width: 0,
                    height: 0,
                    percent: 0,
                    uploadError: t.message,
                    orientation: -1
                })
            }),
            Vt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                imageUpload: Object(n.a)(Object(n.a)({}, e.imageUpload), {}, {
                    uploadError: void 0
                })
            }),
            zt = (e, {
                isActiveWindow: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isActiveWindow: t
            }),
            Jt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                mobileProfileOpened: !e.mobileProfileOpened
            }),
            Yt = (e, {
                userId: t,
                themeName: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    themeNames: Object(n.a)(Object(n.a)({}, e.persist.themeNames), {}, {
                        [t]: r
                    })
                })
            }),
            Kt = (e, {
                options: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                activeDialog: t
            }),
            Xt = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    gdprVersion: Bt.f
                })
            }),
            $t = (e, {
                hint: t,
                status: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    hints: Object(n.a)(Object(n.a)({}, e.persist.hints), {}, {
                        [t]: r
                    })
                })
            }),
            Qt = (e, {
                feedbackView: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                activeDialog: "Fullscreen" === t ? {
                    type: c.f.Feedback
                } : e.activeDialog
            }),
            Zt = e => e.activeDialog === c.f.Feedback ? Object(n.a)(Object(n.a)({}, e), {}, {
                activeDialog: null
            }) : e,
            er = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    completedMissionDialogShown: !0
                })
            }),
            tr = (e, {
                introStep: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                introStep: t
            }),
            rr = e => Object(n.a)(Object(n.a)({}, Nt), {}, {
                persist: e.persist
            }),
            nr = (e, {
                isTrialPopupActive: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isTrialPopupActive: t
            }),
            ar = (e, {
                showRelationshipStatusButton: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    showRelationshipStatusButton: t
                })
            }),
            or = (e, {
                notifications: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                notifications: [...e.notifications, ...t.map(e => ({
                    id: o()(),
                    notification: e
                }))]
            }),
            ir = (e, {
                id: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                notifications: e.notifications.filter(e => e.id !== t)
            }),
            sr = (e, {
                disabled: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    disabled3d: t
                })
            }),
            cr = (e, {
                isNewThought: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                isNewThought: t
            });

        function ur(e = Nt, t) {
            return p("ui", {
                [c.a.GoneOffline]: Ut,
                [c.a.GoneOnline]: Wt,
                [c.c.UploadChatImage]: {
                    request: Gt,
                    error: Ht
                },
                [c.a.UploadChatImagePreview]: Lt,
                [c.a.WsChatMessageReceived]: qt,
                [c.a.SetActiveWindow]: zt,
                [c.a.SetActiveWindow]: zt,
                [c.a.SetTheme]: Yt,
                [c.a.ToggleMobileProfile]: Jt,
                [c.c.WsTextInputDetected]: {
                    request: Vt
                },
                [c.a.WsVoiceModeReceived]: Vt,
                [c.a.SetActiveDialog]: Kt,
                [c.a.AcceptGdpr]: Xt,
                [c.a.SetHintStatus]: $t,
                [c.a.WsFeedbackRequestReceived]: Qt,
                [c.c.WsDismissFeedback]: {
                    success: Zt,
                    error: Zt
                },
                [c.a.CloseFeedbackPopup]: Zt,
                [c.a.SetCompletedMissionDialogShown]: er,
                [c.a.SetIntroStep]: tr,
                [c.c.Logout]: {
                    success: rr,
                    error: rr
                },
                [c.c.DeleteAccount]: {
                    success: rr
                },
                [c.a.SetTrialPopupActive]: nr,
                [c.a.SetShowRelationshipStatusButton]: ar,
                [c.a.BotStatsReceived]: or,
                [c.a.DismissNotification]: ir,
                [c.a.SetDisabled3d]: sr,
                [c.a.SetNewThought]: cr
            }, e, t)
        }
        const dr = {
                persist: {
                    tracks: {},
                    trackIdList: [],
                    levels: [],
                    lastUpdated: null,
                    spotlight: null,
                    categories: null
                },
                lastJourneyChange: {
                    updated: Date.now(),
                    affectedTrackIds: []
                }
            },
            lr = (e, {
                result: {
                    levels: t,
                    last_updated: r
                }
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    levels: t,
                    lastUpdated: r
                })
            }),
            pr = (e, {
                result: {
                    tracks: t,
                    categories: r
                }
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    categories: r,
                    tracks: t.reduce((e, t) => (e[t.id] = t, e), Object(n.a)({}, e.persist.tracks)),
                    trackIdList: t.map(e => e.id)
                })
            }),
            br = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    tracks: Object(n.a)(Object(n.a)({}, e.persist.tracks), {}, {
                        [t.id]: t
                    })
                })
            }),
            mr = (e, {
                result: {
                    spotlight: t
                }
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    spotlight: t
                })
            }),
            gr = (e, {
                affectedTrackIds: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                lastJourneyChange: {
                    updated: Date.now(),
                    affectedTrackIds: t
                }
            }),
            fr = () => Object(n.a)({}, dr);

        function hr(e = dr, t) {
            return p("journey", {
                [c.c.GetJourney]: {
                    success: lr
                },
                [c.c.GetTracks]: {
                    success: pr
                },
                [c.c.GetTrack]: {
                    success: br
                },
                [c.c.GetSpotlight]: {
                    success: mr
                },
                [c.a.WsJourneyChanged]: gr,
                [c.c.Logout]: {
                    success: fr,
                    error: fr
                },
                [c.c.DeleteAccount]: {
                    success: fr
                }
            }, e, t)
        }
        const Or = {
            persist: {
                version: 1,
                signedUrlCache: []
            }
        };

        function jr(e, t, r) {
            if (e.find(e => e.url === t)) return e.map(e => e.url === t ? {
                url: t,
                signedUrl: r
            } : e); {
                const n = [...e, {
                    url: t,
                    signedUrl: r
                }];
                return n.length > 1e3 && n.shift(), n
            }
        }
        const vr = (e, {
            params: t,
            result: r
        }) => Object(n.a)(Object(n.a)({}, e), {}, {
            persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                signedUrlCache: jr(e.persist.signedUrlCache, t.url, r.image_url)
            })
        });

        function Sr(e = Or, t) {
            return p("image", {
                [c.c.GetImageSignedUrl]: {
                    success: vr
                }
            }, e, t)
        }
        const Er = {
                persist: {
                    subscription: null,
                    features: [],
                    reboardingDialogShown: !1,
                    stripeLatestInvoiceId: null,
                    stripeCustomerId: null,
                    stripeSubscriptions: null
                },
                stripeConfig: null,
                stripeEnabled: !1
            },
            Cr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    subscription: t.subscription || null,
                    features: t.features || []
                })
            }),
            wr = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    reboardingDialogShown: !0
                })
            }),
            yr = e => Object(n.a)(Object(n.a)({}, Er), {}, {
                persist: Object(n.a)(Object(n.a)({}, Er.persist), {}, {
                    reboardingDialogShown: e.reboardingDialogShown
                })
            }),
            _r = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                stripeConfig: t
            }),
            Ir = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    stripeCustomerId: t.customer_id
                })
            }),
            xr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    stripeSubscriptions: t.available_subscriptions
                })
            }),
            Tr = (e, {
                invoiceId: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    stripeLatestInvoiceId: t
                })
            }),
            kr = e => Object(n.a)(Object(n.a)({}, e), {}, {
                stripeEnabled: !0
            });

        function Rr(e = Er, t) {
            return p("subscriptions", {
                [c.c.GetSubscriptions]: {
                    success: Cr
                },
                [c.a.SetReboardingDialogShown]: wr,
                [c.c.Logout]: {
                    success: yr,
                    error: yr
                },
                [c.c.DeleteAccount]: {
                    success: yr
                },
                [c.c.GetStripeConfig]: {
                    success: _r
                },
                [c.c.CreateStripeCustomer]: {
                    success: Ir
                },
                [c.c.GetStripePrices]: {
                    success: xr
                },
                [c.a.SetStripeLatestInvoiceId]: Tr,
                [c.a.SetStripeEnabled]: kr
            }, e, t)
        }
        const Pr = {
                persist: {
                    models: [],
                    lastUpdated: null,
                    chooseAvatarScreenShown: !1,
                    customizationManifest: null
                }
            },
            Fr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    models: t.avatars,
                    lastUpdated: t.last_updated_timestamp
                })
            }),
            Ar = e => Object(n.a)({}, Pr),
            Mr = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    chooseAvatarScreenShown: !0
                })
            }),
            Dr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    customizationManifest: t
                })
            });

        function Br(e = Pr, t) {
            return p("avatars", {
                [c.c.GetAvatars]: {
                    success: Fr
                },
                [c.c.Logout]: {
                    success: Ar,
                    error: Ar
                },
                [c.c.DeleteAccount]: {
                    success: Ar
                },
                [c.a.SetChooseAvatarScreenShown]: Mr,
                [c.c.GetCustomizationManifest]: {
                    success: Dr
                }
            }, e, t)
        }
        const Nr = {
            saveChatItemPreviews: {},
            savedChatItems: {},
            invalidatedPreviews: [],
            persist: {
                latestSavedChatItemPreviews: {},
                savedItemTypeTabs: [],
                chatItemsToSave: []
            }
        };

        function Ur(e, t, r) {
            const a = Object(re.take)(r, 25);
            return Object(n.a)(Object(n.a)({}, e), {}, {
                latestSavedChatItemPreviews: Object(n.a)(Object(n.a)({}, e.latestSavedChatItemPreviews), {}, {
                    [t]: a
                })
            })
        }
        const Wr = e => Object(n.a)({}, Nr),
            Gr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    savedItemTypeTabs: t
                })
            }),
            Lr = (e, {
                result: t,
                params: r
            }) => {
                var a, o;
                const i = null !== (a = r.type) && void 0 !== a ? a : "all",
                    s = 0 === r.offset,
                    c = null !== (o = e.saveChatItemPreviews[i]) && void 0 !== o ? o : [],
                    u = Object(re.uniqBy)(Object(re.sortBy)(s ? t : [...c, ...t], e => -new Date(e.timestamp).getTime()), e => e.id);
                return Object(n.a)(Object(n.a)({}, e), {}, {
                    invalidatedPreviews: e.invalidatedPreviews.filter(e => e !== i),
                    saveChatItemPreviews: Object(n.a)(Object(n.a)({}, e.saveChatItemPreviews), {}, {
                        [i]: u
                    }),
                    persist: Ur(e.persist, i, u)
                })
            },
            qr = (e, {
                result: t
            }) => {
                let r = e.savedChatItems;
                return t.forEach(e => {
                    r[e.id] = e
                }), Object(n.a)(Object(n.a)({}, e), {}, {
                    savedChatItems: r
                })
            },
            Hr = (e, {
                item: t
            }) => t.id ? Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    chatItemsToSave: [...e.persist.chatItemsToSave, t]
                })
            }) : e,
            Vr = (e, {
                itemId: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    chatItemsToSave: e.persist.chatItemsToSave.filter(e => e.id !== t)
                })
            }),
            zr = (e, {
                params: t
            }) => {
                const r = Object(re.mapValues)(e.saveChatItemPreviews, (e, r) => null === e || void 0 === e ? void 0 : e.filter(e => e.id !== t.id));
                return Object(n.a)(Object(n.a)({}, e), {}, {
                    saveChatItemPreviews: r,
                    persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                        latestSavedChatItemPreviews: Object(re.mapValues)(r, e => Object(re.take)(e, 25)),
                        chatItemsToSave: e.persist.chatItemsToSave.filter(e => e.id !== t.id)
                    })
                })
            },
            Jr = (e, {
                params: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                invalidatedPreviews: [...Object(re.values)(c.n), "all"],
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    chatItemsToSave: e.persist.chatItemsToSave.filter(e => e.id !== t.itemId)
                })
            }),
            Yr = (e, {
                params: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                invalidatedPreviews: [...Object(re.values)(c.n), "all"],
                savedChatItems: Object(n.a)(Object(n.a)({}, e.savedChatItems), {}, {
                    [t.id]: Object(n.a)(Object(n.a)({}, e.savedChatItems[t.id]), t.update)
                })
            }),
            Kr = (e, {
                itemId: t,
                update: r
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    chatItemsToSave: e.persist.chatItemsToSave.map(e => e.id === t ? Object(n.a)(Object(n.a)({}, e), r) : e)
                })
            });

        function Xr(e = Nr, t) {
            return p("savedChatItems", {
                [c.c.Logout]: {
                    success: Wr,
                    error: Wr
                },
                [c.c.DeleteAccount]: {
                    success: Wr
                },
                [c.c.GetSavedChatItemTypes]: {
                    success: Gr
                },
                [c.c.GetSavedChatItemPreviews]: {
                    success: Lr
                },
                [c.c.GetSavedChatItems]: {
                    success: qr
                },
                [c.a.WsSaveChatItemReceived]: Hr,
                [c.c.WsSaveChatItem]: {
                    success: Jr
                },
                [c.c.DeleteSavedChatItem]: {
                    success: zr
                },
                [c.a.CancelSaveChatItem]: Vr,
                [c.c.UpdateSavedChatItem]: {
                    success: Yr
                },
                [c.a.UpdateChatItemToSave]: Kr
            }, e, t)
        }
        const $r = {
                persist: {
                    facts: [],
                    persons: [],
                    relations: [],
                    unreadCount: 0
                }
            },
            Qr = e => Object(n.a)({}, $r),
            Zr = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    facts: t.facts,
                    persons: t.persons
                })
            }),
            en = (e, {
                result: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    relations: t
                })
            }),
            tn = (e, {
                params: t
            }) => {
                const r = e.persist[t.memoryType];
                return Object(n.a)(Object(n.a)({}, e), {}, {
                    persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                        [t.memoryType]: r.filter(e => e.id !== t.id)
                    })
                })
            },
            rn = (e, {
                params: t
            }) => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    persons: e.persist.persons.map(e => e.id === t.id ? Object(n.a)(Object(n.a)({}, e), t.update) : e)
                })
            }),
            nn = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    unreadCount: 0
                })
            }),
            an = e => Object(n.a)(Object(n.a)({}, e), {}, {
                persist: Object(n.a)(Object(n.a)({}, e.persist), {}, {
                    unreadCount: e.persist.unreadCount + 1
                })
            });

        function on(e = $r, t) {
            return p("memory", {
                [c.c.Logout]: {
                    success: Qr,
                    error: Qr
                },
                [c.c.DeleteAccount]: {
                    success: Qr
                },
                [c.c.GetMemory]: {
                    success: Zr
                },
                [c.c.GetMemoryRelations]: {
                    success: en
                },
                [c.c.UpdateMemoryPerson]: {
                    success: rn
                },
                [c.c.DeleteMemory]: {
                    success: tn
                },
                [c.a.WsStatementRemembered]: an,
                [c.a.ResetMemoryUnreadCount]: nn
            }, e, t)
        }
    }, , , , , function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(0),
            o = r(5),
            i = r(2),
            s = r(22),
            c = r(17),
            u = r(32),
            d = r(1),
            l = r(165),
            p = r(166);

        function b(e) {
            switch (e) {
                case d.p.Light:
                    return l;
                case d.p.Dark:
                    return p
            }
        }
        var m = r(44),
            g = r(36),
            f = r(15),
            h = r(118);
        const O = o.d.div.withConfig({
                displayName: "ErrorScreen__ErrorScreenRoot",
                componentId: "sc-1c5eucj-0"
            })(["font-family:'Muli',-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;text-align:center;background-color:#0b2988;color:#fff;font-family:'Muli',-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;line-height:1.5em;& > p{margin-top:10px;}& a{color:inherit;}"]),
            j = o.d.p.withConfig({
                displayName: "ErrorScreen__AutoTranslationWarning",
                componentId: "sc-1c5eucj-1"
            })(["border:1px solid #fff;border-radius:5px;padding:10px;background:rgba(255,0,0,0.2);max-width:600px;"]),
            v = o.d.button.withConfig({
                displayName: "ErrorScreen__CloseButton",
                componentId: "sc-1c5eucj-2"
            })(["cursor:pointer;border:1px solid #fff;border-radius:5px;background:transparent;padding:10px 15px;margin-top:30px;color:#fff;"]);
        class S extends i.Component {
            render() {
                const e = this.props,
                    t = e.className,
                    r = e.onClose;
                return i.createElement(O, {
                    className: t
                }, i.createElement("h1", null, "Oops!"), i.createElement("p", null, "Something went wrong."), !!document.querySelector("html.translated-ltr, head.translated-rtl, ya-tr-span, *[_msttexthash]") && i.createElement(j, null, i.createElement("b", null, "It seems that you are using auto translation which can affect application performance.", i.createElement("br", null), i.createElement("br", null), "Please try disabling auto translation.")), i.createElement("p", null, "If it doesn\u2019t go away, please", " ", i.createElement("a", {
                    href: "mailto:my@replika.ai",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "send us a message"), "."), i.createElement(v, {
                    onClick: r
                }, "Try again"))
            }
        }
        var E = r(30),
            C = r(27);
        const w = {
            [d.m.Main]: "intro page",
            [d.m.Login]: "Login",
            [d.m.SignupCreateAccount]: "Create your replika",
            [d.m.SignupChooseYourAIFriend]: "customize your Replika image",
            [d.m.SignupChooseReplikaName]: "choose a name for your Replika",
            [d.m.SignupAlmostThere]: "finishing up"
        };
        var y = Object(s.i)(({
            history: e
        }) => {
            const t = i.useState(null),
                r = Object(E.a)(t, 2),
                n = r[0],
                a = r[1];
            return i.useEffect(() => {
                const t = e.listen(e => {
                    w[e.pathname] && a(w[e.pathname])
                });
                return () => t()
            }, [e]), i.createElement(C.c, {
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": "true"
            }, n && "Navigated to ".concat(n))
        });
        const _ = i.createContext({
            a11yNotification: null,
            setA11yNotification: () => {}
        });
        _.Consumer;
        var I = ({
                children: e
            }) => {
                const t = i.useState(null),
                    r = Object(E.a)(t, 2),
                    n = r[0],
                    a = r[1];
                return i.createElement(_.Provider, {
                    value: {
                        a11yNotification: n,
                        setA11yNotification: a
                    }
                }, i.createElement(C.c, {
                    role: "status",
                    "aria-live": "polite",
                    "aria-atomic": "true"
                }, n), e)
            },
            x = r(67),
            T = r(41),
            k = r(83),
            R = r(62),
            P = r(20),
            F = r(149);

        function A() {
            const e = Object(n.a)(["\n    margin-bottom: 0;\n  "]);
            return A = function() {
                return e
            }, e
        }
        var M = () => (i.useEffect(() => {
            Object(P.b)(d.j.WelcomeScreenOpened)
        }, []), i.createElement(k.b, null, i.createElement(F.a, {
            gradient: "avatarSignupGradient"
        }), i.createElement(D, null, "An AI companion \ndesigned to help you \nlive a happy life."), i.createElement(R.a, {
            to: d.m.Signup
        }, "Create my Replika"), i.createElement(B, {
            to: d.m.Login
        }, "Log in")));
        const D = Object(o.d)(k.c).withConfig({
                displayName: "Welcome__Title",
                componentId: "sc-15ulcz8-0"
            })(["margin-top:40px;margin-bottom:25px;font-weight:bold;"]),
            B = Object(o.d)(T.a).withConfig({
                displayName: "Welcome__LoginLink",
                componentId: "sc-15ulcz8-1"
            })(["color:inherit;font-size:16px;margin-top:30px;margin-bottom:100px;text-decoration:underline;", ""], Object(f.a)(A())),
            N = o.d.div.withConfig({
                displayName: "NetworkStatus__Ribbon",
                componentId: "sc-1ux966a-0"
            })(["position:fixed;top:0;z-index:", ";background-color:red;width:100%;height:60px;text-align:center;line-height:60px;color:#fff;"], d.s.OfflineNotification);
        var U = Object(c.c)(e => ({
                connectedToInternet: e.ui.connectedToInternet
            }))(e => e.connectedToInternet ? null : i.createElement(N, null, "Network unreachable")),
            W = r(108);
        var G = function() {
                var e = document.createElement("div"),
                    t = document.createElement("div");
                e.style.width = "30px", e.style.height = "30px", e.style.overflow = "scroll", e.style.borderWidth = "0", t.style.width = "30px", t.style.height = "60px", e.appendChild(t), document.body.appendChild(e);
                var r = e.offsetWidth - e.clientWidth;
                return document.body.removeChild(e), r > 0
            },
            L = r(150),
            q = r(170),
            H = r(112),
            V = r(84);
        var z = ({
                children: e
            }) => {
                const t = Object(c.d)(),
                    r = Object(H.a)(e => e.subscriptions.stripeConfig, V.d, {
                        memoDeepEqual: !0
                    }),
                    n = null === r || void 0 === r ? void 0 : r.publishable_key,
                    a = Object(c.e)(e => e.subscriptions.stripeEnabled),
                    o = i.useMemo(() => n ? Object(q.a)(n) : null, [n]);
                return i.useEffect(() => {
                    !a && o && t(Object(V.i)())
                }, [a, o, t]), i.createElement(L.Elements, {
                    stripe: o
                }, e)
            },
            J = r(65);

        function Y() {
            const e = Object(n.a)(["\n    html {\n      overflow: auto;\n    }\n  "]);
            return Y = function() {
                return e
            }, e
        }

        function K() {
            const e = Object(n.a)(["\n  html {\n    min-height: 100vh;\n    overflow: hidden;\n  }\n\n  ", "\n\n  body {\n    margin: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow-y: auto;\n    min-height: 100vh;\n    font-family: 'Muli', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;\n    background-color: ", ";\n  }\n\n  ", "\n\n  #root {\n    min-height: 100vh;\n    overflow: hidden;\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  a img {\n    border: 0;\n  }\n\n  * { box-sizing: border-box }\n\n  *:focus:not(.focus-visible) {\n    outline: none;\n  }\n\n  .focus-visible:focus {\n    outline-color: ", ";\n  }\n\n  button.focus-visible:focus {\n    outline: none;\n    box-shadow: 0 0 2px 2px ", ";\n  }\n\n  .popupbox.popupbox {\n    z-index: ", ";\n  }\n\n  [data-hidescrollbar] {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  ", "\n"]);
            return K = function() {
                return e
            }, e
        }
        const X = {
                fallback: i.createElement(h.a, null)
            },
            $ = Object(u.a)(() => Promise.all([r.e(1), r.e(20), r.e(2), r.e(9)]).then(r.bind(null, 625)), X),
            Q = Object(u.a)(() => Promise.all([r.e(23), r.e(12)]).then(r.bind(null, 629)), X),
            Z = Object(u.a)(() => Promise.all([r.e(2), r.e(14)]).then(r.bind(null, 626)), X),
            ee = Object(u.a)(() => r.e(10).then(r.bind(null, 619)), X),
            te = Object(u.a)(() => Promise.all([r.e(1), r.e(11)]).then(r.bind(null, 620)), X),
            re = Object(u.a)(() => r.e(13).then(r.bind(null, 621)), X),
            ne = Object(u.a)(() => r.e(15).then(r.bind(null, 622)), X),
            ae = Object(u.a)(() => r.e(8).then(r.bind(null, 623)), X),
            oe = ({
                children: e
            }) => i.createElement(s.d, null, i.createElement(s.b, {
                path: d.m.RecoverPassword,
                component: re
            }), i.createElement(s.b, {
                path: d.m.VerifyEmail,
                component: ne
            }), e),
            ie = ({
                children: e
            }) => i.createElement(i.Fragment, null, i.createElement(y, null), i.createElement(I, null, e), i.createElement(U, null), i.createElement(ce, null));
        class se extends i.Component {
            constructor(e) {
                super(e), this.state = {
                        hasError: !1
                    }, Object(P.a)(this.props.userId), Object(P.b)(d.j.Launched, {
                        authUserId: this.props.userId
                    }),
                    function() {
                        if (document && window.MutationObserver) try {
                            const e = document.documentElement;
                            new MutationObserver(() => {
                                if (!!document.querySelector("html.translated-ltr, head.translated-rtl, ya-tr-span, *[_msttexthash]")) {
                                    const e = document.documentElement.getAttribute("lang");
                                    Object(P.b)(d.j.PageIsAutoTranslated, {
                                        lang: e
                                    })
                                }
                            }).observe(e, {
                                attributes: !0,
                                childList: !1,
                                subtree: !1
                            })
                        } catch (e) {
                            console.error("HTML mutation observer error:", e)
                        }
                    }(), window.addEventListener("unhandledrejection", e => {
                        const t = e.reason;
                        t instanceof g.a && 401 === t.statusCode && (this.props.logoutOnAuthError(), e.preventDefault())
                    })
            }
            static getDerivedStateFromError() {
                return {
                    hasError: !0
                }
            }
            componentDidCatch(e, t) {
                e instanceof g.a ? 401 === e.statusCode && this.props.logoutOnAuthError() : Object(m.a)(e, t)
            }
            render() {
                const e = this.props,
                    t = e.themeName,
                    r = e.authToken,
                    n = e.trialPeriodExpired,
                    a = e.signupInProgress,
                    c = e.introStep,
                    u = e.bot;
                if (this.state.hasError) return i.createElement(S, {
                    onClose: () => this.setState({
                        hasError: !1
                    })
                });
                const l = b(t);
                return !r || a ? i.createElement(o.a, {
                    theme: b(d.p.Light)
                }, i.createElement(ie, null, i.createElement(oe, null, i.createElement(s.b, {
                    path: d.m.Main,
                    exact: !0,
                    component: M
                }), i.createElement(s.b, {
                    path: d.m.Login,
                    component: Q
                }), i.createElement(s.b, {
                    path: d.m.Signup,
                    component: Z
                }), i.createElement(s.a, {
                    from: "*",
                    to: d.m.Main
                })))) : n ? i.createElement(o.a, {
                    theme: l
                }, i.createElement(ie, null, i.createElement(oe, null, i.createElement(s.b, {
                    path: d.m.ConfirmSignup,
                    component: ee
                }), i.createElement(s.a, {
                    from: "*",
                    to: d.m.ConfirmSignup
                })))) : i.createElement(o.a, {
                    theme: l
                }, i.createElement(z, null, i.createElement(ie, null, i.createElement(oe, null, i.createElement(s.b, {
                    path: d.m.DeleteAccount,
                    exact: !0,
                    component: te
                }), i.createElement(s.a, {
                    from: d.m.Login,
                    to: d.m.Main
                }), i.createElement(s.a, {
                    from: d.m.Signup,
                    to: d.m.Main
                }), c ? i.createElement(s.a, {
                    exact: !0,
                    from: d.m.Main,
                    to: d.m.Intro
                }) : i.createElement(s.a, {
                    from: d.m.Intro,
                    to: d.m.Main
                }), (null === u || void 0 === u ? void 0 : u.avatar) ? i.createElement(s.a, {
                    from: d.m.ChooseAvatar,
                    to: d.m.Main
                }) : i.createElement(s.b, {
                    path: d.m.ChooseAvatar,
                    component: ae
                }), i.createElement(s.b, {
                    path: d.m.Main,
                    component: $
                })), i.createElement(W.a, null, i.createElement(s.b, {
                    exact: !0,
                    path: d.m.Stats,
                    render: () => i.createElement(s.a, {
                        to: d.m.Main
                    })
                })))))
            }
        }
        t.a = Object(c.c)(e => Object(a.a)(Object(a.a)({}, Object(x.a)(e)), {}, {
            authToken: e.auth.persist.authToken,
            signupInProgress: e.auth.signupState.signupInProgress,
            userId: e.auth.persist.userId,
            deviceId: e.auth.persist.deviceId,
            trialPeriodExpired: e.auth.trialPeriodExpired,
            introStep: e.ui.introStep,
            bot: e.profile.persist.bot
        }), {
            logoutOnAuthError: J.e
        })(se);
        const ce = Object(o.b)(K(), Object(f.a)(Y()), e => e.theme.bodyBgColor, "", e => e.theme.outlineColor, e => e.theme.outlineColor, d.s.Popupbox, e => G() ? Object(o.c)(["*{scrollbar-width:thin;scrollbar-color:", " transparent;}*::-webkit-scrollbar{background-color:transparent;}*::-webkit-scrollbar:vertical{width:6px;}*::-webkit-scrollbar:horizontal{height:6px;}*::-webkit-scrollbar-track{background-color:transparent;}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:", ";}"], e => e.theme.scrollThumbColor, e.theme.scrollThumbColor) : "")
    }, function(e, t, r) {
        "use strict";
        r.d(t, "d", (function() {
            return s
        })), r.d(t, "a", (function() {
            return c
        })), r.d(t, "c", (function() {
            return u
        })), r.d(t, "b", (function() {
            return d
        })), r.d(t, "f", (function() {
            return l
        })), r.d(t, "e", (function() {
            return p
        })), r.d(t, "g", (function() {
            return b
        }));
        var n = r(2),
            a = r(39),
            o = r.n(a),
            i = r(6);
        const s = ({
                children: e
            }) => n.createElement(o.a, {
                maxWidth: i.c
            }, e),
            c = ({
                children: e
            }) => n.createElement(o.a, {
                minWidth: i.c + 1
            }, e),
            u = ({
                children: e
            }) => n.createElement(o.a, {
                maxWidth: i.e
            }, e),
            d = ({
                children: e
            }) => n.createElement(o.a, {
                minWidth: i.e + 1
            }, e),
            l = ({
                children: e
            }) => n.createElement(o.a, {
                maxWidth: i.i
            }, e),
            p = ({
                children: e
            }) => n.createElement(o.a, {
                minWidth: i.i + 1
            }, e);

        function b() {
            return Object(a.useMediaQuery)({
                maxWidth: i.c
            })
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(26);

        function o() {
            const e = Object(n.a)(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n\n  background: transparent;\n  font-size: inherit;\n  text-decoration: ", ";\n  color: inherit;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &.focus-visible:focus {\n    outline: auto ", ";\n    box-shadow: none;\n  }\n"]);
            return o = function() {
                return e
            }, e
        }
        const i = Object(a.a)("button", ["noUnderline"])(o(), e => e.noUnderline ? "none" : "underline", e => e.theme.outlineColor);
        t.a = i
    }, function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(5),
            o = r(2);

        function i() {
            const e = Object(n.a)(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"]);
            return i = function() {
                return e
            }, e
        }
        const s = Object(a.e)(i()),
            c = 64 * Math.PI,
            u = a.d.svg.withConfig({
                displayName: "CircleSpinner__StyledSvg",
                componentId: "uolb7o-0"
            })(["& > .circle{transform-origin:50% 50%;stroke-dasharray:", " ", ";stroke-dashoffset:", ";transition:stroke-dashoffset 0.35s;animation:", " 0.6s linear infinite;}"], c, c, c - .4 * c, s);
        t.a = ({
            className: e,
            style: t
        }) => o.createElement(u, {
            className: e,
            style: t,
            viewBox: "0 0 70 70"
        }, o.createElement("circle", {
            className: "circle",
            strokeWidth: "4",
            stroke: "currentColor",
            fill: "transparent",
            r: 32,
            cx: "35",
            cy: "35"
        }))
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(30),
            a = r(2),
            o = r(17),
            i = r(12);

        function s(e, t, r) {
            const s = (r || {}).memoDeepEqual,
                c = void 0 !== s && s,
                u = Object(o.d)(),
                d = Object(o.e)(e),
                l = a.useState(d),
                p = Object(n.a)(l, 2),
                b = p[0],
                m = p[1];
            return a.useEffect(() => {
                c && (Object(i.isEqual)(b, d) || m(d))
            }, [b, d, c]), a.useEffect(() => {
                null != t && u(t())
            }, [u, t]), c ? b : d
        }
    }, , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        }));
        var n = r(2),
            a = r.n(n);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e, t) {
            if (null == e) return {};
            var r, n, a = function(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        var s = a.a.createElement("g", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2
            }, a.a.createElement("path", {
                d: "M2 2l10 10M2 12L12 2"
            })),
            c = function(e) {
                var t = e.svgRef,
                    r = e.title,
                    n = i(e, ["svgRef", "title"]);
                return a.a.createElement("svg", o({
                    viewBox: "0 0 14 14",
                    width: 14,
                    height: 14,
                    ref: t
                }, n), r ? a.a.createElement("title", null, r) : null, s)
            },
            u = a.a.forwardRef((function(e, t) {
                return a.a.createElement(c, o({
                    svgRef: t
                }, e))
            }));
        r.p
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return d
        }));
        var n = r(2),
            a = r.n(n);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e, t) {
            if (null == e) return {};
            var r, n, a = function(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        var s = a.a.createElement("path", {
                d: "M7.89961 1L1 7.99999L7.89961 15",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            c = a.a.createElement("path", {
                d: "M1 8L15 8",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            u = function(e) {
                var t = e.svgRef,
                    r = e.title,
                    n = i(e, ["svgRef", "title"]);
                return a.a.createElement("svg", o({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ref: t
                }, n), r ? a.a.createElement("title", null, r) : null, s, c)
            },
            d = a.a.forwardRef((function(e, t) {
                return a.a.createElement(u, o({
                    svgRef: t
                }, e))
            }));
        r.p
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return d
        })), r.d(t, "d", (function() {
            return l
        })), r.d(t, "a", (function() {
            return p
        })), r.d(t, "c", (function() {
            return b
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(1),
            s = r(8),
            c = r(6),
            u = r(7);
        const d = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(s.b)(r(), "GET"), e.abrupt("return", Object(u.a)(i.c.GetAvatars, t, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/3d_avatar/models"), n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            l = () => ({
                type: i.a.SetChooseAvatarScreenShown
            }),
            p = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    var o;
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = Object(s.b)(n(), "GET"), t.abrupt("return", Object(u.a)(i.c.GetAvatarCustomizations, r, {
                                    avatarId: e
                                }, {
                                    onRequest: () => fetch("".concat(c.a, "/3d_avatar/onboarding_customization_textures/").concat(e), o)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            b = () => function() {
                var e = Object(o.a)(a.a.mark((function e(t, r) {
                    var n;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(s.b)(r(), "GET"), e.abrupt("return", Object(u.a)(i.c.GetCustomizationManifest, t, {}, {
                                    onRequest: () => fetch("".concat(c.a, "/personal_bot/3d_customization_manifest"), n)
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
    }, , function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(5),
            o = r(2),
            i = r(110),
            s = r(27),
            c = r(145),
            u = r(15);

        function d() {
            const e = Object(n.a)(["\n    margin: 0 16px 16px;\n  "]);
            return d = function() {
                return e
            }, e
        }
        t.a = () => o.createElement(l, null, o.createElement(s.a, null, "Loading Replika"), o.createElement(p, null, o.createElement(b, null)), o.createElement(m, {
            delay: 5e3
        }));
        const l = a.d.main.withConfig({
                displayName: "LoadingPage__LandingPageRoot",
                componentId: "sc-4d3ite-0"
            })(["background-color:", ";height:100vh;min-height:100vh;display:flex;flex-direction:column;align-items:center;"], e => e.theme.loginBgColor),
            p = a.d.div.withConfig({
                displayName: "LoadingPage__SpinnerContainer",
                componentId: "sc-4d3ite-1"
            })(["flex:1 0 auto;display:flex;align-items:center;justify-content:center;"]),
            b = Object(a.d)(i.a).withConfig({
                displayName: "LoadingPage__StyledSpinner",
                componentId: "sc-4d3ite-2"
            })(["width:54px;height:54px;color:", ";"], e => e.theme.dimmedFgColor),
            m = Object(a.d)(c.a).withConfig({
                displayName: "LoadingPage__StyledTestimonials",
                componentId: "sc-4d3ite-3"
            })(["margin:0 auto 50px;max-width:530px;", ""], Object(u.a)(d()))
    }, function(e, t, r) {
        "use strict";
        const n = r(5).d.span.attrs({
            role: "status",
            "aria-live": "polite",
            "aria-atomic": !0
        }).withConfig({
            displayName: "AriaStatusText",
            componentId: "nzofe8-0"
        })([""]);
        t.a = n
    }, , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        t.a = (e, t = {}) => {
            const r = t.pixelRatio,
                n = void 0 === r ? window.devicePixelRatio : r,
                a = t.maxPixelRatio;
            for (let o = void 0 === a ? 3 : a; o > 1; --o)
                if (n >= o - .5) return e.replace(/\.(png|jpg)/, "@".concat(o, "x.$1"));
            return e
        }
    }, , , , , , function(e, t, r) {
        "use strict";
        var n = r(30),
            a = r(5),
            o = r(2),
            i = r(12),
            s = r(6),
            c = r(20),
            u = r(1);
        t.a = e => {
            const t = o.useState(0),
                r = Object(n.a)(t, 2),
                a = r[0],
                m = r[1],
                g = o.useState(!e.delay),
                f = Object(n.a)(g, 2),
                h = f[0],
                O = f[1],
                j = o.useMemo(() => Object(i.shuffle)(s.j), [])[a % s.j.length],
                v = e.onTestimonialChange,
                S = e.timeout,
                E = e.delay;
            return o.useEffect(() => {
                if (!h) return;
                Object(c.b)(u.j.TestimonialShown, {
                    testimonial: j.quote
                });
                const e = setTimeout(() => {
                    m(e => e + 1), v && v(a + 1)
                }, S || 5e3);
                return () => {
                    clearTimeout(e)
                }
            }, [a, h, v, S, j.quote]), o.useEffect(() => {
                let e;
                return h || (e = setTimeout(() => O(!0), E)), () => {
                    clearTimeout(e)
                }
            }, [h, E]), o.createElement(d, {
                className: e.className,
                style: {
                    opacity: h ? 1 : 0
                },
                tabIndex: 0
            }, o.createElement(p, null, j.quote), o.createElement(l, {
                src: j.iconUrl,
                alt: j.author
            }), o.createElement(b, null, o.createElement("b", null, j.author), o.createElement("br", null), j.authorDescription))
        };
        const d = a.d.div.withConfig({
                displayName: "Testimonials__Testimonial",
                componentId: "sc-2hispw-0"
            })(["position:relative;background:", ";padding:25px;border-radius:4px;transition:opacity 0.3s ease-out;display:flex;flex-wrap:wrap;align-items:center;"], e => e.theme.testimonialBgColor),
            l = a.d.img.withConfig({
                displayName: "Testimonials__TestimonialIcon",
                componentId: "sc-2hispw-1"
            })(["width:50px;height:50px;margin-right:20px;margin-left:-3px;object-fit:cover;object-position:center;border-radius:50px;overflow:hidden;"]),
            p = a.d.blockquote.withConfig({
                displayName: "Testimonials__TestimonialQuote",
                componentId: "sc-2hispw-2"
            })(["flex:1 0 100%;font-weight:bold;font-size:20px;line-height:25px;color:", ";margin:0 0 20px;&::before{content:'\u201c';}&::after{content:'\u201d';}"], e => e.theme.fgColor),
            b = a.d.p.withConfig({
                displayName: "Testimonials__TestimonialAuthor",
                componentId: "sc-2hispw-3"
            })(["font-size:15px;line-height:20px;color:", ";margin:0;"], e => e.theme.dimmedFgColor)
    }, , , , function(e, t, r) {
        "use strict";
        var n = r(9),
            a = r(5),
            o = r(2),
            i = r(99),
            s = r(6),
            c = r(26);

        function u() {
            const e = Object(n.a)(["\n  position: relative;\n  height: 140px;\n  width: 220px;\n\n  &:after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 35px;\n    background: ", ";\n  }\n"]);
            return u = function() {
                return e
            }, e
        }
        t.a = ({
            className: e,
            gradient: t
        }) => o.createElement(d, {
            className: e,
            role: "image",
            gradient: t
        }, o.createElement(l, Object.assign({
            alt: ""
        }, Object(i.a)("".concat(s.g, "/intro_woman.png")))), o.createElement(p, Object.assign({
            alt: ""
        }, Object(i.a)("".concat(s.g, "/intro_man.png")))));
        const d = Object(c.a)("div", ["gradient"])(u(), e => e.theme[e.gradient]),
            l = a.d.img.withConfig({
                displayName: "AvatarCouple__WomanImg",
                componentId: "c2bz57-0"
            })(["position:absolute;top:0;left:0;z-index:1;height:100%;"]),
            p = a.d.img.withConfig({
                displayName: "AvatarCouple__ManImg",
                componentId: "c2bz57-1"
            })(["position:absolute;top:0;left:80px;z-index:1;height:100%;"])
    }, , , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f
        })), r.d(t, "b", (function() {
            return h
        }));
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(1),
            s = r(8),
            c = r(6),
            u = r(7);
        var d = e => new Promise(t => {
                const r = new FileReader;
                r.onload = e => {
                    if (!e.target) return t(-1);
                    const r = e.target,
                        n = new DataView(r.result);
                    if (65496 !== n.getUint16(0, !1)) return t(-2);
                    const a = n.byteLength;
                    let o = 2;
                    for (; o < a;) {
                        if (n.getUint16(o + 2, !1) <= 8) return t(-1);
                        const e = n.getUint16(o, !1);
                        if (o += 2, 65505 === e) {
                            if (1165519206 !== n.getUint32(o += 2, !1)) return t(-1);
                            const e = 18761 === n.getUint16(o += 6, !1);
                            o += n.getUint32(o + 4, e);
                            const r = n.getUint16(o, e);
                            o += 2;
                            for (let a = 0; a < r; a++)
                                if (274 === n.getUint16(o + 12 * a, e)) return t(n.getUint16(o + 12 * a + 8, e))
                        } else {
                            if (65280 !== (65280 & e)) break;
                            o += n.getUint16(o, !1)
                        }
                    }
                    return t(-1)
                }, r.readAsArrayBuffer(e)
            }),
            l = r(173);
        const p = r.n(l)()();
        var b = function() {
            var e = Object(o.a)(a.a.mark((function e(t, r, n, o) {
                var i, s, c, u;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return (i = document.createElement("canvas")).width = r, i.height = n, e.next = 5, p.resize(t, i, {
                                alpha: !0
                            });
                        case 5:
                            if (s = e.sent, c = document.createElement("canvas"), u = c.getContext("2d")) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return", s);
                        case 10:
                            4 < o && o < 9 ? (c.width = n, c.height = r) : (c.width = r, c.height = n), e.t0 = o, e.next = 2 === e.t0 ? 14 : 3 === e.t0 ? 16 : 4 === e.t0 ? 18 : 5 === e.t0 ? 20 : 6 === e.t0 ? 22 : 7 === e.t0 ? 24 : 8 === e.t0 ? 26 : 28;
                            break;
                        case 14:
                            return u.transform(-1, 0, 0, 1, r, 0), e.abrupt("break", 29);
                        case 16:
                            return u.transform(-1, 0, 0, -1, r, n), e.abrupt("break", 29);
                        case 18:
                            return u.transform(1, 0, 0, -1, 0, n), e.abrupt("break", 29);
                        case 20:
                            return u.transform(0, 1, 1, 0, 0, 0), e.abrupt("break", 29);
                        case 22:
                            return u.transform(0, 1, -1, 0, n, 0), e.abrupt("break", 29);
                        case 24:
                            return u.transform(0, -1, -1, 0, n, r), e.abrupt("break", 29);
                        case 26:
                            return u.transform(0, -1, 1, 0, 0, r), e.abrupt("break", 29);
                        case 28:
                            return e.abrupt("return", s);
                        case 29:
                            return u.drawImage(s, 0, 0), e.abrupt("return", c);
                        case 31:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, r, n, a) {
                return e.apply(this, arguments)
            }
        }();
        var m = e => new Promise((t, r) => {
            const n = new Image;
            try {
                const r = (window.URL || window.webkitURL).createObjectURL(e);
                n.src = r, n.onload = () => {
                    t(n)
                }
            } catch (a) {
                try {
                    const a = new FileReader;
                    a.onload = () => {
                        "string" === typeof a.result && (n.src = a.result, n.onload = () => {
                            t(n)
                        }, n.onerror = e => {
                            r(e)
                        })
                    }, a.onerror = e => {
                        r(e)
                    }, a.readAsDataURL(e)
                } catch (a) {
                    r(a)
                }
            }
        });
        var g = function() {
            var e = Object(o.a)(a.a.mark((function e(t, r, n, o) {
                var i, s, c, u, l, g, f;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, m(t);
                        case 2:
                            return i = e.sent, e.next = 5, d(t);
                        case 5:
                            if (s = e.sent, o && o(i, s), c = i.width, u = i.height, l = t, !(c * u > r)) {
                                e.next = 22;
                                break
                            }
                            return g = Math.sqrt(c * u / r), c = Math.floor(c / g), u = Math.floor(u / g), e.next = 16, b(i, c, u, s);
                        case 16:
                            return f = e.sent, e.next = 19, p.toBlob(f, "image/jpeg", .95);
                        case 19:
                            l = e.sent, e.next = 29;
                            break;
                        case 22:
                            if (!n) {
                                e.next = 29;
                                break
                            }
                            return e.next = 25, b(i, c, u, s);
                        case 25:
                            return f = e.sent, e.next = 28, p.toBlob(f, "image/jpeg", .95);
                        case 28:
                            l = e.sent;
                        case 29:
                            return e.abrupt("return", {
                                blob: l,
                                width: c,
                                height: u
                            });
                        case 30:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, r, n, a) {
                return e.apply(this, arguments)
            }
        }();
        const f = e => function() {
                var t = Object(o.a)(a.a.mark((function t(r, n) {
                    return a.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", Object(u.a)(i.c.GetImageSignedUrl, r, {
                                    url: e
                                }, {
                                    onRequest: () => fetch("".concat(c.a, "/images/signed/actions/get_url"), Object(s.b)(n(), "POST", {
                                        image_url: e
                                    }))
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            h = (e, t, r) => function() {
                var n = Object(o.a)(a.a.mark((function n(o, d) {
                    var l, p, b, m, f;
                    return a.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (l = e, p = 0, b = 0, !t) {
                                    n.next = 10;
                                    break
                                }
                                return n.next = 6, g(e, t, !1, r);
                            case 6:
                                m = n.sent, l = m.blob, p = m.width, b = m.height;
                            case 10:
                                return f = Object(s.b)(d(), "POST", l), n.abrupt("return", Object(u.a)(i.c.UploadImage, o, {
                                    width: p,
                                    height: b
                                }, {
                                    onRequest: () => fetch("".concat(c.a, "/images"), f)
                                }));
                            case 12:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }()
    }, , function(e, t, r) {
        "use strict";
        var n = r(3),
            a = r.n(n),
            o = r(4),
            i = r(157),
            s = r.n(i),
            c = (r(186), r(195), r(197), r(216), r(219), r(222), r(158)),
            u = r(160),
            d = r.n(u);
        r(248);
        d.a.init(), s.a.shim(), "undefined" === typeof window || window.Promise || (window.Promise = c.a), t.a = Object(o.a)(a.a.mark((function e() {
            return a.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if ("undefined" !== typeof window) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return");
                    case 2:
                        if (window.fetch) {
                            e.next = 5;
                            break
                        }
                        return e.next = 5, r.e(16).then(r.bind(null, 297));
                    case 5:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))
    }, , , , , , , , , function(e) {
        e.exports = JSON.parse('{"fgColor":"#000","bgColor":"#f8f8fa","fadeoutGradientBgColor":"linear-gradient(180deg, rgba(248, 248, 250, 1) 0%, rgba(248, 248, 250, 0) 100%)","solidButtonFgColor":"#FFF","solidButtonBgColor":"#000","solidButtonDisabledFgColor":"#EEE","solidButtonDisabledBgColor":"#ADADAF","vkButtonFgColor":"#000","vkButtonBgColor":"#FFF","borderButtonBgColor":"transparent","borderButtonSelectedBgColor":"#4AD209","borderButtonBorderColor":"#CCCCCC","borderButtonBorderHoverColor":"#4AD209","borderButtonSelectedBorderColor":"#4AD209","borderButtonSelectedFgColor":"#FFF","borderButtonCheckColor":"#4AD209","dialogButtonDisabledBgColor":"#ADADAF","dialogButtonBgColor":"#000","spotlightButtonFgColor":"#000","spotlightButtonBgColor":"#FFF","loginBgColor":"#FFF","chatBgColor":"#FFF","lightFgColor":"#808080","dimmedFgColor":"rgba(0,0,0,0.6)","dimmedBgColor":"#B2B2B2","borderColor":"#dedee0","dimmedBorderColor":"#DEDEE0","placeholderColor":"rgba(0,0,0,0.5)","bubbleInBgColor":"#FFF","bubbleSelectedInBgColor":"#EEE","bubbleInFgColor":"#000000","bubbleOutBgColor":"#F8F6F1","bubbleSelectedOutBgColor":"#EEE","bubbleOutFgColor":"#000000","bubbleImageSelectedBgColor":"#d2d2df","bubbleThumbFgColor":"rgba(0,0,0,0.3)","bubbleThumbBgColor":"#FFF","bubbleThumbSelectedFgColor":"#000","errorFgColor":"#ff0000","errorLightFgColor":"#FF0000","errorBgColor":"#ff0000","successFgColor":"#66d54f","scoreFgColor":"#005FD1","themeSwitchFgColor":"#005FD1","themeSwitchBgColor":"#DDDDDD","primaryColor":"#005FD1","shadowColor":"#AAAAAA","notificationBgColor":"#8e8e96","notificationFgColor":"#FFFFFF","keyboardBorderColor":"#005FD1","keyboardBgColor":"#F8F8FA","profileEggBgColor":"#F1F1F1","outerBgColor":"#F3F3F5","outlineColor":"#005FD1","sliderRailColor":"#F5F5F5","sliderRailDisabledColor":"#B2B2B2","sliderRailGradientColor":"linear-gradient(90deg,#ff4869 0%,#fffb93 50%,#2bd900 100%)","popupFgColor":"#666666","chatGradientBgColor":"linear-gradient(180deg, #DFDAE9 0%, #F9EECA 100%)","widgetBgColor":"#FFFFFF","widgetInputBgColor":"#F9F9F9","widgetButtonBgColor":"#000","widgetButtonDisabledBgColor":"#ADADAF","widgetButtonBorderColor":"#DEDEE0","chatInputPlaceholderColor":"#AAAAAA","moodTrackerCurrentDayColor":"#999","moodTrackerDayColor":"#DEDEE0","chatInputBgColor":"#FFFFFF","chatInputBorderColor":"#FFFFFF","sidebarParagraphColor":"#808080","missionFgColor":"#000","missionBgColor":"#FFF","missionCompletedFgColor":"#666","missionCompletedBgColor":"rgba(0,0,0,0.5)","dialogBgColor":"#fff","inputBgColor":"#F8F8F8","trackFgColor":"#FFFFFF","lightButtonShadowColor":"rgba(0, 0, 0, 0.05)","sidebarMenuBackground":"#FFF","bodyBgColor":"#FFF","testimonialBgColor":"#f8f8fa","progressBgColor":"#CCCCCC","progressFgColor":"#000000","phraseBoxShadow":"0 0px 0.9px rgba(0, 0, 0, 0.059), 0 0px 2.9px rgba(0, 0, 0, 0.068), 0 0px 14px rgba(0, 0, 0, 0.1)","scrollThumbColor":"rgba(0,0,0,0.2)","scrollInactiveThumbColor":"rgba(0,0,0,0)","avatarGradient":"linear-gradient(360deg, #f8f8fa 0%, rgba(248, 248, 250, 0) 100%)","avatarSignupGradient":"linear-gradient(360deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)","avatarDialogGradient":"linear-gradient(360deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)","lightButtonBgColor":"#FFF","thoughtBgColor":"linear-gradient(180deg, rgba(223,218,233,0.8) 0%, rgba(244,234,208,0.8) 100%)","savedChatItemFgColor":"rgba(0,0,0,0.6)","savedChatItemDateFgColor":"#767679","savedChatItemBgColors":{"default":"#FFF","diary":"#FFF","story":"#CAEBFD","session":"#F8E9B7","song":"#CCF2BA","activity":"#C7D2F8"},"savedChatItemBadgeBgColors":{"default":"rgba(255,226,205,0.5)","diary":"rgba(255,226,205,0.5)","story":"rgba(255,255,255,0.4)","session":"rgba(255,255,255,0.4)","song":"rgba(255,255,255,0.4)","activity":"rgba(255,255,255,0.4)"},"newItemBgColor":"#4AD209","unreadBadgeBgColor":"#ff4848","unreadBadgeFgColor":"#ffffff","subscriptionBadgeFgColor":"#FFFFFF","subscriptionBadgeBgColor":"#4AD209"}')
    }, function(e) {
        e.exports = JSON.parse('{"fgColor":"#FFF","bgColor":"#10142F","fadeoutGradientBgColor":"linear-gradient(180deg, rgba(16, 20, 47, 1) 0%, rgba(16, 20, 47, 0) 100%)","solidButtonFgColor":"#FFFFFF","solidButtonBgColor":"#272b43","solidButtonDisabledFgColor":"#AAA","solidButtonDisabledBgColor":"#272b43","vkButtonBgColor":"rgba(255,255,255,0.2)","vkButtonFgColor":"#FFF","borderButtonBgColor":"transparent","borderButtonSelectedBgColor":"#4AD209","borderButtonBorderColor":"#CCCCCC","borderButtonBorderHoverColor":"#4AD209","borderButtonSelectedBorderColor":"#4AD209","borderButtonSelectedFgColor":"#FFF","borderButtonCheckColor":"#4AD209","dialogButtonDisabledBgColor":"#535569","dialogButtonBgColor":"#66697A","spotlightButtonFgColor":"#FFFFFF","spotlightButtonBgColor":"#272b43","loginBgColor":"#202433","chatBgColor":"#383c51","lightFgColor":"#808080","dimmedFgColor":"rgba(255,255,255,0.7)","dimmedBgColor":"#646771","borderColor":"#4F525E","dimmedBorderColor":"#363A47","placeholderColor":"rgba(255,255,255,0.5)","bubbleInBgColor":"#494c7e","bubbleSelectedInBgColor":"#6a6da0","bubbleInFgColor":"#FFF","bubbleOutBgColor":"#333872","bubbleSelectedOutBgColor":"#6a6da0","bubbleOutFgColor":"#FFF","bubbleImageSelectedBgColor":"#5a5e72","bubbleThumbFgColor":"rgba(255,255,255,0.5)","bubbleThumbBgColor":"#363A7E","bubbleThumbSelectedFgColor":"#FFF","errorFgColor":"#FF6363","errorLightFgColor":"#FF9292","errorBgColor":"#E62222","successFgColor":"#66d54f","scoreFgColor":"#fff","themeSwitchFgColor":"#00c500","themeSwitchBgColor":"#00c500","primaryColor":"#FFFFFF","shadowColor":"#000","notificationBgColor":"#69696f","notificationFgColor":"#FFFFFF","keyboardBorderColor":"#FFFFFF","keyboardBgColor":"#3a3d4a","profileEggBgColor":"#10142F","outerBgColor":"#1D202F","outlineColor":"#005FD1","sliderRailColor":"#10142F","sliderRailDisabledColor":"#646771","sliderRailGradientColor":"linear-gradient(90deg,#ff4869 0%,#fffb93 50%,#2bd900 100%)","popupFgColor":"#FFFFFF","chatGradientBgColor":"linear-gradient(180deg, #13173D 0%, #202470 100%);","widgetBgColor":"#35397e","widgetInputBgColor":"#222756","widgetButtonBorderColor":"#484d86","widgetButtonBgColor":"#5d6097","widgetButtonDisabledBgColor":"#484d86","chatInputPlaceholderColor":"#8d8fb6","moodTrackerCurrentDayColor":"#888","moodTrackerDayColor":"#4F525E","chatInputBgColor":"#35397e","chatInputBorderColor":"#4C508D","sidebarParagraphColor":"#808080","missionFgColor":"#000","missionBgColor":"#FFF","missionCompletedFgColor":"#666","missionCompletedBgColor":"rgba(0,0,0,0.5)","dialogBgColor":"#404359","inputBgColor":"#282B44","trackFgColor":"#FFFFFF","lightButtonShadowColor":"rgba(0, 0, 0, 0.05)","sidebarMenuBackground":"#404359","bodyBgColor":"#000","testimonialBgColor":"#383c51","progressBgColor":"#666666","progressFgColor":"#FFFFFF","phraseBoxShadow":"0 0px 0.9px rgba(0, 0, 0, 0.059), 0 0px 2.9px rgba(0, 0, 0, 0.068), 0 0px 14px rgba(0, 0, 0, 0.1)","scrollThumbColor":"rgba(255,255,255,0.2)","scrollInactiveThumbColor":"rgba(255,255,255,0)","avatarGradient":"linear-gradient(360deg, #10142f 0%, rgba(16, 20, 47, 0) 100%)","avatarSignupGradient":"linear-gradient(360deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)","avatarDialogGradient":"linear-gradient(360deg, #404359 0%, rgba(64, 67, 89, 0) 100%)","lightButtonBgColor":"#383c51","thoughtBgColor":"rgba(16,20,47,0.8)","savedChatItemFgColor":"rgba(0,0,0,0.6)","savedChatItemDateFgColor":"rgba(255,255,255,0.85)","savedChatItemBgColors":{"default":"#282B44","diary":"#282B44","story":"#607DA1","session":"#BD9327","song":"#59896C","activity":"#596289"},"savedChatItemBadgeBgColors":{"default":"rgba(255,226,205,0.5)","diary":"rgba(255,226,205,0.5)","story":"rgba(255,255,255,0.4)","session":"rgba(255,255,255,0.4)","song":"rgba(255,255,255,0.4)","activity":"rgba(255,255,255,0.4)"},"newItemBgColor":"#4AD209","unreadBadgeBgColor":"#ff4848","unreadBadgeFgColor":"#ffffff","subscriptionBadgeFgColor":"#FFFFFF","subscriptionBadgeBgColor":"#4AD209"}')
    }, , , , , , , , function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

        function n() {
            "serviceWorker" in navigator && navigator.serviceWorker.ready.then(e => {
                e.unregister()
            })
        }
    }, , , , function(e, t, r) {
        e.exports = r(179)
    }, function(e, t, r) {
        "use strict";
        r.r(t),
            function(e) {
                var t = r(3),
                    n = r.n(t),
                    a = r(4),
                    o = r(0),
                    i = r(156),
                    s = r(161),
                    c = r.n(s),
                    u = r(2),
                    d = r.n(u),
                    l = r(55),
                    p = r.n(l),
                    b = r(45),
                    m = r(103),
                    g = r(162),
                    f = r(17),
                    h = r(23),
                    O = r(102),
                    j = r(101),
                    v = r(47),
                    S = r(164),
                    E = r(44),
                    C = r(107),
                    w = r(57),
                    y = r(31),
                    _ = r(29),
                    I = r(1),
                    x = r(174);
                r(296);
                c()({
                    required: {
                        i: 12
                    }
                }), Object(E.b)();
                const T = Object(h.a)(),
                    k = Object(j.a)(T),
                    R = e => Object(b.combineReducers)(Object(o.a)(Object(o.a)({}, e), {}, {
                        router: Object(v.b)(T)
                    })),
                    P = Object(_.b)("production") && "?debug" !== window.location.search || "?nologger" === window.location.search ? [m.a, k] : [m.a, Object(g.createLogger)({
                        collapsed: !0,
                        duration: !0,
                        diff: !0
                    }), k],
                    F = Object(S.composeWithDevTools)(Object(b.applyMiddleware)(...P))(b.createStore)(R(O));
                if (window.matchMedia) {
                    const e = window.matchMedia("(prefers-color-scheme: dark)"),
                        t = e => {
                            Object(y.m)(e.matches ? I.p.Dark : I.p.Light)(F.dispatch, F.getState)
                        };
                    (null === e || void 0 === e ? void 0 : e.addEventListener) ? e.addEventListener("change", t): (null === e || void 0 === e ? void 0 : e.addListener) && e.addListener(t)
                }
                const A = () => (F.dispatch(Object(w.e)()), F.dispatch(Object(w.b)()), d.a.createElement(f.a, {
                        store: F
                    }, d.a.createElement(v.a, {
                        history: T
                    }, d.a.createElement(C.a, null)))),
                    M = function() {
                        var e = Object(a.a)(n.a.mark((function e() {
                            var t;
                            return n.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(i.a)();
                                    case 2:
                                        t = document.getElementById("root"), p.a.render(d.a.createElement(A, null), t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                window.addEventListener("DOMContentLoaded", M);
                const D = e;
                if (D.hot) {
                    const e = () => {
                        p.a.render(d.a.createElement(f.a, {
                            store: F
                        }, d.a.createElement(v.a, {
                            history: T
                        }, d.a.createElement(C.a, null))), document.getElementById("root"))
                    };
                    D.hot.accept("./App", e), D.hot.accept("./reducers", () => {
                        const e = r(102);
                        F.replaceReducer(R(e))
                    })
                }
                Object(_.b)("production", "testing") || Object(x.a)()
            }.call(this, r(120)(e))
    }],
    [
        [178, 18, 19]
    ]
]);
//# sourceMappingURL=main.1cf1c183.chunk.js.map