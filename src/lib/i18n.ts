import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        features: "Features",
        pricing: "Pricing",
        about: "About",
        contact: "Contact",
        solution: "Solution",
        login: "Login",
        signup: "Signup",
        getStarted: "Get Started",
      },
      hero: {
        badge: "New: AI-Powered Financial Insights",
        title: "Smart Financial Management Made Simple",
        subtitle:
          "Take control of your finances with our intelligent platform. Track expenses, manage investments, and get AI-powered insights to make smarter financial decisions.",
        cta: "Start Managing",
        secondaryCta: "Schedule Demo",
        imageAlt: "Financial Dashboard Preview",
      },
      features: {
        title: "Powerful Financial Management",
        subtitle:
          "Comprehensive tools designed for UAE businesses and individuals to achieve financial success",
        expense: {
          title: "Smart Expense Tracking",
          description:
            "Monitor and categorize your expenses with AI-powered insights. Get real-time visibility into your spending patterns and optimize your budget.",
        },
        investment: {
          title: "Investment Portfolio",
          description:
            "Build and manage your investment portfolio with expert guidance. Track performance and make informed decisions for long-term wealth growth.",
        },
        insights: {
          title: "Financial Analytics",
          description:
            "Advanced reporting and analytics to understand your financial health. Generate detailed reports and forecasts for better planning.",
        },
      },
      faqs: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        subtitle:
          "Get answers to common questions about our financial management platform",
        questions: {
          security: {
            question: "How secure is my financial data?",
            answer:
              "We use bank-level encryption and comply with UAE financial regulations. Your data is stored securely with multi-factor authentication and regular security audits.",
          },
          fees: {
            question: "What are the fees and charges?",
            answer:
              "We offer transparent pricing with no hidden fees. Our basic plan is free, and premium features start from AED 99/month with volume discounts available.",
          },
          support: {
            question: "What kind of customer support do you provide?",
            answer:
              "We provide 24/7 customer support in Arabic and English via chat, email, and phone. Our UAE-based team understands local financial requirements.",
          },
          integration: {
            question: "Can I integrate with UAE banks?",
            answer:
              "Yes, we integrate with all major UAE banks including Emirates NBD, ADCB, FAB, and ENBD. Secure API connections ensure real-time data synchronization.",
          },
          started: {
            question: "How do I get started?",
            answer:
              "Simply sign up for a free account, connect your bank accounts, and start tracking your finances immediately. Our onboarding process takes less than 5 minutes.",
          },
        },
      },
      footer: {
        description:
          "Empowering UAE businesses and individuals with intelligent financial management solutions. Join thousands who trust Fundify for their financial success.",
        services: {
          title: "Services",
          expense: "Expense Management",
          investment: "Investment Tracking",
          budgeting: "Budget Planning",
          reports: "Financial Reports",
        },
        company: {
          title: "Company",
          about: "About Us",
          careers: "Careers",
          contact: "Contact",
          blog: "Blog",
        },
        legal: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookies: "Cookie Policy",
        },
        rights: "All rights reserved.",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        features: "الميزات",
        pricing: "التسعير",
        about: "حول",
        contact: "اتصل بنا",
        solution: " حلول",
        login: "تسجيل الدخول",
        signup: "تسجيل",
        getStarted: "ابدأ الآن",
      },
      hero: {
        badge: "جديد: رؤى مالية مدعومة بالذكاء الاصطناعي",
        title: "إدارة مالية ذكية مبسطة",
        subtitle:
          "تحكم في أموالك مع منصتنا الذكية. تتبع المصروفات، وأدر الاستثمارات، واحصل على رؤى مدعومة بالذكاء الاصطناعي لاتخاذ قرارات مالية أذكى.",
        cta: "ابدأ الإدارة",
        secondaryCta: "جدولة عرض توضيحي",
        imageAlt: "معاينة لوحة القيادة المالية",
      },
      features: {
        title: "إدارة مالية قوية",
        subtitle:
          "أدوات شاملة مصممة للشركات والأفراد في دولة الإمارات لتحقيق النجاح المالي",
        expense: {
          title: "تتبع المصروفات الذكي",
          description:
            "راقب وصنف مصروفاتك مع رؤى مدعومة بالذكاء الاصطناعي. احصل على رؤية فورية لأنماط إنفاقك وحسّن ميزانيتك.",
        },
        investment: {
          title: "محفظة الاستثمار",
          description:
            "ابني وأدر محفظة استثماراتك مع إرشادات الخبراء. تتبع الأداء واتخذ قرارات مدروسة لنمو الثروة طويل المدى.",
        },
        insights: {
          title: "التحليلات المالية",
          description:
            "تقارير وتحليلات متقدمة لفهم صحتك المالية. أنشئ تقارير مفصلة وتوقعات للتخطيط الأفضل.",
        },
      },
      faqs: {
        badge: "الأسئلة الشائعة",
        title: "الأسئلة المتكررة",
        subtitle:
          "احصل على إجابات للأسئلة الشائعة حول منصة الإدارة المالية لدينا",
        questions: {
          security: {
            question: "ما مدى أمان بياناتي المالية؟",
            answer:
              "نستخدم تشفيراً بمستوى البنوك ونلتزم بلوائح الإمارات المالية. بياناتك محفوظة بأمان مع المصادقة متعددة العوامل ومراجعات أمنية منتظمة.",
          },
          fees: {
            question: "ما هي الرسوم والتكاليف؟",
            answer:
              "نقدم تسعيراً شفافاً بدون رسوم خفية. خطتنا الأساسية مجانية، والميزات المتميزة تبدأ من 99 درهم/شهر مع خصومات للكميات الكبيرة.",
          },
          support: {
            question: "ما نوع دعم العملاء الذي تقدمونه؟",
            answer:
              "نقدم دعم عملاء على مدار 24/7 باللغتين العربية والإنجليزية عبر الدردشة والبريد الإلكتروني والهاتف. فريقنا المقيم في الإمارات يفهم المتطلبات المالية المحلية.",
          },
          integration: {
            question: "هل يمكنني التكامل مع البنوك الإماراتية؟",
            answer:
              "نعم، نتكامل مع جميع البنوك الإماراتية الرئيسية بما في ذلك بنك الإمارات دبي الوطني وأبوظبي التجاري وبنك أبوظبي الأول. اتصالات API الآمنة تضمن مزامنة البيانات في الوقت الفعلي.",
          },
          started: {
            question: "كيف أبدأ؟",
            answer:
              "ببساطة سجل للحصول على حساب مجاني، اربط حساباتك المصرفية، وابدأ في تتبع أموالك فوراً. عملية الإعداد تستغرق أقل من 5 دقائق.",
          },
        },
      },
      footer: {
        description:
          "تمكين الشركات والأفراد في دولة الإمارات بحلول إدارة مالية ذكية. انضم للآلاف الذين يثقون في فنديفاي لنجاحهم المالي.",
        services: {
          title: "الخدمات",
          expense: "إدارة المصروفات",
          investment: "تتبع الاستثمارات",
          budgeting: "تخطيط الميزانية",
          reports: "التقارير المالية",
        },
        company: {
          title: "الشركة",
          about: "من نحن",
          careers: "الوظائف",
          contact: "اتصل بنا",
          blog: "المدونة",
        },
        legal: {
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة",
          cookies: "سياسة ملفات تعريف الارتباط",
        },
        rights: "جميع الحقوق محفوظة.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
