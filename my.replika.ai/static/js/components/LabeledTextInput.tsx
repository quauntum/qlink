import * as React from 'react';
import styled from 'styled-components/macro';
import TextInput from './TextInput';
import styledOmitProps from '../utils/styledOmitProps';

type Props = React.ComponentProps<typeof TextInput> & { id: string };

const LabelRoot = styled.div`
  position: relative;
  height: 55px;
`;

export const Label = styledOmitProps<{ collapsed: boolean }, 'label'>('label', [
  'collapsed',
])`
  position: absolute;
  top: ${(p) => (p.collapsed ? 8 : 21)}px;
  left: 16px;
  color: ${(p) => p.theme.placeholderColor};
  font-size: ${(p) => (p.collapsed ? 12 : 16)}px;
  line-height: 15px;
  user-select: none;
  pointer-events: none;
  transition: top 0.2s ease-out, color 0.2s ease-out, font-size 0.2s ease-out;
`;

const StyledTextInput = styled(TextInput)`
  height: 55px;
  padding: 27px 16px 12px;
  font-size: 16px;
  background: ${(p) => p.theme.inputBgColor};
  color: ${(p) => p.theme.fgColor};
  border: 0;
`;

const LabeledTextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, value, id, ...rest }: Props, ref) => {
    const [focused, setFocused] = React.useState(false);

    return (
      <LabelRoot className={className}>
        <StyledTextInput
          id={id}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          ref={ref}
          {...rest}
        />
        <Label htmlFor={id} collapsed={focused || !!value}>
          {placeholder}
        </Label>
      </LabelRoot>
    );
  }
);

export default LabeledTextInput;
