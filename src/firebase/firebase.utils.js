import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCME9O8dnlkP1sGuRFHMrCzYk_2QwsQWls",
    authDomain: "crown-clothing-db-4bbe2.firebaseapp.com",
    projectId: "crown-clothing-db-4bbe2",
    storageBucket: "crown-clothing-db-4bbe2.appspot.com",
    messagingSenderId: "237399614458",
    appId: "1:237399614458:web:244a6f0097d7e6b8aeba43"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;