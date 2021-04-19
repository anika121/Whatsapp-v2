import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9EPiPHlmvtokcyYIFaHL4eoi7daEUAJQ",
    authDomain: "whatsapp-2-0-f27aa.firebaseapp.com",
    projectId: "whatsapp-2-0-f27aa",
    storageBucket: "whatsapp-2-0-f27aa.appspot.com",
    messagingSenderId: "807630996497",
    appId: "1:807630996497:web:cfccf9538cb69ab5fbddb0",
    measurementId: "G-CK0H4ZKH8G"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
