const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact"
    },
    hero: {
      name: "Charifa BEN FRAJ",
      role1: "Développeuse Web Full Stack",
      role2: "Spécialiste Business Intelligence",
      role3: "Passionnée par la Data & l'IA",
      role4: "Étudiante en Ingénierie",
      description: "Étudiante en 3e année du cycle d'ingénieur à ESPRIT, spécialisée en Business Intelligence. Passionnée par l'analyse de données, l'intelligence artificielle et le développement d'applications, je conçois des solutions intelligentes combinant Data, Deep Learning, automatisation et visualisation pour répondre à des problématiques réelles.",
      downloadCV: "Télécharger CV",
      viewCV: "Consulter CV"
    },
    about: {
      title: "À propos de moi",
      whoAmI: "Qui suis-je",
      whoAmIDescription: "Étudiante en 3e année du cycle d'ingénieur à ESPRIT, spécialisée en Business Intelligence, passionnée par le développement web et mobile, l'analyse de données et l'intelligence artificielle. Sérieuse, motivée et curieuse, je cherche à renforcer mes compétences techniques à travers des projets concrets, notamment dans les domaines du développement full stack, de la Data et du Deep Learning.",
      name: "Nom",
      nameValue: "Charifa BEN FRAJ",
      email: "Email",
      location: "Localisation",
      locationValue: "Nabeul, Hammamet",
      phone: "Téléphone",
      languages: "Langues",
      languagesDescription: "Je maîtrise plusieurs langues qui me permettent de communiquer efficacement dans différents contextes professionnels.",
      languagesList: {
        fr: { name: "Français", level: "B2" },
        ar: { name: "Arabe", level: "Maternelle" },
        en: { name: "Anglais", level: "B2" }
      }
    },
    skills: {
      title: "Mes compétences",
      frameworks: "Frameworks & Langages",
      bi: "BI & Data",
      databases: "Bases de données",
      aiDataScience: "IA & Data Science",
      crmErp: "CRM, ERP & Low-Code",
      mlopsDevops: "MLOps & DevOps",
      automation: "Automatisation & Outils"
    },
    experience: {
      title: "Expériences professionnelles",
      exp1: {
        title: "Stage d'été - SAHM AI Agency",
        company: "SAHM AI Agency",
        location: "Tunisie",
        date: "07/2026 – 09/2026",
        description: "Développement d'une solution web intégrant le scraping, la préparation des données et un dashboard BI. Modélisation prédictive pour identifier les opportunités commerciales et optimiser la prospection. Intégration d'un système de pointage par reconnaissance faciale et d'un chatbot intelligent."
      },
      exp2: {
        title: "Stage d'été - Solution Automatisée",
        company: "Coworky",
        location: "Nabeul",
        date: "07/2025 – 08/2025",
        description: "Développement d'une solution automatisée de génération de contenu éducatif à partir de supports multimédias (vidéos, PPTX, PDF), en combinant développement web et intelligence artificielle."
      },
      exp3: {
        title: "Projet de fin d'études (PFE)",
        company: "ICONE CONCEPT",
        location: "Hammamet",
        date: "01/2024 – 06/2024",
        description: "Développement d'une application web et mobile de mailing et de gestion de la vente/location de serveurs en ligne, destinée aux entreprises de campagnes d'e-mailing."
      },
      exp4: {
        title: "Stage de perfectionnement",
        company: "YES-INTERNET",
        location: "Hammamet",
        date: "01/2023",
        description: "Développement d'une application web d'e-learning permettant aux utilisateurs de découvrir, s'inscrire et participer à des formations en ligne."
      }
    },
    projects: {
      title: "Mes projets",
      all: "Tous",
      dev: "Développement",
      bi: "Business Intelligence",
      ml: "Machine Learning",
      viewDetails: "Voir les détails",
      backToProjects: "Retour aux projets",
      description: "Description",
      technologies: "Technologies utilisées",
      screenshots: "Captures d'écran",
      sourceCode: "Voir le code source",
      liveDemo: "Démo live",
      captures: "captures",
      items: {
        InternMatch: {
          description: "Plateforme intelligente de mise en relation candidats/entreprises avec un système AI qui analyse les CV, recommande des tests techniques et propose des offres de stage personnalisées.",
          longDescription: "InternMatch est une application React complète qui révolutionne la recherche de stages en utilisant l'intelligence artificielle. Le système analyse le CV du candidat via n8n, lui recommande des tests techniques adaptés à son profil et à l'offre cible, puis matche automatiquement les candidats avec les entreprises pertinentes."
        },
        TravelAgency: {
          description: "Application web d'agence de voyages permettant aux clients de consulter les trips, hôtels et destinations, et d'effectuer des réservations en ligne.",
          longDescription: "Application web complète d'agence de voyages développée avec Next.js. Les utilisateurs peuvent explorer les destinations, consulter les hôtels avec leurs détails (prix, équipements, photos, avis), filtrer les trips par date, budget et destination, et effectuer des réservations en ligne."
        },
        EvalAuto: {
          description: "Solution automatisée de génération de contenu éducatif à partir de supports multimédias (vidéos, PPTX, PDF). Système qui génère des tests et évalue automatiquement les étudiants via n8n.",
          longDescription: "Développée lors de mon stage chez Coworky, cette application permet d'automatiser le processus pédagogique. Le système analyse les supports de cours multimédias et génère automatiquement des questionnaires et des évaluations adaptés."
        },
        MailingApp: {
          description: "Application web et mobile de mailing et de gestion de la vente/location de serveurs en ligne, destinée aux entreprises de campagnes d'e-mailing.",
          longDescription: "Projet de fin d'études réalisé chez ICONE CONCEPT, cette application fullstack gère l'ensemble du cycle de vie des campagnes d'e-mailing. Elle comprend un tableau de bord pour la gestion des serveurs SMTP, la création et l'envoi de campagnes de mailing."
        },
        ELearning: {
          description: "Application web d'e-learning permettant aux utilisateurs de découvrir, s'inscrire et participer à des formations en ligne.",
          longDescription: "Réalisée lors de mon stage chez YES-INTERNET, cette plateforme d'apprentissage en ligne offre une expérience complète aux apprenants. Les utilisateurs peuvent explorer le catalogue de formations, s'inscrire aux cours et suivre leur progression."
        },
        EventManagement: {
          description: "Plateforme de gestion d'événements utilisant Power BI, le Machine Learning et n8n pour analyser les performances, prédire la participation et automatiser les processus.",
          longDescription: "Ce projet académique combine Business Intelligence et Machine Learning pour offrir une plateforme complète de gestion d'événements. Power BI est utilisé pour créer des tableaux de bord interactifs analysant les performances des événements passés."
        },
        PlantGuard: {
          description: "Application utilisant le Machine Learning pour détecter les maladies des plantes à partir d'images et proposer des recommandations de traitement.",
          longDescription: "Cette application de vision par ordinateur utilise des réseaux de neurones convolutifs (CNN) entraînés pour identifier les maladies des plantes à partir de photos. L'application propose des recommandations de traitement adaptées à la maladie détectée."
        },
        GYMVision: {
          description: "Système intelligent de recommandation pour salle de sport utilisant le Machine Learning pour la segmentation des clients et la recommandation personnalisée d'activités.",
          longDescription: "GYMVISION est une plateforme d'analytics intelligente pour salles de sport. Utilisant l'algorithme K-Means pour la segmentation client et Scikit-learn pour les modèles de recommandation, le système analyse les habitudes d'entraînement des membres."
        },
        ComparateurPrix: {
          description: "Comparateur de prix e-commerce — Projet BI collectant et transformant les données avec SSIS et SQL Server, avec des dashboards Power BI comparant les prix chez Carrefour, Géant, Travel To Do et Touring.",
          longDescription: "Projet de Business Intelligence consistant à collecter et transformer des données avec SSIS et SQL Server, puis à concevoir des dashboards Power BI comparant les prix chez Carrefour, Géant, Travel To Do et Touring afin d'analyser les écarts de prix et de soutenir la prise de décision."
        }
      }
    },
    education: {
      title: "Formation",
      edu1: {
        degree: "Cycle d'ingénieur en informatique",
        institution: "ESPRIT",
        location: "Tunis",
        period: "Depuis septembre 2024",
        description: "Formation d'ingénieur en informatique avec spécialisation en développement logiciel."
      },
      edu2: {
        degree: "Licence en technologie de l'informatique",
        institution: "Institut Supérieur des Études Technologiques Kélibia",
        location: "Kélibia",
        period: "De septembre 2021 à juin 2024",
        description: "Formation en informatique appliquée avec focus sur le développement web et mobile."
      },
      edu3: {
        degree: "Baccalauréat science expérimentale",
        institution: "Lycée Mohamed Boudhina",
        location: "Hammamet",
        period: "Juin 2021",
        description: "Diplôme de fin d'études secondaires avec spécialisation en sciences expérimentales."
      }
    },
    contact: {
      title: "Contactez-moi",
      description: "Vous pouvez me contacter directement par email, téléphone ou via LinkedIn.",
      downloadCV: "Télécharger mon CV",
      myCoordinates: "Mes coordonnées",
      sendMessage: "Envoyez-moi un message",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer"
    },
    footer: {
      copyright: "© 2026 Charifa Ben Fraj. Tous droits réservés."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      name: "Charifa BEN FRAJ",
      role1: "Full Stack Web Developer",
      role2: "Business Intelligence Specialist",
      role3: "Passionate about Data & AI",
      role4: "Engineering Student",
      description: "3rd year engineering student in Business Intelligence at ESPRIT. Passionate about data analysis, artificial intelligence and application development, I design intelligent solutions combining Data, Deep Learning, automation and visualization to solve real-world problems.",
      downloadCV: "Download CV",
      viewCV: "View CV"
    },
    about: {
      title: "About Me",
      whoAmI: "Who Am I",
      whoAmIDescription: "3rd year engineering student at ESPRIT, specialized in Business Intelligence, passionate about web and mobile development, data analysis and artificial intelligence. Serious, motivated and curious, I seek to strengthen my technical skills through concrete projects, particularly in full stack development, Data and Deep Learning.",
      name: "Name",
      nameValue: "Charifa BEN FRAJ",
      email: "Email",
      location: "Location",
      locationValue: "Nabeul, Hammamet",
      phone: "Phone",
      languages: "Languages",
      languagesDescription: "I master several languages that allow me to communicate effectively in different professional contexts.",
      languagesList: {
        fr: { name: "French", level: "B2" },
        ar: { name: "Arabic", level: "Native" },
        en: { name: "English", level: "B2" }
      }
    },
    skills: {
      title: "My Skills",
      frameworks: "Frameworks & Languages",
      bi: "BI & Data",
      databases: "Databases",
      aiDataScience: "AI & Data Science",
      crmErp: "CRM, ERP & Low-Code",
      mlopsDevops: "MLOps & DevOps",
      automation: "Automation & Tools"
    },
    experience: {
      title: "Professional Experience",
      exp1: {
        title: "Summer Internship - SAHM AI Agency",
        company: "SAHM AI Agency",
        location: "Tunisia",
        date: "07/2026 – 09/2026",
        description: "Development of a web solution integrating scraping, data preparation and a BI dashboard. Predictive modeling to identify business opportunities and optimize prospecting. Integration of a facial recognition-based time tracking system and an intelligent chatbot."
      },
      exp2: {
        title: "Summer Internship - Automated Solution",
        company: "Coworky",
        location: "Nabeul",
        date: "07/2025 – 08/2025",
        description: "Development of an automated educational content generation solution from multimedia supports (videos, PPTX, PDF), combining web development and artificial intelligence."
      },
      exp3: {
        title: "Final Year Project (PFE)",
        company: "ICONE CONCEPT",
        location: "Hammamet",
        date: "01/2024 – 06/2024",
        description: "Development of a web and mobile application for mailing and server sales/rental management, designed for email campaign companies."
      },
      exp4: {
        title: "Improvement Internship",
        company: "YES-INTERNET",
        location: "Hammamet",
        date: "01/2023",
        description: "Development of an e-learning web application allowing users to discover, register and participate in online training."
      }
    },
    projects: {
      title: "My Projects",
      all: "All",
      dev: "Development",
      bi: "Business Intelligence",
      ml: "Machine Learning",
      viewDetails: "View Details",
      backToProjects: "Back to Projects",
      description: "Description",
      technologies: "Technologies Used",
      screenshots: "Screenshots",
      sourceCode: "View Source Code",
      liveDemo: "Live Demo",
      captures: "captures",
      items: {
        InternMatch: {
          description: "Smart candidate/company matching platform with an AI system that analyzes CVs, recommends technical tests and proposes personalized internship offers.",
          longDescription: "InternMatch is a complete React application that revolutionizes internship search using artificial intelligence. The system analyzes the candidate's CV via n8n, recommends technical tests adapted to their profile and target offer, then automatically matches candidates with relevant companies."
        },
        TravelAgency: {
          description: "Travel agency web application allowing clients to view trips, hotels and destinations, and make online reservations.",
          longDescription: "Complete travel agency web application developed with Next.js. Users can explore destinations, view hotels with their details (price, amenities, photos, reviews), filter trips by date, budget and destination, and make online reservations."
        },
        EvalAuto: {
          description: "Automated solution for generating educational content from multimedia supports (videos, PPTX, PDF). System that generates tests and automatically evaluates students via n8n.",
          longDescription: "Developed during my internship at Coworky, this application automates the pedagogical process. The system analyzes multimedia course materials and automatically generates questionnaires and adapted assessments."
        },
        MailingApp: {
          description: "Web and mobile mailing application and server sales/rental management for email campaign companies.",
          longDescription: "Final year project carried out at ICONE CONCEPT, this fullstack application manages the entire lifecycle of email campaigns. It includes a dashboard for SMTP server management, creation and sending of mailing campaigns."
        },
        ELearning: {
          description: "E-learning web application allowing users to discover, register and participate in online training.",
          longDescription: "Completed during my internship at YES-INTERNET, this online learning platform offers a complete experience to learners. Users can explore the training catalog, register for courses and track their progress."
        },
        EventManagement: {
          description: "Event management platform using Power BI, Machine Learning and n8n to analyze performance, predict participation and automate processes.",
          longDescription: "This academic project combines Business Intelligence and Machine Learning to offer a complete event management platform. Power BI is used to create interactive dashboards analyzing past event performance."
        },
        PlantGuard: {
          description: "Application using Machine Learning to detect plant diseases from images and provide treatment recommendations.",
          longDescription: "This computer vision application uses convolutional neural networks (CNN) trained to identify plant diseases from photos. The application provides treatment recommendations adapted to the detected disease."
        },
        GYMVision: {
          description: "Smart recommendation system for gyms using Machine Learning for customer segmentation and personalized activity recommendations.",
          longDescription: "GYMVISION is an intelligent analytics platform for gyms. Using K-Means algorithm for customer segmentation and Scikit-learn for recommendation models, the system analyzes members' training habits."
        },
        ComparateurPrix: {
          description: "E-commerce price comparison — BI project collecting and transforming data with SSIS and SQL Server, with Power BI dashboards comparing prices at Carrefour, Géant, Travel To Do and Touring.",
          longDescription: "Business Intelligence project consisting of collecting and transforming data with SSIS and SQL Server, then designing Power BI dashboards comparing prices at Carrefour, Géant, Travel To Do and Touring to analyze price gaps and support decision-making."
        }
      }
    },
    education: {
      title: "Education",
      edu1: {
        degree: "Engineering Degree in Computer Science",
        institution: "ESPRIT",
        location: "Tunis",
        period: "Since September 2024",
        description: "Computer engineering training with specialization in software development."
      },
      edu2: {
        degree: "Bachelor's in Information Technology",
        institution: "Institut Supérieur des Études Technologiques Kélibia",
        location: "Kélibia",
        period: "September 2021 to June 2024",
        description: "Training in applied computer science with focus on web and mobile development."
      },
      edu3: {
        degree: "Baccalauréat Experimental Sciences",
        institution: "Lycée Mohamed Boudhina",
        location: "Hammamet",
        period: "June 2021",
        description: "High school diploma with specialization in experimental sciences."
      }
    },
    contact: {
      title: "Contact Me",
      description: "You can contact me directly by email, phone or via LinkedIn.",
      downloadCV: "Download my CV",
      myCoordinates: "My Contact Info",
      sendMessage: "Send me a message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send"
    },
    footer: {
      copyright: "© 2026 Charifa Ben Fraj. All rights reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      education: "التكوين",
      contact: "اتصل بي"
    },
    hero: {
      name: "شريفة بن فرج",
      role1: "مطور مواقع الويب الكامل",
      role2: "متخصصة في الذكاء التجاري",
      role3: "متحمسة للبيانات والذكاء الاصطناعي",
      role4: "طالبة هندسة",
      description: "طالبة في السنة الثالثة من دورة الهندسة في الذكاء التجاري في ESPRIT. متحمسة لتحليل البيانات والذكاء الاصطناعي وتطوير التطبيقات. أطور حلولاً ذكية تجمع بين البيانات والتعلم الآلي والأتمتة والتصور المرئي لحل المشكلات الواقعية.",
      downloadCV: "تحميل السيرة الذاتية",
      viewCV: "عرض السيرة الذاتية"
    },
    about: {
      title: "عني",
      whoAmI: "من أنا",
      whoAmIDescription: "طالبة في السنة الثالثة من دورة الهندسة في ESPRIT، متخصصة في الذكاء التجاري، متحمسة لتطوير الويب والتطبيقات الجوال، وتحليل البيانات والذكاء الاصطناعي. جادة ومحفزة وفضولية، أسعى لتعزيز مهاراتي التقنية من خلال مشاريع ملموسة، خاصة في تطوير الويب الكامل والبيانات والتعلم العميق.",
      name: "الاسم",
      nameValue: "شريفة بن فرج",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationValue: "نابل، الحمامات",
      phone: "الهاتف",
      languages: "اللغات",
      languagesDescription: "أتقن عدة لغات تتيح لي التواصل بفعالية في سياقات مهنية مختلفة.",
      languagesList: {
        fr: { name: "الفرنسية", level: "B2" },
        ar: { name: "العربية", level: "أم" },
        en: { name: "الإنجليزية", level: "B2" }
      }
    },
    skills: {
      title: "مهاراتي",
      frameworks: "الأطر واللغات",
      bi: "الذكاء التجاري والبيانات",
      databases: "قواعد البيانات",
      aiDataScience: "الذكاء الاصطناعي وعلوم البيانات",
      crmErp: "إدارة علاقات العملاء، تخطيط الموارد وأدوات لا كود",
      mlopsDevops: "MLOps و devops",
      automation: "الأتمتة والأدوات"
    },
    experience: {
      title: "الخبرة المهنية",
      exp1: {
        title: "تدريب صيفي - SAHM AI Agency",
        company: "SAHM AI Agency",
        location: "تونس",
        date: "07/2026 – 09/2026",
        description: "تطوير حل ويب يجمع بين الاستخراج، وإعداد البيانات، ولوحة معلومات BI. نمذجة تنبؤية لتحديد فرص العمل وتحسين الاستكشاف التجاري. دمج نظام حضور بالتعرف على الوجه وروبوت محادثة ذكي."
      },
      exp2: {
        title: "تدريب صيفي - حل أتمتة",
        company: "Coworky",
        location: "نابل",
        date: "07/2025 – 08/2025",
        description: "تطوير حل أتمتة لإنتاج المحتوى التعليمي من الوسائط المتعددة (الفيديو، PPTX، PDF)، مع الجمع بين تطوير الويب والذكاء الاصطناعي."
      },
      exp3: {
        title: "مشروع التخرج (PFE)",
        company: "ICONE CONCEPT",
        location: "الحمامات",
        date: "01/2024 – 06/2024",
        description: "تطوير تطبيق ويب وجوال للبريد الإلكتروني وإدارة بيع/تأجير الخوادم عبر الإنترنت، مخصص لشركات حملات البريد الإلكتروني."
      },
      exp4: {
        title: "تدريب تأهيلي",
        company: "YES-INTERNET",
        location: "الحمامات",
        date: "01/2023",
        description: "تطوير تطبيق ويب للتعلم الإلكتروني يتيح للمستخدمين اكتشاف التسجيل والمشاركة في التدريب عبر الإنترنت."
      }
    },
    projects: {
      title: "مشاريعي",
      all: "الكل",
      dev: "التطوير",
      bi: "الذكاء التجاري",
      ml: "التعلم الآلي",
      viewDetails: "عرض التفاصيل",
      backToProjects: "العودة إلى المشاريع",
      description: "الوصف",
      technologies: "التقنيات المستخدمة",
      screenshots: "لقطات الشاشة",
      sourceCode: "عرض الكود المصدري",
      liveDemo: "عرض مباشر",
      captures: "لقطات",
      items: {
        InternMatch: {
          description: "منصة ذكية للتواصل بين المرشحين والشركات مع نظام ذكاء اصطناعي يحلل السير الذاتية ويوصي بالاختبارات الفنية ويقترح عروض تدريب مخصصة.",
          longDescription: "InternMatch هو تطبيق React كامل يُحدث ثورة في البحث عن التدريب باستخدام الذكاء الاصطناعي. يحلل النظام السيرة الذاتية للمترشح عبر n8n، ويوصي باختبارات فنية ملائمة لملفه."
        },
        TravelAgency: {
          description: "تطبيق ويب لوكالة السفر يتيح للعملاء استكشاف الرحلات والفنادق والوجهات وإجراء الحجوزات عبر الإنترنت.",
          longDescription: "تطبيق ويب كامل لوكالة سفر تم تطويره باستخدام Next.js. يمكن للمستخدمين استكشاف الوجهات وعرض الفنقق مع تفاصيلها وتصفية الرحلات وإجراء الحجوزات عبر الإنترنت."
        },
        EvalAuto: {
          description: "حل آلي لإنتاج المحتوى التعليمي من الوسائط المتعددة (الفيديو، PPTX، PDF). نظام يُنشئ الاختبارات ويُقيّم الطلاب آلياً عبر n8n.",
          longDescription: "تم تطويره خلال تدريبي في Coworky، هذا التطبيق يُتمّ عملية التعليم آلياً. يحلل النظام مواد الدعم المتعددة الوسائط وينشئ تلقائياً أسئلة وتقييمات ملائمة."
        },
        MailingApp: {
          description: "تطبيق ويب وجوال للبريد الإلكتروني وإدارة بيع/تأجير الخوادم عبر الإنترنت، مخصص لشركات حملات البريد الإلكتروني.",
          longDescription: "مشروع تخرج تم تنفيذه في ICONE CONCEPT، هذا التطبيق الكامل يُدير دورة حياة حملات البريد الإلكتروني بأكملها. يتضمن لوحة تحكم لإدارة خوادم SMTP وإنشاء حملات البريد."
        },
        ELearning: {
          description: "تطبيق ويب للتعلم الإلكتروني يتيح للمستخدمين اكتشاف التسجيل والمشاركة في التدريب عبر الإنترنت.",
          longDescription: "تم إنجازه خلال تدريبي في YES-INTERNET، هذه المنصة تقدم تجربة تعليمية شاملة للمتعلمين. يمكن للمستخدمين استكشاف كتالوج التدريب والتسجيل في الدورات ومتابعة تقدمهم."
        },
        EventManagement: {
          description: "منصة إدارة الفعاليات باستخدام Power BI والتعلم الآلي وn8n لتحليل الأداء والتنبؤ بالمشاركة وأتمتة العمليات.",
          longDescription: "هذا المشروع الأكاديمي يجمع بين الذكاء التجاري والتعلم الآلي لتقديم منصة شاملة لإدارة الفعاليات. يتم استخدام Power BI لإنشاء لوحات تحكم تفاعلية لتحليل أداء الفعاليات السابقة."
        },
        PlantGuard: {
          description: "تطبيق يستخدم التعلم الآلي للكشف عن أمراض النباتات من الصور وتقديم توصيات العلاج.",
          longDescription: "هذا التطبيق يستخدم شبكات عصبية تلافيفية (CNN) المدربة لتحديد أمراض النباتات من الصور. يقدم التطبيق توصيات علاج ملائمة للمرض المكتشف."
        },
        GYMVision: {
          description: "نظام توصية ذكي للصالة الرياضية باستخدام التعلم الآلي لتقسيم العملاء وتوصيات الأنشطة المخصصة.",
          longDescription: "GYMVISION منصة تحليلات ذكية للصالات الرياضية. باستخدام خوارزمية K-Means لتقسيم العملاء وScikit-learn لنماذج التوصية، يحلل النظام عادات التدريب للأعضاء."
        },
        ComparateurPrix: {
          description: "مشروع ذكاء تجاري لمقارنة أسعار التجارة الإلكترونية، يجمع ويحول البيانات باستخدام SSIS و SQL Server، مع لوحات معلومات Power BI تقارن الأسعار لدى Carrefour و Géant و Travel To Do و Touring.",
          longDescription: "مشروع ذكاء تجاري يتكون من جمع وتحويل البيانات باستخدام SSIS و SQL Server، ثم تصميم لوحات معلومات Power BI تقارن الأسعار لدى Carrefour و Géant و Travel To Do و Touring لتحليل الفروق السعرية ودعم اتخاذ القرار."
        }
      }
    },
    education: {
      title: "التكوين",
      edu1: {
        degree: "دورة هندسة في علوم الحاسوب",
        institution: "ESPRIT",
        location: "تونس",
        period: "منذ سبتمبر 2024",
        description: "تكوين هندسة الحاسوب مع تخصص في تطوير البرمجيات."
      },
      edu2: {
        degree: "ليسانس في تكنولوجيا المعلومات",
        institution: "المعهد العالي للدراسات التكنولوجية قليبية",
        location: "قليبية",
        period: "من سبتمبر 2021 إلى يونيو 2024",
        description: "تكوين في علوم الحاسوب التطبيقية مع التركيز على تطوير الويب والتطبيقات الجوال."
      },
      edu3: {
        degree: "بكالوريا علوم تجريبية",
        institution: "ثانوية محمد بودينة",
        location: "الحمامات",
        period: "يونيو 2021",
        description: "شهادة نهاية الدراسة الثانوية مع تخصص في العلوم التجريبية."
      }
    },
    contact: {
      title: "اتصل بي",
      description: "يمكنك التواصل معي مباشرة عبر البريد الإلكتروني أو الهاتف أو عبر LinkedIn.",
      downloadCV: "تحميل سيرتي الذاتية",
      myCoordinates: "معلومات الاتصال",
      sendMessage: "أرسل لي رسالة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال"
    },
    footer: {
      copyright: "© 2026 شريفة بن فرج. جميع الحقوق محفوظة."
    }
  }
};

export default translations;
