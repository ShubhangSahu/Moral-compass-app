import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

function Page404() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl">Error: Page not Found :(</h1>
        <p className="text-xl">Click the link below to go to Home page</p>
        <Link to={PathConstants.HOME} className="btn btn-primary">
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default Page404;
