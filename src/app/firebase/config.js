
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCBV1aMZ1TxykZJ2DFkEWGxOsa5oDAZdcM",
    authDomain: "notify-22247.firebaseapp.com",
    projectId: "notify-22247",
    storageBucket: "notify-22247.appspot.com",
    messagingSenderId: "114238450262",
    appId: "1:114238450262:web:e66d642a7241e917c0a9f7",
    measurementId: "G-66YQT1MYFY"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
export { app, auth }