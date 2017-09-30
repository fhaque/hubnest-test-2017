  import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4A3iLyQaPnJD0gPvvf-DH4Ju1TdVh9wk",
    authDomain: "hubnest-test.firebaseapp.com",
    databaseURL: "https://hubnest-test.firebaseio.com",
    projectId: "hubnest-test",
    storageBucket: "",
    messagingSenderId: "206401734470"
  };

  firebase.initializeApp(config);

  export default firebase;