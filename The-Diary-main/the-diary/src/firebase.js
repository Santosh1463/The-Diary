// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA-fa84pqrr3atqDFELZsb707KVkQ0MVkc",
  authDomain: "the-diary-1a18b.firebaseapp.com",
  databaseURL: "https://the-diary-1a18b-default-rtdb.firebaseio.com",
  projectId: "the-diary-1a18b",
  storageBucket: "the-diary-1a18b.appspot.com",
  messagingSenderId: "528837201056",
  appId: "1:528837201056:web:140a5c064ec31b2e44cdc5",
  measurementId: "G-QRSQM9XFY0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const db = firebaseApp.firestore();
  export const storage = firebase.storage();