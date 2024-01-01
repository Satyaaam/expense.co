// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore'; // Fix the typo here
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCos5yVJ80M_vHZjeZp58QBUN1PN8UJQls",
  authDomain: "expensecalc-1f23e.firebaseapp.com",
  projectId: "expensecalc-1f23e",
  storageBucket: "expensecalc-1f23e.appspot.com",
  messagingSenderId: "948380418011",
  appId: "1:948380418011:web:22432b8479795409b371fe",
  measurementId: "G-M7S29FQF42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Fix the function name here
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

const analytics = getAnalytics(app);

export default app;
