'use client';

import { motion } from 'framer-motion';

const education = [
  {
    school: 'TKR College of Engineering & Technology',
    degree: 'B.Tech in CSE (Data Science)',
    period: '2022 – Present',
    description: 'Specializing in computer vision and NLP architectures. Active in technical coordination and core hackathons.',
    grade: 'CGPA: 8.06 / 10'
  },
  {
    school: 'Sri Medhavi Jr. College',
    degree: 'Intermediate (MPC)',
    period: '2020 – 2022',
    description: 'Advanced foundation in Mathematics, Physics, and Chemistry.',
    grade: 'Percentage: 77%'
  },
  {
    school: 'Shastha Grammar School',
    degree: 'SSC',
    period: '2020',
    description: 'Secondary School Certificate.',
    grade: 'CGPA: 9.8 / 10'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-16 md:mb-24">Learning <br /><span className="text-white/30 tracking-tight">Timeline</span></h2>

        <div className="space-y-6 md:space-y-12 max-w-5xl">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 relative group hover:border-white/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-[0.6rem] font-black tracking-widest uppercase mb-6">
                    {item.period}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-black mb-4 tracking-tighter uppercase leading-[1.1] md:leading-[0.9] text-white group-hover:text-white/70 transition-colors">
                    {item.school}
                  </h3>
                  <p className="text-lg md:text-2xl font-bold text-white/50 mb-6">{item.degree}</p>
                  <p className="text-white/40 text-base md:text-xl max-w-2xl leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="text-xs font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                    {item.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
