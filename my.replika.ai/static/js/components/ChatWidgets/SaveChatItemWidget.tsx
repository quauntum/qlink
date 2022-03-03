import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import {
  SubmitContainer,
  SendButton,
  SkipButton,
  WidgetContainer,
} from './WidgetLayout';
import { SaveChatItemIncomingPayload } from '../../types/websocket';
import { cancelSaveItem, saveChatItem } from '../../actions/savedChatItems';
import SavedChatItemCard from '../SavedChatItemCard';
import LinkButton from '../LinkButton';
import { SavedChatItemType, Dialogs, MetricsEvents } from '../../types/enums';
import { setActiveDialog } from '../../actions/ui';
import { logEvent } from '../../utils/metrics';

type Props = {
  className?: string;
  disabled: boolean;
  item: SaveChatItemIncomingPayload;
};

const EDIT_TITLES = {
  [SavedChatItemType.Song]: 'Edit song name',
  [SavedChatItemType.Story]: 'Edit story title',
  [SavedChatItemType.Session]: 'Edit session name',
  [SavedChatItemType.Diary]: 'Edit diary title',
};

function SaveChatItemWidget({ className, item }: Props) {
  const dispatch = useDispatch();

  const editTitle = EDIT_TITLES[item.type];
  const isEditableName = item.type !== SavedChatItemType.Activity;

  React.useEffect(() => {
    logEvent(MetricsEvents.SavedChatItemsPopupOpened);
  }, [item.id]);

  return (
    <WidgetContainer data-testid="save-item-widget" className={className}>
      <StyledSavedChatItemCard
        data-testid="save-item-widget-card"
        itemType={item.type}
        isRead
        caption={item.name}
        timestamp={item.timestamp}
        imageUrl={item.image_url}
      />
      {isEditableName && (
        <EditButton
          data-testid="save-item-widget-edit-name-button"
          onClick={() => {
            logEvent(MetricsEvents.SavedChatItemsPopupEditNamePressed);
            dispatch(
              setActiveDialog({
                type: Dialogs.EditSavedChatItem,
                itemId: item.id,
                source: 'widget',
                itemType: item.type,
                name: item.name,
              })
            );
          }}
        >
          {editTitle}
        </EditButton>
      )}
      <SubmitContainer skipEnabled>
        <SkipButton
          data-testid="save-item-widget-skip-button"
          onClick={() => {
            logEvent(MetricsEvents.SavedChatItemsCancelButtonPressed);
            dispatch(cancelSaveItem(item.id));
          }}
        >
          Cancel
        </SkipButton>
        <SendButton
          data-testid="save-item-widget-save-button"
          onClick={() => {
            logEvent(MetricsEvents.SavedChatItemsSaveButtonPressed);
            dispatch(saveChatItem(item.id, item.name));
          }}
        >
          Save
        </SendButton>
      </SubmitContainer>
    </WidgetContainer>
  );
}

export default SaveChatItemWidget;

const StyledSavedChatItemCard = styled(SavedChatItemCard)`
  margin: 0 auto 20px;
`;

const EditButton = styled(LinkButton)`
  color: ${(p) => p.theme.dimmedFgColor};
  display: block;
  margin: 0 auto 30px;
  text-decoration: none;
  font-size: 13px;
`;
