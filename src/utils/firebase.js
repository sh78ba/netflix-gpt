// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo351mL5GIoH3Y6JtExVPsF54rRLi7Cn0",
  authDomain: "netflixgpt-b077d.firebaseapp.com",
  projectId: "netflixgpt-b077d",
  storageBucket: "netflixgpt-b077d.appspot.com",
  messagingSenderId: "1015615355520",
  appId: "1:1015615355520:web:2c9692efc14f18c525c465",
  measurementId: "G-FBC6FGDMBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()