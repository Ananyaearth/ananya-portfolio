import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.span
              className="text-2xl font-bold text-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              Ananya Verma
            </motion.span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
            <a href="#research" className="text-gray-300 hover:text-blue-400 transition">Research</a>
            <a href="#achievements" className="text-gray-300 hover:text-blue-400 transition">Achievements</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700"
              whileHover={{ rotate: 360 }}
            >
              {isDark ? '🌞' : '🌙'}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
