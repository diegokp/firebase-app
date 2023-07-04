// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD11aw4N_g9dU2mo8WezEBGfCRVXU24j98",
  authDomain: "vue3-2023-d925c.firebaseapp.com",
  projectId: "vue3-2023-d925c",
  storageBucket: "vue3-2023-d925c.appspot.com",
  messagingSenderId: "330537389758",
  appId: "1:330537389758:web:867728637155684c0198ef"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth =  getAuth();

export { auth }