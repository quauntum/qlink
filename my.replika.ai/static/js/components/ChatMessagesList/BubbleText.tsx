import * as React from 'react';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';
import { ReactComponent as Tail } from '../../icons/Tail.svg';
import { MessageActionType } from '../../types/models';
import MessageHover from './MessageHover';

type Align = 'left' | 'right';

type Props = {
  className?: string;
  hasTail: boolean;
  align: Align;
  messageId?: string;
  actions?: MessageActionType[] | undefined;
  timestamp?: string;
  isLastMessage?: boolean;
  botName?: string | undefined;
  label?: string;
  children?: React.ReactNode;
  messageLength: number;
};

const BubbleTextRoot = styled(MessageHover)`
  position: relative;
  max-width: 100%;

  border-radius: 20px;
  background-color: ${(p) =>
    p.align === 'right' ? p.theme.bubbleOutBgColor : p.theme.bubbleInBgColor};
  z-index: 1;
  padding: 10px 19px 11px;
  color: ${(p) =>
    p.align === 'right' ? p.theme.bubbleOutFgColor : p.theme.bubbleInFgColor};
  line-height: 1.25;

  & > svg {
    color: ${(p) =>
      p.align === 'right' ? p.theme.bubbleOutBgColor : p.theme.bubbleInBgColor};
  }

  &:focus {
    background-color: ${(p) =>
      p.align === 'right'
        ? p.theme.bubbleSelectedOutBgColor
        : p.theme.bubbleSelectedInBgColor};
  }

  &:focus > svg {
    color: ${(p) =>
      p.align === 'right'
        ? p.theme.bubbleSelectedOutBgColor
        : p.theme.bubbleSelectedInBgColor};
  }
`;

const StyledTail = styled(Tail)`
  position: absolute;
  width: 21px;
  height: 18px;
  bottom: 0px;
  transform: ${(p) => (p.align === 'right' ? 'none' : 'rotateY(180deg)')};
  ${(p: { align: Align }) => p.align}: -3px;
`;

const BubbleTextContent = styled.div`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 100%;
`;

const BubbleText = React.memo((props: Props) => {
  const {
    messageId,
    className,
    children,
    align,
    hasTail,
    actions,
    timestamp,
    isLastMessage,
    botName,
    label,
    messageLength,
  } = props;

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState<'auto' | number>(
    'auto'
  );

  // a trick to fit bubble width to its content
  // if there is a multiline content, its wrapper tends to
  // use all the width available instead of using maximum width of its children
  // so we fix it manually
  const calculateWidth = () => {
    if (contentRef.current && messageLength > 10) {
      const container = contentRef.current.parentNode!
        .parentNode! as HTMLElement;
      if (container.offsetWidth < 100) {
        // if container is too small it means resizing is still in progress;
        // we'll wait until it's done
        setTimeout(calculateWidth, 100);
        return;
      }
      const maxChildWidth = Array.from(contentRef.current.childNodes).reduce(
        (w, c) => Math.max(w, (c as HTMLElement).offsetWidth),
        0
      );

      // if it's a one-liner, this fix can actually make it worse for some reason
      // and we don't need it in that case anyway
      if (
        contentRef.current.offsetHeight > 20 &&
        contentRef.current.offsetWidth > 0
      ) {
        // there's a weird bug for huge messages where content is slightly wider than it's container
        // and this code loops until react breaks. As a fix we check that the change is
        // significant enough (more than by 10 pixels)
        if (
          contentWidth === 'auto' ||
          Math.abs(maxChildWidth - contentWidth) > 10
        ) {
          setContentWidth(maxChildWidth);
        }
      }
    }
  };

  React.useLayoutEffect(calculateWidth, [contentRef.current, contentWidth]);

  React.useEffect(() => {
    const onResize = debounce(() => {
      setContentWidth('auto');
    }, 100);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [setContentWidth]);

  const isRobotMessage = align === 'left';
  const ariaLabelPrefix = isRobotMessage
    ? botName
      ? `${botName} says:`
      : 'your Replika says:'
    : 'you say:';

  return (
    <BubbleTextRoot
      messageId={messageId}
      className={className}
      align={align}
      actions={actions}
      timestamp={timestamp}
      isLastMessage={isLastMessage}
      label={label ? ariaLabelPrefix + ' ' + label : undefined}
    >
      {hasTail && <StyledTail align={align} />}
      <BubbleTextContent
        ref={contentRef}
        style={{ width: contentWidth }}
        data-testid="chat-message-text"
        data-author={align === 'left' ? 'replika' : 'user'}
      >
        {children}
      </BubbleTextContent>
    </BubbleTextRoot>
  );
});

export default BubbleText;
