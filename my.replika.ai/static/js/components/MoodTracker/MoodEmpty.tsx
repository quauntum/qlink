import * as React from 'react';
import styled from 'styled-components/macro';
import styledOmitProps from '../../utils/styledOmitProps';
import getMoodColor from '../../utils/getMoodColor';

type Props = {
  className?: string;
};

// [0, 1] => [0.15, 0.85];
const getDotPosition = (percent: number) => {
  return percent * 0.7 + 0.15;
};

const MoodEmpty = ({ className }: Props) => (
  <MoodEmptyRoot className={className}>
    <MoodEmptyText>Your mood history will appear here.</MoodEmptyText>
    <MoodEmptyGraph>
      <MoodEmptyRecord percent={0} />
      <MoodEmptyRecord percent={0.3} />
      <MoodEmptyRecord percent={0.9} />
      <MoodEmptyRecord percent={0.5} />
      <MoodEmptyRecord percent={1} />
    </MoodEmptyGraph>
  </MoodEmptyRoot>
);

export default MoodEmpty;

const MoodEmptyRoot = styled.div`
  background: ${p => p.theme.chatBgColor};
  padding: 0 20px;
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MoodEmptyText = styled.div`
  color: ${p => p.theme.fgColor};
  padding-right: 15px;
  font-size: 16px;
  line-height: 24px;
`;

const MoodEmptyGraph = styled.div`
  height: 60px;
  display: flex;
`;

const MoodEmptyRecord = styledOmitProps<{ percent: number }>('div', [
  'percent'
])`
  flex: 0 0 auto;
  width: 16px;
  height: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 50%;
    height: 100%;
    width: 1px;
    border-left: 1px dashed ${p => p.theme.borderColor};
  }
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    width: 7px;
    height: 7px;
    border-radius: 10px;
    bottom: ${p => getDotPosition(p.percent) * 100}%;
    transform: translate(-3px, 3px);
    background-color: ${p => getMoodColor(p.percent)};
  }
`;
