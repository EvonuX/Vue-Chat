import firebase from "firebase";
// eslint-disable-next-line no-unused-vars
import firestore from "firebase/firestore";
var config = {
  apiKey: "AIzaSyD_viq2qwMJ-sJxUpHpQetRi_1lFNHprtI",
  authDomain: "vue-chat-abed7.firebaseapp.com",
  databaseURL: "https://vue-chat-abed7.firebaseio.com",
  projectId: "vue-chat-abed7",
  storageBucket: "vue-chat-abed7.appspot.com",
  messagingSenderId: "528121800564"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
