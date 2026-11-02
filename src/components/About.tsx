import { motion } from 'framer-motion';
import React from 'react';
import { FaLanguage, FaUser } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation();

  const languagePercent: Record<string, number> = { fr: 80, ar: 100, en: 70 };
  const languages = ['fr', 'ar', 'en'].map((code) => {
    const info = (t('about.languagesList') as unknown as Record<string, { name: string; level: string }>)[code];
    return { name: info.name, level: info.level, percent: languagePercent[code] };
  });

  return (
    <section className="light-section py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Informations personnelles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                <FaUser className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.whoAmI')}</h3>
                <p className="text-gray-800 text-left max-w-2xl">
                  {t('about.whoAmIDescription')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-1 dark:text-gray-200">{t('about.name')}</h4>
                <p className="dark:text-gray-300">{t('about.nameValue')}</p>
              </div>
              <div className="bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-1">{t('about.email')}</h4>
                <p>charifabenfraj20@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-1">{t('about.location')}</h4>
                <p>{t('about.locationValue')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-1">{t('about.phone')}</h4>
                <p>+216 27 998 555</p>
              </div>
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                <FaLanguage className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.languages')}</h3>
                <p className="text-gray-700 text-left">
                  {t('about.languagesDescription')}
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{language.name}</span>
                    <span>{language.level}</span>
                    <span className="text-xs text-gray-500">{language.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percent}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-[var(--violet)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
