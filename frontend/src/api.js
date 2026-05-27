import axios from "axios";

const api = axios.create({
  baseURL: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:8000"
    : `${window.location.protocol}//${window.location.hostname}:8000`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Billing API helpers ──────────────────────────────────────
export const billingApi = {
  // User endpoints
  getHistory: () => api.get("/billing/history"),
  getStoneReport: (year, month) => api.get("/billing/stone-report", { params: { year, month } }),
  downloadInvoice: (id) => api.get(`/billing/invoice/${id}`, { responseType: "blob" }),
  downloadInvoiceExcel: (id) => api.get(`/billing/invoice/${id}/excel`, { responseType: "blob" }),

  // Admin endpoints
  getMonthly: (year, month) => api.get("/billing/monthly", { params: { year, month } }),
  generateInvoices: (year, month, userId) => api.post("/billing/invoice", null, { params: { year, month, user_id: userId } }),
  getAdminOverview: (year, month) => api.get("/billing/admin/overview", { params: { year, month } }),
  getAdminStoneReport: (userId, year, month) => api.get("/billing/admin/stone-report", { params: { user_id: userId, year, month } }),
  getAllInvoices: () => api.get("/billing/admin/all-invoices"),
  adminDownloadInvoice: (id) => api.get(`/billing/admin/invoice/${id}`, { responseType: "blob" }),
  adminDownloadInvoiceExcel: (id) => api.get(`/billing/admin/invoice/${id}/excel`, { responseType: "blob" }),
  getUserAccount: (userId, year, month) => api.get(`/billing/admin/user-account/${userId}`, { params: { year, month } }),
};

export default api;
