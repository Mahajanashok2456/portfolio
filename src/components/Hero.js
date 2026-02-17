'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RotatingText from './RotatingText';

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
              alt="Tech Icon"
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
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden bg-black px-6 md:px-16 lg:px-24 pt-20 pb-12 lg:py-0">

      {/* Dynamic Floating Icons Background */}
      <FloatingIcons />

      {/* Smoke/Ink Effect Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left overflow-hidden"
        >
          <div className="flex justify-center lg:justify-start mb-6">
            <RotatingText
              texts={['PYTHON', 'REACT', 'NEXT.JS', 'FASTAPI', 'AI / ML', 'RAG', 'MONGODB', 'LLMs']}
              mainClassName="px-4 py-2 bg-accent text-black font-black uppercase tracking-widest text-xs md:text-sm rounded-none"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          <p className="text-sm md:text-2xl font-black text-white/40 uppercase tracking-[0.4em] mb-4">
            Hi, I&apos;m Mahajan
          </p>
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-none lg:leading-[0.9]">
            AI ENGINEER & <br />
            <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">FULL STACK DEV</span>
          </h1>
          <p className="text-base md:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
            I build AI-powered products that ship fast and scale — from RAG pipelines to full-stack web apps.
          </p>

          <div className="flex items-center gap-4 text-[0.6rem] md:text-xs font-black uppercase tracking-widest text-white/40 mb-10">
            <span>3+ Years Experience</span>
            <span className="text-accent">•</span>
            <span>20+ Projects Shipped</span>
            <span className="text-accent">•</span>
            <span>Available for Freelance</span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <a
              href="/projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-black uppercase tracking-tighter text-lg md:text-xl overflow-hidden hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>
          </div>
        </motion.div>

        {/* Right Visual — 3D Interactive Lanyard Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-[500px] md:h-[800px]">
            {/* Glow effect behind the lanyard */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.15)_0%,transparent_60%)] blur-[60px] scale-110 -z-10" />
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} cardImage="/profile.jpg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
