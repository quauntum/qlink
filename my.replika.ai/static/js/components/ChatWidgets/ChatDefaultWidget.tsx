import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import TextArea from '../TextArea';
import Tooltip from '../Tooltip';
import { Picker, EmojiData, CustomEmoji } from 'emoji-mart';
import { RootState } from '../../types/states';
import { ReactComponent as SendIcon } from '../../icons/SendIcon.svg';
import { ReactComponent as EmojiKeyboardIcon } from '../../icons/EmojiKeyboardIcon.svg';
import UploadImageButton from '../UploadImageButton';
import { ReactComponent as GetHelp } from '../../icons/GetHelp.svg';
import { ReactDispatch as RD } from '../../types/redux';
import {
  uploadChatImage,
  textInputDetected,
  updateChatMessageText,
} from '../../actions/chat';
import { Bot } from '../../types/models';
import IconButton from '../IconButton';
import { Desktop } from '../responsive';
import mobileMedia from '../../utils/mobileMedia';
import { captureError } from '../../utils/initSentry';
import { setActiveDialog } from '../../actions/ui';
import { Dialogs, MetricsEvents, UnlockedFeature } from '../../types/enums';

import 'rc-tooltip/assets/bootstrap_white.css';
import 'emoji-mart/css/emoji-mart.css';
import { logEvent } from '../../utils/metrics';

type Props = {
  onSendMessage: (text: string) => void;
  sendMessageDisabled: boolean;
  disabled: boolean;
  chatId: string | undefined;
  bot: Bot | undefined;
  messageText: string;
  uploadChatImage: RD<typeof uploadChatImage>;
  textInputDetected: RD<typeof textInputDetected>;
  updateChatMessageText: RD<typeof updateChatMessageText>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

type State = {
  text: string;
  emojiOpened: boolean;
};

const MAXIMUM_MESSAGE_LENGTH = 2000;

const isCustomEmoji = (emoji: EmojiData): emoji is CustomEmoji => {
  return !emoji.hasOwnProperty('native');
};

const ChatDefaultWidgetRoot = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  position: relative;
  border-top: 1px solid ${(p) => p.theme.chatInputBorderColor};
  align-items: center;
  background-color: ${(p) => p.theme.chatInputBgColor};
`;

const StyledTextareaWrapper = styled.div`
  position: relative;
  width: 100%;

  & div {
    position: absolute;
    background-color: ${(p) => p.theme.chatInputBgColor};
    width: 10px;
    height: 100%;
    bottom: 0;
    right: 0;
  }
`;

const StyledIconButton = styled(IconButton)`
  width: 35px;
  height: 35px;
  flex-shrink: 1;
  opacity: 0.5;
  margin-left: 20px;
  flex-shrink: 0;
  color: ${(p) => p.theme.fgColor};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  ${mobileMedia`
    margin-left: 16px;
  `}
`;

const StyledTextarea = styled(TextArea)`
  flex: 1 0 auto;
  padding: 18px 10px 18px 6px;
  height: 100%;
  max-height: 150px;
  border: none;
  background-color: ${(p) => p.theme.chatInputBgColor};
  color: ${(p) => p.theme.fgColor};

  ${mobileMedia`
    padding: 16px 10px 16px 16px;
  `}
`;

const TextfieldButton = styled(IconButton)`
  flex: 0 0 auto;
  color: ${(p) =>
    p.active ? p.theme.fgColor : p.theme.chatInputPlaceholderColor};
  transition: color 0.2s ease-out, transform 0.2s ease-out;
`;

const StyledEmojiButton = styled(TextfieldButton).attrs({
  'aria-haspopup': true,
})`
  width: 25px;
  height: 25px;
`;

const StyledSendButton = styled(TextfieldButton)`
  width: 24px;
  height: 24px;
  color: ${(p) => p.theme.fgColor};

  transform: scale(1.25);

  &:hover {
    transform: scale(1.35);
  }

  &:active {
    transform: scale(1.2);
  }
`;

const StyledUploadImageButton = styled(UploadImageButton)`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;

  color: ${(p) => p.theme.chatInputPlaceholderColor};
`;

const Buttons = styled.div`
  display: flex;
  margin-right: 27px;

  & > * + * {
    margin-left: 20px;
  }

  ${mobileMedia`
    margin-right: 16px;
  `}
`;

const PickerWrapper = styled.div`
  /* overwrite emoji from logo */
  & .emoji-mart-preview-emoji > span.emoji-mart-emoji > span {
    background-position: 92.1569% 50.9804%;
  }
`;

class ChatDefaultWidget extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      emojiOpened: false,
      text: props.messageText,
    };
  }

  render() {
    const { sendMessageDisabled, disabled, bot } = this.props;
    const { text } = this.state;

    const features = bot?.unlocked_features ?? [];
    const sendImageDisabled =
      sendMessageDisabled || features.indexOf(UnlockedFeature.SendPhoto) === -1;

    return (
      <ChatDefaultWidgetRoot data-testid="chat-controls">
        <StyledIconButton
          data-testid="chat-controls-get-help-button"
          label="Get help"
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={() => {
            logEvent(MetricsEvents.NeedHelpButtonClicked);
            this.props.setActiveDialog({ type: Dialogs.GetHelp });
          }}
        >
          <GetHelp />
        </StyledIconButton>
        <StyledTextareaWrapper>
          <StyledTextarea
            tabIndex={disabled ? -1 : 0}
            id="send-message-textarea"
            data-testid="chat-controls-message-textarea"
            aria-label={`Message for ${
              bot ? `your Replika ${bot.name}` : 'your Replika'
            }`}
            value={text}
            autoFocus
            placeholder="Start typing"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          {/* hides textarea resize */}
          <div />
        </StyledTextareaWrapper>

        <Buttons>
          <Desktop>
            <Tooltip
              placement="top"
              trigger={['click']}
              overlay={
                <PickerWrapper>
                  <Picker
                    autoFocus
                    title="Pick your Emoji..."
                    onClick={this.handleAppendEmoji}
                  />
                </PickerWrapper>
              }
              align={{
                offset: [0, -10],
              }}
              onVisibleChange={(visible) => {
                this.setState({ emojiOpened: !!visible });
              }}
            >
              <StyledEmojiButton
                tabIndex={disabled ? -1 : 0}
                active={this.state.emojiOpened}
                data-testid="chat-controls-emoji-keyboard-button"
                aria-label="Open emoji keyboard popup"
              >
                <EmojiKeyboardIcon />
              </StyledEmojiButton>
            </Tooltip>
          </Desktop>

          {text.length > 0
            ? !sendMessageDisabled && (
                <StyledSendButton
                  tabIndex={disabled ? -1 : 0}
                  data-testid="chat-controls-send-button"
                  onClick={() => {
                    this.props.onSendMessage(text);
                    this.setMessageText('');
                  }}
                >
                  <SendIcon />
                </StyledSendButton>
              )
            : !sendImageDisabled && (
                <StyledUploadImageButton
                  id="upload-image-to-chat"
                  data-testid="chat-controls-upload-image-button"
                  onUpload={this.handleUpload}
                  disabled={sendMessageDisabled}
                />
              )}
        </Buttons>
      </ChatDefaultWidgetRoot>
    );
  }

  throttledUpdateChatMessageText = throttle(
    this.props.updateChatMessageText,
    500
  );

  setMessageText = (text: string) => {
    this.setState({ text });

    this.throttledUpdateChatMessageText(text);
  };

  uploadImage = async (file: File) => {
    try {
      if (this.props.chatId) {
        await this.props.uploadChatImage(file);
      }
    } catch (err) {
      console.error(err);

      captureError(err);
    }
  };

  handleUpload = (files: File[]) => this.uploadImage(files[0]);

  handleAppendEmoji = (emoji: EmojiData) => {
    if (!isCustomEmoji(emoji)) {
      this.setMessageText(this.state.text + emoji.native);
    }
  };

  handleTextInputDetected = async () => {
    if (this.props.chatId && !this.props.sendMessageDisabled) {
      try {
        await this.props.textInputDetected();
      } catch (e) {
        //
      }
    }
  };

  throttledTextInputDetected = throttle(this.handleTextInputDetected, 1000);

  handleChange = (e) => {
    this.throttledTextInputDetected();
    this.setMessageText(e.target.value.substr(0, MAXIMUM_MESSAGE_LENGTH));
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && this.props.chatId) {
      if (!e.metaKey && !e.shiftKey) {
        e.preventDefault();
        if (!this.props.sendMessageDisabled) {
          this.props.onSendMessage(this.state.text);
          this.setMessageText('');
        }
      }
    }
  };
}

const mapDispatchToProps = {
  uploadChatImage,
  textInputDetected,
  updateChatMessageText,
  setActiveDialog,
};

export default connect(
  (state: RootState) => ({
    chatId: state.ws.persist.chatId,
    bot: state.profile.persist.bot,
    messageText: state.chat.persist.messageText,
  }),
  mapDispatchToProps
)(ChatDefaultWidget);
