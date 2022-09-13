import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import  'firebase/compat/auth';

// import firebase from 'firebase'
// require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBN1NB7SWKPUiJk-CQy-oFbpAhZU0LTm1s",
  authDomain: "mello2.firebaseapp.com",
  projectId: "mello2",
  storageBucket: "mello2.appspot.com",
  messagingSenderId: "772841843735",
  appId: "1:772841843735:web:f21eb978a3197871ae8052",
  measurementId: "G-HTM7636NZV"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBm5eWDmF25ofpUFjSDyCRePyIi0grxHrw",
//   authDomain: "mellow-d017c.firebaseapp.com",
//   projectId: "mellow-d017c",
//   storageBucket: "mellow-d017c.appspot.com",
//   messagingSenderId: "248273529453",
//   appId: "1:248273529453:web:9d32defb78feac5e22ad64",
//   measurementId: "G-NQPN2600DK"
// };

export default firebase.initializeApp(firebaseConfig)
export {firebase as Firebase}