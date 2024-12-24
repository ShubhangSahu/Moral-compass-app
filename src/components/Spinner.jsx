import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Spinner = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen"
        initial={{
          backgroundColor: "rgba(0,0,0,0)",
        }}
        animate={{
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
        transition={{
          duration: 0.5,
        }}
        exit={{
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <motion.div
          className="w-16 h-16 border-8 border-white border-solid rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Spinner;
