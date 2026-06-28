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
        <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
            <section className="relative py-32 md:py-48 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors mb-16 font-bold uppercase tracking-widest">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-bold text-black/40 uppercase tracking-[0.5em] mb-6">RAG Engineering</p>
                        <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
                            Build Accurate, Data-Aware<br />
                            <span className="text-black/10">AI with RAG Pipelines</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-black/60 max-w-2xl leading-relaxed font-medium mb-16">
                            Enhance your LLM&apos;s accuracy with custom Retrieval-Augmented Generation pipelines. Building with Pinecone, ChromaDB, and LangChain.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                            Get a RAG Audit <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Core Capabilities</h2>
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
                        {["LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "Weaviate", "MongoDB Atlas", "OpenAI Embeddings", "Cohere", "FastAPI", "Redis", "Celery", "Docker"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 border border-black/5 text-xs font-bold text-black/40 bg-gray-50/30 uppercase tracking-widest">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Frequently Asked</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} className="p-8 border border-black/5 bg-gray-50/30" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{faq.q}</h3>
                                <p className="text-black/60 text-base leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5 text-center">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10">Need Accurate<br /><span className="text-black/10">AI Answers?</span></h2>
                    <p className="text-black/60 mb-16 text-xl md:text-2xl max-w-2xl mx-auto">Let&apos;s build a RAG pipeline that makes your AI truly intelligent.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
