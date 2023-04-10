// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKOOV7q3s8eJ5vqUBOJbm_y-1ks0o-RzM",
  authDomain: "ecollect-67f43.firebaseapp.com",
  projectId: "ecollect-67f43",
  storageBucket: "ecollect-67f43.appspot.com",
  messagingSenderId: "423595178376",
  appId: "1:423595178376:web:cd1b548cc558025246e23d",
  measurementId: "G-NENVDCVN17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
