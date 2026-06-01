import { useState, useEffect } from "react";
import { Diamond, Eye, EyeOff, LogIn, ArrowLeft, KeyRound, Mail, ShieldAlert, CheckCircle2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import ThemeToggle from "../components/ThemeToggle";

export default function LoginPage({ mode = "client", isModal = false, onClose }) {
  const navigate = useNavigate();
  const isAdminLogin = mode === "admin";



  // Login Form State
  const [form, setForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // Forgot Password Flow State
  const [forgotMode, setForgotMode] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotOtp, setForgotOtp] = useState("");
  const [forgotPasswords, setForgotPasswords] = useState({ newPwd: "", confirmPwd: "" });
  const [showForgotPwd, setShowForgotPwd] = useState(false);
  const [showConfirmForgotPwd, setShowConfirmForgotPwd] = useState(false);
  
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const payload = {
        username: form.username,
        password: form.password,
        is_admin_login: isAdminLogin
      };
      const { data } = await api.post("/auth/login", payload);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("is_admin", String(data.is_admin));
      navigate(data.is_admin ? "/admin" : "/dashboard");
    } catch (err) {
      setLoginError(err.response?.data?.detail || "Login failed. Please verify credentials.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setForgotError("");
    setForgotSuccess("");
    setForgotLoading(true);
    try {
      const { data } = await api.post("/auth/forgot-password", { email: forgotEmail });
      setForgotSuccess(data.message);
      setForgotStep(2);
    } catch (err) {
      setForgotError(err.response?.data?.detail || "Failed to generate OTP.");
    } finally {
      setForgotLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setForgotError("");
    setForgotSuccess("");
    setForgotLoading(true);
    try {
      await api.post("/auth/verify-otp", { email: forgotEmail, otp: forgotOtp });
      setForgotSuccess("OTP verified successfully! Now define your new password.");
      setForgotStep(3);
    } catch (err) {
      setForgotError(err.response?.data?.detail || "Incorrect or expired OTP.");
    } finally {
      setForgotLoading(false);
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setForgotError("");
    setForgotSuccess("");
    
    if (forgotPasswords.newPwd !== forgotPasswords.confirmPwd) {
      setForgotError("Passwords do not match!");
      return;
    }
    
    setForgotLoading(true);
    try {
      const { data } = await api.post("/auth/reset-password", {
        email: forgotEmail,
        otp: forgotOtp,
        new_password: forgotPasswords.newPwd
      });
      
      // Reset state and exit forgot mode
      setForgotMode(false);
      setForgotStep(1);
      setForgotEmail("");
      setForgotOtp("");
      setForgotPasswords({ newPwd: "", confirmPwd: "" });
      
      setLoginError("");
      // Show success message on the standard login card
      alert(data.message || "Password updated successfully. Please login with your new password.");
    } catch (err) {
      setForgotError(err.response?.data?.detail || "Failed to update password.");
    } finally {
      setForgotLoading(false);
    }
  };

  const handleCancelForgot = () => {
    setForgotMode(false);
    setForgotStep(1);
    setForgotError("");
    setForgotSuccess("");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const containerStyle = isModal ? {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(3, 4, 8, 0.75)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
    animation: "fadeIn 0.3s ease"
  } : { position: "relative" };

  const containerClass = isModal ? "login-modal-overlay" : "auth-page";

  return (
    <div
      className={containerClass}
      style={containerStyle}
      onClick={isModal ? handleBackdropClick : undefined}
    >
      {/* Ambient decorative blobs */}
      <div className="glow-blob blob-1" style={{ top: "-10%", left: "15%" }}></div>
      <div className="glow-blob blob-2" style={{ bottom: "-10%", right: "10%" }}></div>

      {/* Floating Home Back Button */}
      {!isModal && (
        <button 
          className="btn btn-outline btn-sm btn-back-home" 
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            borderRadius: "var(--radius-sm)",
            zIndex: 1000
          }}
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      )}

      {/* Floating Theme Toggle */}
      {!isModal && (
        <div style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          zIndex: 1000
        }}>
          <ThemeToggle />
        </div>
      )}

      {/* ── CARD: FORGOT PASSWORD FLOW ── */}
      {forgotMode ? (
        <div className="auth-card" style={{ position: "relative", animation: "modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          {isModal && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="btn-close-modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                cursor: "pointer",
                transition: "all var(--transition)",
                padding: 0,
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(90deg)";
                e.currentTarget.style.background = "var(--primary-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              }}
            >
              <X size={18} />
            </button>
          )}
          <div className="logo-icon primary">
            <KeyRound size={28} />
          </div>
          <h1>Reset Password</h1>
          <p style={{ marginBottom: "20px" }}>Admin Security Portal</p>

          {/* Feedback states */}
          {forgotError && (
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "var(--danger-bg)", 
              border: "1px solid var(--border)", 
              color: "var(--danger)", 
              padding: "10px 14px", 
              borderRadius: "var(--radius-sm)", 
              fontSize: "0.85rem",
              marginBottom: "16px"
            }}>
              <ShieldAlert size={16} style={{ flexShrink: 0 }} />
              <span>{forgotError}</span>
            </div>
          )}

          {forgotSuccess && (
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "var(--success-bg)", 
              border: "1px solid var(--border)", 
              color: "var(--success)", 
              padding: "10px 14px", 
              borderRadius: "var(--radius-sm)", 
              fontSize: "0.85rem",
              marginBottom: "16px"
            }}>
              <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
              <span>{forgotSuccess}</span>
            </div>
          )}

          {/* STEP 1: Input Email */}
          {forgotStep === 1 && (
            <form onSubmit={handleSendOtp}>
              <div style={{ position: "relative", marginBottom: "16px" }}>
                <input
                  type="email"
                  placeholder="Enter registered Admin Email"
                  aria-label="Registered Admin Email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  autoFocus
                  style={{ paddingLeft: "40px" }}
                />
                <Mail size={16} style={{ position: "absolute", left: "14px", top: "14px", color: "var(--text-light)" }} />
              </div>
              <button type="submit" className="btn-primary" disabled={forgotLoading} style={{ width: "100%", justifyContent: "center", padding: "12px", marginBottom: "12px" }}>
                {forgotLoading ? "Sending OTP..." : "Request 6-Digit OTP"}
              </button>
            </form>
          )}

          {/* STEP 2: Input OTP */}
          {forgotStep === 2 && (
            <form onSubmit={handleVerifyOtp}>
              <div style={{ position: "relative", marginBottom: "16px" }}>
                <input
                  type="text"
                  placeholder="Enter 6-Digit OTP"
                  aria-label="6-Digit OTP"
                  value={forgotOtp}
                  onChange={(e) => setForgotOtp(e.target.value)}
                  required
                  maxLength={6}
                  autoFocus
                  style={{ textAlign: "center", letterSpacing: "6px", fontSize: "1.2rem", fontWeight: 700 }}
                />
              </div>
              <button type="submit" className="btn-primary" disabled={forgotLoading} style={{ width: "100%", justifyContent: "center", padding: "12px", marginBottom: "12px" }}>
                {forgotLoading ? "Verifying..." : "Verify Code"}
              </button>
            </form>
          )}

          {/* STEP 3: Enter New Password */}
          {forgotStep === 3 && (
            <form onSubmit={handleResetPassword}>
              <div style={{ position: "relative", marginBottom: "12px" }}>
                <input
                  type={showForgotPwd ? "text" : "password"}
                  placeholder="New Password"
                  aria-label="New Password"
                  value={forgotPasswords.newPwd}
                  onChange={(e) => setForgotPasswords({ ...forgotPasswords, newPwd: e.target.value })}
                  required
                  autoFocus
                  style={{ paddingRight: 42, marginBottom: 0 }}
                />
                <button
                  type="button"
                  onClick={() => setShowForgotPwd(!showForgotPwd)}
                  aria-label={showForgotPwd ? "Hide new password" : "Show new password"}
                  style={{
                    position: "absolute", right: 12, top: "50%",
                    transform: "translateY(-50%)",
                    background: "none", border: "none", padding: 4,
                    color: "var(--text-light)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}
                >
                  {showForgotPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div style={{ position: "relative", marginBottom: "18px" }}>
                <input
                  type={showConfirmForgotPwd ? "text" : "password"}
                  placeholder="Confirm New Password"
                  aria-label="Confirm New Password"
                  value={forgotPasswords.confirmPwd}
                  onChange={(e) => setForgotPasswords({ ...forgotPasswords, confirmPwd: e.target.value })}
                  required
                  style={{ paddingRight: 42, marginBottom: 0 }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmForgotPwd(!showConfirmForgotPwd)}
                  aria-label={showConfirmForgotPwd ? "Hide confirm password" : "Show confirm password"}
                  style={{
                    position: "absolute", right: 12, top: "50%",
                    transform: "translateY(-50%)",
                    background: "none", border: "none", padding: 4,
                    color: "var(--text-light)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}
                >
                  {showConfirmForgotPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <button type="submit" className="btn-primary" disabled={forgotLoading} style={{ width: "100%", justifyContent: "center", padding: "12px", marginBottom: "12px" }}>
                {forgotLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          )}

          <button type="button" className="btn btn-outline" onClick={handleCancelForgot} style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
            Cancel
          </button>
        </div>
      ) : (
        /* ── CARD: STANDARD LOGIN FLOW ── */
        <form className="auth-card" onSubmit={handleLoginSubmit} style={{ position: "relative", animation: "modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          {isModal && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="btn-close-modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                cursor: "pointer",
                transition: "all var(--transition)",
                padding: 0,
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(90deg)";
                e.currentTarget.style.background = "var(--primary-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              }}
            >
              <X size={18} />
            </button>
          )}
          <div className="logo-icon primary">
            <Diamond size={28} />
          </div>
          <h1>{isAdminLogin ? "Admin Control" : "Client Operations"}</h1>
          <p style={{ marginBottom: "20px" }}>Sign in to your {isAdminLogin ? "system settings" : "diamond queue"}</p>

          <div style={{ position: "relative", marginBottom: "14px" }}>
            <input
              placeholder="Username"
              aria-label="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              autoFocus
              autoComplete="off"
              style={{ marginBottom: 0 }}
            />
          </div>

          <div style={{ position: "relative", marginBottom: "14px" }}>
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              style={{ paddingRight: 42, marginBottom: 0 }}
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              aria-label={showPwd ? "Hide password" : "Show password"}
              style={{
                position: "absolute", right: 12, top: "50%",
                transform: "translateY(-50%)",
                background: "none", border: "none", padding: 4,
                color: "var(--text-light)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {loginError && <small className="error" style={{ marginBottom: "14px", display: "block" }}>{loginError}</small>}

          <button type="submit" className="btn-primary" disabled={loginLoading}
            style={{ width: "100%", justifyContent: "center", padding: "12px", marginBottom: "14px" }}>
            <LogIn size={18} />
            {loginLoading ? "Signing in..." : "Sign In"}
          </button>

          {/* Render Forgot Password link only for Admin Login */}
          {isAdminLogin && (
            <div style={{ textAlign: "center", marginTop: "4px" }}>
              <button 
                type="button" 
                className="btn-ghost" 
                onClick={() => setForgotMode(true)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  color: "var(--primary-light)", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "4px 8px"
                }}
              >
                Forgot Password?
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
