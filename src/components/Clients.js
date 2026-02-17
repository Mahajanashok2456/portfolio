'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const clients = [
  {
    title: 'Contenttora',
    subtitle: 'Digital Marketing Agency',
    description: 'A high-performance, animation-rich agency website built to showcase services, capture leads, and boost SEO.',
    image: '/contenttora-preview.png',
    link: 'https://www.contentoramedia.com/',
    tags: ['React', 'Framer Motion', 'GSAP', 'SEO']
  },
  {
    title: 'Relicus',
    subtitle: 'Brand Identity',
    description: 'A modern brand/product-focused website designed with a strong visual identity and performance-first architecture.',
    image: '/relicus-preview.png',
    link: 'https://www.relicus.in/',
    tags: ['React', 'Modern UI/UX', 'Responsive', 'SEO']
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-12 md:py-32 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-premium text-left mb-8 md:mb-16 uppercase">CLIENT <br /><span className="text-white/40 tracking-tight">PROJECTS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-[1000px]">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-40 md:h-64 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 md:top-6 md:right-6 w-9 h-9 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-base md:text-xl text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"
                >
                  <FaSquareArrowUpRight />
                </a>
              </div>

              <div className="p-5 md:p-10">
                <span className="text-[0.6rem] md:text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-1 md:mb-2 inline-block">{client.subtitle}</span>
                <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 tracking-tight">{client.title}</h3>
                <p className="text-white/70 text-sm md:text-lg mb-4 md:mb-8 leading-relaxed line-clamp-2">{client.description}</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {client.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[0.6rem] md:text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
