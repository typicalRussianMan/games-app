import { RouteObject } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { LoginForm } from "./components/LoginForm";

export const AUTH_ROUTES: RouteObject = {
  path: '/auth',
  element: <AuthPage />,
  children: [
    {
      path: 'login',
      element: <LoginForm />,
    },
  ],
}
