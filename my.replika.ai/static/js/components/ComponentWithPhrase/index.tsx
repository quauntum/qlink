import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';
import styledOmitProps from '../../utils/styledOmitProps';
import ReplikaPhrase from './ReplikaPhrase';
import { MetricsEvents } from '../../types/enums';
import { logEvent } from '../../utils/metrics';

import ResizeObserver from 'react-resize-observer';

type Props = RouteComponentProps & {
  className?: string;
  style?: React.CSSProperties;
  phraseText: string | null;
  expiration?: string;
  hasCurrentMission?: boolean;
  children: React.ReactNode;
  phrasePosition?: 'left' | 'right';
  xOffset: number;
  bottomOffset: number;
};

const ANIMATION_INTERVAL = 350;

const isExpired = (expiration: string | undefined) =>
  expiration ? new Date(expiration).getTime() < Date.now() : false;

let lastExpiration: string | undefined;

const ComponentWithPhrase = ({
  className,
  style,
  phraseText,
  phrasePosition = 'right',
  expiration,
  hasCurrentMission,
  location,
  children,
  xOffset,
  bottomOffset
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [phraseExpired, setPhraseExpired] = React.useState(
    isExpired(expiration)
  );

  React.useEffect(() => {
    let to;

    if (expiration) {
      const expiredInterval = new Date(expiration).getTime() - Date.now();

      if (expiredInterval > 0) {
        to = setTimeout(() => setPhraseExpired(true), expiredInterval);
      }

      setPhraseExpired(expiredInterval <= 0);
    }

    return () => {
      clearTimeout(to);
    };
  }, [expiration, phraseExpired]);

  React.useEffect(() => {
    if (!phraseExpired && expiration && lastExpiration !== expiration) {
      logEvent(MetricsEvents.PhraseShown, {
        phrase: phraseText
      });
      // prevent redundant events when route is changed
      lastExpiration = expiration;
    }
  }, [phraseExpired, expiration, phraseText]);

  // Absolute bubble position
  // NB: it should be (re)calculated AFTER any animation is done
  const [bubblePosition, setBubblePosition] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Bubble element size
  const [bubbleSize, setBubbleSize] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  // Bubble height set after animation is finished, to calculate bubble position properly
  const [afterResizeHeight, setAfterResizeHeight] = React.useState(0);

  // Wait until container is resized and set bubble height
  React.useEffect(() => {
    const to = setTimeout(() => {
      setAfterResizeHeight(bubbleSize.height);
    }, ANIMATION_INTERVAL);

    return () => clearTimeout(to);
  }, [bubbleSize.height]);

  const updateBubblePosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setBubblePosition({
        x: Math.floor(
          rect.left +
            rect.width / 2 +
            (phrasePosition === 'left' ? -xOffset : xOffset)
        ),
        y: Math.floor(rect.top + rect.height - bottomOffset)
      });
    }
  };

  // Now that container is resized, bubble position can be calculated
  // (in case of external position changes - in this case if spotlight is shown/hidden - re-position bubble immediately)
  React.useEffect(updateBubblePosition, [
    afterResizeHeight,
    hasCurrentMission,
    location.pathname
  ]);

  // Bubble is hidden until container is resized - it won't follow ReplikaCard animated positioning
  // (since it has position=fixed)
  const isChangingSize = afterResizeHeight !== bubbleSize.height;

  const onResize = React.useCallback(
    (width, height) => setBubbleSize({ width, height }),
    []
  );

  return (
    <ComponentWithPhraseRoot
      className={className}
      style={style}
      offset={Math.max(0, bubbleSize.height - bottomOffset)}
    >
      <ReplikaPhrase
        x={bubblePosition.x}
        y={bubblePosition.y}
        text={phraseExpired ? null : phraseText}
        onResize={onResize}
        hidden={isChangingSize}
        phrasePosition={phrasePosition}
      />
      <Wrapper ref={ref}>
        <ResizeObserver
          onPosition={updateBubblePosition}
          onResize={updateBubblePosition}
        />
        {children}
      </Wrapper>
    </ComponentWithPhraseRoot>
  );
};

export default withRouter(ComponentWithPhrase);

const ComponentWithPhraseRoot = styledOmitProps<{ offset: number }>('div', [
  'offset'
])`
  display: flex;
  flex-direction: column;
  padding-bottom: ${p => p.offset}px;
  transition: padding-bottom ${ANIMATION_INTERVAL}ms ease-out;
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;
