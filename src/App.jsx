import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  notificationsAtom,
  totalNotificationSelector,
  todosAtomFamily,
} from './atom';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
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
    <>
      <button>Home</button>
      <button>
        My network {getNotificationsMesage(networkNotifications.network)}
      </button>
      <button>Jobs {getNotificationsMesage(networkNotifications.jobs)}</button>
      <button>
        Messagging {getNotificationsMesage(networkNotifications.messaging)}
      </button>
      <button>Total Notification {totalNotifications}</button>
    </>
  );
}

function TodoApp() {
  return (
    <>
      <Todo id={1} />
      <Todo id={2} />
    </>
  );
}
export default App;

function Todo({ id }) {
  const [todo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}
