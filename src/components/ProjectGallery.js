'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSquareArrowUpRight, FaGithub } from 'react-icons/fa6';
import { clsx } from 'clsx';
import Link from 'next/link';

const projects = [
    {
        title: 'PDF Toolkit',
        category: 'SaaS',
        description: 'Free, browser‑first PDF toolkit: organize pages, convert JPG/PDF/Word. API‑backed with streaming.',
        techStack: ['Next.js', 'Python', 'FastAPI', 'Vercel'],
        link: 'https://pdf-toolkit-beta.vercel.app/',
        linkType: 'live'
    },
    {
        title: 'AI Guru Multibot',
        category: 'AI & ML',
        description: 'Advanced multimodal AI assistant with self-learning, image understanding, and context-aware conversations.',
        techStack: ['React', 'Gemini API', 'MongoDB', 'Node.js'],
        link: 'https://ai-guru-sage.vercel.app/',
        linkType: 'live'
    },
    {
        title: 'Mitra - AI Therapist',
        category: 'AI & ML',
        description: 'Empathetic AI therapist inspired by Mahabharata & Ramayana with RAG pipeline using Gemini 2.5 Flash.',
        techStack: ['RAG', 'LangChain', 'Vector DB', 'Next.js'],
        link: 'https://mitra-silk.vercel.app/',
        linkType: 'live'
    },
    {
        title: 'Mahajan’s Store Management',
        category: 'Full Stack',
        description: 'Full-stack inventory system with real-time tracking, profit calcs, low-stock alerts, and analytics.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: '#',
        linkType: 'none'
    },
    {
        title: 'Expenso - Expense Tracker',
        category: 'Full Stack',
        description: 'Privacy-first expense tracker with CRUD, analytics, and export options (PDF/CSV/JSON).',
        techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
        link: '#',
        linkType: 'none'
    },
    {
        title: 'Echoes of Mahajan',
        category: 'Web & Brand',
        description: 'Quotes & poetry platform with SEO, AdSense integration, and dynamic admin dashboard.',
        techStack: ['Next.js', 'Sanity CMS', 'SEO', 'Tailwind'],
        link: '#',
        linkType: 'none'
    }
];

const filters = ['All', 'AI & ML', 'Full Stack', 'SaaS', 'Web & Brand'];

export default function ProjectGallery() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="project-gallery" className="py-12 md:py-24 bg-black border-t border-accent/20 fade-in-section">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">

                <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={clsx(
                                    "px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300",
                                    activeFilter === filter
                                        ? "bg-accent border-accent text-black scale-105"
                                        : "bg-transparent border-white/20 text-white hover:border-white hover:bg-white/5"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Archive Link */}
                    <a
                        href="https://github.com/Mahajanashok2456"
                        target="_blank"
                        className="group flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/20 text-xs font-black uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-300"
                    >
                        <FaGithub className="text-lg" />
                        <span>View Full Archive on GitHub</span>
                        <FaSquareArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title + index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={clsx(
                                    "group relative p-8 rounded-xl border bg-[#0f0f0f] border-[#222] flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_8px_30px_rgba(0,191,255,0.15)]",
                                    project.isPlaceholder && "opacity-50 pointer-events-none grayscale"
                                )}
                            >
                                <div>
                                    <div className="mb-6 flex justify-between items-start">
                                        <span className="text-[0.65rem] font-black text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-[#999] leading-relaxed mb-6 font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="text-[0.6rem] font-bold text-[#aaa] bg-[#333] px-2.5 py-1 rounded uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {!project.isPlaceholder && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="flex items-center justify-end gap-2 text-sm font-bold text-white group-hover:text-accent transition-colors uppercase tracking-widest"
                                        >
                                            {project.linkType === 'github' ? 'GitHub' : 'View Project'} <FaSquareArrowUpRight />
                                        </a>
                                    )}
                                    {project.isPlaceholder && (
                                        <div className="flex items-center justify-end gap-2 text-sm font-bold text-white/30 uppercase tracking-widest cursor-not-allowed">
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
