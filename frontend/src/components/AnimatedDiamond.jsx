import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function AnimatedDiamond() {
  const containerRef = useRef();
  const isDragging = useRef(false);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
      const isMobile = window.innerWidth < 768;

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

      const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: "high-performance" });
      if (!renderer.capabilities.isWebGL2 && !renderer.getContext()) {
        throw new Error("WebGL context not supported or disabled in this browser.");
      }

      // Cap pixel ratio to 1.0 on mobile to reduce pixel computations by up to 4x, boosting mobile performance
      renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 2));
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
        roughness: isMobile ? 0.05 : 0.0,
        metalness: 0.12,
        ior: 2.417,
        transmission: isInitialLight ? 0.0 : 0.30,
        thickness: isMobile ? 1.5 : 2.2,
        side: THREE.DoubleSide,
        clearcoat: isMobile ? 0.5 : 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 1.0,
        envMapIntensity: 5.0,
        dispersion: isMobile ? 0.0 : 0.32 // Disable heavy physical dispersion shader calculations on mobile
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
          canvas.width = isMobile ? 256 : 512; // Smaller canvas dimensions on mobile
          canvas.height = isMobile ? 128 : 256;
          const ctx = canvas.getContext("2d");
          if (!ctx) return null;

          if (themeMode === "light") {
            ctx.fillStyle = "#0b0f19";
          } else {
            ctx.fillStyle = "#02040a";
          }
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
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
          ctx.fillRect(0, isMobile ? 10 : 20, canvas.width, isMobile ? 108 : 216);

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

      // 5. Floating luxurious particles (Reduced count on mobile to lower overhead)
      const particlesGroup = new THREE.Group();
      const particleGeometry = new THREE.OctahedronGeometry(0.010, 0);
      
      const darkParticleColors = [0xffffff, 0xbae6fd, 0xe0f2fe, 0x38bdf8, 0xf8fafc];
      const lightParticleColors = [0xffffff, 0xc7d2fe, 0xe0e7ff, 0x818cf8, 0x4f46e5];
      const initialParticleColors = isInitialLight ? lightParticleColors : darkParticleColors;
      
      const sparkleParticles = [];
      const particleCount = isMobile ? 12 : 28;

      for (let i = 0; i < particleCount; i++) {
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
      setIsReady(true);

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
            touchAction: "none",
            opacity: isReady ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
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
