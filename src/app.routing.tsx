import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/home/HomePage";
import { TestPage } from "./pages/test/TestPage";

/** Router. */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/test',
        element: <TestPage />
      }
    ]
  },
]);
