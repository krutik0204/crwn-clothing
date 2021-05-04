import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC15ZG65-XHNwQR68CFuKGxuX5WunjoAWQ",
    authDomain: "crwn-db-cbcc6.firebaseapp.com",
    projectId: "crwn-db-cbcc6",
    storageBucket: "crwn-db-cbcc6.appspot.com",
    messagingSenderId: "743704265091",
    appId: "1:743704265091:web:7f3e273f3f6fa4f45f76b6",
    measurementId: "G-S3X1WVR91Q"
  };

  export const createUserProfileDocument =  async ( userAuth, additionalData ) => {
      if(!userAuth) return;

      const userRef = firestore.collection('User').doc('5rNS7KLKaHMPHK5B8oP5');
       
      const snapShot = await userRef.get();

        if(snapShot.exists){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error){
                console.log('error creating user' , error.message);
            }
        }

    };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;