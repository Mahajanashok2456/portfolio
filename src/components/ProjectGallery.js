'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSquareArrowUpRight, FaGithub, FaDesktop, FaArrowUpRightFromSquare, FaXmark } from 'react-icons/fa6';
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
    },
    {
        title: '1x Urban Services',
        category: 'Full Stack',
        description: 'Comprehensive home services marketplace in Hyderabad with seamless booking and service tracking.',
        techStack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
        link: 'https://1xurbanservices.com',
        linkType: 'live'
    },
    {
        title: 'TRYITTECH',
        category: 'Full Stack',
        description: 'IT staffing and recruitment portal connecting top talent with industry leaders.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Responsive Design'],
        link: 'https://www.tryittech.in/',
        linkType: 'live'
    },
    {
        title: 'Venko Weddings',
        category: 'Web & Brand',
        description: 'Premium event planning portfolio featuring high-end gallery systems and elegant UI.',
        techStack: ['React', 'Framer Motion', 'GSAP', 'SEO'],
        link: 'https://venkoweddingplanners.com/',
        linkType: 'live'
    },
    {
        title: 'InspectPro',
        category: 'Full Stack',
        description: 'Structural audit platform using thermal imaging to identify hidden property risks.',
        techStack: ['React', 'Express', 'PDF Generation', 'Thermal Tech'],
        link: 'https://www.inspectpro.in/',
        linkType: 'live'
    },
    {
        title: 'Aira Lab Equipment',
        category: 'Web & Brand',
        description: 'Industrial manufacturing website for pharma lab furniture and safety systems.',
        techStack: ['React', 'UI/UX', 'Project Management', 'B2B'],
        link: 'https://www.airalabequipment.com/',
        linkType: 'live'
    },
    {
        title: 'Jaagruthi Investmart',
        category: 'Full Stack',
        description: 'Financial advisory portal with SIP calculators and secure wealth management tools.',
        techStack: ['React', 'Firebase', 'Financial APIs', 'Tailwind'],
        link: 'https://www.jaagruthiinvestmart.com/',
        linkType: 'live'
    },
    {
        title: 'Civil Jobs Hub',
        category: 'Full Stack',
        description: 'Specialized career portal for civil engineers with verified job listings and HR networking.',
        techStack: ['React', 'Next.js', 'Supabase', 'Job Board'],
        link: 'https://civiljobshub.com/',
        linkType: 'live'
    },
    {
        title: 'Thridha Interior Solutions',
        category: 'Web & Brand',
        description: 'High-end interior design platform featuring 3D visualization and turnkey project management.',
        techStack: ['React', '3D Tools', 'Portfolio', 'Modern UI'],
        link: 'https://www.thridha.co.in/',
        linkType: 'live'
    },
    {
        title: 'The Sky Technologies',
        category: 'Full Stack',
        description: 'Premier IT education and certification platform with personalized training modules.',
        techStack: ['React', 'LMS', 'Certification System', 'Tailwind'],
        link: 'https://www.theskytechnologies.com/',
        linkType: 'live'
    }
];

const filters = ['All', 'AI & ML', 'Full Stack', 'SaaS', 'Web & Brand'];

export default function ProjectGallery() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeUrl, setActiveUrl] = useState(null);

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="project-gallery" className="py-16 md:py-24 bg-white border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <h2 className="section-title-minimal mb-16">All Projects</h2>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-8">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={clsx(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative pb-1",
                                    activeFilter === filter
                                        ? "text-black border-b-2 border-black"
                                        : "text-black/40 hover:text-black"
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
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all duration-300 border-b border-transparent hover:border-black pb-1"
                    >
                        <FaGithub className="text-sm" />
                        <span>GitHub Archive</span>
                    </a>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title + index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={clsx(
                                    "group flex flex-col p-10 border border-black/5 hover:border-black/10 transition-all bg-gray-50/30 h-full",
                                    project.isPlaceholder && "opacity-50 pointer-events-none grayscale"
                                )}
                            >
                                <div className="mb-8 flex justify-between items-start">
                                    <span className="text-[0.6rem] font-bold text-black/30 border border-black/5 px-3 py-1 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    {!project.isPlaceholder && project.linkType === 'live' && (
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => setActiveUrl(project.link)}
                                                className="text-black/20 hover:text-black transition-colors"
                                                title="Live Preview"
                                            >
                                                <FaDesktop size={16} />
                                            </button>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black/20 hover:text-black transition-colors"
                                                title="Open in new tab"
                                            >
                                                <FaSquareArrowUpRight size={16} />
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-2xl font-black text-black mb-4 leading-none uppercase tracking-tighter">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-black/60 leading-relaxed mb-10 flex-grow font-medium">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 pt-8 border-t border-black/5">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
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
