import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PathConstants from "../routes/PathConstants";

function NavBar({ home = true }) {
  return (
    <nav className="navbar bg-base-300 text-base-content glass">
      <div className="container flex justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center ">
          <Link to="/">
            <FaGithub className="p-1 text-4xl" />
          </Link>
          <div className="p-1 gap-x-1">
            <Link to="/" className="text-2xl font-bold">
              Moral Compass
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          {home ? (
            <>
              <Link to="/" className="flex flex-wrap btn btn-ghost ">
                <span>Get</span>
                <span>Started</span>
              </Link>
              <Link to="/login" className="btn btn-accent">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to={PathConstants.BLOGS}
                className="flex flex-wrap btn btn-ghost "
              >
                Blogs
              </Link>
              <Link to={PathConstants.QUIZ} className="w-16 btn btn-accent">
                Quiz
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
