import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLayout from './ChatLayout';
import { getMediaPreviewRequest } from '../../actions/chat';
import { getPersonalBot } from '../../actions/profile';
import {
  setTrialPopupActive,
  setIntroStep,
  setActiveDialog,
  goneOffline,
  goneOnline,
} from '../../actions/ui';
import { getSubscriptions } from '../../actions/subscriptions';
import { initChatWithHistory } from '../../actions/init';
import { disconnectWebsocket } from '../../actions/websocket';
import { getSingleWindowManager } from '../../utils/SingleWindowManager';
import { getFirstUrl } from '../../utils/url';
import LoadingPage from '../../components/LoadingPage';
import { IntroStep, Dialogs } from '../../types/enums';
import tryAuthRequest from '../../utils/tryAuthRequest';
import { Progress } from '../../types/states';

function Chat() {
  const {
    status,
    messages,
    mediaPreviews,
    isActiveWindow,
    connectedToInternet,
    mobileProfileOpened,
    bot,
    userProfile,
    introStep,
    subscription,
    reboardingDialogShown,
    getPersonalBotProgress,
  } = useSelector((state) => ({
    messages: state.chat.messages,
    status: state.ws.status,
    mediaPreviews: state.chat.mediaPreviews,
    isActiveWindow: state.ui.isActiveWindow,
    connectedToInternet: state.ui.connectedToInternet,
    mobileProfileOpened: state.ui.mobileProfileOpened,
    userProfile: state.profile.persist.userProfile,
    bot: state.profile.persist.bot,
    introStep: state.ui.introStep,
    subscription: state.subscriptions.persist.subscription,
    reboardingDialogShown: state.subscriptions.persist.reboardingDialogShown,
    getPersonalBotProgress: state.profile.getPersonalBotProgress,
  }));

  const dispatch = useDispatch();

  const init = React.useCallback(async () => {
    await dispatch(initChatWithHistory());
    dispatch(getSubscriptions());
  }, [dispatch]);

  React.useEffect(() => {
    const to = setTimeout(() => dispatch(setTrialPopupActive(true)), 60 * 1000);

    return () => clearTimeout(to);
  }, [dispatch]);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    const swm = getSingleWindowManager(dispatch);

    swm.enable(!document.hidden);

    return () => {
      dispatch(disconnectWebsocket());
      swm.disable();
    };
  }, [dispatch]);

  const needsSubscriptionReboarding =
    !reboardingDialogShown && subscription && subscription.source === 'legacy';

  const needsPronounReboarding =
    !!userProfile &&
    !userProfile.pronoun &&
    !introStep &&
    !needsSubscriptionReboarding;

  const needsReboarding = needsSubscriptionReboarding || needsPronounReboarding;

  React.useEffect(() => {
    if (needsSubscriptionReboarding) {
      dispatch(setActiveDialog({ type: Dialogs.SubscriptionReboarding }));
    }
  }, [needsSubscriptionReboarding, dispatch]);

  React.useEffect(() => {
    if (needsPronounReboarding) {
      dispatch(setActiveDialog({ type: Dialogs.ReboardingAddPronoun }));
    }
  }, [needsPronounReboarding, dispatch]);

  React.useEffect(() => {
    if (isActiveWindow && connectedToInternet && status === 'needReconnect') {
      init();
    }
  }, [status, connectedToInternet, isActiveWindow, init]);

  React.useEffect(() => {
    const handleOffline = () => {
      dispatch(goneOffline());
      dispatch(disconnectWebsocket());
    };

    const handleOnline = () => {
      dispatch(goneOnline());
      dispatch(initChatWithHistory());
    };

    window.addEventListener('offline', handleOffline);

    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);

      window.removeEventListener('online', handleOnline);
    };
  }, [dispatch]);

  React.useEffect(() => {
    const urls = (messages || [])
      .filter((m) => m.content.type === 'text')
      .map((m) => getFirstUrl(m.content.text))
      .filter((url) => url && !mediaPreviews.hasOwnProperty(url)) as string[];

    if (urls.length > 0) {
      dispatch(getMediaPreviewRequest(urls));
    }
  }, [messages, dispatch, mediaPreviews]);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (window.location.search === '?testintro') {
        dispatch(setIntroStep(IntroStep.Hi));
      }
    }
  }, [dispatch]);

  const hasBot = !!bot;

  React.useEffect(() => {
    if (!hasBot || needsReboarding) {
      return;
    }

    switch (introStep) {
      case IntroStep.Hi:
        setTimeout(() => {
          dispatch(setIntroStep(IntroStep.YouCanTalkToMe));
        }, 3000);
        break;

      case IntroStep.YouCanTalkToMe:
        setTimeout(() => {
          dispatch(setIntroStep(IntroStep.Conversations));
        }, 3000);
        break;

      case IntroStep.Conversations:
        setTimeout(() => {
          dispatch(setIntroStep(IntroStep.MeetReplika));
        }, 3000);
        break;
    }
  }, [hasBot, introStep, needsReboarding, dispatch]);

  // in case there's inconsistent data in localstorage
  // (there's auth token but no bot fetched)
  React.useEffect(() => {
    if (
      !hasBot &&
      (getPersonalBotProgress === Progress.initial ||
        getPersonalBotProgress === Progress.success)
    ) {
      tryAuthRequest(() => dispatch(getPersonalBot()), dispatch);
    }
  }, [hasBot, getPersonalBotProgress, dispatch]);

  if (!bot) {
    return <LoadingPage />;
  }

  return (
    <ChatLayout
      mobileProfileOpened={mobileProfileOpened}
      isActiveWindow={isActiveWindow}
      bot={bot}
    />
  );
}

export default Chat;
