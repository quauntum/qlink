import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import LinkButton from '../../LinkButton';
import { MessageActionType } from '../../../types/models';
import { setMessageReaction } from '../../../actions/chat';
import reactionIcons from '../../../icons/reactions.png';
import styledOmitProps from '../../../utils/styledOmitProps';
import useFocusGroup from '../../../utils/useFocusGroup';

type Props = {
  className?: string;
  messageId: string;
  onClose: () => void;
  permittedActions?: MessageActionType[];
};

type Reaction = {
  emoji: string;
  icon: string;
  offset: number;
  label: string;
  name: MessageActionType;
};

export const REACTIONS: Reaction[] = [
  { emoji: '😍', icon: reactionIcons, offset: 0, label: 'Love', name: 'Love' },
  {
    emoji: '😃',
    icon: reactionIcons,
    offset: 33.3,
    label: 'Funny',
    name: 'Funny'
  },
  {
    emoji: '😐',
    icon: reactionIcons,
    offset: 66.6,
    label: 'Meaningless',
    name: 'Meaningless'
  },
  {
    emoji: '😬',
    icon: reactionIcons,
    offset: 100,
    label: 'Offensive',
    name: 'Offensive'
  }
];

export default function ReactionDialogBody({
  messageId,
  className,
  onClose,
  permittedActions = []
}: Props) {
  const reactions = REACTIONS.filter(
    r => permittedActions.indexOf(r.name) !== -1
  );
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useFocusGroup(
    {
      getGroupElements() {
        return ref.current ? ref.current.querySelectorAll('button') : [];
      },
      options: {
        wrap: true
      },
      focusNodeIndex: 0
    },
    [reactions.length]
  );

  return (
    <Reactions ref={ref} role="list" className={className}>
      {reactions.map((r, idx) => (
        <Reaction
          tabIndex={idx === 0 ? 0 : -1}
          key={r.label}
          onClick={() => {
            dispatch(setMessageReaction(messageId, r.name));
            onClose();
          }}
        >
          <Emoji aria-hidden="true" reaction={r} />
          <Label>{r.label}</Label>
        </Reaction>
      ))}
    </Reactions>
  );
}

export const ReactionEmoji = styledOmitProps<{ reaction: Reaction }>('div', [
  'reaction'
])`
  display: inline-block;
  background-size: 400% 100%;
  background-image: url('${p => p.reaction.icon}');
  background-position: ${p => p.reaction.offset}% 0px;
`;

const Emoji = styled(ReactionEmoji)`
  margin-right: 10px;
  width: 36px;
  height: 36px;
`;

const Reactions = styled.div`
  width: 100%;
  color: ${p => p.theme.fgColor};
`;

const Reaction = styled(LinkButton)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  & + & {
    margin-top: 10px;
  }
`;

const Label = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
`;
