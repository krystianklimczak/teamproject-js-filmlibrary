// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbg53o9UCxSN9_wbNkFiy_0TNxnZAP13Y",
  authDomain: "teamproject-js-filmlibrary.firebaseapp.com",
  projectId: "teamproject-js-filmlibrary",
  storageBucket: "teamproject-js-filmlibrary.appspot.com",
  messagingSenderId: "796295773410",
  appId: "1:796295773410:web:30f3bfb2b903260d1832bb",
  measurementId: "G-GBHFN6HXPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
