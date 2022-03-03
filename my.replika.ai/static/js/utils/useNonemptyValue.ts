import React from 'react';

export default function useNonemptyValue<T>(
  value: T | undefined
): T | undefined {
  const [latest, setLatest] = React.useState(value);

  React.useEffect(() => {
    if (value) {
      setLatest(value);
    }
  }, [value]);

  return latest;
}
