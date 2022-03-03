import * as React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';
import { SavedChatItemType } from '../types/enums';
import styledOmitProps from '../utils/styledOmitProps';
import ApiImageLoader from './ApiImageLoader';
import AriaButton from './AriaButton';

type Props = {
  className?: string;
  itemType: SavedChatItemType;
  imageUrl?: string;
  isRead: boolean;
  to?: string;
  isListItem?: boolean;
  caption: string;
  timestamp: string;
  tabIndex?: number;
  'data-testid'?: string;
};

function SavedChatItemCard(props: Props) {
  const {
    className,
    tabIndex,
    itemType,
    isListItem,
    imageUrl,
    isRead,
    caption,
    to,
    timestamp,
    'data-testid': dataTestId,
  } = props;
  const hasBackgroundImage = itemType === SavedChatItemType.Diary && !!imageUrl;
  const hasImage = itemType === SavedChatItemType.Activity && !!imageUrl;

  const content = to ? (
    <SavedChatItemLink
      maxLines={hasImage ? 1 : 4}
      style={{
        color: hasBackgroundImage ? '#FFF' : undefined,
      }}
      tabIndex={tabIndex}
      to={to}
      data-testid={dataTestId && `${dataTestId}-caption`}
    >
      {caption}
    </SavedChatItemLink>
  ) : (
    <SavedChatItemText
      maxLines={hasImage ? 1 : 4}
      style={{
        color: hasBackgroundImage ? '#FFF' : undefined,
      }}
      data-testid={dataTestId && `${dataTestId}-caption`}
    >
      {caption}
    </SavedChatItemText>
  );

  return (
    <SavedChatItemCardRoot
      className={className}
      as={isListItem ? 'li' : undefined}
      itemType={itemType}
      data-testid={dataTestId}
    >
      {hasBackgroundImage && (
        <ApiImageLoader src={imageUrl}>
          {(url) => (
            <SavedChatItemImageBackground
              style={{ backgroundImage: 'url(' + url + ')' }}
            />
          )}
        </ApiImageLoader>
      )}
      <SavedChatItemBadge data-testid={dataTestId && `${dataTestId}-badge`}>
        {itemType}
      </SavedChatItemBadge>
      {!isRead && <SavedChatItemNewDot />}
      {hasImage && (
        <ApiImageLoader src={imageUrl}>
          {(url) => (
            <SavedChatItemImage
              src={url}
              alt={`${caption} badge`}
              data-testid={dataTestId && `${dataTestId}-image`}
            />
          )}
        </ApiImageLoader>
      )}
      {content}
      <SavedChatItemDate
        data-testid={dataTestId && `${dataTestId}-date`}
        style={{
          color: hasBackgroundImage ? '#b0b0b9' : undefined,
        }}
      >
        {moment(timestamp).format('MMMM D')}
      </SavedChatItemDate>
    </SavedChatItemCardRoot>
  );
}

export default SavedChatItemCard;

const SavedChatItemDate = styled.div`
  position: absolute;
  color: ${(p) => p.theme.savedChatItemDateFgColor};
  left: 16px;
  bottom: 12px;
  font-size: 13px;
`;

const SavedChatItemNewDot = styled.div`
  background-color: ${(p) => p.theme.newItemBgColor};
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const SavedChatItemImage = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
`;

const SavedChatItemImageBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
  }
`;

const SavedChatItemBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.savedChatItemFgColor};
  text-transform: capitalize;
`;

const SavedChatItemCardRoot = styledOmitProps<{ itemType: SavedChatItemType }>(
  'div',
  ['itemType']
)`
  max-width: 160px;
  height: 152px;
  z-index: 0;
  display: block;
  position: relative;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  background: ${(p) =>
    p.theme.savedChatItemBgColors[p.itemType] ??
    p.theme.savedChatItemBgColors.default};
  padding: 30px 16px 12px;

  &:focus-within {
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }

  &:focus-within a:focus {
    outline: none;
  }

  & ${SavedChatItemBadge} {
    background: ${(p) =>
      p.theme.savedChatItemBadgeBgColors[p.itemType] ??
      p.theme.savedChatItemBadgeBgColors.default};
  }
`;

// position of this element should NOT be relative or absolute, so that its ::after block
// would be of the size of parent node
const SavedChatItemLink = styledOmitProps<
  { maxLines: number },
  typeof AriaButton
>(AriaButton, ['maxLines'])`
  z-index: 0;
  display: -webkit-box;
  -webkit-line-clamp: {p => p.maxLines};
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  max-height: 72px;
  color: ${(p) => p.theme.fgColor};
  margin-top: 8px;

  &:hover {
    text-decoration: none;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SavedChatItemText = styledOmitProps<{ maxLines: number }, 'span'>(
  'span',
  ['maxLines']
)`
  z-index: 0;
  display: -webkit-box;
  -webkit-line-clamp: {p => p.maxLines};
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  max-height: 72px;
  color: ${(p) => p.theme.fgColor};
  margin-top: 8px;
`;
