
import { useEffect, useState } from "react";
import { Moon, Sun, ToggleLeft, ToggleRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeType = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  
  // Initialize theme
  useEffect(() => {
    // Set default theme to dark
    const currentTheme = localStorage.getItem("theme") as ThemeType || "dark";
    setTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex items-center gap-1.5">
      <Sun className={cn("h-3.5 w-3.5 transition-opacity", theme === "dark" ? "opacity-50" : "opacity-100")} />
      <button 
        onClick={toggleTheme}
        className="focus:outline-none"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <ToggleRight className="h-5 w-5 text-dojo-300" />
        ) : (
          <ToggleLeft className="h-5 w-5 text-dojo-700" />
        )}
      </button>
      <Moon className={cn("h-3.5 w-3.5 transition-opacity", theme === "dark" ? "opacity-100" : "opacity-50")} />
    </div>
  );
}
