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
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            <section className="relative py-32 md:py-44 px-6 md:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(34,197,94,0.15)_0%,transparent_60%)]" />
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8 font-medium">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-black text-green-400 uppercase tracking-[0.3em] mb-4">Backend Engineering</p>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                            High-Performance<br />
                            <span className="text-white/30">FastAPI Backend Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-medium mb-10">
                            Scalable, async Python backends for AI applications. Expert FastAPI developer for machine learning inference and high-load systems.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                            Hire Backend Expert <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Backend <span className="text-white/30">Expertise</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((s, i) => (
                            <motion.div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="text-2xl text-green-400 mb-4">{s.icon}</div>
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
                        {["FastAPI", "Python", "SQLAlchemy", "Pydantic", "Celery", "Redis", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS Lambda", "GitHub Actions"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm font-bold text-white/60 bg-white/[0.03]">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 border-t border-white/5 text-center">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Need a Scalable<br /><span className="text-white/30">Backend?</span></h2>
                    <p className="text-white/50 mb-10 text-lg">Let&apos;s architect a backend that handles your growth.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
