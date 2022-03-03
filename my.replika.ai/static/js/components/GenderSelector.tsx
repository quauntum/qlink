import * as React from 'react';
import { values } from 'lodash';
import { Genders } from '../types/enums';
import RadioButtonSelector from './RadioButtonSelector';
import capitalize from '../utils/capitalize';

type Props = {
  className?: string;
  value: Genders | undefined;
  onChange: (gender: Genders) => void;
};

const GENDER_OPTS = values(Genders).map((v) => ({
  label: capitalize(v),
  value: v as Genders,
}));

const GenderSelector = (props: Props) => {
  const { value, onChange, className } = props;

  return (
    <RadioButtonSelector
      layout="horizontal"
      buttonTheme="outline"
      size="small"
      className={className}
      variants={GENDER_OPTS}
      value={value}
      onChange={onChange}
      id="gender"
    />
  );
};

export default GenderSelector;
