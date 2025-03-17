"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant, slideInFromLeft, slideInFromRight } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-4"
          >
            À Propos de Moi
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Malak Mestini</span>, Future Ingénieure en Supply Chain Management
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Passionnée par l'innovation dans la chaîne d'approvisionnement et déterminée à contribuer à l'optimisation des processus logistiques pour un avenir plus durable et efficace.
          </motion.p>

          <motion.div
            variants={fadeInUpVariant(0.4)}
            className="mt-8"
          >
            <Button
              href="#contact"
              variant="secondary"
              size="md"
              icon={
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
              iconPosition="right"
            >
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromLeft(0.2)}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 dark:from-teal-500/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src="/images/profile-photo.jpg"
                alt="Malak Mestini - Étudiante en SCM"
                width={600}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 max-w-[240px] border border-teal-100 dark:border-teal-900/50"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Année d'étude</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">4ème année</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Certifications</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">3+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h3 
              variants={fadeInUpVariant(0.2)}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Mon Parcours
            </motion.h3>
            
            <motion.p 
              variants={fadeInUpVariant(0.3)}
              className="text-gray-600 dark:text-gray-300"
            >
              Actuellement en 4ème année du cycle ingénieur à l'École Nationale des Sciences Appliquées de Tétouan, je me spécialise en Supply Chain Management avec une passion pour l'optimisation des processus logistiques et la transformation digitale.
            </motion.p>
            
            <motion.p 
              variants={fadeInUpVariant(0.4)}
              className="text-gray-600 dark:text-gray-300"
            >
              Mon parcours académique m'a permis de développer une solide base technique et managériale, complétée par des stages pratiques dans différents secteurs industriels où j'ai pu appliquer mes connaissances théoriques à des défis concrets.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariant(0.5)}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Éducation</h4>
              <div className="space-y-3">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-2 rounded-lg mr-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Cycle Ingénieur - Génie Industriel</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">École Nationale des Sciences Appliquées de Tétouan | 2020 - 2024</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-2 rounded-lg mr-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Classes Préparatoires Intégrées</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">École Nationale des Sciences Appliquées de Tétouan | 2018 - 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant(0.6)}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 group">
                  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Lean Six Sigma Yellow Belt</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Microsoft Excel Avancé</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Gestion de Projet</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUpVariant(0.7)}
              className="pt-4"
            >
              <Button
                href="#skills"
                variant="ghost"
                size="md"
                icon={
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              >
                Voir mes compétences
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Mes Valeurs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-200/40 dark:group-hover:shadow-teal-900/40">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300">Rechercher constamment de nouvelles approches pour résoudre les défis de la chaîne d'approvisionnement.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-200/40 dark:group-hover:shadow-teal-900/40">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">Viser constamment l'amélioration continue et la qualité dans tous les aspects de mon travail.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-200/40 dark:group-hover:shadow-teal-900/40">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-300">Travailler efficacement en équipe pour atteindre des objectifs communs et créer de la valeur.</p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button
              href="#experience"
              variant="secondary"
              size="md"
            >
              Découvrir mon expérience
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 