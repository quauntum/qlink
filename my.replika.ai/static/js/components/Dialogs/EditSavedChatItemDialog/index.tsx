import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogButton,
  DialogFooter,
} from '../../DialogLayout';
import { SavedChatItemType } from '../../../types/enums';
import LinkButton from '../../LinkButton';
import LabeledTextInput from '../../LabeledTextInput';
import {
  updateSavedChatItem,
  updateItemToSave,
} from '../../../actions/savedChatItems';
import useNonemptyValue from '../../../utils/useNonemptyValue';

type Props = {
  onClose: () => void;
  itemId: string;
  source: 'saved_chat_item' | 'widget';
  name: string;
  itemType: SavedChatItemType;
};

const TEXTS = {
  default: {
    title: 'Change name',
    placeholder: 'Item name',
  },
  [SavedChatItemType.Diary]: {
    title: 'Change diary title',
    placeholder: 'Diary title',
  },
  [SavedChatItemType.Song]: {
    title: 'Change song name',
    placeholder: 'Song name',
  },
  [SavedChatItemType.Story]: {
    title: 'Change story title',
    placeholder: 'Story title',
  },
  [SavedChatItemType.Session]: {
    title: 'Change session name',
    placeholder: 'Session name',
  },
};

const EditSavedChatItemDialog = (props: Props) => {
  const { onClose, itemId, source, itemType } = props;
  const [name, setName] = React.useState(props.name);

  const dispatch = useDispatch();

  const memoizedType = useNonemptyValue(itemType);
  const texts = memoizedType
    ? TEXTS[memoizedType] ?? TEXTS.default
    : TEXTS.default;

  const title = texts.title;
  const placeholder = texts.placeholder;

  const handleSave = () => {
    if (source === 'saved_chat_item') {
      dispatch(updateSavedChatItem(itemId, { name }));
    } else {
      dispatch(updateItemToSave(itemId, { name }));
    }

    onClose();
  };

  return (
    <StyledDialog data-testid="saved-chat-item-dialog" mobileLayout="dialog">
      <DialogHeader onClose={onClose} title={title} />
      <StyledDialogBody>
        <StyledTextInput
          id="saved-chat-item-name"
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </StyledDialogBody>
      <StyledDialogFooter>
        <LinkButton onClick={onClose}>Cancel</LinkButton>
        <DialogButton onClick={handleSave}>Save</DialogButton>
      </StyledDialogFooter>
    </StyledDialog>
  );
};

export default EditSavedChatItemDialog;

const StyledDialogFooter = styled(DialogFooter)`
  justify-content: space-between;
  padding: 25px;
`;

const StyledDialog = styled(Dialog)`
  width: 400px;
  max-width: calc(100vw - 40px);
`;

const StyledDialogBody = styled(DialogBody)`
  padding: 40px 25px 0;
`;

const StyledTextInput = styled(LabeledTextInput)`
  width: 100%;
`;
