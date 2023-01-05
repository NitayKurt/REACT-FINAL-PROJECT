// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqmKeKb0T0q39_KueKdeEyhDS2vxMeGe0",
  authDomain: "react-final-project-962ce.firebaseapp.com",
  projectId: "react-final-project-962ce",
  storageBucket: "react-final-project-962ce.appspot.com",
  messagingSenderId: "18259562488",
  appId: "1:18259562488:web:ffdff1739105494902100d",
  measurementId: "G-RCN2LMX9ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }