import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGk0CR6RQnyCQIm1jrjfGGKB8-9D845MQ',
  authDomain: 'vue3-learn-b9eb1.firebaseapp.com',
  projectId: 'vue3-learn-b9eb1',
  storageBucket: 'vue3-learn-b9eb1.appspot.com',
  messagingSenderId: '732128236547',
  appId: '1:732128236547:web:f757472658f47bff182a36',
  measurementId: 'G-J7MRBL8SCB',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
