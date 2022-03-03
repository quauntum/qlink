import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEqual } from 'lodash';
import { RootState } from '../types/states';
import { DA } from '../types/redux';

export default function useApi<T, R>(
  selector: (state: RootState) => T,
  getAction: (() => DA<R>) | null,
  options?: { memoDeepEqual: boolean }
) {
  const { memoDeepEqual = false } = options || {};
  const dispatch = useDispatch();

  const selectorResult = useSelector(selector);

  const [result, setResult] = React.useState<T>(selectorResult);

  React.useEffect(() => {
    if (memoDeepEqual) {
      if (!isEqual(result, selectorResult)) {
        setResult(selectorResult);
      }
    }
  }, [result, selectorResult, memoDeepEqual]);

  React.useEffect(() => {
    if (getAction != null) {
      dispatch(getAction());
    }
  }, [dispatch, getAction]);

  return memoDeepEqual ? result : selectorResult;
}
