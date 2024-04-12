import axios from 'axios';

export const getNotifications = async () => {
  const response = await axios.get(
    'https://sum-server.100xdevs.com/notifications'
  );
  return response.data;
};
export const getTodos = async () => {
  const response = await axios.get('https://sum-server.100xdevs.com/todo');
  return response.data;
};
export const getTodosById = async (id) => {
  const response = await axios.get(
    `https://sum-server.100xdevs.com/todo?id=${id}`
  );
  return response.data;
};
