import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

function BackButton() {
  return (
    <div className="absolute w-full text-center z-1000 bottom-10">
      <Link to={PathConstants.QUIZ} className=" btn btn-primary">
        Back to Quiz
      </Link>
    </div>
  );
}

export default BackButton;
