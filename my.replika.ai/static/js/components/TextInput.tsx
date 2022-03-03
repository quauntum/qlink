import styledOmitProps from '../utils/styledOmitProps';

// hasIcon prop is used for positioning autofill key symbol in Safari
// (so it doesn't overlap with our custom icon, like show/hide password toggle)
const TextInput = styledOmitProps<{ hasIcon?: boolean }, 'input'>('input', [
  'hasIcon'
])`
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.borderColor};
  transition: border 0.2s ease-out;
  height: 50px;
  padding: 14px 17px 16px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  background-color: white;
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &::-moz-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
  }
  &::-ms-input-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-ms-input-placeholder {
    opacity: 0;
  }

  &::-webkit-textfield-decoration-container {
    margin-right: ${p => (p.hasIcon ? '30px' : 0)};
  }

  &::-ms-clear {
    margin-right: ${p => (p.hasIcon ? '30px' : 0)};
  }

  &::-ms-reveal {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${p => p.theme.outlineColor};
  }
`;

export default TextInput;
