import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariant, slideInFromLeft, slideInFromRight } from '@/lib/utils';

export default function AboutPreview() {
  return (
    <section id="about-preview" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromLeft(0.2)}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/supply-chain-professional.jpg"
                alt="Supply Chain Professional"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 max-w-[240px]"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">25+</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cost Savings</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">$2.5M+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70"></div>
          </motion.div>
          
          {/* Right column - Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.span 
              variants={fadeInUpVariant(0.1)}
              className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={fadeInUpVariant(0.2)}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Driving Efficiency in <span className="text-blue-600 dark:text-blue-500">Global Supply Chains</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUpVariant(0.3)}
              className="text-gray-600 dark:text-gray-300"
            >
              As a dedicated Supply Chain Management professional, I specialize in optimizing complex logistics networks, implementing lean inventory practices, and leveraging data analytics to drive strategic decision-making.
            </motion.p>
            
            <motion.p 
              variants={fadeInUpVariant(0.4)}
              className="text-gray-600 dark:text-gray-300"
            >
              With expertise in procurement, distribution, and supply chain technology, I help organizations reduce costs, improve service levels, and build resilient supply chains that can adapt to changing market conditions.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariant(0.5)}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Inventory Optimization",
                  "Logistics Management",
                  "Procurement Strategy",
                  "Demand Forecasting",
                  "Supplier Relationship Management",
                  "Supply Chain Analytics",
                  "Process Improvement",
                  "ERP Implementation"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant(0.6)}
              className="pt-4"
            >
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 