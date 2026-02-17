'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaBrain, FaRobot, FaCogs, FaChartLine } from 'react-icons/fa6';

const faqs = [
    { q: "How much does a custom GenAI app cost?", a: "Custom Generative AI applications start from $3,000 for MVPs and scale based on complexity, data volume, and integration requirements. I provide fixed-price or milestone-based billing." },
    { q: "Can you fine-tune Llama 3 on my data?", a: "Yes. I specialize in fine-tuning open-source LLMs (Llama 3, Mistral, Gemma) on custom datasets using LoRA/QLoRA techniques for domain-specific performance." },
    { q: "How long does it take to build a GenAI solution?", a: "An MVP typically takes 4-6 weeks. Full production systems with testing, monitoring, and deployment take 8-12 weeks depending on scope." },
    { q: "Do you support ongoing maintenance?", a: "Absolutely. I offer retainer-based support for model monitoring, drift detection, prompt optimization, and feature enhancements." },
];

const services = [
    { icon: <FaBrain />, title: "Custom LLM Integration", desc: "Seamlessly integrate GPT-4, Gemini, Claude, or open-source models into your existing business workflows and applications." },
    { icon: <FaRobot />, title: "Fine-Tuning Services", desc: "Domain-specific fine-tuning using LoRA, QLoRA, and full parameter techniques to make models experts in your industry." },
    { icon: <FaCogs />, title: "GenAI Consulting", desc: "Strategic consulting to identify high-ROI AI opportunities, select the right models, and design scalable architectures." },
    { icon: <FaChartLine />, title: "Production Deployment", desc: "End-to-end deployment with monitoring, A/B testing, cost optimization, and auto-scaling for enterprise workloads." },
];

export default function GenerativeAIDevelopment() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero */}
            <section className="relative py-32 md:py-44 px-6 md:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8 font-medium">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">AI Development Services</p>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                            Enterprise-Grade<br />
                            <span className="text-white/30">Generative AI Development</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-medium mb-10">
                            Build custom Generative AI solutions with a specialized engineer. Text, image, and data generation models integrated into your business workflows.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                            Start a Project <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">What I <span className="text-white/30">Deliver</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-2xl text-indigo-400 mb-4">{s.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{s.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Tech <span className="text-white/30">Stack</span></h2>
                    <div className="flex flex-wrap gap-3">
                        {["OpenAI GPT-4", "Google Gemini", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "Hugging Face", "PyTorch", "FastAPI", "Next.js", "Vercel AI SDK", "Docker"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm font-bold text-white/60 bg-white/[0.03]">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">Frequently <span className="text-white/30">Asked</span></h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="text-lg font-black mb-2">{faq.q}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-16 border-t border-white/5 text-center">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Ready to Build<br /><span className="text-white/30">With AI?</span></h2>
                    <p className="text-white/50 mb-10 text-lg">Let&apos;s discuss how Generative AI can transform your business.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
