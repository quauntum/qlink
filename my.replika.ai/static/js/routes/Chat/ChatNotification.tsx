import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import styledOmitProps from '../../utils/styledOmitProps';
import { ZIndices } from '../../types/enums';

type Mode = 'shown' | 'hiding' | 'hidden';

const HIDE_TIMEOUT = 200;

function ChatNotification() {
  const [voiceModeEnabled, uploadError] = useSelector((state) => [
    state.chat.voiceModeEnabled,
    state.ui.imageUpload.uploadError,
  ]);

  const [mode, setMode] = React.useState<Mode>('hidden');
  const [message, setMessage] = React.useState<null | {
    text: string;
    expiration: number;
    spinner: boolean;
  }>(null);

  React.useEffect(() => {
    if (mode === 'shown' && message?.expiration) {
      const timeout = setTimeout(() => setMode('hiding'), message.expiration);
      return () => clearTimeout(timeout);
    } else if (mode === 'hiding') {
      const timeout = setTimeout(() => {
        setMode('hidden');
        setMessage(null);
      }, HIDE_TIMEOUT);

      return () => clearTimeout(timeout);
    }

    return;
  }, [mode, message]);

  React.useEffect(() => {
    if (voiceModeEnabled) {
      setMode('shown');
      setMessage({ text: 'Call in progress', expiration: 0, spinner: true });
    } else {
      setMode('hiding');
    }
  }, [voiceModeEnabled]);

  React.useEffect(() => {
    if (uploadError) {
      setMode('shown');
      setMessage({ text: uploadError, expiration: 3000, spinner: false });
    }
  }, [uploadError]);

  return (
    <ChatNotificationRoot show={mode === 'shown'}>
      <div>{message?.text}</div>
      {message?.spinner && <StyledSpinner />}
    </ChatNotificationRoot>
  );
}

export default ChatNotification;

const ChatNotificationRoot = styledOmitProps<{ show: boolean }>('div', [
  'show',
])`
  position: absolute;
  top: ${(p) => (p.show ? 0 : '-64px')};
  width: 100%;
  height: 64px;
  background-color: ${(p) => p.theme.notificationBgColor};
  z-index: ${ZIndices.Popup};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.notificationFgColor};
  font-weight: semibold;
  font-size: 14px;
  transition: top ${HIDE_TIMEOUT}ms ease-in;
`;

const StyledSpinner = styled(Spinner)`
  & > div {
    background-color: ${(p) => p.theme.notificationFgColor};
  }
`;
