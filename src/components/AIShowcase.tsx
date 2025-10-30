import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Sparkles,
  Code,
  Database,
  Network,
  Bot,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const AIShowcase = () => {
  const { language, t, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const aiCapabilities = [
    {
      icon: Brain,
      title: {
        ar: 'التعلم الآلي المتقدم',
        fr: 'Apprentissage Automatique Avancé',
        en: 'Advanced Machine Learning'
      },
      description: {
        ar: 'خوارزميات ذكية للتنبؤ وتحليل البيانات المعقدة',
        fr: 'Algorithmes intelligents pour la prédiction et l\'analyse de données complexes',
        en: 'Intelligent algorithms for prediction and complex data analysis'
      },
      tech: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: {
        ar: 'الرؤية الحاسوبية',
        fr: 'Vision par Ordinateur',
        en: 'Computer Vision'
      },
      description: {
        ar: 'تحليل وفهم الصور والفيديو باستخدام الذكاء الاصطناعي',
        fr: 'Analyse et compréhension d\'images et vidéos avec l\'IA',
        en: 'Image and video analysis using artificial intelligence'
      },
      tech: ['OpenCV', 'YOLO', 'CNN'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: {
        ar: 'معالجة اللغة الطبيعية',
        fr: 'Traitement du Langage Naturel',
        en: 'Natural Language Processing'
      },
      description: {
        ar: 'فهم وتوليد النصوص بذكاء اصطناعي متطور',
        fr: 'Compréhension et génération de texte avec IA avancée',
        en: 'Text understanding and generation with advanced AI'
      },
      tech: ['GPT', 'BERT', 'Transformers'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: {
        ar: 'تحليل البيانات الذكي',
        fr: 'Analyse Intelligente des Données',
        en: 'Intelligent Data Analytics'
      },
      description: {
        ar: 'استخراج رؤى قيمة من البيانات الضخمة',
        fr: 'Extraction d\'insights précieux des big data',
        en: 'Extracting valuable insights from big data'
      },
      tech: ['Pandas', 'NumPy', 'Plotly'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const aiProjects = [
    {
      title: {
        ar: 'نظام إدارة ذكي للمؤسسات',
        fr: 'Système de Gestion Intelligent d\'Entreprise',
        en: 'Intelligent Enterprise Management System'
      },
      description: {
        ar: 'نظام ERP مدعوم بالذكاء الاصطناعي للتنبؤ والتحليل التلقائي',
        fr: 'Système ERP alimenté par l\'IA pour la prédiction et l\'analyse automatique',
        en: 'AI-powered ERP system for prediction and automatic analysis'
      },
      features: [
        { ar: 'تنبؤ المبيعات', fr: 'Prédiction des ventes', en: 'Sales forecasting' },
        { ar: 'تحليل الأداء', fr: 'Analyse de performance', en: 'Performance analysis' },
        { ar: 'أتمتة العمليات', fr: 'Automatisation des processus', en: 'Process automation' }
      ],
      accuracy: 94
    },
    {
      title: {
        ar: 'منصة الأمن السيبراني الذكية',
        fr: 'Plateforme de Cybersécurité Intelligente',
        en: 'Intelligent Cybersecurity Platform'
      },
      description: {
        ar: 'حماية متقدمة باستخدام الذكاء الاصطناعي لكشف التهديدات',
        fr: 'Protection avancée utilisant l\'IA pour la détection des menaces',
        en: 'Advanced protection using AI for threat detection'
      },
      features: [
        { ar: 'كشف التهديدات', fr: 'Détection des menaces', en: 'Threat detection' },
        { ar: 'تحليل السلوك', fr: 'Analyse comportementale', en: 'Behavioral analysis' },
        { ar: 'استجابة تلقائية', fr: 'Réponse automatique', en: 'Automatic response' }
      ],
      accuracy: 98
    },
    {
      title: {
        ar: 'مساعد ذكي للمطورين',
        fr: 'Assistant Intelligent pour Développeurs',
        en: 'Intelligent Developer Assistant'
      },
      description: {
        ar: 'أداة ذكية لمساعدة المطورين في كتابة وتحسين الكود',
        fr: 'Outil intelligent pour aider les développeurs à écrire et optimiser le code',
        en: 'Intelligent tool to help developers write and optimize code'
      },
      features: [
        { ar: 'توليد الكود', fr: 'Génération de code', en: 'Code generation' },
        { ar: 'مراجعة تلقائية', fr: 'Révision automatique', en: 'Automatic review' },
        { ar: 'تحسين الأداء', fr: 'Optimisation des performances', en: 'Performance optimization' }
      ],
      accuracy: 92
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % aiProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, aiProjects.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-purple-900 dark:from-dark-900 dark:via-primary-900 dark:to-purple-900 relative overflow-hidden ${isRTL ? 'font-arabic' : 'font-english'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Floating AI Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                <Sparkles size={32} className="text-white" />
              </div>
              <h2 className={`text-4xl md:text-6xl font-bold text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? (
                  <>الذكاء <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">الاصطناعي</span></>
                ) : language === 'fr' ? (
                  <>Intelligence <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Artificielle</span></>
                ) : (
                  <>Artificial <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Intelligence</span></>
                )}
              </h2>
            </div>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {language === 'ar' 
                ? 'تقنيات ذكاء اصطناعي متطورة لحلول مبتكرة تغير مستقبل التكنولوجيا'
                : language === 'fr'
                ? 'Technologies d\'IA avancées pour des solutions innovantes qui transforment l\'avenir de la technologie'
                : 'Advanced AI technologies for innovative solutions that transform the future of technology'
              }
            </p>
          </motion.div>

          {/* AI Capabilities Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`p-3 bg-gradient-to-r ${capability.color} rounded-lg mb-4 w-fit`}>
                  <capability.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {capability.title[language]}
                </h3>
                <p className={`text-gray-300 text-sm mb-4 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {capability.description[language]}
                </p>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  {capability.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/20 text-white text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI Projects Showcase */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className={`flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h3 className={`text-2xl font-bold text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? 'مشاريع الذكاء الاصطناعي' : language === 'fr' ? 'Projets d\'IA' : 'AI Projects'}
              </h3>
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
                >
                  {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
                </button>
                <div className="flex gap-2">
                  {aiProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeDemo === index ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={isRTL ? 'lg:col-start-2' : ''}>
                  <h4 className={`text-2xl font-bold text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {aiProjects[activeDemo].title[language]}
                  </h4>
                  <p className={`text-gray-300 mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {aiProjects[activeDemo].description[language]}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {aiProjects[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                          {feature[language]}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {language === 'ar' ? 'دقة النظام' : language === 'fr' ? 'Précision du système' : 'System Accuracy'}
                      </span>
                      <span className="text-cyan-400 font-bold">{aiProjects[activeDemo].accuracy}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${aiProjects[activeDemo].accuracy}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                            }}
                            className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg opacity-50"
                          />
                        ))}
                      </div>
                      <div className="text-center">
                        <Bot size={48} className="text-white mx-auto mb-4" />
                        <div className="text-white font-medium">
                          {language === 'ar' ? 'نظام ذكي نشط' : language === 'fr' ? 'Système IA Actif' : 'AI System Active'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating indicators */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center"
                    >
                      <Cpu size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronRight size={20} />
              {language === 'ar' ? 'ابدأ مشروعك الذكي' : language === 'fr' ? 'Démarrez votre projet IA' : 'Start Your AI Project'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIShowcase;