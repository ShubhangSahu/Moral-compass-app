import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuizQuestions from "../../components/quiz/QuizQuestions";
import Leaderboard from "../../components/quiz/Leaderboard";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import PathConstants from "../../routes/PathConstants";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const onClickStart = () => {
    setStarted(true);
  };

  const removeLeaderboard = () => {
    setStarted(false);
    setShowLeaderboard(false);
  };

  const displayLeaderboard = () => {
    setShowLeaderboard(true);
  };

  useEffect(() => {}, []);

  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {!started && !showLeaderboard && (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-10"
          >
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1 },
              }}
              className="relative btn bg-base-100 hover:bg-white w-fit"
              onClick={onClickStart}
            >
              Start
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1 },
              }}
            >
              <Link
                to={PathConstants.LEADERBOARDS}
                className="btn bg-base-100 hover:bg-white w-fit"
              >
                Leaderboards
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
      {started && !showLeaderboard && (
        <QuizQuestions displayLeaderboard={displayLeaderboard} />
      )}
      {showLeaderboard && <Leaderboard removeLeaderboard={removeLeaderboard} />}
      <BackButton />
    </>
  );
};

export default Quiz;
