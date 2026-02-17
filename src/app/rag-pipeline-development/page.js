'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaDatabase, FaFileLines, FaShieldHalved, FaBolt } from 'react-icons/fa6';

const faqs = [
    { q: "What is RAG in AI?", a: "Retrieval-Augmented Generation (RAG) is a technique that enhances LLMs by retrieving relevant documents from a knowledge base before generating responses, dramatically improving accuracy and reducing hallucinations." },
    { q: "Why use RAG over fine-tuning?", a: "RAG is ideal when your data changes frequently, as it doesn't require retraining. Fine-tuning is better for style/behavior changes. Often, a hybrid approach delivers the best results." },
    { q: "Which vector databases do you use?", a: "I work with Pinecone, ChromaDB, Weaviate, Qdrant, and MongoDB Atlas Vector Search depending on your scale, budget, and infrastructure requirements." },
    { q: "Can RAG work with private/internal documents?", a: "Absolutely. I build secure RAG systems that process internal PDFs, docs, spreadsheets, and databases while keeping your data private and compliant." },
];

const services = [
    { icon: <FaDatabase />, title: "Vector Database Setup", desc: "Design and deploy optimized vector stores using Pinecone, ChromaDB, or MongoDB Atlas Vector Search for lightning-fast semantic retrieval." },
    { icon: <FaFileLines />, title: "Document Ingestion Systems", desc: "Build robust data pipelines that parse, chunk, embed, and index PDFs, docs, web pages, and databases for comprehensive knowledge retrieval." },
    { icon: <FaShieldHalved />, title: "Reducing LLM Hallucinations", desc: "Implement citation tracking, confidence scoring, and retrieval validation to ensure your AI provides accurate, source-backed answers." },
    { icon: <FaBolt />, title: "Hybrid Search Architecture", desc: "Combine dense vector search with sparse keyword search (BM25) for maximum retrieval accuracy across diverse query types." },
];

export default function RAGPipelineDevelopment() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            <section className="relative py-32 md:py-44 px-6 md:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15)_0%,transparent_60%)]" />
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8 font-medium">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em] mb-4">RAG Engineering</p>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                            Build Accurate, Data-Aware<br />
                            <span className="text-white/30">AI with RAG Pipelines</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-medium mb-10">
                            Enhance your LLM&apos;s accuracy with custom Retrieval-Augmented Generation pipelines. Expert in Pinecone, ChromaDB, and LangChain.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                            Get a RAG Audit <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Core <span className="text-white/30">Capabilities</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((s, i) => (
                            <motion.div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="text-2xl text-emerald-400 mb-4">{s.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{s.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Tech <span className="text-white/30">Stack</span></h2>
                    <div className="flex flex-wrap gap-3">
                        {["LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "Weaviate", "MongoDB Atlas", "OpenAI Embeddings", "Cohere", "FastAPI", "Redis", "Celery", "Docker"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm font-bold text-white/60 bg-white/[0.03]">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Frequently <span className="text-white/30">Asked</span></h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <h3 className="text-lg font-black mb-2">{faq.q}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5 text-center">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Need Accurate<br /><span className="text-white/30">AI Answers?</span></h2>
                    <p className="text-white/50 mb-10 text-lg">Let&apos;s build a RAG pipeline that makes your AI truly intelligent.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
