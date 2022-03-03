import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const RADIUS = 32;
const CIRCUMFERENCE = 2 * RADIUS * Math.PI;

const StyledSvg = styled.svg`
  & > .circle {
    transform-origin: 50% 50%;
    stroke-dasharray: ${CIRCUMFERENCE} ${CIRCUMFERENCE};
    stroke-dashoffset: ${CIRCUMFERENCE - (40 / 100) * CIRCUMFERENCE};
    transition: stroke-dashoffset 0.35s;
    animation: ${spin} 0.6s linear infinite;
  }
`;

const CircleSpinner = ({ className, style }: Props) => (
  <StyledSvg className={className} style={style} viewBox="0 0 70 70">
    <circle
      className="circle"
      strokeWidth="4"
      stroke="currentColor"
      fill="transparent"
      r={RADIUS}
      cx="35"
      cy="35"
    />
  </StyledSvg>
);

export default CircleSpinner;
