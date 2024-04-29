import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKgRtms6NvoWUhb2aUwrxvpBEwDLQ1hDA",
    authDomain: "notify-302fa.firebaseapp.com",
    projectId: "notify-302fa",
    storageBucket: "notify-302fa.appspot.com",
    messagingSenderId: "963720232739",
    appId: "1:963720232739:web:a9b12cf1f980e2905c5696",
    measurementId: "G-TLW6N855EJ"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };