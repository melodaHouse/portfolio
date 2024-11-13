import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "meloda-e15ce.firebaseapp.com",
    projectId: "meloda-e15ce",
    storageBucket: "meloda-e15ce.appspot.com",
    messagingSenderId: "282403645187",
    appId: "1:282403645187:web:076aaac23fb7969f86eb36",
    measurementId: "G-2BH3MTFX2V"
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };