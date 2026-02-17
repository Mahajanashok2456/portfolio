'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import ScrollFloat from './ScrollFloat';

const projects = [
    {
        title: 'PDF Toolkit',
        category: 'SaaS / Utility',
        description: 'Free, browser‑first PDF toolkit: organize pages, convert JPG/PDF/Word. API‑backed with streaming.',
        techStack: ['Next.js', 'Python', 'FastAPI', 'Vercel'],
        image: '/pdf-toolkit-preview.png',
        link: 'https://pdf-toolkit-beta.vercel.app/',
        featured: true
    },
    {
        title: 'AI Guru Multibot',
        category: 'Multimodal AI',
        description: 'Advanced multimodal AI assistant with self-learning, image understanding, and context-aware conversations.',
        techStack: ['React', 'Gemini API', 'MongoDB', 'Node.js'],
        image: '/ai-guru-preview.png',
        link: 'https://ai-guru-sage.vercel.app/',
        featured: true
    },
    {
        title: 'Mitra - AI Therapist',
        category: 'Healthcare / RAG',
        description: 'Empathetic AI therapist inspired by Mahabharata & Ramayana with RAG pipeline using Gemini 2.5 Flash.',
        techStack: ['RAG', 'LangChain', 'Vector DB', 'Next.js'],
        image: '/mitra-preview.png',
        link: 'https://mitra-silk.vercel.app/',
        featured: true
    },
    {
        title: 'Mahajan’s Store Management',
        category: 'Inventory System',
        description: 'Full-stack inventory system with real-time tracking, profit calcs, low-stock alerts, and analytics.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        image: '/store-preview.png',
        link: '#',
        featured: false
    },
    {
        title: 'Expenso - Expense Tracker',
        category: 'FinTech',
        description: 'Privacy-first expense tracker with CRUD, analytics, and export options (PDF/CSV/JSON).',
        techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
        image: '/expenso-preview.png',
        link: '#',
        featured: false
    },
    {
        title: 'Echoes of Mahajan',
        category: 'Content Platform',
        description: 'Quotes & poetry platform with SEO, AdSense integration, and dynamic admin dashboard.',
        techStack: ['Next.js', 'Sanity CMS', 'SEO', 'Tailwind'],
        image: '/echoes-preview.png',
        link: '#',
        featured: false
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-12 md:py-24 bg-black border-t border-accent/20 fade-in-section">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="w-full md:w-auto flex flex-col items-start gap-0">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="m-0 leading-[0.8]"
                            textClassName="text-white uppercase tracking-tighter text-left"
                        >
                            FEATURED
                        </ScrollFloat>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="m-0 leading-[0.8]"
                            textClassName="text-white uppercase tracking-tighter text-left"
                        >
                            PROJECTS
                        </ScrollFloat>
                    </div>
                    <a href="https://github.com/Mahajanashok2456" target="_blank" className="text-sm md:text-base font-bold border-b border-accent text-accent pb-1 hover:text-white hover:border-white transition-all w-fit uppercase tracking-widest shrink-0 mb-4">
                        View GitHub Archive
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative flex flex-col gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Card Image Container */}
                            <a href={project.link} target="_blank" className="block relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,191,255,0.1)]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Overlay Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="px-6 py-3 bg-accent text-black font-bold uppercase tracking-widest rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project <FaArrowRight />
                                    </div>
                                </div>
                            </a>

                            {/* Content */}
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[0.6rem] font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded text-white/60">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-[0.6rem] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                                            {tech}
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
