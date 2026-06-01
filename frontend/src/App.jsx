import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));
const UserDashboardPage = lazy(() => import("./pages/UserDashboardPage"));

function RequireAuth({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("is_admin") === "true";

  if (!token) {
    // If not authenticated, redirect to the home page where the login modal resides
    return <Navigate to="/" replace />;
  }
  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <Suspense fallback={<div style={{ padding: "1rem" }}>Loading...</div>}>
      <Routes>
        {/* Core Landings */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/index" element={<IndexPage />} />


        {/* Protected Portals */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <UserDashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth adminOnly>
              <AdminDashboardPage />
            </RequireAuth>
          }
        />
        
        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
