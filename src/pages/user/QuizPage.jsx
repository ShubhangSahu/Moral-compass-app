import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const categories = [
  { id: 1, name: "History", icon: "📜" },
  { id: 2, name: "Preamble", icon: "📖" },
  { id: 3, name: "Fundamental Rights", icon: "⚖️" },
  { id: 4, name: "Directive Principles", icon: "🏛️" },
  { id: 5, name: "Amendments", icon: "✍️" },
  { id: 6, name: "Schedules", icon: "📂" },
  { id: 7, name: "Judicial Interpretations", icon: "⚙️" },
  { id: 8, name: "Indian Federalism", icon: "🌐" },
  { id: 9, name: "Election Process", icon: "🗳️" },
  { id: 10, name: "Emergency Provisions", icon: "🚨" },
];

const QuizPage = () => {
  return (
    <div className="p-10 space-y-10">
      {/* Categories Section */}
      <section className="categories">
        <h2 className="mb-6 text-3xl font-bold text-center">Play Quiz</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to={`${PathConstants.QUIZSTART}/history`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[0].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[0].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/preamble`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[1].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[1].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/fundamental-rights`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[2].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[2].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/directive-principles`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[3].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[3].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>

          <Link
            to={`${PathConstants.QUIZSTART}/amendments`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[4].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[4].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/schedules`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[5].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[5].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/judicial-interpretations`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[6].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[6].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/indian-federalism`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[7].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[7].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/election-process`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[8].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[8].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
          <Link
            to={`${PathConstants.QUIZSTART}/emergency-provisions`}
            className="flex items-center justify-between gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-center justify-start gap-10">
              {/* Icon */}
              <div className="text-6xl">{categories[9].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold">{categories[9].name}</h3>
            </div>

            {/* Play Button SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white transition-transform duration-300 opacity-100 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default QuizPage;
