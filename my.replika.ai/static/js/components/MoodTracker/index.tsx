import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { connect } from 'react-redux';
import createFocusGroup from 'focus-group';
import styledOmitProps from '../../utils/styledOmitProps';
import { RootState } from '../../types/states';
import { MoodItem } from '../../types/models';
import { getMoodMeter, updateMoodMeter } from '../../actions/profile';
import MoodRecord from './MoodRecord';
import { ReactDispatch as RD } from '../../types/redux';
import CircleSpinner from '../../components/CircleSpinner';
import MoodEmpty from './MoodEmpty';
import { ReactComponent as InfoIcon } from '../../icons/Info.svg';
import { logEvent } from '../../utils/metrics';
import { MetricsEvents } from '../../types/enums';

type Props = {
  className?: string;
  moods: MoodItem[];
  lastMoodTimestamp: number | null;
  hasMoreMoods: boolean;
  isFetchingMoodMeter: boolean;
  getMoodMeter: RD<typeof getMoodMeter>;
  updateMoodMeter: RD<typeof updateMoodMeter>;
};

type State = {
  activeId: string | undefined;
};

type Snapshot = number | null;

const WIDTH = 60;

const TRACK_MOOD_HELP_URL =
  'https://help.replika.ai/hc/en-us/articles/360020674571-How-to-track-mood-in-Replika';

class MoodTracker extends React.PureComponent<Props, State, Snapshot> {
  state = { activeId: undefined };

  rootRef = React.createRef<HTMLDivElement>();

  focusGroup = createFocusGroup({
    keybindings: {
      next: { key: 'ArrowRight' },
      prev: { key: 'ArrowLeft' }
    }
  });

  constructor(props: Props) {
    super(props);

    if (!props.moods || props.moods.length === 0 || !props.lastMoodTimestamp) {
      props.getMoodMeter();
    } else {
      props.updateMoodMeter(props.lastMoodTimestamp);
    }
  }

  componentDidMount() {
    const el = this.rootRef.current;
    if (el) {
      this.scrollToRight(el, true);
    }

    this.focusGroup.setMembers(this.getFocusGroupElements());
    this.focusGroup.activate();
  }

  componentWillUnmount() {
    this.focusGroup.deactivate();
  }

  getSnapshotBeforeUpdate(prevProps: Props) {
    const el = this.rootRef.current;
    if (el && this.props.moods.length > prevProps.moods.length) {
      return el.scrollWidth - el.offsetWidth - el.scrollLeft;
    }

    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: Snapshot) {
    const moods = this.props.moods;
    const prevMoods = prevProps.moods;
    const el = this.rootRef.current;
    if (el && moods.length > prevMoods.length) {
      const forceScroll = prevMoods.length === 0;
      const prevScrollRight = snapshot;
      this.scrollToRight(el, forceScroll, prevScrollRight);

      this.focusGroup.setMembers(this.getFocusGroupElements());
    }
  }

  scrollToRight(
    el: HTMLDivElement,
    forceScroll: boolean,
    prevScrollRight: number | null = null
  ) {
    const scrollRight = el.scrollWidth - el.offsetWidth - el.scrollLeft;

    if (scrollRight < 80 || forceScroll) {
      el.scrollLeft = el.scrollWidth;
    } else if (prevScrollRight) {
      const scrollLeft = el.scrollWidth - el.offsetWidth - prevScrollRight;

      if (scrollLeft !== el.scrollLeft) {
        el.scrollLeft = scrollLeft;
      }
    }
  }

  getFocusGroupElements() {
    if (this.rootRef.current) {
      return this.rootRef.current.querySelectorAll('div[tabindex]');
    } else {
      return [];
    }
  }

  render() {
    const { className, hasMoreMoods, moods } = this.props;

    const hasTodayMood = !!moods.find(m =>
      moment(m.date).isSame(moment(), 'day')
    );

    const moodHint = hasTodayMood
      ? 'Good job on adding your today’s mood!'
      : 'Don’t forget to add your today’s mood';

    if (moods.length < 1) {
      return <MoodEmpty className={className} />;
    }

    return (
      <MoodTrackerRoot>
        <MoodTrackerScroll
          className={className}
          ref={this.rootRef}
          onScroll={this.handleScroll}
          onClick={this.handleScroll}
        >
          <Moods
            count={hasMoreMoods ? moods.length + 1 : moods.length}
            onBlur={this.handleMoodsBlur}
          >
            {hasMoreMoods && <MoreMoodsSpinner />}
            {moods.map((m, idx) => (
              <MoodRecord
                active={this.state.activeId === m.id}
                data-testid={`mood-${moods.length - 1 - idx}`}
                mood={m}
                key={m.id}
                setActive={this.handleSetActive}
                last={idx === moods.length - 1}
              />
            ))}
          </Moods>
        </MoodTrackerScroll>
        <MoodHint>{moodHint}</MoodHint>
        <MoodHelpLink
          rel="noopener noreferrer"
          target="_blank"
          href={TRACK_MOOD_HELP_URL}
        >
          <InfoIcon /> How does mood tracking work?
        </MoodHelpLink>
      </MoodTrackerRoot>
    );
  }

  handleSetActive = (id: string, active: boolean) => {
    const activeId = active ? id : undefined;
    if (activeId === this.state.activeId) {
      return;
    }

    this.setState({ activeId });

    if (active) {
      logEvent(MetricsEvents.MoodOpened, { mode: 'preview' });
    }
  };

  handleMoodsBlur = () => {
    this.setState({ activeId: undefined });
  };

  handleScroll = () => {
    const { moods, hasMoreMoods, isFetchingMoodMeter } = this.props;
    const el = this.rootRef.current;

    if (
      el &&
      el.scrollLeft < 50 &&
      moods &&
      moods.length > 0 &&
      hasMoreMoods &&
      !isFetchingMoodMeter
    ) {
      const startId = moods[0].id;
      this.props.getMoodMeter(startId, 20);
    }
  };
}

export default connect(
  (state: RootState) => ({
    moods: state.profile.persist.moods || [],
    lastMoodTimestamp: state.profile.persist.lastMoodTimestamp,
    hasMoreMoods: state.profile.persist.hasMoreMoods,
    isFetchingMoodMeter: state.profile.isFetchingMoodMeter
  }),
  { getMoodMeter, updateMoodMeter }
)(MoodTracker);

const MoodTrackerRoot = styled.div`
  width: 100%;
  background: ${p => p.theme.chatBgColor};
  text-align: center;
  padding-bottom: 25px;
`;

const MoodTrackerScroll = styled.div`
  width: 100%;
  padding: 25px 30px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Moods = styledOmitProps<{ count: number }>('div', ['count'])`
  min-width: ${p => p.count * WIDTH}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    content: '';
    background-color: ${p => p.theme.chatBgColor};
    width: 100%;
    height: 90px;
  }
`;

const MoreMoodsSpinner = styled(CircleSpinner)`
  color: ${p => p.theme.dimmedFgColor};
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 1;
  left: 20px;
  top: 35px;
`;

const MoodHint = styled.p`
  margin: 5px 0 15px;
  color: ${p => p.theme.fgColor};
`;

const MoodHelpLink = styled.a`
  color: ${p => p.theme.dimmedFgColor};
  display: inline-flex;
  font-size: 15px;
  line-height: 20px;

  & > svg {
    margin-right: 10px;
  }
`;
