import * as React from 'react';
import styled from 'styled-components/macro';
import { SelectWidgetItem, AppNavigationItem } from '../../types/models';
import SolidButton from '../SolidButton';

type Props<Item> = {
  className?: string;
  item: Item;
  index: number;
  disabled: boolean;
  describedById: string | null;
  onClick: (item: Item, e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ChatSelectWidgetItem = React.forwardRef(
  <Item extends SelectWidgetItem | AppNavigationItem>(
    { item, onClick, className, index, describedById, disabled }: Props<Item>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <ChatSelectWidgetItemRoot
      tabIndex={index === 0 ? 0 : -1}
      data-testid={'chat-virtual-keyboard-button-' + index}
      className={className}
      onClick={e => onClick(item, e)}
      ref={ref}
      aria-describedby={describedById || undefined}
      disabled={disabled}
    >
      {item.title}
    </ChatSelectWidgetItemRoot>
  )
);

export default ChatSelectWidgetItem;

const ChatSelectWidgetItemRoot = styled(SolidButton)`
  color: ${p => p.theme.vkButtonFgColor};
  background-color: ${p => p.theme.vkButtonBgColor};
`;
