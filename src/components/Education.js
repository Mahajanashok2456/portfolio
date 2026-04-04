'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fallbackEducation = [
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
  }
];

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch('/api/education');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setEducation(data.data);
        } else {
          setEducation(fallbackEducation);
        }
      } catch (error) {
        console.error('Error fetching education:', error);
        setEducation(fallbackEducation);
      }
      setLoading(false);
    };
    fetchEducation();
  }, []);

  if (loading) return null;

  return (
    <section id="education" className="py-24 md:py-48 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-minimal">Education</h2>

        <div className="mt-24 space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 border-b border-black/5 pb-16 last:border-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="md:col-span-1">
                <span className="text-black/40 font-bold text-xs uppercase tracking-[0.2em]">
                  {item.period}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight mb-4">
                  {item.school}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <p className="text-lg font-bold text-black/60 uppercase tracking-wider">{item.degree}</p>
                  <span className="w-1 h-1 bg-black/10 rounded-full"></span>
                  <span className="text-sm font-bold text-black/40 uppercase tracking-widest">{item.grade}</span>
                </div>
                <p className="text-black/60 text-lg leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
