import axios from 'axios';

export const URL = 'https://pre-onboarding-selection-task.shop/';

export const client = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('token');

export const accessClient = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

accessClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      if (localStorage.getItem('token')) {
        window.location.reload();
      }
    }
  },
);
