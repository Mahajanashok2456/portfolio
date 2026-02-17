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
    <section id="clients" className="py-32 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="section-title-premium">Trusted by Industry Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group glass-effect rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-primary/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main to-transparent opacity-40" />

                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0"
                >
                  <FaSquareArrowUpRight />
                </a>
              </div>

              <div className="p-10">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2 inline-block">{client.subtitle}</span>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{client.title}</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed line-clamp-2">{client.description}</p>
                <div className="flex flex-wrap gap-3">
                  {client.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
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
