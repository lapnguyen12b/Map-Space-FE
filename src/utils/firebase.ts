'use client';

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

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

const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    return window.navigator.serviceWorker
      .getRegistration('/firebase-push-notification-scope')
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
          {
            scope: '/firebase-push-notification-scope',
          }
        );
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker().then(
    (serviceWorkerRegistration) => getToken(messaging)
    // getToken(messaging, {
    //   vapidKey: process.env.REACT_APP_VAPID_KEY,
    //   serviceWorkerRegistration,
    // })
  );

export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
