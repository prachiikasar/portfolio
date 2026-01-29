import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Backend Developer Intern',
    company: 'Planeteye Farm AI Ltd.',
    period: 'Jan 2026 – Present',
    description: 'Selected as Backend Developer Intern. Completing vendor registration and onboarding. Contributing to API development, database design, and secure backend integrations.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Startech Infotech',
    period: 'Feb 2025 – Mar 2025',
    description: 'Spearheaded the development of scalable web applications, integrating modern UI/UX principles with robust backend logic. Optimized database queries and enhanced application performance.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    role: 'Front-end Development Intern',
    company: 'TechnoHacks Edutech',
    period: 'Aug 2024 – Sept 2024',
    description: 'Designed and implemented responsive user interfaces, ensuring cross-browser compatibility and adherence to accessibility standards. Collaborated with design teams to translate mockups into code.',
    color: 'from-teal-600 to-teal-800'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
        </Motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <div className="glass-card p-6 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`}></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-teal-600 transition-all">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <h4 className="text-md text-teal-300 font-medium mb-4 flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-slate-500 border-t border-slate-700/50 pt-4">
                     <Calendar size={12} className="mr-2" />
                     {exp.period}
                  </div>
                </div>
              </div>

              {/* Center Timeline Node */}
              <div className="hidden md:flex flex-col items-center justify-center w-2/12 relative">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10 ring-4 ring-slate-900`}></div>
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
              </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
