// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqgX3mAhGg_Yfdql3ivHvdaMWJiGEim4",
  authDomain: "recap-firebase-2d102.firebaseapp.com",
  projectId: "recap-firebase-2d102",
  storageBucket: "recap-firebase-2d102.firebasestorage.app",
  messagingSenderId: "637032974652",
  appId: "1:637032974652:web:ee7a3efa6a15fe2bd3b639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
