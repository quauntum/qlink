import * as React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import {
  CHAT_MOBILE_WIDTH_THRESHOLD,
  DIALOG_MOBILE_WIDTH_THRESHOLD,
  RIGHT_PANEL_WIDTH_THRESHOLD
} from '../utils/constants';

type Props = {
  children: React.ReactNode;
};

export const Mobile = ({ children }: Props) => (
  <MediaQuery maxWidth={CHAT_MOBILE_WIDTH_THRESHOLD}>{children}</MediaQuery>
);

export const Desktop = ({ children }: Props) => (
  <MediaQuery minWidth={CHAT_MOBILE_WIDTH_THRESHOLD + 1}>{children}</MediaQuery>
);

export const DialogMobile = ({ children }: Props) => (
  <MediaQuery maxWidth={DIALOG_MOBILE_WIDTH_THRESHOLD}>{children}</MediaQuery>
);

export const DialogDesktop = ({ children }: Props) => (
  <MediaQuery minWidth={DIALOG_MOBILE_WIDTH_THRESHOLD + 1}>
    {children}
  </MediaQuery>
);

export const RightPanelMobile = ({ children }: Props) => (
  <MediaQuery maxWidth={RIGHT_PANEL_WIDTH_THRESHOLD}>{children}</MediaQuery>
);

export const RightPanelDesktop = ({ children }: Props) => (
  <MediaQuery minWidth={RIGHT_PANEL_WIDTH_THRESHOLD + 1}>{children}</MediaQuery>
);

export function useMobileQuery() {
  return useMediaQuery({ maxWidth: CHAT_MOBILE_WIDTH_THRESHOLD });
}
