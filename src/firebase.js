// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_Firbase_api_Key}`,
  authDomain: `${process.env.REACT_APP_Auth_Domain}`,
  projectId: `${process.env.REACT_APP_Project_Id}`,
  storageBucket: `${process.env.REACT_APP_Storage_Bucket}`,
  messagingSenderId: `${process.env.REACT_APP_Messaging_SenderId}`,
  appId: `${process.env.REACT_APP_App_Id}`,
  measurementId: `${process.env.REACT_APP_Measurement_Id}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
