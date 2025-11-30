import api from "../api/api";

export const searchSkills = (q) => api.get("/skills/search", { params: { q } });
export const addToWatchlist = (id) => api.post(`/skills/${id}/watchlist`);
export const startLearning = (id) => api.post(`/skills/${id}/start`, { hours: 1 });
export const getLedger = () => api.get(`/skills/ledger/me`);
