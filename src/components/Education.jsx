import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Award, GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <GraduationCap size={150} />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500/10 rounded-xl mr-4 text-teal-400">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-white">B.Tech in Computer Science</h4>
                  <p className="text-teal-300 font-medium">Sandip University</p>
                </div>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold border border-teal-500/30">
                  CGPA: 8.31
                </span>
              </div>
              <div className="flex items-center text-slate-400 text-sm mt-4">
                <Calendar size={14} className="mr-2" />
                2021 – 2026
              </div>
            </div>
          </Motion.div>

          {/* Certifications Card */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card relative overflow-hidden flex flex-col h-full"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <Award size={150} />
            </div>

            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500/10 rounded-xl mr-4 text-teal-400">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors flex items-center justify-between group">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Full Stack Development</h4>
                  <p className="text-slate-400 text-sm">Disha Computer</p>
                </div>
                <Award size={20} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
              </div>
              
              <div className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors flex items-center justify-between group">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">AI Foundation</h4>
                  <p className="text-slate-400 text-sm">HP LIFE</p>
                </div>
                <Award size={20} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
