import React from 'react';
import { motion } from 'framer-motion';

function Research() {
  const research = [
    {
      title: 'LLM-Powered Context-Aware NPCs with Memory & Vision (Thesis)',
      description: 'Integrated LLMs with Computer Vision for NPCs with context retention and vision-based interactions.',
      link: '#',
    },
    {
      title: 'Comparative Analysis of Machine Learning Algorithms for Marine Animal Detection',
      description: 'Achieved 92% accuracy with CNNs, published in SSRN.',
      link: '#',
    },
  ];

  return (
    <section id="research" className="py-16 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-fuchsia-500 dark:text-fuchsia-400 mb-8">Research & Publications</h2>
        <div className="space-y-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 dark:bg-gray-700 p-6 rounded-lg shadow-md dark:shadow-fuchsia-500/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold text-fuchsia-500 dark:text-fuchsia-400 mb-2">{item.title}</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-500 dark:text-fuchsia-400 hover:underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
