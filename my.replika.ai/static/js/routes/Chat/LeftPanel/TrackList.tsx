import * as React from 'react';
import styled from 'styled-components/macro';
import { Track } from '../../../types/models';
import { MetricsEvents } from '../../../types/enums';
import { logEvent } from '../../../utils/metrics';
import useFocusGroup from '../../../utils/useFocusGroup';

type Props = {
  className?: string;
  tracks: Track[];
  onSelect?: (track: Track) => void;
  'data-testid'?: string;
};

const TrackList = ({
  tracks,
  className,
  onSelect,
  'data-testid': dataTestId,
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const getListElements = () => {
    return ref.current ? ref.current.childNodes : [];
  };

  useFocusGroup(
    {
      getGroupElements: getListElements,
      options: {
        keybindings: {
          next: { key: 'ArrowRight' },
          prev: { key: 'ArrowLeft' },
        },
      },
    },
    [tracks.length]
  );

  return (
    <TrackListRoot
      role="list"
      ref={ref}
      className={className}
      data-testid={dataTestId}
    >
      {tracks.map((track, idx) => {
        return (
          <TrackItem
            role="listitem"
            data-testid={dataTestId && `${dataTestId}-item-${idx}`}
            key={track.id}
            style={{
              backgroundImage:
                'url(' +
                (track.small_background_url || track.background_url) +
                ')',
            }}
            tabIndex={idx === 0 ? 0 : -1}
            onClick={() => {
              if (onSelect) {
                logEvent(MetricsEvents.TrackOpened, {
                  'track id': track.id,
                  'track name': track.name,
                });
                onSelect(track);
              }
            }}
          >
            <TrackName>{track.name}</TrackName>
            <ConversationCount>
              {track.total_missions_count} conversations
            </ConversationCount>
          </TrackItem>
        );
      })}
    </TrackListRoot>
  );
};

export default TrackList;

const TrackListRoot = styled.div`
  width: 100%;
  padding: 0 16px 24px;
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  grid-auto-rows: 214px;
  grid-gap: 16px;
`;

const TrackItem = styled.div`
  position: relative;
  list-style-type: none;
  padding: 0;
  background-size: cover;
  background-position: center;
  height: 214px;
  border-radius: 8px;
  color: ${(p) => p.theme.trackFgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 8px;

  &:before {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    height: 160px;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  & > * {
    z-index: 1;
  }

  &:focus {
    outline: none;
  }

  &.focus-visible:focus {
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }
`;

const TrackName = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
`;

const ConversationCount = styled.p`
  font-size: 13px;
  line-height: 16px;
  margin: 10px 0 14px;
`;
