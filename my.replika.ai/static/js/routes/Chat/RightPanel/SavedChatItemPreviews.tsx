import * as React from 'react';
import styled from 'styled-components/macro';
import { SavedChatItemPreview } from '../../../types/models';
import useFocusGroup from '../../../utils/useFocusGroup';
import { Routes, SavedChatItemType } from '../../../types/enums';
import SavedChatItemCard from '../../../components/SavedChatItemCard';

type Props = {
  previews: SavedChatItemPreview[];
  tab: SavedChatItemType | 'all';
};

function SavedChatItemPreviews({ previews, tab }: Props) {
  const ulRef = React.useRef<HTMLUListElement>(null);
  useFocusGroup(
    {
      getGroupElements: () => {
        return ulRef.current?.getElementsByTagName('a') ?? [];
      },
      options: {
        keybindings: {
          prev: { key: 'ArrowLeft' },
          next: { key: 'ArrowRight' },
        },
      },
    },
    [previews]
  );

  const filler =
    previews.length < 6
      ? Array.from({ length: 6 - previews.length }).map((_, idx) => (
          <div key={idx} role="presentation" />
        ))
      : [];

  return (
    <SavedChatItemPreviewsRoot ref={ulRef}>
      {previews.map((preview, idx) => {
        const first = idx === 0;

        return (
          <StyledSavedChatItemCard
            data-testid={`saved-item-card-${idx}`}
            key={preview.id}
            itemType={preview.type}
            imageUrl={preview.image_url}
            timestamp={preview.timestamp}
            tabIndex={first ? 0 : -1}
            to={Routes.SavedChatItem.replace(':tab', tab).replace(
              ':itemId',
              preview.id
            )}
            isRead={preview.read}
            caption={preview.title}
            isListItem
          />
        );
      })}
      {filler}
    </SavedChatItemPreviewsRoot>
  );
}

export default SavedChatItemPreviews;

const SavedChatItemPreviewsRoot = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 152px;
  grid-gap: 8px;
  padding: 0 15px;
  flex: 1 1 auto;
  width: 100%;
  margin: 20px auto 0;
`;

const StyledSavedChatItemCard = styled(SavedChatItemCard)`
  max-width: initial;
`;
