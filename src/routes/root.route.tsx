import { useSelector, useStore } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AppStore from "../store";
import http from "../http";
import { useEffect } from "react";
import { fetchUser } from "../services/auth.service";
import PrivateRoute from "./private-route";

export default function Root() {
  const store = useStore();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("boilerplate_token");
  const user = useSelector((state: AppStore.RootState) => state.user.user);

  useEffect(() => {
    if (accessToken) {
      saveUser();
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [accessToken]);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const saveUser = async () => {
    console.log("here");
    const response = await fetchUser();
    store.dispatch({ type: "user/setUser", payload: response });
  };

  const logout = () => {
    localStorage.removeItem("boilerplate_token");
    http.defaults.headers.common["Authorization"] = null;
    store.dispatch({ type: "user/clearUser" });
    navigate("/login");
  };

  return (
    <>
      <div className="flex min-h-screen">
        <nav className="stick bg-gray-50">
          <ul className="flex flex-col">
            <li className="p-2 hover:bg-blue-500 hover:text-white">
              <h1 className="text-2xl px-4 py-2 font-bold">Logo</h1>
            </li>
            <hr className="border border-w-1 border-gray-200" />
            {!user ? (
              <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
                <a href={`/login`}>Login</a>
              </li>
            ) : (
              <>
                <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
                  <a href={`/dashboard`}>Dashboard</a>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
                  <a href={`/contacts/2`}>Undefined</a>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="flex-1 p-2">
          <PrivateRoute />
        </div>
      </div>
    </>
  );
}
