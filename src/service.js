import axios from 'axios';

export const getNotifications = async () => {
  const response = await axios.get(
    'https://sum-server.100xdevs.com/notifications'
  );
  return response.data;
};
