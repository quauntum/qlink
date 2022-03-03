import * as React from 'react';
import styled from 'styled-components/macro';
import {
  Wrapper as MenuWrapper,
  Button as MenuButton,
  closeMenu,
} from 'react-aria-menubutton';
import { connect } from 'react-redux';
import styledOmitProps from '../../utils/styledOmitProps';
import openPopup from '../../utils/openPopup';
import AriaReadable from '../AriaReadable';
import { ReactComponent as CogIcon } from '../../icons/Cog.svg';
import SettingsMenuList from './SettingsMenuList';
import { toggleTheme, setActiveDialog } from '../../actions/ui';
import { ReactDispatch as RD } from '../../types/redux';
import { sendLogOutRequest } from '../../actions/auth';
import { Dialogs, IntroStep, MetricsEvents } from '../../types/enums';
import { RootState } from '../../types/states';
import { logEvent } from '../../utils/metrics';

type Props = {
  className?: string;
  toggleTheme: RD<typeof toggleTheme>;
  sendLogOutRequest: RD<typeof sendLogOutRequest>;
  setActiveDialog: RD<typeof setActiveDialog>;
  introStep: IntroStep | null;
  onSetActive?: (active: boolean) => void;
};

const SettingsMenu = (props: Props) => {
  const { className, onSetActive } = props;
  const [active, setActive] = React.useState(false);

  if (props.introStep && props.introStep !== IntroStep.MeetReplika) {
    return null;
  }

  const handleSelect = (value: string) => {
    switch (value) {
      case 'theme-switch':
        props.toggleTheme();
        break;
      case 'open-popup':
        openPopup();
        break;
      case 'log-out':
        props.sendLogOutRequest();
        break;
      case 'edit-profile':
        closeMenu('settings-menu');
        props.setActiveDialog({ type: Dialogs.EditProfile });
        break;
      case 'edit-replika':
        closeMenu('settings-menu');
        props.setActiveDialog({ type: Dialogs.EditReplika });
        break;
      case 'account-settings':
        closeMenu('settings-menu');
        props.setActiveDialog({ type: Dialogs.AccountSettings });
        break;
      case 'subscription':
        closeMenu('settings-menu');
        props.setActiveDialog({
          type: Dialogs.Subscription,
          causedBy: 'settings',
        });
    }
  };

  return (
    <SettingsMenuRoot
      id="settings-menu"
      className={className}
      closeOnSelection={false}
      onSelection={handleSelect}
      onMenuToggle={({ isOpen }) => {
        setActive(!!isOpen);
        if (isOpen) {
          logEvent(MetricsEvents.SettingsOpened);
        }
        if (onSetActive) {
          onSetActive(isOpen);
        }
      }}
    >
      <StyledMenuButton active={active} data-testid="settings-menu-button">
        <AriaReadable>settings</AriaReadable>
        <CogIcon aria-hidden="true" />
      </StyledMenuButton>
      <SettingsMenuList
        active={active}
        onClose={() => {
          setActive(false);
          closeMenu('settings-menu');
        }}
      />
    </SettingsMenuRoot>
  );
};

const mapDispatchToProps = {
  sendLogOutRequest,
  toggleTheme,
  setActiveDialog,
};

export default connect(
  (state: RootState) => ({
    introStep: state.ui.introStep,
  }),
  mapDispatchToProps
)(SettingsMenu);

const SettingsMenuRoot = styled(MenuWrapper)`
  position: relative;
`;

const StyledMenuButton = styledOmitProps<{ active: boolean }>(MenuButton, [
  'active',
]).attrs({ tag: 'button' })`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${(p) => p.theme.fgColor};
  transition: color 0.2s ease-out;
  border-radius: 4px;
  box-shadow: ${(p) =>
    p.active ? '0 0 2px 2px ' + p.theme.shadowColor : 'none'};

  &:focus {
    0 0 2px 2px ${(p) => p.theme.shadowColor};
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
