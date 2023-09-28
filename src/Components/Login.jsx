import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider(); // Fix typo: Change "gitHubProvider" to "githubProvider"

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res);
        const loginUser = res.user;
        setUser(loginUser);
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-semibold">Login</h2>
        {user && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold">
              User: {user?.displayName}
            </h2>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        )}

        <div className="mt-6">
          {user ? (
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                onClick={handleGoogleSignIn}
                className="w-full px-4 py-2 mt-2 font-semibold text-white rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline-fuchsia"
              >
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="w-full px-4 py-2 mt-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:shadow-outline-gray"
              >
                GitHub
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
