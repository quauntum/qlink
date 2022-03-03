import * as React from 'react';
import { push } from 'connected-react-router';
import {
  Message,
  OutcomingMessageOptions,
  WidgetResponse,
  AppNavigationItem,
  SelectWidgetItem
} from '../../types/models';
import ChatSelectWidget from './ChatSelectWidget';
import ChatAppNavigationWidget from './ChatAppNavigationWidget';
import ChatMissionRecommendationWidget from './ChatMissionRecommendationWidget';
import { Dialogs, Routes } from '../../types/enums';
import { ReactDispatch as RD } from '../../types/redux';
import { setActiveDialog } from '../../actions/ui';
import { skipWidget } from '../../actions/chat';
import { startMission } from '../../actions/journey';

type Props = {
  lastMessage: Message | null;
  voiceModeEnabled: boolean;
  onSendMessage: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
  setActiveDialog: RD<typeof setActiveDialog>;
  skipWidget: RD<typeof skipWidget>;
  push: RD<typeof push>;
  startMission: RD<typeof startMission>;
};

export default function ChatInlineWidgets(props: Props) {
  const { lastMessage, skippedWidgetId } = props;

  if (!lastMessage) {
    return null;
  }

  const widget = lastMessage?.widget;

  if (!widget || skippedWidgetId === widget?.id) {
    return null;
  }

  const handleNavigationConfirm = (
    widgetId: string,
    item?: AppNavigationItem
  ) => {
    if (item?.action) {
      switch (item.action.type) {
        case 'profile':
          props.setActiveDialog({ type: Dialogs.EditProfile });
          break;

        case 'journey':
          props.push(Routes.Conversations);
          break;

        case 'relationship_settings':
          props.setActiveDialog({ type: Dialogs.EditRelationshipStatus });
          break;

        default:
          break;
      }
    }

    props.skipWidget(widgetId);
  };

  const handleKeyboardSelect = (widgetId: string, item: SelectWidgetItem) => {
    const widget: WidgetResponse = {
      widget_id: widgetId,
      selected_item_id: item.id
    };

    props.onSendMessage({
      type: 'text',
      text: item.title,
      widget
    });
  };

  switch (widget.type) {
    case 'select':
      return (
        <ChatSelectWidget
          message={lastMessage}
          widget={widget}
          onSelect={item => handleKeyboardSelect(widget.id, item)}
          disabled={props.voiceModeEnabled}
        />
      );

    case 'app_navigation':
      return (
        <ChatAppNavigationWidget
          message={lastMessage}
          widget={widget}
          onSelect={item => handleNavigationConfirm(widget.id, item)}
          onSkip={() => props.skipWidget(widget.id)}
          disabled={props.voiceModeEnabled}
        />
      );

    case 'mission_recommendation':
      return (
        <ChatMissionRecommendationWidget
          message={lastMessage}
          widget={widget}
          onSkip={() => props.skipWidget(widget.id)}
          onStartMission={() => props.startMission(widget.mission.id)}
          disabled={props.voiceModeEnabled}
        />
      );

    default:
      return null;
  }
}
