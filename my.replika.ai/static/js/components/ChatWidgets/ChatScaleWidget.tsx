import * as React from 'react';
import styled from 'styled-components/macro';
import { ScaleWidget, OutcomingMessageOptions } from '../../types/models';
import {
  SubmitContainer,
  SendButton,
  SkipButton,
  WidgetContainer
} from './WidgetLayout';
import Slider from '../../components/Slider';

import 'rc-slider/assets/index.css';

type Props = {
  widget: ScaleWidget;
  disabled: boolean;
  onSkip: (widgetId: string) => void;
  onSubmit: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
};

type State = {
  value: number;
};

export default class ChatScaleWidget extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  handleSubmit = () => {
    const wr = {
      widget_id: this.props.widget.id,
      selected_item_id: this.props.widget.items[this.state.value].id
    };

    this.props.onSubmit({
      type: 'text',
      text: this.props.widget.items[this.state.value].title,
      widget: wr
    });
  };

  handleChange = (value: number) => {
    this.setState({ value });
  };

  render() {
    const {
      widget: { id, items, skip_enabled: skipEnabled },
      onSkip,
      skippedWidgetId
    } = this.props;

    return (
      <WidgetContainer>
        <Answer>{items[this.state.value].title}</Answer>
        <Slider
          data-testid="scale-widget-slider"
          value={this.state.value}
          max={items.length - 1}
          onChange={this.handleChange}
          disabled={false}
        />
        {!skippedWidgetId && (
          <StyledSubmitContainer skipEnabled={skipEnabled}>
            {skipEnabled && (
              <SkipButton
                data-testid="scale-widget-skip-button"
                size="small"
                onClick={() => onSkip(id)}
              >
                Skip
              </SkipButton>
            )}
            <SendButton
              size="small"
              data-testid="scale-widget-send-button"
              disabled={false}
              onClick={this.handleSubmit}
            >
              Send
            </SendButton>
          </StyledSubmitContainer>
        )}
      </WidgetContainer>
    );
  }
}

const StyledSubmitContainer = styled(SubmitContainer)`
  margin-top: 30px;
`;

const Answer = styled.div`
  padding: 8px 0 20px;
  text-align: center;
  font-size: 20px;
  color: ${p => p.theme.fgColor};
`;
