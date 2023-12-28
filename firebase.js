// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0lQjNggBRFOlixrVqP56r_DWGhCEzFVI",
    authDomain: "bbcnewsclone.firebaseapp.com",
    projectId: "bbcnewsclone",
    storageBucket: "bbcnewsclone.appspot.com",
    messagingSenderId: "158632271311",
    appId: "1:158632271311:web:52b5fc990c66e29b2b46ba",
    measurementId: "G-0HKK499XRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);