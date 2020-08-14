import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCE_x3dpUTT9AB3Z20ZrboE_ZJ_D-tFILw",
    authDomain: "clone-29084.firebaseapp.com",
    databaseURL: "https://clone-29084.firebaseio.com",
    projectId: "clone-29084",
    storageBucket: "clone-29084.appspot.com",
    messagingSenderId: "124357048213",
    appId: "1:124357048213:web:5f8fed8f1c011c36a6a89c",
    measurementId: "G-LMWNM9Q7Z8"
});


  //const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{auth};