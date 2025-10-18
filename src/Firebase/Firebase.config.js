// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK3fpPCwGKerjdlALT4wYlIXzG9ivwhM4",
  authDomain: "dragon-news-project-2a134.firebaseapp.com",
  projectId: "dragon-news-project-2a134",
  storageBucket: "dragon-news-project-2a134.firebasestorage.app",
  messagingSenderId: "267458069421",
  appId: "1:267458069421:web:259bcdd2d1928d89865724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
