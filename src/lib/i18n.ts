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
        title: "Fueling UAE's Growth, One Business at a Time",
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
      about: {
        title: "About Us - Fundify",
        description: "Learn about Fundify's mission to revolutionize fundraising",
        hero: {
          title: "About Fundify",
          subtitle: "Revolutionizing fundraising for the digital age",
          description: "We're on a mission to make fundraising accessible, transparent, and effective for everyone."
        },
        mission: {
          title: "Our Mission",
          description: "To democratize fundraising and empower individuals and organizations to achieve their goals through innovative technology and community support."
        },
        vision: {
          title: "Our Vision",
          description: "A world where every great idea has the opportunity to become reality through accessible and transparent fundraising."
        },
        values: {
          title: "Our Values",
          transparency: {
            title: "Transparency",
            description: "We believe in complete transparency in all fundraising activities."
          },
          innovation: {
            title: "Innovation",
            description: "We continuously innovate to provide the best fundraising experience."
          },
          community: {
            title: "Community",
            description: "We foster a supportive community of creators and backers."
          }
        }
      },
      contact: {
        title: "Contact Us - Fundify",
        description: "Get in touch with the Fundify team",
        hero: {
          title: "Contact Us",
          subtitle: "Have questions? We'd love to hear from you."
        },
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
          submit: "Send Message",
          sending: "Sending..."
        },
        info: {
          address: {
            title: "Address",
            value: "123 Business Bay, Dubai, UAE"
          },
          phone: {
            title: "Phone",
            value: "+971 4 123 4567"
          },
          email: {
            title: "Email",
            value: "hello@fundify.ae"
          },
          hours: {
            title: "Business Hours",
            value: "Sunday - Thursday: 9:00 AM - 6:00 PM"
          }
        }
      },
      getStarted: {
        title: "Get Started - Fundify",
        description: "Start your fundraising journey with Fundify",
        hero: {
          title: "Get Started with Fundify",
          subtitle: "Choose how you want to begin your fundraising journey. Whether you're an individual with a dream or an organization with a mission, we have the right path for you."
        },
        options: {
          individual: {
            title: "Individual Creator",
            description: "Perfect for personal projects, creative endeavors, and individual causes",
            features: [
              "Easy campaign setup",
              "Social media integration",
              "Personal fundraising tools",
              "Community support"
            ],
            cta: "Start as Individual"
          },
          organization: {
            title: "Small Organization",
            description: "Ideal for nonprofits, startups, and small businesses seeking funding",
            features: [
              "Advanced campaign management",
              "Team collaboration tools",
              "Analytics and reporting",
              "Donor management system"
            ],
            cta: "Start as Organization",
            badge: "Popular"
          },
          enterprise: {
            title: "Enterprise",
            description: "For large organizations with complex fundraising needs",
            features: [
              "Custom integrations",
              "Dedicated support",
              "Advanced security",
              "White-label solutions"
            ],
            cta: "Contact Sales"
          }
        },
        help: {
          title: "Not sure which option is right for you?",
          description: "Our team is here to help you choose the best path for your fundraising goals.",
          cta: "Talk to an Expert"
        }
      },
      login: {
        title: "Login - Fundify",
        description: "Sign in to your Fundify account",
        hero: {
          title: "Welcome Back",
          subtitle: "Sign in to your Fundify account to continue"
        },
        form: {
          email: "Email",
          password: "Password",
          rememberMe: "Remember me",
          forgotPassword: "Forgot password?",
          submit: "Sign In",
          noAccount: "Don't have an account?",
          signUp: "Sign up"
        }
      },
      pricing: {
        title: "Pricing - Fundify",
        description: "Choose the perfect plan for your fundraising needs",
        hero: {
          title: "Pricing Plans",
          subtitle: "Choose the perfect plan for your fundraising journey"
        },
        plans: {
          starter: {
            title: "Starter",
            price: "$0",
            period: "per month",
            description: "Perfect for getting started",
            features: [
              {
                text: "Basic financial dashboard",
                tooltip: "Track income, expenses, and cash flow"
              },
              {
                text: "Up to 3 loan applications",
                tooltip: null
              },
              {
                text: "AI expense categorization",
                tooltip: null
              },
              {
                text: "Basic fund matching",
                tooltip: "Get matched with suitable funding options"
              },
              {
                text: "Email support",
                tooltip: "Get help via email within 24 hours"
              },
              {
                text: "Mobile app access",
                tooltip: null
              }
            ],
            cta: "Get Started"
          },
          professional: {
            title: "Professional",
            price: "$29",
            period: "per month",
            description: "For serious fundraisers",
            features: [
              {
                text: "Everything in Starter, plus:",
                tooltip: null
              },
              {
                text: "Advanced financial analytics",
                tooltip: "Detailed reports and forecasting"
              },
              {
                text: "Unlimited loan applications",
                tooltip: null
              },
              {
                text: "AI-powered credit scoring",
                tooltip: null
              },
              {
                text: "Premium fund matching",
                tooltip: "Access to exclusive funding opportunities"
              },
              {
                text: "Automated loan management",
                tooltip: "Track payments, interest, and schedules automatically"
              },
              {
                text: "Priority support",
                tooltip: "Phone and chat support"
              },
              {
                text: "Custom reporting",
                tooltip: null
              }
            ],
            cta: "Start Pro Trial",
            badge: "Most Popular"
          },
          enterprise: {
            title: "Enterprise",
            price: "Custom",
            period: "pricing",
            description: "For large organizations",
            features: [
              {
                text: "Everything in Professional, plus:",
                tooltip: null
              },
              {
                text: "White-label solution",
                tooltip: null
              },
              {
                text: "Advanced AI risk assessment",
                tooltip: null
              },
              {
                text: "Custom integrations",
                tooltip: "Tailored integrations with your systems"
              },
              {
                text: "Dedicated account manager",
                tooltip: null
              },
              {
                text: "Advanced compliance tools",
                tooltip: "Meet regulatory requirements with ease"
              }
            ],
            cta: "Contact Sales"
          }
        }
      },
      signup: {
        title: "Sign Up - Fundify",
        description: "Create your Fundify account",
        hero: {
          title: "Create Account",
          subtitle: "Join Fundify and start your fundraising journey"
        },
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm Password",
          terms: "I agree to the",
          termsLink: "Terms of Service",
          and: "and",
          privacyLink: "Privacy Policy",
          submit: "Create Account",
          haveAccount: "Already have an account?",
          signIn: "Sign in"
        }
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
      serviceModal: {
        defaultDetail: "More detailed information about this service will be shown here. You can customize this per service item."
      },
      pricingComponent: {
        monthly: "Monthly",
        yearly: "Yearly",
        mostPopular: "Most Popular",
        off: "% off",
        month: "month",
        year: "year"
      },
      aboutContent: {
        title: "About Fundify",
        subtitle: "We're on a mission to democratize fundraising and make it accessible to everyone, from individual creators to large organizations.",
        mission: {
          title: "Our Mission",
          description: "At Fundify, we believe that great ideas shouldn't be limited by financial constraints. Our platform empowers individuals and organizations to bring their visions to life through innovative fundraising solutions."
        },
        vision: {
          title: "Our Vision",
          description: "We envision a world where funding flows freely to the most impactful projects, creating positive change across communities and industries worldwide."
        },
        whoWeAre: {
          title: "Who We Are",
          paragraph1: "Fundify was born from a simple observation: too many brilliant ideas never see the light of day due to funding barriers. Founded in 2023 by a team of passionate entrepreneurs, technologists, and financial experts, we set out to bridge the gap between innovative projects and the capital they need to succeed.",
          paragraph2: "Our diverse team brings together decades of experience from fintech, venture capital, and startup ecosystems. We understand both sides of the funding equation – the challenges faced by project creators and the needs of investors and backers looking for meaningful opportunities to support.",
          paragraph3: "Today, Fundify serves thousands of creators, entrepreneurs, and organizations worldwide, having facilitated over $50 million in successful funding campaigns. We're not just a platform; we're a community dedicated to turning ideas into reality."
        },
        values: {
          title: "Our Values",
          transparency: {
            title: "Transparency",
            description: "Clear, honest communication in all our interactions"
          },
          innovation: {
            title: "Innovation",
            description: "Continuously improving our platform and services"
          },
          community: {
            title: "Community",
            description: "Building connections between funders and creators"
          }
        }
      },
      contactContent: {
        title: "Get in Touch",
        subtitle: "Ready to start your fundraising journey? Send us a message and we'll get back to you soon.",
        form: {
          title: "Get in Touch",
          description: "Ready to start your fundraising journey? Send us a message and we'll get back to you soon.",
          firstName: {
            label: "First Name",
            placeholder: "John"
          },
          lastName: {
            label: "Last Name",
            placeholder: "Doe"
          },
          email: {
            label: "Email",
            placeholder: "john@example.com"
          },
          subject: {
            label: "Subject",
            placeholder: "How can we help?"
          },
          message: {
            label: "Message",
            placeholder: "Tell us more about your project or question..."
          },
          sendButton: "Send Message",
          whatsappButton: "WhatsApp Us"
        },
        contactInfo: {
          phone: {
            label: "Phone:",
            value: "+971 4 123 4567"
          },
          location: {
            label: "Location:",
            value: "Dubai Internet City, Dubai, UAE"
          },
          email: {
            label: "Email:",
            value: "contact@fundify.com"
          }
        }
      },
    },
  },
  ar: {
    translation: {
      nav: {
        services: "الميزات",
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
      about: {
        title: "من نحن - فنديفاي",
        description: "تعرف على مهمة فنديفاي لثورة في جمع التبرعات",
        hero: {
          title: "حول فنديفاي",
          subtitle: "ثورة في جمع التبرعات للعصر الرقمي",
          description: "نحن في مهمة لجعل جمع التبرعات متاحاً وشفافاً وفعالاً للجميع."
        },
        mission: {
          title: "مهمتنا",
          description: "إضفاء الطابع الديمقراطي على جمع التبرعات وتمكين الأفراد والمنظمات من تحقيق أهدافهم من خلال التكنولوجيا المبتكرة ودعم المجتمع."
        },
        vision: {
          title: "رؤيتنا",
          description: "عالم تحصل فيه كل فكرة عظيمة على فرصة لتصبح حقيقة من خلال جمع التبرعات المتاح والشفاف."
        },
        values: {
          title: "قيمنا",
          transparency: {
            title: "الشفافية",
            description: "نؤمن بالشفافية الكاملة في جميع أنشطة جمع التبرعات."
          },
          innovation: {
            title: "الابتكار",
            description: "نبتكر باستمرار لتوفير أفضل تجربة لجمع التبرعات."
          },
          community: {
            title: "المجتمع",
            description: "نعزز مجتمعاً داعماً من المبدعين والداعمين."
          }
        }
      },
      contact: {
        title: "اتصل بنا - فنديفاي",
        description: "تواصل مع فريق فنديفاي",
        hero: {
          title: "اتصل بنا",
          subtitle: "لديك أسئلة؟ نحب أن نسمع منك."
        },
        form: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          subject: "الموضوع",
          message: "الرسالة",
          submit: "إرسال الرسالة",
          sending: "جاري الإرسال..."
        },
        info: {
          address: {
            title: "العنوان",
            value: "123 خليج الأعمال، دبي، الإمارات العربية المتحدة"
          },
          phone: {
            title: "الهاتف",
            value: "+971 4 123 4567"
          },
          email: {
            title: "البريد الإلكتروني",
            value: "hello@fundify.ae"
          },
          hours: {
            title: "ساعات العمل",
            value: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً"
          }
        }
      },
      getStarted: {
        title: "ابدأ الآن - فنديفاي",
        description: "ابدأ رحلة جمع التبرعات مع فنديفاي",
        hero: {
          title: "ابدأ مع فنديفاي",
          subtitle: "اختر كيف تريد أن تبدأ رحلة جمع التبرعات. سواء كنت فرداً لديه حلم أو منظمة لديها مهمة، لدينا المسار المناسب لك."
        },
        options: {
          individual: {
            title: "مبدع فردي",
            description: "مثالي للمشاريع الشخصية والمساعي الإبداعية والقضايا الفردية",
            features: [
              "إعداد سهل للحملة",
              "تكامل وسائل التواصل الاجتماعي",
              "أدوات جمع التبرعات الشخصية",
              "دعم المجتمع"
            ],
            cta: "ابدأ كفرد"
          },
          organization: {
            title: "منظمة صغيرة",
            description: "مثالي للمنظمات غير الربحية والشركات الناشئة والشركات الصغيرة التي تسعى للتمويل",
            features: [
              "إدارة متقدمة للحملات",
              "أدوات التعاون الجماعي",
              "التحليلات والتقارير",
              "نظام إدارة المتبرعين"
            ],
            cta: "ابدأ كمنظمة",
            badge: "الأكثر شعبية"
          },
          enterprise: {
            title: "المؤسسات",
            description: "للمنظمات الكبيرة ذات احتياجات جمع التبرعات المعقدة",
            features: [
              "تكاملات مخصصة",
              "دعم مخصص",
              "أمان متقدم",
              "حلول العلامة البيضاء"
            ],
            cta: "اتصل بالمبيعات"
          }
        },
        help: {
          title: "غير متأكد من الخيار المناسب لك؟",
          description: "فريقنا هنا لمساعدتك في اختيار أفضل مسار لأهداف جمع التبرعات الخاصة بك.",
          cta: "تحدث مع خبير"
        }
      },
      login: {
        title: "تسجيل الدخول - فنديفاي",
        description: "سجل الدخول إلى حساب فنديفاي الخاص بك",
        hero: {
          title: "مرحباً بعودتك",
          subtitle: "سجل الدخول إلى حساب فنديفاي الخاص بك للمتابعة"
        },
        form: {
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          rememberMe: "تذكرني",
          forgotPassword: "نسيت كلمة المرور؟",
          submit: "تسجيل الدخول",
          noAccount: "ليس لديك حساب؟",
          signUp: "سجل الآن"
        }
      },
      pricing: {
        title: "التسعير - فنديفاي",
        description: "اختر الخطة المثالية لاحتياجات جمع التبرعات الخاصة بك",
        hero: {
          title: "خطط التسعير",
          subtitle: "اختر الخطة المثالية لرحلة جمع التبرعات الخاصة بك"
        },
        plans: {
          starter: {
            title: "مبتدئ",
            price: "0 درهم",
            period: "شهرياً",
            description: "مثالي للبداية",
            features: [
              {
                text: "لوحة تحكم مالية أساسية",
                tooltip: "تتبع الدخل والمصروفات والتدفق النقدي"
              },
              {
                text: "حتى 3 طلبات قروض",
                tooltip: null
              },
              {
                text: "تصنيف المصروفات بالذكاء الاصطناعي",
                tooltip: null
              },
              {
                text: "مطابقة الأموال الأساسية",
                tooltip: "احصل على مطابقة مع خيارات التمويل المناسبة"
              },
              {
                text: "دعم البريد الإلكتروني",
                tooltip: "احصل على المساعدة عبر البريد الإلكتروني خلال 24 ساعة"
              },
              {
                text: "الوصول لتطبيق الهاتف المحمول",
                tooltip: null
              }
            ],
            cta: "ابدأ الآن"
          },
          professional: {
            title: "احترافي",
            price: "99 درهم",
            period: "شهرياً",
            description: "لجامعي التبرعات الجادين",
            features: [
              {
                text: "كل ما في المبتدئ، بالإضافة إلى:",
                tooltip: null
              },
              {
                text: "تحليلات مالية متقدمة",
                tooltip: "تقارير مفصلة وتوقعات"
              },
              {
                text: "طلبات قروض غير محدودة",
                tooltip: null
              },
              {
                text: "تقييم ائتماني بالذكاء الاصطناعي",
                tooltip: null
              },
              {
                text: "مطابقة أموال متميزة",
                tooltip: "الوصول لفرص تمويل حصرية"
              },
              {
                text: "إدارة القروض الآلية",
                tooltip: "تتبع المدفوعات والفوائد والجداول تلقائياً"
              },
              {
                text: "دعم أولوية",
                tooltip: "دعم الهاتف والدردشة"
              },
              {
                text: "تقارير مخصصة",
                tooltip: null
              }
            ],
            cta: "ابدأ التجربة المجانية",
            badge: "الأكثر شعبية"
          },
          enterprise: {
            title: "المؤسسات",
            price: "تسعير",
            period: "مخصص",
            description: "للمنظمات الكبيرة",
            features: [
              {
                text: "كل ما في الاحترافي، بالإضافة إلى:",
                tooltip: null
              },
              {
                text: "حل العلامة البيضاء",
                tooltip: null
              },
              {
                text: "تقييم مخاطر متقدم بالذكاء الاصطناعي",
                tooltip: null
              },
              {
                text: "تكاملات مخصصة",
                tooltip: "تكاملات مصممة خصيصاً لأنظمتك"
              },
              {
                text: "مدير حساب مخصص",
                tooltip: null
              },
              {
                text: "أدوات امتثال متقدمة",
                tooltip: "تلبية المتطلبات التنظيمية بسهولة"
              }
            ],
            cta: "اتصل بالمبيعات"
          }
        }
      },
      signup: {
        title: "التسجيل - فنديفاي",
        description: "أنشئ حساب فنديفاي الخاص بك",
        hero: {
          title: "إنشاء حساب",
          subtitle: "انضم إلى فنديفاي وابدأ رحلة جمع التبرعات الخاصة بك"
        },
        form: {
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          confirmPassword: "تأكيد كلمة المرور",
          terms: "أوافق على",
          termsLink: "شروط الخدمة",
          and: "و",
          privacyLink: "سياسة الخصوصية",
          submit: "إنشاء حساب",
          haveAccount: "لديك حساب بالفعل؟",
          signIn: "سجل الدخول"
        }
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
      serviceModal: {
        defaultDetail: "سيتم عرض معلومات أكثر تفصيلاً حول هذه الخدمة هنا. يمكنك تخصيص هذا لكل عنصر خدمة."
      },
      pricingComponent: {
        monthly: "شهرياً",
        yearly: "سنوياً",
        mostPopular: "الأكثر شعبية",
        off: "% خصم",
        month: "شهر",
        year: "سنة"
      },
      aboutContent: {
        title: "حول فنديفاي",
        subtitle: "نحن في مهمة لإضفاء الطابع الديمقراطي على جمع التبرعات وجعلها متاحة للجميع، من المبدعين الأفراد إلى المنظمات الكبيرة.",
        mission: {
          title: "مهمتنا",
          description: "في فنديفاي، نؤمن أن الأفكار العظيمة لا يجب أن تكون محدودة بالقيود المالية. منصتنا تمكن الأفراد والمنظمات من تحقيق رؤاهم من خلال حلول جمع التبرعات المبتكرة."
        },
        vision: {
          title: "رؤيتنا",
          description: "نتصور عالماً يتدفق فيه التمويل بحرية إلى المشاريع الأكثر تأثيراً، مما يخلق تغييراً إيجابياً عبر المجتمعات والصناعات في جميع أنحاء العالم."
        },
        whoWeAre: {
          title: "من نحن",
          paragraph1: "وُلدت فنديفاي من ملاحظة بسيطة: الكثير من الأفكار الرائعة لا ترى النور أبداً بسبب حواجز التمويل. تأسست في عام 2023 من قبل فريق من رجال الأعمال المتحمسين والتقنيين والخبراء الماليين، وضعنا هدفاً لسد الفجوة بين المشاريع المبتكرة ورأس المال الذي تحتاجه للنجاح.",
          paragraph2: "فريقنا المتنوع يجمع عقوداً من الخبرة من التكنولوجيا المالية ورأس المال الاستثماري وأنظمة الشركات الناشئة. نحن نفهم كلا جانبي معادلة التمويل - التحديات التي يواجهها منشئو المشاريع واحتياجات المستثمرين والداعمين الذين يبحثون عن فرص ذات مغزى للدعم.",
          paragraph3: "اليوم، تخدم فنديفاي آلاف المبدعين ورجال الأعمال والمنظمات في جميع أنحاء العالم، بعد أن سهلت أكثر من 50 مليون دولار في حملات التمويل الناجحة. نحن لسنا مجرد منصة؛ نحن مجتمع مكرس لتحويل الأفكار إلى واقع."
        },
        values: {
          title: "قيمنا",
          transparency: {
            title: "الشفافية",
            description: "التواصل الواضح والصادق في جميع تفاعلاتنا"
          },
          innovation: {
            title: "الابتكار",
            description: "التحسين المستمر لمنصتنا وخدماتنا"
          },
          community: {
            title: "المجتمع",
            description: "بناء الروابط بين الممولين والمبدعين"
          }
        }
      },
      contactContent: {
        title: "تواصل معنا",
        subtitle: "مستعد لبدء رحلة جمع التبرعات؟ أرسل لنا رسالة وسنعود إليك قريباً.",
        form: {
          title: "تواصل معنا",
          description: "مستعد لبدء رحلة جمع التبرعات؟ أرسل لنا رسالة وسنعود إليك قريباً.",
          firstName: {
            label: "الاسم الأول",
            placeholder: "أحمد"
          },
          lastName: {
            label: "اسم العائلة",
            placeholder: "محمد"
          },
          email: {
            label: "البريد الإلكتروني",
            placeholder: "ahmed@example.com"
          },
          subject: {
            label: "الموضوع",
            placeholder: "كيف يمكننا مساعدتك؟"
          },
          message: {
            label: "الرسالة",
            placeholder: "أخبرنا المزيد عن مشروعك أو سؤالك..."
          },
          sendButton: "إرسال الرسالة",
          whatsappButton: "راسلنا على واتساب"
        },
        contactInfo: {
          phone: {
            label: "الهاتف:",
            value: "+971 4 123 4567"
          },
          location: {
            label: "الموقع:",
            value: "مدينة دبي للإنترنت، دبي، الإمارات العربية المتحدة"
          },
          email: {
            label: "البريد الإلكتروني:",
            value: "contact@fundify.com"
          }
        }
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
