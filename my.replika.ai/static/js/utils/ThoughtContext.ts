import * as React from 'react';

const ThoughtContext = React.createContext<{
  thoughtsShown: boolean;
  setThoughtsShown: (shown: boolean) => void;
}>({
  thoughtsShown: false,
  setThoughtsShown: () => {},
});

export default ThoughtContext;
