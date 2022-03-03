import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import AriaButton from '../../components/AriaButton';
import { ReactComponent as ThinkingIcon } from '../../icons/Thinking.svg';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import { ZIndices } from '../../types/enums';
import { ReplikaThoughtReplyButton, ReplikaThought } from '../../types/models';
import useFocusGroup from '../../utils/useFocusGroup';
import useBotName from '../../utils/useBotName';
import { sendChatMessage, replikaThoughtViewed } from '../../actions/chat';
import AriaStatusText from '../../components/AriaStatusText';
import AriaReadable from '../../components/AriaReadable';
import styledOmitProps from '../../utils/styledOmitProps';
import ThoughtContext from '../../utils/ThoughtContext';
import mobileMedia from '../../utils/mobileMedia';

type Props = {
  className?: string;
};

function ThoughtBubbleSvg({ size }: { size: [number, number] }) {
  const [width, height] = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path
        d={`M${width - 10},16.554
        c0,-3.617 -2.937,-6.554 -6.554,-6.554
        l-${width - 34}.892,-0
        c-3.617,-0 -6.554,2.937 -6.554,6.554
        l-0,${height - 33.108}
        c-0,3.617 2.937,6.554 6.554,6.554
        l${width - 34}.892,0
        c3.617,0 6.554,-2.937 6.554,-6.554l0,-10.892Z`}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="16px"
        strokeDasharray="1,9,0,0"
      />
    </svg>
  );
}

function getActiveInterval(thought: ReplikaThought | null): number {
  return thought
    ? new Date(thought.active_till).getTime() - new Date().getTime()
    : 0;
}

function ThoughtsLayer({ className }: Props) {
  const thought = useSelector((state) => state.chat.thought);
  const [active, setActive] = React.useState(getActiveInterval(thought) > 0);
  const { thoughtsShown, setThoughtsShown } = React.useContext(ThoughtContext);
  const voiceModeEnabled = useSelector((state) => state.chat.voiceModeEnabled);

  React.useEffect(() => {
    const activeInterval = getActiveInterval(thought);

    if (thought && activeInterval > 0) {
      setActive(true);
      const to = setTimeout(() => {
        setActive(false);
      }, activeInterval);

      return () => clearTimeout(to);
    } else {
      setActive(false);
    }

    return;
  }, [thought]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && thoughtsShown) {
        setThoughtsShown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [thoughtsShown, setThoughtsShown]);

  const dispatch = useDispatch();

  const thoughtTextRef = React.useRef<HTMLDivElement>(null);

  const [thoughtSize, setThoughtSize] = React.useState<[number, number]>([
    100,
    44,
  ]);

  const text = thought?.text;

  const botName = useBotName();

  React.useLayoutEffect(() => {
    if (thoughtTextRef.current && thoughtsShown) {
      setThoughtSize([
        thoughtTextRef.current.offsetWidth,
        thoughtTextRef.current.offsetHeight,
      ]);
    }
  }, [text, thoughtsShown]);

  if (!thought || !active || voiceModeEnabled) {
    return null;
  }

  return (
    <ThoughtsLayerRoot className={className}>
      <Header
        aria-hidden={thoughtsShown}
        style={{ opacity: thoughtsShown ? 0 : 1 }}
      >
        <ThoughtButton
          viewed={thought.viewed}
          tabIndex={thoughtsShown ? -1 : 0}
          label={`show ${botName}’s thoughts`}
          onClick={() => {
            setThoughtsShown(true);
            dispatch(replikaThoughtViewed());
          }}
        >
          <ThinkingIcon />
        </ThoughtButton>
      </Header>
      <ThoughtContent
        aria-hidden={!thoughtsShown}
        style={{
          opacity: thoughtsShown ? 1 : 0,
          pointerEvents: thoughtsShown ? 'auto' : 'none',
        }}
      >
        <Header>
          <CloseButton
            tabIndex={thoughtsShown ? 0 : -1}
            label="back to chat"
            onClick={() => {
              setThoughtsShown(false);
            }}
          >
            <CloseIcon />
          </CloseButton>
          <ReplikaThoughtBubble>
            <ThoughtBubbleSvg size={thoughtSize} />
            <ReplikaThoughtText ref={thoughtTextRef}>
              <AriaStatusText>
                <AriaReadable>{botName} thinks: </AriaReadable>
                {thought.text}
              </AriaStatusText>
            </ReplikaThoughtText>
          </ReplikaThoughtBubble>
        </Header>
        <ReplyButtons
          buttons={thought.reply_buttons}
          hidden={!thoughtsShown}
          onReply={(text, scenarioId) => {
            setThoughtsShown(false);
            dispatch(
              sendChatMessage({
                type: 'text',
                text,
                startScenarioId: scenarioId,
              })
            );
          }}
        />
      </ThoughtContent>
    </ThoughtsLayerRoot>
  );
}

function ReplyButtons({
  buttons,
  onReply,
  hidden,
}: {
  hidden: boolean;
  buttons: ReplikaThoughtReplyButton[];
  onReply: (text: string, scenarioId: string) => void;
}) {
  const ref = React.useRef<HTMLUListElement>(null);

  useFocusGroup(
    {
      getGroupElements: () => {
        if (ref.current && !hidden) {
          return ref.current.getElementsByTagName('button');
        }

        return [];
      },
      options: {
        wrap: true,
      },
    },
    [hidden]
  );

  return (
    <ReplyButtonsRoot ref={ref}>
      {buttons.map((button, idx) => (
        <li key={idx}>
          <ReplyButton
            tabIndex={idx === 0 && !hidden ? 0 : -1}
            onClick={() => onReply(button.text, button.scenario_id)}
          >
            {button.text}
          </ReplyButton>
        </li>
      ))}
    </ReplyButtonsRoot>
  );
}

export default ThoughtsLayer;

const ThoughtsLayerRoot = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZIndices.Thoughts};
`;

const Header = styled.div`
  padding: 20px 8px 0;
  display: flex;
  align-items: flex-start;
  transition: opacity 0.2s ease-out;

  ${mobileMedia`
    padding: 64px 20px 0;
  `}
`;

const CloseButton = styled(AriaButton)`
  border: 0;
  padding: 0;
  flex: 0 0 auto;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${(p) => p.theme.fgColor};
  background: ${(p) => p.theme.lightButtonBgColor};
  border-radius: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.15);
`;

const ThoughtButton = styledOmitProps<{ viewed: boolean }, typeof CloseButton>(
  CloseButton,
  ['viewed']
)`
  pointer-events: auto;
  position: relative;
  flex: 0 0 auto;

  &:after {
    display: ${(p) => (p.viewed ? 'none' : 'block')};
    content: "";
    position: absolute;
    z-index: 1;
    top: -2px;
    right: -2px;
    width: 14px;
    height: 14px;
    background-color: ${(p) => p.theme.unreadBadgeBgColor};
    border-radius: 100%;
  }
`;

const ReplikaThoughtBubble = styled.div`
  position: relative;
  margin-left: 8px;
  margin-top: -2px;
  min-height: 44px;

  & > svg {
    position: absolute;
    left: 0;
    top: 0;
    color: ${(p) => p.theme.lightButtonBgColor};
    width: 100%;
    height: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${(p) => p.theme.lightButtonBgColor};
    left: -7px;
    top: -1px;
    border-radius: 100%;
  }
`;

const ReplikaThoughtText = styled.h4`
  display: block;
  margin: 0;
  font-weight: normal;
  line-height: 24px;
  position: relative;
  padding: 10px 25px;
  z-index: 1;
  color: ${(p) => p.theme.fgColor};
`;

const ThoughtContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.thoughtBgColor};
  transition: opacity 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReplyButtonsRoot = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  flex-direction: column;
  align-items: flex-end;
  margin: 16px;

  & > li {
    max-width: 60%;
  }

  & > li ~ li {
    margin-top: 8px;
  }
`;

const ReplyButton = styled(AriaButton)`
  border: 0;
  cursor: pointer;
  padding: 10px 20px;
  color: ${(p) => p.theme.fgColor};
  background: ${(p) => p.theme.lightButtonBgColor};
  border-radius: 24px;
  min-height: 48px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.15);
  line-height: 20px;
  text-align: left;
  font-weight: bold;
`;
