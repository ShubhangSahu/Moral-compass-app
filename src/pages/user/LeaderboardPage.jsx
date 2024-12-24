import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config"; // Ensure your firebase config is imported correctly
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Get a reference to the 'users' collection
        const usersCollection = collection(db, "users");

        // Create a query to get the top 10 users based on the 'total_score' field in descending order
        const leaderboardQuery = query(
          usersCollection,
          orderBy("total_score", "desc"), // Ensure total_score is ordered in descending order
          limit(10) // Limit to 10 top scores
        );

        // Fetch the data from Firestore
        const querySnapshot = await getDocs(leaderboardQuery);

        // Map through the documents and extract the required fields
        const leaderboardData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // This is the user's UID (document ID)
          email: doc.data().email || "Unknown Email", // User's email
          name: doc.data().name || "Anonymous", // User's name
          total_score: doc.data().total_score || 0, // User's total score
        }));

        setLeaderboard(leaderboardData); // Store the fetched leaderboard data
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="w-full h-screen text-black ">
      <div className="py-8 mx-auto md:w-[70%] ">
        <h1 className="mb-8 text-4xl font-bold text-center">Leaderboard</h1>

        {loading ? (
          <div className="text-xl text-center">Loading...</div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-lg text-left">Rank</th>
                  <th className="px-6 py-3 text-lg text-left">Name</th>
                  <th className="px-6 py-3 text-lg text-left">Email</th>
                  <th className="px-6 py-3 text-lg text-left">Total Score</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((user, index) => (
                  <tr key={user.id} className="border-t ">
                    <td className="px-6 py-3">{index + 1}</td>
                    <td className="px-6 py-3">{user.name}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    <td className="px-6 py-3">{user.total_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
