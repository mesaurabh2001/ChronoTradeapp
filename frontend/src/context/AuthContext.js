// frontend/src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && !user) {
      api
        .get("/auth/me")
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        })
        .catch(() => {
          setToken(null);
          localStorage.removeItem("token");
        });
    }
  }, [token, user]);

  const register = async (formData) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/register", formData);
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed"
      };
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed"
      };
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    if (!token) return;
    const res = await api.get("/auth/me");
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, register, login, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
