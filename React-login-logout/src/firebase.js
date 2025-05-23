// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtq2cbSVd3YjttWrgIyr7btwjIR97hGdo",
  authDomain: "wa-clone-web.firebaseapp.com",
  projectId: "wa-clone-web",
  storageBucket: "wa-clone-web.firebasestorage.app",
  messagingSenderId: "969148787374",
  appId: "1:969148787374:web:80823bf3cc54f027879b3f",
  measurementId: "G-DCK5FCYM4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Login module

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;