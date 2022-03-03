import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import FocusTrap from 'focus-trap-react';
import styledOmitProps from '../../utils/styledOmitProps';
import { dialogMobileMedia } from '../../utils/mobileMedia';
import IconButton from '../IconButton';
import SolidButton from '../SolidButton';
import LinkButton from '../LinkButton';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import { DialogMobile } from '../responsive';
import DialogContext from './DialogContext';

type MobileLayout = 'fullscreen' | 'dialog' | 'action-sheet';

export const APPEAR_TIMEOUT = 300;

const APPEARING_ANIMATION = keyframes`
  from {
    transform: translate(0, 20%);
    opacity: 0;
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const HIDING_ANIMATION = keyframes`
  from {
    transform: translate(0, 0);
    opacity: 1;
  }

  to {
    transform: translate(0, 20%);
    opacity: 0;
  }
`;

export const DialogBody = styled.div`
  flex: 0 0 auto;
  padding: 0 45px;
  border-radius: 8px;
  max-width: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DialogBodyForm = DialogBody.withComponent('form');

function mobileLayoutCss(mobileLayout: MobileLayout) {
  switch (mobileLayout) {
    case 'dialog':
      return dialogMobileMedia`
        margin: 10vh 0;
        max-width: 90vw;
      `;

    case 'fullscreen':
      return dialogMobileMedia`
        max-height: initial;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        animation: none;
        font-size: 0.8em;
        line-height: 1.5em;
        border-radius: 0;
        margin: 0vh;
      `;

    case 'action-sheet':
      return dialogMobileMedia`
        margin: 0vh;
        bottom: 0;
        border-radius: 8px 8px 0 0;
      `;
  }
}

function mobileLayoutBodyCss(mobileLayout: MobileLayout) {
  switch (mobileLayout) {
    case 'dialog':
      return '';
    case 'fullscreen':
      return dialogMobileMedia`
        overflow-y: scroll;
        border-radius: 0px;
        margin: 0 auto;
        padding: 0 20px 20px;
        width: 100vw;
        flex: 1 1 auto;
      `;
    case 'action-sheet':
      return dialogMobileMedia`
        padding: 0 30px 20px;
      `;
  }
}

const DialogRoot = styledOmitProps<{
  isActive: boolean;
  mobileLayout?: MobileLayout;
}>('div', ['isActive', 'mobileLayout']).attrs({ role: 'dialog' })`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;

  animation: ${(p) =>
    p.isActive
      ? APPEARING_ANIMATION
      : HIDING_ANIMATION} ${APPEAR_TIMEOUT}ms ease-in-out both;
  pointer-events: ${(p) => (p.isActive ? 'initial' : 'none')};
  user-select: ${(p) => (p.isActive ? 'inherit' : 'none')};

  max-width: 100vw;
  background-color: ${(p) => p.theme.dialogBgColor};
  box-shadow: 0 5px 20px 0 ${(p) => p.theme.shadowColor};
  color: ${(p) => p.theme.fgColor};
  backdrop-filter: blur(10px);
  border-radius: 8px;
  margin: 10vh 0;

  ${({ mobileLayout = 'fullscreen' }) => mobileLayoutCss(mobileLayout)};

  & ${DialogBody},
  & ${DialogBodyForm} {
    ${({ mobileLayout = 'fullscreen' }) => mobileLayoutBodyCss(mobileLayout)};
  }
`;

type DialogProps = {
  className?: string;
  mobileLayout?: MobileLayout;
  'data-testid'?: string;
  children: React.ReactNode;
};

export function Dialog(props: DialogProps) {
  const { isActive, onScrollClick } = React.useContext(DialogContext);
  const { mobileLayout, children, className } = props;

  return (
    <FocusTrap
      focusTrapOptions={
        {
          allowOutsideClick: (e) => {
            return e.target instanceof HTMLElement
              ? // allow clicking on background to close dialog
                e.target.id === 'dialog-back' ||
                  e.target.id === 'dialog-scroll' ||
                  // allow certain elements (like buttons in popovers) to be active
                  e.target.getAttribute('data-indialog') === 'true'
              : false;
          },
        } as any
      }
    >
      <DialogScroll
        id="dialog-scroll"
        onClick={onScrollClick}
        data-testid={props['data-testid']}
        mobileLayout={mobileLayout}
      >
        <DialogRoot
          className={className}
          isActive={isActive}
          mobileLayout={mobileLayout}
        >
          {children}
        </DialogRoot>
      </DialogScroll>
    </FocusTrap>
  );
}

type DialogHeaderProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  onClose?: () => void;
  mobileAction?: React.ReactNode;
};

export const DialogHeader = ({
  onClose,
  mobileAction = null,
  title,
  subtitle,
}: DialogHeaderProps) => {
  return (
    <DialogHeaderRoot>
      {typeof title === 'string' ? (
        <Title closable={!!onClose}>{title}</Title>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? (
        <Subtitle>{subtitle}</Subtitle>
      ) : (
        subtitle
      )}
      {onClose && <DialogCloseButton onClose={onClose} />}
      {mobileAction && <DialogMobile>{mobileAction}</DialogMobile>}
    </DialogHeaderRoot>
  );
};

export const DialogCloseButton = ({
  onClose,
  className,
}: {
  className?: string;
  onClose: () => void;
}) => (
  <StyledIconButton className={className} onClick={onClose} label="close popup">
    <StyledCloseIcon />
  </StyledIconButton>
);

const DialogHeaderRoot = styled.div`
  flex: 0 0 auto;
  font-size: 20px;
  padding: 30px 30px 0;
  position: relative;
  align-items: center;

  ${dialogMobileMedia`
    padding: 30px;
  `}
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  display: block;
  right: 30px;
  top: 33px;
  color: ${(p) => p.theme.fgColor};
`;

const StyledCloseIcon = styled(CloseIcon)`
  display: block;
  width: 16px;
  height: 16px;
`;

export const FormContents = styled.form`
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  padding: 40px 0 20px;
  ${dialogMobileMedia`
    padding: 0 0 20px;
    border-bottom: 0;
    max-width: 320px;
    margin: 0 auto;
  `}
`;

export const DialogFooter = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const CenteredDialogBody = styled(DialogBody)`
  text-align: center;
`;

export const CenteredDialogBodyForm = CenteredDialogBody.withComponent('form');

type ConfirmDialogBodyProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  confirmText: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialogTitle = styled.h2``;

const ConfirmDialogDescription = styled.p``;

const Title = styledOmitProps('h3', ['closable'])`
  margin: ${(p) => (p.closable ? '0 30px 0 0' : 0)};
  text-align: center;
  color: ${(p) => p.theme.fgColor};
  font-size: 20px;
  line-height: 24px;
`;

const Subtitle = styled.h4`
  display: block;
  font-size: 15px;
  line-height: 20px;
  font-weight: normal;
  text-align: center;
  margin: 16px 0;
  width: 100%;
  padding: 0 30px;
`;

export const DialogButton = styled(SolidButton)`
  background-color: ${(p) =>
    p.disabled
      ? p.theme.dialogButtonDisabledBgColor
      : p.theme.dialogButtonBgColor};
`;

export const ConfirmDialogBody = ({
  title,
  description,
  confirmText,
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogBodyProps) => {
  return (
    <CenteredDialogBody>
      <ConfirmDialogTitle>{title}</ConfirmDialogTitle>
      <ConfirmDialogDescription>{description}</ConfirmDialogDescription>
      <DialogButton onClick={() => onConfirm}>{confirmText}</DialogButton>
      <LinkButton onClick={onCancel}>{cancelText}</LinkButton>
    </CenteredDialogBody>
  );
};

function mobileLayoutScrollCss(mobileLayout: MobileLayout) {
  switch (mobileLayout) {
    case 'action-sheet':
      return dialogMobileMedia`
        bottom: 0;
      `;

    default:
      return '';
  }
}

const DialogScroll = styledOmitProps<{
  mobileLayout?: MobileLayout;
}>('div', ['mobileLayout']).attrs({ 'data-hidescrollbar': true })`
  flex: 1 0 auto;
  position: absolute;
  z-index: 1;
  overflow-y: auto;
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ mobileLayout = 'fullscreen' }) => mobileLayoutScrollCss(mobileLayout)}
`;
