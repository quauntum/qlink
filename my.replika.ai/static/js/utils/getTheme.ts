import { Theme } from '../types/theme';
import { Themes } from '../types/enums';
import lightTheme from '../themes/light.json';
import darkTheme from '../themes/dark.json';

export default function getTheme(name: Themes): Theme {
  switch (name) {
    case Themes.Light:
      return lightTheme;
    case Themes.Dark:
      return darkTheme;
  }
}
