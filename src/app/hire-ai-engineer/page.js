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
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            <section className="relative py-32 md:py-44 px-6 md:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(251,191,36,0.1)_0%,transparent_60%)]" />
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8 font-medium">
                        ← Back to Portfolio
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <p className="text-xs font-black text-amber-400 uppercase tracking-[0.3em] mb-4">Hire Me</p>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                                Partner with a<br />
                                <span className="text-white/30">World-Class AI Engineer</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-medium mb-10">
                                Looking for an expert AI Engineer? I build RAG systems, AI agents, and full-stack apps. Available for contract and freelance projects worldwide.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                                    Book a Call <FaArrowRight />
                                </a>
                                <a href="/#projects" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">
                                    View Portfolio
                                </a>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
                            <div className="relative w-[400px] aspect-square mx-auto">
                                <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full" />
                                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10">
                                    <Image src="/profile.jpg" alt="Mahajan Ashok - AI Engineer" fill className="object-cover object-top grayscale" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">What I <span className="text-white/30">Specialize In</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {highlights.map((h, i) => (
                            <motion.div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                                <FaCheck className="text-amber-400 flex-shrink-0" />
                                <span className="font-bold text-sm">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">My <span className="text-white/30">Process</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((p, i) => (
                            <motion.div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <span className="text-4xl font-black text-white/10 block mb-3">{p.step}</span>
                                <h3 className="text-lg font-black uppercase mb-2">{p.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5 text-center">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Let&apos;s Build<br /><span className="text-white/30">Something Great</span></h2>
                    <p className="text-white/50 mb-10 text-lg">Available for contract, freelance, and consulting projects worldwide.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                        Start a Conversation <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
