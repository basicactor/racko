// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUgvjQKN_2Y_v4TfxmVBI3TGpgUmCtpA",
  authDomain: "racko-8a920.firebaseapp.com",
  projectId: "racko-8a920",
  storageBucket: "racko-8a920.appspot.com",
  messagingSenderId: "222789964365",
  appId: "1:222789964365:web:8c13d17113ed8af3cc8204",
  measurementId: "G-4WHVK049PN"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;