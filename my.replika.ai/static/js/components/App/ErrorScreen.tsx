import * as React from 'react';
import styled from 'styled-components/macro';

type Props = {
  className?: string;
  onClose: () => void;
};

const ErrorScreenRoot = styled.div`
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  text-align: center;
  background-color: #0b2988;
  color: #fff;
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  line-height: 1.5em;

  & > p {
    margin-top: 10px;
  }

  & a {
    color: inherit;
  }
`;

const AutoTranslationWarning = styled.p`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;
  background: rgba(255, 0, 0, 0.2);
  max-width: 600px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;
  padding: 10px 15px;
  margin-top: 30px;
  color: #fff;
`;

function isAutoTranslated() {
  // https://www.ctrl.blog/entry/detect-machine-translated-webpages.html
  return !!document.querySelector(
    'html.translated-ltr, head.translated-rtl, ya-tr-span, *[_msttexthash]'
  );
}

export default class ErrorScreen extends React.Component<Props> {
  render() {
    const { className, onClose } = this.props;

    return (
      <ErrorScreenRoot className={className}>
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
        {isAutoTranslated() && (
          <AutoTranslationWarning>
            <b>
              It seems that you are using auto translation which can affect
              application performance.
              <br />
              <br />
              Please try disabling auto translation.
            </b>
          </AutoTranslationWarning>
        )}
        <p>
          If it doesn’t go away, please{' '}
          <a
            href="mailto:my@replika.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            send us a message
          </a>
          .
        </p>
        <CloseButton onClick={onClose}>Try again</CloseButton>
      </ErrorScreenRoot>
    );
  }
}
