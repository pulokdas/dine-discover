// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';

import { getAuth } from 'firebase/auth';
import firebase, { firestore } from 'firebase/app';

import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeYPhwBtd7zP3fGd41OZ_gBG-bzh21cFE",
    authDomain: "dine-discover.firebaseapp.com",
    projectId: "dine-discover",
    storageBucket: "dine-discover.appspot.com",
    messagingSenderId: "110842608076",
    appId: "1:110842608076:web:f1fedcbb6e3afbf13ac569"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
 const  AUTH = getAuth(app);
export default  AUTH ;
