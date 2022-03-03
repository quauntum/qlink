import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { MoodItem } from '../../../types/models';
import { DialogBodyForm } from '../../DialogLayout';
import TextArea from '../../TextArea';
import styledOmitProps from '../../../utils/styledOmitProps';
import getMoodColor from '../../../utils/getMoodColor';
import { SidebarLabel } from '../../SidebarLayout';
import { Progress } from '../../../types/states';
import ErrorSuccessMessage from '../../../components/ErrorSuccessMessage';

type Props = {
  mood: MoodItem;
  onSubmit: () => void;
  onChange: (mood: MoodItem) => void;
  progress: Progress;
  serverError: string | undefined;
};

const EditMoodDialogContent = (props: Props) => {
  const { mood, progress } = props;

  return (
    <StyledDialogBodyForm
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      <SidebarLabel>Date</SidebarLabel>
      <MoodDate data-testid="edit-mood-date">
        {moment(mood.date).utc().format('MMMM D, h:mm A')}
      </MoodDate>
      <SidebarLabel>Mood</SidebarLabel>
      <MoodTitle
        percent={mood.mood_percentage / 100}
        data-testid="edit-mood-title"
      >
        {mood.title}
      </MoodTitle>
      <SidebarLabel id="edit-mood-details-label">Details</SidebarLabel>
      <StyledTextarea
        data-testid="edit-mood-caption-textarea"
        defaultValue={mood.caption}
        aria-labelledby="edit-mood-details-label"
        minRows={5}
        onChange={(e) => {
          props.onChange({ ...mood, caption: e.target.value });
        }}
        placeholder="What made you feel this way?"
      />

      <ErrorSuccessMessage
        hasError={progress === Progress.error}
        data-testid="edit-mood-status-message"
      >
        {props.serverError}
      </ErrorSuccessMessage>
    </StyledDialogBodyForm>
  );
};

export default EditMoodDialogContent;

const StyledDialogBodyForm = styled(DialogBodyForm)`
  align-items: flex-start;
`;

const MoodDate = styled.div`
  color: ${(p) => p.theme.fgColor};
`;

const StyledTextarea = styled(TextArea)`
  flex: 1 0 auto;
`;

const MoodTitle = styledOmitProps<{ percent: number }>('div', ['percent'])`
  color: ${(p) => getMoodColor(p.percent)};
`;
