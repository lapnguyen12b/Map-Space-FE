'use client';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { useFcmToken } from 'src/hooks';
import firebaseApp from 'src/utils/firebase';

export function Notifications() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

  return <div>aa</div>;
}
