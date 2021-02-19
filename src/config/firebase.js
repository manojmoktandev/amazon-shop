import firebase from "firebase/app";
import 'firebase/auth';        // for authentication
//import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
const configFirebase = {
            apiKey: "AIzaSyBxyXb9vYViNCFvpjucG3-wlYGK3y_Zj2E",
            authDomain: "shop-e258c.firebaseapp.com",
            databaseURL: "https://shop-e258c.firebaseio.com",
            projectId: "shop-e258c",
            storageBucket: "shop-e258c.appspot.com",
            messagingSenderId: "463308392514",
            appId: "1:463308392514:web:e356d8a0f2771915b645db",
            measurementId: "G-Y870DQJLBQ"
            }
const firebaseApp = firebase.initializeApp(configFirebase);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };