// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8GpdlrtOBhBWFog2Bxd1bumsBCy7-zQo",
  authDomain: "notflix-5.firebaseapp.com",
  projectId: "notflix-5",
  storageBucket: "notflix-5.firebasestorage.app",
  messagingSenderId: "189236942246",
  appId: "1:189236942246:web:a22148e4de5c30d6bc6b67",
  measurementId: "G-18NMGPW8CE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
