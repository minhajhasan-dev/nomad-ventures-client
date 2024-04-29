/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

// creating a context
export const AuthContext = createContext();

// authentication related code will be here
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  // authentication related code will be here too
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  //sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out code

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // use observer to check user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(user);
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // context data will be here
  const authInfo = { googleSignIn, user, loading, setLoading, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
