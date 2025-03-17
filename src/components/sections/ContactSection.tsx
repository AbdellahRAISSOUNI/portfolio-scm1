"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';
import GridBackground from '@/components/ui/GridBackground';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formState);
    alert('Merci pour votre message! Je vous répondrai dès que possible.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-20"></div>
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] -z-10"></div>
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-3xl -z-10"></div>
      
      <div className="container-custom relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            variants={fadeInUpVariant(0.1)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 px-4 py-1.5 rounded-full mb-4 border border-teal-100 dark:border-teal-800/50"
          >
            <svg className="w-4 h-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400">Contact</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white mb-4"
          >
            Discutons de vos <span className="text-teal-600 dark:text-teal-400">Projets</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            Vous cherchez une future ingénieure en Supply Chain Management pour un stage ou un projet ? N'hésitez pas à me contacter !
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8">
              <motion.h3 
                variants={fadeInUpVariant(0.1)}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Envoyez-moi un message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUpVariant(0.2)} className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 group-hover:border-teal-200 dark:group-hover:border-teal-800/50"
                    placeholder="Votre nom"
                    required
                  />
                </motion.div>
                
                <motion.div variants={fadeInUpVariant(0.3)} className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 group-hover:border-teal-200 dark:group-hover:border-teal-800/50"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </motion.div>
                
                <motion.div variants={fadeInUpVariant(0.4)} className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 group-hover:border-teal-200 dark:group-hover:border-teal-800/50"
                    placeholder="Sujet de votre message"
                    required
                  />
                </motion.div>
                
                <motion.div variants={fadeInUpVariant(0.5)} className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 group-hover:border-teal-200 dark:group-hover:border-teal-800/50"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div variants={fadeInUpVariant(0.6)}>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    Envoyer le message
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="space-y-8"
          >
            {/* Contact Information Card */}
            <motion.div variants={fadeInUpVariant(0.1)} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-br from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 p-3 rounded-lg border border-teal-100 dark:border-teal-800/50 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">contact@etudiant-ensa.ma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-br from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 p-3 rounded-lg border border-teal-100 dark:border-teal-800/50 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Téléphone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+212 6XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-br from-teal-400/10 to-emerald-400/10 dark:from-teal-400/5 dark:to-emerald-400/5 p-3 rounded-lg border border-teal-100 dark:border-teal-800/50 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Adresse</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        École Nationale des Sciences Appliquées<br />
                        BP 2222, Mhannech II<br />
                        93030 Tétouan, Maroc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media Card */}
            <motion.div variants={fadeInUpVariant(0.2)} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Réseaux sociaux</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 dark:from-[#0077B5]/10 dark:to-[#0077B5]/20 rounded-lg hover:from-[#0077B5]/10 hover:to-[#0077B5]/20 dark:hover:from-[#0077B5]/20 dark:hover:to-[#0077B5]/30 transition-all duration-300 group/link"
                  >
                    <div className="bg-white dark:bg-gray-700 p-2 rounded-lg group-hover/link:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-[#0077B5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600/50 dark:hover:to-gray-500/50 transition-all duration-300 group/link"
                  >
                    <div className="bg-white dark:bg-gray-700 p-2 rounded-lg group-hover/link:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 