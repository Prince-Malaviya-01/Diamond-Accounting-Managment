import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = (event) => {
    // Fallback if browser doesn't support View Transition API
    if (!document.startViewTransition) {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
      return;
    }

    const isTransitioningToDark = theme === "light";
    let originX, originY, radius;

    if (isTransitioningToDark) {
      // Light to Dark: expand from the click coordinates (top-right area)
      originX = event.clientX;
      originY = event.clientY;
      radius = Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY)
      );
    } else {
      // Dark to Light: expand from the bottom-left corner of the screen
      originX = 0;
      originY = window.innerHeight;
      radius = Math.hypot(window.innerWidth, window.innerHeight);
    }

    const transition = document.startViewTransition(() => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${originX}px ${originY}px)`,
        `circle(${radius}px at ${originX}px ${originY}px)`
      ];
      
      document.documentElement.animate(
        {
          clipPath: clipPath
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    });
  };

  return (
    <button
      onClick={(e) => toggle(e)}
      className="btn-icon theme-toggle"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{ position: "relative", zIndex: 10002 }}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
