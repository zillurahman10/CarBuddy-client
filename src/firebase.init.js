import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCh_I6Jwdf8v8Mhpj4X9PepfT-W88K3Ulo",
    authDomain: "cardbuddy-zr.firebaseapp.com",
    projectId: "cardbuddy-zr",
    storageBucket: "cardbuddy-zr.appspot.com",
    messagingSenderId: "1017787573404",
    appId: "1:1017787573404:web:02711b1c4d657f2ebc3959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;