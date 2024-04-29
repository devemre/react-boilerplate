import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const accessToken = localStorage.getItem("boilerplate_token");
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default React.memo(PrivateRoutes);
