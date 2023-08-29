// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMupAE7QOEq7DTsoqEy-TOr8jDSE-__pA",
    authDomain: "e-commerce-445c5.firebaseapp.com",
    projectId: "e-commerce-445c5",
    storageBucket: "e-commerce-445c5.appspot.com",
    messagingSenderId: "664074054722",
    appId: "1:664074054722:web:9e9f4e1c3ebfd4303a51db",
    measurementId: "G-7D7Q4V4CDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);