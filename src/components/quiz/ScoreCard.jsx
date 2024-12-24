import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase.config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import PathConstants from "../../routes/PathConstants";

const ScoreCard = ({ score, retryQuiz, displayLeaderboard }) => {
  const { type } = useParams();
  const [showNewBest, setShowNewBest] = useState(false);

  useEffect(() => {
    const fetchScoreDetails = async () => {
      try {
        const quizzesCollection = collection(db, "quizzes");

        const q = query(quizzesCollection, where("title", "==", type));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (quizDoc) => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
              console.error("User not authenticated");
              return;
            }

            const userDocRef = doc(db, "users", user.uid);

            const quizScoreDocRef = doc(userDocRef, "quiz_score", quizDoc.id);

            try {
              const results = await getDoc(quizScoreDocRef);

              if (results.exists()) {
                const maxScoreFromDB = results.data().high_score;
                if (score > maxScoreFromDB) {
                  setShowNewBest(true); // Show "New Best"

                  try {
                    // Update the high score for this quiz
                    await updateDoc(quizScoreDocRef, {
                      high_score: score,
                    });

                    // Now, update the total score
                    const quizScoreCollectionRef = collection(
                      userDocRef,
                      "quiz_score"
                    ); // Reference to the quiz_score subcollection

                    // Fetch all quiz score documents for the user
                    const querySnapshot = await getDocs(quizScoreCollectionRef);

                    let totalScore = 0; // Initialize total score to 0

                    // Loop through each document in the quiz_score subcollection
                    querySnapshot.forEach((doc) => {
                      const highScore = doc.data().high_score; // Access high_score from each quiz score document
                      totalScore += highScore; // Add the high score to the total score
                    });

                    // Now update the total_score in the user document
                    await updateDoc(userDocRef, {
                      total_score: totalScore, // Update the total_score field
                    });
                  } catch (error) {
                    console.error(
                      "Error updating high score and total score:",
                      error
                    );
                  }
                }
              } else {
                console.log("Quiz score document not found");
              }
            } catch (error) {
              console.error("Error fetching quiz score:", error);
            }
          });
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchScoreDetails();
  });

  return (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      initial={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        opacity: 0,
      }}
      animate={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        className="relative w-1/2 p-1 rounded-lg select-none h-1/4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 lg:w-1/3"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* "New Best" Label with Fade-In from Top */}
        {showNewBest && (
          <motion.div
            className="absolute w-full top-[-100px] text-center transform rotate-[-45deg] text-white text-6xl font-bold px-6 py-2 rounded-lg"
            style={{
              textShadow: `-2px -2px 0px red, 2px -2px 0px red, -2px 2px 0px red, 2px 2px 0px red`, // Red outline on each letter
            }}
            initial={{
              opacity: 0, // Start invisible
              y: -50, // Start above the screen
            }}
            animate={{
              opacity: 1, // Fade in
              y: 0, // Move to its final position
            }}
            transition={{
              duration: 1, // Smooth fade-in effect
              ease: "easeOut", // Smooth easing
            }}
          >
            New Best!
          </motion.div>
        )}

        {/* Inner content with a clean background */}
        <div className="flex flex-col w-full h-full gap-10 bg-gray-800 rounded-lg select-none">
          <div className="flex items-center justify-center w-full h-1/2">
            <h1 className="font-sans text-5xl font-bold text-white">
              Score: {score}
            </h1>
          </div>
          <div className="flex items-center justify-around bg-transparent">
            <motion.button
              className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-600 rounded-md select-none hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              onClick={retryQuiz}
            >
              {/* SVG for Retry Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 9a7.5 7.5 0 0113.65-3.4m0 0L18 8.25m0-2.65h-3.75M4.5 15a7.5 7.5 0 0013.65 3.4m0 0L18 15.75m0 2.65h-3.75"
                />
              </svg>
              <span>Retry</span>
            </motion.button>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              <Link
                to={PathConstants.LEADERBOARDS}
                className="px-4 py-2 space-x-2 text-white bg-orange-600 rounded-md select-none hover:bg-orange-700"
              >
                Leaderboards
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScoreCard;
