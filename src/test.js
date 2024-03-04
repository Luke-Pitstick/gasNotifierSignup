const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc } = require('firebase/firestore/lite');
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const firebaseConfig = {
    apiKey: "AIzaSyC21_mQWuG7TC41_LgxcmA4Osxsvcx8vLE",
    authDomain: "gas-analytics-c435c.firebaseapp.com",
    projectId: "gas-analytics-c435c",
    storageBucket: "gas-analytics-c435c.appspot.com",
    messagingSenderId: "297827466080",
    appId: "1:297827466080:web:49c23ed6e3a020496dfc05",
    measurementId: "G-F3N9KJS46Y"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// adds a new user to the database
const addUser = async (db) => {
    const usersCol = collection(db, 'users');
    const user = {name: 'John', email: ''}
    await addDoc(usersCol, user);
    console.log('new user added');
    
}

addUser(db);