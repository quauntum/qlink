import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { Themes } from '../types/enums';
import { RootState } from '../types/states';

const detectTheme = () => {
  if (window.matchMedia) {
    const queryResult = window.matchMedia('(prefers-color-scheme: dark)');
    return queryResult.matches ? Themes.Dark : Themes.Light;
  }

  return Themes.Light;
};

export const connectThemeName = (state: RootState) => {
  const { userId } = state.auth.persist;
  return {
    themeName: (userId && state.ui.persist.themeNames[userId]) || detectTheme()
  };
};

function withThemeName<P extends { themeName: Themes }>(
  Cmp: React.ComponentType<P>
) {
  // @ts-ignore
  return connect(connectThemeName)(Cmp);
}

export function useThemeName() {
  return useSelector(state => connectThemeName(state).themeName);
}

export default withThemeName;
