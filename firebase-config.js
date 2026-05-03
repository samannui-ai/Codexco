import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJq9X9LrkZs-c7OR7W5xfq51PnyCMSKNs",
  authDomain: "eocmaneger.firebaseapp.com",
  databaseURL: "https://eocmaneger-default-rtdb.asia-southeast1.firebasedatabase.app", 
  projectId: "eocmaneger",
  storageBucket: "eocmaneger.firebasestorage.app",
  messagingSenderId: "185677538379",
  appId: "1:185677538379:web:e51fad10721d1b3898d9ce",
  measurementId: "G-BLF8WS74J0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);