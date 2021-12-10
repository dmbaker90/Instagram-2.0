// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKlGXTAVJSyt65shRNEBvatSME4P9CBkU",
    authDomain: "instagram-2-7e4ad.firebaseapp.com",
    projectId: "instagram-2-7e4ad",
    storageBucket: "instagram-2-7e4ad.appspot.com",
    messagingSenderId: "617358292342",
    appId: "1:617358292342:web:9fab9eeda780d02c8e3657"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };