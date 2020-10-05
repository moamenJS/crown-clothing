import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// paste from firebase app in the internet
const config = {
  apiKey: "AIzaSyCBYI3fn5KYLGecTIhgUBxsTIQCs_I66v4",
  authDomain: "crwn-db-f3ac6.firebaseapp.com",
  databaseURL: "https://crwn-db-f3ac6.firebaseio.com",
  projectId: "crwn-db-f3ac6",
  storageBucket: "crwn-db-f3ac6.appspot.com",
  messagingSenderId: "992298249937",
  appId: "1:992298249937:web:b5849d41a89d1069131ff0",
  measurementId: "G-D9V60HG8VZ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      // storing in the database
      await userRef.set({
        displayName,
        email,
        createAt,
        ...aditionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// this for the Google Sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
