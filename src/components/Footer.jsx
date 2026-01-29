import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">PK</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/prachiikasar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prachi-kasar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:prachikasar0712@gmail.com" aria-label="Email" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm flex items-center">
            <p>© {new Date().getFullYear()} Prachi Kasar. Built with React & Tailwind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
