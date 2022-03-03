import * as React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import Select from 'react-select';
import { Theme } from '../types/theme';
import { Label } from './LabeledTextInput';

type Option = {
  value: string;
  label: string;
};

type Props = {
  theme: Theme;
  className?: string;
  style?: object;
  id: string;
  placeholder?: string;
  value?: Option;
  defaultValue?: Option;
  options: Option[];
  menuPlacement?: 'auto' | 'bottom' | 'top';
  onChange: (opt: Option) => void;
};

const getStyles = (theme: Theme, hasLabel: boolean) => ({
  option: (base, { isFocused }) => ({
    ...base,
    color: isFocused ? theme.bubbleOutFgColor : theme.fgColor,
    backgroundColor: isFocused ? theme.bubbleOutBgColor : theme.chatBgColor,
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: theme.chatBgColor,
  }),
  control: (base, state) => ({
    ...base,
    color: theme.fgColor,
    backgroundColor: theme.inputBgColor,
    borderColor: theme.inputBgColor,
    borderRadius: 3,
    boxShadow: state.isFocused ? `0 0 2px 2px ${theme.outlineColor}` : 'none',
    ':hover': {
      borderColor: theme.inputBgColor,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: theme.placeholderColor,
    margin: 0,
    paddingTop: 14,
  }),
  input: (base) => ({
    ...base,
    color: theme.fgColor,
    height: '42px',
    marginTop: 14,
    padding: '0 0 12px 0',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 15px',
    height: 55,
  }),
  singleValue: (base) => ({
    ...base,
    color: theme.fgColor,
    transform: hasLabel ? 'translateY(0)' : 'translateY(-8px)',
    margin: 0,
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
});

const DropdownRoot = styled.div`
  position: relative;
`;

const Dropdown = ({
  theme,
  placeholder,
  id,
  value,
  className,
  ...rest
}: Props) => {
  const [stateValue, setStateValue] = React.useState(value?.value || '');

  React.useEffect(() => {
    const newValue = value?.value || '';

    setStateValue(newValue);
  }, [value]);

  return (
    <DropdownRoot className={className}>
      <Select
        key={stateValue ? 'selected' : 'no selected'}
        inputId={id}
        value={value}
        placeholder=""
        {...rest}
        styles={getStyles(theme, !!placeholder)}
        isSearchable={false}
        onChange={(opt) => {
          setStateValue(opt.value);
          if (rest.onChange) {
            rest.onChange(opt);
          }
        }}
      />
      <Label collapsed={!!stateValue} htmlFor={id}>
        {placeholder}
      </Label>
    </DropdownRoot>
  );
};

export default withTheme(Dropdown);
