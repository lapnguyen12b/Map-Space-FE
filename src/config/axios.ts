import axios from 'axios';
import { isProduction } from 'src/utils';

const BASE_URL = isProduction
  ? 'https://hala-express.click/api'
  : process.env.DOMAN_BE;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Accept: 'application/json' },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
