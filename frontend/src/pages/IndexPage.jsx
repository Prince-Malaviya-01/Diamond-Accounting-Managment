import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings, 
  Cpu, Database, Mail, Phone, MapPin, Activity, CheckCircle2, 
  Calculator, Clock, TrendingUp, Sparkles, HelpCircle, Star, 
  MessageSquare, ChevronDown, ChevronUp, UserCheck, Lock, ShieldAlert,
  ThumbsUp, Send, Check
} from "lucide-react";

export default function IndexPage() {
  const navigate = useNavigate();

  // State Hooks
  const [faqOpen, setFaqOpen] = useState(null);
  const [caratWeight, setCaratWeight] = useState("1.50");
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSuccess, setNewsSuccess] = useState(false);

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

  const faqs = [
    {
      question: "How does the silent local sync service operate?",
      answer: "A lightweight background Python utility runs on your Admin local PC. It securely communicates with the remote HTTPS server, polling for freshly completed batches and downloading them directly to your designated D:\\ drive directory within 10 seconds of processing."
    },
    {
      question: "Can Admin details be used to login on the Client portal?",
      answer: "Absolutely not. The system enforces strict role-based separation at both the frontend routing and backend database level. Clients can only authenticate via the Client form, and Admins can only log in through the Admin Control form, preventing unauthorized cross-portal access."
    },
    {
      question: "Are there any file size or line limits for diamond uploads?",
      answer: "No. The system utilizes optimized parsing algorithms capable of processing spreadsheets with tens of thousands of rows simultaneously. Stone data is digested asynchronously, updating the operations queue in real time without browser locks."
    },
    {
      question: "How are the carat weight pricing brackets configured?",
      answer: "Admins have total configuration autonomy. They can set standard carat ranges (e.g. 0.50 to 0.99, 1.00 to 2.49) and assign specific per-carat pricing models in the Admin Dashboard, which instantly applies to all future client processing runs."
    },
    {
      question: "What security measures protect the Admin account?",
      answer: "Admin accounts are protected by secure cryptographic password hashing, strict role policies, and an advanced 3-step OTP Verification Wizard bound to the registered email address (rbsofttech17@gmail.com) for password recovery."
    }
  ];

  const testimonials = [
    {
      quote: "The automated billing calculations and instant Excel synchronization have saved our Surat processing unit countless hours of manual data entry every single month.",
      name: "Ketan Patel",
      role: "Operations Director",
      company: "Shree Ram Diamonds, Surat",
      stars: 5
    },
    {
      quote: "We were skeptical about background file syncs, but this system downloads files to our local office D: drive seamlessly. The accuracy of the pointer rates is flawless.",
      name: "Dinesh Dholakia",
      role: "Managing Partner",
      company: "Hari Krishna Exports, Katargam",
      stars: 5
    },
    {
      quote: "Dual login separation gives our firm complete peace of mind. Clients view only their stones and billing records, while our admin console retains absolute master control.",
      name: "Amit Sanghavi",
      role: "Chief Accountant",
      company: "Sanghavi & Sons, Mahidharpura",
      stars: 5
    }
  ];

  // Carat price calculator logic
  const calcResults = (weightStr) => {
    const w = parseFloat(weightStr);
    if (isNaN(w) || w <= 0) return { category: "Enter valid weight", rate: 0, total: 0 };
    
    let rate = 0;
    let category = "";
    
    if (w >= 0.10 && w <= 0.49) {
      rate = 50;
      category = "Standard Melange";
    } else if (w >= 0.50 && w <= 0.99) {
      rate = 75;
      category = "Small Melange";
    } else if (w >= 1.00 && w <= 2.49) {
      rate = 210;
      category = "Large Melange";
    } else if (w >= 2.50 && w <= 3.99) {
      rate = 285;
      category = "Medium Pointer";
    } else if (w >= 4.00 && w <= 4.99) {
      rate = 330;
      category = "Large Pointer";
    } else if (w >= 5.00 && w <= 6.99) {
      rate = 390;
      category = "Sizable Solitaire";
    } else if (w >= 7.00 && w <= 9.99) {
      rate = 450;
      category = "Premium Solitaire";
    } else if (w >= 10.00) {
      rate = 600;
      category = "Supreme Diamond";
    } else {
      rate = 40;
      category = "Micro-Grit";
    }

    return {
      category,
      rate,
      total: (w * rate).toFixed(2)
    };
  };

  const currentCalc = calcResults(caratWeight);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSuccess(true);
      setTimeout(() => {
        setNewsEmail("");
        setNewsSuccess(false);
      }, 4000);
    }
  };

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
      <div className="glow-blob blob-4" style={{ bottom: "-10%", left: "5%", width: "550px", height: "550px", opacity: 0.15 }}></div>

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
        padding: "80px 20px 40px 20px", 
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
          margin: "0 auto 40px auto"
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

      {/* ── INTERACTIVE DIAMOND CALCULATOR WIDGET ── */}
      <section style={{
        width: "92%",
        maxWidth: "900px",
        margin: "0 auto 80px auto",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{
          background: "var(--bg-card)",
          backdropFilter: "var(--glass)",
          WebkitBackdropFilter: "var(--glass)",
          border: "1px solid var(--border-glass)",
          borderRadius: "var(--radius-lg)",
          padding: "40px",
          boxShadow: "var(--shadow-lg)",
          backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ display: "inline-flex", padding: "10px", borderRadius: "12px", background: "var(--primary-bg)", color: "var(--primary-light)", marginBottom: "12px" }}>
              <Calculator size={22} />
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 8px 0" }}>Interactive Carat Estimator</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              Drag the carat range slider below or enter custom weight to view standard brackets, rate categories and immediate pricing calculations.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", alignItems: "center" }}>
            {/* Input Side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>
                  Carat Weight (Ct.)
                </label>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0.10" 
                    max="50.00" 
                    value={caratWeight}
                    onChange={(e) => setCaratWeight(e.target.value)}
                    style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, padding: "12px 16px" }}
                  />
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-light)" }}>ct</span>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "6px" }}>
                  <span>0.10 ct (Melange)</span>
                  <span>10.00 ct (Premium Solitaire)</span>
                </div>
                <input 
                  type="range" 
                  min="0.10" 
                  max="12.00" 
                  step="0.05"
                  value={parseFloat(caratWeight) || 0.10}
                  onChange={(e) => setCaratWeight(e.target.value)}
                  style={{ 
                    margin: 0, 
                    cursor: "pointer", 
                    accentColor: "var(--primary)"
                  }}
                />
              </div>
            </div>

            {/* Display Side */}
            <div style={{
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "var(--radius)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(99, 102, 241, 0.1)", paddingBottom: "12px" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>Category bracket</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary-light)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={14} /> {currentCalc.category}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(99, 102, 241, 0.1)", paddingBottom: "12px" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>Rate per Carat</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)" }}>
                  ₹{currentCalc.rate}.00
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 600 }}>Calculated Net Total</span>
                <span style={{ fontSize: "1.6rem", fontWeight: 900, background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  ₹{currentCalc.total}
                </span>
              </div>
            </div>
          </div>
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

      {/* ── SECURITY ENFORCEMENT FEATURE PANEL ── */}
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
          {/* Card Showcase */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px"
          }}>
            <div style={{
              background: "var(--bg-card)",
              backdropFilter: "var(--glass)",
              border: "1px solid var(--border-glass)",
              padding: "24px",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start"
            }}>
              <div className="panel-icon purple" style={{ width: "40px", height: "40px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Lock size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 6px 0" }}>Strict Role Isolation</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                  Prevent cross-login leaks. Accounts assigned to Admin are blocked from logging in on Client portals, preserving data separation rules.
                </p>
              </div>
            </div>

            <div style={{
              background: "var(--bg-card)",
              backdropFilter: "var(--glass)",
              border: "1px solid var(--border-glass)",
              padding: "24px",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start"
            }}>
              <div className="panel-icon success" style={{ width: "40px", height: "40px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 6px 0" }}>3-Step OTP Verification</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                  Admins recover accounts using a secured 3-step OTP recovery wizard bound directly to authorized email checkpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <div style={{ display: "inline-flex", padding: "8px 16px", borderRadius: "20px", background: "var(--success-bg)", color: "var(--success)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              Safe &amp; Protected Operations
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "18px", lineHeight: 1.2 }}>
              Enterprise Grade Protection For Your Diamond Valuation Assets
            </h2>
            <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
              Our operations console is hardened from top to bottom. From remote database transaction pools down to front-end session validation safeguards, your company's stone ledger sheets are stored with total cryptographic integrity.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)" }}>256-Bit</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600 }}>SSL Encryption</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)" }}>100%</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600 }}>Role Isolation</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)" }}>Real-time</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600 }}>Backups Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY & ARCHITECTURE SECTION ── */}
      <section style={{ 
        width: "92%", 
        maxWidth: "1200px", 
        margin: "0 auto 80px auto", 
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
                <td><strong>0.10 TO 0.49</strong></td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>₹50.00</td>
                <td><span style={{ fontSize: "0.8rem", background: "var(--primary-bg)", color: "var(--primary-light)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>Standard Melange</span></td>
              </tr>
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

      {/* ── PORTFOLIO / SURAT INDUSTRY TESTIMONIALS SECTION ── */}
      <section style={{
        background: "rgba(99, 102, 241, 0.02)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        padding: "80px 20px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "inline-flex", padding: "10px", borderRadius: "12px", background: "var(--primary-bg)", color: "var(--primary-light)", marginBottom: "12px" }}>
              <MessageSquare size={22} />
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, margin: "0 0 12px 0" }}>Endorsed by Surat's Finest</h2>
            <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
              Leading diamond exporters and manufacturing unit managers in Gujarat depend on our console for absolute math precision.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {testimonials.map((t, idx) => (
              <div key={idx} style={{
                background: "var(--bg-card)",
                backdropFilter: "var(--glass)",
                border: "1px solid var(--border-glass)",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px"
              }}>
                <div>
                  <div style={{ display: "flex", gap: "4px", color: "var(--warning)", marginBottom: "16px" }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, italic: "true", margin: 0 }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--primary-bg)",
                    color: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.1rem"
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: "0 0 2px 0" }}>{t.name}</h4>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600 }}>{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FAQ SECTION (ACCORDION STYLE) ── */}
      <section style={{
        width: "92%",
        maxWidth: "800px",
        margin: "80px auto",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ display: "inline-flex", padding: "10px", borderRadius: "12px", background: "var(--primary-bg)", color: "var(--primary-light)", marginBottom: "12px" }}>
            <HelpCircle size={22} />
          </div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, margin: "0 0 12px 0" }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            Find quick answers regarding backing up synchronizations, pricing schedules, security protocols, and operational workflows.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((f, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div 
                key={idx} 
                style={{
                  background: "var(--bg-card)",
                  backdropFilter: "var(--glass)",
                  border: "1px solid var(--border-glass)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-sm)",
                  overflow: "hidden",
                  transition: "all var(--transition)"
                }}
              >
                <button 
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "22px 28px",
                    background: "transparent",
                    color: "var(--text)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 0,
                    borderRadius: 0,
                    fontWeight: 700,
                    fontSize: "1.02rem"
                  }}
                >
                  <span>{f.question}</span>
                  <span style={{ color: "var(--primary-light)" }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: "0 28px 22px 28px",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    borderTop: "1px solid rgba(99, 102, 241, 0.08)",
                    paddingTop: "16px"
                  }}>
                    {f.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DYNAMIC NEWSLETTER SIGNUP PANEL ── */}
      <section style={{
        width: "92%",
        maxWidth: "800px",
        margin: "0 auto 80px auto",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{
          background: "var(--bg-card)",
          backdropFilter: "var(--glass)",
          border: "1px solid var(--border-glass)",
          padding: "48px 40px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          textAlign: "center",
          backgroundImage: "linear-gradient(135deg, rgba(139, 92, 246, 0.04) 0%, rgba(99, 102, 241, 0.04) 100%)"
        }}>
          <div style={{ display: "inline-flex", padding: "10px", borderRadius: "12px", background: "var(--primary-bg)", color: "var(--primary-light)", marginBottom: "16px" }}>
            <Mail size={22} />
          </div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 8px 0" }}>Stay Updated on Status Alerts</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 30px auto", lineHeight: 1.5 }}>
            Subscribe to our system alerts registry to receive instantaneous push notices on automated synchronization metrics and server backup schedules.
          </p>

          {newsSuccess ? (
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--success-bg)",
              color: "var(--success)",
              padding: "12px 24px",
              borderRadius: "var(--radius-sm)",
              fontWeight: 700,
              fontSize: "0.95rem"
            }}>
              <Check size={18} /> Subscribed successfully! Systems update logged.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              maxWidth: "500px",
              margin: "0 auto"
            }}>
              <input 
                type="email" 
                placeholder="Enter your system alert email address"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                style={{ 
                  flex: 1, 
                  margin: 0,
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "12px 18px"
                }}
              />
              <button 
                type="submit"
                className="btn btn-primary"
                style={{ 
                  borderRadius: "var(--radius-sm)", 
                  padding: "12px 28px", 
                  fontWeight: 700 
                }}
              >
                Join Registry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── DETAILED PROFESSIONAL 5-COLUMN FOOTER ── */}
      <footer style={{
        background: "var(--bg-card)",
        backdropFilter: "var(--glass)",
        WebkitBackdropFilter: "var(--glass)",
        borderTop: "1px solid var(--border-glass)",
        padding: "80px 40px 40px 40px",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 -8px 32px rgba(31, 38, 135, 0.03)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
          marginBottom: "60px"
        }}>
          {/* Col 1: Logo & Company Description */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", cursor: "pointer" }} onClick={() => navigate("/")}>
              <div className="panel-icon primary" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Diamond size={18} />
              </div>
              <span style={{ 
                fontWeight: 800, 
                fontSize: "1.3rem", 
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Diamond System
              </span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px", maxWidth: "320px" }}>
              The ultimate high-fidelity manufacturing operations console and automated client statement billing system built specifically for diamond processing hubs in Gujarat.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "var(--primary-bg)",
                color: "var(--primary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }} onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="white"}} onMouseLeave={(e)=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="var(--primary-bg)";e.currentTarget.style.color="var(--primary-light)"}}>
                <ThumbsUp size={16} />
              </div>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "var(--primary-bg)",
                color: "var(--primary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }} onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="white"}} onMouseLeave={(e)=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="var(--primary-bg)";e.currentTarget.style.color="var(--primary-light)"}}>
                <Sparkles size={16} />
              </div>
            </div>
          </div>

          {/* Col 2: System Portals */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text)", marginBottom: "20px" }}>System Portals</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/login/client")}>Client Portal Login</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/login/admin")}>Admin Control Center</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"} onClick={() => navigate("/register")}>User Self-Registration</span>
            </div>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text)", marginBottom: "20px" }}>System Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"}>Operations Manual</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"}>API Documentation</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"}>Backup Sync Guidelines</span>
              <span style={{ color: "var(--text-secondary)", cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-secondary)"}>System Specifications</span>
            </div>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text)", marginBottom: "20px" }}>Hours &amp; Location</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <Clock size={16} className="text-primary" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <span style={{ display: "block", fontWeight: 600, color: "var(--text)" }}>Mon - Sat Operations</span>
                  <span style={{ fontSize: "0.8rem" }}>9:00 AM - 7:00 PM IST</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={16} className="text-primary" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <span style={{ display: "block", fontWeight: 600, color: "var(--text)" }}>Surat HQ</span>
                  <span style={{ fontSize: "0.8rem" }}>Surat, Gujarat, India</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={16} className="text-primary" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem" }}>rbsofttech17@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal copyright bar */}
        <div style={{
          borderTop: "1px solid var(--border-light)",
          paddingTop: "30px",
          fontSize: "0.82rem",
          color: "var(--text-light)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <span>&copy; {new Date().getFullYear()} Diamond Accounting System. All rights reserved. engineered with absolute precision.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-light)"}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-light)"}>Terms of Service</span>
            <span style={{ cursor: "pointer" }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--primary-light)"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-light)"}>System Security</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
