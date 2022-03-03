import * as React from 'react';
import styled from 'styled-components/macro';
import ChatMessages from './ChatMessages';
import RightPanel from './RightPanel';
import { PopupboxContainer } from 'react-popupbox';
import SingleWindowAlert from '../../components/SingleWindowAlert';
import {
  Mobile,
  Desktop,
  RightPanelDesktop,
  RightPanelMobile,
} from '../../components/responsive';
import { Switch, Route } from 'react-router';
import mobileMedia from '../../utils/mobileMedia';
import ChatPopups from '../../components/ChatPopups';
import Dialogs from '../../components/Dialogs';
import GdprNotification from '../../components/App/GdprNotification';
import LeftPanel from './LeftPanel';
import { Routes, ZIndices } from '../../types/enums';
import ChatOverlay from './ChatOverlay';
import styledOmitProps from '../../utils/styledOmitProps';
import SolidButton from '../../components/SolidButton';
import { ReactComponent as StatsIcon } from '../../icons/Stats.svg';
import IconButton from '../../components/IconButton';
import { Bot } from '../../types/models';
import ChatLogoAvatar from './ChatLogoAvatar';

import 'react-popupbox/dist/react-popupbox.css';

type Props = {
  isActiveWindow: boolean;
  mobileProfileOpened: boolean;
  bot: Bot | undefined;
};

const ChatLayout = React.memo((props: Props) => {
  const [rightPanelVisible, setRightPanelVisible] = React.useState(false);

  const handleJumpToMessageField = (e) => {
    e.preventDefault();
    const input = document.getElementById('send-message-textarea');
    if (input) {
      input.focus();
    }
  };

  return (
    <ChatLayoutRoot>
      <Desktop>
        <SkipLink
          href="#send-message-textarea"
          onClick={handleJumpToMessageField}
        >
          Jump to message field
        </SkipLink>
      </Desktop>

      <div role="complementary">
        <GdprNotification />
        <StyledPopupboxContainer role="dialog" />
        <SingleWindowAlert />
        <StyledChatPopups />
        <StyledDialogs />
      </div>

      <ChatContainer aria-hidden={!props.isActiveWindow}>
        <Mobile>
          <Switch>
            <Route exact path={Routes.Main} component={StyledChatMessages} />
            <Route exact path={Routes.Stats} component={MobileRightPanel} />
            <Route
              exact
              path={Routes.SavedChatItemsTab}
              component={MobileRightPanel}
            />
            <Route
              exact
              path={Routes.SavedChatItem}
              component={MobileRightPanel}
            />
            <Route
              exact
              path={Routes.SavedChatItems}
              component={MobileRightPanel}
            />
            <Route exact path={Routes.Memory} component={MobileRightPanel} />
            <Route
              exact
              path={Routes.MemoryRecord}
              component={MobileRightPanel}
            />
            <Route path="*" component={StyledLeftPanel} />
          </Switch>
          <Route
            exact
            path="/"
            render={() => <ChatMobileHeader bot={props.bot} />}
          />
        </Mobile>

        <Desktop>
          <StyledLeftPanel onClick={() => setRightPanelVisible(false)} />
          <CenterPanel onClick={() => setRightPanelVisible(false)}>
            <Switch>
              <Route path={Routes.Intro} component={ChatPlaceholder} />
              <Route path="*" component={StyledChatMessages} />
            </Switch>
            <Switch>
              <Route
                path={Routes.Conversations}
                component={StyledChatOverlay}
              />
            </Switch>
            <Switch>
              <Route path={Routes.Intro} component={StyledChatOverlay} />
            </Switch>
            <RightPanelDesktop>
              <DesktopRightPanel />
            </RightPanelDesktop>
          </CenterPanel>
          <RightPanelMobile>
            <StatsButton onClick={() => setRightPanelVisible(true)}>
              <StatsIcon />
            </StatsButton>
            <Desktop>
              <DockedRightPanel visible={rightPanelVisible} />
            </Desktop>
          </RightPanelMobile>
        </Desktop>
      </ChatContainer>
    </ChatLayoutRoot>
  );
});

export default ChatLayout;

const StyledPopupboxContainer = styled(PopupboxContainer)`
  &.popupbox-wrapper {
    min-width: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    max-width: 90%;
    height: 100%;
  }

  & > .popupbox-content {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
`;

const ChatLayoutRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* this breaks modal */
  /* overflow: hidden; */
`;

const ChatContainer = styled.div`
  width: 100vw;
  max-width: 1600px;
  background-color: ${(p) => p.theme.bgColor};
  flex: 1 0 50%;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  position: relative;

  ${mobileMedia`
    justify-content: space-around;
    height: 100vh;
  `};
`;

const StyledLeftPanel = styled(LeftPanel)`
  width: 360px;
  height: 100vh;
  flex: 0 0 auto;

  ${mobileMedia`
    width: 100%;
    max-height: 100%;
  `};
`;

const DockedRightPanel = styledOmitProps<
  { visible: boolean },
  typeof RightPanel
>(RightPanel, ['visible'])`
  position: absolute;
  height: 100vh;
  display: block;
  z-index: 1;
  width: 350px;
  right: ${(p) => (p.visible ? 0 : -350)}px;
  transition: right 0.25s ease-out, box-shadow 0.25s ease-out;
  box-shadow: ${(p) =>
    p.visible
      ? `-3.3px 0 5.3px rgba(0, 0, 0, 0.04),
    -11.2px 0 17.9px rgba(0, 0, 0, 0.06),
    -50px 0 80px rgba(0, 0, 0, 0.1)`
      : '0 0 transparent'};
`;

const DesktopRightPanel = styled(RightPanel)`
  height: 100vh;
  flex: 0 0 auto;
  width: 360px;
`;

const MobileRightPanel = styled(RightPanel)`
  width: 100%;
`;

const StyledChatMessages = styled(ChatMessages)`
  width: 100%;
  height: 100%;
`;

const ChatPlaceholder = styled.div`
  background: ${(p) => p.theme.chatGradientBgColor};
  width: 100%;
  height: 100%;
`;

const StatsButton = styled(SolidButton)`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  padding: 2px 5px 0;
  background: ${(p) => p.theme.chatBgColor};
  box-shadow: 0px 0px 3px ${(p) => p.theme.shadowColor};

  color: ${(p) => p.theme.fgColor};

  ${mobileMedia`
    top: 16px;
  `}
`;

const LogoButton = styled(IconButton)`
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
  width: 36px;
  height: 40px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  color: ${(p) => p.theme.chatBgColor};

  ${mobileMedia`
    top: 16px;
  `}
`;

const StyledChatPopups = styled(ChatPopups)`
  position: fixed;
  z-index: ${ZIndices.Popup};
  left: 50%;
  height: 100%;
  ${mobileMedia`
    top: 0;
  `};
`;

const SkipLink = styled.a`
  position: absolute;
  z-index: 1;
  padding: 5px 10px;
  color: ${(p) => p.theme.fgColor};
  background-color: ${(p) => p.theme.chatBgColor};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: 10px;
  top: -40px;
  transition: top 0.2s ease-out;
  &:focus {
    top: 0px;
  }
  &:active {
    top: 0px;
  }
`;

const StyledDialogs = styled(Dialogs)`
  z-index: ${ZIndices.Dialog};
`;

const CenterPanel = styled.div`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

const StyledChatOverlay = styled(ChatOverlay)`
  position: absolute;
  z-index: ${ZIndices.ChatOverlay};
`;

const ChatMobileHeader = React.memo(({ bot }: { bot: Bot | undefined }) => {
  return (
    <>
      <LogoButton to={Routes.Conversations} data-testid="header-logo-link">
        <ChatLogoAvatar />
      </LogoButton>
      <StatsButton to={Routes.Stats} data-testid="header-stats-link">
        <StatsIcon />
      </StatsButton>
    </>
  );
});
