"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const isManualNavigation = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Skip scroll detection if user just clicked a navigation link
      if (isManualNavigation.current) return;
      
      // Detect which section is currently in view
      const sections = [
        { id: 'hero', href: '/' },
        { id: 'about', href: '#about' },
        { id: 'skills', href: '#skills' },
        { id: 'projects', href: '#projects' },
        { id: 'experience', href: '#experience' },
        { id: 'extracurricular', href: '#extracurricular' },
        { id: 'contact', href: '#contact' }
      ];
      
      // Get the current scroll position
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection
      
      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveItem(sections[i].href);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    // Set the active item immediately
    setActiveItem(href);
    
    // Prevent scroll detection from changing the active item during navigation
    isManualNavigation.current = true;
    
    // Clear any existing timeout
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    
    // Allow scroll detection to work again after navigation animation completes
    navigationTimeoutRef.current = setTimeout(() => {
      isManualNavigation.current = false;
    }, 1000); // Adjust timing based on your scroll animation duration
  };

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Engagement', href: '#extracurricular' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg py-2" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2 relative" onClick={() => handleNavClick('/')}>
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-teal-500 p-0.5 transition-all duration-300 group-hover:border-teal-400 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
              <Image 
                src="/images/logo.svg" 
                alt="Khaoula Bouhassis Logo" 
                width={40} 
                height={40}
                className="object-contain rounded-full"
              />
            </div>
            <div className="relative">
              <span className="font-bold text-xl text-gray-900 dark:text-white">Khaoula</span>
              <span className="font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">Bouhassis</span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-full p-1 border border-gray-200/20 dark:border-gray-700/20">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400",
                    activeItem === item.href 
                      ? "text-teal-600 dark:text-teal-400" 
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {activeItem === item.href && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              href="#contact" 
              variant="primary"
              size="md"
              onClick={() => handleNavClick('#contact')}
            >
              Me Contacter
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></div>
              <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden"
            >
              <nav className="flex flex-col space-y-1 px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-xl font-medium transition-colors duration-300",
                        activeItem === item.href 
                          ? "text-teal-600 dark:text-teal-400 bg-gray-100 dark:bg-gray-800/50" 
                          : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                      )}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Thème
                    </span>
                    <ThemeToggle />
                  </div>
                  <Button 
                    href="#contact" 
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => {
                      handleNavClick('#contact');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Me Contacter
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 