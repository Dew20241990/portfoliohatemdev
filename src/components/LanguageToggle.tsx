import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'عر', name: 'العربية' }
  ];

  const currentIndex = languages.findIndex(lang => lang.code === language);
  const nextLanguage = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code as any);
  };

  const currentLang = languages[currentIndex];

  return (
    <motion.button
      onClick={nextLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      title={`Switch to ${languages[(currentIndex + 1) % languages.length].name}`}
    >
      <Languages size={18} />
      <span className="text-sm font-medium">
        {currentLang.label}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;