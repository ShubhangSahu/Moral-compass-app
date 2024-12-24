// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHRkc4k6ciReYMpTtB32kYAf0Jv2CiN4",
  authDomain: "constiquest-6c2a0.firebaseapp.com",
  projectId: "constiquest-6c2a0",
  storageBucket: "constiquest-6c2a0.firebasestorage.app",
  messagingSenderId: "447431909820",
  appId: "1:447431909820:web:3f22ad904e01f887bf8bb9",
  measurementId: "G-3FB1R3RQPG",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
