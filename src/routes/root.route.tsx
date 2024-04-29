import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function Root() {
  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />
        <div className="flex-1 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
