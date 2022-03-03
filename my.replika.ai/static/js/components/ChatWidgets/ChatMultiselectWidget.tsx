import React from 'react';
import styled from 'styled-components/macro';
import { MultiselectWidget, OutcomingMessageOptions } from '../../types/models';
import styledOmitProps from '../../utils/styledOmitProps';
import mobileMedia from '../../utils/mobileMedia';
import {
  SubmitContainer,
  SendButton,
  SkipButton,
  WidgetContainer
} from './WidgetLayout';
import BorderButton from '../../components/BorderButton';

// if array of options contains at least one item which
// length exceeds this number, layout flips to vertical
const LAYOUT_THRESHOLD = 15;
const GRID_2_THRESHOLD = 10;

type Props = {
  widget: MultiselectWidget;
  disabled: boolean;
  onSkip: (widgetId: string) => void;
  onSubmit: (messageOptions: OutcomingMessageOptions) => void;
  skippedWidgetId: string | undefined;
};

type LayoutType =
  | 'vertical'
  | 'horizontal'
  | 'horizontalGrid2'
  | 'horizontalGrid3';

type State = {
  selectedItems: string[];
};

export default class ChatMultiselectWidget extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedItems: []
    };
  }

  onSelectItem = (id: string) => {
    const {
      widget: {
        multiple_selection: multipleSelection,
        max_item_selected: maxItemSelected
      }
    } = this.props;

    const { selectedItems } = this.state;

    if (!multipleSelection) {
      this.setState({
        selectedItems: [id]
      });
      return;
    }

    if (selectedItems.indexOf(id) > -1) {
      this.setState({
        selectedItems: selectedItems.filter(i => i !== id)
      });
      return;
    }

    if (selectedItems.length < maxItemSelected) {
      this.setState({
        selectedItems: selectedItems.concat(id)
      });
    } else if (maxItemSelected === 1) {
      this.setState({
        selectedItems: [id]
      });
    }
  };

  handleSubmit = () => {
    const wr = {
      widget_id: this.props.widget.id,
      selected_item_ids: this.state.selectedItems
    };
    const { selectedItems } = this.state;

    const resp = this.props.widget.items
      .filter(item => selectedItems.indexOf(item.id) !== -1)
      .map((item, idx) => (idx > 0 ? item.title.toLowerCase() : item.title))
      .join(', ');

    this.props.onSubmit({
      type: 'text',
      text: resp,
      widget: wr
    });
  };

  isButtonDisabled = () => {
    const { selectedItems } = this.state;
    const {
      widget: {
        min_item_selected: minItemSelected,
        max_item_selected: maxItemSelected
      }
    } = this.props;

    if (
      selectedItems.length < minItemSelected ||
      selectedItems.length > maxItemSelected
    ) {
      return true;
    }

    return false;
  };

  render() {
    const {
      widget: { id, items, skip_enabled: skipEnabled },
      onSkip
    } = this.props;

    const { selectedItems } = this.state;

    const layoutType = items.find(item => item.title.length > LAYOUT_THRESHOLD)
      ? 'vertical'
      : items.length < 3
      ? 'horizontal'
      : items.find(item => item.title.length > GRID_2_THRESHOLD)
      ? 'horizontalGrid2'
      : 'horizontalGrid3';

    return (
      <ChatMultiselectWidgetRoot>
        <SelectContainer layoutType={layoutType}>
          {items.map((item, index) => {
            return (
              <SelectItemButton
                key={item.title}
                data-testid={`multiselect-widget-${index}-item-button`}
                active={selectedItems.indexOf(item.id) > -1}
                layoutType={layoutType}
                onClick={() => this.onSelectItem(item.id)}
              >
                {item.title}
              </SelectItemButton>
            );
          })}
        </SelectContainer>
        <SubmitContainer skipEnabled={skipEnabled}>
          {skipEnabled && (
            <SkipButton
              data-testid="multiselect-widget-skip-button"
              size="small"
              onClick={() => onSkip(id)}
            >
              Skip
            </SkipButton>
          )}
          <SendButton
            size="small"
            data-testid="multiselect-widget-send-button"
            disabled={this.isButtonDisabled()}
            onClick={this.handleSubmit}
          >
            Send
          </SendButton>
        </SubmitContainer>
      </ChatMultiselectWidgetRoot>
    );
  }
}

const ChatMultiselectWidgetRoot = styled(WidgetContainer)`
  flex: 1 0 auto;
  max-height: 60vh;
  overflow-y: scroll;

  /* fix for scroll/padding bug in Firefox, see https://bit.ly/2D15MO9 */
  padding-bottom: 0;

  ${mobileMedia`
    padding-bottom: 0;
  `}

  &:after {
    content: '';
    height: 25px;
    display: block;
  }
  /* end of fix */
`;

const SelectContainer = styledOmitProps<{
  layoutType: LayoutType;
}>('div', ['layoutType'])`
  display: flex;
  flex-direction: ${p => (p.layoutType === 'vertical' ? 'column' : 'row')};
  margin: 0 -5px -6px;
  flex-wrap: wrap;
  align-items: ${p => (p.layoutType === 'vertical' ? 'center' : 'flex-start')};
  flex: 1 1 100%;
  justify-content: ${p =>
    p.layoutType === 'vertical' ? 'center' : 'flex-start'};
`;

const SelectItemButton = styledOmitProps<
  {
    layoutType: LayoutType;
  },
  typeof BorderButton
>(BorderButton, ['layoutType'])`
  margin: ${p => (p.layoutType === 'vertical' ? 0 : '0 5px')};
  flex: 1 0 auto;
  width: 100%;
  max-width: ${p =>
    p.layoutType === 'vertical'
      ? '360px'
      : p.layoutType === 'horizontal'
      ? '250px'
      : p.layoutType === 'horizontalGrid2'
      ? 'calc(50% - 10px)'
      : 'calc(33% - 9px)'};
  margin-bottom: 16px;
  border-color: ${p =>
    p.active
      ? p.theme.borderButtonSelectedBorderColor
      : p.theme.widgetButtonBorderColor};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;

  ${mobileMedia`
    flex: 1 0 ${p => (p.layoutType === 'vertical' ? 'auto' : '40%')};
    max-width: ${p =>
      p.layoutType === 'vertical' ? '400px' : 'calc(50% - 10px)'};
  `}
`;
