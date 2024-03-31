
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyCBV1aMZ1TxykZJ2DFkEWGxOsa5oDAZdcM",
//     authDomain: "notify-22247.firebaseapp.com",
//     projectId: "notify-22247",
//     storageBucket: "notify-22247.appspot.com",
//     messagingSenderId: "114238450262",
//     appId: "1:114238450262:web:e66d642a7241e917c0a9f7",
//     measurementId: "G-66YQT1MYFY"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCKgRtms6NvoWUhb2aUwrxvpBEwDLQ1hDA",
    authDomain: "notify-302fa.firebaseapp.com",
    projectId: "notify-302fa",
    storageBucket: "notify-302fa.appspot.com",
    messagingSenderId: "963720232739",
    appId: "1:963720232739:web:a9b12cf1f980e2905c5696",
    measurementId: "G-TLW6N855EJ"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
export { app, auth }

