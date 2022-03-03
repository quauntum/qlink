import * as React from 'react';
import styled from 'styled-components/macro';
import { Message, AppNavigationWidget } from '../../types/models';
import ChatSelectWidgetItem from './ChatSelectWidgetItem';
import useFocusGroup from '../../utils/useFocusGroup';

type Props = {
  message: Message | null;
  widget: AppNavigationWidget;
  disabled: boolean;
  onSelect: (item: AppNavigationWidget['items'][0]) => void;
  onSkip: () => void;
};

function ChatAppNavigationWidget(props: Props) {
  const { widget, message, disabled, onSelect, onSkip } = props;
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
    <AppNavigationRoot ref={listRef} aria-label="Your answer" role="group">
      {widget.items.map((item, idx) => (
        <StyledSelectWidgetItem
          index={idx}
          item={item}
          key={item.id}
          onClick={onSelect as any}
          describedById={message && `message-${message.id}-text`}
          disabled={disabled}
        />
      ))}
      {widget.skip_enabled && widget.skip_button_name && (
        <StyledSelectWidgetItem
          index={widget.items.length + 1}
          item={{
            id: 'skip_widget_id',
            title: widget.skip_button_name || 'Skip'
          }}
          key="skip_widget_id"
          onClick={onSkip}
          describedById={message && `message-${message.id}-text`}
          disabled={disabled}
        />
      )}
    </AppNavigationRoot>
  );
}

export default ChatAppNavigationWidget;

const AppNavigationRoot = styled.div`
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
