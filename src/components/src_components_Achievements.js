import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    'Qualified GATE Data Science and AI (2024 & 2025)',
    'Qualified GATE Computer Science (2024 & 2025)',
    'Qualified CEED (2024)',
    'Top 186 in Kaggle AI vs Human-Generated Images',
    '250+ Problems Solved on LeetCode & GFG',
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg text-center border-2 border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;