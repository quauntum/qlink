import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import Profile from './Profile';
import { setTheme } from '../../../actions/ui';
import { sendLogOutRequest } from '../../../actions/auth';
import { ReactDispatch as RD } from '../../../types/redux';
import { Themes, Routes } from '../../../types/enums';
import { connectThemeName } from '../../../utils/withThemeName';
import SavedChatItems from './SavedChatItems';
import SavedChatItemPanel from './SavedChatItemPanel';
import Memory from './Memory';
import MemoryRecordPanel from './MemoryRecordPanel';

type Props = {
  className?: string;
  sendLogOutRequest: RD<typeof sendLogOutRequest>;
  setTheme: RD<typeof setTheme>;
  themeName: Themes;
};

const openPopup = () => {
  window.open(
    window.location.href,
    '_blank',
    `resizable=no,scrollbars=no,menubar=no,status=no,titlebar=no,toolbar=no,location=no,width=400,height=600,left=${
      window.screen.width - 400
    }`
  );
};

const RightPanelRoot = styled.aside`
  position: relative;
  background-color: ${(p) => p.theme.bgColor};
`;

const RightPanel = (props: Props) => {
  const handleSelect = (value: string) => {
    switch (value) {
      case 'theme-switch':
        props.setTheme(
          props.themeName === Themes.Light ? Themes.Dark : Themes.Light
        );
        break;
      case 'open-popup':
        openPopup();
        break;
      case 'log-out':
        props.sendLogOutRequest();
        break;
    }
  };

  return (
    <RightPanelRoot className={props.className}>
      <Switch>
        <Route
          path={Routes.SavedChatItem}
          render={({ match }) => (
            <SavedChatItemPanel
              itemId={match.params.itemId}
              tab={match.params.tab}
            />
          )}
        />
        <Route
          path={Routes.SavedChatItemsTab}
          render={({ match }) => <SavedChatItems tab={match.params.tab} />}
        />
        <Route path={Routes.SavedChatItems} render={() => <SavedChatItems />} />
        <Route
          path={Routes.MemoryRecord}
          render={({ match }) => (
            <MemoryRecordPanel
              memoryId={match.params.memoryId}
              memoryType={match.params.memoryType}
            />
          )}
        />
        <Route path={Routes.Memory} render={() => <Memory />} />
        <Route path="*" render={() => <Profile onSelect={handleSelect} />} />
      </Switch>
    </RightPanelRoot>
  );
};

const mapDispatchToProps = {
  setTheme,
  sendLogOutRequest,
};

export default connect(connectThemeName, mapDispatchToProps)(RightPanel);
