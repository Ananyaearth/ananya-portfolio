import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'SHL Assessment Recommendation Engine',
      description: 'A RAG pipeline using Selenium, FAISS, and LLMs to recommend SHL assessments from natural language queries. Deployed with Streamlit and FastAPI.',
      tech: ['Python', 'Selenium', 'FAISS', 'Streamlit', 'FastAPI'],
      link: 'https://newshl.streamlit.app/',
      category: 'NLP',
    },
    {
      title: 'NIST Database Information Extraction Framework',
      description: 'An NLP system extracting cybersecurity entities from NIST CVE records, with a Streamlit dashboard for real-time alerts and graphs.',
      tech: ['Python', 'Hugging Face', 'spaCy', 'Streamlit', 'NetworkX'],
      link: '#',
      category: 'Cybersecurity',
    },
    {
      title: 'Beats and Books',
      description: 'An AI-driven music recommender based on book preferences, built with Flask and Scikit-learn.',
      tech: ['Flask', 'Scikit-learn', 'Pandas', 'NLTK'],
      link: '#',
      category: 'Recommender Systems',
    },
    {
      title: 'Khwaab: AI Dream Story Generator',
      description: 'An NLP-powered story generator creating coherent dream narratives using GPT-2 and Hugging Face.',
      tech: ['GPT-2', 'Hugging Face', 'PyTorch', 'Flask'],
      link: '#',
      category: 'NLP',
    },
  ];

  const [filter, setFilter] = useState('All');

  const categories = ['All', 'NLP', 'Cybersecurity', 'Recommender Systems'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Projects</h2>
        <div className="flex space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-400 mb-4">
                <strong>Tech:</strong> {project.tech.join(', ')}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;