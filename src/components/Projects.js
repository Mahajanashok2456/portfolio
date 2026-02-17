'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const projects = [
    {
        title: 'PDF Toolkit',
        category: 'SaaS / Utility',
        description: 'Free, browser‑first PDF toolkit: organize pages, convert JPG/PDF/Word, and add passwords. API‑backed with streaming downloads.',
        image: '/pdf-toolkit-preview.png',
        link: 'https://pdf-toolkit-beta.vercel.app/',
        featured: true
    },
    {
        title: 'AI Guru Multibot',
        category: 'Multimodal AI',
        description: 'Advanced multimodal AI assistant with self-learning, image understanding, and context-aware conversations.',
        image: '/ai-guru-preview.png',
        link: 'https://ai-guru-sage.vercel.app/',
        featured: true
    },
    {
        title: 'Mitra - AI Therapist',
        category: 'Healthcare / RAG',
        description: 'Empathetic AI therapist inspired by Mahabharata & Ramayana with RAG pipeline using Gemini 2.5 Flash.',
        image: '/mitra-preview.png',
        link: 'https://mitra-silk.vercel.app/',
        featured: true
    },
    {
        title: 'Mahajan’s Store Management',
        category: 'Inventory System',
        description: 'Full-stack inventory system with real-time tracking, profit calcs, low-stock alerts, and analytics dashboards.',
        image: '/store-preview.png',
        link: '#',
        featured: false
    },
    {
        title: 'Expenso - Expense Tracker',
        category: 'FinTech',
        description: 'Privacy-first expense tracker with CRUD, analytics, and export options (PDF/CSV/JSON).',
        image: '/expenso-preview.png',
        link: '#',
        featured: false
    },
    {
        title: 'Echoes of Mahajan',
        category: 'Content Platform',
        description: 'Quotes & poetry platform with SEO, AdSense integration, and dynamic admin dashboard.',
        image: '/echoes-preview.png',
        link: '#',
        featured: false
    },
    {
        title: 'Galaxy Name Generator',
        category: 'Creative Tool',
        description: 'Creative name generator for sci-fi and fantasy universes.',
        image: '/galaxy-preview.png',
        link: '#',
        featured: false
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-black border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <h2 className="section-title-premium text-left mb-0">Selected <br /><span className="text-white/30 tracking-tight">Case Studies</span></h2>
                    <a href="https://github.com/Mahajanashok2456" target="_blank" className="text-lg md:text-xl font-bold border-b-2 border-white pb-1 hover:text-white/70 hover:border-white/70 transition-all w-fit">
                        Full Archive (GITHUB)
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] mb-6 md:mb-8 border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                <a href={project.link} target="_blank" className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center text-xl md:text-2xl opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                                    <FaSquareArrowUpRight />
                                </a>
                            </div>

                            <div className="flex flex-col gap-2 px-2">
                                <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-white/40">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase group-hover:text-white/70 transition-colors leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
