// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0TkJRiaKfkXLVza3IuYzfGi9hA0xmrho",
  authDomain: "login-form-4020e.firebaseapp.com",
  projectId: "login-form-4020e",
  storageBucket: "login-form-4020e.appspot.com",
  messagingSenderId: "555196063921",
  appId: "1:555196063921:web:26c08f6b98255a2134c290",
  measurementId: "G-R3V7CTXKKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);