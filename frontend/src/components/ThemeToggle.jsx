import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = (e) => {
    // Fallback if browser doesn't support View Transition API
    if (!document.startViewTransition) {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
      return;
    }

    const x = e?.clientX || window.innerWidth / 2;
    const y = e?.clientY || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add("theme-transition");

    const transition = document.startViewTransition(() => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("theme-transition");
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
