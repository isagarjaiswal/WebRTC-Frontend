import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const getEmailName = (email) => {
    const username = email.split("@")[0];
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setUserEmail(user.email);
        setUserName(user.displayName || getEmailName(user.email) || "");
      } else {
        setUser(null);
        setUserEmail(null);
        setUserName(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = userCredential;
      setUser(user);
      setUserEmail(user.email);
      setUserName(getEmailName(user.email));
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
  };
  const singinUserWithEmailAndPass = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = userCredential;
      setUser(user);
      setUserEmail(user.email);
      setUserName(getEmailName(user.email));
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  };
  const signinWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );
      const { user } = userCredential;
      setUser(user);
      setUserEmail(user.email);
      setUserName(user.displayName || getEmailName(user.email));
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };
  const signOut = async () => {
    try {
      await firebaseAuth.signOut();
      setUser(null);
      setUserEmail(null);
      setUserName(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
      throw error;
    }
  };
  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        isLoggedIn,
        signOut,
        userEmail,
        user,
        userName,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   getDoc,
//   doc,
//   query,
//   where,
// } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";