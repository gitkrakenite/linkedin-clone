import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxV193JblhXktXUh0ZXtyS0abzHeAu9wo",
  authDomain: "linkedin-clone-e3cc5.firebaseapp.com",
  projectId: "linkedin-clone-e3cc5",
  storageBucket: "linkedin-clone-e3cc5.appspot.com",
  messagingSenderId: "989144422661",
  appId: "1:989144422661:web:27206750fedaff1b823f6c",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
