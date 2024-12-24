import React, { useEffect } from "react";
import { ReactComponent as Timer } from "../../assets/svg/timer.svg";
import Question from "./Question";
import { AnimatePresence, motion } from "framer-motion";
import { db } from "../../firebase.config";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";

import { useState } from "react";
import ScoreCard from "./ScoreCard";
import TimesUp from "./TimesUp";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Spinner from "../Spinner";

function QuizQuestions({ displayLeaderboard }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isScoreCard, setIsScoreCard] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showTimesUp, setShowTimesUp] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);

  const { type } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        // Reference to the "quizzes" collection
        const quizzesCollection = collection(db, "quizzes");

        // Query to fetch the document where title == type
        const q = query(quizzesCollection, where("title", "==", type));

        // Fetch documents matching the query
        const querySnapshot = await getDocs(q);

        // Extract the data from the first matching document
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (quizDoc) => {
            const auth = getAuth();
            const user = auth.currentUser; // Ensure the user is authenticated
            if (!user) {
              console.error("User not authenticated");
              return;
            }

            // Reference to the user's document in the "users" collection
            const userDocRef = doc(db, "users", user.uid);

            try {
              // Ensure the "total_score" field exists in the user's document
              await setDoc(
                userDocRef,
                {
                  total_score: 0, // Default value for total_score if not already present
                },
                { merge: true } // Only add total_score if it doesn't exist
              );
            } catch (error) {
              console.error("Error initializing total score:", error);
            }

            // Reference to the "quiz_score" subcollection under the user's document
            const quizScoreDocRef = doc(
              userDocRef,
              "quiz_score",
              quizDoc.id // Use quizDoc.id as the document ID
            );

            try {
              // Set the default document in the "quiz_score" subcollection
              await setDoc(
                quizScoreDocRef,
                {
                  high_score: 0,
                  completed: false,
                },
                { merge: true } // Merge ensures existing data is not overwritten
              );
            } catch (error) {
              console.error("Error initializing quiz score:", error);
            }

            // Get reference to the "questions" subcollection
            const questionCollectionRef = collection(
              db,
              "quizzes",
              quizDoc.id,
              "questions"
            );

            // Fetch all documents in the "questions" subcollection
            const questionsSnapshot = await getDocs(questionCollectionRef);

            // Map over the documents to extract their data
            const questionsArray = questionsSnapshot.docs.map(
              (questionDoc) => ({
                id: questionDoc.id,
                ...questionDoc.data(),
              })
            );

            // Set both states directly here
            setAllQuestions(questionsArray);
            setQuestions(questionsArray);
          });
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [type]); // Depend on "type" to refetch if it changes

  function getShuffledQuestions(questions, n) {
    if (n > questions.length) {
      throw new Error(
        "The requested number of questions exceeds the total number of questions."
      );
    }

    // Shuffle the questions using Fisher-Yates shuffle
    const shuffled = [...questions]; // Copy the array to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return the first n shuffled questions
    return shuffled.slice(0, n);
  }

  const showScoreCard = () => {
    setShowTimesUp(false);
    // setIsScoreCard(true);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => {
        return prev + 1;
      });
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setIsScoreCard(true);
    }
  };

  const retryQuiz = () => {
    setIsScoreCard(false);
    // setQuestions(getShuffledQuestions(allQuestions, 5));
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (isScoreCard) {
    return (
      <ScoreCard
        score={score}
        retryQuiz={retryQuiz}
        displayLeaderboard={displayLeaderboard}
      />
    );
  }

  if (questions.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setIsScoreCard(true)}>
        {showTimesUp && (
          <TimesUp key="times-up" showScoreCard={showScoreCard} />
        )}
      </AnimatePresence>

      <div className="relative flex flex-col items-center justify-center w-full h-screen z-1">
        <motion.div
          className="flex flex-col items-center justify-center w-full h-full gap-6"
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            x: -20,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          <div className="flex justify-center gap-3 w-[36rem]">
            <Timer className="fill-white h-[20px] w-[50px]" />
            <div className="flex flex-col justify-center w-full">
              <div className="relative h-2 bg-white rounded-xl">
                <motion.div
                  onAnimationComplete={() => {
                    setShowTimesUp(true);
                  }}
                  className="absolute w-full h-full origin-left z-1 rounded-xl "
                  initial={{ scaleX: 1, backgroundColor: "green" }}
                  animate={{ scaleX: 0, backgroundColor: "red" }}
                  transition={{
                    duration: 300,
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="w-[36rem] p-6 mx-auto bg-gray-100 rounded-lg">
            <div>
              <Question
                question={currentQuestion.question}
                options={currentQuestion.options}
                answer={currentQuestion.answer}
                handleAnswer={handleAnswer}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default QuizQuestions;
