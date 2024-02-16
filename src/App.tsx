import { RouterProvider } from "react-router-dom";
import { router } from "./app.routing";
import { UserProvider } from "./hooks/useUser";

export function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}
