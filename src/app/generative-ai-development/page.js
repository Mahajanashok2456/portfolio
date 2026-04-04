'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaBrain, FaRobot, FaGear, FaChartLine } from 'react-icons/fa6';

const faqs = [
    { q: "How much does a custom GenAI app cost?", a: "Custom Generative AI applications start from $3,000 for MVPs and scale based on complexity, data volume, and integration requirements. I provide fixed-price or milestone-based billing." },
    { q: "Can you fine-tune Llama 3 on my data?", a: "Yes. I specialize in fine-tuning open-source LLMs (Llama 3, Mistral, Gemma) on custom datasets using LoRA/QLoRA techniques for domain-specific performance." },
    { q: "How long does it take to build a GenAI solution?", a: "An MVP typically takes 4-6 weeks. Full production systems with testing, monitoring, and deployment take 8-12 weeks depending on scope." },
    { q: "Do you support ongoing maintenance?", a: "Absolutely. I offer retainer-based support for model monitoring, drift detection, prompt optimization, and feature enhancements." },
];

const services = [
    { icon: <FaBrain />, title: "Custom LLM Integration", desc: "Seamlessly integrate GPT-4, Gemini, Claude, or open-source models into your existing business workflows and applications." },
    { icon: <FaRobot />, title: "Fine-Tuning Services", desc: "Domain-specific fine-tuning using LoRA, QLoRA, and full parameter techniques to make models experts in your industry." },
    { icon: <FaGear />, title: "GenAI Consulting", desc: "Strategic consulting to identify high-ROI AI opportunities, select the right models, and design scalable architectures." },
    { icon: <FaChartLine />, title: "Production Deployment", desc: "End-to-end deployment with monitoring, A/B testing, cost optimization, and auto-scaling for enterprise workloads." },
];

export default function GenerativeAIDevelopment() {
    return (
        <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
            {/* Hero */}
            <section className="relative py-32 md:py-48 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors mb-16 font-bold uppercase tracking-widest">
                        ← Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs font-bold text-black/40 uppercase tracking-[0.5em] mb-6">AI Development Services</p>
                        <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
                            Enterprise-Grade<br />
                            <span className="text-black/10">Generative AI Development</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-black/60 max-w-2xl leading-relaxed font-medium mb-16">
                            Build custom Generative AI solutions with a specialized engineer. Text, image, and data generation models integrated into your business workflows.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                            Start a Project <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">What I Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                className="p-10 border border-black/5 bg-gray-50/30 hover:border-black/10 transition-all"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-2xl text-black mb-6">{s.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h3>
                                <p className="text-black/60 text-base leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Tech Stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {["OpenAI GPT-4", "Google Gemini", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "Hugging Face", "PyTorch", "FastAPI", "Next.js", "Vercel AI SDK", "Docker"].map((tech, i) => (
                            <span key={i} className="px-4 py-2 border border-black/5 text-xs font-bold text-black/40 bg-gray-50/30 uppercase tracking-widest">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="section-title-minimal mb-24">Frequently Asked</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="p-8 border border-black/5 bg-gray-50/30"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{faq.q}</h3>
                                <p className="text-black/60 text-base leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-48 px-6 md:px-16 border-t border-black/5 text-center">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10">Ready to Build<br /><span className="text-black/10">With AI?</span></h2>
                    <p className="text-black/60 mb-16 text-xl md:text-2xl max-w-2xl mx-auto">Let&apos;s discuss how Generative AI can transform your business.</p>
                    <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors text-sm">
                        Book a Strategy Call <FaArrowRight />
                    </a>
                </div>
            </section>
        </main>
    );
}
