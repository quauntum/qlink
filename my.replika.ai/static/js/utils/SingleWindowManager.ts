import guid from 'simple-guid';
import ls from 'local-storage';
import { setActiveWindow } from '../actions/ui';
import { TDA } from '../types/redux';

export type SingleWindowManager = {
  setActive: () => void;
  enable: (activate: boolean) => void;
  disable: () => void;
};

const WindowId = guid();

window.addEventListener('beforeunload', () => {
  if (ls.get(WIN_ID_KEY) === WindowId) {
    ls.set(WIN_ID_KEY, null);
  }
});

const WIN_ID_KEY = 'winId';

let singleWindowManager: SingleWindowManager;

export function getSingleWindowManager(dispatch: TDA): SingleWindowManager {
  if (!singleWindowManager) {
    const onActiveWindowChange = () => {
      const winId = ls.get(WIN_ID_KEY);
      dispatch(setActiveWindow(winId === WindowId));
    };

    const setActive = () => {
      if (ls.get(WIN_ID_KEY) !== WindowId) {
        ls.set(WIN_ID_KEY, WindowId);

        // TODO: dispatch might be undefined at login when user
        // has not confirmed email, investigate
        if (dispatch) {
          dispatch(setActiveWindow(true));
        }
      }
    };

    singleWindowManager = {
      setActive,
      enable: activate => {
        ls.on(WIN_ID_KEY, onActiveWindowChange);
        if (activate || !ls.get(WIN_ID_KEY)) {
          setActive();
        }
        onActiveWindowChange();
      },
      disable: () => {
        ls.off(WIN_ID_KEY, onActiveWindowChange);
      }
    };
  }

  return singleWindowManager;
}
