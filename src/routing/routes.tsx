import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        // Wrap a layout route around "users" route to protect it from not-logged-in users
        element: <PrivateRoutes />,
        // protected routes
        children: [
          {
            path: "users",
            element: <UsersPage />,
            children: [{ path: ":id", element: <UserDetail /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
