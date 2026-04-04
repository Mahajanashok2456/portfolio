'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const fallbackSkills = [
  {
    iconName: 'Cpu',
    title: 'AI/ML Deep Tech',
    description: 'PyTorch, LangChain, HuggingFace, RAG, Generative AI',
  },
  {
    iconName: 'Layers',
    title: 'Full Stack',
    description: 'React, Next.js, TypeScript, FastAPI',
  },
  {
    iconName: 'Database',
    title: 'Databases',
    description: 'MongoDB, Supabase, SQL',
  }
];

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setSkills(data.data);
        } else {
          setSkills(fallbackSkills);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills(fallbackSkills);
      }
      setLoading(false);
    };
    fetchSkills();
  }, []);

  if (loading) return null;

  return (
    <section id="skills" className="py-24 md:py-48 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-minimal">Specialized Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mt-16">
          {skills.map((skill, index) => {
            const Icon = LucideIcons[skill.iconName] || LucideIcons.Cpu;
            return (
              <motion.div
                key={index}
                className="group flex flex-col p-8 border border-black/5 hover:border-black/10 transition-colors bg-gray-50/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="mb-6 text-black/40 group-hover:text-black transition-colors">
                  <Icon size={32} strokeWidth={1} />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4">{skill.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
