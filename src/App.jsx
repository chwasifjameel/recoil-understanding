import { RecoilRoot, useRecoilValue } from 'recoil';

import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  totalNotificationSelector,
} from './atom';
import './App.css';
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotifications = useRecoilValue(networkAtom);
  const jobsNotifications = useRecoilValue(jobsAtom);
  const messagingNotification = useRecoilValue(messagingAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  const getNotificationsMesage = (number) => {
    const reArrangedNumber = !number ? null : number > 99 ? '99+' : number;

    return reArrangedNumber ? `(${reArrangedNumber})` : ``;
  };

  return (
    <RecoilRoot>
      <button>Home</button>
      <button>My network {getNotificationsMesage(networkNotifications)}</button>
      <button>Jobs {getNotificationsMesage(jobsNotifications)}</button>
      <button>
        Messagging {getNotificationsMesage(messagingNotification)}
      </button>
      <button>Total Notification {totalNotifications}</button>
    </RecoilRoot>
  );
}

export default App;
