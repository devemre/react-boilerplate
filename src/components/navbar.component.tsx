import React from "react";
import { useDispatch } from "react-redux";
import { clearAuthorizationHeader } from "../http";
import UserStore from "../store/slices/user-store.slice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    clearAuthorizationHeader();
    dispatch(UserStore.actions.removeUser());
    navigate("/login");
  };

  return (
    <nav className="stick bg-gray-50">
      <ul className="flex flex-col">
        <li className="p-2 hover:bg-blue-500 hover:text-white">
          <h1 className="text-2xl px-4 py-2 font-bold">Logo</h1>
        </li>
        <hr className="border border-w-1 border-gray-200" />
        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
          <a href={`/dashboard`}>Dashboard</a>
        </li>
        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
          <a href={`/contacts/2`}>Undefined (404)</a>
        </li>
        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all">
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
