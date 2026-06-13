import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo, FaCode, FaChartBar, FaBrain, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'all' | 'dev' | 'bi' | 'ml';
  context: string;
  photos?: string[];
  links?: {
    demo?: string;
    code?: string;
    video?: string;
  };
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'dev': return 'from-blue-600 to-cyan-600';
    case 'bi': return 'from-emerald-600 to-teal-600';
    case 'ml': return 'from-purple-600 to-pink-600';
    default: return 'from-gray-600 to-gray-600';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'dev': return 'Développement';
    case 'bi': return 'BI & Data';
    case 'ml': return 'Machine Learning';
    default: return '';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'dev': return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
    case 'bi': return 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30';
    case 'ml': return 'bg-purple-500/20 text-purple-600 border-purple-500/30';
    default: return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  }
};

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  if (!project) return null;

  const photos = project.photos || [];

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    if (direction === 'next') {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    } else {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`relative bg-gradient-to-r ${getCategoryGradient(project.category)} px-6 py-8 md:px-10 md:py-10`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                  {project.category === 'dev' && <FaCode className="w-3 h-3" />}
                  {project.category === 'bi' && <FaChartBar className="w-3 h-3" />}
                  {project.category === 'ml' && <FaBrain className="w-3 h-3" />}
                  {getCategoryLabel(project.category)}
                </span>
                <span className="text-white/80 text-sm">{project.context}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-[var(--bleu-marine)] mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-bold text-[var(--bleu-marine)] mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--violet)]/10 text-[var(--violet)] text-sm font-semibold py-2 px-4 rounded-full border border-[var(--violet)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photos */}
              {photos.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[var(--bleu-marine)] mb-4">Captures d'écran</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {photos.map((photo, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPhoto(idx)}
                        className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={photo}
                          alt={`${project.title} - capture ${idx + 1}`}
                          className="w-full h-32 md:h-36 object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder si pas de photos */}
              {photos.length === 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[var(--bleu-marine)] mb-4">Captures d'écran</h3>
                  <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center h-48">
                    <p className="text-gray-400 text-sm">Photos du projet à ajouter</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with links */}
            {project.links && (
              <div className="border-t border-gray-200 px-6 md:px-10 py-4 flex items-center gap-4 bg-gray-50">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bleu-marine)] text-white text-sm font-semibold hover:bg-[var(--violet)] transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Voir le code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--violet)] text-white text-sm font-semibold hover:bg-[var(--violet-clair)] transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Démo live
                  </a>
                )}
                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--violet)] text-white text-sm font-semibold hover:bg-[var(--violet-clair)] transition-colors"
                  >
                    <FaVideo className="w-4 h-4" />
                    Vidéo
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedPhoto !== null && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] bg-black/90"
                  onClick={() => setSelectedPhoto(null)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-4 md:inset-10 z-[60] flex items-center justify-center"
                >
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>

                  {photos.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
                        className="absolute left-2 md:left-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10"
                      >
                        <FaChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
                        className="absolute right-2 md:right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10"
                      >
                        <FaChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <img
                    src={photos[selectedPhoto]}
                    alt={`${project.title} - capture ${selectedPhoto + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {selectedPhoto + 1} / {photos.length}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
