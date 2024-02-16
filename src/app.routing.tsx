import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES } from "./pages/auth/auth.routing";
import { MainPage } from "./pages/main/MainPage";
import { AuthorizedGuard } from "./guards/AuthorizedGuard";

/** Router. */
export const router = createBrowserRouter([
  AUTH_ROUTES,
  {
    element: <AuthorizedGuard />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
