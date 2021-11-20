/* eslint-disable prettier/prettier */
import axios from 'axios';

const API_BASE_URL = 'https://www.afsanay.com/api/v1';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor

instance.interceptors.request.use(function (config) {
  // Add token if available
  // config.headers['Authorization'] = 'Bearer ' + Cookies.get('_token');
  return config;
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // console.log('Unauthorized');
  },
);

export default instance;
