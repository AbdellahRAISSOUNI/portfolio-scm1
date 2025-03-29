"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, fadeInUpVariant } from '@/lib/utils';
import { useParallax, useParallaxRotation, useMouseParallax } from '@/lib/parallaxUtils';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  // Parallax effects for different elements
  const textParallax = useParallax(30, 'up');
  const imageParallax = useParallax(50, 'down');
  const statsCardRotate = useParallaxRotation(5);
  const logoParallax = useParallax(20, 'up');
  
  // Mouse parallax for background elements
  const mousePosition = useMouseParallax(30);
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Decorative elements with mouse parallax */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-400/10 dark:bg-teal-700/10 blur-3xl"
        style={{ 
          x: mousePosition.x * -1,
          y: mousePosition.y * -1
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-400/10 dark:bg-emerald-700/10 blur-3xl"
        style={{ 
          x: mousePosition.x,
          y: mousePosition.y
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-400/5 dark:bg-indigo-700/5 blur-3xl"
        style={{ 
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left column - Text content */}
          <motion.div
            ref={textParallax.ref}
            style={{ transform: textParallax.transform }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="lg:pr-16"
          >
            <motion.span 
              variants={fadeInUpVariant(0.1)}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-4"
            >
              Étudiante Ingénieure à l'ENSA Tétouan
            </motion.span>
            
            <motion.h1 
              variants={fadeInUpVariant(0.2)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Je suis <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Khaoula Bouhassis</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUpVariant(0.3)}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            >
              Façonner l'avenir de la <span className="text-teal-600 dark:text-teal-400">chaîne d'approvisionnement</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUpVariant(0.4)}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
            >
              Étudiante passionnée en ingénierie, spécialisée en Supply Chain Management à l'École Nationale des Sciences Appliquées de Tétouan, combinant expertise technique et vision stratégique pour optimiser les processus logistiques.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariant(0.5)}
              className="flex flex-col sm:flex-row gap-4"
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
              >
                Me Contacter
              </Button>
              <Button 
                href="#projects" 
                variant="outline"
                size="lg"
                icon={
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                }
                iconPosition="right"
              >
                Voir mes projets
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant(0.6)}
              className="mt-12 flex items-center space-x-6"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center space-x-2"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-3 rounded-full">
                  <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Formation</p>
                  <p className="font-medium text-gray-900 dark:text-white">Ensa Tétouan</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center space-x-2"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 p-3 rounded-full">
                  <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Spécialité</p>
                  <p className="font-medium text-gray-900 dark:text-white">Supply Chain Management</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div
            ref={imageParallax.ref}
            style={{ transform: imageParallax.transform, scale }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="relative"
          >
            <motion.div
              variants={slideInFromRight(0.2)}
              className="relative z-10"
            >
              <div className="relative w-80 h-80 mx-auto overflow-visible group">
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-emerald-400/30 blur-2xl scale-110 animate-pulse-slow group-hover:scale-150 group-hover:from-teal-400/40 group-hover:to-emerald-400/40 transition-all duration-700"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/20 to-emerald-300/20 blur-3xl scale-110 animate-pulse-slower -rotate-12 group-hover:scale-150 group-hover:from-teal-300/30 group-hover:to-emerald-300/30 transition-all duration-700"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full border-4 border-white/90 dark:border-gray-800/90 shadow-xl overflow-hidden group-hover:border-teal-200 dark:group-hover:border-teal-800/50 transition-colors duration-700 z-10">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Khaoula Bouhassis - Supply Chain Management Student"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* ENSA Tetouan section */}
        <motion.div
          ref={logoParallax.ref}
          style={{ transform: logoParallax.transform, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            Formation d'excellence à l'École Nationale des Sciences Appliquées de Tétouan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src="/images/ADE.png"
                alt="ENSA Tétouan Logo"
                width={320}
                height={120}
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src="/images/Université_Abdelmalek_Essaâdi.png"
                alt="Université Abdelmalek Essaâdi Logo"
                width={320}
                height={120}
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src="/images/logo ensa tetouan.png"
                alt="Ministère de l'Éducation Nationale Logo"
                width={320}
                height={120}
                className="h-12 w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 