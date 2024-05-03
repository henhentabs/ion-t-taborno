// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAR8KGSZcSV2WyTs2RvgMsnLh4jd9iO-2k",
    authDomain: "ion-t-taborno.firebaseapp.com",
    projectId: "ion-t-taborno",
    storageBucket: "ion-t-taborno.appspot.com",
    messagingSenderId: "947630035898",
    appId: "1:947630035898:web:7b9d819efb8327afb20383",
    measurementId: "G-MCKY13713X"
  };
  


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}