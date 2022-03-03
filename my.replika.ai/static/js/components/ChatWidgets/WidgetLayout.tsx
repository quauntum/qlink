import styled from 'styled-components/macro';
import mobileMedia from '../../utils/mobileMedia';
import SolidButton from '../SolidButton';
import styledOmitProps from '../../utils/styledOmitProps';
import TextArea from '../TextArea';
import TextInput from '../TextInput';

export const SubmitContainer = styledOmitProps<{
  skipEnabled?: boolean;
}>('div', ['skipEnabled'])`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;

  ${mobileMedia`
    justify-content: ${(p) => (p.skipEnabled ? 'space-between' : 'flex-end')};
  `}
`;

export const SendButton = styled(SolidButton)`
  width: auto;
  background-color: ${(p) =>
    p.disabled
      ? p.theme.widgetButtonDisabledBgColor
      : p.theme.widgetButtonBgColor};

  ${mobileMedia`
    min-width: 4rem;
  `};
`;

export const SkipButton = styled(SolidButton)`
  width: auto;
  color: ${(p) => (p.disabled ? p.theme.dimmedFgColor : p.theme.fgColor)};
  background-color: transparent;
  min-width: 0;
  text-decoration: none;
  padding: 0;
  border-radius: 0;
  height: auto;
  align-self: center;
  margin-right: 30px;

  &:hover {
    text-decoration: underline;
  }

  ${mobileMedia`
    margin: 0;
  `};
`;

export const WidgetContainer = styled.div`
  background-color: ${(p) => p.theme.widgetBgColor};
  padding: 25px 25px;
  flex: 0 0 auto;

  ${mobileMedia`
    padding: 25px 16px;
    max-height: 45vh;
  `}
`;

export const WidgetTextArea = styled(TextArea)`
  color: ${(p) => p.theme.fgColor};
  background-color: ${(p) => p.theme.widgetInputBgColor};
  border: none;

  &::-webkit-input-placeholder {
    color: ${(p) => p.theme.chatInputPlaceholderColor};
  }
  &::-moz-placeholder {
    color: ${(p) => p.theme.chatInputPlaceholderColor};
  }
  &::-ms-input-placeholder {
    color: ${(p) => p.theme.chatInputPlaceholderColor};
  }
`;

export const WidgetInput = WidgetTextArea.withComponent(TextInput);
