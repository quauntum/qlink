import * as React from 'react';

export default React.createContext<{
  isActive: boolean;
  onScrollClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}>({
  isActive: false,
  onScrollClick: () => {}
});
