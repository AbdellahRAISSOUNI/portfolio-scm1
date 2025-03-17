"use client";

import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';
import GridBackground from '@/components/ui/GridBackground';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Stagiaire en Supply Chain",
      company: "Renault Group - Tanger Automotive City",
      period: "Juillet - Août 2023",
      description: "Stage au sein du département logistique de l'usine Renault à Tanger. Participation à l'optimisation des flux de matières premières et à l'amélioration des processus de gestion des stocks.",
      achievements: [
        "Analyse des flux logistiques internes et identification des goulots d'étranglement",
        "Participation à la mise en place d'un système Kanban pour la gestion des pièces détachées",
        "Contribution à la réduction de 15% des délais d'approvisionnement"
      ],
      skills: ["Lean Manufacturing", "Kanban", "Analyse de flux", "SAP MM"]
    },
    {
      id: 2,
      title: "Stagiaire en Planification",
      company: "Groupe OCP - Jorf Lasfar",
      period: "Juin - Juillet 2022",
      description: "Stage au sein du département de planification de la production. Participation à l'élaboration des plans de production et à l'analyse des écarts entre prévisions et réalisations.",
      achievements: [
        "Collecte et analyse des données de production sur une période de 6 mois",
        "Développement d'un tableau de bord pour le suivi des KPIs de production",
        "Proposition d'améliorations pour optimiser la planification de la maintenance préventive"
      ],
      skills: ["Planification de production", "Excel avancé", "Power BI", "Analyse de données"]
    },
    {
      id: 3,
      title: "Projet Académique - Optimisation Logistique",
      company: "ENSA Tétouan - Partenariat avec Tétouan Shore",
      period: "Février - Mai 2022",
      description: "Projet académique en collaboration avec Tétouan Shore pour l'optimisation de la chaîne logistique d'un centre d'appels. Analyse des processus existants et proposition de solutions d'amélioration.",
      achievements: [
        "Réalisation d'un diagnostic complet de la chaîne logistique",
        "Modélisation des processus avec BPMN et identification des axes d'amélioration",
        "Présentation des recommandations à l'équipe de direction"
      ],
      skills: ["Modélisation de processus", "BPMN", "Gestion de projet", "Présentation"]
    },
    {
      id: 4,
      title: "Bénévole Logistique",
      company: "Association Marocaine pour l'Aide Humanitaire",
      period: "Depuis Octobre 2021",
      description: "Participation à l'organisation logistique des campagnes d'aide humanitaire dans les zones rurales. Coordination des flux de dons et optimisation de la distribution.",
      achievements: [
        "Organisation de la logistique pour 5 campagnes d'aide dans des villages isolés",
        "Mise en place d'un système de traçabilité des dons",
        "Formation de nouveaux bénévoles aux principes de base de la logistique humanitaire"
      ],
      skills: ["Logistique humanitaire", "Coordination d'équipe", "Gestion des stocks", "Planification"]
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Section-specific background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-20"></div>
      <GridBackground 
        variant="default" 
        gridSize={45} 
        gridOpacity={0.02} 
        className="z-10"
      />
      
      <div className="container-custom relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 text-teal-500 dark:text-teal-400 rounded-full text-sm font-medium mb-4 border border-teal-100 dark:border-teal-800/50"
          >
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Mon Parcours
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white mb-4"
          >
            Expérience Professionnelle
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Mes stages et projets académiques m'ont permis d'acquérir une expérience pratique dans différents aspects de la chaîne d'approvisionnement.
          </motion.p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 via-emerald-200 to-teal-200 dark:from-teal-800 dark:via-emerald-800 dark:to-teal-800"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  variants={fadeInUpVariant(0.1 * index)}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-7 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 dark:from-teal-500 dark:to-emerald-500 shadow-lg group-hover:scale-150 transition-transform duration-300"></div>

                  <div className="ml-16 relative">
                    {/* Date badge */}
                    <div className="inline-flex items-center space-x-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 text-teal-500 dark:text-teal-400 rounded-full text-sm font-medium border border-teal-100 dark:border-teal-800/50">
                        {exp.period}
                      </span>
                    </div>

                    {/* Content card */}
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
                      <div className="flex flex-col space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{exp.title}</h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <svg className="w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-teal-600 dark:text-teal-400 font-medium">{exp.company}</p>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        </div>

                        <div>
                          <h4 className="text-gray-900 dark:text-white font-semibold mb-3 flex items-center space-x-2">
                            <svg className="w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span>Réalisations clés</span>
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start group/item">
                                <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-3">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="inline-block px-3 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-sm hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 dark:hover:text-teal-400 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Education - More compact and refined design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80 rounded-2xl transform -rotate-1 opacity-50"></div>
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 group/section hover:shadow-lg transition-all duration-500">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-2 rounded-lg mr-3 group-hover/section:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover/section:rotate-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover/section:text-teal-600 dark:group-hover/section:text-teal-400 transition-colors duration-300">Formation Académique</h3>
            </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 dark:hover:from-teal-900/10 dark:hover:to-emerald-900/10">
              <div className="flex items-start space-x-3 mb-2">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover:rotate-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Diplôme d'Ingénieur</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">ENSA Tétouan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-teal-600/70 dark:group-hover:text-teal-400/70 transition-colors duration-300">2020 - 2024</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                  Spécialisation en Supply Chain Management et gestion de production.
                </p>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 dark:hover:from-teal-900/10 dark:hover:to-emerald-900/10">
              <div className="flex items-start space-x-3 mb-2">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover:rotate-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Classes Préparatoires</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">ENSA Tétouan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-teal-600/70 dark:group-hover:text-teal-400/70 transition-colors duration-300">2018 - 2020</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                  Formation intensive en mathématiques et sciences de l'ingénieur.
                </p>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 dark:hover:from-teal-900/10 dark:hover:to-emerald-900/10">
              <div className="flex items-start space-x-3 mb-2">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover:rotate-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Baccalauréat</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">Lycée Ibn Sina</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-teal-600/70 dark:group-hover:text-teal-400/70 transition-colors duration-300">2018</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                  Sciences Mathématiques B, Mention "Très Bien" (17,5/20).
                </p>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 