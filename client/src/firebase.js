// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eaddd.firebaseapp.com",
  projectId: "mern-estate-eaddd",
  storageBucket: "mern-estate-eaddd.appspot.com",
  messagingSenderId: "314528412930",
  appId: "1:314528412930:web:ce0b0eed655dc1e700be1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);