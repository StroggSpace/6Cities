import axios, { AxiosError } from 'axios';
import { Comment } from '../types/comments';
import { AuthStatusResponse } from '../types/Auth';
import { Hotel } from '../types/hotels';

export const instance = axios.create({
  baseURL: 'https://10.react.htmlacademy.pro/six-cities',
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const userString = localStorage.getItem('persist:user');
  const user = userString ? JSON.parse(userString) as AuthStatusResponse : null;
  const token = user?.token;
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
      && window.location.pathname !== '/login'
      && window.location.pathname !== '/'
      && window.location.pathname !== '/go-away') {
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);


export const sentComment = async (id: string, data: { comment: string; rating: number }) => {
  const response = await instance.post<Comment>(`/comments/${id}`, data);
  return response.data;
};

export const changeFavoriteStatus = async (hotelId: number | undefined, status: number) => {
  try {
    const response = await instance.post<Hotel>(`/favorite/${hotelId ? hotelId : ''}/${status}`);
    return response.data;
  } catch {
    window.location.href = '/login';
  }
};
