import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyC1uVlqF3-0bIf6QKTckVEGFOwEZ-XD0wY",
  authDomain: "meuapp-d5319.firebaseapp.com",
  databaseURL: "https://meuapp-d5319.firebaseio.com",
  projectId: "meuapp-d5319",
  storageBucket: "meuapp-d5319.appspot.com",
  messagingSenderId: "30068442044",
  appId: "1:30068442044:web:8d7c45f9a9c9237d8b61b9",
  measurementId: "G-YQRB1N4GQS"
};

firebase.initializeApp(firebaseConfig)

export default firebase