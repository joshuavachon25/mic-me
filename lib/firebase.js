import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAjn4wh4aNMgtFXKVfbcAn74OcpVK0IlNU",
  authDomain: "mic-me-8c434.firebaseapp.com",
  projectId: "mic-me-8c434",
  storageBucket: "mic-me-8c434.appspot.com",
  messagingSenderId: "406711726416",
  appId: "1:406711726416:web:02733c6aad74e098527c55",
  measurementId: "G-31S9KX9L96"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

