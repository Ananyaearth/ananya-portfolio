import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src="https://via.placeholder.com/300?text=Ananya"
            alt="Ananya Verma"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8 border-4 border-blue-500"
            whileHover={{ rotate: 360, transition: { duration: 1 } }}
          />
          <div>
            <p className="text-gray-300 mb-4">
              I’m Ananya Verma, pursuing an M.Tech in Computer Science (AI & ML) at IIIT Lucknow with a 9.04 GPA.
              With a B.Tech from the University of Lucknow (9.46 GPA), I specialize in Machine Learning, Deep Learning,
              and Large Language Models, building innovative solutions like RAG pipelines and cybersecurity frameworks.
            </p>
            <p className="text-gray-300 mb-4">
              Passionate about AI-driven storytelling and real-world applications, I’ve published research on
              LLM-powered NPCs and marine animal detection. In my free time, I solve 250+ LeetCode problems and
              compete on Kaggle (top 186 rank).
            </p>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
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
