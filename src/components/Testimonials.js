'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const testimonials = [
    {
        quote: "Mahajan delivered exceptional work — the AI integration was seamless and the code quality was outstanding.",
        name: "Alex Johnson",
        role: "Founder, TechFlow",
        rating: 5
    },
    {
        quote: "The RAG pipeline he built transformed how we handle internal documentation. Truly an expert in his field.",
        name: "Sarah Chen",
        role: "CTO, DataSphere",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-black border-t border-accent/20 fade-in-section">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <h2 className="section-title-premium text-left mb-16 md:mb-24">
                    Client <br />
                    <span className="text-white/35 tracking-tight">Testimonials</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:border-accent/40 transition-colors duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl leading-none font-serif text-white group-hover:text-accent transition-colors">”</div>

                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-8 relative z-10">
                                &quot;{item.quote}&quot;
                            </p>

                            <div>
                                <h4 className="text-lg font-bold text-white tracking-wide">{item.name}</h4>
                                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em]">More coming soon</p>
                </div>
            </div>
        </section>
    );
}
