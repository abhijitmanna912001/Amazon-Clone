import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB40Rvnuqnp0eADMPdQ7eKFvZvoxgu1PsE",
  authDomain: "clone-ccf18.firebaseapp.com",
  projectId: "clone-ccf18",
  storageBucket: "clone-ccf18.appspot.com",
  messagingSenderId: "519407978010",
  appId: "1:519407978010:web:e6e54e18db5a4838ab33a3",
  measurementId: "G-0WSKP6EPZC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
