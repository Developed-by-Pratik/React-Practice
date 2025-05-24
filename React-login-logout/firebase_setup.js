// Step 1 : Install firebase CLI

// npm install firebase

// Step 2 : Create a file firebase.js and paste below code

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBtq2cbSVd3YjttWrgIyr7btwjIR97hGdo",
//   authDomain: "wa-clone-web.firebaseapp.com",
//   projectId: "wa-clone-web",
//   storageBucket: "wa-clone-web.firebasestorage.app",
//   messagingSenderId: "969148787374",
//   appId: "1:969148787374:web:80823bf3cc54f027879b3f",
//   measurementId: "G-DCK5FCYM4M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Login module

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default app;


// Step 3: Use Firebase Auth in Your React Components

    // import { signInWithPopup } from "firebase/auth";
    // import { auth, provider } from "./firebase";

    // const signInWithGoogle = async () => {
    //     try {
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    //         // Handle successful login (e.g., store user data, redirect)
    //         console.log("User signed in:", user);
    //     } catch (error) {
    //         // Handle errors (e.g., display error message)
    //         console.error("Error signing in with Google:", error);
    //     }
// };
    

// Step 4 : Create a React Component:
// Create a React component to render the sign-in button and call the signInWithGoogle function.
// Code

//     import React from "react";
//     import { signInWithGoogle } from "./auth";

//     const GoogleSignInButton = () => {
//         return (
//             <button onClick={signInWithGoogle}>
//                 Sign in with Google
//             </button>
//         );
//     };

//     export default GoogleSignInButton;


// step 5 : Import and use the GoogleSignInButton component in your application.
// Code

//     import React from "react";
//     import GoogleSignInButton from "./GoogleSignInButton";

//     const App = () => {
//         return (
//             <div>
//                 <GoogleSignInButton />
//             </div>
//         );
//     };

//     export default App;