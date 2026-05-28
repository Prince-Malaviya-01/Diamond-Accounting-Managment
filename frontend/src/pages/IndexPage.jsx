import { useNavigate } from "react-router-dom";
import { Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings, Cpu } from "lucide-react";

export default function IndexPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Cpu className="text-primary" size={24} />,
      title: "Real-time Operations Queue",
      description: "Track stone files from upload to processing and final completion in a high-fidelity visual job monitor."
    },
    {
      icon: <FolderSync className="text-primary" size={24} />,
      title: "Silent Local Sync Engine",
      description: "Background backup service downloads completed files straight to your admin D:\\ drive instantly."
    },
    {
      icon: <Receipt className="text-primary" size={24} />,
      title: "Automated Billing & Invoices",
      description: "Calculate user statements, generate monthly invoice PDFs and spreadsheets in a single tap."
    },
    {
      icon: <Settings className="text-primary" size={24} />,
      title: "Weight & Price Control",
      description: "Manage pricing grids by carat, define custom weights, and configure global default models."
    }
  ];

  return (
    <div className="landing-page" style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      background: "var(--bg)",
      color: "var(--text)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Ambient background glow blobs */}
      <div className="glow-blob blob-1" style={{ top: "-10%", left: "15%" }}></div>
      <div className="glow-blob blob-2" style={{ bottom: "-10%", right: "10%" }}></div>
      <div className="glow-blob blob-3" style={{ top: "40%", right: "40%" }}></div>

      {/* ── Header ── */}
      <header className="shell-header" style={{
        margin: "20px auto",
        width: "92%",
        maxWidth: "1200px",
        background: "var(--bg-card)",
        backdropFilter: "var(--glass)",
        WebkitBackdropFilter: "var(--glass)",
        border: "1px solid var(--border-glass)",
        borderRadius: "var(--radius)",
        padding: "16px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "var(--shadow)",
        zIndex: 100
      }}>
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => navigate("/")}>
          <div className="panel-icon primary" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justify: "center" }}>
            <Diamond size={18} />
          </div>
          <span style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 800, 
            fontSize: "1.4rem", 
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Diamond
          </span>
        </div>

        {/* Right: Authentication Links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <button 
            className="btn btn-outline" 
            style={{ 
              borderRadius: "var(--radius-sm)", 
              padding: "8px 20px", 
              fontWeight: 600,
              fontSize: "0.85rem"
            }}
            onClick={() => navigate("/login/client")}
          >
            Client Login
          </button>
          <button 
            className="btn btn-primary" 
            style={{ 
              borderRadius: "var(--radius-sm)", 
              padding: "8px 20px", 
              fontWeight: 600,
              fontSize: "0.85rem",
              background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)"
            }}
            onClick={() => navigate("/login/admin")}
          >
            Admin Login
          </button>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", zIndex: 10 }}>
        <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "50px" }}>
          {/* Badge */}
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            background: "var(--primary-bg)", 
            border: "1px solid var(--border)", 
            color: "var(--primary-light)", 
            borderRadius: "30px", 
            padding: "6px 16px", 
            fontSize: "0.8rem", 
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "24px"
          }}>
            <ShieldCheck size={14} /> Enterprise Grade Operations Console
          </div>

          <h1 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "3.2rem", 
            fontWeight: 800, 
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "18px"
          }}>
            Diamond Accounting &amp;<br />
            <span style={{ 
              background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Processing Management
            </span>
          </h1>

          <p style={{ 
            fontSize: "1.1rem", 
            color: "var(--text-secondary)", 
            lineHeight: 1.6, 
            maxWidth: "600px", 
            margin: "0 auto 36px auto" 
          }}>
            Configure price rates per carat, monitor files asynchronously, generate custom invoices, and silently synchronize backup jobs onto your local disk.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button 
              className="btn btn-primary" 
              style={{ 
                padding: "12px 28px", 
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)"
              }}
              onClick={() => navigate("/login/client")}
            >
              Get Started <ArrowRight size={16} style={{ marginLeft: "6px" }} />
            </button>
            <button 
              className="btn btn-outline" 
              style={{ 
                padding: "12px 28px", 
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)"
              }}
              onClick={() => navigate("/login/admin")}
            >
              Control Center
            </button>
          </div>
        </div>

        {/* ── Features Grid ── */}
        <section style={{ 
          width: "92%", 
          maxWidth: "1200px", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
          gap: "24px",
          marginTop: "20px",
          paddingBottom: "60px"
        }}>
          {features.map((f, i) => (
            <div 
              key={i} 
              className="panel" 
              style={{ 
                padding: "28px", 
                borderRadius: "var(--radius-lg)", 
                background: "var(--bg-card)",
                backdropFilter: "var(--glass)",
                WebkitBackdropFilter: "var(--glass)",
                border: "1px solid var(--border-glass)",
                boxShadow: "var(--shadow)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
                marginBottom: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              <div className="panel-icon primary" style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>{f.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>{f.description}</p>
            </div>
          ))}
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{
        width: "100%",
        padding: "24px",
        textAlign: "center",
        borderTop: "1px solid var(--border-light)",
        fontSize: "0.85rem",
        color: "var(--text-light)",
        zIndex: 10
      }}>
        &copy; {new Date().getFullYear()} Diamond Processing &amp; Accounting Management System. All rights reserved.
      </footer>
    </div>
  );
}
