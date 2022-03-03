import * as React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { Theme } from '../../types/theme';
import { Themes, MetricsEvents } from '../../types/enums';
import SidebarMenu, { SidebarMenuLinkText } from '../SidebarMenu';
import { SidebarLinkButton } from '../../components/SidebarLayout';
import { ReactComponent as Moon } from '../../icons/Menu/Moon.svg';
import { ReactComponent as Popup } from '../../icons/Menu/Popup.svg';
import { ReactComponent as Profile } from '../../icons/Menu/Profile.svg';
import { ReactComponent as Egg } from '../../icons/Menu/Egg.svg';
import { ReactComponent as Key } from '../../icons/Menu/Key.svg';
import { ReactComponent as Logout } from '../../icons/Menu/Logout.svg';
import { ReactComponent as PaymentsIcon } from '../../icons/Menu/Payments.svg';
import withThemeName from '../../utils/withThemeName';
import { logEvent } from '../../utils/metrics';
import useApi from '../../utils/useApi';
import Switch from '../../components/Switch';
import { getPrices } from '../../actions/subscriptions';

type Props = {
  className?: string;
  onSelect?: (value: string) => void;
  onClose: () => void;
  standalone: boolean;
  themeName: Themes;
  theme: Theme;
  active: boolean;
};

const SettingsMenuList = (props: Props) => {
  const { themeName, theme, active, ...rest } = props;

  const subscriptions = useApi(
    (state) => state.subscriptions.persist.stripeSubscriptions,
    active ? getPrices : null,
    { memoDeepEqual: true }
  );
  const subscriptionsEnabled = subscriptions?.length !== 0;

  const menuItems = [
    {
      icon: <Moon />,
      name: 'theme-switch',
      label:
        themeName === Themes.Dark
          ? 'Night mode enabled'
          : 'Night mode disabled',
      component: (
        <FlexMenuItem>
          <NightModeLabel id="theme-switch-label">Night mode</NightModeLabel>
          <Switch checked={themeName === Themes.Dark} onChange={() => {}} />
        </FlexMenuItem>
      ),
    },
    {
      icon: <Profile />,
      name: 'edit-profile',
      label: 'My profile',
      component: <SidebarLinkButton>My profile</SidebarLinkButton>,
    },
    {
      icon: <Egg />,
      name: 'edit-replika',
      label: 'Replika profile',
      component: <SidebarLinkButton>Replika profile</SidebarLinkButton>,
    },
    {
      icon: <Key />,
      name: 'account-settings',
      label: 'Account settings',
      component: <SidebarLinkButton>Account settings</SidebarLinkButton>,
    },
    {
      icon: <PaymentsIcon />,
      name: 'subscription',
      label: 'Subscription',
      bordered: true,
      component: subscriptionsEnabled ? (
        <SidebarLinkButton>Subscription</SidebarLinkButton>
      ) : null,
    },
    {
      icon: <Logout />,
      name: 'log-out',
      label: 'Log out',
      bordered: true,
      component: <SidebarLinkButton>Log out</SidebarLinkButton>,
    },
    {
      name: 'help',
      label: 'Help',
      component: (
        <MenuLink
          onClick={() => logEvent(MetricsEvents.HelpCenterOpened)}
          href="https://help.replika.ai/hc/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </MenuLink>
      ),
    },
    {
      name: 'terms',
      label: 'Terms of use',
      component: (
        <MenuLink
          onClick={() => logEvent(MetricsEvents.TermsOfServiceOpend)}
          href="https://replika.ai/legal/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </MenuLink>
      ),
    },
    {
      name: 'privacy',
      label: 'Privacy policy',
      component: (
        <MenuLink
          onClick={() => logEvent(MetricsEvents.PrivacyPolicyOpened)}
          href="https://replika.ai/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy policy
        </MenuLink>
      ),
    },
    {
      name: 'credits',
      label: 'Credits',
      component: (
        <MenuLink
          onClick={() => logEvent(MetricsEvents.CreditsOpened)}
          href="https://replika.ai/replika/docs/embed/credits"
          target="_blank"
        >
          Credits
        </MenuLink>
      ),
    },
  ];

  // detecting mobile browser by `orientation` prop instead of relying on window width
  if (!window.hasOwnProperty('orientation')) {
    menuItems.unshift({
      icon: <Popup />,
      name: 'open-popup',
      label: 'Open in popup',
      component: (
        <FlexMenuItem>
          <SidebarMenuLinkText>Open in popup</SidebarMenuLinkText>
          {/* <StyledLinkIcon /> */}
        </FlexMenuItem>
      ),
    });
  }

  return (
    <SettingsMenuListRoot
      {...rest}
      data-testid="menu"
      items={menuItems}
      backTo="/"
    />
  );
};

export default withTheme(withThemeName(SettingsMenuList));

const SettingsMenuListRoot = styled(SidebarMenu)`
  position: absolute;
  background-color: ${(p) => p.theme.sidebarMenuBackground};
`;

const NightModeLabel = styled.label`
  text-decoration: none;
  &:hover {
    cursor: default;
  }
`;

const FlexMenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled.a`
  color: inherit;
`;
