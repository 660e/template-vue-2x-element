import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    window.console.log(error.response);
    Message({
      message: error.response.data,
      type: 'error'
    });
    return Promise.reject(error);
  }
);

export default service;