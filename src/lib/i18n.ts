import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        pricing: "Pricing",
        about: "About Us",
        contact: "Contact Us",
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
      services: {
        title: "Our Services",
        tabs: {
          corporate: "Corporate Finance",
          personal: "Personal Finance",
          strategic: "Strategic Support",
        },
        corporate: {
          description: "Financial solutions tailored for growing businesses.",
          items: [
            {
              title: "Working Capital Loan",
              benefit: "Fast approval and flexible repayment",
              details:
                "Our Working Capital Loans help businesses manage day-to-day operations smoothly with flexible repayment schedules and quick disbursement. Ideal for short-term cash flow needs.",
            },
            {
              title: "Term Loan",
              benefit: "Longer tenure loans with competitive interest",
              details:
                "Term Loans provide funding for asset purchases, expansion, or long-term investments. Enjoy fixed or floating interest rates with tenures up to 5 years.",
            },
            {
              title: "Overdraft",
              benefit: "Access funds beyond your account balance",
              details:
                "An Overdraft facility allows businesses to withdraw more than their current account balance. Pay interest only on the utilized amount—great for working capital flexibility.",
            },
            {
              title: "Invoice Discounting",
              benefit: "Unlock cash tied in unpaid invoices",
              details:
                "Get immediate cash against your pending invoices. Improve your liquidity and maintain business continuity without waiting for clients to pay.",
            },
          ],
          cta: "Apply Now",
        },
        personal: {
          description: "Finance your personal needs with ease.",
          items: [
            {
              title: "Personal Loan",
              benefit: "Quick disbursal with minimal paperwork",
              details:
                "Personal Loans are unsecured, with fast approval and minimal documentation. Ideal for weddings, education, or emergency expenses. Tenure up to 5 years.",
            },
            {
              title: "Home Loan",
              benefit: "Flexible EMI and interest rates",
              details:
                "Buy your dream home with flexible EMIs, floating or fixed interest rates, and up to 25-year tenure. Eligible for tax benefits as per UAE regulations.",
            },
            {
              title: "Credit Card",
              benefit: "Rewards & cashback tailored to your lifestyle",
              details:
                "Choose from a range of credit cards offering cashback, travel rewards, or shopping benefits. Enjoy zero joining fees, EMI conversion, and airport lounge access.",
            },
          ],
          cta: "Learn More",
        },
        strategic: {
          description: "Long-term financial advisory services.",
          items: [
            {
              title: "Business Planning",
              benefit: "Strategic guidance for scalable growth",
              details:
                "We work with startups and growing businesses to build investor-ready business plans, including SWOT analysis, projections, and scalable models tailored to UAE markets.",
            },
            {
              title: "Financial Guidance",
              benefit: "Tailored advice based on market dynamics",
              details:
                "Our financial consultants provide insights on budgeting, cash flow, taxation, and financial restructuring to help you navigate dynamic economic scenarios.",
            },
            {
              title: "Portfolio Management",
              benefit: "Optimize investment for high returns",
              details:
                "Get expert help in diversifying and managing your investment portfolio. We align your goals with market opportunities across real estate, mutual funds, and stocks.",
            },
          ],
          cta: "Explore Services",
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
      services: {
        title: "خدماتنا",
        tabs: {
          corporate: "التمويل المؤسسي",
          personal: "التمويل الشخصي",
          strategic: "الدعم الاستراتيجي",
        },
        corporate: {
          description: "حلول مالية مخصصة للأعمال المتنامية.",
          items: [
            {
              title: "قرض رأس المال العامل",
              benefit: "موافقة سريعة وسداد مرن",
              details:
                "قروض رأس المال العامل تساعد في تمويل العمليات اليومية للأعمال التجارية. يتم صرفها بسرعة وتوفر خيارات سداد مرنة لتلبية الاحتياجات قصيرة الأجل.",
            },
            {
              title: "قرض طويل الأجل",
              benefit: "قروض بفترات سداد أطول وأسعار فائدة تنافسية",
              details:
                "قروض طويلة الأجل مخصصة لشراء الأصول أو التوسع أو الاستثمار طويل الأجل. متوفرة بأسعار فائدة ثابتة أو متغيرة وفترات سداد تصل إلى ٥ سنوات.",
            },
            {
              title: "السحب على المكشوف",
              benefit: "الوصول إلى أموال تتجاوز رصيد حسابك",
              details:
                "خدمة السحب على المكشوف تتيح لك سحب مبالغ إضافية عن رصيد حسابك الجاري، مع دفع فائدة فقط على المبلغ المستخدم. خيار ممتاز للسيولة المؤقتة.",
            },
            {
              title: "خصم الفواتير",
              benefit: "تحرير النقد المحتجز في الفواتير غير المدفوعة",
              details:
                "قم بالحصول على تمويل فوري مقابل فواتيرك غير المدفوعة. يساعدك ذلك على تحسين التدفق النقدي دون انتظار الدفع من العملاء.",
            },
          ],
          cta: "قدّم الآن",
        },
        personal: {
          description: "تمويل احتياجاتك الشخصية بكل سهولة.",
          items: [
            {
              title: "قرض شخصي",
              benefit: "صرف سريع بأقل إجراءات ورقية",
              details:
                "قروض شخصية بدون ضمانات، تتم الموافقة عليها بسرعة وبأوراق بسيطة. مثالية للزواج، التعليم أو النفقات الطارئة. مدة السداد تصل إلى ٥ سنوات.",
            },
            {
              title: "قرض سكني",
              benefit: "أقساط مرنة وأسعار فائدة مناسبة",
              details:
                "امتلك منزلك مع أقساط ميسّرة وأسعار فائدة تنافسية. فترات سداد تصل إلى ٢٥ سنة. مؤهل للحصول على مزايا ضريبية حسب قوانين الإمارات.",
            },
            {
              title: "بطاقة ائتمان",
              benefit: "مكافآت ونقاط استرداد مصممة لأسلوب حياتك",
              details:
                "اختر من بين بطاقات ائتمان متعددة تقدم استرداد نقدي، ومكافآت سفر، ومزايا تسوق. تشمل مزايا مثل دخول صالات المطارات وتحويل الرصيد إلى أقساط.",
            },
          ],
          cta: "اعرف المزيد",
        },
        strategic: {
          description: "خدمات استشارية مالية طويلة الأجل.",
          items: [
            {
              title: "تخطيط الأعمال",
              benefit: "إرشادات استراتيجية للنمو المستدام",
              details:
                "نقوم بإعداد خطط أعمال مهنية وجاهزة للمستثمرين مع تحليل SWOT، وتوقعات مالية، ونماذج نمو قابلة للتطبيق ومخصصة لسوق الإمارات.",
            },
            {
              title: "الإرشاد المالي",
              benefit: "نصائح مالية مخصصة بناءً على تحليلات السوق",
              details:
                "نقدم استشارات مالية شاملة تشمل الميزانية، التدفقات النقدية، الضرائب، وإعادة الهيكلة المالية لمساعدتك على التكيف مع تغيرات السوق.",
            },
            {
              title: "إدارة المحافظ",
              benefit: "تحسين الاستثمارات لتحقيق أعلى العوائد",
              details:
                "نساعدك على تنويع محفظتك الاستثمارية وإدارتها بما يتماشى مع أهدافك. يشمل ذلك الاستثمارات في العقارات، وصناديق الاستثمار، والأسهم.",
            },
          ],
          cta: "استكشاف الخدمات",
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
