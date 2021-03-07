import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvBmIfHfmFzFwJhUqCF179HXxBkvZP1Xc",
    authDomain: "restaurants-28c6f.firebaseapp.com",
    projectId: "restaurants-28c6f",
    storageBucket: "restaurants-28c6f.appspot.com",
    messagingSenderId: "308611787972",
    appId: "1:308611787972:web:08732d09c0ca7fb191ed91"
  }

export const firebaseApp  = firebase.initializeApp(firebaseConfig)