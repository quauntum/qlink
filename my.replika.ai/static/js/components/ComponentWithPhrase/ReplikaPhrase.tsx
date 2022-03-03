import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as TailIcon } from '../../icons/Tail.svg';
import { ZIndices } from '../../types/enums';
import styledOmitProps from '../../utils/styledOmitProps';

type Props = {
  className?: string;
  x: number;
  y: number;
  // phrase will be hidden if text is null or 'hidden' is set,
  // the difference is that text=null will be hidden with opacity animation,
  text: string | null;
  // and hidden=true will hide phrase immediately
  hidden: boolean;
  onResize?: (width: number, height: number) => void;
  phrasePosition: 'left' | 'right';
};

const ReplikaPhrase = ({
  className,
  x,
  y,
  text,
  onResize,
  hidden,
  phrasePosition
}: Props) => {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const [memoText, setMemoText] = React.useState(text);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    let to;
    if (text !== null) {
      setMemoText(text);
    } else {
      // delayed text reset for opacity animation
      // (set animated opacity to 0 -> wait for animation to end -> set text to null)
      to = setTimeout(() => setMemoText(null), 200);
    }

    return () => clearTimeout(to);
  }, [text]);

  // useLayoutEffect is here for immediate reaction on size change -
  // we want to call onResize as soon as DOM is updated, otherwise there'll be
  // some async update related glitches
  React.useLayoutEffect(() => {
    if (ref.current && memoText) {
      const maxWidth =
        phrasePosition === 'left' ? x - 16 : window.innerWidth - x - 16;
      const width = Math.min(ref.current.offsetWidth, maxWidth);

      if (onResize) {
        onResize(width, ref.current.offsetHeight);
      }
      setWidth(width);
    }
  }, [memoText, onResize, x, phrasePosition]);

  const xStyle =
    phrasePosition === 'left'
      ? {
          left: x - width,
          maxWidth: width === 0 ? 'auto' : width
        }
      : {
          left: x,
          maxWidth: width === 0 ? 'auto' : width
        };

  return (
    <ReplikaPhraseRoot
      className={className}
      ref={ref}
      style={{
        ...xStyle,
        top: y,
        // if 'hidden' is set, hide phrase immediately
        transition: hidden ? 'none' : 'opacity 0.2s ease-out',
        opacity: !text || hidden ? 0 : 1
      }}
    >
      <StyledTail phrasePosition={phrasePosition} aria-hidden="true" />
      <ReplikaPhraseText
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        data-testid="replika-phrase"
      >
        {memoText}
      </ReplikaPhraseText>
    </ReplikaPhraseRoot>
  );
};

export default ReplikaPhrase;

// shadow generator: https://brumm.af/shadows

const ReplikaPhraseRoot = styled.p`
  position: fixed;
  max-width: 170px;
  color: ${p => p.theme.fgColor};
  background: ${p => p.theme.chatBgColor};
  padding: 12px 15px;
  border-radius: 18px;
  z-index: ${ZIndices.ReplikaPhrase};
  box-shadow: ${p => p.theme.phraseBoxShadow};
  font-size: 16px;
  line-height: 21px;
  transition: opacity 0.2s ease-out;
`;

const ReplikaPhraseText = styled.span`
  position: relative;
  z-index: 1;
  white-space: pre-wrap;
`;

const StyledTail = styledOmitProps<
  { phrasePosition: 'left' | 'right' },
  typeof TailIcon
>(TailIcon, ['phrasePosition'])`
  color: ${p => p.theme.chatBgColor};
  position: absolute;
  top: 0;
  ${p =>
    p.phrasePosition === 'left'
      ? `right: -4px;
    transform: scale(1, -1);`
      : `left: -4px;
    transform: scale(-1, -1);`}
  z-index: 0;
`;
