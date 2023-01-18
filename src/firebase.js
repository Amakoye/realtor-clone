// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1f7Dym7GQSwz1gyVkyYzG3RTHNbZWiU",
  authDomain: "realtor-clone-react-de330.firebaseapp.com",
  projectId: "realtor-clone-react-de330",
  storageBucket: "realtor-clone-react-de330.appspot.com",
  messagingSenderId: "823030983028",
  appId: "1:823030983028:web:1499b84b52a5fb510a6421",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
