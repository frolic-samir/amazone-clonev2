import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxJbH0B8ix7m-j7Jgwbugk71dwSlkvkpA",
  authDomain: "e-clone-bcb77.firebaseapp.com",
  databaseURL: "https://e-clone-bcb77.firebaseio.com",
  projectId: "e-clone-bcb77",
  storageBucket: "e-clone-bcb77.appspot.com",
  messagingSenderId: "243344370356",
  appId: "1:243344370356:web:92bd98a493fabebd3605e1",
  measurementId: "G-Y49T0BS6QN",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
