import * as React from 'react';
import { values } from 'lodash';
import styled from 'styled-components/macro';
import { Pronouns } from '../types/enums';
import RadioButtonSelector, {
  Props as SelectorProps,
} from './RadioButtonSelector';
import capitalize from '../utils/capitalize';

type Props = {
  className?: string;
  value: Pronouns | undefined;
  onChange: (pronoun: Pronouns) => void;
};

const PRONOUN_OPTS = values(Pronouns).map((v) => ({
  label: capitalize(v),
  value: v as Pronouns,
}));

const PronounSelector = (props: Props) => {
  const { value, onChange, className } = props;

  return (
    <StyledRadioButtonSelector
      layout="horizontal"
      buttonTheme="outline"
      size="small"
      className={className}
      variants={PRONOUN_OPTS}
      value={value}
      onChange={onChange}
      id="pronoun"
    />
  );
};

export default PronounSelector;

const StyledRadioButtonSelector = styled<React.FC<SelectorProps<Pronouns>>>(
  RadioButtonSelector
)`
  margin: 0 auto;
  max-width: 280px;
`;
