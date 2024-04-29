import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import localStorageConfig from "../config/local-storage.config";

const PrivateRoutes = () => {
  const accessToken = localStorage.getItem(localStorageConfig.accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default React.memo(PrivateRoutes);
