import * as React from 'react';
import styled from 'styled-components/macro';
import CircleSpinner from '../../components/CircleSpinner';
import { WidgetContainer } from './WidgetLayout';

type Props = {
  className?: string;
};

const LoadingWidget = ({ className }: Props) => {
  return (
    <LoadingWidgetRoot className={className}>
      <StyledSpinner />
    </LoadingWidgetRoot>
  );
};

export default LoadingWidget;

const LoadingWidgetRoot = styled(WidgetContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const StyledSpinner = styled(CircleSpinner)`
  width: 54px;
  height: 54px;
  color: ${p => p.theme.dimmedFgColor};
`;
