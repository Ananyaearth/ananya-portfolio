import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700"
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-blue-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Building the Future with AI
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I’m Ananya Verma, an AI & ML enthusiast crafting intelligent solutions.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explore My Work
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
