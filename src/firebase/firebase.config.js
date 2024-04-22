// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLrIAK0pwneLTGHaFqkkp2pOeaWiQCPw0",
  authDomain: "coffee-store-6aecd.firebaseapp.com",
  projectId: "coffee-store-6aecd",
  storageBucket: "coffee-store-6aecd.appspot.com",
  messagingSenderId: "595357947366",
  appId: "1:595357947366:web:7bb213eac11935fa007227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;