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
        <section id="projects" className="py-12 md:py-32 bg-black border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-24 gap-6">
                    <h2 className="section-title-premium text-left mb-0">SaaS Prototypes <br /><span className="text-white/30 tracking-tight">& AI Implementations</span></h2>
                    <a href="https://github.com/Mahajanashok2456" target="_blank" className="text-sm md:text-xl font-bold border-b-2 border-white pb-1 hover:text-white/70 hover:border-white/70 transition-all w-fit">
                        Full Archive (GITHUB)
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] mb-4 md:mb-5 border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                <a href={project.link} target="_blank" className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-lg opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                                    <FaSquareArrowUpRight />
                                </a>
                            </div>

                            <div className="flex flex-col gap-1 px-1">
                                <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/40">{project.category}</span>
                                <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase group-hover:text-white/70 transition-colors leading-tight">
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
