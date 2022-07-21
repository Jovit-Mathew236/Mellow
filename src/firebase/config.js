import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import  'firebase/compat/auth';

// import firebase from 'firebase'
// require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_KWBU1VtnAnaYocAM-P_xgTPpXjzwAWg",
    authDomain: "mellow-68e02.firebaseapp.com",
    projectId: "mellow-68e02",
    storageBucket: "mellow-68e02.appspot.com",
    messagingSenderId: "1078515858383",
    appId: "1:1078515858383:web:033444d7e87d7b4ec4f0ba",
    measurementId: "G-PBN3F2EMQ8"
  };

export default firebase.initializeApp(firebaseConfig)
export {firebase as Firebase}