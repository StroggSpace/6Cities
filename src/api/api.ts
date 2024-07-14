import axios, { AxiosError } from 'axios';
import { Comment } from '../types/comments';

export const instance = axios.create({
  baseURL: 'https://10.react.htmlacademy.pro/six-cities',
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      'x-token': token,
    };
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if ((error.response?.status === 401)
      && window.location.pathname !== '/login' && window.location.pathname !== '/') {
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);


export const sentComment = async (id: string, data: { comment: string; rating: number }) => {
  const response = await instance.post<Comment>(`/comments/${id}`, data);
  return response.data;
};

export const logout = async () => {
  await instance.delete('/logout');
  window.location.href = '/';
};
