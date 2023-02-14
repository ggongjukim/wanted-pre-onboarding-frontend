import axios from 'axios';

export const URL = 'http://localhost:8000';

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
