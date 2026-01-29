import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Healthcare Chatbot',
    description: 'AI-powered chatbot for health queries using Machine Learning & Generative AI concepts. Provides instant responses and preliminary health guidance.',
    tech: ['Python', 'ML', 'GenAI', 'NLP'],
    github: '#', 
    demo: null,
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Interactive Weather Application',
    description: 'Real-time weather application providing accurate forecasts and weather data with a beautiful, responsive interface.',
    tech: ['React', 'JavaScript', 'CSS', 'Weather API'],
    github: '#',
    demo: null,
    color: 'from-teal-600 to-teal-800'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring AI-driven solutions and responsive web applications.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: 1000 }}
              className="glass-card rounded-2xl overflow-hidden group transform-gpu"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="p-2 rounded-full bg-slate-700/50 text-slate-300 hover:bg-white hover:text-slate-900 transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="p-2 rounded-full bg-slate-700/50 text-slate-300 hover:bg-white hover:text-slate-900 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-teal-600 transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 rounded-full text-xs font-medium uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
