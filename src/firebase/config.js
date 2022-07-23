import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import  'firebase/compat/auth';

// import firebase from 'firebase'
// require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm5eWDmF25ofpUFjSDyCRePyIi0grxHrw",
  authDomain: "mellow-d017c.firebaseapp.com",
  projectId: "mellow-d017c",
  storageBucket: "mellow-d017c.appspot.com",
  messagingSenderId: "248273529453",
  appId: "1:248273529453:web:9d32defb78feac5e22ad64",
  measurementId: "G-NQPN2600DK"
};

export default firebase.initializeApp(firebaseConfig)
export {firebase as Firebase}