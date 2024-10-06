import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import About from "../pages/Home";
import Quiz from "../pages/Quiz";
import UserPage from "../pages/UserPage";
import PathConstants from "./PathConstants";

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
];

export const routesUser = [
  { path: PathConstants.USER, element: <UserPage /> },
  { path: PathConstants.QUIZ, element: <Quiz /> },
  { path: PathConstants.BLOGS, element: <Blogs /> },
];

export default routes;
