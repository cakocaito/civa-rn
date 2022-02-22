import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsKG5_dpsURuvBDvnfYQrlMigpufU_qxU",
    authDomain: "civa-rn.firebaseapp.com",
    projectId: "civa-rn",
    storageBucket: "civa-rn.appspot.com",
    messagingSenderId: "447935536916",
    appId: "1:447935536916:web:57d3c2dc148ad76d63ec01"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  