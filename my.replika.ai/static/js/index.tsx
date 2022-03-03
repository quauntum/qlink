import polyfills from './polyfills';
import browserUpdate from 'browser-update';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import * as reducers from './reducers';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './types/states';
import initSentry from './utils/initSentry';
import App from './App';
import { initPersist, checkDeviceId } from './actions/init';
import { setTheme } from './actions/ui';
import { isEnvironment } from './utils/environment';
import { Themes } from './types/enums';

import {
  // registerServiceWorker,
  unregister
} from './registerServiceWorker';

import 'focus-visible';

browserUpdate({
  required: { i: 12 }
});

if (
  process.env.NODE_ENV !== 'production' &&
  window.location.search !== '?noaxe'
) {
  // react-axe KILLS browser if you try to access it via network (like http://10.0.0.1:3000)
  if (window.location.pathname === 'localhost') {
    // eslint-disable-next-line
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
  }
}

initSentry();

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const getCombinedReducer = r =>
  combineReducers<RootState>({
    ...r,
    router: connectRouter(history)
  });

const middlewares =
  (isEnvironment('production') && window.location.search !== '?debug') ||
  window.location.search === '?nologger'
    ? [thunk, middleware]
    : [
        thunk,
        createLogger({ collapsed: true, duration: true, diff: true }),
        middleware
      ];

const store: Store = composeWithDevTools(applyMiddleware(...middlewares))(
  createStore
)(getCombinedReducer(reducers));

if (window.matchMedia) {
  const match = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = e => {
    setTheme(e.matches ? Themes.Dark : Themes.Light)(
      store.dispatch,
      store.getState
    );
  };
  if (match?.addEventListener) {
    match.addEventListener('change', handler);
  } else if (match?.addListener) {
    match.addListener(handler);
  }
}

const Root: React.SFC<{}> = () => {
  store.dispatch<any>(initPersist());
  store.dispatch(checkDeviceId());

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

const renderRoot = async () => {
  await polyfills();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, rootEl);
};

window.addEventListener('DOMContentLoaded', renderRoot);

interface WebpackNodeModule extends NodeModule {
  hot: {
    accept: (name: string, handler: () => void) => void;
  };
}

// eslint-disable-next-line
const webpackNodeModule = module as WebpackNodeModule;

if (webpackNodeModule.hot) {
  const rerender = () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    );
  };

  webpackNodeModule.hot.accept('./App', rerender);

  webpackNodeModule.hot.accept('./reducers', () => {
    // eslint-disable-next-line
    const nextReducers = require('./reducers');
    store.replaceReducer(getCombinedReducer(nextReducers));
  });
}

if (isEnvironment('production', 'testing')) {
  // registerServiceWorker();
} else {
  unregister();
}
