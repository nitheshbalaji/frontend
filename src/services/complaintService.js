import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import authService from './authService';

const instance = axios.create({
  baseURL: API_BASE_URL
});

instance.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const getAll = async () => {
  const resp = await instance.get('/complaints');
  return resp.data;
};

const getByUser = async (userId) => {
  const resp = await instance.get(`/complaints/user/${userId}`);
  return resp.data;
};

const getById = async (id) => {
  const resp = await instance.get(`/complaints/${id}`);
  return resp.data;
};

const createComplaint = async (payload) => {
  // payload: { title, description, category, attachments? }
  const resp = await instance.post('/complaints', payload);
  return resp.data;
};

const updateStatus = async (id, status, adminNote) => {
  const resp = await instance.patch(`/complaints/${id}/status`, { status, adminNote });
  return resp.data;
};

export default {
  getAll,
  getByUser,
  getById,
  createComplaint,
  updateStatus
};