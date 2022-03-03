import * as React from 'react';
import createFocusGroup from 'focus-group';

type Keybinding = {
  key?: string;
  keyCode?: number;
  metaKey?: boolean;
  ctrlKey?: boolean;
  altKey?: boolean;
};

type Keybindings = {
  next?: Keybinding;
  prev?: Keybinding;
  first?: Keybinding;
  last?: Keybinding;
};

type FocusGroupOptions = {
  keybindings?: Keybindings;
  members?: Node[] | NodeListOf<Node>;
  wrap?: boolean;
  stringSearch?: boolean;
  stringSearchDelay?: number;
};

type GetGroupElements = () =>
  | Node[]
  | NodeListOf<Node>
  | HTMLCollectionOf<Element>;

type FocusGroupConfig = {
  getGroupElements: GetGroupElements;
  options?: FocusGroupOptions;
  focusNodeIndex?: number;
};

const useFocusGroup = (config: FocusGroupConfig, effectInputs: any[]) => {
  const [focusGroup, setFocusGroup] = React.useState<any>(null);

  React.useLayoutEffect(() => {
    let fg = focusGroup;
    if (!fg) {
      fg = createFocusGroup(config.options);
      setFocusGroup(fg);
    }

    fg.setMembers(config.getGroupElements());

    fg.activate();

    if (config.focusNodeIndex !== undefined) {
      fg.focusNodeAtIndex(config.focusNodeIndex);
    }

    return () => {
      fg.deactivate();
    };
    // eslint-disable-next-line
  }, effectInputs);
};

export default useFocusGroup;
