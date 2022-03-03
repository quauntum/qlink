import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
// import { groupBy } from 'lodash';
import { Routes, SavedChatItemType } from '../../../types/enums';
import {
  getSavedChatItemTypes,
  getSavedChatItemPreviews,
} from '../../../actions/savedChatItems';
import SidebarLayout from '../../../components/SidebarLayout';
import { useMobileQuery } from '../../../components/responsive';
import CategoryTabs from '../../../components/CategoryTabs';
import CircleSpinner from '../../../components/CircleSpinner';
import useApi from '../../../utils/useApi';
import SavedChatItemPreviews from './SavedChatItemPreviews';
import EmptyTab from './EmptyTab';

type Props = {
  className?: string;
  tab?: SavedChatItemType | 'all';
};

const SCROLL_THRESHOLD = 500;

function Loader() {
  return (
    <LoaderRoot>
      <CircleSpinner />
    </LoaderRoot>
  );
}

const LoaderRoot = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100px;
    height: 100px;
  }
`;

type TabState = { allFetched: boolean };
type TabStates = { [tab in SavedChatItemType]?: TabState } & { all?: TabState };

const DEFAULT_TAB_STATE = {
  allFetched: false,
};

function tabStateReducer(
  states: TabStates,
  [tab, update]: [SavedChatItemType | 'all', Partial<TabState>]
) {
  const stateTab = tab ?? 'all';
  const tabState = states[stateTab] ?? DEFAULT_TAB_STATE;
  return {
    ...states,
    [stateTab]: {
      ...tabState,
      ...update,
    },
  };
}

function SavedChatItems(props: Props) {
  const { className } = props;
  const [
    selectedTab,
    setSelectedTab,
  ] = React.useState<SavedChatItemType | null>(
    props.tab === 'all' ? null : props.tab ?? null
  );
  const tab = selectedTab ?? 'all';

  const previews = useSelector((state) => {
    return (
      state.savedChatItems.saveChatItemPreviews[tab] ??
      state.savedChatItems.persist.latestSavedChatItemPreviews[tab] ??
      []
    );
  });

  const invalidatedPreviews = useSelector(
    (state) => state.savedChatItems.invalidatedPreviews
  );
  const isInvalidated = invalidatedPreviews.indexOf(tab) !== -1;

  const dispatch = useDispatch();

  const statusRef = React.useRef<
    {
      [tab in SavedChatItemType]?: 'init' | 'idle' | 'fetching';
    } & {
      all: 'init' | 'idle' | 'fetching';
    }
  >({ all: 'init' });

  const [tabStates, setTabState] = React.useReducer(tabStateReducer, {});
  const tabState =
    (selectedTab ? tabStates[selectedTab] : tabStates.all) ?? DEFAULT_TAB_STATE;

  const savedItemTypeTabs = useApi(
    (state) => state.savedChatItems.persist.savedItemTypeTabs,
    getSavedChatItemTypes
  );

  // const groupedDiaries = React.useMemo(
  //   () =>
  //     groupBy(diaries, (diary) => {
  //       return formatter.format(new Date(diary.date));
  //     }),
  //   [diaries]
  // );

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback(
    async (e) => {
      if (tabState.allFetched) {
        return;
      }
      const el = (e?.target ?? scrollRef.current) as HTMLDivElement;
      if (!el) {
        return;
      }
      if (
        el.scrollHeight - (el.scrollTop + el.offsetHeight) <
        SCROLL_THRESHOLD
      ) {
        const status = statusRef.current[tab] ?? 'init';
        if (status !== 'fetching') {
          statusRef.current[tab] = 'fetching';
          const fetched = await dispatch(
            getSavedChatItemPreviews(
              tab === 'all' ? undefined : tab,
              previews.length
            )
          );
          statusRef.current[tab] = 'idle';
          if (fetched.length < 25) setTabState([tab, { allFetched: true }]);
        }
      }
    },
    [dispatch, tabState.allFetched, tab, previews.length]
  );

  React.useEffect(() => {
    let cancelToken = { cancelled: false };

    async function fetchDiaries() {
      const status = statusRef.current[tab] ?? 'init';

      if (status === 'init' || isInvalidated) {
        statusRef.current[tab] = 'fetching';
        const fetched = await dispatch(
          getSavedChatItemPreviews(tab === 'all' ? undefined : tab)
        );
        statusRef.current[tab] = 'idle';
        if (!cancelToken.cancelled) {
          if (fetched.length < 25) setTabState([tab, { allFetched: true }]);
        }
        handleScroll(null);
      }
    }

    fetchDiaries();

    return () => {
      cancelToken.cancelled = true;
    };
  }, [dispatch, tab, isInvalidated, handleScroll]);

  const isMobile = useMobileQuery();

  const tabs = React.useMemo(
    () =>
      savedItemTypeTabs.map((t) => ({
        value: t.name,
        label: t.title,
        hasNewItems: t.has_new_items,
      })),
    [savedItemTypeTabs]
  );

  return (
    <SavedChatItemsRoot
      noContentPadding
      ref={scrollRef}
      data-testid="diary"
      title="Diary"
      subheader={
        <StyledCategoryTabs
          categories={tabs}
          selected={selectedTab}
          setCategory={(t) => {
            setSelectedTab(t as SavedChatItemType);
            dispatch(
              replace(
                t === 'all'
                  ? Routes.SavedChatItems
                  : Routes.SavedChatItemsTab.replace(':tab', t)
              )
            );
          }}
        />
      }
      backTo={isMobile ? Routes.Conversations : Routes.Main}
      className={className}
      onScroll={handleScroll}
    >
      <SavedChatItemsContent>
        {previews.length > 0 ? (
          <SavedChatItemPreviews previews={previews} tab={tab} />
        ) : statusRef.current[tab] === 'fetching' ? (
          <Loader />
        ) : (
          <EmptyTab tab={selectedTab} savedItemTypeTabs={savedItemTypeTabs} />
        )}
      </SavedChatItemsContent>
    </SavedChatItemsRoot>
  );
}

export default SavedChatItems;

const StyledCategoryTabs = styled(CategoryTabs)`
  margin: 0 15px;
`;

const SavedChatItemsRoot = styled(SidebarLayout)`
  color: ${(p) => p.theme.fgColor};
`;

const SavedChatItemsContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
