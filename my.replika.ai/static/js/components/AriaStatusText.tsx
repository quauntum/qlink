import styled from 'styled-components/macro';

/**
 * Basic text block used for status texts, like error messages
 * If you don't need to display a text, consider using A11yNotifier
 */
const AriaStatusText = styled.span.attrs({
  role: 'status',
  'aria-live': 'polite',
  'aria-atomic': true
})``;

export default AriaStatusText;
