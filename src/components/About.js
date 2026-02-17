'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.4em] mb-4 md:mb-6">Why Visionary Founders Trust</h2>
            <h3 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-10 leading-[1.0] md:leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
              MAHAJAN {'\n'} <span className="text-white/20">ASHOK.</span>
            </h3>

            <div className="space-y-6 md:space-y-8 text-base md:text-xl text-white/60 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              <p>
                As a specialized <span className="text-white">Full Stack SaaS & AI Architect</span>, I don&apos;t just deliver code—I deliver competitive advantage. I build <span className="text-white">Agentic Workflows</span>, <span className="text-white">RAG Engines</span>, and <span className="text-white">Scalable SaaS Platforms</span> that dominate markets.
              </p>
              <p>
                B.Tech in Computer Science (Data Science) at TKR College of Engineering and Technology, Hyderabad with CGPA 8.06/10. Former AI Engineer Intern at RoamVerse Solutions.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 md:gap-16 mt-12 md:mt-16">
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white">4+</h4>
                <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest mt-2">Core Tech Stacks</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white">10+</h4>
                <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest mt-2">AI Projects Live</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-110" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 contrast-125">
                <Image
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-png-download-3738664.png"
                  alt="3D Developer Avatar"
                  fill
                  className="object-contain scale-110 drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
