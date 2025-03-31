// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoPOYLqINpg8b6WUY7rz8Q_DMruG6H8OU",
  authDomain: "worksphere-8d490.firebaseapp.com",
  projectId: "worksphere-8d490",
  storageBucket: "worksphere-8d490.firebasestorage.app",
  messagingSenderId: "219427334707",
  appId: "1:219427334707:web:ad3b237186b9f26bbad146",
  measurementId: "G-CX9DY5VQ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);