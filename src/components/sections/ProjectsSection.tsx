"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';
import { useParallax, useParallaxRotation, useMouseParallax } from '@/lib/parallaxUtils';
import GridBackground from '@/components/ui/GridBackground';
import Button from '@/components/ui/Button';

export default function ProjectsSection() {
  // Parallax effects
  const titleParallax = useParallax(10, 'up');
  const featuredParallax = useParallax(8, 'right');
  const projectsGridParallax = useParallax(5, 'up');
  const ctaParallax = useParallax(8, 'up');
  
  // Mouse parallax for background elements
  const mousePosition = useMouseParallax(10);
  
  const projects = [
    {
      id: 1,
      title: "Optimisation de la chaîne d'approvisionnement d'une entreprise agroalimentaire",
      description: "Analyse et amélioration des processus logistiques d'une entreprise agroalimentaire, résultant en une réduction de 15% des coûts de stockage et une amélioration de 20% des délais de livraison.",
      image: "/images/project-1.jpg",
      tags: ["Supply Chain", "Optimisation", "Agroalimentaire"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Implémentation d'un système de gestion des stocks en temps réel",
      description: "Conception et mise en place d'un système de suivi des stocks en temps réel pour une entreprise de distribution, permettant une meilleure visibilité et une réduction des ruptures de stock.",
      image: "/images/project-2.jpg",
      tags: ["Gestion des stocks", "Digitalisation", "ERP"],
      link: "#"
    },
    {
      id: 3,
      title: "Étude d'impact environnemental de la logistique urbaine",
      description: "Analyse de l'empreinte carbone des activités de livraison en milieu urbain et proposition de solutions pour une logistique plus durable et respectueuse de l'environnement.",
      image: "/images/project-3.jpg",
      tags: ["Logistique durable", "Environnement", "Analyse d'impact"],
      link: "#"
    },
    {
      id: 4,
      title: "Optimisation des routes de livraison par algorithmes génétiques",
      description: "Développement d'un algorithme d'optimisation des tournées de véhicules basé sur les algorithmes génétiques, permettant une réduction significative des distances parcourues et des émissions de CO2.",
      image: "/images/project-4.jpg",
      tags: ["Optimisation", "Algorithmes", "Transport"],
      link: "#"
    }
  ];

  // Featured project is the first one
  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Section-specific background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 -z-20"></div>
      <GridBackground 
        variant="gradient" 
        gridSize={40} 
        gridOpacity={0.04} 
        className="z-10"
      />
      
      {/* Decorative elements with mouse parallax */}
      <motion.div 
        className="absolute top-40 right-10 w-48 h-48 rounded-full bg-teal-400/5 dark:bg-teal-700/5 blur-3xl"
        style={{ 
          x: mousePosition.x,
          y: mousePosition.y * -1
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-emerald-400/5 dark:bg-emerald-700/5 blur-3xl"
        style={{ 
          x: mousePosition.x * -1,
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
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-3"
          >
            Mes Projets
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
          >
            Projets <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Académiques et Personnels</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300 text-sm md:text-base"
          >
            Découvrez les projets sur lesquels j'ai travaillé durant mon parcours académique et mes initiatives personnelles dans le domaine de la supply chain.
          </motion.p>
        </motion.div>
        
        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            ref={featuredParallax.ref}
            style={{ transform: featuredParallax.transform }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-56 lg:h-auto overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 lg:hidden">
                    <h3 className="text-xl font-bold text-white">{featuredProject.title}</h3>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-3"
                  >
                    Projet Principal
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                  >
                    {featuredProject.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base"
                  >
                    {featuredProject.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-5"
                  >
                    {featuredProject.tags.map((tag, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ y: -2, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block px-2 py-0.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      href={featuredProject.link}
                      variant="glow"
                      size="md"
                      icon={
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      }
                      iconPosition="right"
                    >
                      Voir le projet
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Regular Projects Grid */}
        <motion.div
          ref={projectsGridParallax.ref}
          style={{ transform: projectsGridParallax.transform }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUpVariant(0.1 * index)}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button 
                    href={project.link}
                    variant="outline"
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                  >
                    Voir les détails
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <motion.span 
                      key={index}
                      whileHover={{ y: -1, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block px-2 py-0.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    href={project.link}
                    variant="link"
                    size="sm"
                    icon={
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    Voir les détails
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          ref={ctaParallax.ref}
          style={{ transform: ctaParallax.transform }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-lg border border-teal-100/30 dark:border-teal-900/30"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Intéressé(e) par mes projets?
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              N'hésitez pas à me contacter pour en discuter davantage ou pour explorer de potentielles collaborations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                href="#contact" 
                variant="glow"
                size="lg"
                icon={
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                iconPosition="right"
              >
                Me contacter
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 