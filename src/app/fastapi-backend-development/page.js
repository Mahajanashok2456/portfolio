'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaBolt, FaServer, FaCubes, FaGaugeHigh } from 'react-icons/fa6';

const services = [
    { icon: <FaBolt />, title: "Async Architecture", desc: "Build lightning-fast async APIs that handle thousands of concurrent requests with Python's asyncio and FastAPI's native async support." },
    { icon: <FaServer />, title: "ML Model Serving", desc: "Deploy machine learning models as production-ready API endpoints with batching, caching, GPU optimization, and auto-scaling." },
    { icon: <FaCubes />, title: "Microservices Design", desc: "Architect scalable microservice systems with message queues, service discovery, and container orchestration for complex AI backends." },
    { icon: <FaGaugeHigh />, title: "Performance Optimization", desc: "Profile and optimize API response times, database queries, and memory usage to achieve sub-100ms latencies at scale." },
];

export default function FastAPIBackendDevelopment() {
    return (
        <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
            <section className="relative py-32 md:py-48 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors mb-16 font-bold uppercase tracking-widest">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-bold text-black/40 uppercase tracking-[0.5em] mb-6">Backend Engineering</p>
                        <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
                            High-Performance<br />
                            <span className="text-black/10">FastAPI Backend Services</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-black/60 max-w-2xl leading-relaxed font-medium mb-16">
                            Scalable, async Python backends for AI applications. Expert FastAPI developer for machine learning inference and high-load systems.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                            Hire Backend Expert <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Backend Expertise</h2>
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
                        {["FastAPI", "Python", "SQLAlchemy", "Pydantic", "Celery", "Redis", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS Lambda", "GitHub Actions"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 border border-black/5 text-xs font-bold text-black/40 bg-gray-50/30 uppercase tracking-widest">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5 text-center">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10">Need a Scalable<br /><span className="text-black/10">Backend?</span></h2>
                    <p className="text-black/60 mb-16 text-xl md:text-2xl max-w-2xl mx-auto">Let&apos;s architect a backend that handles your growth.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
