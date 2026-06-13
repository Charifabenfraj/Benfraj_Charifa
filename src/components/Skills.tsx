import { motion } from 'framer-motion';
import React from 'react';
import {
  FaCode, FaDatabase, FaChartBar, FaCogs,
} from 'react-icons/fa';
import {
  SiReact, SiDjango, SiAngular, SiSymfony, SiPython,
  SiSpringboot, SiOpenjdk, SiMysql, SiMongodb, SiOracle,
  SiDocker, SiR, SiTalend,
  SiOdoo, SiPostgresql, SiNodedotjs,
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon?: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  isCarousel?: boolean;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frameworks & Langages',
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
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      ],
    },
    {
      title: 'BI & Data',
      icon: <FaChartBar className="h-6 w-6" />,
      skills: [
        { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
        { name: 'DAX' },
        { name: 'SSIS' },
        { name: 'Talend', icon: <SiTalend />, color: '#FF6C37' },
        { name: 'R', icon: <SiR />, color: '#276DC3' },
        { name: 'Data Modeling' },
      ],
    },
    {
      title: 'Bases de données',
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
      title: 'Automatisation & Outils',
      icon: <FaCogs className="h-6 w-6" />,
      skills: [
        { name: 'n8n' },
        { name: 'Odoo', icon: <SiOdoo />, color: '#875A7B' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
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
          <h2 className="section-title">Mes compétences</h2>
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
