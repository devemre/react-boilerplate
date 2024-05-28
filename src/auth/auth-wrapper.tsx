import React from "react";
import { useDispatch } from "react-redux";
import http, { clearAuthorizationHeader } from "../http";
import UserStore from "../store/slices/user-store.slice";
import localStorageConfig from "../config/local-storage.config";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  const fetchUser = async () => {
    await http
      .get("/auth/me")
      .then((response) => {
        dispatch(UserStore.actions.setUser(response.data));
      })
      .catch((error) => {
        clearAuthorizationHeader();
        dispatch(UserStore.actions.removeUser());
      });
  };

  React.useEffect(() => {
    setLoading(true);
    if (localStorage.getItem(localStorageConfig.accessToken)) {
      fetchUser();
    } else {
      clearAuthorizationHeader();
      dispatch(UserStore.actions.removeUser());
    }
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="text-3xl min-h-full flex items-center justify-center text-center">
        Loading...
      </div>
    );

  return <>{children}</>;
};

export default React.memo(AuthWrapper);
