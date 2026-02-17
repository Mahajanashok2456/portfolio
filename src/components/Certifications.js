'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWandMagicSparkles, FaBuilding, FaGoogle, FaChartLine, FaSalesforce, FaCode } from 'react-icons/fa6';
import { SiUipath, SiOracle } from 'react-icons/si';

const certs = [
  {
    icon: <FaSalesforce />,
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'Dec 2025',
    link: '#'
  },
  {
    icon: <SiUipath />,
    title: 'UiPath Automation Developer',
    issuer: 'UiPath',
    date: 'Oct 2025',
    link: '#'
  },
  {
    icon: <SiOracle />,
    title: 'OCI Generative AI Professional',
    issuer: 'Oracle',
    date: 'Sep 2025'
  },
  {
    icon: <FaWandMagicSparkles />,
    title: 'Gen AI & Prompt Engineering',
    issuer: 'Student Tribe',
    date: 'Sep 2025'
  },
  {
    icon: <FaBuilding />,
    title: 'AI Workplace Proficiency',
    issuer: 'Superhuman',
    date: 'Sep 2025'
  },
  {
    icon: <FaGoogle />,
    title: 'Build AI Apps with Gemini',
    issuer: 'Google Cloud',
    date: 'Apr 2025'
  },
  {
    icon: <FaGoogle />,
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'Apr 2025'
  },
  {
    icon: <FaCode />,
    title: 'Getting Started with AI',
    issuer: 'IBM',
    date: 'Feb 2025'
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    date: 'May 2024'
  },
  {
    icon: <FaCode />,
    title: 'IBM SkillsBuild Essentials',
    issuer: 'IBM',
    date: 'Oct 2025'
  },
  {
    icon: <FaCode />,
    title: 'Career Explorer Job Simulation',
    issuer: 'Forage',
    date: 'Aug 2025'
  },
  {
    icon: <FaCode />,
    title: 'N8N Crash Course',
    issuer: 'LetsUpgrade',
    date: 'Jul 2025'
  },
  {
    icon: <FaCode />,
    title: 'Tata GenAI Data Analytics',
    issuer: 'Forage',
    date: 'Jun 2025'
  },
  {
    icon: <FaCode />,
    title: 'Canva for Work',
    issuer: 'Canva',
    date: 'May 2025'
  },
  {
    icon: <FaCode />,
    title: 'CSS (Basics)',
    issuer: 'HackerRank',
    date: 'May 2025'
  },
  {
    icon: <FaCode />,
    title: 'GenAI 101 with Pieces',
    issuer: 'Pieces',
    date: 'May 2025'
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis with Python',
    issuer: 'LetsUpgrade',
    date: 'May 2025'
  },
  {
    icon: <FaChartLine />,
    title: 'Accenture Data Analytics',
    issuer: 'Forage',
    date: 'Feb 2025'
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certs : certs.slice(0, 6);

  return (
    <section id="certifications" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="section-title-premium text-left mb-16 md:mb-24">Validated <br /><span className="text-white/30 tracking-tight">Expertise</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {visibleCerts.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex flex-col h-full">
                  <div className="text-3xl text-black bg-white h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-2xl md:rounded-[2rem] mb-8 group-hover:scale-105 transition-transform">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-6 tracking-tighter uppercase leading-tight text-white line-clamp-2">{cert.title}</h3>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-[0.6rem] text-white/40 font-black uppercase tracking-widest">{cert.issuer}</p>
                    <p className="text-[0.6rem] text-white/20 font-black uppercase tracking-widest mt-1">{cert.date}</p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        className="mt-6 inline-block text-[0.6rem] font-black uppercase tracking-[0.2em] border-b-2 border-white pb-1 hover:text-white/70 hover:border-white/70 transition-all text-white"
                      >
                        Verification Registry
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[0.7rem] rounded-full hover:bg-white/80 transition-all cursor-pointer"
          >
            {showAll ? 'Collapse' : 'Explore Catalog'}
          </button>
        </div>
      </div>
    </section>
  );
}
