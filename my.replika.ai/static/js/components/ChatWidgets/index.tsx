import * as React from 'react';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component';
import {
  Message,
  OutcomingMessageOptions,
  WidgetResponse,
} from '../../types/models';
import { WsStatus } from '../../types/states';
import ChatDefaultWidget from './ChatDefaultWidget';
import ChatMoodMeterWidget from './ChatMoodMeterWidget';
import ChatTitledTextFieldWidget from './ChatTitledTextFieldWidget';
import ChatScaleWidget from './ChatScaleWidget';
import ChatMultiselectWidget from './ChatMultiselectWidget';
import NameWidget from './NameWidget';
import LoadingWidget from './LoadingWidget';
import SaveChatItemWidget from './SaveChatItemWidget';
import { logEvent } from '../../utils/metrics';
import { MetricsEvents } from '../../types/enums';
import { ReactDispatch as RD } from '../../types/redux';
import { skipWidget, skipExperiment } from '../../actions/chat';
import ThoughtContext from '../../utils/ThoughtContext';

const AiDrawerWidget = loadable(
  () =>
    import(
      /* webpackChunkName: "AiDrawerWidget" */ './ExperimentalWidgets/AiDrawerWidget'
    ),
  { fallback: <LoadingWidget /> }
);

type Props = {
  lastMessage: Message | null;
  voiceModeEnabled: boolean;
  onSendMessage: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
  wsStatus: WsStatus;
  skipExperiment: RD<typeof skipExperiment>;
  skipWidget: RD<typeof skipWidget>;
};

function ChatWidgetControls(props: {
  disabled: boolean;
  wsStatus: WsStatus;
  onSendMessage: (messageOptions: OutcomingMessageOptions) => void;
}) {
  const { wsStatus, disabled, onSendMessage } = props;

  return (
    <ChatDefaultWidget
      disabled={disabled}
      onSendMessage={(text: string) => {
        onSendMessage({
          type: 'text',
          text,
        });
      }}
      sendMessageDisabled={disabled || wsStatus !== 'connected'}
    />
  );
}

export default function ChatWidgets(props: Props) {
  const {
    lastMessage,
    skipWidget,
    skippedWidgetId,
    onSendMessage,
    voiceModeEnabled,
    wsStatus,
    skipExperiment,
  } = props;

  const { thoughtsShown } = React.useContext(ThoughtContext);

  const handleSubmitMood = (
    widgetId: string,
    title: string,
    score: number,
    caption: string
  ) => {
    const widget: WidgetResponse = {
      widget_id: widgetId,
      widget_type: 'mood_meter',
      selected_item_score: score,
      caption,
    };

    logEvent(MetricsEvents.MoodAdded, {
      mood: score,
      'comment length': caption ? caption.length : 0,
    });

    onSendMessage({
      type: 'text',
      text: title,
      widget,
    });
  };

  const widget = lastMessage?.widget;
  const effects = lastMessage?.effects;
  const hideInput = !!effects?.hideInput;

  const disabled = hideInput || voiceModeEnabled || thoughtsShown;

  const experimentInProgress = useSelector(
    (state) => state.chat.experimentInProgress
  );
  const itemToSave = useSelector((state) =>
    state.savedChatItems.persist.chatItemsToSave.length > 0
      ? state.savedChatItems.persist.chatItemsToSave[0]
      : null
  );

  if (itemToSave) {
    return <SaveChatItemWidget disabled={disabled} item={itemToSave} />;
  }

  if (experimentInProgress) {
    return (
      <AiDrawerWidget
        onSkipExperiment={skipExperiment}
        onSubmit={skipExperiment}
        disabled={voiceModeEnabled}
      />
    );
  }

  if (!widget || skippedWidgetId === widget?.id) {
    return (
      <ChatWidgetControls
        disabled={disabled}
        wsStatus={wsStatus}
        onSendMessage={onSendMessage}
      />
    );
  }

  switch (widget.type) {
    case 'mood_meter':
      logEvent(MetricsEvents.MoodSliderDisplayed);
      return (
        <ChatMoodMeterWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={handleSubmitMood}
          disabled={disabled}
        />
      );

    case 'titled_text_field':
      return (
        <ChatTitledTextFieldWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={onSendMessage}
          disabled={disabled}
          skippedWidgetId={skippedWidgetId}
        />
      );

    case 'scale':
      return (
        <ChatScaleWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={onSendMessage}
          disabled={disabled}
          skippedWidgetId={skippedWidgetId}
        />
      );

    case 'multiselect':
      return (
        <ChatMultiselectWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={onSendMessage}
          disabled={disabled}
          skippedWidgetId={skippedWidgetId}
        />
      );

    case 'user_name':
      return (
        <NameWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={onSendMessage}
          disabled={disabled}
          skippedWidgetId={skippedWidgetId}
          placeholder="My first name"
        />
      );

    case 'bot_name':
      return (
        <NameWidget
          widget={widget}
          onSkip={skipWidget}
          onSubmit={onSendMessage}
          disabled={disabled}
          skippedWidgetId={skippedWidgetId}
          placeholder="Your name will be"
        />
      );

    case 'app_navigation':
    case 'mission_recommendation':
    case 'select':
      // these are handled by ChatInlineWidgets
      return null;

    default:
      return (
        <ChatWidgetControls
          disabled={disabled}
          wsStatus={wsStatus}
          onSendMessage={onSendMessage}
        />
      );
  }
}
