import { Action } from 'redux';
import ls from 'local-storage';
import { ActionTypes as AT } from '../types/enums';
import { UpdatePersist, InitPersist, AnyAction } from '../types/actions';
import { Reducer } from '../types/redux';
import {
  AsyncActionStatus,
  ToRequest,
  ToError,
  ToSuccess
} from '../types/asyncActions';

// proper state types after https://github.com/Microsoft/TypeScript/pull/13288 is resolved
// UPD: it's not gonna be resolved :(

/**
 * If reducer state contains `persist` property, its content will be automatically synced with localstorage
 *
 * If there is a `version` property in `persist` (i.e. `state.persist.version`),
 * the persist state is treated as versioned: it's reset to default state when `version` is changed
 * instead of being merged with current state (useful when storage structure needs to be changed)
 */

type AsyncReducerMap<S, A extends Action = AnyAction> = {
  request?: Reducer<S, ToRequest<A>>;
  error?: Reducer<S, ToError<A>>;
  success?: Reducer<S, ToSuccess<A>>;
};

type RootReducer<S, A extends Action = AnyAction> = {
  [T in A['type']]?: Reducer<S, A> | AsyncReducerMap<S, A>;
};

type AsyncAction = Action & {
  status: AsyncActionStatus;
};

type ReducerStateWithPersist<S, P extends {}> = S & {
  persist: P;
};

type VersionedReducerState<S, P extends {}> = S & {
  persist: P & { version: number };
};

const restoreStateFromLS = <
  S,
  P extends {},
  State extends ReducerStateWithPersist<S, P> = ReducerStateWithPersist<S, P>
>(
  reducerName: string,
  state: State,
  replacePersist: boolean = false
): State => {
  const storedState: P | undefined = ls.get(reducerName);
  if (storedState && typeof storedState === 'object') {
    return {
      ...state,
      persist: replacePersist
        ? storedState
        : { ...state.persist, ...storedState }
    };
  }

  return state;
};

const saveStateToLS = <S, P extends {}>(
  reducerName: string,
  state: ReducerStateWithPersist<S, P>
) => {
  ls.set(reducerName, state.persist);
};

function isInitPersistAction(action: Action): action is InitPersist {
  return action.type === AT.InitPersist;
}

function isUpdatePersistAction(action: Action): action is UpdatePersist {
  return action.type === AT.UpdatePersist;
}

function isAsyncAction(action: Action): action is AsyncAction {
  return action.hasOwnProperty('status');
}

function isStateWithPersist<S extends {}, P extends {}>(
  state: S
): state is ReducerStateWithPersist<S, P> {
  return state.hasOwnProperty('persist');
}

function isVersionedState<S extends {}, P extends {}>(
  state: S
): state is VersionedReducerState<S, P> {
  return isStateWithPersist(state) && state.persist.hasOwnProperty('version');
}

function restoreState<S extends {}, A extends Action = Action>(
  reducerName: string,
  state: S,
  action: A
) {
  let restoredState = state;

  if (isInitPersistAction(action) && isStateWithPersist(state)) {
    if (isVersionedState(state)) {
      const _restoredState = restoreStateFromLS(reducerName, state, true);

      const storedVersion = _restoredState.persist.version;
      const currentVersion = state.persist.version;

      if (storedVersion === currentVersion) {
        restoredState = _restoredState;
      } else {
        console.warn(
          `'${reducerName}' state version mismatch: ${storedVersion} != ${currentVersion}; restoring skipped`
        );
      }
    } else {
      restoredState = restoreStateFromLS(reducerName, state);
    }
  }

  if (isUpdatePersistAction(action) && action.reducerName === reducerName) {
    if (action.persist && typeof action.persist === 'object') {
      restoredState = { ...restoredState, persist: action.persist };
    }
  }

  return restoredState;
}

export default function applyReducer<S extends {}, A extends Action = Action>(
  reducerName: string,
  reducers: RootReducer<S, A>,
  state: S,
  action: A
): S {
  Object.keys(reducers).forEach(
    a => !a && console.error('Undefined reducer found!')
  );

  const restoredState = restoreState(reducerName, state, action);

  const reducerOrMap = reducers[action.type];
  let reducer: Reducer<S, A> | undefined;

  if (reducerOrMap && typeof reducerOrMap !== 'function') {
    if (isAsyncAction(action)) {
      reducer = reducerOrMap[action.status];
    }
  } else {
    reducer = reducerOrMap;
  }

  const newState = reducer
    ? reducer(restoredState as S, action)
    : (restoredState as S);

  if (
    action.type !== AT.InitPersist &&
    restoredState !== newState &&
    isStateWithPersist(newState)
  ) {
    saveStateToLS(reducerName, newState);
  }

  return newState;
}
