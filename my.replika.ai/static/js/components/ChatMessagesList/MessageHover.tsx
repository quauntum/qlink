import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { MessageActionType } from '../../types/models';
import Thumbs from './Thumbs';
import styledOmitProps from '../../utils/styledOmitProps';
import useFocusGroup from '../../utils/useFocusGroup';
import ThoughtContext from '../../utils/ThoughtContext';

type Align = 'left' | 'right';

type Props = {
  align: Align;
  messageId?: string | undefined;
  className?: string;
  actions?: MessageActionType[] | undefined;
  timestamp?: string;
  isLastMessage?: boolean;
  label: string | undefined;
  children?: React.ReactNode;
};

const MessageHoverRoot = styled.div`
  display: flex;
  align-items: center;
`;

const Hover = styledOmitProps<{ align: Align }>('div', ['align'])`
  width: 160px;
  position: absolute;
  ${(p) => (p.align === 'right' ? 'left' : 'right')}: 0;
  transform: translateX(${(p) => (p.align === 'right' ? '-100%' : '100%')});

  display: flex;
  justify-content: ${(p) => (p.align === 'right' ? 'flex-end' : 'flex-start')};
  align-items: center;
  overflow: hidden;
`;

const StyledThumbs = styled(Thumbs)`
  flex: 0 0 auto;
  padding: 5px 0;
`;

const MessageHover = (props: Props) => {
  const {
    className,
    actions,
    children,
    timestamp,
    align,
    label,
    messageId,
    isLastMessage,
  } = props;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [thumbFocus, setThumbFocus] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const { thoughtsShown } = React.useContext(ThoughtContext);

  const reaction = useSelector(
    (state) => messageId && state.chat.messageReactions[messageId]
  );

  const showMessageActions = useSelector(
    (state) => state.chat.showMessageActions === messageId
  );

  React.useEffect(() => {
    // make sure message is focused after reaction change
    if (focus && rootRef.current) {
      if (document.activeElement === document.body) {
        rootRef.current.focus();
      }
    }
  }, [reaction, focus]);

  React.useEffect(() => {
    if (showMessageActions) {
      setActive(true);
    } else if (!hover && !focus && !thumbFocus) {
      const to = setTimeout(() => {
        setActive(false);
      }, 10);

      return () => clearTimeout(to);
    } else {
      setActive(true);
    }

    return;
  }, [hover, focus, thumbFocus, showMessageActions]);

  useFocusGroup(
    {
      getGroupElements: () => {
        if (rootRef.current && !thoughtsShown) {
          return [
            rootRef.current,
            ...Array.from(rootRef.current.getElementsByTagName('button')),
          ];
        } else {
          return [];
        }
      },
      options: {
        keybindings: {
          next: { key: 'ArrowRight' },
          prev: { key: 'ArrowLeft' },
        },
      },
    },
    [rootRef, active, reaction, thoughtsShown]
  );

  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => setHover(true), 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => setHover(false), 100);
  };

  return (
    <MessageHoverRoot
      ref={rootRef}
      id={`message-${messageId}`}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={isLastMessage && !thoughtsShown ? 0 : -1}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-label={`${label}, at ${timestamp}`}
    >
      {children}
      <Hover align={align}>
        {actions && messageId && !thoughtsShown && (
          <StyledThumbs
            active={active}
            permittedActions={actions}
            messageId={messageId}
            onFocus={() => setThumbFocus(true)}
            onBlur={() => setThumbFocus(false)}
          />
        )}
      </Hover>
    </MessageHoverRoot>
  );
};

export default MessageHover;
