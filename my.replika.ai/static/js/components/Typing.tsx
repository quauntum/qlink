import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

type Props = { className?: string };

const bumpSide = keyframes`
  from, to: {
    transform: scale(1)
  }
  10% {
    transform: scale(1.3)
  }
  20% {
    transform: scale(1)
  }
  70% {
    transform: scale(1)
  }
  80% {
    transform: scale(1.3)
  }
  90% {
    transform: scale(1)
  }
`;

const bumpMiddle = keyframes`
  from, to: {
    transform: scale(1)
  }
  10% {
    transform: scale(1.3)
  }
  20% {
    transform: scale(1)
  }
  50% {
    transform: scale(1)
  }
  60% {
    transform: scale(1.3)
  }
  70% {
    transform: scale(1)
  }
`;

const StyledSvg = styled.svg`
  & > .left-dot {
    transform-origin: 4px 5px;
    animation: ${bumpSide} 2s 0s linear infinite;
  }
  & > .middle-dot {
    transform-origin: 15px 5px;
    animation: ${bumpMiddle} 2s 0.15s linear infinite;
  }
  & > .right-dot {
    transform-origin: 26px 5px;
    animation: ${bumpSide} 2s 1s linear infinite;
  }
`;

export default class Typing extends React.PureComponent<Props> {
  uniqId = Math.floor(Math.random() * 1000000).toString();

  render() {
    const { className } = this.props;
    return (
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 10"
        className={className}
      >
        <circle className="left-dot" cx="4" cy="5" r="3" fill="currentColor" />
        <circle
          className="middle-dot"
          cx="15"
          cy="5"
          r="3"
          fill="currentColor"
        />
        <circle
          className="right-dot"
          cx="26"
          cy="5"
          r="3"
          fill="currentColor"
        />
      </StyledSvg>
    );
  }
}
