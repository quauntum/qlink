import * as React from 'react';
import { RelationshipStatus } from '../types/enums';
import RadioButtonSelector from './RadioButtonSelector';

type Props = {
  className?: string;
  value: RelationshipStatus | undefined;
  onChange: (status: RelationshipStatus) => void;
  locked: boolean;
  onLockedClick: (status: RelationshipStatus) => void;
};

const STATUS_OPTS = [
  {
    label: 'Friend',
    value: RelationshipStatus.Friend
  },
  {
    label: 'Romantic partner',
    value: RelationshipStatus.Romantic
  },
  {
    label: 'Mentor',
    value: RelationshipStatus.Mentor
  },
  {
    label: 'See how it goes',
    value: RelationshipStatus.Organic
  }
];

const RelationshipStatusSelector = (props: Props) => {
  const { value, onChange, className, locked, onLockedClick } = props;

  const variants = STATUS_OPTS.map(opt =>
    locked && opt.value !== value ? { ...opt, locked: true } : opt
  );

  return (
    <RadioButtonSelector
      className={className}
      variants={variants}
      value={value}
      onChange={onChange}
      id="relationship-status"
      onLockedClick={onLockedClick}
    />
  );
};

export default RelationshipStatusSelector;
