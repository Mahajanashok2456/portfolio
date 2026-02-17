'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-3d-icon-png-download-3975764.png',
    title: 'AI/ML Deep Tech',
    description: 'PyTorch, LangChain, HuggingFace, RAG, Generative AI',
    span: 'col-span-2 md:col-span-2'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-png-download-4741063.png',
    title: 'Full Stack',
    description: 'React, Next.js, TypeScript, FastAPI',
    span: 'col-span-2 md:col-span-1'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/database-3d-icon-png-download-12045719.png',
    title: 'Databases',
    description: 'MongoDB, Supabase, SQL',
    span: 'col-span-2 md:col-span-1'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/artificial-intelligence-3d-icon-png-download-3975768.png',
    title: 'NLP & Vision',
    description: 'Transformers, Vision Transformers (ViT)',
    span: 'col-span-2 md:col-span-2'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/bulb-3d-icon-png-download-5407844.png',
    title: 'Prompt Engineering',
    description: 'Gemini, LangChain APIs',
    span: 'col-span-2 md:col-span-1'
  },
  {
    icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/cloud-sync-3d-icon-png-download-8747486.png',
    title: 'DevOps',
    description: 'Git, Vercel, Railway, CI/CD',
    span: 'col-span-2 md:col-span-1'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-16 md:mb-24">Technology <br /><span className="text-white/30 tracking-tight">Infrastructure</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-transparent ${skill.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[2rem] md:rounded-[3rem] transition-colors duration-500 mask-image-blob" />

              <div className="relative z-10">
                <div className="mb-6 md:mb-8 transition-transform duration-500 h-20 w-20 md:h-28 md:w-28 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={100}
                    height={100}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 tracking-tighter uppercase leading-tight">{skill.title}</h3>
                <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-lg font-medium">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
