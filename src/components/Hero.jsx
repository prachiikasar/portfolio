import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer | AI Enthusiast";
  const [index, setIndex] = useState(0);
  const [showInitials, setShowInitials] = useState(false);
  const photoSrc = '/profile.jpg';

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="flex-1 text-center md:text-left">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 font-medium text-sm mb-6">
              Available for Work
            </div>
            <h2 className="text-slate-300 font-medium text-xl mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Prachi <span className="text-gradient">Kasar</span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-slate-300 mb-6 h-12 flex items-center justify-center md:justify-start">
              <span>{text}</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Crafting robust web applications and exploring the frontiers of Artificial Intelligence. Based in Nashik, India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group relative cursor-pointer inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-full font-medium overflow-hidden transition-all hover:bg-teal-700 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-all"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </Motion.div>
        </div>
        
        <div className="flex-1 mt-16 md:mt-0 flex justify-center relative">
            <Motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
            >
                {/* Abstract Decorative Elements behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-700 to-slate-800 rounded-full opacity-15 blur-2xl animate-pulse"></div>
                <div className="absolute inset-4 bg-slate-900 rounded-full z-10 border-2 border-slate-700/50 ring-4 ring-teal-500/20 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual image, using a stylish initial avatar for now */}
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-800/10 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {!showInitials ? (
                          <img
                            src={photoSrc}
                            alt="Profile photo"
                            className="w-full h-full object-cover rounded-full"
                            onError={() => setShowInitials(true)}
                          />
                        ) : (
                          <span className="text-8xl font-bold text-slate-600 select-none group-hover:text-teal-500/20 transition-colors duration-500">PK</span>
                        )}
                    </div>
                </div>
                
                {/* Floating Tech Icons (Decorative) */}
                <Motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg z-20"
                >
                    <span className="text-2xl">⚛️</span>
                </Motion.div>
                <Motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg z-20"
                >
                    <span className="text-2xl">🤖</span>
                </Motion.div>
            </Motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
