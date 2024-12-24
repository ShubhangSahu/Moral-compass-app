import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import bg from "../../assets/images/background.jpg";
import PathConstants from "../../routes/PathConstants";

function UserPage() {
  const auth = getAuth();
  const userName = auth.currentUser?.displayName || "User";
  const userPhoto =
    auth.currentUser?.photoURL || "https://via.placeholder.com/150";

  return (
    <div className="min-h-screen text-black bg-gray-100">
      {/* Header Section */}
      <div
        className="relative z-0 bg-center bg-cover h-[500px] bg-gradient-to-l "
        style={{
          backgroundImage: `url(${bg})`, // Replace with your theme-appropriate image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-100"></div>{" "}
        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-start h-full text-white">
          <h1 className="mt-6 text-4xl font-bold">
            {new Date().getHours() < 12 ? "Good Morning" : "Welcome"},{" "}
            {userName}!
          </h1>
        </div>
      </div>

      {/* Dashboard Tiles */}
      <div className="grid grid-cols-2 gap-6 p-6 my-8">
        <Link
          to={PathConstants.QUIZ}
          className="flex gap-5 p-6 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700"
        >
          <div className="pr-4 border-r-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path d="M9 18h6M10 21h4M12 2a6.5 6.5 0 016.5 6.5c0 2.2-1.17 4.06-2.89 5.15-.39.24-.61.67-.61 1.13V16H9v-1.22c0-.46-.23-.89-.61-1.13A6.472 6.472 0 015.5 8.5 6.5 6.5 0 0112 2z" />
              <line x1="12" y1="0" x2="12" y2="1.5" />
              <line x1="16.95" y1="3.05" x2="15.73" y2="4.27" />
              <line x1="19.5" y1="8.5" x2="18" y2="8.5" />
              <line x1="16.95" y1="13.95" x2="15.73" y2="12.73" />
              <line x1="12" y1="16.5" x2="12" y2="15" />
              <line x1="7.05" y1="13.95" x2="8.27" y2="12.73" />
              <line x1="4.5" y1="8.5" x2="6" y2="8.5" />
              <line x1="7.05" y1="3.05" x2="8.27" y2="4.27" />
            </svg>
          </div>
          <div>Take a Quiz</div>
        </Link>
        <Link
          to={PathConstants.LEADERBOARDS}
          className="flex gap-5 p-6 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-700"
        >
          <div className="pr-4 border-r-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
              <path d="M9 6v12M15 6v12M21 6v12" />
            </svg>
          </div>
          <div>View Leaderboards</div>
        </Link>
        <Link
          to={PathConstants.BLOGS}
          className="flex gap-5 p-6 text-white bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-700"
        >
          <div className="pr-4 border-r-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path d="M4 2h16c1.104 0 1.99.896 1.99 2L22 20c0 1.104-.896 2-1.99 2H4c-1.104 0-1.99-.896-1.99-2L2 4c0-1.104.896-2 1.99-2z" />
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div>Read Blogs</div>
        </Link>
      </div>

      {/* Progress Tracker */}
      {/* <div className="p-6 my-6">
        <h2 className="mb-2 text-2xl font-semibold">Your Progress</h2>
        <div className="relative w-full h-6 bg-gray-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-6 bg-blue-600 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <p className="mt-2 text-gray-400">50% of quizzes completed</p>
      </div> */}

      {/* Recommended Content */}
      {/* <div className="p-6 my-6">
        <h2 className="mb-4 text-2xl font-semibold">Recommended For You</h2>
        <ul className="space-y-3">
          <li>
            <Link to="/quiz/1" className="text-blue-400 hover:underline">
              Take the "Fundamental Rights" Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/blog/constitution-basics"
              className="text-blue-400 hover:underline"
            >
              Read: Constitution Basics for Beginners
            </Link>
          </li>
          <li>
            <Link to="/quiz/2" className="text-blue-400 hover:underline">
              Take the "Directive Principles" Quiz
            </Link>
          </li>
        </ul>
      </div> */}

      {/* Activity Feed */}
      {/* <div className="p-6 my-6">
        <h2 className="mb-4 text-2xl font-semibold">Recent Activity</h2>
        <ul className="pl-5 space-y-2 text-gray-300 list-disc">
          <li>Completed "Fundamental Duties" Quiz with a score of 80%</li>
          <li>Earned the "Preamble Master" Badge</li>
          <li>Read "Introduction to the Indian Constitution" Blog</li>
        </ul>
      </div> */}

      {/* Badges Section */}
      {/* <div className="p-6 my-6">
        <h2 className="mb-4 text-2xl font-semibold">Your Badges</h2>
        <div className="flex gap-4">
          <img
            src="/badges/quiz_master.png"
            alt="Quiz Master Badge"
            className="w-16 h-16"
          />
          <img
            src="/badges/blog_reader.png"
            alt="Blog Reader Badge"
            className="w-16 h-16"
          />
        </div>
      </div> */}
    </div>
  );
}

export default UserPage;
