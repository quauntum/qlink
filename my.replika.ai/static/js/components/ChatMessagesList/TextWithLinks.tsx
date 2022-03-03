import * as React from 'react';
import styled from 'styled-components/macro';
import { splitTextWithUrls } from '../../utils/url';

type Props = {
  id: string;
  text: string;
  isLast: boolean;
  isRobotMessage: boolean;
  botName: string | undefined;
};

const LinkToPreview = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    color: inherit;
    text-decoration: underline;
  }
`;

const getAriaLabel = (isRobotMessage, botName) =>
  isRobotMessage
    ? botName
      ? `${botName} says:`
      : 'your Replika says:'
    : 'you say:';

const TextWithLinks = ({
  text,
  isLast,
  isRobotMessage,
  botName,
  id
}: Props) => (
  <span
    aria-live={isLast ? 'polite' : 'off'}
    aria-label={getAriaLabel(isRobotMessage, botName)}
  >
    <span id={id}>
      {splitTextWithUrls(text).map((str, idx) =>
        idx % 2 ? (
          <LinkToPreview
            key={idx}
            href={str}
            target="_blank"
            rel="noopener noreferrer"
          >
            {str}
          </LinkToPreview>
        ) : (
          <span key={idx}>{str}</span>
        )
      )}
    </span>
  </span>
);

export default TextWithLinks;
