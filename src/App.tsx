import { ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './app.routing';
import { UserProvider } from './hooks/useUser';

/** App component. */
export function App(): ReactNode {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
