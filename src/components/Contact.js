'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "916305447461";
    const formattedText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-6">Connect</h2>
            <h3 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
              LET&apos;S SCALE <br /> <span className="text-white/20">YOUR VISION.</span>
            </h3>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Available for high-impact AI consultations and premium full-stack development projects.
            </p>

            <div className="space-y-4">
              <a href="mailto:mahajanashok78@gmail.com" className="text-xl md:text-2xl font-black text-white block hover:text-white/70 transition-colors uppercase tracking-tight break-all">
                mahajanashok78@gmail.com
              </a>
              <p className="text-lg md:text-xl font-bold text-white/40 tracking-widest">+91 63054 47461</p>
              <p className="text-base md:text-lg font-bold text-white/40 tracking-widest uppercase">Hyderabad, Telangana, India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-2">
                <label className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest px-1">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="EX. BRUCE WAYNE"
                  required
                  className="bg-transparent border-b-2 border-white/10 py-3 md:py-4 text-xl md:text-2xl font-bold text-white outline-none focus:border-white transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest px-1">YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="EX. BRUCE@WAYNE.COM"
                  required
                  className="bg-transparent border-b-2 border-white/10 py-3 md:py-4 text-xl md:text-2xl font-bold text-white outline-none focus:border-white transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest px-1">BRIEF MESSAGE</label>
                <textarea
                  placeholder="TELL ME ABOUT YOUR VISION..."
                  required
                  rows="2"
                  className="bg-transparent border-b-2 border-white/10 py-3 md:py-4 text-xl md:text-2xl font-bold text-white outline-none focus:border-white transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-between w-full py-6 md:py-8 border-b-4 border-white text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-white/70 hover:border-white/70 transition-all cursor-pointer"
              >
                Send via WhatsApp <FaWhatsapp className="group-hover:scale-125 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
