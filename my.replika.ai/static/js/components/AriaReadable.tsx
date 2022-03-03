import styled from 'styled-components/macro';

/**
 * Hidden component that is visible only to a11y readers and is used as an replacement
 * for 'aria-label' property. 'aria-label' is not recommended to use since
 * translators (like Google Translator) tend to ignore it alone with other attributes,
 * leaving it untranslated
 */
const AriaReadable = styled.span`
  &&& {
    display: block;
    position: absolute;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;

export default AriaReadable;

export const AriaReadableH1 = AriaReadable.withComponent('h1');

export const AriaReadableH2 = AriaReadable.withComponent('h2');

export const AriaReadableH3 = AriaReadable.withComponent('h3');

export const AriaReadableH4 = AriaReadable.withComponent('h4');

export const AriaReadableH5 = AriaReadable.withComponent('h5');

export const AriaReadableH6 = AriaReadable.withComponent('h6');
