'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import InfiniteMenu from './InfiniteMenu';

const items = [
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/',
        title: 'Next.js',
        description: 'Developing SEO-optimized, server-side rendered applications for production.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: 'https://react.dev/',
        title: 'React',
        description: 'Building dynamic, high-performance user interfaces with modern React patterns.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        description: 'Ensuring type safety and maintainability in large JavaScript codebases.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: 'https://www.python.org/',
        title: 'Python',
        description: 'Expertise in building scalable backend systems, data pipelines, and AI models.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        link: 'https://fastapi.tiangolo.com/',
        title: 'FastAPI',
        description: 'Creating high-performance APIs with automatic documentation and type safety.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        link: 'https://www.mongodb.com/',
        title: 'MongoDB',
        description: 'Designing flexible schemas and optimizing queries for large-scale data.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        link: 'https://pytorch.org/',
        title: 'PyTorch',
        description: 'Developing and training custom deep learning models for computer vision and NLP.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        link: 'https://git-scm.com/',
        title: 'Git',
        description: 'Proficient in version control, branching strategies, and collaborative workflows.'
    }
];

export default function ValidatedExpertise() {
    return (
        <section id="validated-expertise" className="py-16 md:py-24 bg-white border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <h2 className="section-title-minimal">Technical Expertise</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mt-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col p-8 border border-black/5 hover:border-black/10 transition-colors bg-gray-50/30"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Image
                                    src={item.image}
                                    alt={`${item.title} logo`}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                />
                                <h3 className="text-xl font-black uppercase tracking-tight text-black">{item.title}</h3>
                            </div>
                            <p className="text-black/60 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
