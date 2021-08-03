import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDiK8G0yY5vRIqS1NfhaIagVbyDnRcym-A',
  authDomain: 'dev-tweet.firebaseapp.com',
  projectId: 'dev-tweet',
  storageBucket: 'dev-tweet.appspot.com',
  messagingSenderId: '501437958200',
  appId: '1:501437958200:web:51a50a57c6086a3ef8becd',
  measurementId: 'G-WEW8KRLS76'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  googleAuthProvider,
  firebase,
  db
}
