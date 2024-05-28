import React from "react";
import { useDispatch } from "react-redux";
import { clearAuthorizationHeader } from "../http";
import UserStore from "../store/slices/user-store.slice";
import { Link, useNavigate } from "react-router-dom";
import circle from "../assets/circle.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState<boolean>(true);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    });
  }, []);

  const logout = () => {
    clearAuthorizationHeader();
    dispatch(UserStore.actions.removeUser());
    navigate("/login");
  };

  return (
    <nav className="stick bg-gray-50">
      <ul className="flex flex-col">
        <li className="p-2 hover:bg-blue-500 hover:text-white flex justify-center items-center">
          {expanded ? (
            <h1 className="text-2xl px-4 py-2 font-bold">Logo</h1>
          ) : (
            <h1 className="text-2xl px-4 py-2 font-bold">L</h1>
          )}
        </li>
        <hr className="border border-w-1 border-gray-200" />
        <li className="hover:bg-blue-500 hover:text-white transition-all">
          <Link to="/dashboard" className="flex items-center px-4 py-2">
            <img src={circle} alt="circle" className="w-6 h-6" />
            {expanded && <div className="pl-2">Dashboard</div>}
          </Link>
        </li>
        <li className="hover:bg-blue-500 hover:text-white transition-all">
          <Link to="/contacts/2" className="flex items-center px-4 py-2">
            <img src={circle} alt="circle" className="w-6 h-6" />
            {expanded && <div className="pl-2">Undefined (404)</div>}
          </Link>
        </li>
        <li
          className="flex items-center px-4 py-2 hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
          onClick={logout}
        >
          <img src={circle} alt="circle" className="w-6 h-6" />
          {expanded && <p className="pl-2">Logout</p>}
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
