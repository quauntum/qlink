import * as React from 'react';
import styled from 'styled-components/macro';
import { Message, SelectWidget } from '../../types/models';
import ChatSelectWidgetItem from './ChatSelectWidgetItem';
import useFocusGroup from '../../utils/useFocusGroup';

type Props = {
  message: Message | null;
  widget: SelectWidget;
  disabled: boolean;
  onSelect: (item: SelectWidget['items'][0]) => void;
};

function ChatSelectWidget(props: Props) {
  const { widget, message, disabled, onSelect } = props;
  const listRef = React.useRef<HTMLDivElement>(null);

  useFocusGroup(
    {
      getGroupElements: () => {
        return listRef.current
          ? listRef.current.getElementsByTagName('button')
          : [];
      },
      options: {
        wrap: true
      },
      focusNodeIndex: 0
    },
    [widget]
  );

  return (
    <SelectWidgetRoot ref={listRef} aria-label="Your answer" role="group">
      {widget.items.map((item, idx) => (
        <StyledSelectWidgetItem
          index={idx}
          item={item}
          key={item.id}
          onClick={onSelect}
          describedById={message && `message-${message.id}-text`}
          disabled={disabled}
        />
      ))}
    </SelectWidgetRoot>
  );
}

export default ChatSelectWidget;

const SelectWidgetRoot = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  margin: 50px 20px 0;
  justify-content: center;
  align-items: center;
`;

const StyledSelectWidgetItem = styled(ChatSelectWidgetItem)`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
