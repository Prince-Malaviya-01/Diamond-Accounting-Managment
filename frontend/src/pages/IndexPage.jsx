import { useNavigate } from "react-router-dom";
import { 
  Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings, 
  Cpu, Database, Mail, Phone, MapPin, Activity, CheckCircle2, 
  Calculator, Clock, TrendingUp, Sparkles 
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
      {/* Decorative Satin Glow Blobs */}
      <div className="glow-blob blob-1" style={{ top: "-5%", left: "10%", width: "500px", height: "500px" }}></div>
      <div className="glow-blob blob-2" style={{ bottom: "20%", right: "5%", width: "600px", height: "600px" }}></div>
      <div className="glow-blob blob-3" style={{ top: "40%", right: "35%", width: "400px", height: "400px" }}></div>

      {/* ── HEADER ── */}
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
        zIndex: 100,
        position: "relative"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => navigate("/")}>
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
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <button 
            className="btn btn-outline" 
            style={{ borderRadius: "var(--radius-sm)", padding: "8px 20px", fontWeight: 600, fontSize: "0.85rem" }}
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

      {/* ── HERO SECTION ── */}
      <section style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "80px 20px 60px 20px", 
        textAlign: "center", 
        position: "relative",
        zIndex: 10 
      }}>
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
          <Sparkles size={14} /> Premium High-Tech Diamond Operations Console
        </div>

        <h1 style={{ 
          fontSize: "3.8rem", 
          fontWeight: 800, 
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginBottom: "20px"
        }}>
          Diamond Processing &amp;<br />
          <span style={{ 
            background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Accounting Management
          </span>
        </h1>

        <p style={{ 
          fontSize: "1.15rem", 
          color: "var(--text-secondary)", 
          lineHeight: 1.65, 
          maxWidth: "680px", 
          margin: "0 auto 40px auto" 
        }}>
          A state-of-the-art enterprise system built specifically for diamond manufacturers. Monitor files asynchronously, automate client billing, and silently synchronize backup folders straight to local disks.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "60px" }}>
          <button 
            className="btn btn-primary" 
            style={{ 
              padding: "14px 32px", 
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "var(--radius-sm)",
              background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
              boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)"
            }}
            onClick={() => navigate("/login/client")}
          >
            Client Console <ArrowRight size={16} style={{ marginLeft: "6px" }} />
          </button>
          <button 
            className="btn btn-outline" 
            style={{ padding: "14px 32px", fontSize: "0.95rem", fontWeight: 600, borderRadius: "var(--radius-sm)" }}
            onClick={() => navigate("/login/admin")}
          >
            Admin Control Center
          </button>
        </div>

        {/* ── STATS SECTION ── */}
        <div style={{
          background: "var(--bg-card)",
          backdropFilter: "var(--glass)",
          WebkitBackdropFilter: "var(--glass)",
          border: "1px solid var(--border-glass)",
          borderRadius: "var(--radius-lg)",
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          boxShadow: "var(--shadow)",
          maxWidth: "1000px",
          margin: "0 auto 80px auto"
        }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <h2 style={{ 
                fontSize: "2.8rem", 
                fontWeight: 800, 
                margin: "0 0 6px 0",
                background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
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
              className="panel" 
              style={{ 
                padding: "32px", 
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
              <div key={i} style={{ 
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

      {/* ── TECHNOLOGY & SECURITY SECTION ── */}
      <section style={{ 
        width: "92%", 
        maxWidth: "1200px", 
        margin: "80px auto", 
        position: "relative",
        zIndex: 10 
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center"
        }}>
          {/* Left Description */}
          <div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "18px" }}>
              High-Tech Architecture Built For Enterprise Operations
            </h2>
            <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
              Leveraging the power of robust backends and optimized static runtimes to yield absolute accuracy, zero downtime, and lag-free interaction.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div className="panel-icon success" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Database size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 4px 0" }}>Robust PostgreSQL Database</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Transactional schema structures protect operations logs, users tables, and pricing configurations.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div className="panel-icon success" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Activity size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 4px 0" }}>Hardware-Accelerated Fluid UI</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Butter-smooth circular view transitions and stable loaders run natively on the GPU at 60 FPS.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architecture Card */}
          <div style={{
            background: "var(--bg-card)",
            backdropFilter: "var(--glass)",
            WebkitBackdropFilter: "var(--glass)",
            border: "1px solid var(--border-glass)",
            borderRadius: "var(--radius-lg)",
            padding: "40px",
            boxShadow: "var(--shadow-lg)",
            position: "relative"
          }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "24px", textAlign: "center" }}>System Specs</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-light)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>API Framework</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)" }}>FastAPI (Python)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-light)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Database Manager</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)" }}>PostgreSQL (Remote)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-light)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Reverse Proxy</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)" }}>Nginx (Port 80/443)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-light)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>SSL Security</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)" }}>Let's Encrypt (Certbot)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "4px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Theme Engine</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)" }}>Document View Transitions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOCK PRICING SCALE SHOWCASE ── */}
      <section style={{ 
        width: "92%", 
        maxWidth: "1200px", 
        margin: "0 auto 80px auto", 
        position: "relative",
        zIndex: 10 
      }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>Dynamic Pricing Grids</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            Clean weight divisions ensure highly structured and mathematically error-free invoicing.
          </p>
        </div>

        <div className="table-container" style={{ maxWidth: "800px", margin: "0 auto", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Weight Range (Carats)</th>
                <th>Price Per Carat</th>
                <th>Standard Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>0.50 TO 0.99</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹75.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Small Melange</span></td>
              </tr>
              <tr>
                <td><strong>1.00 TO 2.49</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹210.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Large Melange</span></td>
              </tr>
              <tr>
                <td><strong>2.50 TO 3.99</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹285.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Medium Pointer</span></td>
              </tr>
              <tr>
                <td><strong>4.00 TO 4.99</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹330.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Large Pointer</span></td>
              </tr>
              <tr>
                <td><strong>5.00 TO 6.99</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹390.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Sizable Solitaire</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
        <div style={{
          maxWIdth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginBottom: "40px"
        }}>
          {/* Col 1: Logo & Tagline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div className="panel-icon primary" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Leading high-fidelity operations and automated statement billing console designed specifically for diamond manufacturing firms.
            </p>
          </div>

          {/* Col 2: Portals Links */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>System Portals</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/login/client")}>Client Portal Login</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/login/admin")}>Admin Control Center</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/register")}>User Self-Registration</span>
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

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>Contact Details</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={14} className="text-primary" />
                <span>rbsofttech17@gmail.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={14} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={14} className="text-primary" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal copyright bar */}
        <div style={{
          borderTop: "1px solid var(--border-light)",
          paddingTop: "24px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--text-light)",
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
