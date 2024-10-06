import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import routes, { routesUser } from "./routes/index";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: routes,
      errorElement: <Page404 />,
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <User />,
      path: "/user",
      children: routesUser,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
