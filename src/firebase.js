import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_-oujPBG7nrPlenANOFmDpFHEltQi2D0",
  authDomain: "disney-clone-92ede.firebaseapp.com",
  projectId: "disney-clone-92ede",
  storageBucket: "disney-clone-92ede.appspot.com",
  messagingSenderId: "145962412056",
  appId: "1:145962412056:web:b22b4842f64a7106efbb6d",
  measurementId: "G-XYX49E78PC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

