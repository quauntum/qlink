import SolidButton from './SolidButton';
import styled from 'styled-components/macro';

const BorderButton = styled(SolidButton)`
  position: relative;
  color: ${(p) =>
    p.active ? p.theme.borderButtonSelectedFgColor : p.theme.fgColor};
  border: 1px solid
    ${(p) =>
      p.active ? p.theme.borderButtonSelectedBorderColor : p.theme.borderColor};
  background-color: ${(p) =>
    p.active
      ? p.theme.borderButtonSelectedBgColor
      : p.theme.borderButtonBgColor};
  font-size: 16px;

  &:hover {
    border-color: ${(p) =>
      p.disabled
        ? p.theme.borderColor
        : p.active
        ? p.theme.borderButtonSelectedBorderColor
        : p.theme.borderButtonBorderHoverColor};
  }
`;

export default BorderButton;
