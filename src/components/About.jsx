import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code, Cpu, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Main Bio Card - Spans 2 columns */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bento-card flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="text-teal-400" size={24} />
              Who I Am
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              I am a <span className="text-teal-400 font-semibold">Results-oriented Full-Stack Developer</span> with foundational skills in <span className="text-teal-400 font-semibold">AI & Data Science</span>.
              My journey is defined by a passion for building scalable, user-friendly web applications and exploring the limitless potential of AI-powered solutions.
              I thrive on solving complex problems and constantly pushing the boundaries of what's possible on the web.
            </p>
          </Motion.div>

          {/* Tech Stack Focus */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code size={120} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code className="text-teal-400" />
              Web Dev
            </h3>
            <p className="text-slate-400 mb-4">Creating modern, responsive, and performant web applications using the latest technologies.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">React</span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">Tailwind</span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">Node.js</span>
            </div>
          </Motion.div>

          {/* AI Focus */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="text-teal-400" />
              AI Enthusiast
            </h3>
             <p className="text-slate-400 mb-4">Exploring Machine Learning models and Generative AI to build intelligent solutions.</p>
             <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">Python</span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">TensorFlow</span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20">NLP</span>
            </div>
          </Motion.div>

          {/* Location/Global Mindset - Spans 2 columns */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bento-card flex items-center justify-between"
          >
            <div className="flex-1">
               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="text-teal-400" />
                Based in Nashik, India
              </h3>
              <p className="text-slate-400">Open to remote opportunities and global collaborations. Let's build something amazing together.</p>
            </div>
            <div className="hidden sm:block w-32 h-32 bg-slate-700/30 rounded-full relative overflow-hidden ml-4">
                {/* Abstract Globe/Map representation */}
                <div className="absolute inset-0 border-2 border-slate-600/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 border border-slate-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
