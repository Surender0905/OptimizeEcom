import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
});

export default instance;
