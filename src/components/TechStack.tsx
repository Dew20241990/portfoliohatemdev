import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  Shield, 
  Cpu, 
  Network,
  Brain,
  Zap,
  Cloud,
  GitBranch
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const TechStack = () => {
  const { language, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: {
        ar: 'تطوير الواجهات الأمامية',
        fr: 'Développement Frontend',
        en: 'Frontend Development'
      },
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Framer Motion', level: 85, icon: '🎭' }
      ]
    },
    {
      title: {
        ar: 'تطوير الخادم',
        fr: 'Développement Backend',
        en: 'Backend Development'
      },
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'PHP', level: 85, icon: '🐘' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'REST APIs', level: 92, icon: '🔗' }
      ]
    },
    {
      title: {
        ar: 'قواعد البيانات',
        fr: 'Bases de Données',
        en: 'Databases'
      },
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MySQL', level: 90, icon: '🐬' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'Supabase', level: 88, icon: '⚡' }
      ]
    },
    {
      title: {
        ar: 'الذكاء الاصطناعي',
        fr: 'Intelligence Artificielle',
        en: 'Artificial Intelligence'
      },
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'TensorFlow', level: 85, icon: '🧠' },
        { name: 'PyTorch', level: 80, icon: '🔥' },
        { name: 'OpenAI API', level: 90, icon: '🤖' },
        { name: 'Computer Vision', level: 82, icon: '👁️' },
        { name: 'NLP', level: 88, icon: '💬' }
      ]
    },
    {
      title: {
        ar: 'الأمن السيبراني',
        fr: 'Cybersécurité',
        en: 'Cybersecurity'
      },
      icon: Shield,
      color: 'from-red-500 to-rose-500',
      technologies: [
        { name: 'Network Security', level: 92, icon: '🛡️' },
        { name: 'Penetration Testing', level: 85, icon: '🔍' },
        { name: 'Encryption', level: 88, icon: '🔐' },
        { name: 'Firewall Config', level: 90, icon: '🔥' },
        { name: 'Security Audit', level: 87, icon: '📋' }
      ]
    },
    {
      title: {
        ar: 'الإلكترونيات والأنظمة',
        fr: 'Électronique et Systèmes',
        en: 'Electronics & Systems'
      },
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'Embedded Systems', level: 95, icon: '⚙️' },
        { name: 'Arduino/ESP32', level: 90, icon: '🔌' },
        { name: 'PCB Design', level: 85, icon: '🔧' },
        { name: 'IoT Systems', level: 88, icon: '📡' },
        { name: 'Industrial Control', level: 92, icon: '🏭' }
      ]
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
    <section className={`py-20 bg-white dark:bg-dark-800 ${isRTL ? 'font-arabic' : 'font-english'}`}>
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
                <>المهارات <span className="text-primary-600 dark:text-primary-400">التقنية</span></>
              ) : language === 'fr' ? (
                <>Stack <span className="text-primary-600 dark:text-primary-400">Technique</span></>
              ) : (
                <>Tech <span className="text-primary-600 dark:text-primary-400">Stack</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {language === 'ar' 
                ? 'مجموعة شاملة من التقنيات والأدوات المتطورة التي أتقنها لتطوير حلول مبتكرة'
                : language === 'fr'
                ? 'Un ensemble complet de technologies et d\'outils avancés que je maîtrise pour développer des solutions innovantes'
                : 'A comprehensive set of advanced technologies and tools I master to develop innovative solutions'
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 dark:bg-dark-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {category.title[language]}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <div className="flex-1">
                        <div className={`flex justify-between items-center mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className={`font-semibold text-gray-700 dark:text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                            {tech.name}
                          </span>
                          <span className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {language === 'ar' ? 'متوسط الإتقان' : language === 'fr' ? 'Maîtrise moyenne' : 'Average Mastery'}
                    </span>
                    <span className={`font-bold text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {Math.round(category.technologies.reduce((acc, tech) => acc + tech.level, 0) / category.technologies.length)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className={`text-2xl font-bold text-gray-800 dark:text-white mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? 'أدوات وتقنيات إضافية' : language === 'fr' ? 'Outils et Technologies Supplémentaires' : 'Additional Tools & Technologies'}
            </h3>
            <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                'Git & GitHub', 'Docker', 'AWS', 'Linux', 'Nginx', 'Webpack', 'Jest', 'Figma',
                'Postman', 'VS Code', 'Jira', 'Slack', 'Photoshop', 'Illustrator'
              ].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-default ${isRTL ? 'font-arabic' : 'font-english'}`}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;