
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwKKrBLgDcgzX4dwrOEh1UV-k6DtwYPwo",
  authDomain: "student-portal-74bd2.firebaseapp.com",
  databaseURL:"https://student-portal-74bd2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "student-portal-74bd2",
  storageBucket: "student-portal-74bd2.appspot.com",
  messagingSenderId: "906089570908",
  appId: "1:906089570908:web:227bc4900e164143957c99"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Include the getAuth function
const database = getDatabase(app);

export { auth, database }; // Export the auth instance



