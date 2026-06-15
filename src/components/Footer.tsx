import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from '../hooks/useTranslation';
const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--bleu-marine)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Flèche vers le haut */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[var(--violet)] p-3 rounded-full mb-8 hover:bg-[var(--violet-clair)] transition-colors duration-300"
            >
              <FaArrowUp className="h-5 w-5" />
            </motion.div>
          </Link>

          {/* Logo */}
          <div className="text-3xl font-bold mb-6">
            <span className="text-[var(--violet)]">C</span>
            <span>B</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.skills')}
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.experience')}
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.education')}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/charifa-ben-fraj-919074233/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Charifabenfraj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="mailto:charifabenfraj20@gmail.com"
              className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
