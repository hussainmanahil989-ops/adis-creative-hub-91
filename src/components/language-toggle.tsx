import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { cn } from "@/lib/utils"

const primaryLanguages = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
] as const

const additionalLanguages = [
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "it", flag: "🇮🇹", name: "Italiano" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "ru", flag: "🇷🇺", name: "Русский" },
  { code: "ja", flag: "🇯🇵", name: "日本語" },
] as const

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [showMore, setShowMore] = useState(false)
  const [open, setOpen] = useState(false)

  const currentLanguage = [...primaryLanguages, ...additionalLanguages].find(
    (lang) => lang.code === language
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 px-0 hover:bg-muted transition-all duration-300 hover:scale-110"
        >
          <Languages className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-popover/95 backdrop-blur-sm border-border/50">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">Select Language</h4>
            <span className="text-2xl">{currentLanguage?.flag}</span>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {primaryLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any)
                  setOpen(false)
                }}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 hover:bg-accent hover:scale-105",
                  language === lang.code && "bg-accent ring-2 ring-primary"
                )}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-xs text-muted-foreground">{lang.name}</span>
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-full text-sm text-primary hover:underline transition-all duration-200 flex items-center justify-center gap-1"
            >
              {showMore ? "Show Less" : "More Languages"}
              <span className={cn(
                "transition-transform duration-300",
                showMore && "rotate-180"
              )}>▼</span>
            </button>

            {showMore && (
              <div className="grid grid-cols-5 gap-2 animate-fade-in">
                {additionalLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any)
                      setOpen(false)
                    }}
                    className={cn(
                      "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 hover:bg-accent hover:scale-105",
                      language === lang.code && "bg-accent ring-2 ring-primary"
                    )}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-xs text-muted-foreground">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
