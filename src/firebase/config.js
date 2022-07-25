import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import  'firebase/compat/auth';

// import firebase from 'firebase'
// require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1NB7SWKPUiJk-CQy-oFbpAhZU0LTm1s",
  authDomain: "mello2.firebaseapp.com",
  projectId: "mello2",
  storageBucket: "mello2.appspot.com",
  messagingSenderId: "772841843735",
  appId: "1:772841843735:web:f21eb978a3197871ae8052",
  measurementId: "G-HTM7636NZV"
};

export default firebase.initializeApp(firebaseConfig)
export {firebase as Firebase}