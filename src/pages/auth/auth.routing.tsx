import { RouteObject } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { LoginForm } from "./components/Login";
import { UnauthorizedGuard } from "../../guards/UnauthorizedGuard";

export const AUTH_ROUTES: RouteObject = {
  element: <UnauthorizedGuard />,
  children: [
    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        {
          path: 'login',
          element: <LoginForm />,
        },
      ],
    }
  ]
}
