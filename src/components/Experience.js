'use client';

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const experiences = [
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
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Flora Edze',
    location: 'Hyderabad, Remote',
    period: 'Mar 2025 - Jun 2025',
    description: 'Developed full-stack web applications using modern technologies, focusing on scalable and efficient solutions.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 bg-black fade-in-section">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div className="flex flex-col items-start gap-0 mb-16 md:mb-24">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="m-0 leading-[0.8]"
            textClassName="text-white uppercase tracking-tighter text-left"
          >
            WORK
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="m-0 leading-[0.8]"
            textClassName="text-white/30 uppercase tracking-tighter text-left"
          >
            EXPERIENCE
          </ScrollFloat>
        </div>

        <div className="relative border-l-2 border-accent/20 ml-3 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                <span className="text-accent font-black text-sm uppercase tracking-widest min-w-[140px]">
                  {exp.period}
                </span>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-base md:text-lg font-bold text-white/70 mb-4">
                    {exp.company} <span className="text-white/30">• {exp.location}</span>
                  </p>
                  <p className="text-white/70 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
