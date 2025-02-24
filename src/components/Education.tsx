import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B. Tech in Computer Science and Engineering',
    institution: 'SVS Group of Institutions',
    location: 'Hanamkonda',
    year: '2022-2026',
    score: '7.39',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'SR Junior College',
    location: 'Hanamkonda',
    year: '2020-2022',
    score: '88.9',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Hill Fort High School',
    location: 'Peddapalli',
    year: '2019-2020',
    score: '10 GPA',
  },
];

export default function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {edu.year} • Score: {edu.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}