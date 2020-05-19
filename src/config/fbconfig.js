import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAvRAW-rImZ2q6vSNqNTqbHxNxEpqjalLk",
    authDomain: "abe400-c24d1.firebaseapp.com",
    databaseURL: "https://abe400-c24d1.firebaseio.com",
    projectId: "abe400-c24d1",
    storageBucket: "abe400-c24d1.appspot.com",
    messagingSenderId: "915731538055",
    appId: "1:915731538055:web:82abb4a91ef4c8efa79822",
    measurementId: "G-7RQXKXZM8Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 //firebase.analytics();
  //firebase.firestore().settings({timestampsInSnapshots: true})
  
  export default firebase;