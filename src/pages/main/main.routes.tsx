import { RouteObject } from 'react-router-dom';

import { AuthorizedGuard } from '../../guards/AuthorizedGuard';

import { MainPage } from './MainPage';
import { DashboardGamePage } from './pages/DashboardGamePage/DashboardGamePage';

/** Main routes. */
export const MAIN_ROUTES: RouteObject = {
  // element: <AuthorizedGuard />,
  children: [
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path: '/',
          element: <DashboardGamePage />,
        },
      ],
    },
  ],
};
