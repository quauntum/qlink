import styledOmitProps from '../utils/styledOmitProps';
import AriaButton from './AriaButton';

type Props = {
  size?: 'small';
};

const SolidButton = styledOmitProps<Props, typeof AriaButton>(AriaButton, [
  'size',
])`
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin: 0;
  width: 100%;
  cursor: ${(p) => (p.disabled ? 'inherit' : 'pointer')};
  border-radius: 3px;
  box-sizing: border-box;
  flex: 0 0 auto;
  user-select: none;

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
    color 0.2s ease-out, opacity 0.2s ease-out;

  color: ${(p) =>
    p.disabled
      ? p.theme.solidButtonDisabledFgColor
      : p.theme.solidButtonFgColor};
  background-color: ${(p) =>
    p.disabled
      ? p.theme.solidButtonDisabledBgColor
      : p.theme.solidButtonBgColor};

  height: ${(p) => (p.size === 'small' ? '2.5rem' : '3rem')};
  font-size: ${(p) => (p.size === 'small' ? '15px' : '17px')};
  border-radius: 50px;
  border: none;
  width: initial;
  padding: ${(p) => (p.size === 'small' ? '0 16px' : '0 32px')};

  /* force button layout for non-button components (as=...) */
  a&, li& {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    &:hover {
      text-decoration: none;
    }
  }

  a&.focus-visible:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }
`;

export default SolidButton;
