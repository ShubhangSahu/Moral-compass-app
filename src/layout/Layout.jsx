import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import PageTranstition from "../components/PageTranstition";
import AnimatedOutlet from "../components/AnimatedOutlet";

function Layout({ user }) {
  return (
    <AnimatePresence mode="wait">
      <PageTranstition>
        <div className="grid grid-rows-[auto_1fr_auto]  min-h-screen w-full">
          <header>
            <NavBar user={user} />
          </header>
          <main className="w-full h-full ">
            <AnimatedOutlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </PageTranstition>
    </AnimatePresence>
  );
}
export default Layout;
