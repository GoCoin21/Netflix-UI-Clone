

import Firebase from  "firebase/compat/app";
import 'firebase/compat/firestore';
import {seedDatabase} from "../seed";

//  we need to somehow seed the database.
const config = {
	apiKey: "AIzaSyCxHG-Tj7T2of7ul0VsorAipwvjbH-YDCE",
    authDomain: "netflix-98f21.firebaseapp.com",
    projectId: "netflix-98f21",
    storageBucket: "netflix-98f21.appspot.com",
    messagingSenderId: "130278871442",
    appId: "1:130278871442:web:5c7e319c628221efeab14b"
};
const firebase = Firebase.initializeApp(config)
seedDatabase(firebase)
export {firebase};
