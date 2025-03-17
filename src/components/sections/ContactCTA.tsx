import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, slideInFromLeft, slideInFromRight } from '@/lib/utils';
import Link from 'next/link';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-cta" className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4"
          >
            Prêt à Collaborer?
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Discutons de Votre Prochain <span className="text-yellow-300">Projet Logistique</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
          >
            Je suis toujours à la recherche de nouveaux défis et d'opportunités pour appliquer mon expertise en gestion de la chaîne d'approvisionnement. N'hésitez pas à me contacter pour discuter de vos besoins.
          </motion.p>
          
          <motion.div
            variants={fadeInUpVariant(0.4)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="btn-primary-light text-center px-8 py-4 rounded-lg font-medium text-blue-900 bg-white hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Prendre Rendez-vous
            </Link>
            <Link 
              href="mailto:contact@example.com" 
              className="btn-secondary-light text-center px-8 py-4 rounded-lg font-medium text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              M'envoyer un Email
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Animated dots */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[20%] left-[80%] w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[50%] left-[5%] w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-[70%] left-[80%] w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[85%] left-[35%] w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </section>
  );
} 