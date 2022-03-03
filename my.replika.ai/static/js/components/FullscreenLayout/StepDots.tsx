import * as React from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import styledOmitProps from '../../utils/styledOmitProps';

const activate = keyframes`
  from {
    border-width: 4px;
    max-width: 4px;
    max-height: 4px;
    font-size: 2px;
    line-height: 4px;
  }
  to {
    border-width: 1px;
    max-width: 20px;
    max-height: 20px;
    font-size: 12px;
    line-height: 20px;
  }
`;

type Props = {
  step: number;
  maxStep: number;
  className?: string;
  'data-testid'?: string;
};

const StepDotsRoot = styled.div`
  display: flex;
  height: 22px;
  align-items: center;
`;

const ANIMATION_TIMEOUT = 200;

const StepDot = styledOmitProps<{ active: boolean; step: number }>('div', [
  'active'
])`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.fgColor};

  & + & {
    margin-left: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    border-radius: 100px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    max-width: ${p => (p.active ? '20px' : '4px')};
    max-height: ${p => (p.active ? '20px' : '4px')};
    border-color: ${p => p.theme.fgColor};
    border-style: solid;
    border-width: ${p => (p.active ? '1px' : '4px')};
    ${p =>
      p.active
        ? css`
            animation: ${activate} ${ANIMATION_TIMEOUT}ms ease-out;
          `
        : ''}
  }

  &::after {
    position: absolute;
    overflow: hidden;
    text-align: center;
    width: 100%;
    height: 100%;
    max-width: ${p => (p.active ? '20px' : '4px')};
    max-height: ${p => (p.active ? '20px' : '4px')};
    content: "${p => (p.active ? p.step : '')}";
    font-size: 12px;
    line-height: 20px;
    ${p =>
      p.active
        ? css`
            animation: ${activate} ${ANIMATION_TIMEOUT}ms ease-out;
          `
        : ''}
  }
`;

export default class StepDots extends React.Component<Props> {
  render() {
    const { step, maxStep, className, 'data-testid': dataTestId } = this.props;

    return (
      <StepDotsRoot className={className} data-testid={dataTestId}>
        {Array.from({ length: maxStep }).map((_, idx) => (
          <StepDot
            key={idx}
            active={idx + 1 === step}
            step={step}
            data-testid={dataTestId && `${dataTestId}-dot-${idx + 1}`}
          />
        ))}
      </StepDotsRoot>
    );
  }
}
