import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-fuchsia-500 dark:text-fuchsia-400 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src="/image.jpg" // Ensure this file exists in public/
            alt="Ananya Verma"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8 border-4 border-purple-800 dark:border-purple-500"
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // Fallback if image fails
          />
          <div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              I’m Ananya Verma, pursuing an M.Tech in Computer Science (AI & ML) at IIIT Lucknow with a 9.04 GPA...
            </p>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Passionate about AI-driven storytelling and real-world applications...
            </p>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-block bg-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600"
              whileHover={{ scale: 1.1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
