// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7H6lassLG6qIjyqf5LHq05YziDVaff8U",
  authDomain: "kurdtour-3d30f.firebaseapp.com",
  projectId: "kurdtour-3d30f",
  storageBucket: "kurdtour-3d30f.appspot.com",
  messagingSenderId: "361415369527",
  appId: "1:361415369527:web:9d80d4651dce6fc09030b2",
  measurementId: "G-QZZJH5VKCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);