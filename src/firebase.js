// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGJb0O-tA32XCjxN0zGuZHLlOlDu-UxCs',
  authDomain: 'realtor-react-5a537.firebaseapp.com',
  projectId: 'realtor-react-5a537',
  storageBucket: 'realtor-react-5a537.appspot.com',
  messagingSenderId: '414368296302',
  appId: '1:414368296302:web:8fab499257502c11fba57f',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
