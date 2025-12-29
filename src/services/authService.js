import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

const TOKEN_KEY = 'sgs_token';
const USER_KEY = 'sgs_user';

const login = async ({ email, password }) => {
  const resp = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
  const data = resp.data;
  if (data?.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  }
  return data;
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

const getToken = () => localStorage.getItem(TOKEN_KEY);
const getStoredUser = () => {
  const s = localStorage.getItem(USER_KEY);
  return s ? JSON.parse(s) : null;
};

export default {
  login,
  logout,
  getToken,
  getStoredUser
};