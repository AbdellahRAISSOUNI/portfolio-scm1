import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

// Define skills data
const skillsData = [
  {
    category: "Gestion de la Chaîne d'Approvisionnement",
    skills: [
      { name: "Planification de la demande", level: 95 },
      { name: "Gestion des stocks", level: 90 },
      { name: "Optimisation logistique", level: 85 },
      { name: "Sourcing stratégique", level: 80 },
    ]
  },
  {
    category: "Outils & Technologies",
    skills: [
      { name: "SAP SCM", level: 85 },
      { name: "Microsoft Dynamics", level: 75 },
      { name: "Tableau / Power BI", level: 80 },
      { name: "Python pour l'analyse de données", level: 70 },
    ]
  },
  {
    category: "Méthodologies",
    skills: [
      { name: "Lean Six Sigma", level: 90 },
      { name: "Agile / Scrum", level: 75 },
      { name: "Gestion de projet", level: 85 },
      { name: "Amélioration continue", level: 90 },
    ]
  }
];

export default function SkillsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills-preview" className="section-padding bg-gray-50 dark:bg-gray-800 overflow-hidden">
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
            Compétences
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mon <span className="text-blue-600 dark:text-blue-500">Expertise</span> Professionnelle
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Un aperçu des compétences que j'ai développées au cours de ma carrière dans la gestion de la chaîne d'approvisionnement.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/skills" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
          >
            Voir toutes mes compétences
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 