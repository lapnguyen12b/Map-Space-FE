'use client';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { useFcmToken } from 'src/hooks';
import firebaseApp from 'src/utils/firebase';

type ToastifyNotificationProps = {
  title: string;
  body: string;
};

const ToastifyNotification = ({ title, body }: ToastifyNotificationProps) => (
  <div className='push-notification'>
    <h2 className='push-notification-title'>{title}</h2>
    <p className='push-notification-text'>{body}</p>
  </div>
);

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

  return (
    <>
      {notificationPermissionStatus && (
        <div className='absolute right-0 top-0 z-20 h-40 rounded bg-blue-500 px-4 py-2 text-white'>
          <span>The app needs permission to </span>
          <button
            className='font-semibold'
            onClick={() => {
              Notification.requestPermission();
            }}
          >
            enable push notifications.
          </button>
        </div>
      )}
    </>
  );
}
