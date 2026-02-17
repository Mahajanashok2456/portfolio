'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Database, Eye, Terminal, GitBranch } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'AI/ML Deep Tech',
    description: 'PyTorch, LangChain, HuggingFace, RAG, Generative AI',
    span: 'col-span-1 md:col-span-1'
  },
  {
    icon: Layers,
    title: 'Full Stack',
    description: 'React, Next.js, TypeScript, FastAPI',
    span: 'col-span-1 md:col-span-1'
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'MongoDB, Supabase, SQL',
    span: 'col-span-1 md:col-span-1'
  },
  {
    icon: Eye,
    title: 'NLP & Vision',
    description: 'Transformers, Vision Transformers (ViT)',
    span: 'col-span-1 md:col-span-1'
  },
  {
    icon: Terminal,
    title: 'Prompt Engineering',
    description: 'Gemini, LangChain APIs',
    span: 'col-span-1 md:col-span-1'
  },
  {
    icon: GitBranch,
    title: 'DevOps',
    description: 'Git, Vercel, Railway, CI/CD',
    span: 'col-span-1 md:col-span-1'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 bg-black overflow-hidden border-t border-white/5 fade-in-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-12 md:mb-16">
          Specialized SaaS <br />
          <span className="text-white/35 tracking-tight">& AI Engineering</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-start justify-between h-56 transition-all duration-500 hover:border-accent/40 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 bg-white/5 p-3 rounded-lg text-white mb-4 group-hover:text-accent transition-colors">
                <skill.icon size={28} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-[0.85rem] font-bold text-white tracking-[0.1em] uppercase mb-1.5">{skill.title}</h3>
                <p className="text-[0.75rem] text-[#888] font-medium leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
