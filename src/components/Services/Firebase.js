// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Dl08cjs4oeRxwMD0oftVu4QVyr2V5Zw",
  authDomain: "info5143project.firebaseapp.com",
  projectId: "info5143project",
  storageBucket: "info5143project.firebasestorage.app",
  messagingSenderId: "558434611033",
  appId: "1:558434611033:web:cb1610310e7a3534c4a648",
  measurementId: "G-8L698J0531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);