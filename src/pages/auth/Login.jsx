import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PathConstants from "../../routes/PathConstants";
import { toast } from "react-toastify";
import OAuth from "../../components/OAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        const userId = userCredential.user.uid;
        const userDocRef = doc(db, "users", userId); // Reference to the user document
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();

          if (userData.role === "admin") {
            toast.success("Logged in as Admin");
            navigate(PathConstants.ADMIN); // Redirect to admin page
          } else {
            navigate(PathConstants.USER);
          }
        } else {
          toast.error("User document not found");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Wrong User Credentials");
    }
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const auth = getAuth();
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     if (userCredential.user) {
  //       navigate(PathConstants.USER);
  //     }
  //   } catch (error) {
  //     toast.error("Wrong User Credentials");
  //   }
  // };

  const { email, password } = formData;

  return (
    <div className="flex items-center justify-center min-h-full ">
      <div className="w-2/3 max-w-lg p-5 border-[1px] border-black glass drop-shadow-lg">
        {/* {" "} */}
        {/* LEFT SIDE BEGIN ============== */}
        <div className="my-10 text-center">
          <h2 className="text-3xl font-extrabold text-base-content">Login</h2>
        </div>
        <div className="flex justify-center gap-5 my-2 mb-12">
          <a
            href="/"
            className="w-12 h-12 p-3 bg-white border-blue-600 rounded-full shadow-md hover:bg-blue-600 group"
          >
            <FaFacebookF className="font text-[20px] text-blue-600 group-hover:text-white" />
          </a>
          <OAuth />
        </div>
        <p className="my-3 text-center opacity-50">or use your account</p>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-center gap-3">
            <label className="flex items-center gap-2 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                value={email}
                className="grow"
                placeholder="Email"
                onChange={onChange}
                id="email"
              />
            </label>
            <label className="flex items-center gap-2 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                value={password}
                className="grow"
                placeholder="password"
                onChange={onChange}
                id="password"
              />
            </label>

            <div>
              <Link className="opacity-50 text-black hover:opacity-80 underline text-[17px] ">
                Forgot your password?
              </Link>
            </div>

            <div>
              <button type="submit" className="w-24 mt-6 btn-accent btn">
                Log In
              </button>
            </div>
            <div>
              <p>
                <span className="opacity-50">To register. </span>
                <Link
                  className="text-black underline opacity-50 hover:opacity-80"
                  to={PathConstants.SIGNUP}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
