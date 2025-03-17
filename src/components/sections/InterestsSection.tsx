"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';

const interests = [
  {
    id: 1,
    title: "Technologie et Innovation",
    description: "Passionné par les dernières avancées technologiques et leur application dans la chaîne d'approvisionnement, notamment l'IA, la blockchain et l'IoT.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Développement Durable",
    description: "Engagé dans la promotion de pratiques durables dans la chaîne d'approvisionnement pour réduire l'impact environnemental des opérations logistiques.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Voyages et Cultures",
    description: "Amateur de voyages internationaux, découvrant de nouvelles cultures et étudiant les différentes approches de la gestion de la chaîne d'approvisionnement à travers le monde.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Photographie",
    description: "Passionné de photographie, capturant des paysages et des scènes urbaines lors de mes voyages professionnels et personnels.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Lecture",
    description: "Lecteur avide de livres sur le leadership, la gestion d'entreprise et les nouvelles tendances en matière de chaîne d'approvisionnement.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Sports et Bien-être",
    description: "Adepte de la course à pied et du yoga pour maintenir un équilibre entre vie professionnelle et personnelle.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export default function InterestsSection() {
  return (
    <section id="interests" className="section-padding bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container-custom">
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
            Personnalité
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mes <span className="text-blue-600 dark:text-blue-500">Centres d'Intérêt</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Découvrez ce qui me passionne en dehors du monde professionnel et ce qui façonne ma vision et mon approche du travail.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg w-fit mb-4">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Un équilibre parfait entre vie professionnelle et personnelle</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Je crois fermement que maintenir un équilibre sain entre vie professionnelle et personnelle est essentiel pour stimuler la créativité et l'innovation dans mon travail. Mes centres d'intérêt variés m'aident à garder une perspective fraîche et à apporter de nouvelles idées dans mes projets de chaîne d'approvisionnement.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Innovation</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Créativité</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Équilibre</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">Perspective</span>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/work-life-balance.jpg"
                alt="Équilibre vie professionnelle et personnelle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 