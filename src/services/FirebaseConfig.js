import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAeyYwnF6JvO7-x51NsKQrTcAgQOQT0ATE",
  authDomain: "sendly-chat.firebaseapp.com",
  projectId: "sendly-chat",
  storageBucket: "sendly-chat.appspot.com",
  messagingSenderId: "334629847290",
  appId: "1:334629847290:web:703e98d502519fc82f4943",
  measurementId: "G-FGPPZ4M1X0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const analytics = firebaseApp.analytics();
const db = firebaseApp.firestore();

export default {db, auth}
