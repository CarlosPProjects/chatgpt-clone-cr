import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIP3QgMORVI-b2JUzKrnEt0Mtdsilrfko",
  authDomain: "my-chatgpt-cg.firebaseapp.com",
  projectId: "my-chatgpt-cg",
  storageBucket: "my-chatgpt-cg.appspot.com",
  messagingSenderId: "371875147529",
  appId: "1:371875147529:web:5034825c0ff40f1f6dedd8",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
