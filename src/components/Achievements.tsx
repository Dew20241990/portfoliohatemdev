import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield,
  Code,
  Briefcase,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Achievements = () => {
  const { language, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: {
        ar: 'قائد تقني متميز',
        fr: 'Leader Technique Exceptionnel',
        en: 'Outstanding Technical Leader'
      },
      description: {
        ar: 'قيادة فرق تقنية متعددة وإدارة مشاريع معقدة بنجاح',
        fr: 'Direction d\'équipes techniques multiples et gestion réussie de projets complexes',
        en: 'Leading multiple technical teams and successfully managing complex projects'
      },
      metric: '15K+',
      metricLabel: {
        ar: 'موظف مُدار',
        fr: 'Employés gérés',
        en: 'Employees managed'
      },
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: {
        ar: 'خبير الأمن السيبراني',
        fr: 'Expert en Cybersécurité',
        en: 'Cybersecurity Expert'
      },
      description: {
        ar: 'تطوير وتنفيذ حلول أمنية متقدمة لحماية الأنظمة الحيوية',
        fr: 'Développement et mise en œuvre de solutions de sécurité avancées pour protéger les systèmes critiques',
        en: 'Developing and implementing advanced security solutions to protect critical systems'
      },
      metric: '99.9%',
      metricLabel: {
        ar: 'معدل الحماية',
        fr: 'Taux de protection',
        en: 'Protection rate'
      },
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Code,
      title: {
        ar: 'مطور تطبيقات متقدم',
        fr: 'Développeur d\'Applications Avancé',
        en: 'Advanced Application Developer'
      },
      description: {
        ar: 'تطوير أنظمة إدارية شاملة وتطبيقات ويب حديثة',
        fr: 'Développement de systèmes de gestion complets et d\'applications web modernes',
        en: 'Developing comprehensive management systems and modern web applications'
      },
      metric: '50+',
      metricLabel: {
        ar: 'مشروع مكتمل',
        fr: 'Projets terminés',
        en: 'Projects completed'
      },
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Zap,
      title: {
        ar: 'مبتكر في الأتمتة',
        fr: 'Innovateur en Automatisation',
        en: 'Automation Innovator'
      },
      description: {
        ar: 'رقمنة العمليات الإدارية وتطوير حلول أتمتة ذكية',
        fr: 'Digitalisation des processus administratifs et développement de solutions d\'automatisation intelligentes',
        en: 'Digitizing administrative processes and developing intelligent automation solutions'
      },
      metric: '80%',
      metricLabel: {
        ar: 'تحسين الكفاءة',
        fr: 'Amélioration efficacité',
        en: 'Efficiency improvement'
      },
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const certifications = [
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2023',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Introduction au Marketing Digital',
      issuer: 'Google',
      year: '2021',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Diplôme Professionnel en Informatique',
      issuer: 'Collège St Michel, Montréal',
      year: '2019-2020',
      icon: Award,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Master Télécommunications',
      issuer: 'Université Abbes Laghrour',
      year: '2015-2017',
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: {
        ar: 'رئيس الخدمة التقنية',
        fr: 'Chef Service Technique',
        en: 'Technical Service Manager'
      },
      company: 'CET Khenchela',
      description: {
        ar: 'قيادة الفريق التقني وتطوير المنصات الداخلية',
        fr: 'Direction de l\'équipe technique et développement de plateformes internes',
        en: 'Leading technical team and developing internal platforms'
      }
    },
    {
      year: '2024',
      title: {
        ar: 'مسؤول التطبيقات',
        fr: 'Responsable d\'Applications',
        en: 'Applications Manager'
      },
      company: 'Ministère de l\'Intérieur',
      description: {
        ar: 'إدارة نظام المعلومات الشامل للولاية',
        fr: 'Gestion du système d\'information global de la wilaya',
        en: 'Managing comprehensive information system for the province'
      }
    },
    {
      year: '2017-2023',
      title: {
        ar: 'مسؤول الإعلام الآلي والإحصاء',
        fr: 'DAIP',
        en: 'IT & Statistics Manager'
      },
      company: 'Direction de l\'Emploi',
      description: {
        ar: 'رقمنة العمليات الإدارية لـ 15,000 موظف',
        fr: 'Digitalisation des processus administratifs pour 15 000 employés',
        en: 'Digitizing administrative processes for 15,000 employees'
      }
    }
  ];

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
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 ${isRTL ? 'font-arabic' : 'font-english'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? (
                <>الإنجازات <span className="text-primary-600 dark:text-primary-400">والشهادات</span></>
              ) : language === 'fr' ? (
                <>Réalisations <span className="text-primary-600 dark:text-primary-400">& Certifications</span></>
              ) : (
                <>Achievements <span className="text-primary-600 dark:text-primary-400">& Certifications</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {language === 'ar' 
                ? 'مسيرة مهنية حافلة بالإنجازات والشهادات المعتمدة في مجال التكنولوجيا والهندسة'
                : language === 'fr'
                ? 'Un parcours professionnel riche en réalisations et certifications reconnues dans le domaine de la technologie et de l\'ingénierie'
                : 'A professional journey rich in achievements and recognized certifications in technology and engineering'
              }
            </p>
          </motion.div>

          {/* Main Achievements */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg mb-4 w-fit`}>
                  <achievement.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold text-gray-800 dark:text-white mb-3 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {achievement.title[language]}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {achievement.description[language]}
                </p>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.metric}
                  </span>
                  <span className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {achievement.metricLabel[language]}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className={`text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? 'الشهادات المهنية' : language === 'fr' ? 'Certifications Professionnelles' : 'Professional Certifications'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 text-center"
                >
                  <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-full mb-4 w-fit mx-auto`}>
                    <cert.icon size={24} className="text-white" />
                  </div>
                  <h4 className={`font-bold text-gray-800 dark:text-white mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {cert.name}
                  </h4>
                  <p className={`text-gray-600 dark:text-gray-300 text-sm mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {cert.issuer}
                  </p>
                  <span className={`text-primary-600 dark:text-primary-400 font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Timeline */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
            <h3 className={`text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? 'المسيرة المهنية' : language === 'fr' ? 'Parcours Professionnel' : 'Career Timeline'}
            </h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary-500 to-cyan-500 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <span className={`text-primary-600 dark:text-primary-400 font-bold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {milestone.year}
                      </span>
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <h4 className={`text-xl font-bold text-gray-800 dark:text-white mb-1 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {milestone.title[language]}
                    </h4>
                    <p className={`text-primary-600 dark:text-primary-400 font-medium mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {milestone.company}
                    </p>
                    <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {milestone.description[language]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;