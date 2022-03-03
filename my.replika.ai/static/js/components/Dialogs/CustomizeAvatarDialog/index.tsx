import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import loadable from '@loadable/component';
import {
  Dialog,
  DialogBodyForm,
  DialogHeader,
  DialogFooter,
  DialogButton
} from '../../DialogLayout';
import { Customization2d } from '../../../types/models';
import { updateBot } from '../../../actions/profile';

const AvatarCustomizer = loadable(() =>
  import(/* webpackChunkName: "AvatarCustomizer" */ '../../AvatarCustomizer')
);

type Props = {
  avatarId: string;
  customization2d: Customization2d | null;
  onClose: () => void;
};

const CustomizeAvatarDialog = (props: Props) => {
  const { onClose, avatarId, customization2d } = props;

  const [customization, setCustomization] = React.useState({
    avatarId,
    customization2d
  });

  const avatar = useSelector(state => state.profile.persist.bot?.avatar);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (avatarId && customization2d) {
      setCustomization({ avatarId, customization2d });
    }
  }, [customization2d, avatarId]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (avatar && customization.customization2d) {
      await dispatch(
        updateBot({
          avatar: {
            type: '3d',
            id: customization.avatarId,
            customization: customization.customization2d
          }
        })
      );
      onClose();
    }
  };

  return (
    <StyledDialog data-testid="customize-avatar-dialog">
      <DialogHeader onClose={onClose} title="Customize" />
      <StyledDialogBodyForm onSubmit={handleSubmit}>
        <StyledAvatarCustomizer
          key={customization.avatarId}
          avatarId={customization.avatarId}
          onChange={c2d =>
            setCustomization({
              avatarId: customization.avatarId,
              customization2d: c2d
            })
          }
          customization={customization.customization2d ?? undefined}
        />
        <DialogFooter>
          <DialogButton type="submit">Save</DialogButton>
        </DialogFooter>
      </StyledDialogBodyForm>
    </StyledDialog>
  );
};

export default CustomizeAvatarDialog;

const StyledDialog = styled(Dialog)`
  width: 500px;
`;

const StyledAvatarCustomizer = styled(AvatarCustomizer)``;

const StyledDialogBodyForm = styled(DialogBodyForm)`
  padding: 20px;
  max-width: none;
`;
