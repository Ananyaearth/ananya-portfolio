import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-4">
            © 2025 Ananya Verma. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#home" className="text-blue-400 hover:text-blue-300">Home</a>
            <a href="#about" className="text-blue-400 hover:text-blue-300">About</a>
            <a href="#projects" className="text-blue-400 hover:text-blue-300">Projects</a>
            <a href="#contact" className="text-blue-400 hover:text-blue-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;