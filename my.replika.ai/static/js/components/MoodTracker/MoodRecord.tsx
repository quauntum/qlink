import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { MoodItem } from '../../types/models';
import styledOmitProps from '../../utils/styledOmitProps';
import getMoodColor from '../../utils/getMoodColor';
import Popover from '../../components/Popover';
import MoodRecordPopover from './MoodRecordPopover';

const WIDTH = 60;

type Props = {
  mood: MoodItem;
  setActive: (id: string, active: boolean) => void;
  active: boolean;
  last: boolean;
  'data-testid': string;
};

// [0, 1] => [0.15, 0.85];
const getDotPosition = (percent: number) => {
  return percent * 0.7 + 0.15;
};

const MoodRecordRoot = styled.div`
  flex: 0 0 ${WIDTH}px;
  width: ${WIDTH}px;
`;

const MoodRecordGraph = styledOmitProps<{ currentDay: boolean }>('div', [
  'currentDay'
])`
  height: 90px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    left: 50%;
    height: 100%;
    width: 1px;
    border-left: 1px solid ${p =>
      p.currentDay
        ? p.theme.moodTrackerCurrentDayColor
        : p.theme.moodTrackerDayColor};
  }
`;

const MoodRecordDot = styledOmitProps<{ percent: number; active: boolean }>(
  'div',
  ['percent', 'active']
)`
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: absolute;
  width: 13px;
  height: 13px;
  left: 50%;
  bottom: ${p => getDotPosition(p.percent) * 100}%;
  transform: translate(-6px, 6px);
  border: none;
  border-radius: 100%;
  background-color: ${p => getMoodColor(p.percent)};

  box-shadow: ${p =>
    p.active ? `0 0 0 6px ${getMoodColor(p.percent, 0.3)}` : 'none'};

  &.focus-visible:focus {
    outline: none;
    box-shadow: 0 0 0 6px ${p => getMoodColor(p.percent, 0.3)};
  }
`;

const MoodRecordDate = styled.div`
  font-size: 12px;
  color: ${p => p.theme.dimmedFgColor};
  text-align: center;
  padding: 12px 0 0;
`;

const MoodRecord = ({
  mood,
  setActive,
  active,
  last,
  'data-testid': dataTestId
}: Props) => {
  const currentDay = last && moment(mood.date).isSame(moment(), 'day');

  return (
    <MoodRecordRoot data-testid={dataTestId}>
      <Popover
        preferPlace="above"
        isOpen={active}
        onClose={() => setActive(mood.id, false)}
        onRenderContent={() => (
          <MoodRecordPopover
            data-testid={`${dataTestId}-popover`}
            mood={mood}
            onClose={() => setActive(mood.id, false)}
          />
        )}
        closeOnOuterAction
        size="small"
        offset={5}
      >
        <MoodRecordGraph currentDay={currentDay}>
          <MoodRecordDot
            data-testid={`mood-dot ${dataTestId}-dot`}
            percent={mood.mood_percentage / 100}
            tabIndex={last ? 0 : -1}
            // sometimes onFocus is not triggered for some reason
            onClick={() => setActive(mood.id, true)}
            onFocus={() => setActive(mood.id, true)}
            active={active}
          />
        </MoodRecordGraph>
      </Popover>
      <MoodRecordDate>
        {moment(mood.date)
          .utc()
          .format('MMM D')}
      </MoodRecordDate>
    </MoodRecordRoot>
  );
};

export default MoodRecord;
