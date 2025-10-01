import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-14 w-28 rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 overflow-hidden group"
      aria-label="Toggle theme"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 via-orange-300/40 to-yellow-200/40 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-blue-500/20 blur-md transition-opacity duration-500" />
      
      {/* Toggle track with stars/clouds pattern */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-sky-200 to-blue-200 dark:from-slate-800 dark:to-slate-900 transition-colors duration-500">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {/* Light mode clouds */}
          <div className="absolute top-2 left-3 w-3 h-3 bg-white/60 rounded-full blur-[2px] transition-opacity duration-500 dark:opacity-0" />
          <div className="absolute top-4 left-8 w-2 h-2 bg-white/40 rounded-full blur-[1px] transition-opacity duration-500 dark:opacity-0" />
          
          {/* Dark mode stars */}
          <div className="absolute top-2 right-4 w-1 h-1 bg-yellow-300 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500 animate-pulse" />
          <div className="absolute top-5 right-8 w-1 h-1 bg-blue-300 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500 animate-pulse delay-100" />
          <div className="absolute bottom-3 right-6 w-1 h-1 bg-purple-300 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500 animate-pulse delay-200" />
        </div>
      </div>
      
      {/* Toggle knob with icon */}
      <div 
        className={`absolute top-1 h-12 w-12 rounded-full shadow-lg transition-all duration-500 ease-out transform ${
          isDark 
            ? 'translate-x-[4.25rem] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 shadow-purple-500/50' 
            : 'translate-x-1 bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 shadow-orange-400/50'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun Icon */}
          <Sun 
            className={`absolute h-6 w-6 text-white transition-all duration-500 ${
              isDark 
                ? 'rotate-180 scale-0 opacity-0' 
                : 'rotate-0 scale-100 opacity-100'
            }`}
            strokeWidth={2.5}
          />
          
          {/* Moon Icon */}
          <Moon 
            className={`absolute h-6 w-6 text-slate-200 transition-all duration-500 ${
              isDark 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-180 scale-0 opacity-0'
            }`}
            strokeWidth={2.5}
          />
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
          isDark 
            ? 'bg-purple-400/30' 
            : 'bg-yellow-300/40'
        }`} />
      </div>
    </button>
  )
}