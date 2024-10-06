import NavBar from "../layout/NavBar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";

function User() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  min-h-screen w-full">
      <header>
        <NavBar home={false} />
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
export default User;
