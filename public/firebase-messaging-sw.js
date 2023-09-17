// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAGk0CR6RQnyCQIm1jrjfGGKB8-9D845MQ',
  authDomain: 'vue3-learn-b9eb1.firebaseapp.com',
  projectId: 'vue3-learn-b9eb1',
  storageBucket: 'vue3-learn-b9eb1.appspot.com',
  messagingSenderId: '732128236547',
  appId: '1:732128236547:web:f757472658f47bff182a36',
  measurementId: 'G-J7MRBL8SCB',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './next.svg',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
