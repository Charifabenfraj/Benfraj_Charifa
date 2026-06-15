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
      description: "Étudiante en 2ème année du cycle d'ingénieur en Business Intelligence à ESPRIT, passionnée par l'analyse de données, l'intelligence artificielle et le développement d'applications. Je développe des solutions intelligentes combinant data, automatisation et visualisation.",
      downloadCV: "Télécharger CV",
      viewCV: "Consulter CV"
    },
    about: {
      title: "À propos de moi",
      whoAmI: "Qui suis-je",
      whoAmIDescription: "Étudiante en deuxième année du cycle d'ingénieur à ESPRIT, spécialisée en Business Intelligence, passionnée par le développement web et mobile. Sérieuse, motivée et curieuse, je cherche à renforcer mes compétences techniques à travers des projets concrets, notamment dans les domaines du développement full stack et de l'analyse de données.",
      name: "Nom",
      nameValue: "Charifa BEN FRAJ",
      email: "Email",
      location: "Localisation",
      locationValue: "Nabeul, Hammamet",
      phone: "Téléphone",
      languages: "Langues",
      languagesDescription: "Je maîtrise plusieurs langues qui me permettent de communiquer efficacement dans différents contextes professionnels.",
      languagesList: {
        fr: "Français",
        ar: "Arabe",
        en: "Anglais"
      }
    },
    skills: {
      title: "Mes compétences",
      frameworks: "Frameworks & Langages",
      bi: "BI & Data",
      databases: "Bases de données",
      automation: "Automatisation & Outils"
    },
    experience: {
      title: "Expériences professionnelles",
      exp1: {
        title: "Stage d'Été - Solution Automatisée",
        company: "Coworky",
        location: "Nabeul",
        date: "07/2025 – 08/2026",
        description: "Développement d'une solution automatisée de génération de contenu éducatif à partir de supports multimédias (vidéos, PPTX, PDF), en combinant développement web et intelligence artificielle."
      },
      exp2: {
        title: "Projet de fin d'études (PFE)",
        company: "ICONE CONCEPT",
        location: "Hammamet",
        date: "01/2024 – 06/2024",
        description: "Développement d'une application web et mobile de mailing et de gestion de la vente/location de serveurs en ligne, destinée aux entreprises de campagnes d'e-mailing."
      },
      exp3: {
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
      description: "2nd year engineering student in Business Intelligence at ESPRIT, passionate about data analysis, artificial intelligence and application development. I develop intelligent solutions combining data, automation and visualization.",
      downloadCV: "Download CV",
      viewCV: "View CV"
    },
    about: {
      title: "About Me",
      whoAmI: "Who Am I",
      whoAmIDescription: "2nd year engineering student at ESPRIT, specialized in Business Intelligence, passionate about web and mobile development. Serious, motivated and curious, I seek to strengthen my technical skills through concrete projects, particularly in full stack development and data analysis.",
      name: "Name",
      nameValue: "Charifa BEN FRAJ",
      email: "Email",
      location: "Location",
      locationValue: "Nabeul, Hammamet",
      phone: "Phone",
      languages: "Languages",
      languagesDescription: "I master several languages that allow me to communicate effectively in different professional contexts.",
      languagesList: {
        fr: "French",
        ar: "Arabic",
        en: "English"
      }
    },
    skills: {
      title: "My Skills",
      frameworks: "Frameworks & Languages",
      bi: "BI & Data",
      databases: "Databases",
      automation: "Automation & Tools"
    },
    experience: {
      title: "Professional Experience",
      exp1: {
        title: "Summer Internship - Automated Solution",
        company: "Coworky",
        location: "Nabeul",
        date: "07/2025 – 08/2026",
        description: "Development of an automated educational content generation solution from multimedia supports (videos, PPTX, PDF), combining web development and artificial intelligence."
      },
      exp2: {
        title: "Final Year Project (PFE)",
        company: "ICONE CONCEPT",
        location: "Hammamet",
        date: "01/2024 – 06/2024",
        description: "Development of a web and mobile application for mailing and server sales/rental management, designed for email campaign companies."
      },
      exp3: {
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
      description: "طالبة في السنة الثانية من دورة الهندسة في الذكاء التجاري في ESPRIT، متحمسة لتحليل البيانات والذكاء الاصطناعي وتطوير التطبيقات. أطور حلولاً ذكية تجمع بين البيانات والأتمتة والتصور.",
      downloadCV: "تحميل السيرة الذاتية",
      viewCV: "عرض السيرة الذاتية"
    },
    about: {
      title: "عني",
      whoAmI: "من أنا",
      whoAmIDescription: "طالبة في السنة الثانية من دورة الهندسة في ESPRIT، متخصصة في الذكاء التجاري، متحمسة لتطوير الويب والتطبيقات الجوال. جادة ومحفزة وفضولية، أسعى لتعزيز مهاراتي التقنية من خلال مشاريع ملموسة، خاصة في مجالات تطوير الويب الكامل وتحليل البيانات.",
      name: "الاسم",
      nameValue: "شريفة بن فرج",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationValue: "نابل، الحمامات",
      phone: "الهاتف",
      languages: "اللغات",
      languagesDescription: "أتقن عدة لغات تتيح لي التواصل بفعالية في سياقات مهنية مختلفة.",
      languagesList: {
        fr: "الفرنسية",
        ar: "العربية",
        en: "الإنجليزية"
      }
    },
    skills: {
      title: "مهاراتي",
      frameworks: "الأطر واللغات",
      bi: "الذكاء التجاري والبيانات",
      databases: "قواعد البيانات",
      automation: "الأتمتة والأدوات"
    },
    experience: {
      title: "الخبرة المهنية",
      exp1: {
        title: "stage صيفي - حل أتمتة",
        company: "Coworky",
        location: "نابل",
        date: "07/2025 – 08/2026",
        description: "تطوير حل أتمتة لإنتاج المحتوى التعليمي من الوسائط المتعددة (الفيديو، PPTX، PDF)، مع الجمع بين تطوير الويب والذكاء الاصطناعي."
      },
      exp2: {
        title: "مشروع التخرج (PFE)",
        company: "ICONE CONCEPT",
        location: "الحمامات",
        date: "01/2024 – 06/2024",
        description: "تطوير تطبيق ويب وجوال للبريد الإلكتروني وإدارة بيع/تأجير الخوادم عبر الإنترنت، مخصص لشركات حملات البريد الإلكتروني."
      },
      exp3: {
        title: "stage تحسين",
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
