import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import localStorageConfig from "../config/local-storage.config";

const UnauthenticatedRoutes = () => {
  const accessToken = localStorage.getItem(localStorageConfig.accessToken);
  return accessToken && window.location.pathname === "/login" ? (
    <Navigate to="/dashboard" />
  ) : (
    <Outlet />
  );
};

export default React.memo(UnauthenticatedRoutes);
