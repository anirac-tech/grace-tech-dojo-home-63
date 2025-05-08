
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
        className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span 
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
      <Moon className={cn("h-3.5 w-3.5 transition-opacity", theme === "dark" ? "opacity-100" : "opacity-50")} />
    </div>
  );
}
