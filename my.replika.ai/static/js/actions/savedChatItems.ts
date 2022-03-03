import {
  AsyncActionTypes as AAT,
  ActionTypes as AT,
  SavedChatItemType,
  WsEventNames,
} from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction, wsAction } from '../utils/asyncAction';
import {
  SavedChatItemTypeTab,
  SavedChatItemPreview,
  SavedChatItem,
  SavedChatItemPatch,
} from '../types/models';
import toQueryString from '../utils/toQueryString';
import { sendMessage } from '../utils/websocket';

export const getSavedChatItemTypes = (): DA<SavedChatItemTypeTab[]> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetSavedChatItemTypes>(
    AAT.GetSavedChatItemTypes,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/saved_chat_items/item_types`, fetchOpts),
    }
  );
};

export const getSavedChatItemPreviews = (
  savedChatItemType: SavedChatItemType | undefined = undefined,
  offset = 0,
  limit = 25
): DA<SavedChatItemPreview[]> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetSavedChatItemPreviews>(
    AAT.GetSavedChatItemPreviews,
    dispatch,
    { offset, limit, type: savedChatItemType },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/saved_chat_items/previews?${toQueryString({
            t: savedChatItemType,
            offset,
            limit,
          })}`,
          fetchOpts
        ),
    }
  );
};

export const getSavedChatItems = (
  ids: string[],
  savedChatItemType?: SavedChatItemType
): DA<SavedChatItem[]> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'POST', {
    ids,
    type: savedChatItemType,
  });

  return apiAction<A.GetSavedChatItems>(
    AAT.GetSavedChatItems,
    dispatch,
    { ids, type: savedChatItemType },
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/saved_chat_items/actions/get_by_ids`, fetchOpts),
    }
  );
};

export const markSavedChatItemRead = (ids: string[]): DA<{}> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'POST', { ids });

  return apiAction<A.MarkSavedChatItemRead>(
    AAT.MarkSavedChatItemRead,
    dispatch,
    { ids },
    {
      onRequest: () =>
        fetch(
          `${API_BASE_URL}/saved_chat_items/actions/mark_as_read`,
          fetchOpts
        ),
      onSuccess: () => {
        getSavedChatItemTypes()(dispatch, getState);
      },
    }
  );
};

export const updateSavedChatItem = (
  id: string,
  update: SavedChatItemPatch
): DA<{}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'PATCH', update);

  return apiAction<A.UpdateSavedChatItem>(
    AAT.UpdateSavedChatItem,
    dispatch,
    { id, update },
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/saved_chat_items/${id}`, fetchOpts),
    }
  );
};

export const updateItemToSave = (
  itemId: string,
  update: SavedChatItemPatch
) => {
  return {
    type: AT.UpdateChatItemToSave,
    itemId,
    update,
  };
};

export const deleteSavedChatItem = (id: string): DA<{}> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'DELETE');

  return apiAction<A.DeleteSavedChatItem>(
    AAT.DeleteSavedChatItem,
    dispatch,
    { id },
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/saved_chat_items/${id}`, fetchOpts),
      onSuccess: () => {
        getSavedChatItemTypes()(dispatch, getState);
      },
    }
  );
};

export const cancelSaveItem = (itemId: string) => {
  return {
    type: AT.CancelSaveChatItem,
    itemId,
  };
};

export const saveChatItem = (itemId: string, name: string): DA<{}> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { chatId } = state.ws.persist;

  if (!chatId) {
    throw Error('no chat id');
  }

  const params = { chatId, itemId, name };

  return wsAction(AAT.WsSaveChatItem, dispatch, params, {
    onRequest: () =>
      sendMessage(
        {
          event_name: WsEventNames.SaveChatItem,
          payload: {
            id: itemId,
            chat_id: chatId,
            name,
          },
        },
        state
      ),
    onSuccess: () => {
      getSavedChatItemTypes()(dispatch, getState);
    },
  });
};
