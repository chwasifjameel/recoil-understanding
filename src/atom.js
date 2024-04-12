import { atom, selector } from 'recoil';

import { getNotifications } from './service';

export const notificationsAtom = atom({
  key: 'notifications',
  default: selector({
    key: 'notifications/default',
    get: async () => {
      const notifications = await getNotifications();
      return notifications;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const notifications = get(notificationsAtom);
    return notifications.network + notifications.jobs + notifications.messaging;
  },
});
