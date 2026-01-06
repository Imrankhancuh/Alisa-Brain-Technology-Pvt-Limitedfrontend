import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBUdRVN2kM9USJ_ruNqmnMw49Aok7X2Ctw",
  authDomain: "alisabraintechnologypvtlimited.firebaseapp.com",
  projectId: "alisabraintechnologypvtlimited",
  storageBucket: "alisabraintechnologypvtlimited.firebasestorage.app",
  messagingSenderId: "21965992078",
  appId: "1:21965992078:web:a5ff64996aaff60585d9df",
  measurementId: "G-GJGW6KF58Q"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);