import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Play, Palette, User, Phone, HelpCircle, Briefcase, FileText, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "nav.home", href: "/", icon: Play },
  { name: "nav.portfolio", href: "/portfolio", icon: Palette },
  { name: "nav.services", href: "/services", icon: Briefcase },
  { name: "nav.about", href: "/about", icon: User },
  { name: "nav.testimonials", href: "/testimonials", icon: Star },
  { name: "nav.blog", href: "/blog", icon: FileText },
  { name: "nav.faq", href: "/faq", icon: HelpCircle },
  { name: "nav.contact", href: "/contact", icon: Phone },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-youtube-red transition-smooth"
          >
            <div className="w-8 h-8 bg-gradient-youtube rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span>Adil GFX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                    location.pathname === item.href
                      ? "text-youtube-red"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{t(item.name)}</span>
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSelector />
            <ThemeToggle />
            <Link to="/contact">
              <Button className="bg-gradient-youtube hover:shadow-glow transition-all duration-300 font-medium">
                {t("nav.hire")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 px-0"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border mt-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth",
                    location.pathname === item.href
                      ? "text-youtube-red bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{t(item.name)}</span>
                </Link>
              )
            })}
            <div className="pt-4 px-4">
              <Link to="/contact">
                <Button className="w-full bg-gradient-youtube hover:shadow-glow transition-all duration-300 font-medium">
                  {t("nav.hire")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}