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
    <section id="skills" className="py-12 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-8 md:mb-24">Specialized SaaS <br /><span className="text-white/30 tracking-tight">& AI Engineering</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`group relative p-4 md:p-6 rounded-[1.5rem] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-transparent ${skill.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[1.5rem] transition-colors duration-500 mask-image-blob" />

              <div className="relative z-10">
                <div className="mb-3 md:mb-4 transition-transform duration-500 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={60}
                    height={60}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <h3 className="text-sm md:text-lg font-black mb-1 md:mb-2 tracking-tighter uppercase leading-tight">{skill.title}</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-lg font-medium">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
