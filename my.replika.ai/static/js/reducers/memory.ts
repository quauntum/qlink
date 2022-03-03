import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ToSuccess } from '../types/asyncActions';
import { MemoryState } from '../types/states';
import * as A from '../types/actions';
import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';
import { MemoryRecord } from '../types/models';

const DEFAULT_STATE: MemoryState = {
  persist: {
    facts: [],
    persons: [],
    relations: [],
    unreadCount: 0,
  },
};

type R<X extends A.MemoryAction | A.IncomingWsAction> = Reducer<MemoryState, X>;
type RSuccess<X> = Reducer<MemoryState, ToSuccess<X>>;

const resetState: R<any> = (state) => ({
  ...DEFAULT_STATE,
});

const setMemory: RSuccess<A.GetMemory> = (state, { result }) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      facts: result.facts,
      persons: result.persons,
    },
  };
};

const setMemoryRelations: RSuccess<A.GetMemoryRelations> = (
  state,
  { result }
) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      relations: result,
    },
  };
};

const removeMemory: RSuccess<A.DeleteMemory> = (state, { params }) => {
  const records: MemoryRecord[] = state.persist[params.memoryType];
  return {
    ...state,
    persist: {
      ...state.persist,
      [params.memoryType]: records.filter((f) => f.id !== params.id),
    },
  };
};

const updateMemoryPerson: RSuccess<A.UpdateMemoryPerson> = (
  state,
  { params }
) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      persons: state.persist.persons.map((p) =>
        p.id === params.id ? { ...p, ...params.update } : p
      ),
    },
  };
};

const resetMemoryUnreadCount: R<A.ResetMemoryUnreadCount> = (state) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      unreadCount: 0,
    },
  };
};

const incrementMemoryUnreadCount: R<A.StatementRemembered> = (state) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      unreadCount: state.persist.unreadCount + 1,
    },
  };
};

export default function memory(
  state: MemoryState = DEFAULT_STATE,
  action: A.AnyAction
): MemoryState {
  return applyReducer(
    'memory',
    {
      [AAT.Logout]: {
        success: resetState,
        error: resetState,
      },
      [AAT.DeleteAccount]: {
        success: resetState,
      },
      [AAT.GetMemory]: {
        success: setMemory,
      },
      [AAT.GetMemoryRelations]: {
        success: setMemoryRelations,
      },
      [AAT.UpdateMemoryPerson]: {
        success: updateMemoryPerson,
      },
      [AAT.DeleteMemory]: {
        success: removeMemory,
      },
      [AT.WsStatementRemembered]: incrementMemoryUnreadCount,
      [AT.ResetMemoryUnreadCount]: resetMemoryUnreadCount,
    },
    state,
    action
  );
}
