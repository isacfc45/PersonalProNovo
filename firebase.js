// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJxwv_U_f_a-BV5RtblesYmZayw_v7j2c",
  authDomain: "personal-pro-99ffe.firebaseapp.com",
  projectId: "personal-pro-99ffe",
  storageBucket: "personal-pro-99ffe.appspot.com",
  messagingSenderId: "459176155733",
  appId: "1:459176155733:web:86b3167058da3ec33792dc",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db};
