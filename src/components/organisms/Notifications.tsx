'use client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getFirebaseToken, onForegroundMessage } from 'src/utils';

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
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === 'default' ||
      Notification.permission === 'denied'
  );

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const {
          notification: { title, body },
        } = payload as { notification: ToastifyNotificationProps };

        toast.custom(<ToastifyNotification title={title} body={body} />);
      })
      .catch((err) =>
        console.log(
          'An error occured while retrieving foreground message. ',
          err
        )
      );
  }, []);

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log('Firebase token: ', firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error('An error occured while retrieving firebase token. ', err)
      );
  };

  return (
    <>
      {showNotificationBanner && (
        <div className='absolute right-0 top-0 z-20 h-40 rounded bg-blue-500 px-4 py-2 text-white'>
          <span>The app needs permission to </span>
          <button className='font-semibold' onClick={handleGetFirebaseToken}>
            enable push notifications.
          </button>
        </div>
      )}
    </>
  );
}
