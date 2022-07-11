import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDalsdqqjwJ4MvRBry09K08r_T_jUlTczg",
    authDomain: "xingsushi-ec469.firebaseapp.com",
    projectId: "xingsushi-ec469",
    storageBucket: "xingsushi-ec469.appspot.com",
    messagingSenderId: "417389601257",
    appId: "1:417389601257:web:144b46b4dc334a186f2b78",
    measurementId: "G-27VW5QJKYK",
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
