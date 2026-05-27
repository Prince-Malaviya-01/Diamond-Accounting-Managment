import { useState } from "react";
import { Diamond, UserPlus, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company_name: "",
    username: "",
    password: "",
    rate_per_carat: 0,
  });
  const [message, setMessage] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const isAdmin = localStorage.getItem("is_admin") === "true";

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      await api.post("/auth/register", form);
      setMessage("Registration complete! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      // ... existing error handling ...
      const detail = err.response?.data?.detail;
      setMessage(typeof detail === "string" ? detail : "Registration failed");
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
        <h1>{isAdmin ? "Add New Client" : "Create Account"}</h1>
        <p>{isAdmin ? "Register a new client account" : "Register as a new client"}</p>

        <input
          placeholder="Company Name"
          value={form.company_name}
          onChange={(e) => setForm({ ...form, company_name: e.target.value })}
          required
          autoFocus
          autoComplete="off"
        />
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          autoComplete="off"
        />
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            autoComplete="new-password"
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


        {message && <small className={message.includes("complete") ? "muted" : "error"}>{message}</small>}

        <button type="submit" className="btn-primary" disabled={loading}
          style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
          <UserPlus size={18} />
          {loading ? "Saving..." : (isAdmin ? "Add Client" : "Create Account")}
        </button>

        <Link to={isAdmin ? "/admin" : "/login"}>
          {isAdmin ? "Cancel and go back" : "Already have an account? Sign in"}
        </Link>
      </form>
    </div>
  );
}
