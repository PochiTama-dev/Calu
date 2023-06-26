// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Agrega esta importación

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyVFMtWNQHHjQ-A698-jGnO-ZyRaDOp78",
  authDomain: "blog-calu.firebaseapp.com",
  projectId: "blog-calu",
  storageBucket: "blog-calu.appspot.com",
  messagingSenderId: "517699811761",
  appId: "1:517699811761:web:23fc804e052d086e57e590",
  measurementId: "G-NS7NV6GKW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Actualiza esta línea
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider }; // Exporta las variables db, auth y provider