import { Outlet } from "react-router-dom";
import { Login } from "../pages";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("boilerplate_token");
  return accessToken ? <Outlet /> : <Login />;
};

export default PrivateRoute;
