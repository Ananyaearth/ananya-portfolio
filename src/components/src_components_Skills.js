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
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Technical Skills</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#4B5EAA" />
            <PolarAngleAxis dataKey="skill" stroke="#ffffff" fill="#ffffff" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ffffff" />
            <Radar
              name="Skills"
              dataKey="level"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['C/C++', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Hugging Face', 'PostgreSQL', 'Git', 'MLOps'].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center text-gray-300 hover:bg-blue-700 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;