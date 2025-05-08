
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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
        className="focus:outline-none relative w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span 
          className={cn(
            "absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-300",
            theme === "dark" ? "translate-x-4 bg-dojo-300" : "translate-x-0"
          )}
        />
      </button>
      <Moon className={cn("h-3.5 w-3.5 transition-opacity", theme === "dark" ? "opacity-100" : "opacity-50")} />
    </div>
  );
}
