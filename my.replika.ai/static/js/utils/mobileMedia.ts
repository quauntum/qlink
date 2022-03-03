import { css } from 'styled-components/macro';
import {
  CHAT_MOBILE_WIDTH_THRESHOLD,
  DIALOG_MOBILE_WIDTH_THRESHOLD,
  RIGHT_PANEL_WIDTH_THRESHOLD
} from './constants';

const mobileMedia = (strings, ...interpolations) => css`
  @media (max-width: ${CHAT_MOBILE_WIDTH_THRESHOLD}px) {
    ${css(strings, ...interpolations)};
  }
`;

export const dialogMobileMedia = (strings, ...interpolations) => css`
  @media (max-width: ${DIALOG_MOBILE_WIDTH_THRESHOLD}px) {
    ${css(strings, ...interpolations)};
  }
`;

export const rightPanelMobileMedia = (strings, ...interpolations) => css`
  @media (max-width: ${RIGHT_PANEL_WIDTH_THRESHOLD}px) {
    ${css(strings, ...interpolations)};
  }
`;

export default mobileMedia;
