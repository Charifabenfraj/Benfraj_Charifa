import { FaCode, FaBuilding, FaGraduationCap, FaPlane, FaChartBar } from 'react-icons/fa';
import type { ReactNode } from 'react';

const allImages = import.meta.glob<{ default: string }>(
  '../photos/*/capture-*.png',
  { eager: true }
);

function getProjectImages(folderName: string): string[] {
  const prefix = `../photos/${folderName}/capture-`;
  const images: { num: number; src: string }[] = [];

  for (const [path, mod] of Object.entries(allImages)) {
    if (path.startsWith(prefix)) {
      const numStr = path.slice(prefix.length).replace('.png', '');
      const num = parseInt(numStr, 10);
      if (!isNaN(num)) {
        images.push({ num, src: mod.default });
      }
    }
  }

  images.sort((a, b) => a.num - b.num);
  return images.map((img) => img.src);
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'dev' | 'bi' | 'ml';
  context: string;
  contextIcon: ReactNode;
  coverImage?: string;
  photos?: string[];
  links?: {
    demo?: string;
    code?: string;
    video?: string;
  };
}

const internMatchPhotos = getProjectImages('InternMatch');
const educationPhotos = getProjectImages('Education_APP');
const elearningPhotos = getProjectImages('Application_E-Learning');
const eventPhotos = getProjectImages('Event_Management');
const plantGuardPhotos = getProjectImages('PlantGuard_AI');
const gymVisionPhotos = getProjectImages('GYMVision');
const travelAgencyPhotos = getProjectImages('Travel_agency');

export const projects: Project[] = [
  {
    title: 'InternMatch',
    description: 'Plateforme intelligente de mise en relation candidats/entreprises avec un système AI qui analyse les CV, recommande des tests techniques et propose des offres de stage personnalisées.',
    longDescription: 'InternMatch est une application React complète qui révolutionne la recherche de stages en utilisant l\'intelligence artificielle. Le système analyse le CV du candidat via n8n, lui recommande des tests techniques adaptés à son profil et à l\'offre cible, puis matche automatiquement les candidats avec les entreprises pertinentes. L\'IA évalue les compétences, identifie les écarts et fournit des recommandations d\'amélioration personnalisées pour maximiser les chances de succès du candidat. Le workflow n8n orchestre toute la chaîne : parsing du CV, scoring des compétences, recommandation de tests, et mise en relation intelligente.',
    technologies: ['React', 'n8n', 'AI/ML', 'Python', 'CV Parsing', 'Matching Algorithm'],
    category: 'dev',
    context: 'Projet Personnel',
    contextIcon: <FaCode className="w-3 h-3" />,
    coverImage: internMatchPhotos[0],
    photos: internMatchPhotos,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
  {
    title: 'Travel Agency',
    description: 'Application web de agence de voyages permettant aux clients de consulter les trips, hôtels et destinations, et de effectuer des réservations en ligne.',
    longDescription: 'Application web complète de agence de voyages développée avec Next.js. Les utilisateurs peuvent explorer les destinations, consulter les hôtels avec leurs détails (prix, équipements, photos, avis), filtrer les trips par date, budget et destination, et effectuer des réservations en ligne. Le système gère la logique métier, la gestion des utilisateurs, des destinations, des hôtels et des réservations.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    category: 'dev',
    context: 'Projet Personnel',
    contextIcon: <FaPlane className="w-3 h-3" />,
    coverImage: travelAgencyPhotos[0],
    photos: travelAgencyPhotos,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
  {
    title: 'Application d\'Évaluation Automatique',
    description: 'Solution automatisée de génération de contenu éducatif à partir de supports multimédias (vidéos, PPTX, PDF). Système qui génère des tests et évalue automatiquement les étudiants via n8n.',
    longDescription: 'Développée lors de mon stage chez Coworky, cette application permet d\'automatiser le processus pédagogique. Le système analyse les supports de cours multimédias (vidéos, présentations PowerPoint, documents PDF) et génère automatiquement des questionnaires et des évaluations adaptés. L\'intégration de n8n permet d\'orchestrer le workflow complet, de l\'extraction du contenu à la génération automatique des tests et à l\'évaluation des réponses des étudiants.',
    technologies: ['React', 'n8n', 'Python', 'PDF Processing', 'Automatisation'],
    category: 'dev',
    context: 'Stage - Coworky',
    contextIcon: <FaBuilding className="w-3 h-3" />,
    coverImage: educationPhotos[0],
    photos: educationPhotos,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
  {
    title: 'Application de Mailing & Gestion Serveurs',
    description: 'Application web et mobile de mailing et de gestion de la vente/location de serveurs en ligne, destinée aux entreprises de campagnes d\'e-mailing.',
    longDescription: 'Projet de fin d\'études réalisé chez ICONE CONCEPT, cette application fullstack gère l\'ensemble du cycle de vie des campagnes d\'e-mailing. Elle comprend un tableau de bord pour la gestion des serveurs SMTP, la création et l\'envoi de campagnes de mailing, le suivi des statistiques d\'ouverture et de clics, ainsi que la gestion de la vente et location de serveurs en ligne. Développée avec React pour le frontend et Django pour le backend, avec une API RESTful robuste.',
technologies: ['Flutter', 'Laravel', 'MySQL', 'REST API'],    category: 'dev',
    context: 'PFE - ICONE CONCEPT',
    contextIcon: <FaGraduationCap className="w-3 h-3" />,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
  {
    title: 'Application E-Learning',
    description: 'Application web d\'e-learning permettant aux utilisateurs de découvrir, s\'inscrire et participer à des formations en ligne.',
    longDescription: 'Réalisée lors de mon stage chez YES-INTERNET, cette plateforme d\'apprentissage en ligne offre une expérience complète aux apprenants. Les utilisateurs peuvent explorer le catalogue de formations, s\'inscrire aux cours qui les intéressent, suivre les vidéos et supports de cours, passer des évaluations et suivre leur progression. Le back-end Symfony gère la logique métier, la gestion des utilisateurs, des formations et des inscriptions avec MySQL comme base de données.',
    technologies: ['Symfony', 'PHP', 'MySQL', 'Bootstrap'],
    category: 'dev',
    context: 'Stage - YES-INTERNET',
    contextIcon: <FaBuilding className="w-3 h-3" />,
    coverImage: elearningPhotos[0],
    photos: elearningPhotos,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
  {
    title: 'Event Management Analytics Platform',
    description: 'Plateforme de gestion d\'événements utilisant Power BI, le Machine Learning et n8n pour analyser les performances, prédire la participation et automatiser les processus.',
    longDescription: 'Ce projet académique combine Business Intelligence et Machine Learning pour offrir une plateforme complète de gestion d\'événements. Power BI est utilisé pour créer des tableaux de bord interactifs analysant les performances des événements passés. Les modèles de Machine Learning prédisent la participation future en se basant sur des données historiques. n8n automatisé les workflows entre les différents outils, permettant une analyse en temps réel et des alertes intelligentes.',
    technologies: ['Power BI', 'DAX', 'n8n', 'Machine Learning', 'Python'],
    category: 'bi',
    context: 'Projet Académique',
    contextIcon: <FaGraduationCap className="w-3 h-3" />,
    coverImage: eventPhotos[0],
    photos: eventPhotos,
    links: { code: 'https://github.com/Charifabenfraj/EVENTZELLA_Project' }
  },
  {
    title: 'Plant Disease Detection App',
    description: 'Application utilisant le Machine Learning pour détecter les maladies des plantes à partir d\'images et proposer des recommandations de traitement.',
    longDescription: 'Cette application de vision par ordinateur utilise des réseaux de neurones convolutifs (CNN) entraînés pour identifier les maladies des plantes à partir de photos. L\'utilisateur prend une photo de la plante malade, le modèle de Deep Learning analyse l\'image et retourne le diagnostic avec un pourcentage de confiance. L\'application propose ensuite des recommandations de traitement adaptées à la maladie détectée. Le stack combine TensorFlow pour le modèle ML, Flask pour l\'API et React pour l\'interface utilisateur.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'React', 'Flask'],
    category: 'ml',
    context: 'Projet Académique',
    contextIcon: <FaGraduationCap className="w-3 h-3" />,
    coverImage: plantGuardPhotos[0],
    photos: plantGuardPhotos,
    links: { code: 'https://github.com/Charifabenfraj/PlantGuard_AI' }
  },
  {
    title: 'Smart Gym Analytics Platform',
    description: 'Système intelligent de recommandation pour salle de sport utilisant le Machine Learning pour la segmentation des clients et la recommandation personnalisée d\'activités.',
    longDescription: 'GYMVISION est une plateforme d\'analytics intelligente pour salles de sport. Utilisant l\'algorithme K-Means pour la segmentation client et Scikit-learn pour les modèles de recommandation, le système analyse les habitudes d\'entraînement des membres pour leur proposer des programmes personnalisés. Power BI offre des visualisations avancées des performances de la salle, et Streamlit fournit une interface interactive pour l\'exploration des données et les prédictions.',
    technologies: ['Python', 'Scikit-learn', 'Power BI', 'K-Means', 'Streamlit'],
    category: 'ml',
    context: 'Projet Académique',
    contextIcon: <FaGraduationCap className="w-3 h-3" />,
    coverImage: gymVisionPhotos[0],
    photos: gymVisionPhotos,
    links: { code: 'https://github.com/Charifabenfraj/GYMVISION' }
  },
  {
    title: 'Comparateur de Prix E-commerce',
    description: 'Projet BI collectant et transformant les données avec SSIS et SQL Server, avec des dashboards Power BI comparant les prix chez Carrefour, Géant, Travel To Do et Touring.',
    longDescription: 'Projet de Business Intelligence consistant à collecter et transformer des données avec SSIS et SQL Server, puis à concevoir des dashboards Power BI comparant les prix chez Carrefour, Géant, Travel To Do et Touring afin d’analyser les écarts de prix et de soutenir la prise de décision.',
    technologies: ['Power BI', 'DAX', 'SSIS', 'SQL Server', 'Data Modeling'],
    category: 'bi',
    context: 'Projet Académique - BI',
    contextIcon: <FaChartBar className="w-3 h-3" />,
    links: { code: 'https://github.com/Charifabenfraj' }
  },
];
