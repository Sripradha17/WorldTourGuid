// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVFVSTl3Xz8SzV81PTHpiklklikFCaRIQ",
  authDomain: "worldtourguide-696f4.firebaseapp.com",
  databaseURL: "https://worldtourguide-696f4-default-rtdb.firebaseio.com",
  projectId: "worldtourguide-696f4",
  storageBucket: "worldtourguide-696f4.firebasestorage.app",
  messagingSenderId: "579386326569",
  appId: "1:579386326569:web:c3b0238c510c06a68f2638",
  measurementId: "G-4W0Q4W0QQQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
