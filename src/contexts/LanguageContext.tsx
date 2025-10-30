import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.projects': 'المشاريع',
    'nav.resume': 'السيرة الذاتية',
    'nav.contact': 'تواصل معي',
    
    // Hero Section
    'hero.downloadCV': '📄 تحميل السيرة الذاتية',
    'hero.contactMe': '📞 تواصل معي',
    'hero.scrollDown': 'تمرير لأسفل',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.subtitle': 'تعرف على خبراتي ومهاراتي التقنية',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'مشروع مكتمل',
    'about.clients': 'عميل راضي',
    'about.skills': 'المهارات والخبرات',
    
    // Projects Section
    'projects.title': 'مشاريعي',
    'projects.subtitle': 'مجموعة من أعمالي الحديثة التي تُظهر خبرتي في التقنيات المختلفة',
    'projects.all': 'الكل',
    'projects.web': 'ويب',
    'projects.mobile': 'موبايل',
    'projects.backend': 'خادم',
    'projects.viewCode': 'عرض الكود',
    'projects.viewDemo': 'عرض المشروع',
    
    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.success': 'تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.',
    'contact.form.error': 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.social': 'وسائل التواصل',
    
    // Footer
    'footer.copyright': '© 2025 حاتم خلاف — جميع الحقوق محفوظة',
    'footer.builtWith': 'تم البناء باستخدام React و Tailwind CSS',
    
    // Resume Section
    'resume.title': 'السيرة الذاتية',
    'resume.download': 'تحميل السيرة الذاتية',
    'resume.preview': 'معاينة السيرة الذاتية'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.resume': 'CV',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.downloadCV': '📄 Télécharger CV',
    'hero.contactMe': '📞 Me contacter',
    'hero.scrollDown': 'Défiler vers le bas',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.subtitle': 'Découvrez mon expérience et mes compétences techniques',
    'about.experience': 'Années d\'expérience',
    'about.projects': 'Projets terminés',
    'about.clients': 'Employés gérés',
    'about.certifications': 'Certifications professionnelles',
    'about.skills': 'Compétences et expertise',
    'about.journey': 'Mon parcours',
    'about.coreValues': 'Valeurs fondamentales',
    'about.techStack': 'Stack technique',
    
    // Projects Section
    'projects.title': 'Mes projets',
    'projects.subtitle': 'Une vitrine de mes travaux récents démontrant mon expertise dans diverses technologies',
    'projects.all': 'Tous',
    'projects.web': 'Web',
    'projects.mobile': 'Mobile',
    'projects.backend': 'Backend',
    'projects.viewCode': 'Voir le code',
    'projects.viewDemo': 'Voir la démo',
    'projects.technologies': 'Technologies utilisées',
    
    // Contact Section
    'contact.title': 'Me contacter',
    'contact.subtitle': 'Vous avez un projet en tête ? Parlons-en et donnons-lui vie',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès ! Je vous répondrai bientôt.',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.whatsapp': 'WhatsApp',
    'contact.social': 'Réseaux sociaux',
    'contact.letsConnect': 'Connectons-nous',
    'contact.sendMessage': 'Envoyer un message',
    'contact.followMe': 'Suivez-moi',
    'contact.currentlyAvailable': 'Actuellement disponible',
    'contact.availableForProjects': 'Disponible pour de nouveaux projets',
    
    // Resume Section
    'resume.title': 'CV',
    'resume.download': 'Télécharger le CV (PDF)',
    'resume.contact': 'Informations de contact',
    'resume.summary': 'Résumé professionnel',
    'resume.education': 'Formation et certifications',
    'resume.experience': 'Expérience professionnelle',
    'resume.projects': 'Projets clés',
    'resume.skills': 'Compétences et technologies',
    'resume.languages': 'Langues',
    'resume.technical': 'Compétences techniques',
    'resume.management': 'Compétences de gestion',
    
    // Footer
    'footer.copyright': '© 2025 Hatem Khellaf — Tous droits réservés',
    'footer.builtWith': 'Construit avec React & Tailwind CSS',
    'footer.quickLinks': 'Liens Rapides',
    'footer.followMe': 'Suivez-moi'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.downloadCV': '📄 Download CV',
    'hero.contactMe': '📞 Contact Me',
    'hero.scrollDown': 'Scroll Down',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know my experience and technical skills',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Employees Managed',
    'about.certifications': 'Professional Certifications',
    'about.skills': 'Skills & Expertise',
    'about.journey': 'My Journey',
    'about.coreValues': 'Core Values',
    'about.techStack': 'Tech Stack',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A showcase of my recent work demonstrating expertise in various technologies',
    'projects.all': 'All',
    'projects.web': 'Web',
    'projects.mobile': 'Mobile',
    'projects.backend': 'Backend',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.technologies': 'Technologies Used',
    
    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Have a project in mind? Let\'s talk and bring it to life',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.social': 'Social Media',
    'contact.letsConnect': 'Let\'s Connect',
    'contact.sendMessage': 'Send Message',
    'contact.followMe': 'Follow Me',
    'contact.currentlyAvailable': 'Currently Available',
    'contact.availableForProjects': 'Available for new projects',
    
    // Resume Section
    'resume.title': 'Resume',
    'resume.download': 'Download Resume (PDF)',
    'resume.contact': 'Contact Information',
    'resume.summary': 'Professional Summary',
    'resume.education': 'Education & Certifications',
    'resume.experience': 'Professional Experience',
    'resume.projects': 'Key Projects',
    'resume.skills': 'Skills & Technologies',
    'resume.languages': 'Languages',
    'resume.technical': 'Technical Skills',
    'resume.management': 'Management Skills',
    
    // Footer
    'footer.copyright': '© 2025 Hatem Khellaf — All rights reserved',
    'footer.builtWith': 'Built with React & Tailwind CSS',
    'footer.quickLinks': 'Quick Links',
    'footer.followMe': 'Follow Me'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'fr';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};