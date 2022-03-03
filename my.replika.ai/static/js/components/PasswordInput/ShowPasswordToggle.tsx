import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as IconEye } from '../../icons/Eye.svg';
import { ReactComponent as IconClosedEye } from '../../icons/ClosedEye.svg';
import AriaButton from '../AriaButton';

type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  passwordHidden: boolean;
  'data-testid'?: string;
};

const ShowPasswordToggleRoot = styled(AriaButton)`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;

  width: 24px;
  height: 24px;
  color: ${p => p.theme.fgColor};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const ShowPasswordToggle = ({
  className,
  onClick,
  passwordHidden,
  'data-testid': dataTestId
}: Props) => (
  <ShowPasswordToggleRoot
    type="button"
    className={className}
    onClick={onClick}
    label={passwordHidden ? 'Show password' : 'Hide password'}
    active={!passwordHidden}
    data-testid={dataTestId}
  >
    {passwordHidden ? (
      <IconEye aria-hidden="true" />
    ) : (
      <IconClosedEye aria-hidden="true" />
    )}
  </ShowPasswordToggleRoot>
);

export default ShowPasswordToggle;
