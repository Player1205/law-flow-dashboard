import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="hover:bg-surface-hover transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-text-secondary hover:text-accent-blue transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-text-secondary hover:text-accent-blue transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}