"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';
import { useParallax, useParallaxRotation, useMouseParallax } from '@/lib/parallaxUtils';
import GridBackground from '@/components/ui/GridBackground';
import Button from '@/components/ui/Button';

export default function SkillsSection() {
  // Parallax effects - reduced intensity
  const titleParallax = useParallax(10, 'up');
  const card1Parallax = useParallax(8, 'left');
  const card2Parallax = useParallax(8, 'right');
  const card3Parallax = useParallax(8, 'left');
  const card4Parallax = useParallax(8, 'right');
  const additionalSkillsParallax = useParallax(5, 'up');
  
  // Mouse parallax for background elements - reduced intensity
  const mousePosition = useMouseParallax(10);
  
  const technicalSkills = [
    { name: "Gestion de la chaîne d'approvisionnement", level: 85 },
    { name: "Planification de la demande", level: 80 },
    { name: "Gestion des stocks", level: 90 },
    { name: "Lean Manufacturing", level: 75 },
    { name: "Optimisation logistique", level: 85 },
    { name: "Analyse de données", level: 80 },
  ];
  
  const softwareSkills = [
    { name: "Microsoft Excel", level: 95 },
    { name: "SAP (notions)", level: 65 },
    { name: "Power BI", level: 75 },
    { name: "Python", level: 70 },
    { name: "Minitab", level: 80 },
    { name: "AutoCAD", level: 60 },
  ];
  
  const softSkills = [
    { name: "Travail d'équipe", level: 90 },
    { name: "Résolution de problèmes", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Gestion de projet", level: 75 },
    { name: "Adaptabilité", level: 85 },
    { name: "Leadership", level: 70 },
  ];
  
  const languages = [
    { name: "Arabe", level: 100 },
    { name: "Français", level: 95 },
    { name: "Anglais", level: 85 },
    { name: "Espagnol", level: 60 },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Section-specific background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 -z-20"></div>
      <GridBackground 
        variant="default" 
        gridSize={35} 
        gridOpacity={0.03} 
        className="z-10"
      />
      
      {/* Decorative elements with mouse parallax - made smaller */}
      <motion.div 
        className="absolute top-40 left-10 w-48 h-48 rounded-full bg-teal-400/5 dark:bg-teal-700/5 blur-3xl"
        style={{ 
          x: mousePosition.x * -1,
          y: mousePosition.y * -1
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-emerald-400/5 dark:bg-emerald-700/5 blur-3xl"
        style={{ 
          x: mousePosition.x,
          y: mousePosition.y
        }}
      />
      
      <div className="container-custom relative z-20">
        <motion.div
          ref={titleParallax.ref}
          style={{ transform: titleParallax.transform }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10" // Reduced margin
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-3" // Smaller padding and margin
          >
            Mes Compétences
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3" // Smaller text and margin
          >
            Expertise en <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Supply Chain Management</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300 text-sm md:text-base" // Smaller text
          >
            Mes compétences techniques et personnelles acquises à travers ma formation d'ingénieure et mes expériences pratiques.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"> {/* Reduced gap */}
          {/* Technical Skills */}
          <motion.div
            ref={card1Parallax.ref}
            style={{ transform: card1Parallax.transform }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 dark:hover:from-teal-900/10 dark:hover:to-emerald-900/10"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Compétences Techniques</h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUpVariant(0.1 * index)} 
                  className="space-y-1 group/skill hover:bg-white/50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover/skill:text-teal-600 dark:group-hover/skill:text-teal-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover/skill:text-teal-600 dark:group-hover/skill:text-teal-400 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden group-hover/skill:bg-gray-300 dark:group-hover/skill:bg-gray-600 transition-colors duration-300">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full relative group-hover/skill:from-teal-400 group-hover/skill:to-emerald-400 transition-colors duration-300"
                    >
                      <span className="absolute inset-0 bg-white/20 overflow-hidden rounded-full">
                        <span className="absolute inset-0 animate-pulse-slow opacity-70"></span>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Software Skills */}
          <motion.div
            ref={card2Parallax.ref}
            style={{ transform: card2Parallax.transform }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/10 dark:hover:to-purple-900/10"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Compétences Logicielles</h3>
            </div>
            
            <div className="space-y-4">
              {softwareSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUpVariant(0.1 * index)} 
                  className="space-y-1 group/skill hover:bg-white/50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden group-hover/skill:bg-gray-300 dark:group-hover/skill:bg-gray-600 transition-colors duration-300">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full relative group-hover/skill:from-indigo-400 group-hover/skill:to-purple-400 transition-colors duration-300"
                    >
                      <span className="absolute inset-0 bg-white/20 overflow-hidden rounded-full">
                        <span className="absolute inset-0 animate-pulse-slow opacity-70"></span>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            ref={card3Parallax.ref}
            style={{ transform: card3Parallax.transform }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/10 dark:hover:to-cyan-900/10"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Compétences Personnelles</h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUpVariant(0.1 * index)} 
                  className="space-y-1 group/skill hover:bg-white/50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden group-hover/skill:bg-gray-300 dark:group-hover/skill:bg-gray-600 transition-colors duration-300">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full relative group-hover/skill:from-blue-400 group-hover/skill:to-cyan-400 transition-colors duration-300"
                    >
                      <span className="absolute inset-0 bg-white/20 overflow-hidden rounded-full">
                        <span className="absolute inset-0 animate-pulse-slow opacity-70"></span>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Languages */}
          <motion.div
            ref={card4Parallax.ref}
            style={{ transform: card4Parallax.transform }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/10 dark:hover:to-orange-900/10"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Langues</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((language, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUpVariant(0.1 * index)} 
                  className="space-y-1 group/skill hover:bg-white/50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover/skill:text-amber-600 dark:group-hover/skill:text-amber-400 transition-colors duration-300">{language.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover/skill:text-amber-600 dark:group-hover/skill:text-amber-400 transition-colors duration-300">{language.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden group-hover/skill:bg-gray-300 dark:group-hover/skill:bg-gray-600 transition-colors duration-300">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full relative group-hover/skill:from-amber-400 group-hover/skill:to-orange-400 transition-colors duration-300"
                    >
                      <span className="absolute inset-0 bg-white/20 overflow-hidden rounded-full">
                        <span className="absolute inset-0 animate-pulse-slow opacity-70"></span>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div
          ref={additionalSkillsParallax.ref}
          style={{ transform: additionalSkillsParallax.transform }}
          initial={{ opacity: 0, y: 20 }} // Reduced y offset
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300" // Reduced margin and padding
        >
          <div className="flex items-center mb-4"> {/* Reduced margin */}
            <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-2 rounded-lg mr-3"> {/* Smaller padding and margin */}
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Smaller icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compétences Additionnelles</h3> {/* Smaller text */}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3"> {/* Reduced gap */}
            {[
              "Méthodes Agiles", "Kaizen", "5S", "SMED",
              "Kanban", "Six Sigma", "MRP", "PDCA",
              "Analyse SWOT", "Diagramme de Pareto", "Diagramme d'Ishikawa", "VSM"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }} // Reduced hover effect
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80 rounded-lg px-3 py-2 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700" // Reduced padding
              >
                <span className="text-gray-800 dark:text-gray-200 text-xs font-medium">{skill}</span> {/* Smaller text */}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} // Reduced y offset
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center" // Reduced margin
        >
          <Button 
            href="#projects" 
            variant="glow"
            size="md" // Changed from lg to md
            icon={
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Smaller icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            }
            iconPosition="right"
          >
            Découvrir Mes Projets
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 