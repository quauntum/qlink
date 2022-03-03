import * as React from 'react';
import styled from 'styled-components/macro';
import { DayModifiers } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import TextInput from './TextInput';
import { Label } from './LabeledTextInput';

import 'react-day-picker/lib/style.css';

type Props = {
  className?: string;
  id: string;
  value: Date | undefined;
  name: string;
  placeholder?: string;
  onChange: (day: Date | undefined) => void;
  'data-testid'?: string;
};

type State = {
  value: Date | undefined;
  isFocused: boolean;
};

const DayPickerRoot = styled.div`
  margin-top: 26px;
  position: relative;

  & > .DayPickerInput {
    display: block;
    width: 100%;
    color: ${p => p.theme.fgColor};
  }

  & > .DayPickerInput > input {
    padding: 26px 16px 12px;
    height: 55px;
  }

  & .DayPickerInput-Overlay {
    border-radius: 0 0 3px 3px;
    background: ${p => p.theme.chatBgColor};
  }

  & .DayPicker-NavButton {
    color: ${p => p.theme.dimmedFgColor};
  }

  & .DayPicker-Weekday {
    color: ${p => p.theme.dimmedFgColor};
  }

  &
    .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${p => p.theme.bgColor};
  }

  &
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${p => p.theme.outlineColor};
  }

  .DayPickerInput > input {
    background: ${p => p.theme.inputBgColor};
    color: ${p => p.theme.fgColor};
    border: 1px solid ${p => p.theme.inputBgColor};
  }
`;

const FORMAT = 'MM/DD/YYYY';

export default class DayPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value, isFocused: false };
  }

  render() {
    const { id, placeholder, className } = this.props;

    return (
      <DayPickerRoot className={className}>
        <DayPickerInput
          inputProps={{
            id,
            'data-testid': this.props['data-testid'],
            onFocus: () => this.setState({ isFocused: true }),
            onBlur: () => this.setState({ isFocused: false })
          }}
          value={this.state.value}
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
          placeholder=""
          component={TextInput}
          onDayChange={this.handleDayChange}
        />
        <Label
          collapsed={!!this.state.value || this.state.isFocused}
          htmlFor={id}
        >
          {placeholder || formatDate(new Date(), FORMAT)}
        </Label>
      </DayPickerRoot>
    );
  }

  handleDayChange = (
    day: Date,
    modifiers: DayModifiers,
    dayPickerInput: DayPickerInput
  ) => {
    const input = dayPickerInput.getInput();
    if (!input.value.trim()) {
      this.props.onChange(undefined);
    } else if (day) {
      this.props.onChange(day);
    }

    this.setState({ value: input.value });
  };
}
