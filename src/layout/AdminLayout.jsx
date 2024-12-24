import AdminNavbar from "./AdminNavbar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  min-h-screen w-full">
      <header>
        <AdminNavbar />
      </header>
      <main className="container w-full h-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout;
