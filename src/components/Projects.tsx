import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Filter, X, Calendar, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

const Projects = () => {
  const { language, t, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = language === 'ar' 
    ? ['الكل', 'ويب', 'موبايل', 'خادم']
    : language === 'fr'
    ? ['Tous', 'Web', 'Mobile', 'Backend']
    : ['All', 'Web', 'Mobile', 'Backend'];

  const categoryMap = {
    'الكل': 'All',
    'ويب': 'web',
    'موبايل': 'mobile', 
    'خادم': 'backend',
    'Tous': 'All',
    'All': 'All',
    'Web': 'web',
    'Mobile': 'mobile',
    'Backend': 'backend'
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === categoryMap[selectedCategory]);

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
    <section id="projects" className={`py-20 bg-white dark:bg-dark-800 ${isRTL ? 'font-arabic' : 'font-english'}`}>
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
                <>مشاريعي <span className="text-primary-600 dark:text-primary-400">المميزة</span></>
              ) : language === 'fr' ? (
                <>Mes <span className="text-primary-600 dark:text-primary-400">Projets</span></>
              ) : (
                <>Featured <span className="text-primary-600 dark:text-primary-400">Projects</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className={`flex flex-wrap justify-center gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'} ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                }`}
              >
                <Filter size={16} className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full font-medium">
                        {language === 'ar' 
                          ? (project.category === 'web' ? 'ويب' : project.category === 'mobile' ? 'موبايل' : 'خادم')
                          : language === 'fr'
                          ? (project.category === 'web' ? 'Web' : project.category === 'mobile' ? 'Mobile' : 'Backend')
                          : project.category.charAt(0).toUpperCase() + project.category.slice(1)
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-800 dark:text-white mb-3 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {project.title[language]}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 ${isRTL ? 'text-right' : ''}`}>
                      {project.description[language]}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
                      >
                        {project.type === 'github' ? <Github size={18} /> : <ExternalLink size={18} />}
                        <span className="text-sm font-medium">
                          {project.type === 'github' 
                            ? (language === 'ar' ? 'الكود' : 'Code')
                            : (language === 'ar' ? 'المشروع' : language === 'fr' ? 'Démo' : 'Demo')
                          }
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[language]}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200`}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className={`flex items-start justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <h3 className={`text-3xl font-bold text-gray-800 dark:text-white mb-2 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {selectedProject.title[language]}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {language === 'ar' 
                      ? (selectedProject.category === 'web' ? 'ويب' : selectedProject.category === 'mobile' ? 'موبايل' : 'خادم')
                      : language === 'fr'
                      ? (selectedProject.category === 'web' ? 'Web' : selectedProject.category === 'mobile' ? 'Mobile' : 'Backend')
                      : selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)
                    }
                  </span>
                </div>

                <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {selectedProject.description[language]}
                </p>

                <div className="mb-8">
                  <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-3 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {t('projects.technologies')}
                  </h4>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
                  >
                    {selectedProject.type === 'github' ? <Github size={20} /> : <ExternalLink size={20} />}
                    {selectedProject.type === 'github' 
                      ? (language === 'ar' ? 'عرض الكود' : 'View Code')
                      : (language === 'ar' ? 'عرض المشروع' : language === 'fr' ? 'Démo en Direct' : 'Live Demo')
                    }
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;