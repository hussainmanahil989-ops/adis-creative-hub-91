import { Mail, Phone, Youtube, Facebook, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"

const footerLinks = {
  services: [
    { name: "Logo Design", href: "/services#logo" },
    { name: "YouTube Thumbnails", href: "/services#thumbnails" },
    { name: "Video Editing", href: "/services#video" },
    { name: "YouTube Setup & Branding", href: "/services#youtube-branding" }
  ],
  explore: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Case Studies", href: "/testimonials#case-studies" }
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ],
  business: [
    { name: "Hire Me (Direct)", href: "/contact" },
    { name: "Fiverr Profile", href: "https://fiverr.com/adilgfx" },
    { name: "Media Kit (PDF)", href: "/media-kit.pdf" },
    { name: "Free Templates", href: "#lead-magnet" }
  ]
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/adilgfx", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/adilgfx", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/adilgfx", icon: Linkedin }
]

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t("footer.newsletter.title")}</h3>
              <p className="text-primary-foreground/80">
                {t("footer.newsletter.subtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder={t("footer.newsletter.placeholder")}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-gradient-youtube hover:shadow-glow whitespace-nowrap">
                {t("footer.newsletter.cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-youtube rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">Adil GFX</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              {t("footer.brand.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-youtube-red transition-smooth"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.explore.title")}</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.support.title")}</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.business.title")}</h4>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') || link.href.startsWith('/') ? (
                    link.href.startsWith('http') ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white text-sm transition-smooth"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="mailto:hello@adilgfx.com" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-white text-sm transition-smooth">
                <Mail className="h-4 w-4" />
                <span>{t("footer.contact.email")}</span>
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-white text-sm transition-smooth">
                <Phone className="h-4 w-4" />
                <span>{t("footer.contact.whatsapp")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}