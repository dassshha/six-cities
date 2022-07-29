import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';

const BACKEND_URL = ' https://9.react.pages.academy/six-cities';
const TIMEOUT = 5000;

enum HttpCode {
  Unauthorized= 401,
}

export function createApi(onUnauthorized: () => void): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;
      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }
      return Promise.reject(error);
    },
  );

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
