import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '@/lib/utils';
import { useState } from 'react';

// Define testimonials data
const testimonials = [
  {
    id: 1,
    content: "Jean a transformé notre chaîne d'approvisionnement, réduisant les délais de livraison de 40% et améliorant considérablement la satisfaction client. Son expertise en optimisation logistique est inégalée.",
    author: "Sophie Dubois",
    position: "Directrice des Opérations, TechLogistics",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    content: "Travailler avec Jean sur notre projet de transformation digitale a été une expérience exceptionnelle. Sa compréhension approfondie des technologies SCM et sa capacité à gérer le changement ont été déterminantes pour notre succès.",
    author: "Marc Lefevre",
    position: "DSI, Global Distribution SA",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    content: "L'approche stratégique de Jean en matière d'approvisionnement durable nous a permis de réduire notre empreinte carbone tout en optimisant nos coûts. Un véritable expert qui allie performance économique et responsabilité environnementale.",
    author: "Émilie Laurent",
    position: "Responsable RSE, EcoSupply",
    image: "/images/testimonial-3.jpg"
  },
  {
    id: 4,
    content: "Jean a dirigé l'implémentation de notre nouveau système SAP avec une efficacité remarquable. Son expertise technique et sa vision stratégique ont permis une transition en douceur et des résultats immédiats.",
    author: "Thomas Moreau",
    position: "Directeur Supply Chain, IndustrieModerne",
    image: "/images/testimonial-4.jpg"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
          >
            Témoignages
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ce Que Disent <span className="text-blue-600 dark:text-blue-500">Mes Clients</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Découvrez les retours d'expérience de professionnels avec qui j'ai eu le plaisir de collaborer.
          </motion.p>
        </motion.div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-blue-100 dark:text-blue-900/30">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.722 6.065c-5.893 2.074-9.802 7.57-9.802 13.702 0 2.842 0.9 5.053 2.842 6.464 1.454 1.054 3.207 1.207 4.75 0.45 1.58-0.776 2.53-2.257 2.53-3.93 0-2.42-1.963-4.383-4.383-4.383-0.5 0-1.002 0.084-1.48 0.25 0.567-3.667 3.258-7.017 7.543-8.43v-4.123zM23.058 6.065c-5.893 2.074-9.802 7.57-9.802 13.702 0 2.842 0.9 5.053 2.842 6.464 1.454 1.054 3.207 1.207 4.75 0.45 1.58-0.776 2.53-2.257 2.53-3.93 0-2.42-1.963-4.383-4.383-4.383-0.5 0-1.002 0.084-1.48 0.25 0.567-3.667 3.258-7.017 7.543-8.43v-4.123z"></path>
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.722 6.065c-5.893 2.074-9.802 7.57-9.802 13.702 0 2.842 0.9 5.053 2.842 6.464 1.454 1.054 3.207 1.207 4.75 0.45 1.58-0.776 2.53-2.257 2.53-3.93 0-2.42-1.963-4.383-4.383-4.383-0.5 0-1.002 0.084-1.48 0.25 0.567-3.667 3.258-7.017 7.543-8.43v-4.123zM23.058 6.065c-5.893 2.074-9.802 7.57-9.802 13.702 0 2.842 0.9 5.053 2.842 6.464 1.454 1.054 3.207 1.207 4.75 0.45 1.58-0.776 2.53-2.257 2.53-3.93 0-2.42-1.963-4.383-4.383-4.383-0.5 0-1.002 0.084-1.48 0.25 0.567-3.667 3.258-7.017 7.543-8.43v-4.123z"></path>
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      index === activeIndex 
                        ? 'bg-blue-600 dark:bg-blue-500' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 