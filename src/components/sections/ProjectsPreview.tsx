import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainer } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Optimisation de la Chaîne d'Approvisionnement",
    description: "Réduction des coûts logistiques de 23% grâce à l'optimisation des itinéraires et à la consolidation des expéditions pour un fabricant industriel.",
    image: "/images/project-logistics.jpg",
    tags: ["Logistique", "Optimisation", "Réduction des coûts"],
    link: "/projects/supply-chain-optimization"
  },
  {
    id: 2,
    title: "Implémentation SAP SCM",
    description: "Direction de l'implémentation de SAP SCM pour une entreprise de distribution, améliorant la visibilité des stocks et réduisant les ruptures de 35%.",
    image: "/images/project-sap.jpg",
    tags: ["SAP", "Technologie", "Gestion des stocks"],
    link: "/projects/sap-implementation"
  },
  {
    id: 3,
    title: "Stratégie d'Approvisionnement Durable",
    description: "Développement d'une stratégie d'approvisionnement durable réduisant l'empreinte carbone de 18% tout en maintenant la compétitivité des coûts.",
    image: "/images/project-sustainable.jpg",
    tags: ["Durabilité", "Stratégie", "RSE"],
    link: "/projects/sustainable-sourcing"
  }
];

export default function ProjectsPreview() {
  return (
    <section id="projects-preview" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
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
            Projets
          </motion.span>
          
          <motion.h2 
            variants={fadeInUpVariant(0.2)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mes <span className="text-blue-600 dark:text-blue-500">Réalisations</span> Récentes
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant(0.3)}
            className="text-gray-600 dark:text-gray-300"
          >
            Découvrez quelques-uns des projets de chaîne d'approvisionnement sur lesquels j'ai travaillé et les résultats obtenus.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Voir le projet
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
          <Link 
            href="/projects" 
            className="btn-primary inline-flex items-center px-6 py-3 rounded-lg"
          >
            Voir tous les projets
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 