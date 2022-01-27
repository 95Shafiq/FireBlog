import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2Fr8xy762gYo7KHq3ciJGN2QhTebaB_g",
  authDomain: "fileblogs.firebaseapp.com",
  projectId: "fileblogs",
  storageBucket: "fileblogs.appspot.com",
  messagingSenderId: "717168251656",
  appId: "1:717168251656:web:34f09044c67c3bcc8492bd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
