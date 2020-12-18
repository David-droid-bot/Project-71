import * as firebase from 'firebase';
require("@firebase/firestore")


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOZ1Ct7Bq2X8YDCfU9xvMfhIVyT3DOdgU",
    authDomain: "story-hub-95c8f.firebaseapp.com",
    projectId: "story-hub-95c8f",
    storageBucket: "story-hub-95c8f.appspot.com",
    messagingSenderId: "242430103503",
    appId: "1:242430103503:web:5fd1671cc46fccaa044cba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firsestore();
