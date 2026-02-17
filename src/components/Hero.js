'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden bg-black px-6 md:px-16 lg:px-24 pt-40 pb-20 lg:py-0">
      {/* Smoke/Ink Effect Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left"
        >
          <p className="text-sm md:text-2xl font-black text-white/40 uppercase tracking-[0.4em] mb-4">
            Hi, I&apos;m Mahajan
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[1.1] lg:leading-[0.9]">
            AI ENGINEER & <br />
            <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">FULL STACK DEV</span>
          </h1>
          <p className="text-base md:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Innovative AI Engineer and Full Stack Developer specializing in FastAPI, React, and MongoDB. Experienced in designing RAG pipelines, integrating Generative Model APIs, and building scalable, human-centric AI systems.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <a
              href="#projects"
              className="group relative text-xl md:text-2xl font-black text-white uppercase tracking-tighter"
            >
              View My Projects
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-white transition-transform origin-left scale-x-100 group-hover:scale-x-110" />
            </a>
          </div>
        </motion.div>

        {/* Right Visual (3D Avatar Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] md:w-[500px] aspect-square">
            {/* Ink splat effect behind avatar */}
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full scale-125 -z-10" />

            {/* The profile image as a placeholder for the 3D avatar */}
            <div className="relative w-full h-full rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Mahajan Ashok"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 md:-top-10 md:-right-10 bg-white text-black px-3 py-1.5 md:px-6 md:py-4 rounded-xl md:rounded-3xl font-black text-[0.6rem] md:text-xl shadow-2xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              FREELANCER
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
