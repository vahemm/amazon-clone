import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8r5OlTk9GInIyOuyW4nlccQmy8NLjLU",
  authDomain: "clone-604f6.firebaseapp.com",
  projectId: "clone-604f6",
  storageBucket: "clone-604f6.appspot.com",
  messagingSenderId: "197743410656",
  appId: "1:197743410656:web:5472b1c8df696cf93f3f85",
  measurementId: "G-6FFDEWE30G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
