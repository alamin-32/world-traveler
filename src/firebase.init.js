// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZhm_utUnwm9nvFgcEP8mYwnwM9a0A3is",
    authDomain: "world-traveler-16916.firebaseapp.com",
    projectId: "world-traveler-16916",
    storageBucket: "world-traveler-16916.appspot.com",
    messagingSenderId: "1024061438719",
    appId: "1:1024061438719:web:fd95c0bdcd991f3e1baaca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth