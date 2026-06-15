import { motion } from 'framer-motion';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="light-section py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('education.title')}</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Ligne horizontale pour la timeline */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-[var(--violet-clair)] rounded-full"></div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            {[
              { key: 'edu1', degree: t('education.edu1.degree'), institution: t('education.edu1.institution'), location: t('education.edu1.location'), period: t('education.edu1.period'), description: t('education.edu1.description') },
              { key: 'edu2', degree: t('education.edu2.degree'), institution: t('education.edu2.institution'), location: t('education.edu2.location'), period: t('education.edu2.period'), description: t('education.edu2.description') },
              { key: 'edu3', degree: t('education.edu3.degree'), institution: t('education.edu3.institution'), location: t('education.edu3.location'), period: t('education.edu3.period'), description: t('education.edu3.description') },
            ].map((edu, index) => (
              <motion.div
                key={edu.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:w-[30%]"
              >
                {/* Point sur la timeline (visible uniquement en desktop) */}
                <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--violet)] border-4 border-[var(--gris-clair)] z-10 items-center justify-center">
                  <FaGraduationCap className="text-white text-sm" />
                </div>

                {/* Icône pour mobile */}
                <div className="md:hidden flex items-center mb-2">
                  <div className="bg-[var(--violet)] p-2 rounded-full text-white mr-2">
                    <FaGraduationCap className="h-4 w-4" />
                  </div>
                  <span className="text-[var(--violet)] font-semibold">{edu.period}</span>
                </div>

                {/* Contenu */}
                <div className="bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700">
                  {/* Période (visible uniquement en desktop) */}
                  <div className="hidden md:block text-[var(--violet)] font-semibold mb-4 text-left">
                    {edu.period}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{edu.degree}</h3>
                  <h4 className="text-[var(--violet-clair)] font-semibold mb-3">
                    {edu.institution}, {edu.location}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-left">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
