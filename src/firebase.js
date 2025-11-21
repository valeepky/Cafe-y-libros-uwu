//Iniciar Firebase
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzpgH8X2e1Tf_yoRm6KYtZ_xs4TP_-Q1g",
  authDomain: "loliloli-452ff.firebaseapp.com",
  projectId: "loliloli-452ff",
  storageBucket: "loliloli-452ff.firebasestorage.app",
  messagingSenderId: "635564690145",
  appId: "1:635564690145:web:6e970463581ac7a3ffc5a0",
  measurementId: "G-44L8H2GK4Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };