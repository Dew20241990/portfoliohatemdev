import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette, Award, Users, Coffee, Calendar, Zap, Shield, Cpu, Network, Settings, BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language, t, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { 
      name: language === 'ar' ? 'الإلكترونيات الصناعية' : language === 'fr' ? 'Électronique Industrielle' : 'Industrial Electronics', 
      icon: Cpu, 
      level: 95, 
      category: 'Electronics' 
    },
    { 
      name: language === 'ar' ? 'الأنظمة المدمجة' : language === 'fr' ? 'Systèmes Embarqués' : 'Embedded Systems', 
      icon: Zap, 
      level: 90, 
      category: 'Electronics' 
    },
    { 
      name: language === 'ar' ? 'الشبكات التقنية' : language === 'fr' ? 'Réseaux Techniques' : 'Technical Networks', 
      icon: Network, 
      level: 85, 
      category: 'Networks' 
    },
    { 
      name: language === 'ar' ? 'تطوير تطبيقات الويب' : language === 'fr' ? 'Développement Web' : 'Web Development', 
      icon: Code, 
      level: 92, 
      category: 'Development' 
    },
    { 
      name: language === 'ar' ? 'الأمن السيبراني' : language === 'fr' ? 'Cybersécurité' : 'Cybersecurity', 
      icon: Shield, 
      level: 88, 
      category: 'Security' 
    },
    { 
      name: language === 'ar' ? 'إدارة المشاريع' : language === 'fr' ? 'Gestion de Projets' : 'Project Management', 
      icon: Settings, 
      level: 90, 
      category: 'Management' 
    },
    { 
      name: language === 'ar' ? 'تحليل البيانات' : language === 'fr' ? 'Analyse de Données' : 'Data Analysis', 
      icon: BarChart3, 
      level: 85, 
      category: 'Analytics' 
    },
    { 
      name: language === 'ar' ? 'قواعد البيانات' : language === 'fr' ? 'Bases de Données' : 'Databases', 
      icon: Database, 
      level: 87, 
      category: 'Development' 
    }
  ];

  const stats = [
    { 
      icon: Calendar, 
      value: '9+', 
      label: t('about.experience')
    },
    { 
      icon: Code, 
      value: '50+', 
      label: t('about.projects')
    },
    { 
      icon: Users, 
      value: '15K+', 
      label: t('about.clients')
    },
    { 
      icon: Award, 
      value: '6+', 
      label: t('about.certifications')
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className={`py-20 bg-gray-50 dark:bg-dark-900 ${isRTL ? 'font-arabic' : 'font-english'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? (
                <>نبذة <span className="text-primary-600 dark:text-primary-400">عني</span></>
              ) : language === 'fr' ? (
                <>À Propos <span className="text-primary-600 dark:text-primary-400">de Moi</span></>
              ) : (
                <>About <span className="text-primary-600 dark:text-primary-400">Me</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isRTL ? 'rtl' : ''}`}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg text-center border border-gray-200 dark:border-dark-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                  <stat.icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className={`text-2xl font-bold text-gray-800 dark:text-white mb-1 ${isRTL ? 'font-arabic' : 'font-english'}`}>{stat.value}</div>
                <div className={`text-sm text-gray-600 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className={`grid lg:grid-cols-2 gap-12 items-start ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Bio Section */}
            <motion.div variants={itemVariants} className={isRTL ? 'lg:col-start-2' : ''}>
              <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {t('about.journey')}
                </h3>
                <div className={`space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  <p>
                    {language === 'ar' 
                      ? 'بدأت رحلتي المهنية كمهندس اتصالات متخصص في الإلكترونيات والأنظمة المدمجة. مع مرور السنوات، طورت خبرتي لتشمل الأمن السيبراني وتطوير التطبيقات الحديثة.'
                      : language === 'fr'
                      ? 'J\'ai commencé ma carrière professionnelle en tant qu\'ingénieur en télécommunications spécialisé en électronique et systèmes embarqués. Au fil des années, j\'ai développé mon expertise pour inclure la cybersécurité et le développement d\'applications modernes.'
                      : 'I started my professional journey as a telecommunications engineer specialized in electronics and embedded systems. Over the years, I developed my expertise to include cybersecurity and modern application development.'
                    }
                  </p>
                  <p>
                    {language === 'ar'
                      ? 'اليوم، أقود فرق تقنية في إدارة الأنظمة الصناعية وتطوير منصات إدارية متقدمة. خبرتي تشمل إدارة أنظمة معلومات شاملة لأكثر من 15,000 موظف ورقمنة العمليات الإدارية المعقدة.'
                      : language === 'fr'
                      ? 'Aujourd\'hui, je dirige des équipes techniques dans la gestion des systèmes industriels et le développement de plateformes administratives avancées. Mon expertise inclut la gestion de systèmes d\'information globaux pour plus de 15 000 employés et la digitalisation de processus administratifs complexes.'
                      : 'Today, I lead technical teams in managing industrial systems and developing advanced administrative platforms. My expertise includes managing comprehensive information systems for over 15,000 employees and digitizing complex administrative processes.'
                    }
                  </p>
                  <p>
                    {language === 'ar'
                      ? 'أتخصص في تطوير حلول تقنية مبتكرة تجمع بين الخبرة الهندسية والتطوير الحديث، مع التركيز على الأمان والكفاءة في جميع المشاريع.'
                      : language === 'fr'
                      ? 'Je me spécialise dans le développement de solutions techniques innovantes qui combinent l\'expertise en ingénierie et le développement moderne, en mettant l\'accent sur la sécurité et l\'efficacité dans tous les projets.'
                      : 'I specialize in developing innovative technical solutions that combine engineering expertise and modern development, focusing on security and efficiency in all projects.'
                    }
                  </p>
                </div>

                {/* Core Values */}
                <div className="mt-8">
                  <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {t('about.coreValues')}
                  </h4>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                    {(language === 'ar' 
                      ? ['الدقة التقنية', 'الأمان', 'الابتكار', 'القيادة', 'التطوير المستمر']
                      : language === 'fr'
                      ? ['Précision Technique', 'Sécurité', 'Innovation', 'Leadership', 'Développement Continu']
                      : ['Technical Precision', 'Security', 'Innovation', 'Leadership', 'Continuous Development']
                    ).map((value) => (
                      <span
                        key={value}
                        className={`px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white mb-8 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {t('about.skills')}
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <skill.icon size={20} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className={`font-semibold text-gray-700 dark:text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>{skill.name}</span>
                          <span className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full ${isRTL ? 'origin-right' : 'origin-left'}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {t('about.techStack')}
                  </h4>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                    {(language === 'ar' 
                      ? ['React', 'Node.js', 'MySQL', 'PHP', 'JavaScript', 'الإلكترونيات', 'الشبكات', 'الأمن السيبراني', 'الأنظمة المدمجة']
                      : language === 'fr'
                      ? ['React', 'Node.js', 'MySQL', 'PHP', 'JavaScript', 'Électronique', 'Réseaux', 'Cybersécurité', 'Systèmes Embarqués']
                      : ['React', 'Node.js', 'MySQL', 'PHP', 'JavaScript', 'Electronics', 'Networks', 'Cybersecurity', 'Embedded Systems']
                    ).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-english'}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;