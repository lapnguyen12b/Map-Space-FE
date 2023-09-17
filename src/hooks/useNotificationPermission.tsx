import { useEffect, useState } from 'react';

export const useNotificationPermission = () => {
  const [shouldAskPermission, setShouldAskPermission] = useState(false);

  useEffect(() => {
    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'denied') {
        setShouldAskPermission(true); // Show the modal on permission denial
      }
    };
    try {
      if (Notification.permission !== 'granted') {
        requestNotificationPermission();
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  }, []);
  return { shouldAskPermission };
};
