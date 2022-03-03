import * as React from 'react';
import ReactPopover from 'react-popover';
import FocusTrap from 'focus-trap-react';
import styled from 'styled-components/macro';
import SolidButton from './SolidButton';
import mobileMedia from '../utils/mobileMedia';
import styledOmitProps from '../utils/styledOmitProps';
import { ZIndices } from '../types/enums';
import IconButton from './IconButton';
import { ReactComponent as CloseIcon } from '../icons/Close.svg';

type Place =
  | 'above'
  | 'below'
  | 'left'
  | 'right'
  | 'row'
  | 'column'
  | 'start'
  | 'end';

type Props = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onRenderContent: (props: { onClose: () => void }) => React.ReactNode;
  place?: Place;
  preferPlace?: Place;
  closeOnOuterAction?: boolean;
  size?: 'normal' | 'small';
  offset?: number;
  noTip?: boolean;
  children: React.ReactNode;
  focusTrap?: boolean;
  showCloseButton?: boolean;
};

export const PopoverButton = (
  props: React.ComponentProps<typeof StyledButton>
) => <StyledButton size="small" {...props} />;

function findParent(el: Element, condition: (parent: Element) => boolean) {
  let parent: Element | null = el;
  while (parent) {
    if (condition(parent)) return true;

    parent = parent.parentElement;
  }

  return false;
}

export default function Popover(props: Props) {
  const {
    children,
    className,
    isOpen,
    place,
    preferPlace,
    offset,
    noTip,
    onRenderContent,
    onClose,
    size,
    focusTrap,
    closeOnOuterAction,
    showCloseButton
  } = props;

  const content = (
    <PopoverContent size={size}>
      {showCloseButton && (
        <CloseButton onClick={onClose} label="close popover">
          <CloseIcon />
        </CloseButton>
      )}
      {onRenderContent({ onClose })}
    </PopoverContent>
  );

  const body = focusTrap ? (
    <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
      {content}
    </FocusTrap>
  ) : (
    content
  );

  const handleOuterAction = React.useCallback(
    e => {
      if (closeOnOuterAction) {
        if (!findParent(e.target, n => n.hasAttribute('data-remainpopup'))) {
          onClose();
        }
      }
    },
    [onClose, closeOnOuterAction]
  );

  return (
    <PopoverRoot
      tipSize={noTip ? 0.01 : undefined}
      isOpen={isOpen}
      className={className}
      onOuterAction={handleOuterAction}
      body={body}
      place={place}
      preferPlace={preferPlace}
      enterExitTransitionDurationMs={300}
      offset={offset}
    >
      {children}
    </PopoverRoot>
  );
}

const PopoverRoot = styled(ReactPopover)`
  z-index: ${ZIndices.Popup};
  width: 270px;

  & > .Popover-tip {
    fill: ${p => p.theme.chatBgColor};
  }

  ${mobileMedia`
    width: 90vw;
    max-width: 360px;
  `};
`;

const PopoverContent = styledOmitProps<{ size?: 'normal' | 'small' }>('div', [
  'size'
])`
  background: ${p => p.theme.chatBgColor};
  border-radius: 8px;
  box-shadow: 0px 8px 20px ${p => p.theme.shadowColor};
  padding: ${p => (p.size === 'small' ? '15px 15px' : '25px 20px')};
  text-align: center;
  overflow-y: auto;
`;

const StyledButton = styled(SolidButton)`
  margin: 15px 0 5px;
  width: auto;
`;

export const PopoverCancelButton = styled(PopoverButton)`
  background-color: transparent;
  color: ${p => p.theme.fgColor};
  min-width: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  display: block;
  right: 16px;
  top: 16px;
  color: ${p => p.theme.fgColor};

  & > svg {
    display: block;
    width: 16px;
    height: 16px;
  }
`;
