import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const UnauthenticatedRoutes = () => {
  const accessToken = localStorage.getItem("boilerplate_token");
  return accessToken && window.location.pathname === "/login" ? (
    <Navigate to="/dashboard" />
  ) : (
    <Outlet />
  );
};

export default React.memo(UnauthenticatedRoutes);
