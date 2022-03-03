import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { RootState } from '../../types/states';
import { ReactComponent as ThumbUp } from '../../icons/ReactionThumbUp.svg';
import { ReactComponent as ThumbDown } from '../../icons/ReactionThumbDown.svg';
import { ReactComponent as More } from '../../icons/ReactionMore.svg';
import { MessageActionType, MessageReaction, Bot } from '../../types/models';
import { Dialogs } from '../../types/enums';
import { setMessageReaction } from '../../actions/chat';
import { setActiveDialog } from '../../actions/ui';
import Popover, { PopoverButton } from '../Popover';
import { ReactDispatch as RD } from '../../types/redux';
import IconButton from '../../components/IconButton';
import { DialogDesktop, DialogMobile } from '../../components/responsive';
import ReactionDialogBody, {
  REACTIONS,
  ReactionEmoji,
} from '../../components/Dialogs/ReactionDialog/ReactionDialogBody';

type OuterProps = {
  className?: string;
  active: boolean;
  permittedActions: MessageActionType[];
  messageId: string;
  onFocus: () => void;
  onBlur: () => void;
};

type Props = OuterProps & {
  bot: Bot | undefined;
  reaction: MessageActionType | undefined;
  hintMessageReaction: MessageReaction | undefined;
  setMessageReaction: RD<typeof setMessageReaction>;
  setActiveDialog: RD<typeof setActiveDialog>;
};

type State = {
  isHintOpen: boolean;
  isReactionMenuOpen: boolean;
};

const ThumbsRoot = styled.div`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-out;
`;

const ThumbButton = styled(IconButton)`
  position: relative;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  margin-left: 8px;

  &:before {
    position: absolute;
    width: 28px;
    height: 28px;
    content: '';
    display: block;
    background-color: ${(p) => p.theme.bubbleThumbBgColor};
    border-radius: 30px;
    z-index: -1;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(p) =>
    p.active ? p.theme.bubbleThumbSelectedFgColor : p.theme.bubbleThumbFgColor};
  transition: color 0.2s ease-out;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.fgColor};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const HintTitle = styled.h3`
  line-height: 23px;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(p) => p.theme.fgColor};
`;

const HintDescription = styled.p`
  line-height: 23px;
  font-size: 16px;
  margin: 15px 0 5px;
  color: ${(p) => p.theme.lightFgColor};
`;

const ReactionMenuTitle = styled.h3`
  margin: 0;
  color: ${(p) => p.theme.dimmedFgColor};
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  margin-right: 40px;
`;

const StyledReactionDialogBody = styled(ReactionDialogBody)`
  margin: 16px 0;
`;

const Emoji = styled(ReactionEmoji)`
  width: 20px;
  height: 20px;
`;

const StyledPopover = styled(Popover)`
  & .Popover-body {
    transform: translateX(40%);
  }
`;

const getHintTitleText = () => 'Keep the feedback coming!';

const getHintDescriptionText = (name: string) =>
  `Feedback helps ${name} improve, so let her know when messages look good or don’t make sense.`;

const renderThumb = (
  messageAction: MessageActionType,
  active: boolean,
  onClick: (messageAction: MessageActionType | undefined) => void,
  onFocus: () => void,
  onBlur: () => void
) => {
  switch (messageAction) {
    case 'Upvote':
      return (
        <ThumbButton
          data-testid="chat-message-upvote-button"
          label="thumb up"
          tabIndex={-1}
          key="upvote"
          onClick={() => {
            onClick(active ? undefined : messageAction);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
          aria-pressed={active}
        >
          <ThumbUp aria-hidden="true" />
        </ThumbButton>
      );
    case 'Downvote':
      return (
        <ThumbButton
          data-testid="chat-message-downvote-button"
          label="thumb down"
          tabIndex={-1}
          key="downvote"
          onClick={() => {
            onClick(active ? undefined : messageAction);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
          aria-pressed={active}
        >
          <ThumbDown aria-hidden="true" />
        </ThumbButton>
      );
    default:
      const reaction = REACTIONS.find((r) => r.name === messageAction);

      if (!reaction || !active) return false;

      return (
        <ThumbButton
          data-testid={`chat-message-${reaction.name.toLowerCase()}-button`}
          label={reaction.name}
          tabIndex={-1}
          key={reaction.name}
          onClick={() => {
            onClick(active ? undefined : messageAction);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
          aria-pressed={active}
        >
          <Emoji aria-hidden="true" reaction={reaction} />
        </ThumbButton>
      );
  }
};

function isThumbAction(action?: MessageActionType) {
  return action === 'Upvote' || action === 'Downvote';
}

class Thumbs extends React.PureComponent<Props, State> {
  state = { isHintOpen: false, isReactionMenuOpen: false };

  componentWillUnmount() {
    this.props.onBlur();
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.reaction !== prevProps.reaction ||
      this.props.active !== prevProps.active
    ) {
      this.props.onBlur();
    }

    if (this.props.hintMessageReaction !== prevProps.hintMessageReaction) {
      const isHintOpen =
        this.props.hintMessageReaction?.message_id === this.props.messageId;

      this.setState({ isHintOpen });
    }
  }

  render() {
    const {
      className,
      permittedActions,
      reaction,
      active,
      setActiveDialog,
      messageId,
      bot,
    } = this.props;

    const visibleActions = reaction
      ? permittedActions.filter((a) => reaction === a)
      : permittedActions;

    const thumbs = visibleActions.map(this.renderThumb).filter(Boolean);

    if (thumbs.length === 0) {
      return null;
    }

    const otherActionsAllowed =
      permittedActions.filter((a) => !isThumbAction(a)).length > 0;

    const botName = bot?.name ?? 'your Replika';
    const title = `What do you think about ${botName} phrase?`;

    const showMoreActions = !reaction && otherActionsAllowed;

    return (
      <ThumbsRoot
        style={{
          opacity: active ? 1 : 0,
          pointerEvents: active ? 'auto' : 'none',
        }}
        className={className}
      >
        {thumbs}
        {showMoreActions && (
          <DialogDesktop>
            <StyledPopover
              offset={10}
              size="small"
              preferPlace="above"
              place="column"
              isOpen={this.state.isReactionMenuOpen}
              onClose={this.handleClose}
              focusTrap
              showCloseButton
              closeOnOuterAction
              onRenderContent={() => (
                <>
                  <ReactionMenuTitle>{title}</ReactionMenuTitle>
                  <StyledReactionDialogBody
                    permittedActions={permittedActions}
                    messageId={messageId}
                    onClose={this.handleClose}
                  />
                </>
              )}
            >
              <ThumbButton
                data-testid="chat-message-more-actions-button"
                tabIndex={-1}
                onClick={() => this.setState({ isReactionMenuOpen: true })}
              >
                <More />
              </ThumbButton>
            </StyledPopover>
          </DialogDesktop>
        )}
        {showMoreActions && (
          <DialogMobile>
            <ThumbButton
              data-testid="chat-message-more-actions-button"
              tabIndex={-1}
              onClick={() =>
                setActiveDialog({
                  type: Dialogs.Reaction,
                  messageId,
                  permittedActions,
                })
              }
            >
              <More />
            </ThumbButton>
          </DialogMobile>
        )}
      </ThumbsRoot>
    );
  }

  handleClose = () => this.setState({ isReactionMenuOpen: false });

  renderThumb = (a: MessageActionType) => {
    const {
      reaction,
      messageId,
      hintMessageReaction,
      active,
      onFocus,
      onBlur,
    } = this.props;

    const showHint =
      active &&
      hintMessageReaction?.message_id === messageId &&
      hintMessageReaction.reaction === a;

    const thumb = renderThumb(
      a,
      reaction === a,
      this.handleThumbClick,
      onFocus,
      onBlur
    );

    return showHint && thumb ? (
      <Popover
        preferPlace="above"
        offset={10}
        isOpen={this.state.isHintOpen}
        onClose={() => this.setState({ isHintOpen: false })}
        onRenderContent={this.renderHint}
      >
        {thumb}
      </Popover>
    ) : (
      thumb
    );
  };

  renderHint = () => {
    const { bot } = this.props;

    return (
      <>
        <HintTitle>{getHintTitleText()}</HintTitle>
        <HintDescription>
          {getHintDescriptionText(bot?.name || 'your Replika')}
        </HintDescription>
        <PopoverButton onClick={() => this.setState({ isHintOpen: false })}>
          OK
        </PopoverButton>
      </>
    );
  };

  handleThumbClick = (reaction: MessageActionType | undefined) => {
    const { messageId } = this.props;

    this.props.setMessageReaction(messageId, reaction);
  };
}

export default connect(
  (state: RootState, props: OuterProps) => ({
    bot: state.profile.persist.bot,
    hintMessageReaction: state.chat.hintMessageReaction,
    reaction: state.chat.messageReactions[props.messageId],
  }),
  { setMessageReaction, setActiveDialog }
)(Thumbs);
