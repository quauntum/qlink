import styledOmitProps from '../utils/styledOmitProps';

const LinkButton = styledOmitProps<{ noUnderline?: boolean }, 'button'>(
  'button',
  ['noUnderline']
)`
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;

  background: transparent;
  font-size: inherit;
  text-decoration: ${p => (p.noUnderline ? 'none' : 'underline')};
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  &.focus-visible:focus {
    outline: auto ${p => p.theme.outlineColor};
    box-shadow: none;
  }
`;

export default LinkButton;
