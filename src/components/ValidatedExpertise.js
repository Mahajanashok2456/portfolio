'use client';

import InfiniteMenu from './InfiniteMenu';

const items = [
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: 'https://www.python.org/',
        title: 'Python',
        description: 'Expertise in building scalable backend systems, data pipelines, and AI models.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: 'https://react.dev/',
        title: 'React',
        description: 'Building dynamic, high-performance user interfaces with modern React patterns.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/',
        title: 'Next.js',
        description: 'Developing SEO-optimized, server-side rendered applications for production.'
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
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        link: 'https://www.docker.com/',
        title: 'Docker',
        description: 'Containerizing applications for consistent deployment across environments.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        description: 'Ensuring type safety and maintainability in large JavaScript codebases.'
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
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/',
        title: 'PostgreSQL',
        description: 'Managing relational databases with complex queries and transactions.'
    }
];

export default function ValidatedExpertise() {
    return (
        <section id="validated-expertise" className="py-12 md:py-24 bg-black border-t border-accent/20 fade-in-section overflow-hidden">
            <div className="w-full px-6 md:px-16">
                <h2 className="section-title-premium text-left mb-8 md:mb-16">
                    Validated <br />
                    <span className="text-white/40 tracking-tight">Expertise</span>
                </h2>

                <div style={{ height: '600px', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <InfiniteMenu items={items} scale={1} />

                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 pointer-events-none">
                        <p className="text-white/30 text-[0.6rem] uppercase tracking-widest font-black">
                            Drag to Explore
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
