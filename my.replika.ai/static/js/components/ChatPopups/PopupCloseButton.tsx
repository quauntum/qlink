import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import AriaButton from '../AriaButton';

const PopupCloseButtonRoot = styled(AriaButton)`
  position: absolute;
  padding: 0;
  top: 17px;
  right: 17px;
  border: 0;
  background: ${p => p.theme.chatBgColor};
  cursor: pointer;
  width: 14px;
  height: 14px;
  z-index: 1;
  color: ${p => p.theme.fgColor};

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:active {
    transform: scale(0.9);
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const PopupCloseButton = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <PopupCloseButtonRoot label="Close" {...props}>
    <CloseIcon />
  </PopupCloseButtonRoot>
);

export default PopupCloseButton;
