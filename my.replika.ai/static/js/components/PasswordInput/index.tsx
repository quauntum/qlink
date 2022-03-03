import * as React from 'react';
import styled from 'styled-components/macro';
import TextInput from '../TextInput';
import LabeledTextInput from '../LabeledTextInput';
import ShowPasswordToggle from './ShowPasswordToggle';
import styledOmitProps from '../../utils/styledOmitProps';

type State = {
  passwordHidden: boolean;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  'data-testid'?: string;
  labeled?: boolean;
  id: string;
};

type Props = {
  forwardedRef?: React.Ref<HTMLInputElement>;
} & InputProps;

class PasswordInput extends React.Component<Props> {
  state = { passwordHidden: true };

  render() {
    const {
      value,
      name,
      id,
      onChange,
      forwardedRef,
      'data-testid': dataTestId,
      labeled,
      className,
      style,
      ...rest
    } = this.props;
    const hasIcon = typeof value === 'string' && value.length > 0;

    const InputControl = labeled ? LabeledTextInput : TextInput;

    return (
      <PasswordInputRoot className={className} style={style}>
        <InputControl
          className="password-input"
          autoComplete="off"
          data-testid={dataTestId}
          type={this.state.passwordHidden ? 'password' : 'text'}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          hasIcon={hasIcon}
          ref={forwardedRef}
          {...rest}
        />
        {hasIcon && (
          <StyledShowPasswordToggle
            className="password-toggle"
            labeled={labeled}
            data-testid={dataTestId && `${dataTestId}-toggle`}
            onClick={() =>
              this.setState((s: State) => ({
                passwordHidden: !s.passwordHidden,
              }))
            }
            passwordHidden={this.state.passwordHidden}
          />
        )}
      </PasswordInputRoot>
    );
  }
}

export default React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <PasswordInput forwardedRef={ref} {...props} />
));

const PasswordInputRoot = styled.div`
  position: relative;
`;

const StyledShowPasswordToggle = styledOmitProps<
  { labeled?: boolean },
  typeof ShowPasswordToggle
>(ShowPasswordToggle, ['labeled'])`
  position: absolute;
  top: ${(p) => (p.labeled ? 16 : 13)}px;
  right: 15px;
`;
