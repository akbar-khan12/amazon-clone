// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCxNYf4DAGBAYa1N23omMfX77-aNsIpXE",
    authDomain: "clone-b556c.firebaseapp.com",
    projectId: "clone-b556c",
    storageBucket: "clone-b556c.appspot.com",
    messagingSenderId: "898077555435",
    appId: "1:898077555435:web:1cccf66bbc839c2f4e1cae",
    measurementId: "G-WH8EMPSERK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db, auth};

