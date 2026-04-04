'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RotatingText from './RotatingText';
import { useEffect, useState } from 'react';

const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

const FloatingIcons = () => {
  const icons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: 28, delay: 0, duration: 18, x: "3%", y: "15%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: 32, delay: 2, duration: 22, x: "92%", y: "12%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", size: 24, delay: 4, duration: 20, x: "5%", y: "75%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: 26, delay: 1, duration: 19, x: "93%", y: "65%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", size: 24, delay: 3, duration: 21, x: "88%", y: "88%", className: "invert" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", size: 28, delay: 5, duration: 24, x: "4%", y: "45%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", size: 30, delay: 2, duration: 26, x: "90%", y: "40%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", size: 26, delay: 6, duration: 28, x: "8%", y: "90%" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden lg:block">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute opacity-[0.12] ${icon.className || ''}`}
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -25, 10, -35, 0],
            x: [0, 15, -10, 8, 0],
            rotate: [0, 8, -5, 6, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <div className="drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
            <Image
              src={icon.src}
              alt={`${icon.src.split('/').slice(-2, -1)[0]} logo — used by Mahajan Ashok freelance AI engineer`}
              width={icon.size}
              height={icon.size}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/site-config?section=hero');
        const data = await res.json();
        if (data.success && data.data) {
          setConfig(data.data);
        }
      } catch (error) {
        console.error('Error fetching hero config:', error);
      }
    };
    fetchConfig();
  }, []);

  const heading = config?.heading || "FULL STACK DEV & <br className='hidden sm:block' /> AI ENGINEER";
  const subheading = config?.subheading || "Building scalable SaaS solutions and intelligent AI pipelines with modern technologies.";
  const tags = config?.tags || ['PYTHON', 'REACT', 'NEXT.JS', 'FASTAPI', 'AI / ML', 'RAG', 'MONGODB', 'LLMs'];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white px-6 md:px-16 lg:px-24 pt-24 pb-16">

      <div className="max-w-[1000px] w-full mx-auto text-center z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center mb-8">
            <RotatingText
              texts={tags}
              mainClassName="text-black font-bold uppercase tracking-[0.3em] text-xs md:text-sm"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>
          
          <p className="text-xs md:text-sm font-bold text-black/40 uppercase tracking-[0.5em] mb-6">
            Hi, I&apos;m Mahajan Ashok
          </p>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-black tracking-tighter mb-10 uppercase leading-[0.9] text-center"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          
          <p className="text-lg md:text-2xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {subheading}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-black/30 mb-16">
            <span>1+ Years Experience</span>
            <span className="w-1 h-1 bg-black/20 rounded-full"></span>
            <span>20+ Projects Shipped</span>
            <span className="w-1 h-1 bg-black/20 rounded-full"></span>
            <span>Available for Freelance</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/projects"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:bg-black/80"
            >
              View My Projects
            </a>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 border border-black/10 text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:border-black"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
