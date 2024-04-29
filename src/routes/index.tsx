import React from "react";

import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Root from "./root.route";
import { Dashboard, Error, Login } from "../pages";
import { useSelector, useStore } from "react-redux";
import AppStore from "../store";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default React.memo(AppRouter);
