import { AsyncActionTypes as AAT, ActionTypes as AT } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction } from '../utils/asyncAction';
import {
  MemoryFact,
  MemoryPerson,
  MemoryRelation,
  MemoryPersonPatch,
} from '../types/models';

export const getMemory = (): DA<{
  facts: MemoryFact[];
  persons: MemoryPerson[];
}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetMemory>(
    AAT.GetMemory,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/memory`, fetchOpts),
    }
  );
};

export const getMemoryRelations = (): DA<MemoryRelation[]> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetMemoryRelations>(
    AAT.GetMemoryRelations,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/memory/relations`, fetchOpts),
    }
  );
};

export const updateMemoryPerson = (
  id: string,
  update: MemoryPersonPatch
): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'PUT', update);

  return apiAction<A.UpdateMemoryPerson>(
    AAT.UpdateMemoryPerson,
    dispatch,
    { id, update },
    {
      onRequest: () => fetch(`${API_BASE_URL}/memory/persons/${id}`, fetchOpts),
    }
  );
};

export const deleteMemory = (
  memoryType: 'facts' | 'persons',
  id: string
): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'DELETE');

  return apiAction<A.DeleteMemory>(
    AAT.DeleteMemory,
    dispatch,
    { id, memoryType },
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/memory/${memoryType}/${id}`, fetchOpts),
      onSuccess: () => {
        getMemory()(dispatch, getState);
      },
    }
  );
};

export const resetMemoryUnreadCount = () => {
  return {
    type: AT.ResetMemoryUnreadCount,
  };
};
