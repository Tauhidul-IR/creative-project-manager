// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG24bm-ti5NEEk-tQZLdma3ZFIBktMCNw",
    authDomain: "creative-projects-manager.firebaseapp.com",
    projectId: "creative-projects-manager",
    storageBucket: "creative-projects-manager.appspot.com",
    messagingSenderId: "949976177551",
    appId: "1:949976177551:web:1f83e84ea6368cd04e89fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;