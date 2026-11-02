import { motion } from 'framer-motion';
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = Object.entries(
    t('experience') as unknown as Record<string, ExperienceItem>,
  )
    .filter(([key]) => key !== 'title')
    .map(([, exp]) => exp);

  return (
    <section className="dark-section py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-white">{t('experience.title')}</h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--violet-clair)] rounded-full"></div>

          {/* Expériences */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.date}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } w-full md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-[var(--violet)] border-4 border-[var(--bleu-marine)] z-10 flex items-center justify-center">
                <FaBriefcase className="text-white text-sm" />
              </div>

              {/* Contenu */}
              <div className="bg-[var(--bleu-marine-clair)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[var(--violet)] text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-3">
                  {exp.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <h4 className="text-[var(--violet-clair)] font-semibold mb-3">
                  {exp.company}, {exp.location}
                </h4>
                <p className="text-gray-300 text-left">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
