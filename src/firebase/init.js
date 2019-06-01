import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCkCy0T11snZV_IDCxj8hQbUWqMPBw3cVE',
  authDomain: 'vue-chat-704d4.firebaseapp.com',
  databaseURL: 'https://vue-chat-704d4.firebaseio.com',
  projectId: 'vue-chat-704d4',
  storageBucket: 'vue-chat-704d4.appspot.com',
  messagingSenderId: '552772454615',
  appId: '1:552772454615:web:5d4b0cce893adad5'
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
