import { useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage, languages } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  
  const currentLang = languages.find(lang => lang.code === language)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 w-8 p-0 rounded-full relative overflow-hidden",
            "hover:scale-110 transition-all duration-300",
            "bg-gradient-to-br from-primary/10 to-secondary/10",
            "hover:from-primary/20 hover:to-secondary/20",
            "border border-border/50 hover:border-primary/50",
            "shadow-sm hover:shadow-md"
          )}
        >
          <span className="text-xl" role="img" aria-label={currentLang?.name}>
            {currentLang?.flag}
          </span>
          <Globe className="absolute inset-0 m-auto h-3 w-3 opacity-0 hover:opacity-10 transition-opacity" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-56 p-2 bg-popover/95 backdrop-blur-md border-border/50" 
        align="end"
        sideOffset={8}
      >
        <div className="space-y-1">
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            Select Language
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setOpen(false)
              }}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-md",
                "text-sm font-medium transition-all duration-200",
                "hover:bg-accent/50",
                language === lang.code
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-foreground"
              )}
            >
              <span className="text-2xl" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <span className="flex-1 text-left">{lang.name}</span>
              {language === lang.code && (
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
