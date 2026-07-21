import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAD5nUf1OG6VpVEYBczTG6m2d2dJvxP3KQ",
  authDomain: "mayaaa-hsk.firebaseapp.com",
  projectId: "mayaaa-hsk",
  storageBucket: "mayaaa-hsk.firebasestorage.app",
  messagingSenderId: "220633819849",
  appId: "1:220633819849:web:61b81ec743cc59f0253b18",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);