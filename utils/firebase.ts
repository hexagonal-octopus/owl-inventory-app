import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACvHH9CntutWDkTsI7yZMowtqSGidEbhs",
    authDomain: "owl-inventory-app.firebaseapp.com",
    projectId: "owl-inventory-app",
    storageBucket: "owl-inventory-app.appspot.com",
    messagingSenderId: "302508911971",
    appId: "1:302508911971:web:0940e2f612a75aba1a3756",
    measurementId: "G-M3VES6YFND"
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};