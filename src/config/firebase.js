// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj8TyZR6themQOxvwR1Y7mExsFwsSRGkg",
  authDomain: "fir-c74da.firebaseapp.com",
  projectId: "fir-c74da",
  storageBucket: "fir-c74da.firebasestorage.app",
  messagingSenderId: "867311927372",
  appId: "1:867311927372:web:4693098c4755cd740434e9",
  measurementId: "G-9FRE0DXV8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);