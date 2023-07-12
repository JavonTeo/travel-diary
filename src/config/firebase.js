// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGRv3ED9uUKjRVQDQLGE6w8NpoINSQk3Y",
  authDomain: "travel-diary-4385d.firebaseapp.com",
  projectId: "travel-diary-4385d",
  storageBucket: "travel-diary-4385d.appspot.com",
  messagingSenderId: "132569783381",
  appId: "1:132569783381:web:dc23caf74e71e43ad688dc",
  measurementId: "G-R94SB9XXPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);