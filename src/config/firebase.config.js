// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzJiY24X5yzbmzKKDNWCGX2KNH4pusZ8",
  authDomain: "nomad-ventures-3ad90.firebaseapp.com",
  projectId: "nomad-ventures-3ad90",
  storageBucket: "nomad-ventures-3ad90.appspot.com",
  messagingSenderId: "231404322639",
  appId: "1:231404322639:web:ed8123258084d4cc2f0f3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
