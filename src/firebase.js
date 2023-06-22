// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-mMdKBMohNP_PkzR7srKKM838_n6WfU",
  authDomain: "todo-app-8f42c.firebaseapp.com",
  projectId: "todo-app-8f42c",
  storageBucket: "todo-app-8f42c.appspot.com",
  messagingSenderId: "738238574293",
  appId: "1:738238574293:web:13b1b7ef72885ea354bc5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)