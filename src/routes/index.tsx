import React from "react";

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Root from "./root.route";
import { Dashboard, Error, Login } from "../pages";
import PrivateRoutes from "./private-routes";
import UnauthenticatedRoutes from "./unauthenticated-routes";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoutes />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Root />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <UnauthenticatedRoutes />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default React.memo(AppRouter);
