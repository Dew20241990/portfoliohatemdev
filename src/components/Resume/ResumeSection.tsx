import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  User, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Languages, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../contexts/LanguageContext';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const ResumeSection = () => {
  const { language, t, isRTL } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const resumeRef = useRef<HTMLDivElement>(null);

  const personalInfo = {
    name: "Hatem Khellaf",
    title: {
      ar: "مهندس اتصالات",
      en: "Telecommunications Engineer",
      fr: "Ingénieur en Télécommunications"
    },
    phone: "+213 0663488529",
    email: "khellafhatem3@gmail.com",
    location: {
      ar: "خنشلة، الجزائر",
      en: "Khenchela, Algeria",
      fr: "Khenchela, Algérie"
    },
    summary: {
      ar: "مهندس في الاتصالات مع أكثر من 9 سنوات من الخبرة، متخصص في الإلكترونيات والأمن السيبراني وتطوير تطبيقات الويب الحديثة. خبرة في الأنظمة المدمجة والإلكترونيات الصناعية والشبكات التقنية ورقمنة العمليات الإدارية.",
      en: "Telecommunications engineer with over 9 years of experience, specialized in electronics, cybersecurity and modern web application development. Expertise in embedded systems, industrial electronics, technical networks and digitalization of administrative processes.",
      fr: "Ingénieur en télécommunications avec plus de 9 ans d'expérience, spécialisé en électronique, cybersécurité et développement d'applications web modernes. Expertise dans les systèmes embarqués, l'électronique industrielle, les réseaux techniques et la digitalisation des processus administratifs."
    }
  };

  const education = [
    {
      degree: "Master Télécommunications",
      institution: "Université Abbes Laghrour",
      period: "2015–2017",
      icon: GraduationCap
    },
    {
      degree: "Licence Télécommunications",
      institution: "Université Abbes Laghrour",
      period: "2012–2015",
      icon: GraduationCap
    },
    {
      degree: "Bac+2 Électronique",
      institution: "Université Abbes Lagroua",
      period: "2010–2012",
      icon: GraduationCap
    },
    {
      degree: "Diplôme Professionnel en Informatique",
      institution: "Collège St Michel, Montréal",
      period: "2019–2020",
      icon: Award
    }
  ];

  const certifications = [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2023",
      icon: Award
    },
    {
      name: "Introduction au Marketing Digital",
      issuer: "Google",
      year: "2021",
      icon: Award
    }
  ];

  const experience = [
    {
      title: "Chef Service Technique",
      company: "CET Khenchela",
      period: "07/2025 – Présent",
      description: "Supervision technique des installations industrielles, développement de plateformes internes et maintenance électronique.",
      icon: Briefcase
    },
    {
      title: "Responsable d'Applications",
      company: "Secrétariat Général du Ministère de l'Intérieur",
      period: "01/2024 – 04/2024",
      description: "Gestion du système d'information global de la wilaya, analyse géostatistique, développement de plateformes de gestion.",
      icon: Briefcase
    },
    {
      title: "DAIP",
      company: "Direction de l'Emploi Khenchela",
      period: "2017 – 2023",
      description: "Gestion de la paie, des rapports, et digitalisation des processus administratifs pour 15 000 employés.",
      icon: Briefcase
    },
    {
      title: "Développeur Web",
      company: "Cabinet Wally",
      period: "2025",
      description: "Conception et déploiement d'applications web pour la gestion interne.",
      icon: Code
    }
  ];

  const projects = [
    "Application de gestion des périmètres agricoles",
    "Plateforme nationale de gestion du logement",
    "Application citoyenne de gestion des réclamations",
    "Site web institutionnel pour le CET",
    "Suite d'applications de gestion intégrée (marchés, RH, stock, comptabilité)"
  ];

  const skills = {
    technical: [
      "Électronique industrielle",
      "Systèmes embarqués",
      "Réseaux techniques",
      "React & Tailwind UI",
      "Node.js & Express",
      "MySQL & Bases de données"
    ],
    management: [
      "Gestion de projets",
      "Analyse de données",
      "Sécurité informatique",
      "Leadership d'équipe",
      "Digitalisation des processus"
    ]
  };

  const languages = [
    { name: "Arabe", level: "Langue maternelle", proficiency: 100 },
    { name: "Français", level: "C2 (oral et écrit)", proficiency: 95 },
    { name: "Anglais", level: "C2 (oral et écrit)", proficiency: 90 },
    { name: "Espagnol", level: "A1", proficiency: 25 }
  ];

  const downloadPDF = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    let yPosition = margin;

    // Set default font
    pdf.setFont('helvetica');

    // Header
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(personalInfo.name, margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text(personalInfo.title.fr, margin, yPosition);
    yPosition += 15;

    // Contact Info
    pdf.setFontSize(10);
    pdf.text(`Email: ${personalInfo.email}`, margin, yPosition);
    yPosition += 5;
    pdf.text(`Tel: ${personalInfo.phone}`, margin, yPosition);
    yPosition += 5;
    pdf.text(`Lieu: ${personalInfo.location.fr}`, margin, yPosition);
    yPosition += 15;

    // Summary
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('RESUME PROFESSIONNEL', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const summaryText = personalInfo.summary[language] || personalInfo.summary.fr;
    const summaryLines = pdf.splitTextToSize(summaryText, pageWidth - 2 * margin);
    pdf.text(summaryLines, margin, yPosition);
    yPosition += summaryLines.length * 4 + 10;

    // Check if we need a new page
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = margin;
    }

    // Education
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('FORMATION', margin, yPosition);
    yPosition += 8;

    education.forEach(edu => {
      if (yPosition > pageHeight - 30) {
        pdf.addPage();
        yPosition = margin;
      }
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${edu.institution} (${edu.period})`, margin, yPosition);
      yPosition += 8;
    });

    // Experience
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EXPERIENCE PROFESSIONNELLE', margin, yPosition);
    yPosition += 8;

    experience.forEach(exp => {
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.title, margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.text(`${exp.company} (${exp.period})`, margin, yPosition);
      yPosition += 5;
      
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(exp.description || '', pageWidth - 2 * margin);
      pdf.text(descLines, margin, yPosition);
      yPosition += descLines.length * 4 + 8;
    });

    // Skills
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('COMPETENCES', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Techniques:', margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    skills.technical.forEach(skill => {
      pdf.text(`- ${skill}`, margin + 5, yPosition);
      yPosition += 4;
    });

    yPosition += 5;
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Management:', margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    skills.management.forEach(skill => {
      pdf.text(`- ${skill}`, margin + 5, yPosition);
      yPosition += 4;
    });

    // Languages
    yPosition += 10;
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('LANGUES', margin, yPosition);
    yPosition += 8;

    languages.forEach(lang => {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`- ${lang.name}: ${lang.level}`, margin, yPosition);
      yPosition += 5;
    });

    // Save the PDF
    pdf.save('Hatem_Khellaf_CV.pdf');
  };

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
    <section id="resume" className={`py-20 bg-gray-50 dark:bg-dark-900 ${isRTL ? 'font-arabic' : 'font-english'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? (
                <>السيرة <span className="text-primary-600 dark:text-primary-400">الذاتية</span></>
              ) : language === 'fr' ? (
                <>Curriculum <span className="text-primary-600 dark:text-primary-400">Vitae</span></>
              ) : (
                <>Resume <span className="text-primary-600 dark:text-primary-400">CV</span></>
              )}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 mb-8 ${isRTL ? 'text-right' : 'text-center'}`}>
              {personalInfo.name} — {personalInfo.title[language] || personalInfo.title.fr}
            </p>
            
            <motion.button
              onClick={downloadPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg ${isRTL ? 'font-arabic flex-row-reverse' : 'font-english'}`}
            >
              <Download size={20} />
              {t('resume.download')}
            </motion.button>
          </motion.div>

          <div ref={resumeRef} className="space-y-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <User className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.contact')}
                </h3>
              </div>
              
              <div className={`grid md:grid-cols-3 gap-6 ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-800 dark:text-white">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                    <p className="font-medium text-gray-800 dark:text-white">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                    <p className="font-medium text-gray-800 dark:text-white">{personalInfo.location[language] || personalInfo.location.fr}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Zap className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.summary')}
                </h3>
              </div>
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                {personalInfo.summary[language] || personalInfo.summary.fr}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.education')}
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <edu.icon size={20} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
                
                {certifications.map((cert, index) => (
                  <motion.div
                    key={`cert-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (education.length + index) * 0.1 }}
                    className={`flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <cert.icon size={20} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.experience')}
                </h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-6 bg-gray-50 dark:bg-dark-700 rounded-lg hover:shadow-md transition-shadow duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <exp.icon size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Projects */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Code className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.projects')}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-lg ${isRTL ? 'text-right' : ''}`}
                  >
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{project}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Zap className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.skills')}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {t('resume.technical')}
                  </h4>
                  <div className="space-y-2">
                    {skills.technical.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium ${isRTL ? 'text-right' : ''}`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className={`text-lg font-semibold text-gray-800 dark:text-white mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english'}`}>
                    {t('resume.management')}
                  </h4>
                  <div className="space-y-2">
                    {skills.management.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-3 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg font-medium ${isRTL ? 'text-right' : ''}`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Languages className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className={`text-2xl font-bold text-gray-800 dark:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t('resume.languages')}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 bg-gray-50 dark:bg-dark-700 rounded-lg ${isRTL ? 'text-right' : ''}`}
                  >
                    <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{lang.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-primary-500 to-cyan-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;