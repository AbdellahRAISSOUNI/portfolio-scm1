"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer, slideInFromLeft, slideInFromRight } from '@/lib/utils';
import GridBackground from '@/components/ui/GridBackground';

interface Activity {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
  achievements?: string[];
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Membre de l'Association Française de Supply Chain",
    period: "2018 - Présent",
    description: "Participation active aux conférences et ateliers sur les dernières tendances en matière de chaîne d'approvisionnement. Contribution à des groupes de travail sur l'optimisation des processus logistiques.",
    image: "/images/supply-chain-association.jpg",
    achievements: [
      "Organisation de deux conférences sur l'innovation en logistique",
      "Contribution à un livre blanc sur la digitalisation de la supply chain",
      "Participation à des groupes de travail internationaux"
    ]
  },
  {
    id: 2,
    title: "Mentor pour Étudiants en Logistique",
    period: "2019 - Présent",
    description: "Accompagnement d'étudiants en master de logistique et chaîne d'approvisionnement, partageant mon expérience professionnelle et les guidant dans leur développement de carrière.",
    image: "/images/mentoring.jpg",
    achievements: [
      "Mentorat de plus de 15 étudiants en 3 ans",
      "Développement d'un programme de mentorat structuré",
      "Évaluation positive de 95% des participants"
    ]
  },
  {
    id: 3,
    title: "Bénévole en Logistique Humanitaire",
    period: "2020 - Présent",
    description: "Participation à des missions humanitaires où j'applique mes compétences en logistique pour optimiser la distribution d'aide et de ressources dans des zones défavorisées.",
    image: "/images/humanitarian-logistics.jpg",
    achievements: [
      "Participation à 3 missions humanitaires au Maroc",
      "Optimisation des routes de distribution réduisant les délais de 30%",
      "Formation de 10 bénévoles locaux aux principes de base de la logistique"
    ]
  }
];

export default function ExtracurricularSection() {
  return (
    <section id="extracurricular" className="section-padding relative overflow-hidden">
      {/* Section-specific background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-20"></div>
      <GridBackground 
        variant="gradient" 
        gridSize={50} 
        gridOpacity={0.03} 
        className="z-10"
      />
      
      <div className="container-custom relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUpVariant(0.1)}
            className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
          >
            Engagement
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mes Activités Parascolaires
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Au-delà de mes études, je m'engage dans diverses activités qui enrichissent mon parcours et me permettent de contribuer à la communauté.
          </motion.p>
        </motion.div>
        
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <motion.div
                variants={index % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInFromRight(0.3) : slideInFromLeft(0.3)}
                className="w-full lg:w-1/2 space-y-4"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {activity.period}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activity.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                
                {activity.achievements && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Réalisations:</h4>
                    <ul className="space-y-1">
                      {activity.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Ces activités parascolaires me permettent non seulement de contribuer à la communauté, mais aussi d'élargir mon réseau professionnel et d'acquérir de nouvelles compétences qui enrichissent mon expertise en gestion de la chaîne d'approvisionnement.
          </p>
          
          <div className="inline-flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
            <span>Intéressé par une collaboration?</span>
            <a 
              href="#contact" 
              className="underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Contactez-moi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 