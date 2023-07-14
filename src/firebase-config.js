// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore'; // Agrega esta importación

import servicios from './Components/Services/constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyApKU1ShV8BSmIiT80A5R0j-nD9Uy1zosQ',
  authDomain: 'calu-f1f83.firebaseapp.com',
  projectId: 'calu-f1f83',
  storageBucket: 'calu-f1f83.appspot.com',
  messagingSenderId: '438340692271',
  appId: '1:438340692271:web:2c2ac73c9ac1b57c3559da',
  measurementId: 'G-DQE7303QW7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Actualiza esta línea
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const serviciosCollectionRef = collection(db, 'Servicios');

export const addServicios = async () => {
  for (const servicio of servicios) {
    try {
      // Agregar el objeto como un nuevo documento en la colección
      await addDoc(serviciosCollectionRef, servicio);
      console.log('Servicio agregado a la colección.');
    } catch (error) {
      console.error('Error al agregar el servicio:', error);
    }
  }
};

export { db, auth, provider }; // Exporta las variables db, auth y provider
