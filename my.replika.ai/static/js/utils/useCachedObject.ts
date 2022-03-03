import * as React from 'react';
import { isEqual } from 'lodash';

export default function useCachedObject<T>(val: T) {
  const [cached, setCached] = React.useState(val);

  React.useEffect(() => {
    if (!isEqual(val, cached)) {
      setCached(val);
    }
  }, [val, cached]);

  return cached;
}
