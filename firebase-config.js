// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaPKLUxjMuXvo5lmZkp0fa3eXlLFXctQM",
  authDomain: "panettoneria-julieta.firebaseapp.com",
  projectId: "panettoneria-julieta",
  storageBucket: "panettoneria-julieta.firebasestorage.app",
  messagingSenderId: "308124695818",
  appId: "1:308124695818:web:bd59454df63da4cef3cef3",
  measurementId: "G-H5238KKW4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);