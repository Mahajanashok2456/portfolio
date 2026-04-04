'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaSquareArrowUpRight, FaXmark, FaDesktop, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const fallbackClients = [
  {
    title: 'Relicus',
    subtitle: 'Brand Identity',
    description: 'A modern brand/product-focused website designed with a strong visual identity and performance-first architecture.',
    link: 'https://www.relicus.in/',
    image: '/relicus-preview.png',
    tags: ['React', 'Modern UI/UX', 'Responsive', 'SEO']
  },
  {
    title: '1x Urban Services',
    subtitle: 'Home Services Platform',
    description: 'A comprehensive home services marketplace in Hyderabad offering deep cleaning, pest control, and maintenance with a seamless booking experience.',
    link: 'https://1xurbanservices.com',
    image: null,
    tags: ['React', 'Next.js', 'Service Booking', 'SEO']
  },
  {
    title: 'TRYITTECH',
    subtitle: 'IT Staffing & Recruitment',
    description: 'A professional staffing and IT recruitment platform designed to connect top-tier talent with industry-leading organizations through strategic headhunting.',
    link: 'https://www.tryittech.in/',
    image: null,
    tags: ['Full Stack', 'Recruitment Portal', 'Modern UI', 'Responsive']
  }
];

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeUrl, setActiveUrl] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch('/api/clients');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setClients(data.data);
        } else {
          setClients(fallbackClients);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
        setClients(fallbackClients);
      }
      setLoading(false);
    };
    fetchClients();
  }, []);

  if (loading) return null;

  return (
    <section id="clients" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-minimal">Client Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 mb-8 border border-black/5 group-hover:border-black/10 transition-colors">
                {client.image ? (
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={client.image}
                      alt={client.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : client.link && client.link !== '#' ? (
                  <div className="absolute inset-0 pointer-events-none transition-all duration-700 scale-[0.25] origin-top-left w-[400%] h-[400%]">
                    <iframe
                      src={client.link}
                      className="w-full h-full border-none"
                      title={client.title}
                      loading="lazy"
                      scrolling="no"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-black/10 font-black text-4xl uppercase tracking-tighter">
                    {client.title}
                  </div>
                )}
                
                {/* Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <button
                    onClick={() => setActiveUrl(client.link)}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <FaDesktop /> Live Preview
                  </button>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <FaArrowUpRightFromSquare /> Open Link
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[0.6rem] md:text-xs font-bold text-black/40 uppercase tracking-[0.3em] mb-4 inline-block">{client.subtitle}</span>
                <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight uppercase leading-none">{client.title}</h3>
                <p className="text-black/60 text-base mb-8 leading-relaxed line-clamp-3">{client.description}</p>
                <div className="flex flex-wrap gap-3">
                  {client.tags.map((tag, idx) => (
                    <span key={idx} className="text-black/40 text-[0.6rem] md:text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {activeUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-black/5">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-bold text-black/40 uppercase tracking-widest truncate max-w-[200px] md:max-w-md">
                    {activeUrl}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/40 hover:text-black transition-colors"
                    title="Open in new tab"
                  >
                    <FaArrowUpRightFromSquare size={16} />
                  </a>
                  <button
                    onClick={() => setActiveUrl(null)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-black"
                  >
                    <FaXmark size={24} />
                  </button>
                </div>
              </div>

              {/* Iframe Content */}
              <div className="w-full h-[calc(100%-64px)] bg-gray-100">
                <iframe
                  src={activeUrl}
                  className="w-full h-full border-none shadow-inner"
                  title="Live Preview"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
