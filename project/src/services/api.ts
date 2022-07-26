import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';

const BACKEND_URL = ' https://9.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  return api;
}
