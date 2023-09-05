// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJSiBgPytTDX0TQMg3k-CJ-UqTo1S1JzU",
  authDomain: "movie-library-eaf36.firebaseapp.com",
  projectId: "movie-library-eaf36",
  storageBucket: "movie-library-eaf36.appspot.com",
  messagingSenderId: "865589225766",
  appId: "1:865589225766:web:6c4956785a5d5f5a9f39e7",
  measurementId: "G-T5EXW1Y0CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, analytics };
