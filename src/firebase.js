// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyCqcfHvA6v-Kmy_caWZ5Qm2G0aSUFwAW8M",
  authDomain: "reactprojet-9b618.firebaseapp.com",
  projectId: "reactprojet-9b618",
  storageBucket: "reactprojet-9b618.appspot.com",
  messagingSenderId: "1067893738711",
  appId: "1:1067893738711:web:ebc47cd71f0b65fa8eb492"
});

// Initialize Firebase
const storage = getStorage(app);
export default storage;
