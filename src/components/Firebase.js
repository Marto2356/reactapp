import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCS9iHzvhg49Zhw8kGYI-VEE-qlEkgL54",
    authDomain: "primerproyecto-ae2e2.firebaseapp.com",
    projectId: "primerproyecto-ae2e2",
    storageBucket: "primerproyecto-ae2e2.appspot.com",
    messagingSenderId: "776303274035",
    appId: "1:776303274035:web:b0f55818da38ce24061b46"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);