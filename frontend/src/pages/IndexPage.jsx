import { useNavigate, Link } from "react-router-dom";
import { 
  Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings, 
  Cpu, Database, Mail, Phone, MapPin, Activity, CheckCircle2, 
  Clock, Sparkles
} from "lucide-react";

export default function IndexPage() {
  const navigate = useNavigate();

  const stats = [
    { value: "1.2M+", label: "Stones Tracked" },
    { value: "99.99%", label: "System Uptime" },
    { value: "300+", label: "Daily Batches" },
    { value: "100%", label: "Billing Accuracy" }
  ];

  const features = [
    {
      icon: <Cpu className="text-primary" size={24} />,
      title: "Real-time Operations Queue",
      description: "Monitor stone files from initial drag-and-drop to processing and final completion in a high-fidelity visual job queue."
    },
    {
      icon: <FolderSync className="text-primary" size={24} />,
      title: "Silent Local Sync Engine",
      description: "Advanced background backup service downloads completed diamond reports straight to your admin D:\\ drive instantly."
    },
    {
      icon: <Receipt className="text-primary" size={24} />,
      title: "Automated Billing & Invoices",
      description: "Automate complex calculations, compile monthly statements, and generate professional PDFs and Excel sheets."
    },
    {
      icon: <Settings className="text-primary" size={24} />,
      title: "Weight & Price Control",
      description: "Manage pricing grids flexibly by carat weight range, define custom weights, and configure global default models."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Upload & Queue",
      desc: "Clients securely drag and drop diamond sheets into the encrypted web dashboard portal."
    },
    {
      num: "02",
      title: "Async Processing",
      desc: "The background worker thread processes the stones, calculating appropriate pricing and validation rules."
    },
    {
      num: "03",
      title: "Automatic Local Sync",
      desc: "The admin PC's background sync service downloads completed stone files straight to local storage."
    },
    {
      num: "04",
      title: "Instant Statement Generation",
      desc: "Invoices and monthly financial summaries are automatically compiled with 100% mathematical accuracy."
    }
  ];

  return (
    <div className="landing-page" style={{ 
      minHeight: "100vh", 
      background: "var(--bg)",
      color: "var(--text)",
      position: "relative",
      overflowX: "hidden",
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* ── HEADER ── */}
      <header className="shell-header responsive-landing-header anim-fade-in-down">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "inherit" }}>
          <div className="panel-icon primary" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Diamond size={18} />
          </div>
          <span style={{ 
            fontWeight: 800, 
            fontSize: "1.4rem", 
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Diamond
          </span>
        </Link>

        <div className="landing-header-buttons">
          <Link 
            to="/login/client"
            className="btn btn-outline" 
            style={{ borderRadius: "var(--radius-sm)", padding: "8px 20px", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
          >
            Client Login
          </Link>
          <Link 
            to="/login/admin"
            className="btn btn-primary" 
            style={{ 
              borderRadius: "var(--radius-sm)", 
              padding: "8px 20px", 
              fontWeight: 600, 
              fontSize: "0.85rem",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            Admin Login
          </Link>
        </div>
      </header>

      <main>
        {/* Decorative Satin Glow Blobs */}
        <div className="glow-blob blob-1 blob-float-1" style={{ position: "absolute", top: "-5%", left: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div className="glow-blob blob-2 blob-float-2" style={{ position: "absolute", bottom: "20%", right: "5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>

        {/* ── HERO SECTION ── */}
      <section className="landing-hero-section">
        <div style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "8px", 
          background: "var(--primary-bg)", 
          border: "1px solid var(--border)", 
          color: "var(--primary)", 
          borderRadius: "30px", 
          padding: "6px 16px", 
          fontSize: "0.8rem", 
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: "24px"
        }}>
          <Sparkles size={14} /> Premium High-Tech Diamond Operations Console
        </div>

        <h1 className="landing-hero-title">
          Diamond Processing &amp;<br />
          <span style={{ 
            background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Accounting Management
          </span>
        </h1>

        <p className="landing-hero-desc">
          A state-of-the-art enterprise system built specifically for diamond manufacturers. Monitor files asynchronously, automate client billing, and silently synchronize backup folders straight to local disks.
        </p>

        <div className="landing-hero-ctas anim-fade-in-up delay-300">
          <Link 
            to="/login/client"
            className="btn btn-primary" 
            style={{ 
              padding: "14px 32px", 
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "var(--radius-sm)",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Client Console <ArrowRight size={16} style={{ marginLeft: "6px" }} />
          </Link>
          <Link 
            to="/login/admin"
            className="btn btn-outline" 
            style={{ 
              padding: "14px 32px", 
              fontSize: "0.95rem", 
              fontWeight: 600, 
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Admin Control Center
          </Link>
        </div>

        {/* ── STATS SECTION ── */}
        <div className="landing-hero-stats anim-fade-in-up delay-400">
          {stats.map((s, idx) => (
            <div key={idx} className="anim-stat-pulse" style={{ textAlign: "center" }}>
              <h2 style={{ 
                fontSize: "2.8rem", 
                fontWeight: 800, 
                margin: "0 0 6px 0",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                {s.value}
              </h2>
              <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE CAPABILITIES SECTION ── */}
      <section style={{ 
        width: "92%", 
        maxWidth: "1200px", 
        margin: "0 auto 80px auto", 
        position: "relative",
        zIndex: 10 
      }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>Core Capabilities</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            Four unified components engineered to streamline your diamond manufacturing lifecycle.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "28px"
        }}>
          {features.map((f, i) => (
            <div 
              key={i} 
              className="panel anim-hover-lift" 
              style={{ 
                padding: "32px", 
                borderRadius: "var(--radius-lg)", 
                background: "var(--bg-card)",
                backdropFilter: "var(--glass)",
                WebkitBackdropFilter: "var(--glass)",
                border: "1px solid var(--border-glass)",
                boxShadow: "var(--shadow)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: 0
              }}
            >
              <div className="panel-icon primary" style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>{f.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW / HOW IT WORKS ── */}
      <section style={{ 
        background: "rgba(99, 102, 241, 0.03)", 
        borderTop: "1px solid var(--border-light)", 
        borderBottom: "1px solid var(--border-light)", 
        padding: "80px 20px",
        position: "relative",
        zIndex: 10 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>The Automated Processing Flow</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              See how stones propagate securely from user desktops to secure local admin storage in real-time.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
            position: "relative"
          }}>
            {steps.map((s, i) => (
              <div key={i} className="anim-hover-lift" style={{ 
                background: "var(--bg-card)",
                backdropFilter: "var(--glass)",
                WebkitBackdropFilter: "var(--glass)",
                border: "1px solid var(--border-glass)",
                padding: "30px",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow)",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  opacity: 0.07,
                  fontFamily: "'Outfit', sans-serif"
                }}>{s.num}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={18} className="text-success" /> {s.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* ── DETAILED PROFESSIONAL FOOTER ── */}
      <footer style={{
        background: "var(--bg-card)",
        backdropFilter: "var(--glass)",
        WebkitBackdropFilter: "var(--glass)",
        borderTop: "1px solid var(--border-glass)",
        padding: "60px 40px 30px 40px",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 -8px 32px rgba(31, 38, 135, 0.03)"
      }}>
        {/* Mobile-only Logo Icon above the columns */}
        <div className="mobile-footer-logo">
          <div className="panel-icon primary" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <Diamond size={16} />
          </div>
        </div>

        <div className="landing-footer-grid">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", textDecoration: "none", color: "inherit" }}>
              <div className="desktop-footer-logo-icon panel-icon primary" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Diamond size={16} />
              </div>
              <span style={{ 
                fontWeight: 800, 
                fontSize: "1.2rem", 
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Diamond
              </span>
            </Link>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Leading high-fidelity operations and automated statement billing console designed specifically for diamond manufacturing firms.
            </p>
          </div>

          {/* Col 2: Portals Links */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>System Portals</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
              <Link to="/login/client">Client Portal Login</Link>
              <Link to="/login/admin">Admin Control Center</Link>
            </div>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>System Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Operations Manual</span>
              <span style={{ color: "var(--text-secondary)" }}>API Documentation</span>
              <span style={{ color: "var(--text-secondary)" }}>Sync Service Guidelines</span>
            </div>
          </div>

          {/* Col 4: Operating Hours */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>Operating Hours</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <span>Monday – Friday: <strong>9:00 AM – 6:00 PM</strong></span>
              <span>Saturday: <strong>9:00 AM – 2:00 PM</strong></span>
              <span>Sunday: <strong>Closed</strong></span>
              <span>Timezone: <strong>India (GMT+5:30)</strong></span>
            </div>
          </div>
        </div>

        {/* Legal copyright bar */}
        <div style={{
          borderTop: "1px solid var(--border-light)",
          paddingTop: "24px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <span>&copy; {new Date().getFullYear()} Diamond System. All rights reserved.</span>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Statement</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
