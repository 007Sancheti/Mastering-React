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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            ...doc.data()
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator;
    }, {})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;