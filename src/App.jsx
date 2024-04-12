import { RecoilRoot, useRecoilValue } from 'recoil';

import { notificationsAtom, totalNotificationSelector } from './atom';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotifications = useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  const getNotificationsMesage = (number) => {
    const reArrangedNumber = !number ? null : number > 99 ? '99+' : number;

    return reArrangedNumber ? `(${reArrangedNumber})` : ``;
  };

  return (
    <RecoilRoot>
      <button>Home</button>
      <button>
        My network {getNotificationsMesage(networkNotifications.network)}
      </button>
      <button>Jobs {getNotificationsMesage(networkNotifications.jobs)}</button>
      <button>
        Messagging {getNotificationsMesage(networkNotifications.messaging)}
      </button>
      <button>Total Notification {totalNotifications}</button>
    </RecoilRoot>
  );
}

export default App;
