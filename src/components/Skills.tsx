import React from 'react';
import { Code2, Database, PenTool as Tool, Palette } from 'lucide-react';

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript'],
  Backend: ['Python'],
  Tools: ['Git', 'GitHub'],
  Other: ['Photo & Video Editing'],
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category === 'Frontend' && <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                {category === 'Backend' && <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                {category === 'Tools' && <Tool className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                {category === 'Other' && <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}