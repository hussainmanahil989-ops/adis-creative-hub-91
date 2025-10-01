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
    
    // Hero Section
    "hero.badge": "Trusted by 500+ YouTubers & Brands",
    "hero.title": "Transform Your Brand with",
    "hero.titleGradient": "Premium Designs",
    "hero.subtitle": "Professional logo design, YouTube thumbnails, and video editing that converts viewers into loyal customers.",
    "hero.subtitleBold": "Ready in 24-48 hours.",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "Watch My Intro",
    "hero.cta.portfolio": "Watch Portfolio",
    "hero.stat.clients": "Happy Clients",
    "hero.stat.delivery": "Delivery Time",
    "hero.stat.satisfaction": "Satisfaction Rate",
    "hero.stat.rating": "Average Rating",
    
    // Services Section
    "services.title": "Services That",
    "services.titleGradient": "Drive Results",
    "services.subtitle": "Professional design services tailored to grow your business and increase conversions.",
    "services.popular": "Most Popular",
    "services.from": "From",
    "services.cta": "Get Started",
    "services.custom.title": "Need a Custom Package?",
    "services.custom.subtitle": "Let's discuss your project and create a tailored solution that fits your needs and budget.",
    "services.custom.cta": "Schedule Free Consultation",
    
    // Testimonials Section
    "testimonials.title": "What Clients",
    "testimonials.titleGradient": "Say",
    "testimonials.subtitle": "Real feedback from real clients who saw real results.",
    "testimonials.fiverr": "5.0 on Fiverr",
    "testimonials.upwork": "Top Rated on Upwork",
    "testimonials.clients": "500+ Happy Clients",
    
    // Footer
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.subtitle": "Get free design tips, latest trends, and exclusive offers delivered to your inbox.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.cta": "Subscribe Now",
    "footer.brand.description": "Professional designer helping brands and YouTubers grow through premium visual content.",
    "footer.services.title": "Services",
    "footer.explore.title": "Explore",
    "footer.support.title": "Support",
    "footer.business.title": "Business",
    "footer.copyright": "© 2025 GFX by Adi. All rights reserved.",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.testimonials": "Témoignages",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.hire": "Engagez-moi maintenant",
    
    // Hero Section
    "hero.badge": "Approuvé par plus de 500 YouTubers et marques",
    "hero.title": "Transformez votre marque avec",
    "hero.titleGradient": "Designs Premium",
    "hero.subtitle": "Conception de logos professionnels, vignettes YouTube et montage vidéo qui convertissent les spectateurs en clients fidèles.",
    "hero.subtitleBold": "Prêt en 24-48 heures.",
    "hero.cta.primary": "Démarrer votre projet",
    "hero.cta.secondary": "Voir mon introduction",
    "hero.cta.portfolio": "Voir le portfolio",
    "hero.stat.clients": "Clients satisfaits",
    "hero.stat.delivery": "Délai de livraison",
    "hero.stat.satisfaction": "Taux de satisfaction",
    "hero.stat.rating": "Note moyenne",
    
    // Services Section
    "services.title": "Services qui",
    "services.titleGradient": "Génèrent des résultats",
    "services.subtitle": "Services de conception professionnels adaptés pour développer votre entreprise et augmenter les conversions.",
    "services.popular": "Le plus populaire",
    "services.from": "À partir de",
    "services.cta": "Commencer",
    "services.custom.title": "Besoin d'un forfait personnalisé?",
    "services.custom.subtitle": "Discutons de votre projet et créons une solution sur mesure qui correspond à vos besoins et à votre budget.",
    "services.custom.cta": "Planifier une consultation gratuite",
    
    // Testimonials Section
    "testimonials.title": "Ce que disent",
    "testimonials.titleGradient": "les clients",
    "testimonials.subtitle": "Vrais retours de vrais clients qui ont vu de vrais résultats.",
    "testimonials.fiverr": "5.0 sur Fiverr",
    "testimonials.upwork": "Mieux noté sur Upwork",
    "testimonials.clients": "Plus de 500 clients satisfaits",
    
    // Footer
    "footer.newsletter.title": "Restez informé",
    "footer.newsletter.subtitle": "Recevez des conseils de design gratuits, les dernières tendances et des offres exclusives dans votre boîte mail.",
    "footer.newsletter.placeholder": "Entrez votre email",
    "footer.newsletter.cta": "S'abonner",
    "footer.brand.description": "Designer professionnel aidant les marques et YouTubers à croître grâce à du contenu visuel premium.",
    "footer.services.title": "Services",
    "footer.explore.title": "Explorer",
    "footer.support.title": "Support",
    "footer.business.title": "Business",
    "footer.copyright": "© 2025 GFX by Adi. Tous droits réservés.",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur s'est produite",
    "common.readMore": "Lire plus",
    "common.learnMore": "En savoir plus",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.portfolio": "Portafolio",
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.testimonials": "Testimonios",
    "nav.blog": "Blog",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.hire": "Contrátame ahora",
    
    // Hero Section
    "hero.badge": "Confiado por más de 500 YouTubers y marcas",
    "hero.title": "Transforma tu marca con",
    "hero.titleGradient": "Diseños Premium",
    "hero.subtitle": "Diseño de logotipos profesional, miniaturas de YouTube y edición de video que convierte espectadores en clientes leales.",
    "hero.subtitleBold": "Listo en 24-48 horas.",
    "hero.cta.primary": "Iniciar tu proyecto",
    "hero.cta.secondary": "Ver mi introducción",
    "hero.cta.portfolio": "Ver portafolio",
    "hero.stat.clients": "Clientes felices",
    "hero.stat.delivery": "Tiempo de entrega",
    "hero.stat.satisfaction": "Tasa de satisfacción",
    "hero.stat.rating": "Calificación promedio",
    
    // Services Section
    "services.title": "Servicios que",
    "services.titleGradient": "Generan resultados",
    "services.subtitle": "Servicios de diseño profesional adaptados para hacer crecer su negocio y aumentar las conversiones.",
    "services.popular": "Más popular",
    "services.from": "Desde",
    "services.cta": "Comenzar",
    "services.custom.title": "¿Necesitas un paquete personalizado?",
    "services.custom.subtitle": "Hablemos de tu proyecto y creemos una solución personalizada que se ajuste a tus necesidades y presupuesto.",
    "services.custom.cta": "Programar consulta gratuita",
    
    // Testimonials Section
    "testimonials.title": "Lo que dicen",
    "testimonials.titleGradient": "los clientes",
    "testimonials.subtitle": "Comentarios reales de clientes reales que vieron resultados reales.",
    "testimonials.fiverr": "5.0 en Fiverr",
    "testimonials.upwork": "Mejor calificado en Upwork",
    "testimonials.clients": "Más de 500 clientes satisfechos",
    
    // Footer
    "footer.newsletter.title": "Mantente actualizado",
    "footer.newsletter.subtitle": "Recibe consejos de diseño gratuitos, últimas tendencias y ofertas exclusivas en tu bandeja de entrada.",
    "footer.newsletter.placeholder": "Ingresa tu email",
    "footer.newsletter.cta": "Suscribirse ahora",
    "footer.brand.description": "Diseñador profesional ayudando a marcas y YouTubers a crecer mediante contenido visual premium.",
    "footer.services.title": "Servicios",
    "footer.explore.title": "Explorar",
    "footer.support.title": "Soporte",
    "footer.business.title": "Negocios",
    "footer.copyright": "© 2025 GFX by Adi. Todos los derechos reservados.",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "Cargando...",
    "common.error": "Ocurrió un error",
    "common.readMore": "Leer más",
    "common.learnMore": "Saber más",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.portfolio": "Portfolio",
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.testimonials": "Referenzen",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.hire": "Jetzt beauftragen",
    
    // Hero Section
    "hero.badge": "Vertraut von über 500 YouTubern und Marken",
    "hero.title": "Verwandeln Sie Ihre Marke mit",
    "hero.titleGradient": "Premium-Designs",
    "hero.subtitle": "Professionelles Logo-Design, YouTube-Thumbnails und Videobearbeitung, die Zuschauer in treue Kunden verwandeln.",
    "hero.subtitleBold": "Fertig in 24-48 Stunden.",
    "hero.cta.primary": "Projekt starten",
    "hero.cta.secondary": "Meine Einführung ansehen",
    "hero.cta.portfolio": "Portfolio ansehen",
    "hero.stat.clients": "Zufriedene Kunden",
    "hero.stat.delivery": "Lieferzeit",
    "hero.stat.satisfaction": "Zufriedenheitsrate",
    "hero.stat.rating": "Durchschnittliche Bewertung",
    
    // Services Section
    "services.title": "Dienstleistungen, die",
    "services.titleGradient": "Ergebnisse liefern",
    "services.subtitle": "Professionelle Design-Dienstleistungen, zugeschnitten auf Ihr Geschäftswachstum und mehr Konversionen.",
    "services.popular": "Am beliebtesten",
    "services.from": "Ab",
    "services.cta": "Loslegen",
    "services.custom.title": "Brauchen Sie ein individuelles Paket?",
    "services.custom.subtitle": "Lassen Sie uns über Ihr Projekt sprechen und eine maßgeschneiderte Lösung erstellen, die zu Ihren Bedürfnissen und Ihrem Budget passt.",
    "services.custom.cta": "Kostenlose Beratung buchen",
    
    // Testimonials Section
    "testimonials.title": "Was Kunden",
    "testimonials.titleGradient": "sagen",
    "testimonials.subtitle": "Echtes Feedback von echten Kunden, die echte Ergebnisse gesehen haben.",
    "testimonials.fiverr": "5.0 auf Fiverr",
    "testimonials.upwork": "Top bewertet auf Upwork",
    "testimonials.clients": "Über 500 zufriedene Kunden",
    
    // Footer
    "footer.newsletter.title": "Bleiben Sie auf dem Laufenden",
    "footer.newsletter.subtitle": "Erhalten Sie kostenlose Design-Tipps, neueste Trends und exklusive Angebote in Ihrem Posteingang.",
    "footer.newsletter.placeholder": "E-Mail eingeben",
    "footer.newsletter.cta": "Jetzt abonnieren",
    "footer.brand.description": "Professioneller Designer, der Marken und YouTubern hilft, durch Premium-Visuals zu wachsen.",
    "footer.services.title": "Dienstleistungen",
    "footer.explore.title": "Erkunden",
    "footer.support.title": "Support",
    "footer.business.title": "Geschäftlich",
    "footer.copyright": "© 2025 GFX by Adi. Alle Rechte vorbehalten.",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "Wird geladen...",
    "common.error": "Ein Fehler ist aufgetreten",
    "common.readMore": "Mehr lesen",
    "common.learnMore": "Mehr erfahren",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.portfolio": "معرض الأعمال",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.testimonials": "الشهادات",
    "nav.blog": "المدونة",
    "nav.faq": "الأسئلة",
    "nav.contact": "اتصل بنا",
    "nav.hire": "وظفني الآن",
    
    // Hero Section
    "hero.badge": "موثوق به من قبل أكثر من 500 يوتيوبر وعلامة تجارية",
    "hero.title": "حوّل علامتك التجارية مع",
    "hero.titleGradient": "تصاميم احترافية",
    "hero.subtitle": "تصميم شعارات احترافي، صور مصغرة لليوتيوب، ومونتاج فيديو يحول المشاهدين إلى عملاء مخلصين.",
    "hero.subtitleBold": "جاهز خلال 24-48 ساعة.",
    "hero.cta.primary": "ابدأ مشروعك",
    "hero.cta.secondary": "شاهد مقدمتي",
    "hero.cta.portfolio": "شاهد المعرض",
    "hero.stat.clients": "عملاء سعداء",
    "hero.stat.delivery": "وقت التسليم",
    "hero.stat.satisfaction": "معدل الرضا",
    "hero.stat.rating": "التقييم المتوسط",
    
    // Services Section
    "services.title": "خدمات",
    "services.titleGradient": "تحقق النتائج",
    "services.subtitle": "خدمات تصميم احترافية مصممة لتنمية عملك وزيادة التحويلات.",
    "services.popular": "الأكثر شعبية",
    "services.from": "من",
    "services.cta": "ابدأ الآن",
    "services.custom.title": "هل تحتاج إلى باقة مخصصة؟",
    "services.custom.subtitle": "دعنا نناقش مشروعك وننشئ حلاً مخصصًا يناسب احتياجاتك وميزانيتك.",
    "services.custom.cta": "جدولة استشارة مجانية",
    
    // Testimonials Section
    "testimonials.title": "ما يقوله",
    "testimonials.titleGradient": "العملاء",
    "testimonials.subtitle": "ملاحظات حقيقية من عملاء حقيقيين رأوا نتائج حقيقية.",
    "testimonials.fiverr": "5.0 على فايفر",
    "testimonials.upwork": "أعلى تقييم على أب وورك",
    "testimonials.clients": "أكثر من 500 عميل سعيد",
    
    // Footer
    "footer.newsletter.title": "ابق على اطلاع",
    "footer.newsletter.subtitle": "احصل على نصائح تصميم مجانية وأحدث الاتجاهات والعروض الحصرية في صندوق بريدك.",
    "footer.newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "footer.newsletter.cta": "اشترك الآن",
    "footer.brand.description": "مصمم محترف يساعد العلامات التجارية واليوتيوبرز على النمو من خلال محتوى مرئي احترافي.",
    "footer.services.title": "الخدمات",
    "footer.explore.title": "استكشف",
    "footer.support.title": "الدعم",
    "footer.business.title": "الأعمال",
    "footer.copyright": "© 2025 GFX by Adi. جميع الحقوق محفوظة.",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "واتساب",
    
    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ",
    "common.readMore": "اقرأ المزيد",
    "common.learnMore": "تعلم المزيد",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.portfolio": "作品集",
    "nav.services": "服务",
    "nav.about": "关于",
    "nav.testimonials": "客户评价",
    "nav.blog": "博客",
    "nav.faq": "常见问题",
    "nav.contact": "联系我们",
    "nav.hire": "立即雇用",
    
    // Hero Section
    "hero.badge": "受到500多位YouTuber和品牌的信赖",
    "hero.title": "用",
    "hero.titleGradient": "优质设计转变您的品牌",
    "hero.subtitle": "专业的标志设计、YouTube缩略图和视频编辑，将观众转化为忠实客户。",
    "hero.subtitleBold": "24-48小时内完成。",
    "hero.cta.primary": "开始您的项目",
    "hero.cta.secondary": "观看我的介绍",
    "hero.cta.portfolio": "查看作品集",
    "hero.stat.clients": "满意客户",
    "hero.stat.delivery": "交付时间",
    "hero.stat.satisfaction": "满意度",
    "hero.stat.rating": "平均评分",
    
    // Services Section
    "services.title": "带来",
    "services.titleGradient": "成果的服务",
    "services.subtitle": "专业的设计服务，专为发展您的业务和提高转化率而定制。",
    "services.popular": "最受欢迎",
    "services.from": "起价",
    "services.cta": "开始",
    "services.custom.title": "需要定制套餐吗？",
    "services.custom.subtitle": "让我们讨论您的项目，创建符合您需求和预算的定制解决方案。",
    "services.custom.cta": "预约免费咨询",
    
    // Testimonials Section
    "testimonials.title": "客户",
    "testimonials.titleGradient": "评价",
    "testimonials.subtitle": "来自真实客户的真实反馈，他们看到了真实的结果。",
    "testimonials.fiverr": "Fiverr 5.0分",
    "testimonials.upwork": "Upwork顶级评级",
    "testimonials.clients": "500多位满意客户",
    
    // Footer
    "footer.newsletter.title": "保持更新",
    "footer.newsletter.subtitle": "获取免费设计技巧、最新趋势和独家优惠。",
    "footer.newsletter.placeholder": "输入您的邮箱",
    "footer.newsletter.cta": "立即订阅",
    "footer.brand.description": "专业设计师，帮助品牌和YouTuber通过优质视觉内容成长。",
    "footer.services.title": "服务",
    "footer.explore.title": "探索",
    "footer.support.title": "支持",
    "footer.business.title": "商务",
    "footer.copyright": "© 2025 GFX by Adi. 版权所有。",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "加载中...",
    "common.error": "发生错误",
    "common.readMore": "阅读更多",
    "common.learnMore": "了解更多",
  },
  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.portfolio": "ポートフォリオ",
    "nav.services": "サービス",
    "nav.about": "概要",
    "nav.testimonials": "お客様の声",
    "nav.blog": "ブログ",
    "nav.faq": "よくある質問",
    "nav.contact": "お問い合わせ",
    "nav.hire": "今すぐ雇う",
    
    // Hero Section
    "hero.badge": "500人以上のYouTuberとブランドから信頼されています",
    "hero.title": "あなたのブランドを",
    "hero.titleGradient": "プレミアムデザインで変革",
    "hero.subtitle": "視聴者を忠実な顧客に変える、プロフェッショナルなロゴデザイン、YouTubeサムネイル、動画編集。",
    "hero.subtitleBold": "24〜48時間で完成。",
    "hero.cta.primary": "プロジェクトを開始",
    "hero.cta.secondary": "紹介を見る",
    "hero.cta.portfolio": "ポートフォリオを見る",
    "hero.stat.clients": "満足したクライアント",
    "hero.stat.delivery": "納期",
    "hero.stat.satisfaction": "満足度",
    "hero.stat.rating": "平均評価",
    
    // Services Section
    "services.title": "結果を",
    "services.titleGradient": "生み出すサービス",
    "services.subtitle": "ビジネスの成長とコンバージョン向上のためにカスタマイズされたプロフェッショナルなデザインサービス。",
    "services.popular": "最も人気",
    "services.from": "から",
    "services.cta": "始める",
    "services.custom.title": "カスタムパッケージが必要ですか？",
    "services.custom.subtitle": "プロジェクトについて話し合い、ニーズと予算に合わせたカスタムソリューションを作成しましょう。",
    "services.custom.cta": "無料相談を予約",
    
    // Testimonials Section
    "testimonials.title": "お客様の",
    "testimonials.titleGradient": "声",
    "testimonials.subtitle": "実際の結果を見た実際のクライアントからの本物のフィードバック。",
    "testimonials.fiverr": "Fiverrで5.0",
    "testimonials.upwork": "Upworkでトップ評価",
    "testimonials.clients": "500人以上の満足したクライアント",
    
    // Footer
    "footer.newsletter.title": "最新情報を入手",
    "footer.newsletter.subtitle": "無料のデザインのヒント、最新トレンド、限定オファーをメールで受け取りましょう。",
    "footer.newsletter.placeholder": "メールアドレスを入力",
    "footer.newsletter.cta": "今すぐ登録",
    "footer.brand.description": "プレミアムビジュアルコンテンツを通じてブランドとYouTuberの成長を支援するプロフェッショナルデザイナー。",
    "footer.services.title": "サービス",
    "footer.explore.title": "探索",
    "footer.support.title": "サポート",
    "footer.business.title": "ビジネス",
    "footer.copyright": "© 2025 GFX by Adi. 全著作権所有。",
    "footer.contact.email": "hello@adilgfx.com",
    "footer.contact.whatsapp": "WhatsApp",
    
    // Common
    "common.loading": "読み込み中...",
    "common.error": "エラーが発生しました",
    "common.readMore": "続きを読む",
    "common.learnMore": "詳細を見る",
  },
}
