import firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBw3DaKVPaLohAnvY6oVbuqYFQ4iMTZ8J4",
    authDomain: "react-api-3389b.firebaseapp.com",
    databaseURL: "https://react-api-3389b.firebaseio.com",
    projectId: "react-api-3389b",
    storageBucket: "",
    messagingSenderId: "1040494046653",
    appId: "1:1040494046653:web:b881effc27e08edb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;