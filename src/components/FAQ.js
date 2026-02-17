'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa6';

const faqs = [
    {
        q: "What services do you offer?",
        a: "I specialize in AI Engineering (RAG Pipelines, Agentic Workflows, Generative AI), Full Stack Web Development (Next.js, React, FastAPI), and SaaS Product Development. I build end-to-end solutions from MVP to production."
    },
    {
        q: "What is your tech stack?",
        a: "My core stack includes Python (FastAPI, LangChain, PyTorch), JavaScript/TypeScript (React, Next.js), MongoDB, PostgreSQL, and deployment on Vercel/Railway/Docker. For AI, I work with OpenAI, Google Gemini, Hugging Face, and vector databases like Pinecone and ChromaDB."
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely! I work with clients globally across the US, EU, UK, and Asia. All communication is in English, and I use tools like Slack, Discord, and Google Meet for seamless collaboration across time zones."
    },
    {
        q: "What is a RAG Pipeline?",
        a: "RAG (Retrieval-Augmented Generation) is a technique that connects your LLM to a custom knowledge base. Instead of relying on generic training data, the AI retrieves relevant documents and generates accurate, source-backed responses. This drastically reduces hallucinations."
    },
    {
        q: "How long does a typical project take?",
        a: "A simple website takes 1-2 weeks. AI chatbots and RAG systems typically take 4-6 weeks for an MVP. Full SaaS products take 8-12 weeks depending on features and complexity. I provide weekly demos for transparency."
    },
    {
        q: "Do you provide ongoing support after launch?",
        a: "Yes, I offer retainer-based support plans that include bug fixes, feature updates, performance monitoring, and AI model optimization. Most clients opt for a monthly support plan after launch."
    },
    {
        q: "Can I see your previous work?",
        a: "Of course! Check out the Projects page for detailed case studies, or visit my GitHub for open-source contributions. I've built AI multimodal bots, SaaS tools, inventory systems, and client websites."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-12 md:py-32 bg-black border-t border-accent/20">
            <div className="max-w-[900px] mx-auto px-6 md:px-16">
                <h2 className="section-title-premium text-left mb-8 md:mb-16">Frequently <br /><span className="text-white/30 tracking-tight">Asked Questions</span></h2>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                            >
                                <span className="font-black text-sm md:text-base uppercase tracking-tight pr-4">{faq.q}</span>
                                <FaChevronDown className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/50 text-sm leading-relaxed font-medium">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
