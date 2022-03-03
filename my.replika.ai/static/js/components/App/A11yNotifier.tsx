import * as React from 'react';

import AriaReadable from '../AriaReadable';

export const A11yNotificationContext = React.createContext<{
  a11yNotification: string | null;
  setA11yNotification: (text: string | null) => void;
}>({
  a11yNotification: null,
  setA11yNotification: () => {
    /**/
  }
});

export const A11yNotificationConsumer = A11yNotificationContext.Consumer;

/**
 * This component is used for a custom accessibility status
 * import A11yNotificationConsumer and call setA11yNotification to set a status from your component
 */
const A11yNotifier = ({ children }: { children: React.ReactNode }) => {
  const [a11yNotification, setA11yNotification] = React.useState<string | null>(
    null
  );

  return (
    <A11yNotificationContext.Provider
      value={{
        a11yNotification,
        setA11yNotification
      }}
    >
      <AriaReadable role="status" aria-live="polite" aria-atomic="true">
        {a11yNotification}
      </AriaReadable>
      {children}
    </A11yNotificationContext.Provider>
  );
};

export default A11yNotifier;
