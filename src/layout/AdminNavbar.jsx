import React from "react";
import PathConstants from "../routes/PathConstants";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>hi</div>
    // <nav className=" bg-base-300 navbar text-base-content">
    //   <div className="flex justify-between w-full px-6">
    //     {/* Logo */}
    //     <Link to={PathConstants.ADMIN} className="flex items-center ">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 50 50"
    //           width="50"
    //           height="50"
    //         >
    //           <g fill="#007ACC" transform="scale(2.5) translate(-7, -1)">
    //             <rect x="15" y="5" width="5" height="10" fill="black" />
    //             <line
    //               x1="12"
    //               y1="5"
    //               x2="23"
    //               y2="5"
    //               stroke="black"
    //               stroke_width="1.5"
    //             />
    //             <circle cx="12" cy="15" r="2" fill="black" />
    //             <circle cx="23" cy="15" r="2" fill="black" />
    //           </g>
    //         </svg>
    //       </div>
    //       <div className="p-1 gap-x-1">
    //         <div className="text-2xl font-bold text-black ">ConstiQuest</div>
    //       </div>
    //     </Link>

    //     <div className="flex items-center justify-end gap-3">
    //       {user ? (
    //         <>
    //           <Link
    //             to={PathConstants.BLOGS}
    //             className="text-black btn btn-ghost"
    //           >
    //             Blogs
    //           </Link>
    //           <Link
    //             to={PathConstants.QUIZ}
    //             className="text-black btn btn-ghost"
    //           >
    //             Quiz
    //           </Link>
    //           <Link
    //             to={PathConstants.LEADERBOARDS}
    //             className="text-black btn btn-ghost"
    //           >
    //             Leaderboards
    //           </Link>
    //           <button className=" btn btn-primary" onClick={onLogOut}>
    //             Log Out
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link
    //             to={PathConstants.HOME}
    //             className="flex flex-wrap btn btn-ghost "
    //           >
    //             <span>Get</span>
    //             <span>Started</span>
    //           </Link>
    //           <Link to={PathConstants.LOGIN} className="btn btn-accent">
    //             Login
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
}

export default AdminNavbar;
