import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components/macro';
import moment from 'moment';
import SidebarLayout from '../../../components/SidebarLayout';
import { Routes, ZIndices, MetricsEvents } from '../../../types/enums';
import {
  getSavedChatItems,
  deleteSavedChatItem,
  markSavedChatItemRead,
} from '../../../actions/savedChatItems';
import ChatLogoAvatar from '../../../routes/Chat/ChatLogoAvatar';
import IconButton from '../../../components/IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/Delete.svg';
import Popover from '../../../components/Popover';
import DeleteSavedChatItemPopover from './DeleteSavedChatItemPopover';
import mobileMedia from '../../../utils/mobileMedia';
import SavedChatItemBody from './SavedChatItemBody';
import { logEvent } from '../../../utils/metrics';
import capitalize from '../../../utils/capitalize';

type Props = {
  itemId: string;
  tab: string;
  className?: string;
};

function SavedChatItemPanel({ className, itemId, tab }: Props) {
  const savedItem = useSelector(
    (state) => state.savedChatItems.savedChatItems[itemId] ?? null
  );

  React.useEffect(() => {
    logEvent(MetricsEvents.SavedChatItemOpened, {
      element: tab ? capitalize(tab) : undefined,
    });
  }, [itemId, tab]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (savedItem?.id !== itemId) {
      dispatch(getSavedChatItems([itemId]));
    }
  }, [savedItem, itemId, dispatch]);

  React.useEffect(() => {
    if (savedItem?.read === false) {
      dispatch(markSavedChatItemRead([savedItem.id]));
    }
  }, [savedItem, dispatch]);

  const title = savedItem?.type;
  const subtitle = savedItem
    ? moment(savedItem.timestamp).format('MMMM D')
    : '';

  const [deleteSavedChatItemOpen, setDeleteSavedChatItemOpen] = React.useState(
    false
  );

  return (
    <SavedChatItemRoot
      data-testid="saved-chat-item"
      backTo={Routes.SavedChatItemsTab.replace(':tab', tab)}
      title={title}
      subtitle={subtitle}
      className={className}
    >
      <SavedChatItemContent data-testid={`saved-chat-item-content-${itemId}`}>
        <StyledSavedChatItemBody savedItem={savedItem} />
        <SavedChatItemFooter>
          <StyledChatLogoAvatar />
          <SavedChatItemCaption>{savedItem?.caption}</SavedChatItemCaption>
          <StyledPopover
            preferPlace="above"
            isOpen={deleteSavedChatItemOpen}
            onClose={() => setDeleteSavedChatItemOpen(false)}
            onRenderContent={(p) => (
              <DeleteSavedChatItemPopover
                data-testid="saved-chat-item-delete-popover"
                onDelete={async () => {
                  setDeleteSavedChatItemOpen(false);
                  // logEvent(MetricsEvents.MoodDeleted);
                  await dispatch(deleteSavedChatItem(itemId));
                  dispatch(push(Routes.SavedChatItemsTab.replace(':tab', tab)));
                }}
                {...p}
              />
            )}
            closeOnOuterAction
            size="small"
          >
            <IconButton
              label="delete diary entry"
              onClick={() => setDeleteSavedChatItemOpen(true)}
              data-testid="saved-chat-item-delete-button"
            >
              <DeleteIcon aria-hidden="true" />
            </IconButton>
          </StyledPopover>
        </SavedChatItemFooter>
      </SavedChatItemContent>
    </SavedChatItemRoot>
  );
}

export default SavedChatItemPanel;

const SavedChatItemRoot = styled(SidebarLayout)``;

const SavedChatItemContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledSavedChatItemBody = styled(SavedChatItemBody)`
  color: ${(p) => p.theme.fgColor};
  background: ${(p) =>
    p.savedItem
      ? p.theme.savedChatItemBgColors[p.savedItem.type] ??
        p.theme.savedChatItemBgColors.default
      : p.theme.savedChatItemBgColors.default};
`;

const SavedChatItemFooter = styled.div`
  min-height: 54px;
  padding-top: 14px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.fgColor};
`;

const StyledChatLogoAvatar = styled(ChatLogoAvatar)`
  background: ${(p) => p.theme.chatGradientBgColor};
`;

const SavedChatItemCaption = styled.div`
  flex: 1 0 auto;
  margin-left: 12px;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.dimmedFgColor};
  white-space: pre-wrap;
`;

const StyledPopover = styled(Popover)`
  z-index: ${ZIndices.Dialog + 1};
  ${mobileMedia`
    max-width: 270px;
  `};
`;
