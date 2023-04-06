import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALCbjPTqBvcB4Lw8_jESnpl7BRQGdG5Ic",
    authDomain: "fir-30566.firebaseapp.com",
    projectId: "fir-30566",
    storageBucket: "fir-30566.appspot.com",
    messagingSenderId: "376858005261",
    appId: "1:376858005261:web:e4397baa2a3594918aaa44",
    measurementId: "G-7GGN99DR4Y"
  };
 export default firebase.initializeApp(firebaseConfig)