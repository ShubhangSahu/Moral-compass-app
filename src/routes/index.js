import PrivateRoute from "../components/PrivateRoute";
import Blogs from "../pages/user/Blogs";
import Home from "../pages/home/Home";
import About from "../pages/home/Home";
import Quiz from "../pages/user/Quiz";
import UserPage from "../pages/user/UserPage";
import PathConstants from "./PathConstants";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import History from "../pages/user/blogs-categories/History";
import Preamble from "../pages/user/blogs-categories/Preamble";
import Rights from "../pages/user/blogs-categories/Rights";
import Directives from "../pages/user/blogs-categories/Directives";
import Amendments from "../pages/user/blogs-categories/Amendments";
import Schedules from "../pages/user/blogs-categories/Schedules";
import Judicial from "../pages/user/blogs-categories/Judicial";
import Federalism from "../pages/user/blogs-categories/Federalism";
import Election from "../pages/user/blogs-categories/Election";
import Emergency from "../pages/user/blogs-categories/Emergency";
import QuizPage from "../pages/user/QuizPage";
import LeaderboardPage from "../pages/user/LeaderboardPage";
import AdminRoute from "../components/AdminRoute";
import AdminPage from "../pages/admin/AdminPage";
import ForgotPassword from "../pages/auth/ForgotPassword";

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.LOGIN, element: <Login /> },
  { path: PathConstants.SIGNUP, element: <SignUp /> },
  { path: PathConstants.FORGOTPASSWORD, element: <ForgotPassword /> },
];

export const adminRoutes = [
  {
    path: PathConstants.ADMIN,
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    ),
  },
];

export const routesUser = [
  {
    path: PathConstants.USER,
    element: (
      <PrivateRoute>
        <UserPage />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.QUIZ,
    element: (
      <PrivateRoute>
        <QuizPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${PathConstants.QUIZSTART}/:type`,
    element: (
      <PrivateRoute>
        <Quiz />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.BLOGS,
    element: (
      <PrivateRoute>
        <Blogs />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.LEADERBOARDS,
    element: (
      <PrivateRoute>
        <LeaderboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.HISTORY,
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.PREAMBLE,
    element: (
      <PrivateRoute>
        <Preamble />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.RIGHTS,
    element: (
      <PrivateRoute>
        <Rights />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.DIRECTIVE,
    element: (
      <PrivateRoute>
        <Directives />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.AMENDMENTS,
    element: (
      <PrivateRoute>
        <Amendments />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.SCHEDULES,
    element: (
      <PrivateRoute>
        <Schedules />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.JUDICIAL,
    element: (
      <PrivateRoute>
        <Judicial />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.FEDERALISM,
    element: (
      <PrivateRoute>
        <Federalism />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.ELECTION,
    element: (
      <PrivateRoute>
        <Election />
      </PrivateRoute>
    ),
  },
  {
    path: PathConstants.EMERGENCY,
    element: (
      <PrivateRoute>
        <Emergency />
      </PrivateRoute>
    ),
  },
];

export default routes;
