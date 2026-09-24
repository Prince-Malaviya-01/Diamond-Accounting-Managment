import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const proxyTarget = "http://127.0.0.1:8000";
const createProxyRule = () => ({
  target: proxyTarget,
  changeOrigin: true,
  bypass: (req) => {
    // If the browser is requesting an HTML document (like navigating to /admin in URL bar), return SPA index.html
    if (req.headers.accept && req.headers.accept.includes("text/html")) {
      return "/index.html";
    }
  },
});

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/auth": createProxyRule(),
      "/jobs": createProxyRule(),
      "/admin": createProxyRule(),
      "/billing": createProxyRule(),
      "/analytics": createProxyRule(),
      "/users": createProxyRule(),
      "/notifications": createProxyRule(),
      "/health": createProxyRule(),
    },
  },
});


