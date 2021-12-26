import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwqF6kCf__wgUVVSS742LRX1z7s5TkM6Q",
    authDomain: "fireblogs-15a04.firebaseapp.com",
    projectId: "fireblogs-15a04",
    storageBucket: "fireblogs-15a04.appspot.com",
    messagingSenderId: "1068522491137",
    appId: "1:1068522491137:web:5a7184eb4c2a49b8201f00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();