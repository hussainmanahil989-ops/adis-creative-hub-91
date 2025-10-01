import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "fr" | "es" | "de" | "ar" | "zh" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
  { code: "ar" as Language, name: "العربية", flag: "🇸🇦" },
  { code: "zh" as Language, name: "中文", flag: "🇨🇳" },
  { code: "ja" as Language, name: "日本語", flag: "🇯🇵" },
]

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language")
    return (saved as Language) || "en"
  })

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me Now",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.testimonials": "Témoignages",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.hire": "Engagez-moi maintenant",
  },
  es: {
    "nav.home": "Inicio",
    "nav.portfolio": "Portafolio",
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.testimonials": "Testimonios",
    "nav.blog": "Blog",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.hire": "Contrátame ahora",
  },
  de: {
    "nav.home": "Startseite",
    "nav.portfolio": "Portfolio",
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.testimonials": "Referenzen",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.hire": "Jetzt beauftragen",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.portfolio": "معرض الأعمال",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.testimonials": "الشهادات",
    "nav.blog": "المدونة",
    "nav.faq": "الأسئلة",
    "nav.contact": "اتصل بنا",
    "nav.hire": "وظفني الآن",
  },
  zh: {
    "nav.home": "首页",
    "nav.portfolio": "作品集",
    "nav.services": "服务",
    "nav.about": "关于",
    "nav.testimonials": "客户评价",
    "nav.blog": "博客",
    "nav.faq": "常见问题",
    "nav.contact": "联系我们",
    "nav.hire": "立即雇用",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.portfolio": "ポートフォリオ",
    "nav.services": "サービス",
    "nav.about": "概要",
    "nav.testimonials": "お客様の声",
    "nav.blog": "ブログ",
    "nav.faq": "よくある質問",
    "nav.contact": "お問い合わせ",
    "nav.hire": "今すぐ雇う",
  },
}
