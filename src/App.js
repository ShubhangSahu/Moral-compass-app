import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import routes, { adminRoutes, routesUser } from "./routes/index";
import Page404 from "./pages/Page404";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PathConstants from "./routes/PathConstants";
import PageTranstition from "./components/PageTranstition";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <PageTranstition>
          <Layout />
        </PageTranstition>
      ),
      path: PathConstants.HOME,
      children: routes,
      errorElement: <Page404 />,
    },
    {
      element: (
        <PageTranstition>
          <Layout user={true} />
        </PageTranstition>
      ),
      path: PathConstants.USER,
      children: routesUser,
      errorElement: <Page404 />,
    },
    {
      element: (
        <PageTranstition>
          <AdminLayout />
        </PageTranstition>
      ),
      path: PathConstants.ADMIN,
      children: adminRoutes,
      errorElement: <Page404 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
