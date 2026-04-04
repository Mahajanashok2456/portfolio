'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/megaphone-3d-icon-png-download-3286977.png',
    title: 'Technical Coordinator',
    subtitle: 'Strategic Leadership',
    description: 'Led technical coordination for major college events including Avinyotsav Tech Fest 2024, TKR Hack Conquest 2023, and TKR Hackathon 2025.'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/trophy-3d-icon-png-download-5174884.png',
    title: 'Hackathon Participation',
    subtitle: 'Innovation Drive',
    description: 'Participated in Smart India Hackathon (SIH) 2023 & 2025 and MSME Innovation Competitions, showcasing innovative solutions.'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/presentation-3d-icon-png-download-10099535.png',
    title: 'Project Presentation',
    subtitle: 'Knowledge Exchange',
    description: 'Presented innovative projects at Avinyotsav 2024, demonstrating technical expertise and communication skills.'
  }
];

export default function Achievements() {
  return (
    <section id="trusted" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-16 md:mb-24">Trusted by <br /><span className="text-white/30 tracking-tight">Industry Experts</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="mb-6 relative h-16 w-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon — achievement by Mahajan Ashok`}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <h4 className="text-[0.5rem] font-black text-white/40 uppercase tracking-[0.2em] mb-2">{item.subtitle}</h4>
                <h3 className="text-xl font-black mb-3 tracking-tighter uppercase leading-tight text-white">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
