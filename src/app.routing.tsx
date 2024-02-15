import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES } from "./pages/auth/auth.routing";
import { MainPage } from "./pages/main/MainPage";

/** Router. */
export const router = createBrowserRouter([
  AUTH_ROUTES,
  {
    path: '/',
    element: <MainPage />,
  }
]);
