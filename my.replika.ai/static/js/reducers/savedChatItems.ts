import { uniqBy, take, sortBy, mapValues, values } from 'lodash';
import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { ToSuccess } from '../types/asyncActions';
import { SavedChatItemState } from '../types/states';
import * as A from '../types/actions';
import {
  AsyncActionTypes as AAT,
  ActionTypes as AT,
  SavedChatItemType,
} from '../types/enums';
import { SavedChatItemPreview } from '../types/models';

const DEFAULT_STATE: SavedChatItemState = {
  saveChatItemPreviews: {},
  savedChatItems: {},
  invalidatedPreviews: [],
  persist: {
    latestSavedChatItemPreviews: {},
    savedItemTypeTabs: [],
    chatItemsToSave: [],
  },
};

type R<X extends A.SavedChatItemAction | A.IncomingWsAction> = Reducer<
  SavedChatItemState,
  X
>;
type RSuccess<X> = Reducer<SavedChatItemState, ToSuccess<X>>;

function updateLatestSavedChatItemPreviews(
  persist: SavedChatItemState['persist'],
  itemType: SavedChatItemType | 'all',
  previews: SavedChatItemPreview[]
) {
  const latestPreviews = take(previews, 25);

  return {
    ...persist,
    latestSavedChatItemPreviews: {
      ...persist.latestSavedChatItemPreviews,
      [itemType]: latestPreviews,
    },
  };
}

const resetState: R<any> = (state) => ({
  ...DEFAULT_STATE,
});

const setSavedChatItemTypes: RSuccess<A.GetSavedChatItemTypes> = (
  state,
  { result }
) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      savedItemTypeTabs: result,
    },
  };
};

const setSavedChatItemPreviews: RSuccess<A.GetSavedChatItemPreviews> = (
  state,
  { result, params }
) => {
  const previewType = params.type ?? 'all';
  const invalidate = params.offset === 0;
  const statePreviews = state.saveChatItemPreviews[previewType] ?? [];

  const previews = uniqBy(
    sortBy(
      invalidate ? result : [...statePreviews, ...result],
      (d) => -new Date(d.timestamp).getTime()
    ),
    (d) => d.id
  );

  return {
    ...state,
    invalidatedPreviews: state.invalidatedPreviews.filter(
      (p) => p !== previewType
    ),
    saveChatItemPreviews: {
      ...state.saveChatItemPreviews,
      [previewType]: previews,
    },
    persist: updateLatestSavedChatItemPreviews(
      state.persist,
      previewType,
      previews
    ),
  };
};

const setSavedChatItems: RSuccess<A.GetSavedChatItems> = (
  state,
  { result }
) => {
  let savedChatItems = state.savedChatItems;

  result.forEach((item) => {
    savedChatItems[item.id] = item;
  });

  return {
    ...state,
    savedChatItems,
  };
};

const addItemToSave: R<A.SaveChatItemReceived> = (state, { item }) => {
  return item.id
    ? {
        ...state,
        persist: {
          ...state.persist,
          chatItemsToSave: [...state.persist.chatItemsToSave, item],
        },
      }
    : state;
};

const cancelSaveItem: R<A.CancelSaveChatItem> = (state, { itemId }) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      chatItemsToSave: state.persist.chatItemsToSave.filter(
        (item) => item.id !== itemId
      ),
    },
  };
};

const removeSavedChatItem: RSuccess<A.DeleteSavedChatItem> = (
  state,
  { params }
) => {
  const saveChatItemPreviews = mapValues(
    state.saveChatItemPreviews,
    (previews, key) => {
      return previews?.filter((p) => p.id !== params.id);
    }
  );

  return {
    ...state,
    saveChatItemPreviews,
    persist: {
      ...state.persist,
      latestSavedChatItemPreviews: mapValues(saveChatItemPreviews, (previews) =>
        take(previews, 25)
      ),
      chatItemsToSave: state.persist.chatItemsToSave.filter(
        (item) => item.id !== params.id
      ),
    },
  };
};

const addSavedChatItem: RSuccess<A.SaveChatItem> = (state, { params }) => {
  return {
    ...state,
    invalidatedPreviews: [...values(SavedChatItemType), 'all'],
    persist: {
      ...state.persist,
      chatItemsToSave: state.persist.chatItemsToSave.filter(
        (item) => item.id !== params.itemId
      ),
    },
  };
};

const updateSavedChatItem: RSuccess<A.UpdateSavedChatItem> = (
  state,
  { params }
) => {
  return {
    ...state,
    invalidatedPreviews: [...values(SavedChatItemType), 'all'],
    savedChatItems: {
      ...state.savedChatItems,
      [params.id]: { ...state.savedChatItems[params.id], ...params.update },
    },
  };
};

const updateItemToSave: R<A.UpdateChatItemToSave> = (
  state,
  { itemId, update }
) => {
  return {
    ...state,
    persist: {
      ...state.persist,
      chatItemsToSave: state.persist.chatItemsToSave.map((item) =>
        item.id === itemId ? { ...item, ...update } : item
      ),
    },
  };
};

export default function savedChatItems(
  state: SavedChatItemState = DEFAULT_STATE,
  action: A.AnyAction
): SavedChatItemState {
  return applyReducer(
    'savedChatItems',
    {
      [AAT.Logout]: {
        success: resetState,
        error: resetState,
      },
      [AAT.DeleteAccount]: {
        success: resetState,
      },
      [AAT.GetSavedChatItemTypes]: {
        success: setSavedChatItemTypes,
      },
      [AAT.GetSavedChatItemPreviews]: {
        success: setSavedChatItemPreviews,
      },
      [AAT.GetSavedChatItems]: {
        success: setSavedChatItems,
      },
      [AT.WsSaveChatItemReceived]: addItemToSave,
      [AAT.WsSaveChatItem]: {
        success: addSavedChatItem,
      },
      [AAT.DeleteSavedChatItem]: {
        success: removeSavedChatItem,
      },
      [AT.CancelSaveChatItem]: cancelSaveItem,
      [AAT.UpdateSavedChatItem]: {
        success: updateSavedChatItem,
      },
      [AT.UpdateChatItemToSave]: updateItemToSave,
    },
    state,
    action
  );
}
