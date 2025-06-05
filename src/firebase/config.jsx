// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVFVSTl3Xz8SzV81PTHpiklklikFCaRIQ",
  authDomain: "worldtourguide-696f4.firebaseapp.com",
  projectId: "worldtourguide-696f4",
  storageBucket: "worldtourguide-696f4.firebasestorage.app",
  messagingSenderId: "579386326569",
  appId: "1:579386326569:web:c3b0238c510c06a68f2638",
  measurementId: "G-4W0Q4W0QQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Firebase Auth
export const auth = getAuth(app);