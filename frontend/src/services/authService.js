import api from "../api/api";

export const register = async (data) => api.post("/auth/register", data);
export const login = async (data) => api.post("/auth/login", data);
export const getUser = async () => api.get("/auth/me");
