import { atom, selector, atomFamily, selectorFamily } from 'recoil';

import { getNotifications, getTodosById } from './service';

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

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: 'todosAtomFamily/default',
    get: (id) => async () => {
      const { todo } = await getTodosById(id);
      return todo;
    },
  }),
});

export const todoAtom = atom({
  key: 'todoAtom',
  default: [],
});

const TODOS = [
  {
    id: 1,
    title: 'Learn Recoil',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn Redux',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn Context API',
    completed: false,
  },
  {
    id: 5,
    title: 'Learn MobX',
    completed: false,
  },
];
