import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://10.react.htmlacademy.pro/six-cities',
  timeout: 5000,
});