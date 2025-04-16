import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isDark, setIsDark] = useState(true); // Start in dark mode

  const toggleTheme = () => {
    const htmlElement = document.documentElement; // Explicitly get <html>
    const isCurrentlyDark = htmlElement.classList.contains('dark');
    htmlElement.classList.toggle('dark');
    setIsDark(!isCurrentlyDark); // Update state based on current class
    console.log('Theme toggled. Dark mode:', !isCurrentlyDark, 'HTML classList:', htmlElement.classList); // Enhanced debug log
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.span
              className="text-2xl font-bold text-fuchsia-500 dark:text-fuchsia-400"
              whileHover={{ scale: 1.1 }}
            >
              Ananya Verma
            </motion.span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Home</a>
            <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">About</a>
            <a href="#skills" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Skills</a>
            <a href="#projects" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Projects</a>
            <a href="#research" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Research</a>
            <a href="#achievements" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Achievements</a>
            <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition">Contact</a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 text-gray-900 dark:text-gray-300"
              whileHover={{ rotate: 360 }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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
