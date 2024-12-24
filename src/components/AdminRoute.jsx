import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { db } from "../firebase.config";
import PathConstants from "../routes/PathConstants";
import useAuthStatus from "../hooks/useAuthStatus";
import { getAuth } from "firebase/auth";

function AdminRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(null); // `null` for loading state
  const { loggedIn, isLoading } = useAuthStatus(); // Use the custom hook

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!loggedIn) {
        setIsAdmin(false); // If not logged in, not admin
        return;
      }

      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userDocRef = doc(db, "users", user.uid); // Reference the user's Firestore document
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setIsAdmin(userData.role === "admin"); // Check if role is "admin"
          } else {
            setIsAdmin(false); // If no user document exists, they're not admin
          }
        }
      } catch (error) {
        console.error("Error checking admin role:", error);
        setIsAdmin(false);
      }
    };

    checkAdminRole();
  }, [loggedIn]); // Re-run if loggedIn changes

  if (isLoading || isAdmin === null) {
    // Show a loading spinner or placeholder while checking
    return <div>Loading...</div>;
  }

  if (!loggedIn || !isAdmin) {
    // Redirect non-admin users or not logged-in users

    return <div>hi</div>;
  }

  // Render children if the user is an admin
  return <>{children}</>;
}

export default AdminRoute;
