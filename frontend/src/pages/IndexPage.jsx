import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Diamond, ArrowRight, ShieldCheck, FolderSync, Receipt, Settings,
  Cpu, Mail, Phone, MapPin, Activity, CheckCircle2,
  Clock, Sparkles, IndianRupee
} from "lucide-react";
import * as THREE from "three";
import ThemeToggle from "../components/ThemeToggle";
import LoginPage from "./LoginPage";

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
function AnimatedDiamond() {
  const containerRef = useRef();
  const isDragging = useRef(false);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const [hasError, setHasError] = useState(false);

  // React theme state starts from current document theme
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // Mutable reference for the render loop to have immediate synchronous access to theme changes
  const activeThemeRef = useRef(document.documentElement.getAttribute("data-theme") || "dark");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup = null;
    let resizeObserver = null;
    let themeObserver = null;

    // References for diamond mesh and geometry
    let diamondMesh = null;
    let diamondGeometry = null;

    try {
      // Synchronize theme on initial mount
      const initialTheme = document.documentElement.getAttribute("data-theme") || "dark";
      activeThemeRef.current = initialTheme;
      setCurrentTheme(initialTheme);

      // Listen to theme changes on document.documentElement
      themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "data-theme") {
            const newTheme = document.documentElement.getAttribute("data-theme") || "dark";
            activeThemeRef.current = newTheme;
            setCurrentTheme(newTheme);
          }
        });
      });

      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
      });

      // ── GEOMETRY GENERATOR FOR THE ROUND BRILLIANT ──
      const createRoundGeometry = () => {
        const vertices = [];
        // Ring 1: Table Ring (0..7) at height y = 0.38, radius 0.52
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI * 2) / 8;
          vertices.push(Math.cos(angle) * 0.52, 0.38, Math.sin(angle) * 0.52);
        }
        // Table Center (8)
        vertices.push(0, 0.38, 0);
        // Ring 2: Crown Intermediates (9..16) at height y = 0.22, radius 0.82
        for (let i = 0; i < 8; i++) {
          const angle = ((i + 0.5) * Math.PI * 2) / 8;
          vertices.push(Math.cos(angle) * 0.82, 0.22, Math.sin(angle) * 0.82);
        }
        // Ring 3: Girdle Ring (17..32) at height y = 0.0, radius 1.15 (Diameter = 2.3)
        for (let i = 0; i < 16; i++) {
          const angle = (i * Math.PI * 2) / 16;
          vertices.push(Math.cos(angle) * 1.15, 0.0, Math.sin(angle) * 1.15);
        }
        // Ring 4: Pavilion Intermediates (33..40) at height y = -0.38, radius 0.55
        for (let i = 0; i < 8; i++) {
          const angle = ((i + 0.5) * Math.PI * 2) / 8;
          vertices.push(Math.cos(angle) * 0.55, -0.38, Math.sin(angle) * 0.55);
        }
        // Bottom Culet Point (41) at height y = -0.72
        vertices.push(0, -0.72, 0);

        const indices = [];
        for (let i = 0; i < 8; i++) {
          const next = (i + 1) % 8;
          const g_left = 2 * i;
          const g_mid = 2 * i + 1;
          const g_right = (2 * i + 2) % 16;
          
          // Crown facets
          indices.push(8, next, i);
          indices.push(i, next, 9 + i);
          indices.push(i, 9 + i, 17 + g_mid);
          indices.push(i, 17 + g_mid, 17 + g_left);
          indices.push(next, 17 + g_mid, 9 + i);
          indices.push(next, 17 + g_right, 17 + g_mid);
          
          // Pavilion facets
          indices.push(17 + g_left, 33 + i, 17 + g_mid);
          indices.push(17 + g_mid, 33 + i, 17 + g_right);
          indices.push(17 + g_left, 41, 33 + i);
          const prev_i = (i - 1 + 8) % 8;
          indices.push(17 + g_left, 33 + prev_i, 41);
        }

        const rawGeo = new THREE.BufferGeometry();
        rawGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        rawGeo.setIndex(indices);
        const geometry = rawGeo.toNonIndexed();
        geometry.computeVertexNormals();
        return geometry;
      };

      // 1. Setup Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 3.7;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      if (!renderer.capabilities.isWebGL2 && !renderer.getContext()) {
        throw new Error("WebGL context not supported or disabled in this browser.");
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.8;
      renderer.setClearColor(0x000000, 0);
      
      const initW = Math.max(container.clientWidth, 400);
      const initH = Math.max(container.clientHeight, 400);
      camera.aspect = initW / initH;
      camera.updateProjectionMatrix();
      renderer.setSize(initW, initH);

      container.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.background = "transparent";
      renderer.domElement.style.backgroundColor = "transparent";

      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const w = Math.floor(entry.contentRect.width || container.clientWidth || 400);
          const h = Math.floor(entry.contentRect.height || container.clientHeight || 400);
          if (w > 0 && h > 0) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      resizeObserver.observe(container);

      // 3. Ultra-realistic, photorealistic sparkling diamond material
      const isInitialLight = initialTheme === "light";
      const material = new THREE.MeshPhysicalMaterial({
        color: isInitialLight ? 0x4f46e5 : 0x0ea5e9,
        emissive: isInitialLight ? 0x1e1b4b : 0x0369a1,
        transparent: true,
        opacity: 1.0,
        roughness: 0.0,
        metalness: 0.12,
        ior: 2.417,
        transmission: isInitialLight ? 0.0 : 0.30,
        thickness: 2.2,
        side: THREE.DoubleSide,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 1.0,
        envMapIntensity: 5.0,
        dispersion: 0.32
      });

      // Initialize the active diamond mesh
      diamondGeometry = createRoundGeometry();
      diamondMesh = new THREE.Mesh(diamondGeometry, material);
      diamondMesh.rotation.x = 0.22; // tilt
      scene.add(diamondMesh);

      // 4. Generate Canvas-based High-Contrast Studio Environment Maps
      const genEnvTexture = (themeMode) => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 512;
          canvas.height = 256;
          const ctx = canvas.getContext("2d");
          if (!ctx) return null;

          if (themeMode === "light") {
            ctx.fillStyle = "#0b0f19";
          } else {
            ctx.fillStyle = "#02040a";
          }
          ctx.fillRect(0, 0, 512, 256);

          const grad = ctx.createLinearGradient(0, 0, 512, 0);
          if (themeMode === "light") {
            grad.addColorStop(0, "#02040a");
            grad.addColorStop(0.5, "#312e81");
            grad.addColorStop(1, "#02040a");
          } else {
            grad.addColorStop(0, "#030712");
            grad.addColorStop(0.5, "#253b59");
            grad.addColorStop(1, "#030712");
          }
          ctx.fillStyle = grad;
          ctx.fillRect(0, 20, 512, 216);

          const texture = new THREE.CanvasTexture(canvas);
          texture.mapping = THREE.EquirectangularReflectionMapping;
          return texture;
        } catch (err) { return null; }
      };

      const darkEnvMap = genEnvTexture("dark");
      const lightEnvMap = genEnvTexture("light");

      const activeEnvMap = initialTheme === "light" ? lightEnvMap : darkEnvMap;
      if (activeEnvMap) {
        scene.environment = activeEnvMap;
        material.envMap = activeEnvMap;
      }

      // 5. Floating luxurious particles
      const particlesGroup = new THREE.Group();
      const particleGeometry = new THREE.OctahedronGeometry(0.010, 0);
      
      const darkParticleColors = [0xffffff, 0xbae6fd, 0xe0f2fe, 0x38bdf8, 0xf8fafc];
      const lightParticleColors = [0xffffff, 0xc7d2fe, 0xe0e7ff, 0x818cf8, 0x4f46e5];
      const initialParticleColors = isInitialLight ? lightParticleColors : darkParticleColors;
      
      const sparkleParticles = [];

      for (let i = 0; i < 28; i++) {
        const pMat = new THREE.MeshBasicMaterial({
          color: initialParticleColors[Math.floor(Math.random() * initialParticleColors.length)],
          transparent: true,
          opacity: 0.35 + Math.random() * 0.65,
        });
        const pMesh = new THREE.Mesh(particleGeometry, pMat);
        
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = 1.1 + Math.random() * 1.1;

        pMesh.position.set(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );

        sparkleParticles.push({
          mesh: pMesh,
          speed: 0.12 + Math.random() * 0.22,
          theta,
          phi,
          radius,
          pulseSpeed: 1.4 + Math.random() * 2.2
        });
        particlesGroup.add(pMesh);
      }
      scene.add(particlesGroup);

      // 6. Realistic Studio Lighting
      const ambientLight = new THREE.AmbientLight(isInitialLight ? 0xe0e7ff : 0x0b2545, isInitialLight ? 0.85 : 0.65);
      scene.add(ambientLight);

      // Overhead spotlight ray
      const dirLight1 = new THREE.DirectionalLight(isInitialLight ? 0xc7d2fe : 0x38bdf8, isInitialLight ? 4.0 : 3.5);
      dirLight1.position.set(0, 10, 0);
      scene.add(dirLight1);

      // Side specular key light
      const dirLight2 = new THREE.DirectionalLight(isInitialLight ? 0xe0e7ff : 0x7dd3fc, isInitialLight ? 3.5 : 3.0);
      dirLight2.position.set(5, 5, 5);
      scene.add(dirLight2);

      // Fill light
      const dirLight3 = new THREE.DirectionalLight(isInitialLight ? 0x4f46e5 : 0x0ea5e9, isInitialLight ? 3.0 : 2.5);
      dirLight3.position.set(-5, 3, -5);
      scene.add(dirLight3);

      // Bottom pavilion light
      const dirLight4 = new THREE.DirectionalLight(isInitialLight ? 0x312e81 : 0x0284c7, isInitialLight ? 3.5 : 3.2);
      dirLight4.position.set(0, -6, 1);
      scene.add(dirLight4);

      // 7. Interactive Event Listeners (Drag, Swipe & Orbit)
      let isDraggingLocal = false;
      let previousMousePosition = { x: 0, y: 0 };

      const handleMouseDown = (e) => {
        isDraggingLocal = true;
        isDragging.current = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const my = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        if (!isDraggingLocal) {
          targetRotationX.current = my * 0.35;
          targetRotationY.current = mx * 0.35;
          return;
        }

        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y,
        };

        if (diamondMesh) {
          diamondMesh.rotation.y += deltaMove.x * 0.007;
          diamondMesh.rotation.x += deltaMove.y * 0.007;
        }
        particlesGroup.rotation.y += deltaMove.x * 0.004;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const handleMouseUp = () => {
        isDraggingLocal = false;
        setTimeout(() => { isDragging.current = false; }, 1200);
      };

      const handleTouchStart = (e) => {
        if (e.touches.length === 1) {
          isDraggingLocal = true;
          isDragging.current = true;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const handleTouchMove = (e) => {
        if (isDraggingLocal && e.touches.length === 1) {
          const deltaMove = {
            x: e.touches[0].clientX - previousMousePosition.x,
            y: e.touches[0].clientY - previousMousePosition.y,
          };

          if (diamondMesh) {
            diamondMesh.rotation.y += deltaMove.x * 0.007;
            diamondMesh.rotation.x += deltaMove.y * 0.007;
          }
          particlesGroup.rotation.y += deltaMove.x * 0.004;

          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);

      // 8. High-performance Render Loop
      let animationFrameId;
      const startTime = performance.now();
      let lastAppliedTheme = initialTheme;

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = (performance.now() - startTime) * 0.001;

        // Dynamic theme updates
        const currentActiveTheme = activeThemeRef.current;
        if (currentActiveTheme !== lastAppliedTheme) {
          const isLight = currentActiveTheme === "light";
          material.color.setHex(isLight ? 0x4f46e5 : 0x0ea5e9);
          material.emissive.setHex(isLight ? 0x1e1b4b : 0x0369a1);
          material.transmission = isLight ? 0.0 : 0.30;
          const targetEnvMap = isLight ? lightEnvMap : darkEnvMap;
          if (targetEnvMap) {
            scene.environment = targetEnvMap;
            material.envMap = targetEnvMap;
          }

          // Swap Light Colors and Intensities
          ambientLight.color.setHex(isLight ? 0xe0e7ff : 0x0b2545);
          ambientLight.intensity = isLight ? 0.85 : 0.65;

          dirLight1.color.setHex(isLight ? 0xc7d2fe : 0x38bdf8);
          dirLight1.intensity = isLight ? 4.0 : 3.5;

          dirLight2.color.setHex(isLight ? 0xe0e7ff : 0x7dd3fc);
          dirLight2.intensity = isLight ? 3.5 : 3.0;

          dirLight3.color.setHex(isLight ? 0x4f46e5 : 0x0ea5e9);
          dirLight3.intensity = isLight ? 3.0 : 2.5;

          dirLight4.color.setHex(isLight ? 0x312e81 : 0x0284c7);
          dirLight4.intensity = isLight ? 3.5 : 3.2;

          // Swap Particle Colors
          const activeColors = isLight ? lightParticleColors : darkParticleColors;
          sparkleParticles.forEach((p) => {
            p.mesh.material.color.setHex(activeColors[Math.floor(Math.random() * activeColors.length)]);
            p.mesh.material.needsUpdate = true;
          });

          material.needsUpdate = true;
          lastAppliedTheme = currentActiveTheme;
        }

        // Animate Diamond Mesh (Smooth rotation and floating)
        if (diamondMesh) {
          if (!isDragging.current) {
            diamondMesh.rotation.y += 0.0055;
            diamondMesh.rotation.x += (targetRotationX.current + 0.22 - diamondMesh.rotation.x) * 0.04;
            diamondMesh.rotation.z += 0.0006;
          }
          diamondMesh.position.y = Math.sin(elapsedTime * 1.1) * 0.035;
        }

        particlesGroup.rotation.y += 0.0012;
        sparkleParticles.forEach((p) => {
          p.theta += p.speed * 0.01;
          p.mesh.position.y += Math.sin(elapsedTime * p.pulseSpeed) * 0.0008;
          p.mesh.material.opacity = 0.35 + Math.sin(elapsedTime * p.pulseSpeed) * 0.3;
        });

        renderer.render(scene, camera);
      };

      // Render first frame synchronously to prevent any initial blank frame/canvas flash
      renderer.render(scene, camera);

      animate();

      cleanup = () => {
        cancelAnimationFrame(animationFrameId);
        if (themeObserver) themeObserver.disconnect();
        if (resizeObserver) resizeObserver.disconnect();
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleMouseUp);
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (diamondGeometry) diamondGeometry.dispose();
        if (diamondMesh) diamondMesh.geometry.dispose();
        material.dispose();
        if (darkEnvMap) darkEnvMap.dispose();
        if (lightEnvMap) lightEnvMap.dispose();
        renderer.dispose();
      };

    } catch (err) {
      console.error("Three.js diamond visualizer failed to initialize:", err);
      setHasError(true);
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  if (hasError) {
    return (
      <div className="anim-float-diamond diamond-visualizer" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        margin: "0 auto",
        filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 100px rgba(6, 182, 212, 0.25))"
      }}>
        <img
          src="/main_diamond.png"
          alt="Premium Diamond Visualizer Fallback"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes diamondShadowPulse {
          0% {
            transform: translateX(-50%) scale(1.08);
            opacity: 0.45;
            filter: blur(6px);
          }
          100% {
            transform: translateX(-50%) scale(0.92);
            opacity: 0.8;
            filter: blur(3px);
          }
        }
      `}</style>
      <div 
        className="diamond-studio-container"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px",
          height: "auto",
          aspectRatio: "1 / 1",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          overflow: "visible"
        }}
      >
        <div style={{
          position: "absolute",
          top: "-40px",
          left: "-15%",
          right: "-15%",
          height: "120%",
          background: currentTheme === "light"
            ? "radial-gradient(ellipse at 50% 0%, rgba(254, 205, 205, 0.22) 0%, rgba(254, 205, 205, 0.07) 45%, rgba(0, 0, 0, 0) 80%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(186, 230, 253, 0.08) 0%, rgba(186, 230, 253, 0.02) 45%, rgba(0, 0, 0, 0) 80%)",
          pointerEvents: "none",
          zIndex: 1,
          transition: "background 0.5s ease"
        }} />

        <div 
          ref={containerRef}
          className="diamond-visualizer" 
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            cursor: isDragging.current ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "none"
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
            background: currentTheme === "light"
              ? "radial-gradient(ellipse, rgba(153, 27, 27, 0.22) 0%, rgba(239, 68, 68, 0.08) 40%, rgba(0, 0, 0, 0) 75%)"
              : "radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0%, rgba(56, 189, 248, 0.08) 35%, rgba(0, 0, 0, 0) 75%)",
            filter: "blur(4px)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "diamondShadowPulse 2.85s ease-in-out infinite alternate",
            transition: "background 0.5s ease"
          }}
        />
      </div>
    </>
  );
}

export default function IndexPage() {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState({ isOpen: false, mode: "client" });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
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
                <AnimatedDiamond />
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
