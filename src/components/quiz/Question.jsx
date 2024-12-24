// src/components/Question.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Question = ({ question, options, answer, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  console.log(answer);

  const handleOptionChange = (option) => {
    if (!answered) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    setAnswered(true);
    handleAnswer(selectedOption === answer);
    setAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{question}</h2>
      <div className="mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`block w-full mt-2 p-2 hover:bg-gray-300 border rounded-lg ${
              selectedOption === option
                ? "bg-blue-500 text-white hover:bg-blue-500"
                : "bg-gray-200"
            }`}
            onClick={() => handleOptionChange(option)}
            // disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 ">
        <button
          disabled={answered}
          onClick={handleSubmit}
          className="mt-10 text-white bg-green-500 btn hover:bg-green-600"
        >
          Next
        </button>
        {/* <button
          disabled={answered}
          onClick={handleSubmit}
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded-lg"
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default Question;
