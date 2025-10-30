import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/projects';

const Footer = () => {
  const { language, t, isRTL } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: personalInfo.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className={`bg-gray-900 dark:bg-dark-900 text-white py-16 ${isRTL ? 'font-arabic' : 'font-english'}`}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {isRTL ? 'ح خ' : 'HK'}
              </div>
              <span className={`text-2xl font-bold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? 'حاتم' : 'Hatem'}<span className="text-primary-400">{isRTL ? 'ديف' : 'Dev'}</span>
              </span>
            </div>
            <p className={`text-gray-300 leading-relaxed mb-6 max-w-md ${isRTL ? 'text-right' : ''}`}>
              {personalInfo.bio[language]}
            </p>
            <div className={`flex items-center gap-2 text-gray-400 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <Heart size={16} className="text-red-500 fill-current" />
              <span className={isRTL ? 'font-arabic' : 'font-english'}>
                {t('footer.builtWith')}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-gray-400 hover:text-primary-400 transition-colors duration-300 ${isRTL ? 'font-arabic' : 'font-english'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
              {t('footer.followMe')}
            </h3>
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-gray-400 text-center mb-4 md:mb-0 ${isRTL ? 'font-arabic md:text-right' : 'font-english md:text-left'}`}
          >
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-300 shadow-lg"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;