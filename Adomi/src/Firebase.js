import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBDZaYNWOKXBaU0ykhz88F_di9JQEIcGh4",
  authDomain: "admin-dashboard-d53da.firebaseapp.com",
  projectId: "admin-dashboard-d53da",
  storageBucket: "admin-dashboard-d53da.appspot.com",
  messagingSenderId: "1001331817310",
  appId: "1:1001331817310:web:2a52b2de72c9c375222dcf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)