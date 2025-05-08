
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"; 
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
      <Sun className={cn("h-4 w-4 transition-opacity", theme === "dark" ? "opacity-50" : "opacity-100")} />
      <Switch 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-dojo-700"
      />
      <Moon className={cn("h-4 w-4 transition-opacity", theme === "dark" ? "opacity-100" : "opacity-50")} />
    </div>
  );
}
