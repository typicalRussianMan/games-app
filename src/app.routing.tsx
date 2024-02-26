import { createBrowserRouter } from 'react-router-dom';

import { AUTH_ROUTES } from './pages/auth/auth.routing';
import { MAIN_ROUTES } from './pages/main/main.routes';

/** Router. */
export const router = createBrowserRouter([
  AUTH_ROUTES,
  MAIN_ROUTES,
]);
