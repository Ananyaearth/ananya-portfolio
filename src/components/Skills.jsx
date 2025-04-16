import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

function Skills() {
  const data = [
    { skill: 'Python', level: 95 },
    { skill: 'Machine Learning', level: 90 },
    { skill: 'Deep Learning', level: 85 },
    { skill: 'NLP', level: 80 },
    { skill: 'Computer Vision', level: 75 },
    { skill: 'Data Science', level: 85 },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-fuchsia-500 dark:text-fuchsia-400 mb-8">Technical Skills</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#4B5EAA dark:#4B5EAA" />
            <PolarAngleAxis dataKey="skill" stroke="#ffffff dark:#ffffff" fill="#ffffff dark:#ffffff" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ffffff dark:#ffffff" />
            <Radar
              name="Skills"
              dataKey="level"
              stroke="#fuchsia-500"
              fill="#CBEEEA"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['C/C++', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Hugging Face', 'PostgreSQL', 'Git', 'MLOps'].map((skill) => (
            <div key={skill} className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg text-center text-gray-300 dark:text-gray-400 hover:bg-FFDDBB dark:hover:bg-fuchsia-700 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
