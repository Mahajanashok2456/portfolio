'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import ScrollFloat from './ScrollFloat';
import { useEffect, useState } from 'react';

const fallbackProjects = [
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
    }
];

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                const data = await res.json();
                if (data.success && data.data && data.data.length > 0) {
                    setProjects(data.data);
                } else {
                    setProjects(fallbackProjects);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects(fallbackProjects);
            }
            setLoading(false);
        };
        fetchProjects();
    }, []);

    if (loading) return null;

    return (
        <section id="projects" className="py-16 md:py-24 bg-white border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <h2 className="section-title-minimal">Personal & Open Source Projects</h2>
                    <a href="https://github.com/Mahajanashok2456" target="_blank" className="text-xs font-bold border-b border-black pb-1 hover:opacity-60 transition-all w-fit uppercase tracking-widest mb-4">
                        View GitHub Archive
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Card Image Container */}
                            <div className="block relative aspect-[4/3] overflow-hidden bg-gray-50 mb-8 border border-black/5 group-hover:border-black/10 transition-colors">
                                 {project.image ? (
                                     <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ) : project.link && project.link !== '#' ? (
                                    <div className="absolute inset-0 pointer-events-none transition-all duration-700 scale-[0.25] origin-top-left w-[400%] h-[400%]">
                                        <iframe
                                            src={project.link}
                                            className="w-full h-full border-none"
                                            title={project.title}
                                            loading="lazy"
                                            scrolling="no"
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-black/10 font-black text-4xl uppercase tracking-tighter">
                                        {project.title}
                                    </div>
                                )}
                                
                                {/* Overlay with Button */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-black text-black tracking-tighter uppercase">
                                        {project.title}
                                    </h3>
                                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-black/40">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-black/60 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest border border-black/10 px-2 py-1">
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
