import * as React from 'react';
import {
  UsernameWidget,
  OutcomingMessageOptions,
  BotNameWidget
} from '../../types/models';
import {
  WidgetContainer,
  WidgetInput,
  SendButton,
  SubmitContainer
} from './WidgetLayout';

type Props = {
  widget: UsernameWidget | BotNameWidget;
  disabled: boolean;
  onSkip: (widgetId: string) => void;
  onSubmit: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
  placeholder: string;
};

const NameWidget = (props: Props) => {
  const [name, setName] = React.useState<string>('');

  return (
    <WidgetContainer>
      <WidgetInput
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={props.placeholder}
      />
      <SubmitContainer>
        <SendButton
          onClick={() => {
            if (name.length !== 0) {
              props.onSubmit({
                type: 'text',
                text: name,
                widget: {
                  widget_id: props.widget.id
                }
              });

              setName('');
            }
          }}
        >
          Send
        </SendButton>
      </SubmitContainer>
    </WidgetContainer>
  );
};

export default NameWidget;
