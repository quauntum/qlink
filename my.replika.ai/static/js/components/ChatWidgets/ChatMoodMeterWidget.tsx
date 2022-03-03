import * as React from 'react';
import styled from 'styled-components/macro';
import Slider from '../../components/Slider';
import { MoodMeterWidget } from '../../types/models';
import mobileMedia from '../../utils/mobileMedia';
import getMoodColor from '../../utils/getMoodColor';
import styledOmitProps from '../../utils/styledOmitProps';
import {
  SubmitContainer,
  SendButton,
  SkipButton,
  WidgetContainer,
  WidgetTextArea
} from './WidgetLayout';
import { logEvent } from '../../utils/metrics';
import { MetricsEvents } from '../../types/enums';

import 'rc-slider/assets/index.css';

type Props = {
  widget: MoodMeterWidget;
  disabled: boolean;
  onSkip: (messageId: string) => void;
  onSubmit: (
    messageId: string,
    title: string,
    score: number,
    caption: string
  ) => void;
};

type State = {
  score: number;
  caption: string;
};

const ChatMoodMeterWidgetRoot = styled(WidgetContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const Mood = styledOmitProps<{ percent: number }>('div', ['percent'])`
  flex: 0 0 auto;
  color: ${p => getMoodColor(p.percent)};
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 30px;
  text-align: center;
`;

const SliderWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  margin: 5px 0px 30px 0;
  ${mobileMedia`
    margin: 5px 0px 30px 0;
  `};
`;

const StyledSlider = styled(Slider)`
  flex: 0 0 auto;
`;

export default class ChatMoodMeterWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // feeling a bit better than average
    const score = Math.ceil(props.widget.items.length / 2);

    this.state = { score, caption: '' };
  }

  getMoodTitle(score: number) {
    const { widget } = this.props;

    const mood = widget.items.find(i => i.score === score);

    return mood?.title;
  }

  render() {
    const { widget, onSkip, onSubmit, disabled } = this.props;
    const moodTitle = this.getMoodTitle(this.state.score);
    const percent = this.state.score / (widget.items.length - 1);

    return (
      <ChatMoodMeterWidgetRoot data-testid="mood-widget">
        <SliderWrapper>
          <Mood percent={percent} data-testid="mood-widget-title">
            {moodTitle}
          </Mood>
          <StyledSlider
            data-testid="mood-widget-slider"
            value={this.state.score}
            max={widget.items.length - 1}
            onChange={this.handleMoodChange}
            disabled={disabled}
            gradient
          />
        </SliderWrapper>
        <WidgetTextArea
          data-testid="mood-widget-caption-textarea"
          autoFocus
          placeholder="What made you feel this way?"
          onChange={this.handleCaptionChange}
          minRows={1}
        />
        <SubmitContainer skipEnabled={true}>
          <SkipButton
            data-testid="mood-widget-skip-button"
            disabled={disabled}
            size="small"
            onClick={() => {
              logEvent(MetricsEvents.MoodSliderSkipped);
              onSkip(widget.id);
            }}
          >
            Skip
          </SkipButton>
          <SendButton
            size="small"
            data-testid="mood-widget-send-button"
            disabled={disabled}
            onClick={() =>
              onSubmit(
                widget.id,
                moodTitle || '',
                this.state.score,
                this.state.caption
              )
            }
          >
            Send
          </SendButton>
        </SubmitContainer>
      </ChatMoodMeterWidgetRoot>
    );
  }

  handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ caption: e.target.value });
  };

  handleMoodChange = (score: number) => {
    this.setState({ score });
  };
}
