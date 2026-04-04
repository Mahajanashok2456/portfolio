'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaComments, FaBrain, FaGlobe, FaPlug } from 'react-icons/fa6';

const services = [
    { icon: <FaComments />, title: "Multi-turn Conversation", desc: "Build chatbots with deep conversation memory that maintain context across sessions, understand follow-ups, and deliver coherent multi-turn dialogues." },
    { icon: <FaBrain />, title: "Knowledge Base Integration", desc: "Connect your chatbot to internal documents, databases, and APIs so it answers from your actual data—not generic training data." },
    { icon: <FaGlobe />, title: "Omni-channel Deployment", desc: "Deploy AI assistants across web, WhatsApp, Slack, Discord, and custom apps with unified conversation history and analytics." },
    { icon: <FaPlug />, title: "Tool & API Integration", desc: "Empower your chatbot to take actions: book appointments, query databases, process payments, and trigger workflows autonomously." },
];

export default function AIChatbotDevelopment() {
    return (
        <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
            <section className="relative py-32 md:py-48 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors mb-16 font-bold uppercase tracking-widest">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-bold text-black/40 uppercase tracking-[0.5em] mb-6">AI Chatbot Services</p>
                        <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
                            Intelligent AI Chatbots<br />
                            <span className="text-black/10">That Understand Context</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-black/60 max-w-2xl leading-relaxed font-medium mb-16">
                            Go beyond basic bots. Context-aware, memory-retaining AI chatbots using ChatGPT/Gemini APIs for customer support &amp; sales.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                            Build My Chatbot <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {services.map((s, i) => (
                            <motion.div key={i} className="p-10 border border-black/5 bg-gray-50/30 hover:border-black/10 transition-all" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="text-2xl text-black mb-6">{s.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h3>
                                <p className="text-black/60 text-base leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Tech Stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {["OpenAI GPT-4", "Google Gemini", "LangChain", "FastAPI", "Next.js", "WebSocket", "Redis", "MongoDB", "Pinecone", "WhatsApp API", "Slack SDK", "Vercel"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 border border-black/5 text-xs font-bold text-black/40 bg-gray-50/30 uppercase tracking-widest">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5 text-center">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10">Ready for an<br /><span className="text-black/10">AI Assistant?</span></h2>
                    <p className="text-black/60 mb-16 text-xl md:text-2xl max-w-2xl mx-auto">Let&apos;s build a chatbot that converts visitors into customers.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
