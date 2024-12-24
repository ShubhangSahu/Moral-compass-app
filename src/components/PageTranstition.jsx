import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      className="w-full min-h-screen"
      initial={{
        opacity: 0,
        clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      }}
      animate={{
        opacity: 1,
        clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      }}
      exit={{
        clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
