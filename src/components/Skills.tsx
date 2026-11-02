import { motion } from 'framer-motion';
import React from 'react';
import {
  FaCode, FaDatabase, FaChartBar, FaCogs,
  FaBrain, FaRobot, FaChartLine, FaChartArea, FaEye,
  FaImage, FaGitAlt, FaGithub, FaBuilding, FaMicrochip,
} from 'react-icons/fa';
import {
  SiReact, SiDjango, SiAngular, SiSymfony, SiPython,
  SiSpringboot, SiOpenjdk, SiMysql, SiMongodb, SiOracle,
  SiDocker, SiR, SiTalend,
  SiOdoo, SiPostgresql, SiNodedotjs,
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
} from 'react-icons/si';
import { useTranslation } from '../hooks/useTranslation';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frameworks'),
      icon: <FaCode className="h-6 w-6" />,
      isCarousel: true,
      skills: [
        { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' },
        { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
        { name: 'Symfony', icon: <SiSymfony />, color: '#000000' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'Java', icon: <SiOpenjdk />, color: '#ED8B00' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Next.js', icon: <FaCode />, color: '#000000' },
        { name: 'Flask', icon: <FaCode />, color: '#000000' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      ],
    },
    {
      title: t('skills.bi'),
      icon: <FaChartBar className="h-6 w-6" />,
      skills: [
        { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
        { name: 'DAX' },
        { name: 'SSIS' },
        { name: 'SSAS', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'Talend', icon: <SiTalend />, color: '#FF6C37' },
        { name: 'R', icon: <SiR />, color: '#276DC3' },
        { name: 'Data Modeling' },
      ],
    },
    {
      title: t('skills.databases'),
      icon: <FaDatabase className="h-6 w-6" />,
      skills: [
        { name: 'SQL' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      ],
    },
    {
      title: t('skills.aiDataScience'),
      icon: <FaBrain className="h-6 w-6" />,
      skills: [
        { name: 'Machine Learning', icon: <FaMicrochip />, color: '#3776AB' },
        { name: 'Deep Learning (CNN)', icon: <FaMicrochip />, color: '#3776AB' },
        { name: 'LLMs', icon: <FaRobot />, color: '#61DAFB' },
        { name: 'RAG', icon: <FaCode />, color: '#F7DF1E' },
        { name: 'Vision par ordinateur', icon: <FaEye />, color: '#F2C811' },
        { name: 'OpenCV', icon: <FaImage />, color: '#FF6C37' },
      ],
    },
    {
      title: t('skills.crmErp'),
      icon: <FaBuilding className="h-6 w-6" />,
      skills: [
        { name: 'Microsoft Dynamics 365', icon: <FaBuilding />, color: '#0078D4' },
        { name: 'Odoo', icon: <SiOdoo />, color: '#875A7B' },
        { name: 'Power Apps', icon: <FaCode />, color: '#F2C811' },
        { name: 'n8n' },
      ],
    },
    {
      title: t('skills.mlopsDevops'),
      icon: <FaCogs className="h-6 w-6" />,
      skills: [
        { name: 'MLflow', icon: <FaCode />, color: '#F7DF1E' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Prometheus', icon: <FaChartLine />, color: '#E34F26' },
        { name: 'Grafana', icon: <FaChartArea />, color: '#F7DF1E' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-14"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              {category.isCarousel ? (
                <div className="relative overflow-hidden">
                  <div className="skills-marquee">
                    <div className="skills-marquee-content">
                      {[...category.skills, ...category.skills].map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 flex items-center gap-3 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {skill.icon && (
                            <span className="text-3xl" style={{ color: skill.color }}>
                              {skill.icon}
                            </span>
                          )}
                          <span className="font-semibold text-gray-800 whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {skill.icon && (
                        <span className="text-xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                      )}
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
