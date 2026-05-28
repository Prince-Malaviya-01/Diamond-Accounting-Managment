import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    // Fallback if browser doesn't support View Transition API
    if (!document.startViewTransition) {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
      return;
    }

    document.startViewTransition(() => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
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
