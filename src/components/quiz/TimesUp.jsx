import React from "react";
import { motion } from "framer-motion";

const TimesUp = ({ showScoreCard }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen"
      initial={{
        backgroundColor: "rgba(0,0,0,0)",
      }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
      transition={{
        duration: 0.5,
        delayChildren: 0.5,
      }}
      exit={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <motion.div
        className="font-bold tracking-wide text-center text-white uppercase text-8xl"
        onAnimationComplete={() => setTimeout(() => showScoreCard(), 1000)}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        Time's Up!
      </motion.div>
    </motion.div>
  );
};

export default TimesUp;
