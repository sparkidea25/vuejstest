import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5atrBbSqn0KHOW01OQmsFpQ5SAOl_WEE",
    authDomain: "emerhub-8fac8.firebaseapp.com",
    databaseURL: "https://emerhub-8fac8.firebaseio.com",
    projectId: "emerhub-8fac8",
    storageBucket: "emerhub-8fac8.appspot.com",
    messagingSenderId: "604465773743",
    appId: "1:604465773743:web:fc73b2952ca6842d3e685a",
    measurementId: "G-6GYCECHRHR"
  });

  export const db = firebaseApp.firestore();