import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPoFwRMyzUPKQ1tli5eQ-X5A3FB8wRpnU",
  authDomain: "react-journal-app-1ea8d.firebaseapp.com",
  projectId: "react-journal-app-1ea8d",
  storageBucket: "react-journal-app-1ea8d.appspot.com",
  messagingSenderId: "436073407730",
  appId: "1:436073407730:web:ebee133b1eb1ae0ab91c6b",
  measurementId: "G-3NWYJH9JJH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
