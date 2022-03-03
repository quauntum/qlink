import * as React from 'react';
import styled from 'styled-components/macro';
import {
  TitledTextFieldWidget,
  OutcomingMessageOptions
} from '../../types/models';
import {
  SubmitContainer,
  SendButton,
  SkipButton,
  WidgetContainer,
  WidgetTextArea
} from './WidgetLayout';

type Props = {
  widget: TitledTextFieldWidget;
  disabled: boolean;
  onSkip: (widgetId: string) => void;
  onSubmit: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
};

type State = {
  text: string;
};

export default class ChatTitledTextFieldWidget extends React.Component<
  Props,
  State
> {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      text: e.target.value
    });
  };

  isButtonDisabled = () => {
    return this.state.text.length < 1;
  };

  handleSubmit = () => {
    this.props.onSubmit({
      type: 'text',
      text: this.state.text,
      widget: {
        widget_id: this.props.widget.id
      }
    });
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.metaKey) {
      this.handleSubmit();
    }
  };

  render() {
    const {
      widget: { id, title, skip_enabled: skipEnabled },
      onSkip
    } = this.props;

    return (
      <WidgetContainer>
        <Title data-testid="titled-text-field-widget-title">{title}</Title>
        <StyledTextArea
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder={'Your answer'}
          data-testid="titled-text-field-widget-textarea"
        />
        <SubmitContainer skipEnabled={skipEnabled}>
          {skipEnabled && (
            <SkipButton
              data-testid="titled-text-field-widget-skip-button"
              size="small"
              onClick={() => onSkip(id)}
            >
              Skip
            </SkipButton>
          )}
          <SendButton
            size="small"
            data-testid="titled-text-field-widget-send-button"
            disabled={this.isButtonDisabled()}
            onClick={this.handleSubmit}
          >
            Send
          </SendButton>
        </SubmitContainer>
      </WidgetContainer>
    );
  }
}

const StyledTextArea = styled(WidgetTextArea)`
  padding: 17px 16px;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 16px;
  color: ${p => p.theme.fgColor};
  margin: 2px 0 18px;
`;
