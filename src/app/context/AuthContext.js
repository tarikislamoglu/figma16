"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);
  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser({});
  };
  const messages = [
    {
      status: "Alert",
      text: "Benzene percentage is high. Long exposure to benzene can cause various lungs conditions",
      time: 5,
    },
    {
      status: "Danger",
      text: "You Lost 8 mins worth of your lifespan",
      time: 12,
    },
  ];
  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, messages, isDark, setIsDark }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
