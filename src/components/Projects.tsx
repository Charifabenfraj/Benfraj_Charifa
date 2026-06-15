import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { FaCode, FaExternalLinkAlt, FaGithub, FaBrain, FaChartBar, FaEye, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import { projects, type Project } from '../data/projectsData';
import { useTranslation } from '../hooks/useTranslation';

type Category = 'all' | 'dev' | 'bi' | 'ml';

const projectsTranslationKeys: Record<string, string> = {
  'InternMatch': 'InternMatch',
  'Travel Agency': 'TravelAgency',
  'Application d\'Évaluation Automatique': 'EvalAuto',
  'Application de Mailing & Gestion Serveurs': 'MailingApp',
  'Application E-Learning': 'ELearning',
  'Event Management Analytics Platform': 'EventManagement',
  'Plant Disease Detection App': 'PlantGuard',
  'Smart Gym Analytics Platform': 'GYMVision',
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = React.useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = React.useState<number | null>(null);

  const openDetail = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const closeDetail = () => {
    setSelectedProject(null);
    setSelectedPhoto(null);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null || !selectedProject?.photos) return;
    if (direction === 'next') {
      setSelectedPhoto((selectedPhoto + 1) % selectedProject.photos.length);
    } else {
      setSelectedPhoto((selectedPhoto - 1 + selectedProject.photos.length) % selectedProject.photos.length);
    }
  };



  const getProjectTranslation = (projectTitle: string, field: 'description' | 'longDescription') => {
    const key = projectsTranslationKeys[projectTitle];
    if (key) {
      const val = t(`projects.items.${key}.${field}`);
      return val !== `projects.items.${key}.${field}` ? val : undefined;
    }
    return undefined;
  };

  const filters: { key: Category; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t('projects.all'), icon: <FaCode className="w-4 h-4" /> },
    { key: 'dev', label: t('projects.dev'), icon: <FaCode className="w-4 h-4" /> },
    { key: 'bi', label: t('projects.bi'), icon: <FaChartBar className="w-4 h-4" /> },
    { key: 'ml', label: t('projects.ml'), icon: <FaBrain className="w-4 h-4" /> },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case 'dev': return { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-400' };
      case 'bi': return { bg: 'bg-emerald-500', text: 'text-white', border: 'border-emerald-400' };
      case 'ml': return { bg: 'bg-purple-500', text: 'text-white', border: 'border-purple-400' };
      default: return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-400' };
    }
  };

  const getCategoryGradient = (category: Category) => {
    switch (category) {
      case 'dev': return 'from-blue-600 via-cyan-500 to-blue-700';
      case 'bi': return 'from-emerald-600 via-teal-500 to-emerald-700';
      case 'ml': return 'from-purple-600 via-pink-500 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getCategoryLabel = (category: Category) => {
    switch (category) {
      case 'dev': return t('projects.dev');
      case 'bi': return t('projects.bi');
      case 'ml': return t('projects.ml');
      default: return '';
    }
  };

  // --- PAGE DETAIL ---
  if (selectedProject) {
    const photos = selectedProject.photos || [];
    return (
      <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
          {/* Bouton retour */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={closeDetail}
            className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-xl bg-white text-[var(--violet)] hover:bg-[var(--violet)] hover:text-white font-semibold transition-all duration-300 shadow-sm border border-gray-100"
          >
            <FaArrowLeft className="w-4 h-4" />
            {t('projects.backToProjects')}
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold ${getCategoryColor(selectedProject.category).bg} ${getCategoryColor(selectedProject.category).text}`}>
                {selectedProject.category === 'dev' && <FaCode className="w-3 h-3" />}
                {selectedProject.category === 'bi' && <FaChartBar className="w-3 h-3" />}
                {selectedProject.category === 'ml' && <FaBrain className="w-3 h-3" />}
                {getCategoryLabel(selectedProject.category)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gray-100 text-gray-600">
                {selectedProject.contextIcon}
                {selectedProject.context}
              </span>
              {photos.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[var(--violet)]/10 text-[var(--violet)]">
                    <FaImages className="w-3 h-3" />
                    {photos.length} {t('projects.captures')}
                  </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--bleu-marine)] mb-6 leading-tight">{selectedProject.title}</h1>
          </motion.div>

          {/* Image principale */}
          {selectedProject.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-2xl mb-12"
            >
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-64 md:h-[500px] object-cover"
              />
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[var(--bleu-marine)] mb-4">{t('projects.description')}</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-left">
              {getProjectTranslation(selectedProject.title, 'longDescription') || selectedProject.longDescription || selectedProject.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[var(--bleu-marine)] mb-4">{t('projects.technologies')}</h2>
            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-[var(--violet)]/10 to-[var(--violet-clair)]/10 text-[var(--violet)] text-sm font-bold py-2.5 px-6 rounded-xl border border-[var(--violet)]/20 hover:border-[var(--violet)]/40 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Captures d'écran */}
          {photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[var(--bleu-marine)] mb-6">{t('projects.screenshots')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPhoto(idx)}
                    className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  >
                    <img
                      src={photo}
                      alt={`${selectedProject.title} - capture ${idx + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Liens */}
          {selectedProject.links && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {selectedProject.links.code && (
                <a
                  href={selectedProject.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--bleu-marine)] to-[var(--bleu-marine-clair)] text-white font-bold hover:shadow-lg hover:shadow-[var(--bleu-marine)]/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-5 h-5" />
                  {t('projects.sourceCode')}
                </a>
              )}
              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--violet)] to-[var(--violet-clair)] text-white font-bold hover:shadow-lg hover:shadow-[var(--violet)]/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  {t('projects.liveDemo')}
                </a>
              )}
            </motion.div>
          )}
        </div>

        {/* Lightbox */}
        {selectedPhoto !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10 backdrop-blur-sm"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
                    className="absolute left-2 md:left-4 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10 backdrop-blur-sm"
                  >
                    <FaChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
                    className="absolute right-2 md:right-4 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10 backdrop-blur-sm"
                  >
                    <FaChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <img
                src={photos[selectedPhoto]}
                alt={`${selectedProject.title} - capture ${selectedPhoto + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold">
                {selectedPhoto + 1} / {photos.length}
              </div>
            </motion.div>
          </>
        )}
      </section>
    );
  }

  // --- PAGE LISTE ---
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-10 mb-14"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-[var(--violet)] to-[var(--violet-clair)] text-white shadow-lg shadow-[var(--violet)]/30 scale-105'
                  : 'bg-white text-gray-500 hover:text-[var(--violet)] border border-gray-200 hover:border-[var(--violet)]/30 hover:shadow-md'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const catColor = getCategoryColor(project.category);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.06)] hover:shadow-[0_24px_80px_rgb(123,44,191,0.18)] transition-all duration-500 flex flex-col"
              >
                {/* Image container */}
                <div className={`relative h-60 overflow-hidden ${project.coverImage ? '' : `bg-gradient-to-br ${getCategoryGradient(project.category)}`}`}>
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/30 text-9xl">
                        {project.category === 'dev' && <FaCode />}
                        {project.category === 'bi' && <FaChartBar />}
                        {project.category === 'ml' && <FaBrain />}
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider ${catColor.bg} ${catColor.text} shadow-lg`}>
                      {project.category === 'dev' && <FaCode className="w-3 h-3" />}
                      {project.category === 'bi' && <FaChartBar className="w-3 h-3" />}
                      {project.category === 'ml' && <FaBrain className="w-3 h-3" />}
                      {getCategoryLabel(project.category)}
                    </span>
                    {project.photos && project.photos.length > 0 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold bg-white/95 text-gray-700 shadow-lg">
                      <FaImages className="w-3 h-3" />
                      {project.photos.length} {t('projects.captures')}
                    </span>
                    )}
                  </div>

                  {/* Bottom info on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold bg-white/20 text-white backdrop-blur-md mb-2">
                      {project.contextIcon}
                      {project.context}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 mb-5 text-sm leading-relaxed line-clamp-2 text-left">{getProjectTranslation(project.title, 'description') || project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-50 text-gray-600 text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-gray-400 font-bold py-1.5 px-2">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-auto">
                    <button
                      onClick={() => openDetail(project)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[var(--violet)] to-[var(--violet-clair)] text-white text-sm font-bold hover:shadow-lg hover:shadow-[var(--violet)]/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FaEye className="w-4 h-4" />
                      {t('projects.viewDetails')}
                    </button>
                    {project.links?.code && (
                      <a
                        href={project.links.code}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 hover:bg-[var(--violet)]/10 hover:text-[var(--violet)] transition-all duration-300 border border-gray-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
