// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import firebaseui from 'firebaseui'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAzXT4FHB1kWd_jGkkLL1zdw-II7ryke3Y',
  authDomain: 'cloudyug-f2fe4.firebaseapp.com',
  projectId: 'cloudyug-f2fe4',
  storageBucket: 'cloudyug-f2fe4.appspot.com',
  messagingSenderId: '840976261947',
  appId: '1:840976261947:web:fc74277bd755170c0a4d1e',
  measurementId: 'G-1HZJSE1ZYK'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const ui = new firebaseui.auth.AuthUI(auth)
export default app
