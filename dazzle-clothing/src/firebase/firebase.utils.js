import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: 'AIzaSyAm-d2I8eIlBuNqOin4lDYzUgVa-lt71vk',
    authDomain: 'dazzle-db.firebaseapp.com',
    projectId: 'dazzle-db',
    storageBucket: 'dazzle-db.appspot.com',
    messagingSenderId: '1031753107825',
    appId: '1:1031753107825:web:7ad7fb0885a292dae60ed0',
    measurementId: 'G-Z2NE0KTS2G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;