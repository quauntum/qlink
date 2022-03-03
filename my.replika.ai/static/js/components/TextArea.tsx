import styled from 'styled-components/macro';
import Textarea from 'react-textarea-autosize';

export default styled(Textarea)`
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  resize: vertical;
  width: 100%;
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 4px;

  background-color: ${p => p.theme.chatBgColor};
  color: ${p => p.theme.fgColor};

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &::-moz-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
  }
  &::-ms-input-placeholder {
    color: ${p => p.theme.placeholderColor};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  &:focus::-ms-input-placeholder {
    opacity: 0;
  }
`;
