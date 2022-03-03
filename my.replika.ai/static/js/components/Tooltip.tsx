import * as React from 'react';
import styled from 'styled-components/macro';
import Tooltip, { RCTooltip } from 'rc-tooltip';

type Props = { className?: string } & RCTooltip.Props;

class OverlayTooltip extends React.PureComponent<Props> {
  render() {
    const { className, ...rest } = this.props;
    return <Tooltip overlayClassName={className} {...rest} />;
  }
}

export default styled(OverlayTooltip)`
  &&& {
    opacity: 1;
    padding: 0;
  }

  &.rc-tooltip-placement-top .rc-tooltip-arrow,
  &.rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  &.rc-tooltip-placement-topRight .rc-tooltip-arrow {
    border-top-color: transparent;
  }

  &.rc-tooltip-placement-bottom .rc-tooltip-arrow,
  &.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  &.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    border-bottom-color: transparent;
  }

  & .rc-tooltip-inner {
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
