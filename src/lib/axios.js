import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myeasykart.codeyogi.io',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
});

export default instance;
