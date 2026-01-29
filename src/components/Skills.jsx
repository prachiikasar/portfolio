import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: Terminal,
    items: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
    color: 'text-teal-300',
    bg: 'bg-teal-500/10'
  },
  {
    category: 'Frameworks',
    icon: Layout,
    items: ['React', 'Tailwind CSS', 'Bootstrap'],
    color: 'text-teal-300',
    bg: 'bg-teal-500/10'
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL'],
    color: 'text-teal-300',
    bg: 'bg-teal-500/10'
  },
  {
    category: 'Tools',
    icon: Server,
    items: ['Git', 'GitHub', 'Firebase', 'CI/CD'],
    color: 'text-teal-300',
    bg: 'bg-teal-500/10'
  },
  {
    category: 'Specialization',
    icon: Cpu,
    items: ['Full-Stack Development', 'AI/ML Foundations'],
    color: 'text-teal-300',
    bg: 'bg-teal-500/10'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bento-card group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl ${skill.bg} ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-slate-700/30 text-slate-300 border border-slate-600/30 rounded-lg text-sm font-medium group-hover:bg-slate-700/50 group-hover:border-slate-500/50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
