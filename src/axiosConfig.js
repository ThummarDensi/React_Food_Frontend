import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5001'
    : process.env.REACT_APP_API_URL;
