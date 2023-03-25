import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, doc, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

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
export const db = getFirestore(app)

// Adding Shop
export async function addShop (initalData) {
  console.log('Calling addShop')
  try {
    const newShopRef = await addDoc(collection(db, 'business'), initalData)
    console.log('Success Add_Shop: ' + newShopRef)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export async function addItems (shopId, items) {
  console.log('Adding Items ', items)
  for (let i = 0; i < items.length; i++) {
    console.log('Success AddItem: ' + items[i])
    try {
      const newShopRef = await addDoc(collection(db, `users/${shopId}/items`), items[i])
      console.log('Success AddItem: ' + newShopRef)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}

export async function addItem (shopId, item) {
  console.log('Adding Item')
  try {
    const newShopRef = await addDoc(collection(db, `users/${shopId}/items`), item)
    console.log('Success AddItem: ' + newShopRef)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export async function getItems (shopId) {
  console.log('Gettinf Items')
  const items = []
  try {
    const querySnapshot = await getDocs(collection(db, `users/${shopId}/items`))
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id })
    })
    return items
  } catch (e) {
    console.error('Error getting items: ', e)
  }
}

export const auth = getAuth(app)

export default app
