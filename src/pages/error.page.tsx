import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
      <h1 className="text-3xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
      <button
        className="border rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default React.memo(Error);
