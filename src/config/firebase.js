// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPCTtjjgLG5oG80lQRpxVjD6QtXA_nrU",
  authDomain: "cinequest-608fe.firebaseapp.com",
  projectId: "cinequest-608fe",
  storageBucket: "cinequest-608fe.firebasestorage.app",
  messagingSenderId: "417988244914",
  appId: "1:417988244914:web:bcfe06636ba7cd697ce0ab",
  measurementId: "G-79JJJTCMQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };