import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/projects';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { language, t, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    
    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: language === 'ar' ? 'أرسل لي بريد إلكتروني في أي وقت' : language === 'fr' ? 'Envoyez-moi un email à tout moment' : 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: `+${personalInfo.phone}`,
      link: `tel:+${personalInfo.phone}`,
      description: language === 'ar' ? 'الأحد-الخميس من 9 صباحاً إلى 6 مساءً' : language === 'fr' ? 'Dim-Jeu de 9h à 18h' : 'Sun-Thu from 9am to 6pm'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: language === 'ar' ? 'تواصل سريع' : language === 'fr' ? 'Chat Rapide' : 'Quick Chat',
      link: personalInfo.whatsapp,
      description: language === 'ar' ? 'للتواصل السريع والمباشر' : language === 'fr' ? 'Pour une communication rapide et directe' : 'For quick and direct communication'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: personalInfo.github, color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { icon: Linkedin, label: 'LinkedIn', link: personalInfo.linkedin, color: 'hover:text-blue-600' },
    { icon: MessageCircle, label: 'WhatsApp', link: personalInfo.whatsapp, color: 'hover:text-green-600' }
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
    <section id="contact" className={`py-20 bg-white dark:bg-dark-800 ${isRTL ? 'font-arabic' : 'font-english'}`}>
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
                <>تواصل <span className="text-primary-600 dark:text-primary-400">معي</span></>
              ) : language === 'fr' ? (
                <>Me <span className="text-primary-600 dark:text-primary-400">Contacter</span></>
              ) : (
                <>Get In <span className="text-primary-600 dark:text-primary-400">Touch</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Contact Form */}
            <motion.div variants={itemVariants} className={isRTL ? 'lg:col-start-2' : ''}>
              <div className="bg-gray-50 dark:bg-dark-900 p-8 rounded-2xl border border-gray-200 dark:border-dark-700">
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {t('contact.sendMessage')}
                </h3>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                    <span className={`text-green-800 dark:text-green-200 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {t('contact.form.success')}
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                    <span className={`text-red-800 dark:text-red-200 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {t('contact.form.error')}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: language === 'ar' ? 'الاسم مطلوب' : 'Name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-800 text-gray-900 dark:text-white ${isRTL ? 'font-arabic text-right' : 'font-english'} ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                        }`}
                        placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                      />
                      {errors.name && (
                        <p className={`mt-1 text-sm text-red-600 dark:text-red-400 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', { 
                          required: language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: language === 'ar' ? 'عنوان بريد إلكتروني غير صحيح' : 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-800 text-gray-900 dark:text-white ${isRTL ? 'font-arabic text-right' : 'font-english'} ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                        }`}
                        placeholder={language === 'ar' ? 'your.email@example.com' : 'your.email@example.com'}
                      />
                      {errors.email && (
                        <p className={`mt-1 text-sm text-red-600 dark:text-red-400 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: language === 'ar' ? 'الموضوع مطلوب' : language === 'fr' ? 'Le sujet est requis' : 'Subject is required' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-800 text-gray-900 dark:text-white ${isRTL ? 'font-arabic text-right' : 'font-english'} ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                      }`}
                      placeholder={language === 'ar' ? 'ما هو موضوع رسالتك؟' : language === 'fr' ? 'De quoi s\'agit-il ?' : 'What\'s this about?'}
                    />
                    {errors.subject && (
                      <p className={`mt-1 text-sm text-red-600 dark:text-red-400 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      {...register('message', { required: language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required' })}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-dark-800 text-gray-900 dark:text-white ${isRTL ? 'font-arabic text-right' : 'font-english'} ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                      }`}
                      placeholder={language === 'ar' ? 'أخبرني عن مشروعك...' : language === 'fr' ? 'Parlez-moi de votre projet...' : 'Tell me about your project...'}
                    />
                    {errors.message && (
                      <p className={`mt-1 text-sm text-red-600 dark:text-red-400 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                    className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'} ${
                      submitStatus === 'loading'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{t('contact.form.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{t('contact.form.send')}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className={`space-y-8 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <div>
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {t('contact.letsConnect')}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                  {language === 'ar'
                    ? 'أنا متحمس دائماً لسماع الفرص الجديدة والمشاريع المثيرة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، لا تتردد في التواصل!'
                    : language === 'fr'
                    ? 'Je suis toujours ravi d\'entendre parler de nouvelles opportunités et de projets intéressants. Que vous ayez une question ou que vous vouliez simplement dire bonjour, n\'hésitez pas à me contacter !'
                    : 'I\'m always excited to hear about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!'
                  }
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-4 p-6 bg-gray-50 dark:bg-dark-900 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 border border-gray-200 dark:border-dark-700 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <info.icon size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <p className={`font-semibold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>{info.label}</p>
                      <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>{info.value}</p>
                      <p className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'font-arabic' : 'font-english'}`}>{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                  {t('contact.followMe')}
                </h4>
                <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-gray-100 dark:bg-dark-900 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} border border-gray-200 dark:border-dark-700`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className={`bg-gradient-to-r from-primary-600 to-cyan-600 p-6 rounded-xl text-white ${isRTL ? 'text-right' : ''}`}>
                <h4 className={`text-lg font-semibold mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('contact.currentlyAvailable')}
                </h4>
                <p className={`text-primary-100 mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {language === 'ar'
                    ? 'أقبل مشاريع جديدة وأحب أن أسمع عن مشروعك.'
                    : language === 'fr'
                    ? 'J\'accepte de nouveaux projets et j\'aimerais entendre parler du vôtre.'
                    : 'I\'m accepting new projects and would love to hear about yours.'
                  }
                </p>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t('contact.availableForProjects')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;