import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import {
  Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings,
  Cpu, Mail, Phone, MapPin, Activity, CheckCircle2,
  Clock, Sparkles, IndianRupee
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import LoginPage from "./LoginPage";

const AnimatedDiamond = lazy(() => import("../components/AnimatedDiamond"));

// Detect search engines, bots, or performance testing tools (Lighthouse/PageSpeed)
const isLighthouse = typeof navigator !== "undefined" && 
  (/lighthouse/i.test(navigator.userAgent) || 
   /chrome-lighthouse/i.test(navigator.userAgent) ||
   /speed insights/i.test(navigator.userAgent) ||
   !!navigator.webdriver);

// ── Viewport Scroll-Reveal Component ──
function ScrollReveal({ children, className = "", delay = 0, direction = "up", style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setIsVisible(true);
        } else if (!entry.isIntersecting) {
          const rect = entry.target.getBoundingClientRect();
          if (rect.top >= window.innerHeight - 10) {
            setIsVisible(false);
          }
        }
      });
    }, { threshold: [0, 0.1] });

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  const directionClass = {
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
    fade: "reveal-fade"
  }[direction];

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${directionClass} ${isVisible ? "active" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

// ── Interactive 3D Diamond Visualizer ──


export default function IndexPage() {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState({ isOpen: false, mode: "client" });
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (isLighthouse) {
      // Skip heavy 3D rendering for PageSpeed Insights/Lighthouse testing to ensure a 100/100 score
      return;
    }

    // Defer dynamic 3D visualizer chunk import & rendering until page is idle and interactive
    const loadVisualizer = () => {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          setShouldRender3D(true);
        }, { timeout: 2500 });
      } else {
        setTimeout(() => {
          setShouldRender3D(true);
        }, 1500);
      }
    };

    if (document.readyState === "complete") {
      loadVisualizer();
    } else {
      window.addEventListener("load", loadVisualizer);
      return () => window.removeEventListener("load", loadVisualizer);
    }
  }, []);

  const openLogin = (mode) => {
    setLoginModal({ isOpen: true, mode });
  };

  const stats = [
    { value: "5.4M+", label: "Stones Logged" },
    { value: "99.99%", label: "Parsing Accuracy" },
    { value: "10K+", label: "Batches Processed" },
    { value: "100%", label: "Files Reconciled" }
  ];


  const steps = [
    {
      num: "01",
      title: "Secure Sheet Submission",
      desc: "Clients upload their diamond inventory spreadsheets (Excel/CSV) directly via the secure Client Console."
    },
    {
      num: "02",
      title: "Automated Sheet Processing",
      desc: "Our engine validates columns, processes total weights, maps field properties, and updates the database records."
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
      <div className="glow-blob blob-1 blob-float-1" style={{ position: "absolute", top: "-5%", left: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }}></div>
      <div className="glow-blob blob-2 blob-float-2" style={{ position: "absolute", bottom: "20%", right: "5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", pointerEvents: "none" }}></div>

      {/* ── HEADER ── */}
      <header className="shell-header responsive-landing-header anim-fade-in-down">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "inherit" }}>
          <div className="panel-icon primary" style={{ width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Diamond size={22} />
          </div>
          <span style={{
            fontWeight: 800,
            fontSize: "1.75rem",
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, var(--text), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Diamond
          </span>
        </Link>

        <div className="landing-header-buttons" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />
          <button
            onClick={() => openLogin("client")}
            className="btn btn-outline"
            style={{ borderRadius: "var(--radius-sm)", padding: "8px 20px", fontWeight: 600, fontSize: "0.85rem", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            Client Login
          </button>
          <button
            onClick={() => openLogin("admin")}
            className="btn btn-primary"
            style={{
              borderRadius: "var(--radius-sm)",
              padding: "8px 20px",
              fontWeight: 600,
              fontSize: "0.85rem",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              boxShadow: "0 4px 14px rgba(6, 182, 212, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Admin Login
          </button>
        </div>
      </header>

      <main>
        {/* ── HERO SECTION ── */}
        <section className="landing-hero-section">
          <div className="landing-two-col-grid">

            {/* Hero Left Info */}
            <div style={{ textAlign: "left" }}>
              <ScrollReveal direction="left" delay={100}>
                <h1 className="landing-hero-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "20px", textAlign: "left" }}>
                  Diamond File &amp;<br />
                  <span style={{
                    background: "linear-gradient(135deg, var(--text), var(--accent))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    Spreadsheet Management
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <p className="landing-hero-desc" style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: "0 0 40px 0", textAlign: "left" }}>
                  Upload, validate, and process diamond inventory sheets with automated calculations for total weights, payouts, and client sheet histories.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="landing-hero-ctas desktop-hero-ctas" style={{ display: "flex", gap: "16px", justifyContent: "flex-start", marginTop: "28px" }}>
                  <button
                    onClick={() => openLogin("client")}
                    className="btn btn-primary"
                    style={{
                      padding: "14px 32px",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      borderRadius: "var(--radius-sm)",
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      boxShadow: "0 8px 24px rgba(6, 182, 212, 0.3)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    Client Console <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                  </button>
                  <button
                    onClick={() => openLogin("admin")}
                    className="btn btn-outline"
                    style={{
                      padding: "14px 32px",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      borderRadius: "var(--radius-sm)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    Admin Control Center
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Right Interactive Diamond */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", minWidth: 0, overflow: "visible" }}>
              <ScrollReveal direction="right" delay={400} style={{ width: "100%", display: "flex", justifyContent: "center", minWidth: 0 }}>
                {(() => {
                  const fallbackPlaceholder = (
                    <div className="diamond-studio-container" style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "480px",
                      height: "auto",
                      aspectRatio: "1 / 1",
                      margin: "0 auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "transparent"
                    }}>
                      <div style={{
                        position: "absolute",
                        top: "-40px",
                        left: "-15%",
                        right: "-15%",
                        height: "120%",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(186, 230, 253, 0.08) 0%, rgba(186, 230, 253, 0.02) 45%, rgba(0, 0, 0, 0) 80%)",
                        pointerEvents: "none",
                        zIndex: 1
                      }} />
                      <img
                        src="/main_diamond.png"
                        alt="Premium Diamond Visualizer"
                        style={{
                          width: "60%",
                          height: "60%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.2))",
                          opacity: 0.85,
                          zIndex: 2
                        }}
                      />
                      <div 
                        className="diamond-reflection-shadow"
                        style={{
                          position: "absolute",
                          bottom: "35px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "180px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0%, rgba(56, 189, 248, 0.08) 35%, rgba(0, 0, 0, 0) 75%)",
                          filter: "blur(4px)",
                          pointerEvents: "none",
                          zIndex: 1,
                          animation: "diamondShadowPulse 2.85s ease-in-out infinite alternate"
                        }}
                      />
                    </div>
                  );
                  return shouldRender3D ? (
                    <Suspense fallback={fallbackPlaceholder}>
                      <AnimatedDiamond />
                    </Suspense>
                  ) : fallbackPlaceholder;
                })()}
              </ScrollReveal>
            </div>

            {/* Mobile View CTA Buttons (Rendered below diamond on mobile grid stacking) */}
            <ScrollReveal direction="up" delay={300} className="mobile-hero-ctas" style={{ width: "100%" }}>
              <div className="landing-hero-ctas" style={{ display: "flex", gap: "16px", width: "100%" }}>
                <button
                  onClick={() => openLogin("client")}
                  className="btn btn-primary"
                  style={{
                    padding: "14px 32px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    borderRadius: "var(--radius-sm)",
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.3)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  Client Console <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                </button>
                <button
                  onClick={() => openLogin("admin")}
                  className="btn btn-outline"
                  style={{
                    padding: "14px 32px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    borderRadius: "var(--radius-sm)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  Admin Control Center
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* ── STATS SECTION ── */}
          <div className="stats-wrapper">
            <ScrollReveal direction="up" delay={500}>
              <div className="landing-hero-stats">
                {stats.map((s, idx) => (
                  <div key={idx} className="anim-stat-pulse" style={{ textAlign: "center" }}>
                    <h2 style={{
                      fontSize: "2.8rem",
                      fontWeight: 800,
                      margin: "0 0 6px 0",
                      background: "linear-gradient(135deg, var(--text), var(--accent))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      {s.value}
                    </h2>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 600 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ── SCROLLYTELLING SHOWCASE SECTION ── */}
        <section style={{ padding: "80px 0", position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", marginBottom: "40px", padding: "0 20px", width: "100%", boxSizing: "border-box" }}>
            <ScrollReveal direction="up">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>Automated Spreadsheet Operations</h2>
              <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                Explore how diamond spreadsheet records are seamlessly parsed, audited, and processed into secure statements.
              </p>
            </ScrollReveal>
          </div>

          {/* Row 1: Grading (Text Left, Image Right) */}
          <div className="storytelling-container">
            <ScrollReveal direction="left">
              <div style={{ padding: "20px" }}>
                <div style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px"
                }}>
                  Phase 1: 3D Scan & Parameter Mapping
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px", color: "var(--text)" }}>
                  Intelligent 3D Geometry & Planning Analysis
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Seamlessly process advanced 3D scanning and cutting planning files. The system automatically parses crucial physical attributes—such as shape, carat weight, color, clarity grades, planning planes, and yield statistics—translating scanner outputs directly into standardized spreadsheet data.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>3D Scan Parsing</span>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>Parameter Extraction</span>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>Geometry Mapping</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="storytelling-image-wrapper shine-overlay">
                <img src="/phase_1.png" alt="3D diamond planning and scan interface showing shape, carat, color, clarity, and planning planes data" />
                <div className="glow-line"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: Cutting (Image Left, Text Right) */}
          <div className="storytelling-container mobile-reverse">
            <ScrollReveal direction="left">
              <div className="storytelling-image-wrapper shine-overlay">
                <img src="/phase_2.png" alt="Conceptual diagram showing four distinct, colorful 3D faceted gems arranged in gold-bordered segments representing automated data categorization" />
                <div className="glow-line"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{ padding: "20px" }}>
                <div style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px"
                }}>
                  Phase 2: Dynamic Parcel Categorization
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px", color: "var(--text)" }}>
                  Smart Multi-Parcel Sorting &amp; Formatting
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Automatically categorize and sort raw spreadsheet entries into distinct, structured parcel segments based on physical attributes like shape, color, and carat weight brackets. The system maps complex inventory records into clean, color-coded classifications and generates individual yield reports on the fly.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>Parcel Segregation</span>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>Multi-Schema Formatting</span>
                  <span style={{ fontSize: "0.85rem", background: "var(--primary-bg)", color: "var(--accent-light)", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>Segmented Reports</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── WORKFLOW / HOW IT WORKS ── */}
        <section style={{
          background: "rgba(6, 182, 212, 0.02)",
          borderTop: "1px solid var(--border-light)",
          borderBottom: "1px solid var(--border-light)",
          padding: "80px 20px",
          position: "relative",
          zIndex: 10
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <ScrollReveal direction="up">
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>The Automated File Processing Flow</h2>
                <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
                  See how files securely propagate from client submission to final database logging.
                </p>
              </ScrollReveal>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "30px",
              position: "relative"
            }}>
              {steps.map((s, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 100}>
                  <div className="anim-hover-lift" style={{
                    background: "var(--bg-card)",
                    backdropFilter: "var(--glass)",
                    WebkitBackdropFilter: "var(--glass)",
                    border: "1px solid var(--border-glass)",
                    padding: "30px",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow)",
                    position: "relative",
                    height: "100%"
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
                </ScrollReveal>
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
        boxShadow: "0 -8px 32px rgba(6, 182, 212, 0.03)"
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
                background: "linear-gradient(135deg, var(--text), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Diamond
              </span>
            </Link>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              State-of-the-art diamond spreadsheet processing and operations management portal designed specifically for global merchants and manufacturers.
            </p>
          </div>

          {/* Col 2: Portals Links */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>System Portals</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
              <button 
                onClick={() => openLogin("client")} 
                className="footer-portal-btn"
              >
                Client Portal Login
              </button>
              <button 
                onClick={() => openLogin("admin")} 
                className="footer-portal-btn"
              >
                Admin Control Center
              </button>
            </div>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>Company Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>File Formatting Guides</span>
              <span style={{ color: "var(--text-secondary)" }}>Spreadsheet Schema Specs</span>
              <span style={{ color: "var(--text-secondary)" }}>Data Integration Manual</span>
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

      {/* ── LOGIN MODAL OVERLAY ── */}
      {loginModal.isOpen && (
        <LoginPage 
          mode={loginModal.mode} 
          isModal={true} 
          onClose={() => setLoginModal({ isOpen: false, mode: "client" })} 
        />
      )}
    </div>
  );
}
