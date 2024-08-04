// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT2HWoiUSESPuAO3Qri9nbS3BBLOcb3oY",
  authDomain: "netflix-revolution.firebaseapp.com",
  projectId: "netflix-revolution",
  storageBucket: "netflix-revolution.appspot.com",
  messagingSenderId: "753859377207",
  appId: "1:753859377207:web:b6f852d610f72372a027b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();