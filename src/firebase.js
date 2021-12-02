import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAwcj3fKLNSGM5QDPKB1PxfAcyLsUwOCXU',
    authDomain: 'unichat-1d7d5.firebaseapp.com',
    projectId: 'unichat-1d7d5',
    storageBucket: 'unichat-1d7d5.appspot.com',
    messagingSenderId: '919790240603',
    appId: '1:919790240603:web:c7d66b460056405195d07e',
  })
  .auth()
