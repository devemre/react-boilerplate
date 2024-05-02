import React from "react";
import { useDispatch } from "react-redux";
import { clearAuthorizationHeader } from "../http";
import UserStore from "../store/slices/user-store.slice";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button.component";

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
        <li className="hover:bg-blue-500 hover:text-white transition-all">
          <Link to="/dashboard">
            <div className="px-4 py-2">Dashboard</div>
          </Link>
        </li>
        <li className="hover:bg-blue-500 hover:text-white transition-all">
          <Link to="/contacts/2">
            <div className="px-4 py-2">Undefined (404)</div>
          </Link>
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
