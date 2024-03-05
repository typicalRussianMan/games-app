import { RouteObject } from 'react-router-dom';

import { AuthorizedGuard } from '../../guards/AuthorizedGuard';
import { AchievementProvider } from '../../components/AchievementsProvider/AchievementsProvider';

import { MainPage } from './MainPage';
import { DashboardGamePage } from './pages/DashboardGamePage/DashboardGamePage';
import { GamePage } from './pages/GamePage/GamePage';

/** Main routes. */
export const MAIN_ROUTES: RouteObject = {
  element: <AuthorizedGuard />,
  children: [
    {
      element: <AchievementProvider />,
      children: [
        {
          path: '/',
          element: <MainPage />,
          children: [
            {
              path: '/',
              element: <DashboardGamePage />,
            },
            {
              path: '/:gameId',
              element: <GamePage />,
            },
          ],
        },
      ],
    },
  ],
};
