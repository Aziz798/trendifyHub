// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyDmDYmV85m58gBBVtTeTaw-qsh6-6UbqJY",
  authDomain: "trendifyhub-40d81.firebaseapp.com",
  projectId:"trendifyhub-40d81",
  storageBucket:"trendifyhub-40d81.appspot.com",
  messagingSenderId: "232257483909",
  appId:"1:232257483909:web:d4a5f8c2fe14306450e5ec",
  measurementId: "G-LXTNMD3E2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);