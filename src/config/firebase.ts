import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxVI99gqoKbHeYdKCgwe2ziw2q_uPDKx4",
  authDomain: "stackoverflow-airbornharsh.firebaseapp.com",
  projectId: "stackoverflow-airbornharsh",
  storageBucket: "stackoverflow-airbornharsh.appspot.com",
  messagingSenderId: "371326583512",
  appId: "1:371326583512:web:121621d2ceb6afabec8dad",
  measurementId: "G-3V2BLHWDEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, storage}
export default app;
