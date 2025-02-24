import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Todos Application',
    description: 'A tracking system to simplify task management',
    github: 'https://github.com/akashakula327/Todo-list',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Rock Paper Scissor Game',
    description: 'An interactive game where users play against the computer with dynamic gameplay and enhanced user interaction',
    github: 'https://github.com/akashakula327/Rock_Paper_scissors_game',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Food Munch Website',
    description: 'A responsive restaurant website featuring seamless online ordering and delivery integration',
    github: 'https://github.com/akashakula327/Food-Munch',
    tech: ['HTML', 'CSS', 'Bootstrap'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}