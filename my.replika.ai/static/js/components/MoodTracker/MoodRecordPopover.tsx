import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { connect } from 'react-redux';
import getMoodColor from '../../utils/getMoodColor';
import styledOmitProps from '../../utils/styledOmitProps';
import { MoodItem } from '../../types/models';
import { ReactDispatch as RD } from '../../types/redux';
import { setActiveDialog } from '../../actions/ui';
import LinkButton from '../../components/LinkButton';
import { Dialogs, MetricsEvents } from '../../types/enums';
import { logEvent } from '../../utils/metrics';

type Props = {
  mood: MoodItem;
  'data-testid': string;
  onClose: () => void;
  setActiveDialog: RD<typeof setActiveDialog>;
};

const CAPTION_LIMIT = 110;

const MoodRecordPopover = (props: Props) => {
  const { mood, 'data-testid': dataTestId } = props;

  let caption = mood.caption;
  let more: React.ReactNode | null = null;
  if (caption.length > CAPTION_LIMIT) {
    caption = caption.substr(0, CAPTION_LIMIT);
    caption = caption.substr(0, caption.lastIndexOf(' ')) + '... ';
    more = <Ellipsis>more</Ellipsis>;
  }

  const openMoodDialog = () => {
    props.setActiveDialog({ type: Dialogs.EditMood, mood });
    props.onClose();
    logEvent(MetricsEvents.MoodOpened, { mode: 'full screen' });
  };

  return (
    <MoodRecordPopoverRoot
      data-testid={dataTestId}
      onMouseDown={e => e.preventDefault()}
    >
      <PopoverDate data-testid={`${dataTestId}-date`}>
        {moment(mood.date)
          .utc()
          .format('MMMM D, h:mm A')}
      </PopoverDate>
      <PopoverMoodTitle
        data-testid={`${dataTestId}-title`}
        percent={mood.mood_percentage / 100}
      >
        {mood.title}
      </PopoverMoodTitle>
      <PopoverText data-testid={`${dataTestId}-caption`}>
        {mood.caption ? (
          <LinkButton
            onClick={openMoodDialog}
            data-testid={`${dataTestId}-caption-link`}
          >
            {caption}
            {more}
          </LinkButton>
        ) : (
          <EmptyCaption
            onClick={openMoodDialog}
            data-testid={`${dataTestId}-caption-link`}
          >
            Click to edit
          </EmptyCaption>
        )}
      </PopoverText>
    </MoodRecordPopoverRoot>
  );
};

export default connect(
  null,
  { setActiveDialog }
)(MoodRecordPopover);

const MoodRecordPopoverRoot = styled.div`
  text-align: left;
  line-height: 24px;
  font-size: 16px;
`;

const PopoverText = styled.div`
  color: ${p => p.theme.fgColor};
  margin-top: 10px;
`;
const PopoverDate = styled.div`
  color: ${p => p.theme.fgColor};
`;

const PopoverMoodTitle = styledOmitProps<{ percent: number }>('div', [
  'percent'
])`
  color: ${p => getMoodColor(p.percent)};
`;

const Ellipsis = styled.span`
  color: ${p => p.theme.dimmedFgColor};
  text-decoration: none;
`;

const EmptyCaption = styled(LinkButton)`
  color: ${p => p.theme.dimmedFgColor};
`;
