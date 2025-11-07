// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYlGnRno6xrikbdW5-KH2rxYvUchSGU9E",
  authDomain: "luminest-b07d9.firebaseapp.com",
  projectId: "luminest-b07d9",
  storageBucket: "luminest-b07d9.firebasestorage.app",
  messagingSenderId: "497749183583",
  appId: "1:497749183583:web:0b752b9a878aca8c81dfea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
