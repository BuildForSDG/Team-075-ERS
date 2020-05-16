import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const config = {
    apiKey: "AIzaSyBUyiBIYc2ev6ABJHF7U5-ePr35Yt7rFnU",
    authDomain: "emergency-response-syste-85467.firebaseapp.com",
    databaseURL: "https://emergency-response-syste-85467.firebaseio.com",
    projectId: "emergency-response-syste-85467",
    storageBucket: "emergency-response-syste-85467.appspot.com",
    messagingSenderId: "586593674371",
    appId: "1:586593674371:web:9b1caf0a333583f123a7b6",
    measurementId: "G-2DV41ZDD3S"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = userRef.get();
  
  if (!userSnapshot.exist) {
    const { displayName, email, photoURL, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        phoneNumber,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user!', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

//facebook authentication.
var facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
    firebase.auth().signInWithRedirect(facebookProvider);
};

export default firebase;