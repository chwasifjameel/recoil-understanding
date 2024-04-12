import { atom, selector } from 'recoil';

export const networkAtom = atom({
  key: 'networkAton',
  default: 109,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 0,
});
export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const networkNotifications = get(networkAtom);
    const jobsNotifications = get(jobsAtom);
    const messagingNotification = get(messagingAtom);
    return networkNotifications + jobsNotifications + messagingNotification;
  },
});
