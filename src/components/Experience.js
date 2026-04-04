'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const fallbackExperiences = [
  {
    role: 'Artificial Intelligence Engineer',
    company: 'RoamVerse Solutions Pvt. Ltd.',
    location: 'Remote',
    period: 'Aug 2025 - Nov 2025',
    description: 'Engineered AI-driven web apps using FastAPI & React. Integrated generative models for multimodal automation. Optimized MongoDB queries reducing latency by 30%.',
  },
  {
    role: 'AI/ML Intern',
    company: 'SURE TRUST',
    location: 'Remote',
    period: 'Jul 2025 - Present',
    description: 'Contributed to building and deploying AI/ML models. Supported scalable solutions for real-world applications.',
  }
];

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experience');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setExperiences(data.data);
        } else {
          setExperiences(fallbackExperiences);
        }
      } catch (error) {
        console.error('Error fetching experiences:', error);
        setExperiences(fallbackExperiences);
      }
      setLoading(false);
    };
    fetchExperiences();
  }, []);

  if (loading) return null;

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-minimal">Work Experience</h2>

        <div className="mt-24 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="md:col-span-1">
                <span className="text-black/40 font-bold text-xs uppercase tracking-[0.2em]">
                  {exp.period}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight mb-2">
                  {exp.role}
                </h3>
                <p className="text-lg font-bold text-black/60 mb-6 uppercase tracking-wider">
                  {exp.company} <span className="text-black/20 font-normal ml-2">/ {exp.location}</span>
                </p>
                <p className="text-black/60 text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
