'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';

const highlights = [
    "RAG Pipeline Architecture & Deployment",
    "Agentic AI Workflows (LangGraph, CrewAI)",
    "Full Stack AI SaaS (Next.js + FastAPI)",
    "Custom LLM Integration & Fine-Tuning",
    "Vector Database Systems (Pinecone, ChromaDB)",
    "Production ML Model Serving",
    "AI Chatbot Development with Memory",
    "Prompt Engineering & Optimization",
];

const process = [
    { step: "01", title: "Discovery Call", desc: "We discuss your business goals, technical requirements, and timeline to ensure perfect alignment." },
    { step: "02", title: "Architecture Design", desc: "I design the system architecture, select the right tech stack, and create a detailed implementation plan." },
    { step: "03", title: "Agile Development", desc: "Weekly sprints with demos. You see progress every week and can provide feedback in real-time." },
    { step: "04", title: "Launch & Support", desc: "Production deployment with monitoring, documentation, and optional retainer for ongoing support." },
];

export default function HireAIEngineer() {
    return (
        <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
            <section className="relative py-32 md:py-48 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors mb-16 font-bold uppercase tracking-widest">
                        ← Back to Portfolio
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <p className="text-xs font-bold text-black/40 uppercase tracking-[0.5em] mb-6">Hire Me</p>
                            <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
                                Partner with a<br />
                                <span className="text-black/10">World-Class AI Engineer</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-black/60 max-w-xl leading-relaxed font-medium mb-16">
                                Looking for an expert AI Engineer? I build RAG systems, AI agents, and full-stack apps. Available for contract and freelance projects worldwide.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                                    Book a Call <FaArrowRight />
                                </a>
                                <a href="/#projects" className="inline-flex items-center gap-3 px-10 py-5 border border-black/10 text-black font-bold uppercase tracking-widest hover:border-black transition-colors text-sm">
                                    View Portfolio
                                </a>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto overflow-hidden border border-black/5 bg-gray-50/30">
                                <Image src="/profile.jpg" alt="Mahajan Ashok freelance AI engineer and full stack developer from Hyderabad India" fill className="object-cover object-top grayscale" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialization */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Specialization</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((h, i) => (
                            <motion.div key={i} className="flex items-center gap-6 p-8 border border-black/5 bg-gray-50/30" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                                <FaCheck className="text-black/20 flex-shrink-0" />
                                <span className="font-bold text-lg uppercase tracking-tight text-black">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">My Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {process.map((p, i) => (
                            <motion.div key={i} className="p-10 border border-black/5 bg-gray-50/30" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <span className="text-6xl font-black text-black/5 block mb-8 leading-none">{p.step}</span>
                                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{p.title}</h3>
                                <p className="text-black/60 text-base leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5 text-center">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10">Let&apos;s Build<br /><span className="text-black/10">Something Great</span></h2>
                    <p className="text-black/60 mb-16 text-xl md:text-2xl max-w-2xl mx-auto">Available for contract, freelance, and consulting projects worldwide.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                        Start a Conversation <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
