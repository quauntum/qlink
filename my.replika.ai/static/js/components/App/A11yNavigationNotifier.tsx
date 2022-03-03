import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Routes } from '../../types/enums';
import AriaReadable from '../AriaReadable';

type Props = RouteComponentProps & {};

const NAVIGATION_MAP = {
  [Routes.Main]: 'intro page',
  [Routes.Login]: 'Login',
  [Routes.SignupCreateAccount]: 'Create your replika',
  [Routes.SignupChooseYourAIFriend]: 'customize your Replika image',
  [Routes.SignupChooseReplikaName]: 'choose a name for your Replika',
  [Routes.SignupAlmostThere]: 'finishing up'
};

/**
 * This component is used for accessibility navigation status
 * Status updates automatically when route is changed
 *
 * For a custom status use A11yNotificationConsumer from A11yNotifier
 */
const A11yNavigationNotifier = ({ history }: Props) => {
  const [a11yMessage, setA11yMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const unlisten = history.listen(location => {
      if (NAVIGATION_MAP[location.pathname]) {
        setA11yMessage(NAVIGATION_MAP[location.pathname]);
      }
    });

    return () => unlisten();
  }, [history]);

  return (
    <AriaReadable role="alert" aria-live="polite" aria-atomic="true">
      {a11yMessage && `Navigated to ${a11yMessage}`}
    </AriaReadable>
  );
};

export default withRouter(A11yNavigationNotifier);
