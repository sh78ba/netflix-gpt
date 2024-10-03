// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firebase_apiKey, Firebase_appId, Firebase_authDomain, Firebase_measurementId, Firebase_messagingSenderId, Firebase_projectId, Firebase_storageBucket } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Firebase_apiKey,
  authDomain: Firebase_authDomain,
  projectId: Firebase_projectId,
  storageBucket:Firebase_storageBucket,
  messagingSenderId: Firebase_messagingSenderId,
  appId: Firebase_appId,
  measurementId:Firebase_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()