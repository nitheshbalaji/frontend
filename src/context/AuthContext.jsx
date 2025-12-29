import React, { createContext, useContext, useState } from 'react';
import authService from '../services/authService';

const AuthContext = createContext({
  user: null,
  token: null,
  login: async () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
const [user, setUser] = useState({
  firstName: "Demo",
  lastName: "User",
  role: "citizen"
});

  const [token, setToken] = useState(authService.getToken());

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    if (data) {
      setUser(data.user);
      setToken(data.token);
    }
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
