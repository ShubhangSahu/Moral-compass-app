import React from "react";
import { motion } from "framer-motion";

const Leaderboard = ({ removeLeaderboard }) => {
  const leaders = [
    { name: "Alice Johnson", score: 1200 },
    { name: "Bob Smith", score: 1150 },
    { name: "Charlie Brown", score: 1100 },
    { name: "Dana White", score: 1050 },
    { name: "Eve Black", score: 1000 },
  ];

  return (
    <>
      <motion.div
        className="absolute bg-white rounded-full size-10 top-5 left-5 "
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          duration: 0.1,
          type: "spring",
        }}
      >
        <div
          className="flex items-center justify-center w-full h-full cursor-pointer"
          onClick={() => removeLeaderboard()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="back-button"
          >
            <path d="M19 12H5"></path>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center h-screen p-6 bg-transparent"
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="mb-6 text-4xl font-bold text-black">Leaderboards</h1>
        <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-200">
            {leaders.map((leader, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-6 py-4 transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="text-lg font-bold text-gray-800">
                    #{index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{leader.name}</p>
                  </div>
                </div>
                <div className="font-semibold text-gray-900">
                  {leader.score}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Leaderboard;
