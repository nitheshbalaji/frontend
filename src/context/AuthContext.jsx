import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ LOGIN WITH ROLE (ADMIN / CITIZEN)
  const login = async (userData) => {
    setUser({
      id: Date.now(),          // simple unique id
      name: userData.username || "User",
      role: userData.role || "citizen",
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
