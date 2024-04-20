import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDbJ3ooSH9imxW6g023mbZJoWvVQq2Xm9o",
  authDomain: "instagram-6121e.firebaseapp.com",
  projectId: "instagram-6121e",
  storageBucket: "instagram-6121e.appspot.com",
  messagingSenderId: "836795429433",
  appId: "1:836795429433:web:2518d335e59c7341c813e8",
  measurementId: "G-NQ7VW2HG48"
};


const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireStore, auth, storage ,app };