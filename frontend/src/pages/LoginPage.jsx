import { useState } from "react";
import { Diamond, Eye, EyeOff, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("is_admin", String(data.is_admin));
      navigate(data.is_admin ? "/admin" : "/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <div className="logo-icon">
          <Diamond size={28} />
        </div>
        <h1>Diamond Processing</h1>
        <p>Sign in to your operations console</p>

        <div style={{ position: "relative" }}>
          <input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
            autoFocus
            autoComplete="off"
          />
        </div>

        <div style={{ position: "relative" }}>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            style={{ paddingRight: 42 }}
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            style={{
              position: "absolute", right: 8, top: 6,
              background: "none", border: "none", padding: 4,
              color: "var(--text-light)", cursor: "pointer"
            }}
          >
            {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <small className="error">{error}</small>}

        <button type="submit" className="btn-primary" disabled={loading}
          style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
          <LogIn size={18} />
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
