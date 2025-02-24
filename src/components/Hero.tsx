import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-fade-in">
              Front-End Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A passionate undergraduate developer crafting beautiful and responsive web experiences
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <a
                href="https://github.com/akashakula327"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/akashakula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:akashakula327@gmail.com"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919014572554"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/dcble6mbv/image/upload/v1727156658/profileimage.jpg"
              alt="Web Developer"
              className="rounded-2xl shadow-2xl w-[80%] max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}