import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo8xYJ3l5_QIk73Q1cUyEfk4PRSNSENH4",
    authDomain: "signal-clone-d8d65.firebaseapp.com",
    projectId: "signal-clone-d8d65",
    storageBucket: "signal-clone-d8d65.appspot.com",
    messagingSenderId: "1005190520313",
    appId: "1:1005190520313:web:cea8b3d50ac5e92e51f128",
    measurementId: "G-6F42DY6M47"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }