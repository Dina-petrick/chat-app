// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC18Lh6ySJgbCKfBV1pk9WAVUytsqzdFVc",
  authDomain: "chatapp-c8627.firebaseapp.com",
  projectId: "chatapp-c8627",
  storageBucket: "chatapp-c8627.appspot.com",
  messagingSenderId: "474001423485",
  appId: "1:474001423485:web:b3fb8ec5908cfd718dc514",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
