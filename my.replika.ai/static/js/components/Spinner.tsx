import * as React from 'react';
import styled from 'styled-components/macro';

const SpinnerRoot = styled.div`
  width: 30px;
  text-align: center;

  > div {
    width: 8px;
    height: 8px;
    background-color: ${p => p.theme.chatBgColor};
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 0.7s infinite ease-in-out both;
  }

  > div:nth-child(2) {
    animation-delay: -0.32s;
  }

  > div:nth-child(3) {
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0.5);
    }
    40% {
      transform: scale(0.7);
    }
  }
`;

const Spinner = ({ className }: { className?: string }) => (
  <SpinnerRoot className={className}>
    <div />
    <div />
    <div />
  </SpinnerRoot>
);

export default Spinner;
