import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Spans 2 cols */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                {[
                    { icon: Mail, label: 'Email', value: 'prachikasar0712@gmail.com', link: 'mailto:prachikasar0712@gmail.com' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'in/prachi-kasar', link: 'https://www.linkedin.com/in/prachi-kasar' },
                    { icon: Github, label: 'GitHub', value: 'github.com/prachiikasar', link: 'https://github.com/prachiikasar' },
                    { icon: MapPin, label: 'Location', value: 'Nashik, India', link: null }
                ].map((item, index) => (
                    <a 
                    key={index} 
                    href={item.link || '#'}
                    className="flex items-center group p-2 rounded-lg hover:bg-slate-800/50 transition-all"
                    >
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-teal-400 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-teal-500/10">
                        <item.icon size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-slate-400">{item.label}</h4>
                        <span className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                            {item.value.replace('https://', '')}
                        </span>
                    </div>
                    </a>
                ))}
                </div>
            </div>
          </Motion.div>

          {/* Contact Form - Spans 3 cols */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -mr-8 -mt-8"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.name.value.trim();
                    const email = form.email.value.trim();
                    const message = form.message.value.trim();
                    const validEmail = email.includes('@');
                    if (!name || !email || !message || !validEmail) {
                      alert('Please enter your name, a valid email, and a message.');
                      return;
                    }
                    const subject = `Portfolio Contact from ${name}`;
                    const body = `${message}\n\nFrom: ${name} <${email}>`;
                    window.location.href = `mailto:prachikasar0712@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="peer w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-transparent transition-all"
                          placeholder="Name"
                          required
                        />
                        <label 
                            htmlFor="name" 
                            className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:bg-slate-900 peer-focus:px-1"
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="peer w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-transparent transition-all"
                          placeholder="Email"
                          required
                        />
                         <label 
                            htmlFor="email" 
                            className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:bg-slate-900 peer-focus:px-1"
                        >
                            Your Email
                        </label>
                    </div>
                </div>
                
                <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="peer w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-transparent transition-all resize-none"
                      placeholder="Message"
                      required
                    ></textarea>
                     <label 
                        htmlFor="message" 
                        className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:bg-slate-900 peer-focus:px-1"
                    >
                        Your Message
                    </label>
                </div>
                
                <button
                    type="submit"
                    className="group w-full md:w-auto bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all font-medium flex items-center justify-center transform hover:-translate-y-1"
                >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
