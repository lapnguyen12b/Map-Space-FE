import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBYVp-VBu9FC6a69S1RILqHYjDohITkuCM',
  authDomain: 'map-space-cb204.firebaseapp.com',
  projectId: 'map-space-cb204',
  storageBucket: 'map-space-cb204.appspot.com',
  messagingSenderId: '1030957297019',
  appId: '1:1030957297019:web:27039b743341519f08a1de',
  measurementId: 'G-K4XGNT5B0D',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
