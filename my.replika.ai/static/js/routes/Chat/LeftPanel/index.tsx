import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styledOmitProps from '../../../utils/styledOmitProps';
import { Switch, Route, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes, ZIndices } from '../../../types/enums';
import LeftPanelMain from './LeftPanelMain';
import LeftPanelIntro from './LeftPanelIntro';
import LeftPanelTracks from './LeftPanelTracks';
import LeftPanelTrack from './LeftPanelTrack';
import SettingsMenu from '../../../components/SettingsMenu';
import { ReactComponent as BackIcon } from '../../../icons/ArrowBack.svg';
import AriaReadable from '../../../components/AriaReadable';
import mobileMedia from '../../../utils/mobileMedia';
import { mainScreen } from '../../../actions/init';
import LeftPanelReplikaCard from './LeftPanelReplikaCard';
import useApi from '../../../utils/useApi';
import { getSavedChatItemTypes } from '../../../actions/savedChatItems';
import { ReactComponent as DiaryIcon } from '../../../icons/Diary.svg';
import SolidButton from '../../../components/SolidButton';

type Props = {
  className?: string;
  onClick?: () => void;
};

function ReplikaButtons() {
  const savedItemTypeTabs = useApi(
    (state) => state.savedChatItems.persist.savedItemTypeTabs,
    getSavedChatItemTypes
  );

  const diaryUnreadCount =
    savedItemTypeTabs.find((tab) => tab.name === 'all')?.unread_count ?? 0;

  const memoryUnreadCount = useSelector(
    (state) => state.memory.persist.unreadCount
  );

  const location = useLocation();

  const savedChatItemsOpened = location.pathname === Routes.SavedChatItems;
  const memoryOpened = location.pathname === Routes.Memory;

  return (
    <ReplikaButtonsRoot>
      <ButtonWithLabel>
        <ButtonWithCounter
          data-testid="profile-diary-button"
          aria-label={
            diaryUnreadCount
              ? diaryUnreadCount === 1
                ? `Diary: ${diaryUnreadCount} new item`
                : `Diary: ${diaryUnreadCount} new items`
              : 'Diary'
          }
          to={savedChatItemsOpened ? Routes.Main : Routes.SavedChatItems}
          unreadCount={diaryUnreadCount}
        >
          <DiaryIcon />
        </ButtonWithCounter>
        <ButtonLabel active={savedChatItemsOpened}>Diary</ButtonLabel>
      </ButtonWithLabel>
      <ButtonWithLabel>
        <ButtonWithCounter
          data-testid="memory-button"
          aria-label={
            memoryUnreadCount
              ? memoryUnreadCount === 1
                ? `Memory: ${memoryUnreadCount} new item`
                : `Memory: ${memoryUnreadCount} new items`
              : 'Memory'
          }
          to={memoryOpened ? Routes.Main : Routes.Memory}
          unreadCount={memoryUnreadCount}
        >
          <DiaryIcon />
        </ButtonWithCounter>
        <ButtonLabel active={memoryOpened}>Memory</ButtonLabel>
      </ButtonWithLabel>
    </ReplikaButtonsRoot>
  );
}

const ReplikaButtonsRoot = styled.div`
  position: absolute;
  min-width: 100%;
  left: 0;
  bottom: 210px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;

  ${mobileMedia`
    padding: 0 20px;
  `}
`;

const ButtonWithLabel = styled.div`
  text-align: center;
`;

const ButtonLabel = styledOmitProps<{ active: boolean }, 'label'>('label', [
  'active',
])`
  display: block;
  margin-top: 4px;
  color: ${(p) => (p.active ? p.theme.fgColor : p.theme.dimmedFgColor)};
  font-size: 13px;
`;

const ButtonWithCounter = styledOmitProps<
  { unreadCount: number },
  typeof SolidButton
>(SolidButton, ['unreadCount'])`
  position: relative;
  color: ${(p) => p.theme.fgColor};
  padding: 0;
  width: 48px;
  background: ${(p) => p.theme.lightButtonBgColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.15);

  &:after {
    display: ${(p) => (p.unreadCount === 0 ? 'none' : 'block')};
    content: "+${(p) => Math.min(p.unreadCount, 9)}";
    position: absolute;
    z-index: 1;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    font-size: 12px;
    background-color: ${(p) => p.theme.unreadBadgeBgColor};
    color: ${(p) => p.theme.unreadBadgeFgColor};
    border-radius: 100%;
    text-align: center;
    line-height: 24px;
  }
`;

const LeftPanel = (props: Props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const dispatch = useDispatch();

  const wsReady = useSelector((state) => state.ws.wsReady);

  React.useEffect(() => {
    if (wsReady) {
      dispatch(mainScreen());
    }
  }, [dispatch, wsReady]);

  return (
    <LeftPanelRoot
      className={props.className}
      onClick={props.onClick}
      menuOpen={menuOpen}
      onScroll={(e) => {
        setScrolled((e.target as HTMLElement).scrollTop > 0);
      }}
    >
      <Route
        path="*"
        render={({ match }) => {
          const isMatching = (route: Routes) =>
            !!matchPath(match.url, { path: route, exact: true, strict: true });

          // intro has it's own avatar component, for the rest we render a shared component
          // and hide it where it's not used (so we don't have to re-render it on each reroute)
          const cardHidden = isMatching(Routes.Conversation);

          return (
            <LeftPanelContent centered={false}>
              <LeftPanelReplikaCard hidden={cardHidden} centered={false}>
                <Switch>
                  <Route path={Routes.Intro} render={() => null} />
                  <Route path="*" render={() => <ReplikaButtons />} />
                </Switch>
              </LeftPanelReplikaCard>
              <Switch>
                <Route
                  path={Routes.Conversation}
                  exact
                  render={({ match }) => {
                    const { category } = match.params;
                    return (
                      <WhiteMenuButtonLink
                        to={
                          category
                            ? Routes.ConversationCategory.replace(
                                ':category',
                                category
                              )
                            : Routes.Conversations
                        }
                      >
                        <AriaReadable>Back to conversations</AriaReadable>
                        <BackIcon aria-hidden="true" />
                      </WhiteMenuButtonLink>
                    );
                  }}
                />
                <Route
                  path="*"
                  render={() => (
                    <StyledSettingsMenu onSetActive={setMenuOpen} />
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path={Routes.Conversations}
                  exact
                  render={() => <LeftPanelTracks scrolled={scrolled} />}
                />
                <Route
                  path={Routes.ConversationCategory}
                  exact
                  render={({ match }) => (
                    <LeftPanelTracks
                      category={match.params.category}
                      scrolled={scrolled}
                    />
                  )}
                />
                <Route
                  path={Routes.Conversation}
                  render={({ match }) => (
                    <LeftPanelTrack trackId={match.params.trackId} />
                  )}
                />
                <Route path={Routes.Intro} render={() => <LeftPanelIntro />} />
                <Route path="*" render={() => <LeftPanelMain />} />
              </Switch>
            </LeftPanelContent>
          );
        }}
      />
    </LeftPanelRoot>
  );
};

export default LeftPanel;

const StyledSettingsMenu = styled(SettingsMenu)`
  position: absolute;
  top: 0;
  z-index: ${ZIndices.Menu};
  align-self: flex-start;
  color: ${(p) => p.theme.fgColor};
  padding: 29px 24px;

  ${mobileMedia`
    padding: 20px 20px;
  `}
`;

const MenuButtonLink = StyledSettingsMenu.withComponent(Link);

const WhiteMenuButtonLink = styled(MenuButtonLink)`
  color: #fff;
`;

const LeftPanelRoot = styledOmitProps<{ menuOpen: boolean }, 'aside'>('aside', [
  'menuOpen',
])`
  position: relative;
  background-color: ${(p) => p.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: ${(p) => (p.menuOpen ? 'hidden' : 'auto')};
`;

const LeftPanelContent = styledOmitProps<{ centered: boolean }>('div', [
  'centered',
])`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(p) => (p.centered ? 'center' : 'flex-start')};
`;
