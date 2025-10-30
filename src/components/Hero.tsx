import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Github, Linkedin, ChevronDown, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/projects';

const Hero = () => {
  const { language, t, isRTL } = useLanguage();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = language === 'ar' 
    ? ['مطور ويب متكامل', 'متخصص React', 'مصمم واجهات', 'حلال المشاكل التقنية']
    : language === 'fr'
    ? ['Ingénieur Télécommunications', 'Spécialiste Électronique', 'Expert Cybersécurité', 'Développeur Full Stack']
    : ['Telecommunications Engineer', 'Electronics Specialist', 'Cybersecurity Expert', 'Full Stack Developer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Hatem_Khalaf_CV.pdf';
    link.click();
  };

  const openWhatsApp = () => {
    window.open(personalInfo.whatsapp, '_blank');
  };

  return (
    <section id="home" className={`min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 dark:from-dark-900 dark:via-primary-900 dark:to-dark-800 flex items-center justify-center relative overflow-hidden ${isRTL ? 'font-arabic' : 'font-english'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Avatar with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full animate-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/me.jpg"
                  alt={personalInfo.name[language]}
                  className="w-full h-full object-cover animate-float"
                  onError={(e) => {
                    // Fallback to initials if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full hidden items-center justify-center text-4xl font-bold text-white">
                  {isRTL ? 'ح خ' : 'HK'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-primary-200 mb-4"
          >
            {language === 'ar' ? 'مرحباً، أنا' : language === 'fr' ? 'Bonjour, je suis' : 'Hello, I\'m'}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-5xl md:text-7xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}
          >
            {personalInfo.name[language].split(' ')[0]} {personalInfo.name[language].split(' ')[1]}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}{language === 'ar' ? 'ديف' : 'Dev'}
            </span>
          </motion.h1>

          {/* Professional Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-xl md:text-2xl text-primary-300 mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}
          >
            {personalInfo.title[language]}
          </motion.p>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl text-primary-200 mb-6 h-8 flex items-center justify-center ${isRTL ? 'font-arabic' : 'font-english'}`}
          >
            <span className={`${isRTL ? 'border-l-2 pl-1' : 'border-r-2 pr-1'} border-primary-400 animate-pulse`}>
              {currentText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed ${isRTL ? 'font-arabic text-right' : 'font-english text-center'}`}
          >
            {personalInfo.bio[language]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className={`bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
            >
              <Download size={20} />
              {t('hero.downloadCV')}
            </motion.button>
            
            <motion.button
              onClick={openWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
            >
              <MessageCircle size={20} />
              {t('hero.contactMe')}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
                title={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-400 cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t('hero.scrollDown')}
            </span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;