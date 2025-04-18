import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-fuchsia-500 dark:text-fuchsia-400 mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form action="https://formspree.io/f/your-form-id" method="POST">
              <div className="mb-4">
                <label className="block text-gray-300 dark:text-gray-400 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 dark:bg-gray-600 rounded-lg text-white dark:text-gray-300 border border-gray-600 dark:border-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 dark:text-gray-400 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 dark:bg-gray-600 rounded-lg text-white dark:text-gray-300 border border-gray-600 dark:border-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 dark:text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 bg-gray-700 dark:bg-gray-600 rounded-lg text-white dark:text-gray-300 border border-gray-600 dark:border-gray-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-600 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="mailto:mes240183@iiitl.ac.in" className="text-fuchsia-500 dark:text-fuchsia-400 hover:underline">mes240183@iiitl.ac.in</a>
            <a href="https://linkedin.com/in/ananya-verma" className="text-fuchsia-500 dark:text-fuchsia-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/Ananyaearth" className="text-fuchsia-500 dark:text-fuchsia-400 hover:underline">GitHub</a>
            <a href="https://kaggle.com/ananya-verma" className="text-fuchsia-500 dark:text-fuchsia-400 hover:underline">Kaggle</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
