// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS3acP-qJF6oaYqGdQKA-ysFjsaGsl6p4",
  authDomain: "fire-auth-cd164.firebaseapp.com",
  projectId: "fire-auth-cd164",
  storageBucket: "fire-auth-cd164.appspot.com",
  messagingSenderId: "392766031878",
  appId: "1:392766031878:web:1c586d08e64dc3e8e21b87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);




