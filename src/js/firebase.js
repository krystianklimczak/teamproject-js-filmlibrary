// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbg53o9UCxSN9_wbNkFiy_0TNxnZAP13Y',
  authDomain: 'teamproject-js-filmlibrary.firebaseapp.com',
  projectId: 'teamproject-js-filmlibrary',
  storageBucket: 'teamproject-js-filmlibrary.appspot.com',
  messagingSenderId: '796295773410',
  appId: '1:796295773410:web:30f3bfb2b903260d1832bb',
  measurementId: 'G-GBHFN6HXPV',
};

export const refs = {
  signUpForm: document.querySelector('.form-signup'),
  logInForm: document.querySelector('.form-login'),
  signUpBtn: document.querySelector('.sing-up'),
  logInBtn: document.querySelector('.log-in'),
  logOutBtn: document.querySelector('.log-out'),
  modal: document.querySelector('[login-container]'),
  registerBtn: document.querySelector('.register'),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


