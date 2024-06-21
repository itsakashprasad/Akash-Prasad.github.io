// firebase.js

import { initializeApp } from 'https://cdn.firebase.com/libs/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://cdn.firebase.com/libs/firebasejs/9.6.1/firebase-firestore.js';


// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2AB2BuPeGVEZCW4JcsYsV8qSA4RO8oAo",
  authDomain: "portfolio-fd4f1.firebaseapp.com",
  projectId: "portfolio-fd4f1",
  storageBucket: "portfolio-fd4f1.appspot.com",
  messagingSenderId: "850922631767",
  appId: "1:850922631767:web:e0991c0078d4803fe7a912",
  measurementId: "G-HXZPTSM0T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };