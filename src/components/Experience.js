'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Artificial Intelligence Engineer',
    company: 'RoamVerse Solutions Pvt. Ltd. · Remote',
    period: 'Aug 2025 - Present',
    description: [
      'Engineered AI-driven web applications using FastAPI and React, integrating generative model APIs for multimodal automation.',
      'Optimized MongoDB Atlas queries and CI/CD workflows, reducing API latency by 30% and supporting 12k+ requests per day.',
      'Built AI Guru Multibot with Gemini Pro Vision integration.',
      'Developed AI Quiz Generator using generative APIs.',
      'Created Connect - real-time chat platform with Socket.IO.'
    ],
    skills: ['FastAPI', 'React', 'Gemini Pro Vision', 'MongoDB', 'Socket.IO']
  },
  {
    role: 'AI/ML Intern',
    company: 'SURE TRUST',
    period: 'Jul 2025 - Present',
    description: [
      'Contributed to building, training, and deploying AI/ML models while supporting scalable solutions for real-world applications.'
    ],
    skills: ['AI/ML', 'Model Deployment']
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Flora Edze · Hyderabad, Remote',
    period: 'Mar 2025 - Jun 2025',
    description: [
      'Developed full-stack web applications using modern technologies and frameworks, focusing on scalable and efficient solutions.'
    ],
    skills: ['Full Stack', 'Web Development']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-16 md:mb-24">Career <br /><span className="text-white/30">Milestones</span></h2>

        <div className="space-y-6 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group py-10 md:py-16 border-b border-white/10 flex flex-col lg:grid lg:grid-cols-[1fr_2.2fr] gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <span className="text-[0.65rem] font-black text-white/40 uppercase tracking-[0.3em] mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2 group-hover:text-white/70 transition-colors leading-[0.9]">
                  {exp.role}
                </h3>
                <p className="text-lg md:text-xl font-bold text-white/60 mb-6 md:mb-8">{exp.company}</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white text-black px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[0.6rem] font-black uppercase tracking-widest whitespace-nowrap">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-6 md:space-y-8">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex gap-4 md:gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 md:mt-3 shrink-0" />
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
