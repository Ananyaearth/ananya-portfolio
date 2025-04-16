import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-8 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-300 dark:text-gray-400 mb-4">
            © 2025 Ananya Verma. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#home" className="text-fuchsia-500 dark:text-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition">Home</a>
            <a href="#about" className="text-fuchsia-500 dark:text-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition">About</a>
            <a href="#projects" className="text-fuchsia-500 dark:text-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition">Projects</a>
            <a href="#contact" className="text-fuchsia-500 dark:text-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
