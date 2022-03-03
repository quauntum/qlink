import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import { css, createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import getTheme from './utils/getTheme';
import { RootState } from './types/states';
import {
  Themes,
  Routes,
  MetricsEvents,
  IntroStep,
  ZIndices,
} from './types/enums';
import { captureError } from './utils/initSentry';
import { ApiError } from './utils/apiError';
import mobileMedia from './utils/mobileMedia';
import LoadingPage from './components/LoadingPage';
import ErrorScreen from './components/App/ErrorScreen';
import A11yNavigationNotifier from './components/App/A11yNavigationNotifier';
import A11yNotifier from './components/App/A11yNotifier';
import { connectThemeName } from './utils/withThemeName';
import Welcome from './routes/Welcome';
import NetworkStatus from './components/NetworkStatus';
import { initMetrics, logEvent } from './utils/metrics';
import { Desktop } from './components/responsive';
import areScrollbarsVisible from './utils/areScrollbarsVisible';
import { Bot } from './types/models';
import StripeProvider from './components/StripeProvider';
import { logoutOnAuthError } from './actions/auth';
import { ReactDispatch as RD } from './types/redux';

const loadableOptions = { fallback: <LoadingPage /> };

const Chat = loadable(
  () => import(/* webpackChunkName: "Chat" */ './routes/Chat'),
  loadableOptions
);

const Login = loadable(
  () => import(/* webpackChunkName: "Login" */ './routes/Login'),
  loadableOptions
);

const Signup = loadable(
  () => import(/* webpackChunkName: "Signup" */ './routes/Signup'),
  loadableOptions
);

const ConfirmEmail = loadable(
  () => import(/* webpackChunkName: "ConfirmEmail" */ './routes/ConfirmEmail'),
  loadableOptions
);

const DeleteAccount = loadable(
  () =>
    import(/* webpackChunkName: "DeleteAccount" */ './routes/DeleteAccount'),
  loadableOptions
);

const RecoverPassword = loadable(
  () =>
    import(
      /* webpackChunkName: "RecoverPassword" */ './routes/RecoverPassword'
    ),
  loadableOptions
);

const VerifyEmail = loadable(
  () => import(/* webpackChunkName: "VerifyEmail" */ './routes/VerifyEmail'),
  loadableOptions
);

const AvatarReboarding = loadable(
  () =>
    import(
      /* webpackChunkName: "AvatarReboarding" */ './routes/AvatarReboarding'
    ),
  loadableOptions
);

type Props = {
  path?: string;
  authToken: string | undefined;
  deviceId: string | undefined;
  userId: string | undefined;
  trialPeriodExpired: boolean;
  themeName: Themes;
  signupInProgress: boolean;
  introStep: IntroStep | null;
  bot: Bot | undefined;
  logoutOnAuthError: RD<typeof logoutOnAuthError>;
};

type State = {
  hasError: boolean;
};

/**
 * Defines routes that should be available in any app state
 */
const RootSwitch = ({ children }: { children: React.ReactNode }) => {
  return (
    <Switch>
      <Route path={Routes.RecoverPassword} component={RecoverPassword} />
      <Route path={Routes.VerifyEmail} component={VerifyEmail} />
      {children}
    </Switch>
  );
};

const AppGlobal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <A11yNavigationNotifier />
      <A11yNotifier>{children}</A11yNotifier>
      <NetworkStatus />
      <GlobalStyle />
    </>
  );
};

function observeAutoTranslation() {
  if (!document || !window.MutationObserver) {
    return;
  }

  try {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      // https://www.ctrl.blog/entry/detect-machine-translated-webpages.html
      const isAutoTranslated = !!document.querySelector(
        'html.translated-ltr, head.translated-rtl, ya-tr-span, *[_msttexthash]'
      );

      if (isAutoTranslated) {
        const lang = document.documentElement.getAttribute('lang');
        logEvent(MetricsEvents.PageIsAutoTranslated, { lang });
      }
    });

    observer.observe(html, {
      attributes: true,
      childList: false,
      subtree: false,
    });
  } catch (e) {
    console.error('HTML mutation observer error:', e);
  }
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    initMetrics(this.props.userId);

    logEvent(MetricsEvents.Launched, { authUserId: this.props.userId });

    observeAutoTranslation();

    window.addEventListener('unhandledrejection', (event) => {
      const err = event.reason;
      if (err instanceof ApiError && err.statusCode === 401) {
        this.props.logoutOnAuthError();
        event.preventDefault();
      }
    });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = { hasError: false };

  componentDidCatch(err, info) {
    if (!(err instanceof ApiError)) {
      captureError(err, info);
    } else if (err.statusCode === 401) {
      this.props.logoutOnAuthError();
    }
  }

  public render() {
    const {
      themeName,
      authToken,
      trialPeriodExpired,
      signupInProgress,
      introStep,
      bot,
    } = this.props;

    if (this.state.hasError) {
      return <ErrorScreen onClose={() => this.setState({ hasError: false })} />;
    }

    const theme = getTheme(themeName);

    // user is not logged in, or just signed up (and we're waiting for testimonial timeout to pass)
    if (!authToken || signupInProgress) {
      return (
        <ThemeProvider theme={getTheme(Themes.Light)}>
          <AppGlobal>
            <RootSwitch>
              <Route path={Routes.Main} exact component={Welcome} />
              <Route path={Routes.Login} component={Login} />
              <Route path={Routes.Signup} component={Signup} />
              <Redirect from="*" to={Routes.Main} />
            </RootSwitch>
          </AppGlobal>
        </ThemeProvider>
      );
    }

    // user is logged in, but his trial is expired
    if (trialPeriodExpired) {
      return (
        <ThemeProvider theme={theme}>
          <AppGlobal>
            <RootSwitch>
              <Route path={Routes.ConfirmSignup} component={ConfirmEmail} />
              <Redirect from="*" to={Routes.ConfirmSignup} />
            </RootSwitch>
          </AppGlobal>
        </ThemeProvider>
      );
    }

    // user is logged in and we are good to go
    return (
      <ThemeProvider theme={theme}>
        <StripeProvider>
          <AppGlobal>
            <RootSwitch>
              <Route
                path={Routes.DeleteAccount}
                exact
                component={DeleteAccount}
              />
              <Redirect from={Routes.Login} to={Routes.Main} />
              <Redirect from={Routes.Signup} to={Routes.Main} />
              {introStep ? (
                <Redirect exact from={Routes.Main} to={Routes.Intro} />
              ) : (
                <Redirect from={Routes.Intro} to={Routes.Main} />
              )}
              {!!bot?.avatar ? (
                <Redirect from={Routes.ChooseAvatar} to={Routes.Main} />
              ) : (
                <Route
                  path={Routes.ChooseAvatar}
                  component={AvatarReboarding}
                />
              )}
              <Route path={Routes.Main} component={Chat} />
            </RootSwitch>
            <Desktop>
              <Route
                exact
                path={Routes.Stats}
                render={() => <Redirect to={Routes.Main} />}
              />
            </Desktop>
          </AppGlobal>
        </StripeProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  ...connectThemeName(state),
  authToken: state.auth.persist.authToken,
  signupInProgress: state.auth.signupState.signupInProgress,
  userId: state.auth.persist.userId,
  deviceId: state.auth.persist.deviceId,
  trialPeriodExpired: state.auth.trialPeriodExpired,
  introStep: state.ui.introStep,
  bot: state.profile.persist.bot,
});

export default connect(mapStateToProps, { logoutOnAuthError })(App);

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    overflow: hidden;
  }

  ${mobileMedia`
    html {
      overflow: auto;
    }
  `}

  body {
    margin: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    min-height: 100vh;
    font-family: 'Muli', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    background-color: ${(p) => p.theme.bodyBgColor};
  }

  ${
    process.env.NODE_ENV !== 'production'
      ? css`
          /* customize CRA error frame */
          @media (min-width: 414px) {
            body > iframe {
              width: 30% !important;
              min-width: 400px !important;
              left: auto !important;
              right: 0 !important;
              border-left: 1px solid #aaa !important;
              box-shadow: 1px 0px 10px 5px rgba(0, 0, 0, 0.3) !important;
              opacity: 0.95;
            }
          }
        `
      : ''
  }

  #root {
    min-height: 100vh;
    overflow: hidden;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a img {
    border: 0;
  }

  * { box-sizing: border-box }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  .focus-visible:focus {
    outline-color: ${(p) => p.theme.outlineColor};
  }

  button.focus-visible:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }

  .popupbox.popupbox {
    z-index: ${ZIndices.Popupbox};
  }

  [data-hidescrollbar] {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${(p) =>
    areScrollbarsVisible()
      ? // customized scrollbars are shown when "Show scroll bars" system preference is set to "always"
        css`
          * {
            scrollbar-width: thin;
            scrollbar-color: ${(p) => p.theme.scrollThumbColor} transparent;
          }

          *::-webkit-scrollbar {
            background-color: transparent;
          }

          *::-webkit-scrollbar:vertical {
            width: 6px;
          }

          *::-webkit-scrollbar:horizontal {
            height: 6px;
          }

          *::-webkit-scrollbar-track {
            background-color: transparent;
          }

          *::-webkit-scrollbar-thumb {
            border-radius: 3px;
            background-color: ${p.theme.scrollThumbColor};
          }
        `
      : ''}
`;
