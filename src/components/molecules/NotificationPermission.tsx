'use client';
import { useState } from 'react';
import { useNotificationPermission } from 'src/hooks';

export const NotificationPermission = () => {
  const [openModal, setOpenModal] = useState(false);
  const { shouldAskPermission } = useNotificationPermission();

  console.log('📢 [NotificationPermission.tsx:9]', shouldAskPermission);

  return <div>NotificationPermission</div>;
};
