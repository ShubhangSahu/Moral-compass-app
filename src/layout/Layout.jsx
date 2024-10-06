import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  min-h-screen w-full">
      <header>
        <NavBar />
      </header>
      <main className="container w-full h-full mx-auto">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
