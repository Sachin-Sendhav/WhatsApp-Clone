// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFHA7R1lIo2kDttYKtFKpu8xVEnOvgo4M",
    authDomain: "whatsapp-e8307.firebaseapp.com",
    projectId: "whatsapp-e8307",
    storageBucket: "whatsapp-e8307.appspot.com",
    messagingSenderId: "118834930317",
    appId: "1:118834930317:web:1347a904033e66acebf8c4",
    measurementId: "G-CC0XLBXCKZ"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;





